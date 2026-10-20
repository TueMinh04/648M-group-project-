/* One guided prototype: Consent & Upload → AI 3DGS Processing → VR Simulation → Kinematic Feedback. All simulated. */
(function(){
var root=document.getElementById('proto'),e=VC.esc,cfg,ST=['Consent & Upload','AI 3DGS Processing','VR Simulation','Kinematic Feedback'];
var HELP=['Upload a consented surgical video recording.','Watch the AI process the video into a 3D Gaussian Splatting digital twin.','Experience the first-person physics-enabled VR practice module with clinical guidelines.','Review your objective kinematic performance and clinical protocol verification.'];
var STAGES=['Extracting spatial point cloud...','Training 3D Gaussian Splats...','Masking surgical instruments...','Generating XPBD soft-tissue physics mesh...','Compiling interactive VR module...'];
var NOTES=['Analyzing monocular video to estimate depth and structure.','Rendering high-fidelity tissue with real-time lighting.','Separating tools from anatomy for clean interaction.','Applying Extended Position Based Dynamics for realistic tissue deformation.','Finalizing module for standalone headset deployment.'];

var GUIDELINES = {
  ngt: {
    id: 'ngt',
    title: 'NG Tube Insertion Practice Guidelines',
    badge: 'Nasogastric (NG) Tube',
    icon: 'fa-lungs',
    citation: 'Scarborough Health Network. (2025). Insertion of nasal and oral gastrointestinal tubes and nasogastric tube for gastric suction (Practice Standard SHN-PRSTAND-0102).',
    gap: 'Tube inserted into the lung',
    stepsAdult: [
      'Check doctor’s order',
      'Collect equipment',
      'Measure length of tube to be inserted (NEX measurement: Nose to Ear lobe to Xiphisternum)',
      'Lubricate tube with jelly',
      'Insert tube into nare while instructing patient to drink water through a straw to ensure NG tube enters the esophagus',
      'Document procedure'
    ],
    stepsNeonate: [
      'Check doctor’s order',
      'Collect equipment',
      'Measure length of tube to be inserted',
      'Lubricate tube with sterile water',
      'Insert tube quickly into nare',
      'Provide pain management',
      'Document procedure'
    ],
    verification: {
      adult: 'Chest X-ray initially and measure external length of tube every 4 hours',
      neonate: 'Aspirate stomach contents and check pH using pH strip (pH < 5.5 confirms placement)'
    }
  },
  foley: {
    id: 'foley',
    title: 'Urinary Catheterization Practice Guidelines',
    badge: 'Urinary Catheterization',
    icon: 'fa-procedures',
    citation: 'Humber River Health. (2023). Adult urinary catheterization (straight, indwelling, coudé) and bladder irrigation (Reference No. 2734).',
    gap: 'Inability to locate the urethra (in females); breaking sterility',
    steps: [
      'Check doctor’s order',
      'Collect equipment',
      'Maintain sterility throughout the procedure',
      'Lubricate tube with lidocaine jelly',
      'Insert tube and advance until urine flow is observed',
      'Attach syringe to inflate catheter balloon',
      'Do not exceed three attempts',
      'Document procedure',
      'Must be assessed every 24 hours when catheter is indwelling'
    ],
    verification: 'When urine flow through the catheter is observed'
  },
  iv: {
    id: 'iv',
    title: 'Peripheral IV Insertion Practice Guidelines',
    badge: 'Peripheral IV (PIV)',
    icon: 'fa-syringe',
    citation: 'Humber River Health. (2023). Vascular access devices: Device & site selection, placement & removal (Policy and Procedure).',
    gap: 'Selecting the correct catheter gauge size; missing the vein upon insertion; uncertainty at an interstitial site',
    steps: [
      'Check doctor’s order',
      'Collect equipment',
      'Use tourniquet to engorge the veins',
      'Disinfect site with antiseptic solution',
      'Visualize vein and insert needle with catheter',
      'Advance catheter',
      'Flush to ensure patency',
      'Secure cannula with Tegaderm',
      'No more than 2 attempts',
      'Document procedure',
      'Must be assessed every hour'
    ],
    verification: 'When flashback is visualized in the catheter; flush catheter and monitor site to ensure patency'
  }
};

function renderGuidelinesCard(activeTab) {
  activeTab = activeTab || 'ngt';
  var g = GUIDELINES[activeTab];
  var tabs = [
    { id: 'ngt', name: 'NG Tube Insertion', icon: 'fa-lungs' },
    { id: 'foley', name: 'Urinary Catheterization', icon: 'fa-procedures' },
    { id: 'iv', name: 'Peripheral IV Insertion', icon: 'fa-syringe' }
  ];

  var tabsHtml = '<div class="guideline-tabs" id="guideline-tabs">' +
    tabs.map(function(t){
      return '<button type="button" class="guideline-tab '+(t.id===activeTab?'active':'')+'" data-tab="'+t.id+'"><i class="fas '+t.icon+'"></i> '+t.name+'</button>';
    }).join('') +
  '</div>';

  var contentHtml = '';
  if (activeTab === 'ngt') {
    contentHtml = '<div class="guideline-content">' +
      '<div style="font-size:0.85rem; color:var(--primary); margin-bottom:0.75rem;"><i class="fas fa-book-medical" style="margin-right:0.4rem;"></i><strong>Clinical Standard:</strong> ' + e(g.citation) + '</div>' +
      '<div class="guideline-badge-gap"><i class="fas fa-exclamation-triangle" style="margin-right:0.5rem;"></i><strong>Common Training Gap:</strong> ' + e(g.gap) + '</div>' +
      '<div class="grid-2">' +
        '<div style="background: rgba(255,255,255,0.03); padding: 1.25rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">' +
          '<h4 style="color: var(--primary); margin-bottom: 0.75rem;"><i class="fas fa-user" style="margin-right: 0.5rem;"></i>Adult Critical Steps</h4>' +
          g.stepsAdult.map(function(s){ return '<div class="checklist-item"><i class="fas fa-check-circle"></i><span>'+e(s)+'</span></div>'; }).join('') +
          '<div class="guideline-badge-verify"><strong><i class="fas fa-x-ray" style="margin-right:0.4rem;"></i>Adult Placement Verification:</strong><br>' + e(g.verification.adult) + '</div>' +
        '</div>' +
        '<div style="background: rgba(255,255,255,0.03); padding: 1.25rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">' +
          '<h4 style="color: var(--secondary); margin-bottom: 0.75rem;"><i class="fas fa-baby" style="margin-right: 0.5rem;"></i>Neonate Critical Steps</h4>' +
          g.stepsNeonate.map(function(s){ return '<div class="checklist-item"><i class="fas fa-check-circle"></i><span>'+e(s)+'</span></div>'; }).join('') +
          '<div class="guideline-badge-verify"><strong><i class="fas fa-vial" style="margin-right:0.4rem;"></i>Neonate Placement Verification:</strong><br>' + e(g.verification.neonate) + '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  } else if (activeTab === 'foley') {
    contentHtml = '<div class="guideline-content">' +
      '<div style="font-size:0.85rem; color:var(--primary); margin-bottom:0.75rem;"><i class="fas fa-book-medical" style="margin-right:0.4rem;"></i><strong>Clinical Standard:</strong> ' + e(g.citation) + '</div>' +
      '<div class="guideline-badge-gap"><i class="fas fa-exclamation-triangle" style="margin-right:0.5rem;"></i><strong>Common Training Gap:</strong> ' + e(g.gap) + '</div>' +
      '<div style="background: rgba(255,255,255,0.03); padding: 1.25rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">' +
        '<h4 style="color: var(--primary); margin-bottom: 0.75rem;"><i class="fas fa-clipboard-check" style="margin-right: 0.5rem;"></i>Critical Clinical Steps</h4>' +
        g.steps.map(function(s){ return '<div class="checklist-item"><i class="fas fa-check-circle"></i><span>'+e(s)+'</span></div>'; }).join('') +
        '<div class="guideline-badge-verify"><strong><i class="fas fa-check-double" style="margin-right:0.4rem;"></i>Placement Verification:</strong> ' + e(g.verification) + '</div>' +
      '</div>' +
    '</div>';
  } else if (activeTab === 'iv') {
    contentHtml = '<div class="guideline-content">' +
      '<div style="font-size:0.85rem; color:var(--primary); margin-bottom:0.75rem;"><i class="fas fa-book-medical" style="margin-right:0.4rem;"></i><strong>Clinical Standard:</strong> ' + e(g.citation) + '</div>' +
      '<div class="guideline-badge-gap"><i class="fas fa-exclamation-triangle" style="margin-right:0.5rem;"></i><strong>Common Training Gap:</strong> ' + e(g.gap) + '</div>' +
      '<div style="background: rgba(255,255,255,0.03); padding: 1.25rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">' +
        '<h4 style="color: var(--primary); margin-bottom: 0.75rem;"><i class="fas fa-clipboard-check" style="margin-right: 0.5rem;"></i>Critical Clinical Steps</h4>' +
        g.steps.map(function(s){ return '<div class="checklist-item"><i class="fas fa-check-circle"></i><span>'+e(s)+'</span></div>'; }).join('') +
        '<div class="guideline-badge-verify"><strong><i class="fas fa-check-double" style="margin-right:0.4rem;"></i>Placement Verification:</strong> ' + e(g.verification) + '</div>' +
      '</div>' +
    '</div>';
  }

  return '<div class="card" id="guidelines-card" style="margin-bottom: 2rem; border-top: 3px solid var(--accent);">' +
    '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">' +
      '<h3 style="margin: 0; font-size: 1.25rem;"><i class="fas fa-book-medical" style="color: var(--accent); margin-right: 0.5rem;"></i>Clinical Practice Guidelines & Protocol Reference</h3>' +
      '<span class="muted" style="font-size: 0.85rem;"><i class="fas fa-shield-alt" style="color: var(--accent);"></i> Evidence-Based Practice Standards</span>' +
    '</div>' +
    tabsHtml +
    '<div id="guideline-body">' + contentHtml + '</div>' +
  '</div>';
}

function attachGuidelineEvents(container) {
  var tabs = container.querySelectorAll('#guideline-tabs .guideline-tab');
  tabs.forEach(function(btn){
    btn.onclick = function(){
      var tabId = btn.getAttribute('data-tab');
      VC.set({activeGuidelineTab: tabId});
      var card = container.querySelector('#guidelines-card');
      if (card) {
        card.outerHTML = renderGuidelinesCard(tabId);
        attachGuidelineEvents(container);
      }
    };
  });
}

function draw(){
 var n=VC.get().stage || 0;
 cfg={ok:false,label:'Continue',onNext:null,showNext:true};
 var quickJump = n !== 2 ? '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem; background: rgba(59,130,246,0.08); padding: 0.75rem 1.25rem; border-radius: var(--radius); border: 1px solid rgba(59,130,246,0.2);"><span style="font-size:0.95rem; color: var(--text-main);"><i class="fas fa-stethoscope" style="color:var(--primary); margin-right:0.5rem;"></i>Explore the Interactive Simulation & Guidelines:</span><button class="btn btn-sm btn-primary" id="quick-sim-btn"><i class="fas fa-play" style="margin-right:0.4rem;"></i>Jump to Step 3: VR Simulation</button></div>' : '';
 
 root.innerHTML= quickJump + '<ol class="stepper" aria-label="Progress">'+ST.map(function(t,i){return'<li class="'+(i<n?'done':i===n?'current':'')+'" style="cursor:pointer;" title="Click to jump to '+t+'" data-jump="'+i+'"'+(i===n?' aria-current="step"':'')+'>'+(i+1)+'. '+t+(i<n?' (done)':'')+'</li>'}).join('')+'</ol><h2 id="ptop" tabindex="-1">'+ST[n]+'</h2><p class="alert"><strong>What to do:</strong> '+HELP[n]+'</p><div id="view"></div><div class="row stepbar" id="bar"></div>';
 
 var jumpBtn = root.querySelector('#quick-sim-btn');
 if(jumpBtn) {
   jumpBtn.onclick = function(){ VC.set({stage: 2, processed: true}); draw(); focusTop(); };
 }
 
 var steps = root.querySelectorAll('.stepper li');
 steps.forEach(function(li){
   li.onclick = function(){
     var target = parseInt(li.getAttribute('data-jump'), 10);
     VC.set({stage: target, processed: true});
     draw();
     focusTop();
   };
 });

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
 el.innerHTML='<div class="card"><h3>Upload Surgical Recording</h3><p>Select a video captured from a procedure camera or endoscope. In a real system, only recordings with appropriate patient consent and de-identification would proceed<a href="../index.html#ref-17" class="cite-num"><sup>[17]</sup></a>.</p>' +
 '<div style="margin: 1.5rem 0;"><label for="recording" class="btn btn-secondary" style="cursor:pointer;"><i class="fas fa-upload"></i> Choose Video File</label><input id="recording" type="file" accept="video/*" style="display:none;"><span id="file-status" style="margin-left: 1rem;" class="muted">No file selected.</span></div></div>'+
 '<div class="card" style="margin-top: 1.5rem;"><label class="check"><input type="checkbox" id="c1"><span><strong>Patient consent confirmed (simulated).</strong> Verified that the patient has consented to their anonymized data being used for educational VR generation<a href="../index.html#ref-17" class="cite-num"><sup>[17]</sup></a>.</span></label>'+
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
 var s = VC.get();
 var cohort = s.ngtCohort || 'adult';
 var activeTab = s.activeGuidelineTab || 'ngt';

 el.innerHTML = renderGuidelinesCard(activeTab) +
 '<div class="card" style="padding: 0; overflow: hidden; background: #000; text-align: center;"><div style="position: relative; display: inline-block; max-height: 380px;"><img src="../assets/img/ngt_vr.jpg" alt="Simulation View" style="max-height: 380px; width: auto; display: block;">'+
 '<div id="visual-tube" style="position: absolute; top: 40%; left: 47.5%; width: 10px; height: 0%; background: repeating-linear-gradient(to bottom, transparent, transparent 15px, rgba(0,0,0,0.25) 15px, rgba(0,0,0,0.25) 17px), linear-gradient(90deg, rgba(220,220,220,0.8), rgba(255,255,255,1) 40%, rgba(200,200,200,0.8)); border: 1px solid rgba(100,100,100,0.5); border-top: none; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; z-index: 10; transition: height 0.1s linear; transform: rotate(-20deg); transform-origin: top center;"></div>'+
 '<div style="position: absolute; bottom: 20px; right: 20px; background: rgba(0,0,0,0.8); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--primary); width: 250px; text-align: left;"><h4 style="margin-bottom:0.5rem;">Simulation Telemetry</h4><p style="margin:0; font-size: 0.9rem; color: var(--accent);" id="telemetry-status">Tracking kinematics...</p><div style="margin-top: 0.5rem; background: #222; border-radius: 4px; overflow: hidden; height: 10px;"><div id="force-bar" style="width: 0%; height: 100%; background: var(--accent); transition: width 0.1s, background 0.1s;"></div></div></div></div></div>'+
 '<div class="card" style="margin-top: 1.5rem; border-top: 4px solid var(--secondary);">' +
   '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">' +
     '<h3 style="margin: 0;">Simulation Task: NGT Insertion</h3>' +
     '<div style="display: flex; align-items: center; gap: 0.5rem;">' +
       '<span style="font-size: 0.85rem; color: var(--text-muted);">Protocol Mode:</span>' +
       '<button type="button" class="cohort-pill '+(cohort==='adult'?'active':'')+'" id="pill-adult"><i class="fas fa-user"></i> Adult Protocol</button>' +
       '<button type="button" class="cohort-pill '+(cohort==='neonate'?'active':'')+'" id="pill-neonate"><i class="fas fa-baby"></i> Neonate Protocol</button>' +
     '</div>' +
   '</div>' +
   '<div class="guideline-badge-gap" style="margin-bottom: 1rem;">' +
     '<strong><i class="fas fa-exclamation-triangle"></i> Safety Warning (Common Training Gap):</strong> Avoid tube insertion into the lung. ' +
     '<span id="safety-tip">'+(cohort==='adult'?'Instruct patient to drink water through a straw — swallowing closes the airway and ensures esophageal entry.':'Provide pain management and lubricate with sterile water. Rapid, atraumatic insertion.')+'</span>' +
   '</div>' +
   '<p id="cohort-desc" style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.5rem;">' +
     (cohort==='adult' ? 'Adult checklist: Order checked & equipment ready. NEX length measured. Lubricate with jelly. Instruct patient to swallow with water.' : 'Neonate checklist: Order checked & equipment ready. Measured length. Lubricate with sterile water. Provide pain management.') +
   '</p>' +
   '<div style="margin: 1.5rem 0;"><input type="range" id="tube-slider" min="0" max="60" value="0" style="width: 100%; cursor: pointer;"></div>'+
   '<div style="display:flex; justify-content: space-between;" class="muted"><span>Naris (0cm)</span><span>Nasopharynx (15cm)</span><span>Esophagus (40cm)</span><span>Stomach (60cm)</span></div>'+
   '<p id="task-feedback" style="margin-top: 1.5rem; font-weight: 600; text-align: center; min-height: 2em;">Ready to insert...</p>'+
   '<div style="text-align: center; margin-top: 1rem;"><button class="btn btn-primary" id="complete-sim" disabled style="opacity: 0.5; cursor: not-allowed;"><i class="fas fa-arrow-right"></i> Drag slider to 60cm to complete</button></div>' +
 '</div>';
 
 attachGuidelineEvents(el);

 cfg.showNext = false;
 bar();
 
 var slider = el.querySelector('#tube-slider');
 var tubeOverlay = el.querySelector('#visual-tube');
 var forceBar = el.querySelector('#force-bar');
 var status = el.querySelector('#telemetry-status');
 var feedback = el.querySelector('#task-feedback');
 var btn = el.querySelector('#complete-sim');
 var pillAdult = el.querySelector('#pill-adult');
 var pillNeonate = el.querySelector('#pill-neonate');
 var safetyTip = el.querySelector('#safety-tip');
 var cohortDesc = el.querySelector('#cohort-desc');

 pillAdult.onclick = function(){
   cohort = 'adult';
   VC.set({ngtCohort: 'adult'});
   pillAdult.classList.add('active');
   pillNeonate.classList.remove('active');
   safetyTip.textContent = 'Instruct patient to drink water through a straw — swallowing closes the airway and ensures esophageal entry.';
   cohortDesc.textContent = 'Adult checklist: Order checked & equipment ready. NEX length measured. Lubricate with jelly. Instruct patient to swallow with water.';
   updateSliderFeedback(parseInt(slider.value, 10));
 };

 pillNeonate.onclick = function(){
   cohort = 'neonate';
   VC.set({ngtCohort: 'neonate'});
   pillNeonate.classList.add('active');
   pillAdult.classList.remove('active');
   safetyTip.textContent = 'Provide pain management and lubricate with sterile water. Rapid, atraumatic insertion.';
   cohortDesc.textContent = 'Neonate checklist: Order checked & equipment ready. Measured length. Lubricate with sterile water. Provide pain management.';
   updateSliderFeedback(parseInt(slider.value, 10));
 };
 
 var lastVal = 0;
 var lastTime = Date.now();
 var warnings = 0;
 
 function updateSliderFeedback(val) {
   if (val < 15) {
     feedback.innerHTML = '<span style="color: var(--text-main);"><i class="fas fa-arrow-down"></i> Passing through nasal cavity... (' + (cohort==='adult'?'Lubricated with jelly':'Lubricated with sterile water') + ')</span>';
     btn.disabled = true;
     btn.style.opacity = '0.5';
     btn.style.cursor = 'not-allowed';
     btn.innerHTML = '<i class="fas fa-arrow-right"></i> Drag slider to 60cm to complete';
   } else if (val < 40) {
     if (cohort === 'adult') {
       feedback.innerHTML = '<span style="color: #60a5fa;"><i class="fas fa-tint"></i> CRITICAL STEP: Instructing patient to drink water through a straw. Swallowing reflex safely directs tube into esophagus — avoiding the lung!</span>';
     } else {
       feedback.innerHTML = '<span style="color: #c084fc;"><i class="fas fa-baby"></i> CRITICAL STEP: Providing pain management. Rapid atraumatic advancement through pharynx into esophagus.</span>';
     }
     btn.disabled = true;
     btn.style.opacity = '0.5';
     btn.style.cursor = 'not-allowed';
     btn.innerHTML = '<i class="fas fa-arrow-right"></i> Drag slider to 60cm to complete';
   } else if (val < 59) {
     feedback.innerHTML = '<span style="color: var(--text-main);"><i class="fas fa-check"></i> Advancing down esophagus toward stomach cavity...</span>';
     btn.disabled = true;
     btn.style.opacity = '0.5';
     btn.style.cursor = 'not-allowed';
     btn.innerHTML = '<i class="fas fa-arrow-right"></i> Drag slider to 60cm to complete';
   } else {
     if (cohort === 'adult') {
       feedback.innerHTML = '<span style="color: var(--accent);"><i class="fas fa-check-circle"></i> Target depth (60cm) reached. Procedure documented. Order initial Chest X-ray and measure external length every 4 hours!</span>';
     } else {
       feedback.innerHTML = '<span style="color: var(--accent);"><i class="fas fa-check-circle"></i> Target depth reached. Procedure documented. Aspirate stomach contents and verify pH strip (< 5.5 confirms placement)!</span>';
     }
     btn.disabled = false;
     btn.style.opacity = '1';
     btn.style.cursor = 'pointer';
     btn.innerHTML = '<i class="fas fa-clipboard-check"></i> Complete Task & View Clinical Feedback';
     VC.set({kinematicWarnings: warnings, ngtCohort: cohort});
   }
 }

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
     slider.value = lastVal;
     warnings++;
   } else {
     forceBar.style.background = 'var(--accent)';
     status.textContent = 'Force nominal';
     lastVal = val;
     tubeOverlay.style.height = (val / 60) * 48 + '%';
   }
   
   updateSliderFeedback(val);
   lastTime = now;
 };
 
 btn.onclick = function() {
   if (btn.disabled) return;
   VC.set({stage: 3, kinematicWarnings: warnings, ngtCohort: cohort});
   draw();
   focusTop();
 };
},

