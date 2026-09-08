import { AssessmentResult } from './scoring.js';

export function generateReport(result: AssessmentResult): string {
  const stageNames = [
    'Stufe 0: Chaos',
    'Stufe 1: Wissen indexiert',
    'Stufe 2: Interne Agenten',
    'Stufe 3: Interner MCP',
    'Stufe 4: Öffentlicher MCP',
    'Stufe 5: M2M-Autonomie'
  ];

  const currentStageInt = Math.floor(result.overallStage);
  const stageName = stageNames[currentStageInt] || 'Unbekannt';

  let md = `# Agentic Maturity Model – Assessment Report\n\n`;
  
  md += `## Gesamtergebnis: ${result.overallStage.toFixed(1)} / 5.0\n`;
  md += `Sie befinden sich aktuell in **${stageName}**.\n\n`;

  md += `### Dimensionen im Detail\n\n`;
  md += `| Dimension | Reifegrad |\n`;
  md += `|-----------|-----------|\n`;
  for (const dim of result.dimensions) {
    md += `| ${dim.dimension} | ${dim.weightedScore.toFixed(1)} |\n`;
  }
  md += `\n`;

  md += `**Stärkste Dimension:** ${result.strongestDimension}\n`;
  md += `**Schwächste Dimension:** ${result.weakestDimension}\n\n`;

  md += `## Gap-Analyse & Nächste Schritte\n\n`;
  md += `Um die nächste Stufe zu erreichen, empfehlen wir folgende Maßnahmen:\n`;
  
  if (currentStageInt < 1) {
    md += `- **Wissen digitalisieren:** Beginnen Sie mit der Indexierung von internem Wissen.\n`;
    md += `- **Infrastruktur:** Einführung von RAG und Vektordatenbanken.\n`;
  } else if (currentStageInt < 3) {
    md += `- **Konsolidierung:** Einführung eines internen MCP-Servers zur Bündelung von APIs.\n`;
    md += `- **Automatisierung:** Agenten befähigen, nicht nur zu lesen, sondern in internen Systemen zu schreiben.\n`;
  } else {
    md += `- **Öffentlicher MCP:** Veröffentlichen Sie Ihren \`.well-known/mcp.json\`.\n`;
    md += `- **M2M Readiness:** Implementierung von Agent-Wallets für automatisiertes B2B-Trading.\n`;
  }

  md += `\n---\n*Generiert durch KontorStack Agentic Maturity Model.*\n`;
  return md;
}
