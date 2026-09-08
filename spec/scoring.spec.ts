import { describe, it, expect } from 'vitest';
import { ScoringEngine, AssessmentAnswer } from '../assessment/scoring.js';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const questionsPath = path.resolve(__dirname, '../assessment/questions.yaml');

describe('ScoringEngine', () => {
  it('should calculate the score correctly based on provided answers', () => {
    const engine = new ScoringEngine(questionsPath);
    const answers: AssessmentAnswer[] = [
      { questionId: 'q-data-1', selectedStage: 2 },
      { questionId: 'q-api-1', selectedStage: 3 },
    ];
    const result = engine.calculateScore(answers);
    
    expect(result.overallStage).toBeGreaterThan(0);
    expect(result.dimensions.length).toBeGreaterThan(0);
    expect(result.strongestDimension).toBeDefined();
    expect(result.weakestDimension).toBeDefined();
  });

  it('should handle empty answers', () => {
    const engine = new ScoringEngine(questionsPath);
    const result = engine.calculateScore([]);
    expect(result.overallStage).toBe(0);
    expect(result.dimensions.length).toBe(0);
  });
});
