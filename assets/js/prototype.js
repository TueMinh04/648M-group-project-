/* One guided prototype: Consent & Upload → AI 3DGS Processing → VR Simulation → Kinematic Feedback. All simulated. */
(function(){
var root=document.getElementById('proto'),e=VC.esc,cfg,ST=['Consent & Upload','AI 3DGS Processing','VR Simulation','Kinematic Feedback'];
var HELP=['Upload a consented surgical video recording.','Watch the AI process the video into a 3D Gaussian Splatting digital twin.','Experience the first-person physics-enabled VR practice module.','Review your objective kinematic performance against the expert baseline.'];
var STAGES=['Extracting spatial point cloud...','Training 3D Gaussian Splats...','Masking surgical instruments...','Generating XPBD soft-tissue physics mesh...','Compiling interactive VR module...'];
var NOTES=['Analyzing monocular video to estimate depth and structure.','Rendering high-fidelity tissue with real-time lighting.','Separating tools from anatomy for clean interaction.','Applying Extended Position Based Dynamics for realistic tissue deformation.','Finalizing module for standalone headset deployment.'];

function draw(){
 var n=VC.get().stage || 0;
 cfg={ok:false,label:'Continue',onNext:null,showNext:true};
 root.innerHTML='<ol class="stepper" aria-label="Progress">'+ST.map(function(t,i){return'<li class="'+(i<n?'done':i===n?'current':'')+'"'+(i===n?' aria-current="step"':'')+'>'+(i+1)+'. '+t+(i<n?' (done)':'')+'</li>'}).join('')+'</ol><h2 id="ptop" tabindex="-1">'+ST[n]+'</h2><p class="alert"><strong>What to do:</strong> '+HELP[n]+'</p><div id="view"></div><div class="row stepbar" id="bar"></div>';
 V[n](document.getElementById('view'));bar();
}

function bar(){
 var n=VC.get().stage || 0,b=document.getElementById('bar'),h='';
 if(n>0)h+='<button class="btn btn-ghost" id="back">Back</button>';
 h+='<button class="btn btn-ghost" id="restart">Restart</button>';
 if(n<3&&cfg.showNext)h+='<button class="btn" id="next"'+(cfg.ok?'':' disabled')+'>'+cfg.label+'</button>';
 b.innerHTML=h;
 if(n>0)b.querySelector('#back').onclick=function(){VC.set({stage:n-1});draw();focusTop()};
 b.querySelector('#restart').onclick=function(){if(confirm('Restart the prototype? Your progress will be cleared.')){VC.reset();draw();focusTop()}};
 if(n<3&&cfg.showNext)b.querySelector('#next').onclick=function(){if(cfg.onNext)cfg.onNext();VC.set({stage:n+1});draw();focusTop()};
}

function focusTop(){document.getElementById('ptop').focus()}

var V=[
function consent(el){
 var s=VC.get();
 el.innerHTML='<div class="card"><h3>Upload Surgical Recording</h3><p>Select a video captured from a procedure camera or endoscope. In a real system, only recordings with appropriate patient consent and de-identification would proceed.</p>' +
 '<div style="margin: 1.5rem 0;"><label for="recording" class="btn btn-secondary" style="cursor:pointer;"><i class="fas fa-upload"></i> Choose Video File</label><input id="recording" type="file" accept="video/*" style="display:none;"><span id="file-status" style="margin-left: 1rem;" class="muted">No file selected.</span></div></div>'+
 '<div class="card" style="margin-top: 1.5rem;"><label class="check"><input type="checkbox" id="c1"><span><strong>Patient consent confirmed (simulated).</strong> Verified that the patient has consented to their anonymized data being used for educational VR generation.</span></label>'+
 '<label class="check"><input type="checkbox" id="c2"><span>I confirm this video contains no visible Protected Health Information (PHI) outside the surgical cavity.</span></label></div>';
 
 var c1=el.querySelector('#c1'),c2=el.querySelector('#c2'),file=el.querySelector('#recording'),fileStatus=el.querySelector('#file-status');
 c1.checked=s.consent?s.consent.recording:false;
 c2.checked=s.consent?s.consent.phi:false;
 
 var hasFile = s.recordingName ? true : false;
 if(hasFile) fileStatus.innerHTML = 'Selected: <strong>' + e(s.recordingName) + '</strong>';

 function checkOk() {
   cfg.ok = c1.checked && c2.checked && hasFile;
   cfg.label = 'Begin AI 3D Reconstruction';
   bar();
 }
 
 file.onchange=function(){
   var selected=file.files&&file.files[0];
   if(!selected) return;
   hasFile = true;
   VC.set({recordingName: selected.name, processed: false});
   fileStatus.innerHTML='Selected: <strong>'+e(selected.name)+'</strong>';
   checkOk();
 };

 c1.onchange=c2.onchange=function(){
  VC.set({
   consent:{recording:c1.checked,phi:c2.checked}
  });
  checkOk();
 };
 checkOk();
},

function processing(el){
 var s=VC.get();
 function list(i){return'<ol class="pipeline">'+STAGES.map(function(t,k){return'<li class="'+(k<i?'done':k===i?'active':'')+'"><span class="dot"></span><div><strong>'+t+'</strong><br><span class="muted">'+NOTES[k]+'</span></div></li>'}).join('')+'</ol>'}
 
 el.innerHTML='<style>@keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 10px var(--primary); } 50% { transform: scale(1.1); opacity: 1; box-shadow: 0 0 30px var(--primary); } } @keyframes spinRing { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }</style>'+
 '<div class="grid-2"><div class="card" style="padding: 0; overflow: hidden; background: #0f172a; display: flex; align-items: center; justify-content: center; min-height: 250px; position: relative;">'+
 '<div style="position: absolute; width: 160px; height: 160px; border: 2px solid rgba(14, 165, 233, 0.2); border-top: 2px solid var(--accent); border-radius: 50%; animation: spinRing 3s linear infinite reverse;"></div>'+
 '<div style="position: absolute; width: 120px; height: 120px; border: 2px dashed rgba(14, 165, 233, 0.4); border-radius: 50%; animation: spinRing 6s linear infinite;"></div>'+
 '<div style="width: 60px; height: 60px; background: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; animation: pulse 2s infinite; z-index: 2;"><i class="fas fa-microchip" style="color: #fff; font-size: 1.5rem;"></i></div>'+
 '</div><div class="card"><h3>AI 3DGS Processing Pipeline</h3><p id="pm" class="muted">Waiting to start...</p><div id="pl"></div></div></div>';
 
 var pl=el.querySelector('#pl'),pm=el.querySelector('#pm');
 cfg.label='Enter VR Module';
 
 if(s.processed){
   pl.innerHTML=list(5);
   pm.textContent='Module generation complete.';
   cfg.ok=true;
   bar();
 } else {
   pl.innerHTML=list(0);
   cfg.ok=false;
   bar();
   var i=0,ms=1200;
   (function step(){
     pl.innerHTML=list(i);
     if(i>=5){
       VC.set({processed:true});
       pm.textContent='Module generation complete.';
       cfg.ok=true;
       bar();
       return;
     }
     pm.textContent='Processing: '+STAGES[i];
     i++;
     setTimeout(step,ms);
   })();
 }
},

function practice(el){
 el.innerHTML='<div class="card" style="padding: 0; overflow: hidden; background: #000; text-align: center;"><div style="position: relative; display: inline-block; max-height: 380px;"><img src="../assets/img/ngt_vr.jpg" alt="First Person VR" style="max-height: 380px; width: auto; display: block;">'+
 '<div id="visual-tube" style="position: absolute; top: 40%; left: 47.5%; width: 10px; height: 0%; background: repeating-linear-gradient(to bottom, transparent, transparent 15px, rgba(0,0,0,0.25) 15px, rgba(0,0,0,0.25) 17px), linear-gradient(90deg, rgba(220,220,220,0.8), rgba(255,255,255,1) 40%, rgba(200,200,200,0.8)); border: 1px solid rgba(100,100,100,0.5); border-top: none; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; z-index: 10; transition: height 0.1s linear; transform: rotate(-20deg); transform-origin: top center;"></div>'+
 '<div style="position: absolute; bottom: 20px; right: 20px; background: rgba(0,0,0,0.8); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--primary); width: 250px; text-align: left;"><h4 style="margin-bottom:0.5rem;">VR Telemetry</h4><p style="margin:0; font-size: 0.9rem; color: var(--accent);" id="telemetry-status">Tracking kinematics...</p><div style="margin-top: 0.5rem; background: #222; border-radius: 4px; overflow: hidden; height: 10px;"><div id="force-bar" style="width: 0%; height: 100%; background: var(--accent); transition: width 0.1s, background 0.1s;"></div></div></div></div></div>'+
 '<div class="card" style="margin-top: 1.5rem; border-top: 4px solid var(--secondary);"><h3>VR Task: NGT Insertion</h3><p>Simulate advancing the tube. Move the slider steadily. Moving too fast simulates excessive tissue force.</p>'+
 '<div style="margin: 2rem 0;"><input type="range" id="tube-slider" min="0" max="60" value="0" style="width: 100%; cursor: pointer;"></div>'+
 '<div style="display:flex; justify-content: space-between;" class="muted"><span>Naris (0cm)</span><span>Nasopharynx (15cm)</span><span>Esophagus (40cm)</span><span>Stomach (60cm)</span></div>'+
 '<p id="task-feedback" style="margin-top: 1.5rem; font-weight: 600; text-align: center; height: 1.5em;">Ready to insert...</p>'+
 '<div style="text-align: center; margin-top: 1rem;"><button class="btn btn-primary" id="complete-sim" disabled style="opacity: 0.5; cursor: not-allowed;"><i class="fas fa-arrow-right"></i> Drag slider to 60cm to complete</button></div></div>';
 
 cfg.showNext = false;
 bar();
 
 var slider = el.querySelector('#tube-slider');
 var tubeOverlay = el.querySelector('#visual-tube');
 var forceBar = el.querySelector('#force-bar');
 var status = el.querySelector('#telemetry-status');
 var feedback = el.querySelector('#task-feedback');
 var btn = el.querySelector('#complete-sim');
 
 var lastVal = 0;
 var lastTime = Date.now();
 var warnings = 0;
 
 slider.oninput = function() {
   var now = Date.now();
   var dt = now - lastTime;
   var val = parseInt(slider.value, 10);
   var dv = Math.abs(val - lastVal);
   
   // Calculate "force" based on speed of slider movement
   var force = dt > 0 ? (dv / dt) * 1000 : 0; 
   var forcePct = Math.min(force * 5, 100);
   
   forceBar.style.width = forcePct + '%';
   
   if (forcePct > 80) {
     forceBar.style.background = 'var(--danger)';
     status.innerHTML = '<span style="color:var(--danger)"><i class="fas fa-exclamation-triangle"></i> Excessive Force!</span>';
     slider.value = lastVal; // prevent moving forward if force is too high
     warnings++;
   } else {
     forceBar.style.background = 'var(--accent)';
     status.textContent = 'Force nominal';
     lastVal = val;
     
     // Update visual tube length
     tubeOverlay.style.height = (val / 60) * 48 + '%';
   }
   
   if (val < 15) {
     feedback.textContent = "Passing through nasal cavity...";
     feedback.style.color = "var(--text-main)";
     btn.disabled = true;
     btn.style.opacity = '0.5';
     btn.style.cursor = 'not-allowed';
     btn.innerHTML = '<i class="fas fa-arrow-right"></i> Drag slider to 60cm to complete';
   } else if (val < 40) {
     feedback.textContent = "Instructing digital patient to swallow. Passing through pharynx...";
     btn.disabled = true;
     btn.style.opacity = '0.5';
     btn.style.cursor = 'not-allowed';
     btn.innerHTML = '<i class="fas fa-arrow-right"></i> Drag slider to 60cm to complete';
   } else if (val < 59) {
     feedback.textContent = "Advancing down esophagus...";
     btn.disabled = true;
     btn.style.opacity = '0.5';
     btn.style.cursor = 'not-allowed';
     btn.innerHTML = '<i class="fas fa-arrow-right"></i> Drag slider to 60cm to complete';
   } else {
     feedback.innerHTML = '<span style="color:var(--accent)"><i class="fas fa-check-circle"></i> Target depth reached (Stomach: 60cm).</span>';
     btn.disabled = false;
     btn.style.opacity = '1';
     btn.style.cursor = 'pointer';
     btn.innerHTML = '<i class="fas fa-vr-cardboard"></i> Complete Task & View Feedback';
     VC.set({kinematicWarnings: warnings});
   }
   
   lastTime = now;
 };
 
 btn.onclick = function() {
   if (btn.disabled) return;
   VC.set({stage: 3});
   draw();
   focusTop();
 };
},

function feedback(el){
 var warnings = VC.get().kinematicWarnings || 0;
 var score = Math.max(100 - (warnings * 15), 40);
 var forceStatus = warnings === 0 ? '<span style="float:right; color: var(--accent);">Excellent (Smooth)</span><br><div class="progress"><span style="width: 100%; background: var(--accent);"></span></div>' : '<span style="float:right; color: var(--danger);">Excessive Force Detected ('+warnings+'x)</span><br><div class="progress"><span style="width: '+(100-(warnings*20))+'%; background: var(--danger);"></span></div>';
 
 el.innerHTML='<div class="grid-2"><div class="card"><h3>Objective Kinematic Score</h3><div class="score" style="color: '+(score>70?'var(--accent)':'var(--danger)')+';">'+score+'%</div><p class="muted" style="text-align: center;">Compared against expert surgeon baseline</p></div><div class="card"><h3>Performance Metrics</h3><ul style="list-style: none; padding: 0;"><li style="margin-bottom: 1rem;"><strong>Economy of Motion:</strong> <span style="float:right; color: var(--accent);">Excellent (92%)</span><br><div class="progress"><span style="width: 92%; background: var(--accent);"></span></div></li><li style="margin-bottom: 1rem;"><strong>Tissue Handling Force:</strong> '+forceStatus+'</li><li style="margin-bottom: 1rem;"><strong>Instrument Path Deviation:</strong> <span style="float:right; color: #fbbf24;">+5% vs Expert</span><br><div class="progress"><span style="width: 95%; background: #fbbf24;"></span></div></li></ul></div></div><div class="card" style="margin-top: 2rem; border-left: 4px solid var(--primary);"><h3>AI Procedural Feedback</h3><p><strong>Phase 1 (Nasal Passage):</strong> '+ (warnings > 0 ? '<span style="color:var(--danger)">The AI detected rapid, excessive force applied during advancement. In a real clinical setting, this risks mucosal trauma and epistaxis. You must advance the tube slowly and gently.</span>' : '<span style="color:var(--accent)">Excellent, steady advancement through the turbinates. No excessive force detected.</span>') +'</p><p><strong>Phase 2 (Pharynx/Esophagus):</strong> Good synchronization with the simulated patient\'s swallowing reflex. The trajectory matched the expert baseline within a safe margin of error.</p><p><strong>Final Placement:</strong> Reached 60cm mark accurately based on NEX measurement.</p></div>';
 
 cfg.ok = false;
 cfg.showNext = false;
 bar();
}
];

if (!VC.get) {
  // basic state management fallback if state.js isn't fully loaded the way we expect
  window._vc_state = { stage: 0 };
  VC.get = function() { return window._vc_state; };
  VC.set = function(s) { window._vc_state = Object.assign(window._vc_state, s); };
  VC.reset = function() { window._vc_state = { stage: 0 }; };
  VC.esc = function(s) { return s; };
}

draw();
VC.draw=draw;
})();
