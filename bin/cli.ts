#!/usr/bin/env node
import { Command } from 'commander';
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ScoringEngine, AssessmentAnswer } from '../assessment/scoring.js';
import { generateReport } from '../assessment/report-generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const program = new Command();

program
  .name('agentic-maturity-model')
  .description('Assessment CLI for Agentic Enterprise Transformation')
  .version('1.0.0');

program
  .command('assess')
  .description('Calculate maturity score from answers JSON')
  .argument('<answersFile>', 'Path to JSON file containing answers')
  .option('-o, --out <reportFile>', 'Output path for Markdown report')
  .action((answersFile, options) => {
    try {
      const yamlPath = join(__dirname, '../../assessment/questions.yaml');
      const scoring = new ScoringEngine(yamlPath);
      
      const raw = readFileSync(answersFile, 'utf8');
      const answers: AssessmentAnswer[] = JSON.parse(raw);
      
      const result = scoring.calculateScore(answers);
      const report = generateReport(result);
      
      if (options.out) {
        writeFileSync(options.out, report);
        console.log(`Report written to ${options.out}`);
      } else {
        console.log(report);
      }
    } catch (err) {
      console.error('Error during assessment:', err);
      process.exit(1);
    }
  });

program.parse();
