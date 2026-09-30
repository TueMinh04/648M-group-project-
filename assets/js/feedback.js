/* Rule-based simulated feedback. Renders fired rules as cards. */
window.VC=window.VC||{};
VC.feedback={
 evaluate:function(){var c=VC.scoring.compute();return{ctx:c,fired:VC.FEEDBACK_RULES.filter(function(r){return r.test(c)})}},
 render:function(el){
  var ev=VC.feedback.evaluate(),e=VC.esc;
  if(!Object.keys(ev.ctx.answers).length){el.innerHTML='<div class="alert">No simulation data yet. complete the Practice stage first.</div>';return ev}
  el.innerHTML=ev.fired.map(function(r){return'<article class="card"><h3>'+e(r.id)+' <span class="badge '+(r.confidence==='Low'?'warn':'')+'">Confidence: '+e(r.confidence)+' (simulated)</span></h3><p><strong>Performance observation:</strong> '+e(r.feedback)+'</p><p><strong>Potential issue:</strong> '+e(r.issue)+'</p>'+(r.confidence==='Low'?'<p class="alert">Low confidence: routed for instructor review.</p>':'')+
  '<details><summary>Why was this feedback generated?</summary><p><strong>Trigger:</strong> '+e(r.trigger)+'</p><p><strong>Rule logic:</strong> '+e(r.rationale)+'</p></details><details><summary>Limitations</summary><p>This is a predefined rule, not a trained AI model. It is not validated and cannot assess clinical competence.</p></details></article>'}).join('');
  return ev;
 }
};
