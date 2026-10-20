# Virtucare
**(The future of clinical training)**

Virtucare is a virtual reality clinical education system to revolutionize training and improve patient outcomes.

### Core Categories
- **Immersive VR scenarios:** Realistic procedural environments for deep situational readiness.
- **Experience hands-on clinical practice:** Interactive procedural simulations for mastering clinical techniques safely.
- **Analyze performance tracking and feedback:** Objective metrics, kinematic telemetry, and data-driven feedback.
- **Standardize consistent curriculum delivery:** Repeatable, uniform clinical curriculum delivered at scale.

### What Virtucare Can Do
**How skills are taught today:**
- Clinicians learn skills only when opportunities arise
- Independent practice is restricted until clinical judgement is proven
- *This means a clinician’s first attempt at a critical skill may occur on a live patient*

**How Virtucare teaches the skill:**
- Hands-on practice without patient risk
- Performance feedback and metrics
- Accessible ‘anytime, anywhere’ learning safe environment to master complex skills

A *conceptual academic prototype* (MHIA healthcare AI ethics project). Virtucare is a **proposed** clinical simulation platform using consented, de-identified procedure recordings as source material. The demo covers nasogastric tube (NGT) insertion.

> Not a medical system. Not clinically validated. All "AI" behaviour is deterministic JavaScript rules. All scores are illustrative. Step content is **placeholder** until validated sources are added.

## Run locally
Open `index.html` in a browser, or serve the folder: `python3 -m http.server 8000` then visit http://localhost:8000.

## Deploy (GitHub Pages)
Push to GitHub → Settings → Pages → Deploy from branch `main`, folder `/ (root)`. All paths are relative and work from a repo subpath. `.nojekyll` is included.

## Structure
- `index.html` Home; `pages/how-it-works.html`, `ethics.html`, `research.html` (includes "How we used generative AI"), `prototype.html` (single guided app)
- Team and a short AI-use note are in the footer (`assets/js/main.js`)
- `assets/css/` – `tokens.css` (edit colours/type here), `base`, `components`, `site`, `app`
- `assets/js/prototype.js` – the five-stage prototype (Consent → Processing → Practice → AI Feedback → Review)
- `assets/js/data/` – **content lives here** (steps, feedback rules, research)
- `assets/js/simulation/` – `engine.js`, `scoring.js`; `feedback.js`; `state.js` (sessionStorage); `main.js` (header/footer)
- `docs/` – architecture, ethics framework, AI usage log, decisions

## Contributing
See `CONTRIBUTING.md`. Branch per page/feature, open a pull request, one reviewer.

## Team Members
- **Noah Choi** — Researcher
- **Yvonne Ma** — Researcher
- **Paul Leung** — Researcher
- **Minh Vuong** — Website Builder & Summarize

## Research Literature & Clinical Guidelines
All research literature and hospital standards are curated in `assets/js/data/research.js` and rendered on `index.html` (Section 5) and `docs/ethics-framework.md`. The platform incorporates 16 peer-reviewed academic sources covering:
- Procedural simulation & competency-based progression (Cook et al., 2011; Mitchell & Ivimey-Cook, 2023; Simulation in Healthcare, 2024; Sung et al., 2024; Sim et al., 2022)
- Feedback timing & automation bias (Hatala et al., 2014; Goddard et al., 2012)
- AI misinformation, taxonomy & foundation model hazards (Hatem et al., 2023; Sun et al., 2024; Kim et al., 2025)
- Privacy, IRB de-identification & cybersecurity (Bhattacharjee et al., 2023; Brooks, 2026)
- AI ethics & governance frameworks (Franco D’Souza et al., 2024; Izquierdo-Condoy et al., 2026; Skulmowski, 2023; Cox et al., 2025)
- Hospital clinical guidelines: Scarborough Health Network (2025, SHN-PRSTAND-0102 for NGT) and Humber River Health (2023, Ref 2734 for Foley catheterization & Vascular Access policy for PIV).

## Recording AI usage
Add a row to `docs/ai-usage-log.md` every time a generative AI tool is used. It feeds the AI Disclosure section.

