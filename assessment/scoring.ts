import { readFileSync } from 'node:fs';
import * as yaml from 'js-yaml';

export interface AnswerOption {
  text: string;
  stage: number;
}

export interface Question {
  id: string;
  dimension: string;
  text: string;
  options: AnswerOption[];
  weight: number;
}

export interface QuestionsConfig {
  questions: Question[];
}

export interface AssessmentAnswer {
  questionId: string;
  selectedStage: number;
}

export interface DimensionScore {
  dimension: string;
  score: number;
  maxScore: number;
  weightedScore: number; // The computed average stage for this dimension
}

export interface AssessmentResult {
  overallStage: number;
  dimensions: DimensionScore[];
  strongestDimension: string;
  weakestDimension: string;
}

export class ScoringEngine {
  private questions: Question[];

  constructor(questionsYamlPath: string) {
    const fileContents = readFileSync(questionsYamlPath, 'utf8');
    const config = yaml.load(fileContents) as QuestionsConfig;
    this.questions = config.questions;
  }

  public calculateScore(answers: AssessmentAnswer[]): AssessmentResult {
    const dimensionMap = new Map<string, { totalWeight: number, weightedStageSum: number }>();

    for (const answer of answers) {
      const q = this.questions.find((q) => q.id === answer.questionId);
      if (!q) continue;

      const current = dimensionMap.get(q.dimension) || { totalWeight: 0, weightedStageSum: 0 };
      current.totalWeight += q.weight;
      current.weightedStageSum += (answer.selectedStage * q.weight);
      dimensionMap.set(q.dimension, current);
    }

    const dimensions: DimensionScore[] = [];
    let overallStageSum = 0;
    let overallWeight = 0;

    for (const [dim, data] of dimensionMap.entries()) {
      const weightedScore = data.totalWeight > 0 ? data.weightedStageSum / data.totalWeight : 0;
      dimensions.push({
        dimension: dim,
        score: data.weightedStageSum,
        maxScore: data.totalWeight * 5, // max stage is 5
        weightedScore,
      });

      overallStageSum += data.weightedStageSum;
      overallWeight += data.totalWeight;
    }

    const overallStage = overallWeight > 0 ? overallStageSum / overallWeight : 0;
    const sortedDims = [...dimensions].sort((a, b) => b.weightedScore - a.weightedScore);

    return {
      overallStage: Math.round(overallStage * 10) / 10,
      dimensions,
      strongestDimension: sortedDims.length > 0 ? sortedDims[0].dimension : '',
      weakestDimension: sortedDims.length > 0 ? sortedDims[sortedDims.length - 1].dimension : '',
    };
  }
}
