# HUE Signs Creative Studio — Next.js Website Prototype

Custom responsive homepage built from the supplied HUE Signs website brief and original logo. The design takes general editorial inspiration from Designing Dots but does not reproduce its assets or code.

## Run locally

1. Install Node.js 20 or later.
2. In this folder run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

## Included

- Original logo asset (`public/hue-logo.png`)
- Responsive sticky navigation and mobile menu
- Abstract CSS-based animated hero (no external image licensing needed)
- About, three service divisions, filterable service showcase, process, industries, contact and footer
- WhatsApp link to confirmed business number
- Contact form validation that opens a pre-filled email draft
- Reduced-motion support and basic SEO metadata

## Before production launch

- **Portfolio:** Current cards are explicitly labelled service showcases, not real client case studies. Replace with approved project photos and descriptions.
- **Contact form:** Currently uses `mailto:`; configure a transactional email provider or server action for direct delivery, anti-spam and error handling.
- **CMS:** Sanity was recommended but is **not yet connected**. Add Sanity schemas, project queries and preview/editing when content is ready.
- **Pages:** This is the first-phase homepage prototype. Dedicated `/about`, `/services/...`, `/work/...` and `/contact` routes remain to be developed.
- **Social:** Confirm the Instagram handle/URL and any additional profiles.
- **Legal:** Confirm privacy policy, consent text and domain/hosting before publishing.
- **Images:** Replace conceptual CSS service illustrations with approved real project imagery when available.

## Brand palette

- Violet `#7547EA`
- Cobalt `#2868D9`
- Cyan `#15C5C4`
- Charcoal `#111318`
- Off-white `#F6F6F8`
