/* Progress and answer handling. Swap logic here without touching the UI. */
window.VC=window.VC||{};
VC.engine={
 steps:function(){return VC.NGT_STEPS},
 answer:function(stepId,optId){
  var s=VC.get(),st=VC.NGT_STEPS.filter(function(x){return x.id===stepId})[0];
  var a=s.answers[stepId]||{attempts:0,firstCorrect:null,correct:false};
  var ok=optId===st.correct;a.attempts++;if(a.firstCorrect===null)a.firstCorrect=ok;a.correct=ok;
  s.answers[stepId]=a;VC.set({answers:s.answers});return{ok:ok,step:st,record:a};
 },
 advance:function(){var s=VC.get();VC.set({idx:s.idx+1});return s.idx+1},
 finished:function(){return VC.get().idx>=VC.NGT_STEPS.length}
};
