/* ILLUSTRATIVE scoring only. Not a validated assessment. Full credit first try, half credit after retry. */
window.VC=window.VC||{};
VC.scoring={compute:function(){
 var s=VC.get(),cats={},flags=[],steps=VC.engine.steps();
 steps.forEach(function(st){
  var a=s.answers[st.id],c=cats[st.category]=cats[st.category]||{pts:0,n:0};
  c.n++;if(a)c.pts+=a.firstCorrect?1:(a.correct?.5:0);
  if(st.severity==='critical'&&a&&!a.firstCorrect)flags.push(st);
 });
 var list=Object.keys(cats).map(function(k){return{name:k,pct:Math.round(100*cats[k].pts/cats[k].n)}});
 var overall=list.length?Math.round(list.reduce(function(t,c){return t+c.pct},0)/list.length):0;
 return{overall:overall,cats:list,flags:flags,answers:s.answers,steps:steps,
  complete:steps.every(function(x){return s.answers[x.id]&&s.answers[x.id].correct})};
}};
