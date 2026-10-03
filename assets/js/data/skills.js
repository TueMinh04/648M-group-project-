/* PLACEHOLDER STEPS. NOT clinical instructions. Replace with validated, cited content. */
window.VC=window.VC||{};
VC.SKILLS={

 /* ── GENERAL / WARD ─────────────────────────────────────────────── */
 ngt: {
  id:'ngt', title:'NGT Insertion', category:'General',
  time:'5 minutes', difficulty:'introductory',
  objectives:'to safely insert a nasogastric tube',
  steps:[
   {id:'s1',title:'Simulation preparation',category:'Preparation',severity:'standard',
    prompt:'Placeholder prompt: choose the best placeholder action for this step.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'b',rationale:'Placeholder rationale. To be replaced with clinically validated explanation.',source:'Source to be added',validated:false},
   {id:'s2',title:'Patient positioning',category:'Technique',severity:'standard',
    prompt:'Placeholder prompt: choose the best placeholder action for this step.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'a',rationale:'Placeholder rationale.',source:'Source to be added',validated:false},
   {id:'s3',title:'Procedure step',category:'Technique',severity:'standard',
    prompt:'Placeholder prompt: choose the best placeholder action for this step.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'c',rationale:'Placeholder rationale.',source:'Source to be added',validated:false},
   {id:'s4',title:'Safety check',category:'Safety',severity:'critical',
    prompt:'Placeholder prompt: a placeholder safety event occurs. Choose a placeholder response.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'b',rationale:'Placeholder rationale for a safety-critical step.',source:'Source to be added',validated:false},
   {id:'s5',title:'Verification',category:'Verification',severity:'critical',
    prompt:'Placeholder prompt: choose the best placeholder verification action.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'a',rationale:'Placeholder rationale for a safety-critical step.',source:'Source to be added',validated:false}
  ]
 },

 iv: {
  id:'iv', title:'Peripheral IV Insertion', category:'General',
  time:'7 minutes', difficulty:'intermediate',
  objectives:'to safely establish peripheral intravenous access',
  steps:[
   {id:'iv1',title:'Equipment preparation',category:'Preparation',severity:'standard',
    prompt:'Placeholder prompt for IV insertion equipment preparation.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'a',rationale:'Placeholder rationale.',source:'Source to be added',validated:false},
   {id:'iv2',title:'Site selection',category:'Technique',severity:'standard',
    prompt:'Placeholder prompt for selecting the appropriate vein.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'c',rationale:'Placeholder rationale.',source:'Source to be added',validated:false},
   {id:'iv3',title:'Needle insertion',category:'Technique',severity:'critical',
    prompt:'Placeholder prompt for needle insertion angle and depth.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'b',rationale:'Placeholder rationale for a safety-critical step.',source:'Source to be added',validated:false}
  ]
 },

 foley: {
  id:'foley', title:'Urinary Catheterization', category:'General',
  time:'10 minutes', difficulty:'advanced',
  objectives:'to safely and aseptically perform a urinary catheterization',
  steps:[
   {id:'f1',title:'Sterile field setup',category:'Preparation',severity:'critical',
    prompt:'Placeholder prompt for maintaining asepsis.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'b',rationale:'Placeholder rationale for asepsis.',source:'Source to be added',validated:false},
   {id:'f2',title:'Insertion',category:'Technique',severity:'standard',
    prompt:'Placeholder prompt for insertion technique.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'a',rationale:'Placeholder rationale.',source:'Source to be added',validated:false}
  ]
 },

 /* ── ICU SKILLS ─────────────────────────────────────────────────── */
 cl_jugular: {
  id:'cl_jugular', title:'Central Line – Internal Jugular', category:'ICU',
  time:'15 minutes', difficulty:'advanced',
  objectives:'to safely insert a central venous catheter via the internal jugular vein',
  steps:[
   {id:'clj1',title:'Patient consent & time-out',category:'Preparation',severity:'critical',
    prompt:'Before starting, which step is mandatory to ensure patient safety and legal consent?',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'a',rationale:'Placeholder rationale: informed consent and a formal time-out are required before any invasive procedure.',source:'Source to be added',validated:false},
   {id:'clj2',title:'Sterile prep & draping',category:'Preparation',severity:'critical',
    prompt:'Placeholder prompt: select the correct sterile preparation sequence.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'b',rationale:'Placeholder rationale for maximal sterile barrier precautions.',source:'Source to be added',validated:false},
   {id:'clj3',title:'Ultrasound guidance',category:'Technique',severity:'standard',
    prompt:'Placeholder prompt: how should ultrasound be used to identify the target vessel?',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'c',rationale:'Placeholder rationale for ultrasound-guided cannulation.',source:'Source to be added',validated:false},
   {id:'clj4',title:'Seldinger technique',category:'Technique',severity:'critical',
    prompt:'Placeholder prompt: place the steps of the Seldinger technique in the correct order.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'a',rationale:'Placeholder rationale for Seldinger technique sequence.',source:'Source to be added',validated:false},
   {id:'clj5',title:'Post-insertion verification',category:'Verification',severity:'critical',
    prompt:'Placeholder prompt: which action confirms safe catheter placement after insertion?',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'b',rationale:'Placeholder rationale: CXR confirmation to rule out pneumothorax and confirm tip position.',source:'Source to be added',validated:false}
  ]
 },

 arterial: {
  id:'arterial', title:'Arterial Line Insertion', category:'ICU',
  time:'10 minutes', difficulty:'advanced',
  objectives:'to safely establish continuous invasive arterial blood pressure monitoring',
  steps:[
   {id:'art1',title:'Allen\'s test',category:'Preparation',severity:'critical',
    prompt:'Placeholder prompt: perform the Allen\'s test — what does a negative result indicate?',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'b',rationale:'Placeholder rationale: Allen\'s test assesses collateral circulation before radial artery cannulation.',source:'Source to be added',validated:false},
   {id:'art2',title:'Wrist positioning & prep',category:'Preparation',severity:'standard',
    prompt:'Placeholder prompt: choose the correct wrist position to optimise radial artery access.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'a',rationale:'Placeholder rationale for dorsiflexed wrist position.',source:'Source to be added',validated:false},
   {id:'art3',title:'Cannulation technique',category:'Technique',severity:'critical',
    prompt:'Placeholder prompt: describe the transfixion or direct cannulation technique.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'c',rationale:'Placeholder rationale for arterial cannulation approach.',source:'Source to be added',validated:false},
   {id:'art4',title:'Transducer zeroing',category:'Verification',severity:'standard',
    prompt:'Placeholder prompt: at what anatomical level is the transducer zeroed for accurate readings?',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'b',rationale:'Placeholder rationale: phlebostatic axis at the 4th ICS, mid-axillary line.',source:'Source to be added',validated:false}
  ]
 },

 tracheostomy: {
  id:'tracheostomy', title:'Tracheostomy Care', category:'ICU',
  time:'15 minutes', difficulty:'advanced',
  objectives:'to safely perform routine tracheostomy tube care and troubleshoot complications',
  steps:[
   {id:'trach1',title:'Tracheostomy tube types',category:'Preparation',severity:'standard',
    prompt:'Placeholder prompt: identify the correct tracheostomy tube type for this patient scenario.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'a',rationale:'Placeholder rationale for cuffed vs uncuffed, fenestrated vs non-fenestrated tube selection.',source:'Source to be added',validated:false},
   {id:'trach2',title:'Suctioning technique',category:'Technique',severity:'standard',
    prompt:'Placeholder prompt: choose the correct closed-circuit suctioning sequence.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'c',rationale:'Placeholder rationale for safe suctioning depth and duration.',source:'Source to be added',validated:false},
   {id:'trach3',title:'Accidental decannulation',category:'Safety',severity:'critical',
    prompt:'Placeholder prompt: the tracheostomy tube has dislodged. What is the immediate priority action?',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'b',rationale:'Placeholder rationale: cover stoma, maintain oxygenation, call for emergency airway support.',source:'Source to be added',validated:false},
   {id:'trach4',title:'Cuff pressure management',category:'Verification',severity:'standard',
    prompt:'Placeholder prompt: what is the target cuff pressure range and how is it measured?',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'a',rationale:'Placeholder rationale: 20–30 cmH2O to prevent aspiration without causing tracheal ischaemia.',source:'Source to be added',validated:false}
  ]
 },

 /* ── OR / SURGICAL ──────────────────────────────────────────────── */
 laparotomy: {
  id:'laparotomy', title:'Exploratory Laparotomy', category:'OR',
  time:'20 minutes', difficulty:'advanced',
  objectives:'to understand the sequence of steps in an emergency exploratory laparotomy',
  steps:[
   {id:'lap1',title:'Pre-operative checklist',category:'Preparation',severity:'critical',
    prompt:'Placeholder prompt: which pre-operative item is mandatory before emergency laparotomy?',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'a',rationale:'Placeholder rationale for WHO surgical safety checklist.',source:'Source to be added',validated:false},
   {id:'lap2',title:'Incision selection',category:'Technique',severity:'standard',
    prompt:'Placeholder prompt: choose the appropriate abdominal incision for the clinical scenario.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'c',rationale:'Placeholder rationale for midline vs other incisions in emergencies.',source:'Source to be added',validated:false},
   {id:'lap3',title:'Haemorrhage control',category:'Safety',severity:'critical',
    prompt:'Placeholder prompt: massive bleeding is encountered. Identify the correct immediate manoeuvre.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'b',rationale:'Placeholder rationale for damage control surgery principles.',source:'Source to be added',validated:false},
   {id:'lap4',title:'Abdominal closure',category:'Verification',severity:'standard',
    prompt:'Placeholder prompt: select the correct closure technique and instrument count requirement.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'a',rationale:'Placeholder rationale: retained surgical item prevention — count must reconcile before closure.',source:'Source to be added',validated:false}
  ]
 },

 endoscopy: {
  id:'endoscopy', title:'Upper GI Endoscopy (OGD)', category:'OR',
  time:'15 minutes', difficulty:'intermediate',
  objectives:'to understand the safe sequencing of an upper gastrointestinal endoscopy',
  steps:[
   {id:'endo1',title:'Consent & sedation plan',category:'Preparation',severity:'critical',
    prompt:'Placeholder prompt: which sedation-related assessment is required before OGD?',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'b',rationale:'Placeholder rationale for airway assessment and sedation risk in endoscopy.',source:'Source to be added',validated:false},
   {id:'endo2',title:'Scope insertion',category:'Technique',severity:'standard',
    prompt:'Placeholder prompt: describe the correct oropharyngeal insertion technique.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'c',rationale:'Placeholder rationale for scope passage through the cricopharyngeus.',source:'Source to be added',validated:false},
   {id:'endo3',title:'Mucosal assessment',category:'Technique',severity:'standard',
    prompt:'Placeholder prompt: identify a mucosal finding requiring immediate intervention.',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'a',rationale:'Placeholder rationale for Forrest classification and bleeding management.',source:'Source to be added',validated:false},
   {id:'endo4',title:'Perforation recognition',category:'Safety',severity:'critical',
    prompt:'Placeholder prompt: the patient develops sudden pain and distension during scope advancement. What is the next step?',
    options:[{id:'a',text:'Placeholder option A'},{id:'b',text:'Placeholder option B'},{id:'c',text:'Placeholder option C'}],
    correct:'b',rationale:'Placeholder rationale: withdraw scope, stop air insufflation, call surgical team immediately.',source:'Source to be added',validated:false}
  ]
 }

};
