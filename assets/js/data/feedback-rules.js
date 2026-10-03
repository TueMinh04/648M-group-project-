/* Deterministic rules standing in for AI. test(ctx) gets {answers, flags, steps}. Returns true if the rule fires. */
window.VC=window.VC||{};
VC.FEEDBACK_RULES=[
  {id:'FB-001',trigger:'A safety-critical step was answered incorrectly on the first attempt',
   feedback:'The learner required multiple attempts to correctly navigate a safety-critical decision point. This indicates a potential knowledge gap in patient safety protocols.',
   issue:'Patient Safety Risk: Incorrect handling of safety-critical steps (e.g., contraindications, aseptic technique, or immediate complication management) can lead to severe iatrogenic harm.',
   confidence:'High',rationale:'Fires when any step with severity "critical" has firstCorrect = false.',severity:'high',
   test:function(c){return c.flags.length>0}},
  {id:'FB-002',trigger:'Any step needed more than one attempt',
   feedback:'The learner demonstrated hesitation or incorrect choices on one or more standard procedural steps, requiring retries to identify the optimal clinical action.',
   issue:'Procedural Inconsistency: While safety-critical steps were managed, there are gaps in standard technique or preparation sequencing.',
   confidence:'Medium',rationale:'Fires when attempts > 1 on any step, but no critical safety flags were triggered.',severity:'medium',
   test:function(c){return c.flags.length===0 && Object.keys(c.answers).some(function(k){return c.answers[k].attempts>1})}},
  {id:'FB-003',trigger:'All simulated 3D practice tasks were reviewed',
   feedback:'The learner reviewed every simulated 3D practice task, including preparation, technique, and safety checks.',
   issue:'No immediate gaps were identified by this limited simulated workflow.',
   confidence:'Medium',rationale:'Fires when every simulated task has been marked reviewed.',severity:'low',
   test:function(c){return c.steps.every(function(s){var a=c.answers[s.id];return a&&a.firstCorrect})}},
  {id:'FB-004',trigger:'Struggled with Preparation category',
   feedback:'The learner exhibited difficulty with pre-procedural checks, such as patient identification, consent, or sterile field setup.',
   issue:'Pre-procedural Readiness: Weakness in foundational preparation steps before invasive procedures.',
   confidence:'Medium',rationale:'Fires when >50% of mistakes were in the Preparation category.',severity:'medium',
   test:function(c){
     var prepMistakes = 0, totalMistakes = 0;
     c.steps.forEach(function(s) {
       var a = c.answers[s.id];
       if (a && !a.firstCorrect) {
         totalMistakes++;
         if (s.category === 'Preparation') prepMistakes++;
       }
     });
     return totalMistakes > 0 && (prepMistakes / totalMistakes) > 0.5;
   }}
];
