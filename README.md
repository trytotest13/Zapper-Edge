# Zapper Edge

> Enterprise AI, Data and Integration Engineering that moves business forward.

Zapper Edge engineers production-grade AI systems, enterprise integrations, and secure cross-domain data movement. Our proprietary product **SecureBridge™** enables controlled, encrypted file transfers between isolated environments - purpose-built for regulated industries.

---

## Capabilities

- **AI & Data Product Engineering** - data lakehouses, ML/AI model development, MLOps, Generative AI, LLM solutions, data engineering
- **Enterprise Integration** - API strategy, event-driven integration, legacy modernization, iPaaS
- **Domain-Specific AI Fine-Tuning** - RAG, knowledge grounding, evaluation, alignment on private domain data
- **SecureBridge™** - proprietary secure cross-domain file transfer with identity verification, policy enforcement, end-to-end encryption, immutable audit logs

## Industries Served

Financial Services · Healthcare · Government · Logistics & Supply Chain

---

## Tech Stack

- HTML5 + semantic markup
- CSS3 (custom properties, grid, flex, responsive media queries)
- Vanilla JavaScript (no framework dependencies)
- Inline SVG for icons and the SecureBridge logo
- Schema.org structured data (`ProfessionalService` + `FAQPage` + `OfferCatalog`) for AI discoverability

## Project Structure

```
.
├── index.html        # Single-page landing site
├── style.css         # All styles, responsive
├── script.js         # Menu toggle, FAQ, scroll reveal, counters
├── icons/            # Service, industry, and product visuals
│   ├── ai-data.png
│   ├── integration.png
│   ├── fine-tuning.png
│   ├── financial.png
│   ├── healthcare.png
│   ├── government.png
│   ├── logistics.png
│   └── securebridge-diagram.png
└── README.md
```

## Running Locally

No build step. Open `index.html` in any modern browser, or serve the folder with any static file server:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Sections

1. **Header** - fixed nav with anchor links to all sections
2. **Hero** - headline, value prop, CTA buttons, stats, SecureBridge diagram
3. **Services (Capabilities)** - 3 capability cards with icons and bullet lists
4. **Product (SecureBridge)** - feature list + live transfer log panel
5. **Industries** - 4 industry cards (Finance, Healthcare, Government, Logistics)
6. **Why Us** - 3 differentiation cards (Security, Engineering, Outcome)
7. **FAQ** - 6 expandable questions
8. **Contact CTA** - form (name, email, company, interest, message)
9. **Footer** - brand, services, product, industries, company, resources columns

## SEO & AI Discoverability

The page ships with:

- `<title>` and `<meta description>` tuned to the service offering
- Open Graph tags for social sharing
- `ProfessionalService` schema with `serviceType`, `hasOfferCatalog`, `knowsAbout`, `audience`
- `FAQPage` schema with 4 expandable Q&As
- Semantic HTML5 (`<header>`, `<section>`, `<article>`, `<footer>`, ARIA labels)

## License

© 2025 Zapper Edge Technologies Pvt. Ltd. All rights reserved.
#
