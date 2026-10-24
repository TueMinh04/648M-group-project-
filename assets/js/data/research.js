/**
 * VIRTUCARE - Research & Evidence Base Data
 * Comprehensive academic literature, clinical guidelines, and ethical frameworks.
 */

window.VC = window.VC || {};

VC.RESEARCH = [
  {
    id: "brooks-2026",
    topic: "privacy-cybersecurity",
    topicLabel: "Privacy & Cybersecurity",
    purpose: "Prevents healthcare vulnerabilities to AI-driven cyber attacks and privacy breaches",
    title: "Growing AI Cybersecurity Challenges Facing the Healthcare Industry",
    authors: "Brooks, C.",
    year: 2026,
    publication: "Forbes",
    url: "https://www.forbes.com/sites/chuckbrooks/2026/06/09/ai-cybersecurity-risks-healthcare/",
    apaCitation: "Brooks, C. (2026, June 9). Growing AI cybersecurity challenges facing the healthcare industry. Forbes.",
    badge: "Cyber Threat Intelligence",
    summary: "Healthcare has become the primary global target for cyber threats and privacy breaches since 2025. Rapid integration of AI introduces expanded attack vectors across hospital networks.",
    findings: [
      "Healthcare remains the #1 target for sophisticated ransomware and data exfiltration.",
      "AI models increase infrastructure vulnerability if training pipelines and APIs lack strict isolation.",
      "Multi-pillar defense required: end-to-end encryption, multi-factor authentication (MFA), and routine automated patching.",
      "Corporate risk management requires mandatory vendor supervision and ongoing workforce training.",
      "Emergency incident preparation must include cyber-attack simulations and architectural redundancies."
    ],
    implication: "Virtucare isolates all telemetry, enforces end-to-end encryption, and conducts periodic vendor and data audits to ensure no student or simulated patient data is exposed."
  },
  {
    id: "bhattacharjee-2023",
    topic: "privacy-cybersecurity",
    topicLabel: "Privacy & Consent",
    purpose: "Addresses legal and ethical gray areas in clinical photographs, consent, and IRB de-identification",
    title: "Patient photographs on Google Images: A commentary on informed consent, copyright, and privacy laws",
    authors: "Bhattacharjee, M., Kaposy, C., Grossman, M. R., & Marshall, Z.",
    year: 2023,
    publication: "Law, Innovation and Technology, 15(2), 536–557",
    url: "https://doi.org/10.1080/17579961.2023.2245684",
    apaCitation: "Bhattacharjee, M., Kaposy, C., Grossman, M. R., & Marshall, Z. (2023). Patient photographs on Google Images: A commentary on informed consent, copyright, and privacy laws. Law, Innovation and Technology, 15(2), 536–557.",
    badge: "IRB & Legal Commentary",
    summary: "Clinical imagery utilized for health education frequently becomes an unconsented commodity. Institutional Review Board (IRB) mandates demand absolute de-identification prior to distribution.",
    findings: [
      "Patient photographs indexed publicly often lack informed consent for secondary educational or machine learning usage.",
      "IRB standards dictate that any identifiable clinical data must be rigorously de-identified prior to dissemination.",
      "Developers cannot rely on assumed consent; software pipelines must guarantee non-identifiability algorithmically.",
      "Strong policy mandates required: clear consent disclosures, verified de-identification, and educational purpose limitation prohibiting commercial redistribution."
    ],
    implication: "Virtucare enforces an explicit Consent Verification gate and strips all biometric, facial, and institutional identifiers prior to simulated procedure generation."
  },
  {
    id: "cook-2011",
    topic: "simulation-competency",
    topicLabel: "Simulation & Competency",
    purpose: "Establishes that technology-enhanced simulation improves procedural knowledge, skills, and patient outcomes",
    title: "Technology-enhanced simulation for health professions education: A systematic review and meta-analysis",
    authors: "Cook, D. A., Hatala, R., Brydges, R., Zendejas, B., Szostek, J. H., Wang, A. T., Erwin, P. J., & Hamstra, S. J.",
    year: 2011,
    publication: "JAMA, 306(9), 978–988",
    url: "https://doi.org/10.1001/jama.2011.1234",
    apaCitation: "Cook, D. A., Hatala, R., Brydges, R., Zendejas, B., Szostek, J. H., Wang, A. T., Erwin, P. J., & Hamstra, S. J. (2011). Technology-enhanced simulation for health professions education: A systematic review and meta-analysis. JAMA, 306(9), 978–988.",
    badge: "JAMA Landmark Meta-Analysis (600+ Studies)",
    summary: "Landmark systematic review synthesizing over 600 studies examining technology-enhanced simulation across health professions education.",
    findings: [
      "Simulation training demonstrated large positive associations with knowledge, procedural skills, and clinical behaviors.",
      "Moderate, statistically significant improvements observed in patient-related clinical outcomes.",
      "Effectiveness varied substantially based on instructional design, feedback mechanisms, and deliberate practice structure.",
      "Noted limitation: majority of comparisons were against no intervention rather than comparative educational interventions."
    ],
    implication: "Validates Virtucare's core rationale: simulated procedural deliberate practice directly accelerates technical proficiency and safeguards patient well-being."
  },
  {
    id: "mitchell-2023",
    topic: "simulation-competency",
    topicLabel: "Simulation & Competency",
    purpose: "Provides contemporary meta-analytic validation that simulation enhances healthcare professional skill acquisition",
    title: "Technology-enhanced simulation for healthcare professionals: A meta-analysis",
    authors: "Mitchell, A. A., & Ivimey-Cook, E. R.",
    year: 2023,
    publication: "Frontiers in Medicine, 10(1149048)",
    url: "https://doi.org/10.3389/fmed.2023.1149048",
    apaCitation: "Mitchell, A. A., & Ivimey-Cook, E. R. (2023). Technology-enhanced simulation for healthcare professionals: A meta-analysis. Frontiers in Medicine, 10(1149048).",
    badge: "Frontiers Meta-Analysis (600+ Studies)",
    summary: "Comprehensive meta-analytic synthesis of simulation training reaffirming its significant positive impact across clinical professions.",
    findings: [
      "Reconfirmed strong positive associations with procedural skills, behavioral readiness, and diagnostic knowledge across 600+ studies.",
      "Identified instructional design and deliberate repetitive practice as primary drivers of skill retention.",
      "Highlighted the persistence of the classic limitation (comparison primarily vs. no intervention)."
    ],
    implication: "Reinforces the empirical foundation that repetitive digital simulation builds essential muscle memory and clinical readiness prior to live patient care."
  },
  {
    id: "sih-2024",
    topic: "simulation-competency",
    topicLabel: "Competency-Based Education",
    purpose: "Proves that competency-based simulation training is superior to traditional time-based simulation",
    title: "Competency-Based Simulation Training for Procedural Skills: A Systematic Review and Meta-analysis",
    authors: "Vermylen, J. H., Cohen, E. R., Cook, D. A., et al.",
    year: 2025,
    publication: "Simulation in Healthcare: The Journal of the Society for Simulation in Healthcare",
    url: "https://doi.org/10.1097/SIH.0000000000000895",
    apaCitation: "Vermylen, J. H., Cohen, E. R., Cook, D. A., et al. (2025). Competency-based simulation training for procedural skills: A systematic review and meta-analysis. Simulation in Healthcare.",
    badge: "Meta-Analysis (48 Studies / 19 Automated Scorers)",
    summary: "Meta-analysis of 48 studies demonstrating that competency-based simulation—where trainees advance only upon verified skill mastery—significantly outperforms time-based educational formats.",
    findings: [
      "Competency-based training was substantially more effective in developing psychomotor procedural skills than non-competency simulations.",
      "19 analyzed studies utilized automated objective scorers to evaluate performance benchmarks.",
      "Demonstrated higher learning efficiency, shorter time-to-mastery, and superior skill acquisition.",
      "Key paradigm shift: progression is dictated by demonstrated skill acquisition rather than hours elapsed."
    ],
    implication: "Virtucare replaces subjective seat-time with automated objective milestone gates (e.g. catheter angle, sterile maintenance, flash confirmation) before awarding procedural sign-off."
  },
  {
    id: "sim-2022",
    topic: "simulation-competency",
    topicLabel: "Clinical Reasoning & 2D vs. VR",
    purpose: "Highlights cognitive load trade-offs between immersive VR and 2D screen-based simulation",
    title: "Virtual Simulation to Enhance Clinical Reasoning in Nursing: A Systematic Review and Meta-analysis",
    authors: "Sim, J. J. M., Rusli, K. D. B., Seah, B., Levett-Jones, T., Lau, Y., & Liaw, S. Y.",
    year: 2022,
    publication: "Clinical Simulation In Nursing, 69, 26–39",
    url: "https://doi.org/10.1016/j.ecns.2022.05.006",
    apaCitation: "Sim, J. J. M., Rusli, K. D. B., Seah, B., Levett-Jones, T., Lau, Y., & Liaw, S. Y. (2022). Virtual Simulation to Enhance Clinical Reasoning in Nursing: A Systematic Review and Meta-analysis. Clinical Simulation In Nursing, 69, 26–39.",
    badge: "12 RCTs Meta-Analysis (n = 856)",
    summary: "Systematic review of 12 randomized controlled trials (n=856) investigating clinical reasoning and procedural skill acquisition in virtual simulation.",
    findings: [
      "Optimal learning benefits occurred in simulation sessions extending beyond 30 minutes in duration.",
      "Significantly improved skill performance and clinical reasoning compared to traditional passive education.",
      "Unexpected finding: non-immersive (2D screen-based) simulation was often more effective than fully immersive VR.",
      "Grounding in Emotional Engagement Theory & Cognitive Load Theory: immersive VR can introduce extraneous perceptual noise and cognitive overload that impairs novice reasoning."
    ],
    implication: "Virtucare provides a streamlined 2D web-based practice dashboard alongside immersive VR, ensuring accessible, low-cognitive-load procedural practice."
  },
  {
    id: "hatala-2014",
    topic: "feedback-automation",
    topicLabel: "Feedback Timing & Pedagogy",
    purpose: "Determines optimal AI feedback structure (terminal post-task debriefing vs. concurrent disruption)",
    title: "Feedback for simulation-based procedural skills training: a meta-analysis and critical narrative synthesis",
    authors: "Hatala, R., Cook, D. A., Zendejas, B., Hamstra, S. J., & Brydges, R.",
    year: 2014,
    publication: "Advances in Health Sciences Education, 19(2), 251–272",
    url: "https://doi.org/10.1007/s10459-013-9462-8",
    apaCitation: "Hatala, R., Cook, D. A., Zendejas, B., Hamstra, S. J., & Brydges, R. (2014). Feedback for simulation-based procedural skills training: a meta-analysis and critical narrative synthesis. Advances in Health Sciences Education, 19(2), 251–272.",
    badge: "Pooled Effect Size d = 0.74",
    summary: "Meta-analysis evaluating the modality, frequency, and timing of feedback in procedural simulation training.",
    findings: [
      "Structured feedback exerted a moderate, positive pooled effect size of 0.74 on procedural skill acquisition.",
      "Terminal feedback (delivered after task completion) appears more effective than concurrent feedback for novice skill retention.",
      "Concurrent feedback frequently interrupted motor planning and created dependency, reducing independent retention.",
      "Noted a research gap in multi-month longitudinal retention studies."
    ],
    implication: "Virtucare intentionally structures AI feedback as a terminal debriefing screen following procedure completion, preventing sensory overload during active manipulation."
  },
  {
    id: "goddard-2012",
    topic: "feedback-automation",
    topicLabel: "Automation Bias & Oversight",
    purpose: "Highlights risks of automation bias in clinical decision support and AI-assisted education",
    title: "Automation bias: a systematic review of frequency, effect mediators, and mitigators",
    authors: "Goddard, K., Roudsari, A., & Wyatt, J. C.",
    year: 2012,
    publication: "Journal of the American Medical Informatics Association (JAMIA), 19(1), 121–127",
    url: "https://doi.org/10.1136/amiajnl-2011-000089",
    apaCitation: "Goddard, K., Roudsari, A., & Wyatt, J. C. (2012). Automation bias: a systematic review of frequency, effect mediators, and mitigators. Journal of the American Medical Informatics Association, 19(1), 121–127.",
    badge: "JAMIA Systematic Review",
    summary: "Systematic review examining automation bias—the tendency of human operators to uncritically trust automated systems and overlook erroneous guidance.",
    findings: [
      "Automated decision support improves average aggregate performance, but users frequently miss novel errors introduced by the algorithms.",
      "Automation bias frequency is heavily mediated by user experience, uncalibrated trust, high cognitive workload, and time pressure.",
      "Clinicians with lower self-confidence or under high stress exhibit disproportionate deference to automated outputs."
    ],
    implication: "Virtucare implements mandatory 'Human-in-the-Loop' educator oversight. AI metrics are presented as decision support with transparent confidence intervals, not unquestioned dogma."
  },
  {
    id: "hatem-2023",
    topic: "ai-hallucination",
    topicLabel: "AI Misinformation & Language Ethics",
    purpose: "Deconstructs clinical terminology, replaces 'hallucination' with 'AI misinformation', and emphasizes human-centric values",
    title: "A Call to Address AI 'Hallucinations' and How Healthcare Professionals Can Mitigate Their Risks",
    authors: "Hatem, R., Simmons, B., & Thornton, J. E.",
    year: 2023,
    publication: "Cureus, 15(9), e44720",
    url: "https://doi.org/10.7759/cureus.44720",
    apaCitation: "Hatem, R., Simmons, B., & Thornton, J. E. (2023). A Call to Address AI 'Hallucinations' and How Healthcare Professionals Can Mitigate Their Risks. Cureus, 15(9), e44720.",
    badge: "Cureus Editorial / Ethical Terminology",
    summary: "Critical editorial calling for healthcare professionals to discontinue the term 'AI hallucination', advocating for 'AI misinformation' to avoid anthropomorphism and stigma.",
    findings: [
      "Stigmatization & Language: Applying psychiatric clinical terms like 'hallucination' to algorithmic software errors inappropriately implies sentience and stigmatizes mental health conditions.",
      "Human-Centric Values: Algorithms cannot replicate human empathy, nuanced clinical judgment, or ethical accountability in patient care.",
      "Shared Responsibility: Requires continuous professional education (CME), rigorous peer-reviewed cross-referencing, and proactive mitigation against clinical bias."
    ],
    implication: "Virtucare adopts the terminology 'AI Misinformation & Distortion' and positions AI exclusively as an analytical aid that preserves clinician-educator primacy."
  },
  {
    id: "sun-2024",
    topic: "ai-hallucination",
    topicLabel: "AI Error Taxonomy",
    purpose: "Provides a standardized scientific taxonomy classifying 31 second-level types of distorted AI content",
    title: "AI hallucination: towards a comprehensive classification of distorted information in artificial intelligence-generated content",
    authors: "Sun, Y., Sheng, D., Zhou, Z., et al.",
    year: 2024,
    publication: "Humanities and Social Sciences Communications (Nature Portfolio), 11, Article 1278",
    url: "https://doi.org/10.1057/s41599-024-03811-x",
    apaCitation: "Sun, Y., Sheng, D., Zhou, Z., et al. (2024). AI hallucination: towards a comprehensive classification of distorted information in artificial intelligence-generated content. Humanities and Social Sciences Communications, 11, 1278.",
    badge: "Nature Portfolio Empirical Taxonomy",
    summary: "Empirical content analysis of 243 distorted AI samples, establishing an exhaustive classification system for AI misinformation in generative models.",
    findings: [
      "Classified distorted content into 8 primary error categories (Overfitting, Logic errors, Reasoning errors, Mathematical errors, Unfounded fabrication, Factual errors, Text output errors, and Other) and 31 sub-types.",
      "Identified digital trust degradation: fabricated narratives lower verification skepticism and pollute educational repositories.",
      "Structural failure modes like unfounded medical fabrications cause direct societal and clinical harm if uncritically consumed."
    ],
    implication: "Virtucare's kinematic feedback rules are bounded by deterministic clinical rubrics to completely preclude unfounded algorithmic fabrication in scoring."
  },
  {
    id: "kim-2025",
    topic: "ai-hallucination",
    topicLabel: "Medical Hallucinations in Foundation Models",
    purpose: "Quantifies the clinical prevalence of foundation model hallucinations and patient safety hazards",
    title: "Medical Hallucinations in Foundation Models and Their Impact on Healthcare",
    authors: "Kim, Y., Jeong, H., Chen, S., Li, S. S., Park, C., Lu, M., et al.",
    year: 2025,
    publication: "arXiv preprint arXiv:2503.05777",
    url: "https://doi.org/10.48550/arxiv.2503.05777",
    apaCitation: "Kim, Y., Jeong, H., Chen, S., Li, S. S., Park, C., Lu, M., et al. (2025). Medical Hallucinations in Foundation Models and Their Impact on Healthcare. arXiv:2503.05777.",
    badge: "11 Foundation Models & 70 Clinicians Surveyed",
    summary: "Rigorous empirical evaluation benchmarking 11 foundation models (Med-HALT, NEJM case records) alongside a global survey of 70 practicing clinicians.",
    findings: [
      "Over 90% of surveyed clinicians reported directly encountering medical hallucinations in AI outputs.",
      "Demonstrated that medical inaccuracies stem primarily from reasoning failures (causal and temporal tracking errors) rather than simple knowledge gaps.",
      "Medical-specialized models frequently underperformed advanced general-purpose reasoning models on edge cases.",
      "Severe risks: fabricated diagnostic interpretations, contraindicated recommendations, and degraded clinician-patient trust."
    ],
    implication: "Virtucare prohibits unconstrained generative LLMs from issuing medical directives, anchoring all evaluations to verified institutional hospital guidelines."
  },
  {
    id: "dsouza-2024",
    topic: "ethics-governance",
    topicLabel: "12 Tips for AI Ethics in Medical Education",
    purpose: "Serves as an operational implementation guide for ethical AI integration in healthcare curricula",
    title: "Twelve tips for addressing ethical concerns in the implementation of artificial intelligence in medical education",
    authors: "Franco D’Souza, R., Mathew, M., Mishra, V., & Surapaneni, K. M.",
    year: 2024,
    publication: "Medical Education Online, 29(1), 2330250",
    url: "https://doi.org/10.1080/10872981.2024.2330250",
    apaCitation: "Franco D’Souza, R., Mathew, M., Mishra, V., & Surapaneni, K. M. (2024). Twelve tips for addressing ethical concerns in the implementation of artificial intelligence in medical education. Medical Education Online, 29(1), 2330250.",
    badge: "12 Tips Pedagogical Framework",
    summary: "Authoritative practical roadmap offering 12 operational guidelines for ethically developing, deploying, and maintaining AI in medical education.",
    findings: [
      "Tip 1: Ensure system transparency and explainability in deployment.",
      "Tip 2: Address algorithmic bias to guarantee equitable clinical representation.",
      "Tip 3: Validate educational outputs rigorously against accredited clinical standards.",
      "Tip 4: Prioritize student and patient privacy with robust data safeguards.",
      "Tip 5: Obtain informed consent from all participating stakeholders.",
      "Tip 6: Foster interdisciplinary collaboration between AI engineers, clinicians, and learners.",
      "Tip 7: Conduct mandatory faculty development on AI ethics.",
      "Tip 8: Educate trainees on algorithmic strengths and systemic failure modes.",
      "Tip 9: Implement ongoing maintenance and performance auditing of models.",
      "Tip 10: Establish unequivocal lines of human accountability.",
      "Tip 11: Maintain awareness of evolving healthcare AI regulatory frameworks.",
      "Tip 12: Engage Institutional Review Boards (IRB) or dedicated AI ethics committees."
    ],
    implication: "Virtucare adopts all 12 Tips across system architecture, consent protocols, educator override controls, and curriculum validation."
  },
  {
    id: "izquierdo-2026",
    topic: "ethics-governance",
    topicLabel: "FACETS AI Evaluation Framework",
    purpose: "Applies the 6-dimension FACETS framework to evaluate AI integration in medical training",
    title: "Artificial Intelligence in Medical Education: Transformative Potential, Current Applications, and Future Implications",
    authors: "Izquierdo-Condoy, J., Arias-Intriago, M., Montero Corrales, L., & Ortiz-Prado, E.",
    year: 2026,
    publication: "JMIR Medical Education, 12, e77127",
    url: "https://doi.org/10.2196/77127",
    apaCitation: "Izquierdo-Condoy, J., Arias-Intriago, M., Montero Corrales, L., & Ortiz-Prado, E. (2026). Artificial Intelligence in Medical Education: Transformative Potential, Current Applications, and Future Implications. JMIR Medical Education, 12, e77127.",
    badge: "JMIR FACETS Framework",
    summary: "Explores the exponential evolution of immersive AI educational tools, addressing critical hurdles such as privacy threats, bias, and erosion of critical thinking.",
    findings: [
      "AI in medical education offers transformative immersive capabilities but risks undermining critical diagnostic thinking if relied upon passively.",
      "The FACETS framework establishes 6 systematic dimensions for educational AI integration: Form, Application, Context, Instructional Mode, Technology, and SAMR alignment (Substitution, Augmentation, Modification, Redefinition).",
      "Proposes proactive regulatory awareness and technological equity to prevent disparity between affluent and under-resourced training centers."
    ],
    implication: "Virtucare applies the FACETS framework to evaluate its 2D/VR dual modes, ensuring augmentation of critical procedural thinking without cognitive dependency."
  },
  {
    id: "sung-2024",
    topic: "simulation-competency",
    topicLabel: "Virtual Reality in Healthcare Education",
    purpose: "Demonstrates that VR promotes self-directed learning and immediate procedural feedback",
    title: "Effectiveness of Virtual Reality in Healthcare Education: Systematic Review and Meta-Analysis",
    authors: "Sung, H., Kim, M., Park, J., Shin, N., & Han, Y.",
    year: 2024,
    publication: "Sustainability, 16(19), 8520",
    url: "https://doi.org/10.3390/su16198520",
    apaCitation: "Sung, H., Kim, M., Park, J., Shin, N., & Han, Y. (2024). Effectiveness of Virtual Reality in Healthcare Education: Systematic Review and Meta-Analysis. Sustainability, 16(19), 8520.",
    badge: "Sustainability Meta-Analysis",
    summary: "Systematic review and meta-analysis assessing the learning effectiveness, immersion, and user experience of VR in healthcare professional training.",
    findings: [
      "VR simulations promote self-directed, asynchronous learning by enabling self-paced procedural repetition.",
      "Immersive, interactive scenarios generate higher learner motivation and procedural readiness than passive textbooks.",
      "Highlights the essential role of realistic physics and user-friendly simulation controls in preventing simulator sickness."
    ],
    implication: "Guides Virtucare's VR design to ensure fluid user interactions, immediate safety metrics, and self-directed practice modules."
  },
  {
    id: "xr-ethics-scoping",
    topic: "ethics-governance",
    topicLabel: "XR Ethics Frameworks",
    purpose: "Establishes ethical guidelines for extended reality (VR/AR) in medical training",
    title: "Ethical Issues of Educational VR & Scoping Review of XR Ethics Frameworks",
    authors: "Skulmowski, A. (2023) / Cox, S., et al. (2025)",
    year: 2025,
    publication: "Computers & Education: X Reality (2023) / Open Res Eur (2025)",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11862359/",
    apaCitation: "Skulmowski, A. (2023). Ethical issues of educational virtual reality. Computers & Education: X Reality, 2, 100023. / Cox, S., Kadlubsky, A., Svarverud, E., Adams, J., Baraas, R. C., & Bernabe, R. D. L. C. (2025). A scoping review of the ethics frameworks describing issues related to the use of extended reality. Open Research Europe, 4, 74.",
    badge: "XR Ethics Scoping Review",
    summary: "Synthesis of ethics frameworks in educational extended reality, addressing physical comfort, sensory fatigue, perceptual distortion, and behavioral data privacy.",
    findings: [
      "Identifies physiological considerations: cybersickness, visual fatigue, and disorientation during long-duration VR simulations.",
      "Spatial and behavioral telemetry (head gaze, hand tremors, kinematic movement) constitutes sensitive biometric information requiring strict data protection.",
      "Recommends time-boxed immersion (sessions under 30 minutes) and alternative 2D screen modalities for universal accessibility."
    ],
    implication: "Virtucare implements session duration timers, zero persistent biometric telemetry storage, and a complete 2D desktop fallback."
  },
  {
    id: "hospital-guidelines",
    topic: "practice-guidelines",
    topicLabel: "Institutional Hospital Guidelines",
    purpose: "Provides accredited clinical protocols for invasive catheter and tube management",
    title: "Invasive Tube & Catheter Management Practice Standards",
    authors: "Scarborough Health Network (SHN) & Humber River Health (HRH)",
    year: 2025,
    publication: "Clinical Policy & Procedure Registries (SHN-PRSTAND-0102 / HRH Ref 2734)",
    url: "https://www.shn.ca/",
    apaCitation: "Scarborough Health Network. (2025). Insertion of nasal and oral gastrointestinal tubes and nasogastric tube for gastric suction (Practice Standard SHN-PRSTAND-0102). / Humber River Health. (2023). Adult urinary catheterization (straight, indwelling, coudé) and bladder irrigation (Ref No. 2734). / Humber River Health. (2023). Vascular access devices: Device & site selection, placement & removal.",
    badge: "Accredited Clinical Protocols",
    summary: "Official hospital policy and clinical procedural standards outlining step-by-step verification, safety thresholds, and gap prevention.",
    findings: [
      "NG Tube: Common training gap is catastrophic lung insertion. Critical adult steps: NEX measurement, lubrication, swallow synchronization; initial chest X-ray verification and 4-hour external tube checks. Neonates: sterile water lubricant, rapid insertion, pain management, stomach aspirate pH < 5.5 verification.",
      "Urinary Catheterization: Common gaps are female urethral misidentification and broken sterility. Strict aseptic field, lidocaine jelly, advance to urine flow, balloon inflation, max 3 attempts, 24-hour indwelling assessment.",
      "Peripheral IV Insertion: Common gaps are gauge selection, missed vein, and unnoticed interstitial infiltration. Tourniquet, antiseptic disinfection, flashback verification, cannula advancement, flushing patency, Tegaderm dressing, max 2 attempts, hourly site monitoring."
    ],
    implication: "Every simulated interaction in Virtucare is hardcoded to these exact safety thresholds, triggering immediate corrective alerts when hospital safety rules are violated."
  }
];