function feedback(el){
 var s = VC.get();
 var warnings = s.kinematicWarnings || 0;
 var cohort = s.ngtCohort || 'adult';
 var score = Math.max(100 - (warnings * 15), 40);
 var forceStatus = warnings === 0 ? '<span style="float:right; color: var(--accent);">Excellent (Smooth)</span><br><div class="progress"><span style="width: 100%; background: var(--accent);"></span></div>' : '<span style="float:right; color: var(--danger);">Excessive Force Detected ('+warnings+'x)</span><br><div class="progress"><span style="width: '+(100-(warnings*20))+'%; background: var(--danger);"></span></div>';
 
 var verificationText = cohort === 'adult' 
   ? 'Initial Chest X-ray ordered + external tube length marked and scheduled for verification every 4 hours.'
   : 'Gastric contents aspirated and tested via pH strip; pH < 5.5 verified before any feeding.';

 el.innerHTML='<div class="grid-2">' +
   '<div class="card"><h3>Objective Kinematic Score</h3><div class="score" style="color: '+(score>70?'var(--accent)':'var(--danger)')+';">'+score+'%</div><p class="muted" style="text-align: center;">Compared against expert clinician baseline</p></div>' +
   '<div class="card"><h3>Performance Metrics</h3><ul style="list-style: none; padding: 0;"><li style="margin-bottom: 1rem;"><strong>Economy of Motion:</strong> <span style="float:right; color: var(--accent);">Excellent (92%)</span><br><div class="progress"><span style="width: 92%; background: var(--accent);"></span></div></li><li style="margin-bottom: 1rem;"><strong>Tissue Handling Force:</strong> '+forceStatus+'</li><li style="margin-bottom: 1rem;"><strong>Path Deviation:</strong> <span style="float:right; color: #fbbf24;">+4% vs Baseline</span><br><div class="progress"><span style="width: 96%; background: #fbbf24;"></span></div></li></ul></div>' +
 '</div>' +
 '<div class="card" style="margin-top: 2rem; border-left: 4px solid var(--accent);">' +
   '<h3 style="color: var(--accent);"><i class="fas fa-clipboard-check" style="margin-right: 0.5rem;"></i>Clinical Guidelines & Safety Verification Audit ('+(cohort==='adult'?'Adult Protocol':'Neonate Protocol')+')</h3>' +
   '<div class="grid-2" style="margin-top: 1rem;">' +
     '<div style="background: rgba(16, 185, 129, 0.08); padding: 1.25rem; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.2);">' +
       '<p style="color: var(--accent); font-weight: 600; margin-bottom: 0.5rem;"><i class="fas fa-shield-alt" style="margin-right: 0.4rem;"></i>Training Gap Prevention: Lung Intubation</p>' +
       '<p style="font-size: 0.95rem; margin: 0;"><strong>Status: PASSED.</strong> ' + (cohort==='adult' ? 'Swallowing coordination with water drinking successfully prompted glottic closure, directing the tube safely into the esophagus and preventing inadvertent pulmonary intubation.' : 'Rapid atraumatic advancement with pain management prevented respiratory distress and airway diversion.') + '</p>' +
     '</div>' +
     '<div style="background: rgba(59, 130, 246, 0.08); padding: 1.25rem; border-radius: 8px; border: 1px solid rgba(59, 130, 246, 0.2);">' +
       '<p style="color: var(--primary); font-weight: 600; margin-bottom: 0.5rem;"><i class="fas fa-check-double" style="margin-right: 0.4rem;"></i>Placement Verification Standard</p>' +
       '<p style="font-size: 0.95rem; margin: 0;"><strong>Status: VERIFIED.</strong> ' + verificationText + '</p>' +
     '</div>' +
   '</div>' +
   '<div style="margin-top: 1.25rem; font-size: 0.95rem;">' +
     '<p style="margin-bottom: 0.5rem;"><strong>Step Adherence Checklist:</strong> Doctor’s order verified <i class="fas fa-check" style="color:var(--accent);"></i> &nbsp;·&nbsp; Equipment collected <i class="fas fa-check" style="color:var(--accent);"></i> &nbsp;·&nbsp; Tube lubricated <i class="fas fa-check" style="color:var(--accent);"></i> &nbsp;·&nbsp; Documentation logged <i class="fas fa-check" style="color:var(--accent);"></i></p>' +
   '</div>' +
 '</div>' +
 '<div class="card" style="margin-top: 2rem; border-left: 4px solid var(--primary);">' +
   '<h3>AI Procedural Feedback</h3>' +
   '<p><strong>Phase 1 (Naris & Nasopharynx):</strong> '+ (warnings > 0 ? '<span style="color:var(--danger)">The AI detected rapid, excessive force applied during advancement. In a real clinical setting, this risks mucosal trauma and epistaxis. You must advance the tube slowly and gently.</span>' : '<span style="color:var(--accent)">Excellent, steady advancement through the turbinates. No excessive force detected.</span>') +'</p>' +
   '<p><strong>Phase 2 (Pharynx & Esophagus):</strong> Correct pacing maintained. Swallowing reflex timing aligned with expert baseline to ensure airway protection.</p>' +
   '<p><strong>Phase 3 (Gastric Placement & Audit):</strong> Reached predetermined depth (60cm). Initial confirmation protocol activated.</p>' +
 '</div>' +
 '<div class="card" style="margin-top: 2rem; border-top: 3px solid var(--secondary); background: rgba(139, 92, 246, 0.05);">' +
   '<h4 style="color: var(--secondary); margin-bottom: 0.75rem;"><i class="fas fa-graduation-cap" style="margin-right: 0.5rem;"></i>Pedagogical &amp; Ethical Evidence in Virtucare</h4>' +
   '<p style="font-size: 0.95rem; margin-bottom: 0.6rem;"><strong>Terminal Feedback Structure:</strong> Feedback is intentionally delivered upon procedure completion rather than through intrusive real-time popups. Meta-analyses demonstrate a pooled effect size of <em>d</em> = 0.74, proving that terminal debriefing fosters significantly superior novice skill retention and prevents motor interference<a href="../index.html#ref-3" class="cite-num"><sup>[3]</sup></a>.</p>' +
   '<p style="font-size: 0.95rem; margin: 0;"><strong>Mitigating Automation Bias:</strong> Objective scores serve as structured clinical decision support. To counteract automation bias—where users overlook automated inaccuracies<a href="../index.html#ref-9" class="cite-num"><sup>[9]</sup></a>—human educator review remains mandatory before any institutional sign-off<a href="../index.html#ref-12" class="cite-num"><sup>[12]</sup></a>.</p>' +
 '</div>';
 
 cfg.ok = false;
 cfg.showNext = false;
 bar();
}
];

if (!VC.get) {
  window._vc_state = { stage: 0 };
  VC.get = function() { return window._vc_state; };
  VC.set = function(s) { window._vc_state = Object.assign(window._vc_state, s); };
  VC.reset = function() { window._vc_state = { stage: 0 }; };
  VC.esc = function(s) { return s; };
}

draw();
VC.draw=draw;
})();
