# Generative AI Disclosure & Verification

**Core Principle:** AI assists; humans remain accountable.  
In alignment with health professions education AI governance and academic integrity standards, this log outlines how generative AI tools (Claude by Anthropic, Gemini by Google) were used, what risks were caught, and how outputs were verified.

### How We Used AI vs. How We Checked It

| Project Area & Tools | What AI Helped With | What Went Wrong (Risks Caught) | How We Checked & Fixed It |
|---|---|---|---|
| **Website & Prototype**<br>*(Claude & Gemini)* | Helped build the responsive layout and CSS styling for the website. Set up browser session saving so user progress is remembered between steps. | Suggested heavy third-party software packages that we didn't need for a simple static site. Suggested using live AI to score students, which was slow and gave unpredictable feedback. | Kept the code lightweight and simple using standard HTML, CSS, and JavaScript. Replaced live AI scoring with fixed, clear rules so feedback is always accurate and reliable. |
| **Video & 2D Images**<br>*(Gemini)* | Analyzed procedure videos and generated 2D anatomical images for the interactive simulation. | Generated blurry images, distorted anatomical boundaries, and awkward instrument angles. | Hand-checked and filtered every 2D image against real medical anatomical charts before using it in the demo. |
| **Clinical Questions & Data**<br>*(Claude)* | Turned hospital procedural checklists into quiz questions, multiple-choice options, and explanations. | Made up wrong measurements (like tube insertion depth landmarks) and gave incorrect catheter sizes. | Audited every single question, landmark, and number directly against official hospital policies (Scarborough Health Network and Humber River Health). |
| **Ethics & Research**<br>*(Claude & Gemini)* | Brainstormed initial ethical topics (patient consent, data privacy, user fatigue). | Gave vague buzzwords ("ensure fairness", "protect data") without legal backing and hallucinated fake journal citations. | Threw out the fake citations and independently searched academic databases to find 17 real, peer-reviewed medical studies. |
| **Writing & Tone**<br>*(Claude)* | Proofread draft paragraphs for clarity, active voice, and smoother flow. | Kept using the clinical word "hallucinations" and exaggerated marketing hype ("revolutionizes medicine overnight"). | Changed "hallucinations" to "AI misinformation", and toned down hype so it clearly reads as an academic student prototype. |
