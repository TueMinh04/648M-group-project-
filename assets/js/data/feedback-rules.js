/* Deterministic rules standing in for AI. test(ctx) gets {answers, flags, steps}. Returns true if the rule fires. */
window.VC=window.VC||{};
VC.FEEDBACK_RULES=[
 {id:'FB-001',trigger:'A safety-critical step was answered incorrectly on the first attempt',
  feedback:'Placeholder observation: a safety-critical step needed more than one attempt.',
  issue:'Placeholder potential issue: possible gap in a safety-critical step.',
  confidence:'Low',rationale:'Fires when any step with severity "critical" has firstCorrect = false.',severity:'high',
  test:function(c){return c.flags.length>0}},
 {id:'FB-002',trigger:'Any step needed more than one attempt',
  feedback:'Placeholder observation: some steps needed retries.',
  issue:'Placeholder potential issue: inconsistent performance across steps.',
  confidence:'Medium',rationale:'Fires when attempts > 1 on any step.',severity:'medium',
  test:function(c){return Object.keys(c.answers).some(function(k){return c.answers[k].attempts>1})}},
 {id:'FB-003',trigger:'All steps correct on the first attempt',
  feedback:'Placeholder observation: all steps were completed correctly on the first attempt.',
  issue:'None detected by the placeholder rules. Rules are limited and this is not an assessment of competence.',
  confidence:'Medium',rationale:'Fires when every step has firstCorrect = true.',severity:'low',
  test:function(c){return c.steps.every(function(s){var a=c.answers[s.id];return a&&a.firstCorrect})}}
];
