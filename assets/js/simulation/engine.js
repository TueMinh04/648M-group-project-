/* Progress and answer handling. Swap logic here without touching the UI. */
window.VC=window.VC||{};
VC.engine={
 steps:function(){
  var s = VC.get();
  var skillId = s.skillId || 'ngt';
  return VC.SKILLS[skillId].steps;
 },
 answer:function(stepId,optId){
  var s=VC.get(),st=VC.engine.steps().filter(function(x){return x.id===stepId})[0];
  var a=s.answers[stepId]||{attempts:0,firstCorrect:null,correct:false};
  var ok=optId===st.correct;a.attempts++;if(a.firstCorrect===null)a.firstCorrect=ok;a.correct=ok;
  s.answers[stepId]=a;VC.set({answers:s.answers});return{ok:ok,step:st,record:a};
 },
 advance:function(){var s=VC.get();VC.set({idx:s.idx+1});return s.idx+1},
 finished:function(){return VC.get().idx>=VC.engine.steps().length}
};
