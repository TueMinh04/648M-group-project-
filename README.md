# Virtucare
**(The future of clinical training)**

Virtucare is an AI-assisted clinical simulation concept that helps students practice procedures before working with real patients.

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

## Team Members & Roles
All team members contributed as **Presenters**, **Researchers**, and **Reporters**, while leading individual areas:
- **Noah Choi** — *Presenter · Research · Reporter*
  Researches AI literature and hallucination risks, analyzing how AI errors and misinformation affect clinical training.
- **Yvonne Ma** — *Presenter · Research · Reporter*
  Reviews hospital guidelines and summarizes medical literature to establish accurate clinical training steps.
- **Paul Leung** — *Presenter · Research · Reporter*
  Researches hospital care policies and medical articles, summarizing clinical standards and safety protocols.
- **Minh Vuong** — *Presenter · Research · Reporter*
  Built the website and interactive simulation prototype, while verifying clinical information and references.

## Research Literature & Clinical Guidelines
All research literature and hospital standards are curated in `assets/js/data/research.js` and rendered on `index.html` (Section 5) and `docs/ethics-framework.md`. The platform incorporates peer-reviewed academic sources covering:
- Procedural simulation & competency-based progression (Cook et al., 2011; Mitchell & Ivimey-Cook, 2023; Simulation in Healthcare, 2024; Sung et al., 2024; Sim et al., 2022)
- Feedback timing & automation bias (Hatala et al., 2014; Goddard et al., 2012)
- AI misinformation, taxonomy & foundation model hazards (Hatem et al., 2023; Sun et al., 2024; Kim et al., 2025)
- Privacy, IRB de-identification & cybersecurity (Bhattacharjee et al., 2023; Brooks, 2026)
- AI ethics & governance frameworks (Franco D’Souza et al., 2024; Izquierdo-Condoy et al., 2026; Skulmowski, 2023; Cox et al., 2025)
- Hospital clinical guidelines: Scarborough Health Network (2025, SHN-PRSTAND-0102 for NGT) and Humber River Health (2023, Ref 2734 for Foley catheterization & Vascular Access policy for PIV).

## Generative AI Disclosure & Verification
In alignment with health professions education AI governance (Franco D’Souza et al., 2024, Tips 3 & 10) and academic integrity standards, all generative AI usage (Claude by Anthropic, Gemini by Google) is documented with full failure-mode auditing and verification notes.
- Detailed in-browser disclosure: [index.html#claude](index.html#claude) (Section 6: Generative AI Transparency & Verification Disclosure)
- Full chronological audit log: `docs/ai-usage-log.md`
- Core principle: AI assists with code scaffolding, syntax conversion, and editorial polishing; all clinical standards, empirical literature syntheses, ethical stances, and prototype scoring algorithms are 100% human-authored and verified.

