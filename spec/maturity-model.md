# Agentic Maturity Model Specification

## Stufe 0: Chaos
**Beschreibung:** Keine strukturierte KI-Strategie, manuelle Prozesse dominieren. E-Mail, Telefon und PDFs sind die primären Arbeitswerkzeuge.
* **Typisches Unternehmen:** Traditioneller Mittelstand, ca. 15 Mitarbeiter.
* **Technik:** Keine KI-Werkzeuge, Daten sind in Silos oder physisch vorhanden.
* **Organisation:** Wissen befindet sich ausschließlich in den Köpfen der Mitarbeiter.
* **KPIs:** Anteil manueller Dateneingabe >90%, Bearbeitungszeit für Standardanfragen >24h.
* **Transition Trigger:** Der Schmerz über ineffiziente Prozesse und verlorenes Wissen führt zur Suche nach digitalen Lösungen.

## Stufe 1: Wissen indexiert
**Beschreibung:** Internes Wissen ist digital und durchsuchbar. Erste RAG-Systeme (Retrieval-Augmented Generation) sind im Einsatz.
* **Typisches Unternehmen:** Mittelstand mit ersten KI-Pilotprojekten.
* **Technik:** Vektordatenbanken, Embeddings, Confluence/Notion sind für LLMs indexiert.
* **Organisation:** Mitarbeiter nutzen interne KI-Chatbots zur Informationsbeschaffung.
* **KPIs:** Suchzeit für Dokumente drastisch reduziert, Adoption Rate des internen Chatbots >30%.
* **Transition Trigger:** Die Erkenntnis, dass KI nicht nur lesen, sondern auch handeln kann (Tools & APIs).

## Stufe 2: Interne Agenten
**Beschreibung:** KI führt eigenständig interne Prozesse aus. Agenten übernehmen Workflows statt nur Informationen zu liefern.
* **Typisches Unternehmen:** Enterprise mit breitem Copilot-Rollout.
* **Technik:** Agentic Frameworks (LangChain, AutoGen), API-Integrationen zu internen Tools.
* **Organisation:** Teams arbeiten mit digitalen Kollegen, die Reports generieren und Tickets routen.
* **KPIs:** Automatisierte Prozessschritte >20%, Reduktion der Ticket-Bearbeitungszeit.
* **Transition Trigger:** Das Management der vielen API-Anbindungen wird komplex, der Wunsch nach einer einheitlichen Schnittstelle wächst.

## Stufe 3: Interner MCP (Model Context Protocol)
**Beschreibung:** Ein zentraler MCP-Server bündelt alle internen Systeme (ERP, CRM, HR, Finance).
* **Typisches Unternehmen:** Digital-first Company.
* **Technik:** Vollwertige MCP-Infrastruktur intern, semantisches Routing, einheitliche Authentifizierung.
* **Organisation:** Agenten können nahtlos über Abteilungsgrenzen hinweg Prozesse ausführen.
* **KPIs:** Agent-to-System Interaktionen steigen exponentiell, Entwicklungszeit für neue interne KI-Tools sinkt <1 Woche.
* **Transition Trigger:** Der Wunsch, die Effizienz der internen MCPs auch auf Kunden und Lieferanten auszudehnen.

## Stufe 4: Öffentlicher MCP
**Beschreibung:** Der Nachfolger der klassischen Website. Das Unternehmen bietet eine maschinenlesbare Schnittstelle für externe Agenten.
* **Typisches Unternehmen:** Pionierunternehmen.
* **Technik:** `firma.de/.well-known/mcp.json` ist live, Public APIs für externe KI.
* **Organisation:** Customer Support und Sales laufen zu signifikanten Teilen über Agent-to-Agent Kommunikation.
* **KPIs:** >10% des Umsatzes oder der Bestellungen wird durch externe Agenten initiiert.
* **Transition Trigger:** Der Markt standardisiert sich, Zahlungen und Verträge sollen vollautonom abgewickelt werden.

## Stufe 5: M2M-Autonomie (Machine-to-Machine)
**Beschreibung:** Agenten verhandeln, kaufen und verkaufen vollkommen autonom. Der Human-in-the-Loop existiert nur noch für Ausnahmen.
* **Typisches Unternehmen:** Zukunftsunternehmen 2030+.
* **Technik:** Krypto-Wallets für Agenten (Agent Wallet SDK), Smart Contracts, autonome Verhandlungsprotokolle.
* **Organisation:** Menschen definieren Strategien und Leitplanken, Agenten führen das operative Geschäft.
* **KPIs:** Vollautonome Transaktionen >50%, Agent-ROI ist die zentrale Metrik.
