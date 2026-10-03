/* VIRTUCARE – Clinical Skills Data
 * Questions are illustrative educational scenarios for an academic prototype.
 * NOT clinical instructions. All content must be reviewed by a qualified clinician
 * before use in any real training context. */
window.VC = window.VC || {};
VC.SKILLS = {

  /* ── GENERAL / WARD ─────────────────────────────── */

  ngt: {
    id: 'ngt', title: 'NGT Insertion', category: 'General',
    time: '8 minutes', difficulty: 'Introductory',
    objectives: 'to safely insert a nasogastric tube and verify correct placement',
    steps: [
      {
        id: 'ngt1', title: 'Patient identification & consent', category: 'Preparation', severity: 'critical',
        prompt: 'You are about to insert an NGT for a patient ordered "for drainage post-bowel surgery". Before touching the patient, what is your FIRST action?',
        options: [
          { id: 'a', text: 'Gather the NGT insertion kit and bring it to the bedside.' },
          { id: 'b', text: 'Confirm two patient identifiers (name + date of birth) against the armband and medication record, then explain the procedure and obtain verbal consent.' },
          { id: 'c', text: 'Check the patient\'s most recent chest X-ray to see the stomach position.' }
        ],
        correct: 'b',
        rationale: 'Two-identifier verification and informed consent are mandatory safety steps before any invasive procedure. Skipping them is a JCAHO-listed "wrong patient" risk. Gathering equipment or reviewing imaging comes after patient identification.',
        source: 'Joint Commission National Patient Safety Goals; CNA Standards of Practice',
        validated: false
      },
      {
        id: 'ngt2', title: 'Contraindication check', category: 'Safety', severity: 'critical',
        prompt: 'The nurse notes the patient had "facial trauma and basal skull fracture" six weeks ago. How does this change your approach?',
        options: [
          { id: 'a', text: 'Proceed normally — six weeks is long enough for the fracture to have healed.' },
          { id: 'b', text: 'Insert the tube very slowly and carefully to minimise risk.' },
          { id: 'c', text: 'Stop and contact the medical team. Recent base-of-skull fractures are a contraindication for nasally-inserted tubes; orogastric insertion or physician-led placement should be considered.' }
        ],
        correct: 'c',
        rationale: 'Nasogastric tubes can inadvertently enter the cranial vault via a cribriform plate fracture. This is a known cause of catastrophic iatrogenic injury. A history of recent base-of-skull fracture is an absolute contraindication to blind nasal insertion.',
        source: 'Metheny N (2016). Preventing Respiratory Complications of Tube Feedings. AACN.',
        validated: false
      },
      {
        id: 'ngt3', title: 'Tube length measurement', category: 'Technique', severity: 'standard',
        prompt: 'To estimate the external length to insert, you measure the tube against the patient. Which landmarks do you use?',
        options: [
          { id: 'a', text: 'From the nose tip to the ear lobe, then to the xiphisternum (NEX measurement).' },
          { id: 'b', text: 'From the nose to the umbilicus.' },
          { id: 'c', text: 'A standard 60 cm depth is used for all adults.' }
        ],
        correct: 'a',
        rationale: 'The NEX (Nose–Ear lobe–Xiphisternum) measurement is the validated external landmark method for estimating insertion depth. Using a fixed 60 cm ignores anatomical variation and risks oesophageal or duodenal malpositioning.',
        source: 'Taylor SJ et al. (2014). Confirming nasogastric feeding tube position. Clin Nutr.',
        validated: false
      },
      {
        id: 'ngt4', title: 'Position during insertion', category: 'Technique', severity: 'standard',
        prompt: 'The patient is awake and cooperative. What is the optimal position for NGT insertion?',
        options: [
          { id: 'a', text: 'Lying flat (supine) to reduce the gag reflex.' },
          { id: 'b', text: 'Sitting upright at 45–90°, chin slightly tucked to the chest as the tube passes the nasopharynx.' },
          { id: 'c', text: 'Left lateral decubitus (lying on their left side).' }
        ],
        correct: 'b',
        rationale: 'An upright position with chin-to-chest flexion closes the glottis and directs the tube toward the oesophagus rather than the trachea. This position is standard in all major NGT insertion guidelines.',
        source: 'NHS England: NPSA Rapid Response Report NPSA/2011/PSA002.',
        validated: false
      },
      {
        id: 'ngt5', title: 'Placement verification', category: 'Verification', severity: 'critical',
        prompt: 'You have inserted the NGT to the marked length. The patient is not in distress. Which method should you use FIRST to confirm correct gastric placement?',
        options: [
          { id: 'a', text: 'Auscultate for a "whoosh" sound while injecting air (the "whoosh test").' },
          { id: 'b', text: 'Test the aspirate pH with a CE-marked pH indicator strip — pH ≤ 5.5 confirms gastric placement before any feeding or medication.' },
          { id: 'c', text: 'Ask the patient if they can feel the tube in their stomach.' }
        ],
        correct: 'b',
        rationale: 'pH testing of aspirate (pH ≤ 5.5) is the gold-standard first-line bedside confirmation method per NPSA and NNNG guidelines. The "whoosh test" is unreliable and no longer recommended — it has led to deaths from pulmonary misplacement. Subjective patient report is not reliable.',
        source: 'NPSA/2011/PSA002; NNNG (2016) Safe insertion and ongoing care of NGTs in adults.',
        validated: false
      }
    ]
  },

  iv: {
    id: 'iv', title: 'Peripheral IV Insertion', category: 'General',
    time: '7 minutes', difficulty: 'Introductory',
    objectives: 'to safely establish peripheral intravenous access',
    steps: [
      {
        id: 'iv1', title: 'Site selection', category: 'Technique', severity: 'standard',
        prompt: 'You need to place a peripheral IV for a patient requiring IV antibiotics. They have had a right-sided mastectomy. Which site is most appropriate?',
        options: [
          { id: 'a', text: 'Right antecubital fossa — it\'s the largest and easiest vein.' },
          { id: 'b', text: 'Left forearm or hand vein — avoid the ipsilateral limb after mastectomy due to lymphoedema risk.' },
          { id: 'c', text: 'Right dorsal hand — it\'s away from the surgical site.' }
        ],
        correct: 'b',
        rationale: 'Venepuncture or IV access in the ipsilateral limb after mastectomy/axillary dissection increases the risk of triggering or worsening lymphoedema. The contralateral arm should always be used. Antecubital fossae are generally avoided for long-term access because joint movement dislodges cannulae.',
        source: 'INS Infusion Therapy Standards of Practice (2021). Journal of Infusion Nursing.',
        validated: false
      },
      {
        id: 'iv2', title: 'Gauge selection', category: 'Technique', severity: 'standard',
        prompt: 'The patient may require a blood transfusion later. Which cannula gauge is most appropriate to insert now?',
        options: [
          { id: 'a', text: '22G (blue) — smallest gauge causes the least discomfort.' },
          { id: 'b', text: '18G (green) or larger — allows adequate blood flow rates for transfusion.' },
          { id: 'c', text: '24G (yellow) — best for fragile veins.' }
        ],
        correct: 'b',
        rationale: 'Blood transfusion requires at minimum an 18G cannula to prevent haemolysis from high shear forces. A 20G can be used but 18G is preferred. Smaller gauges (22G, 24G) are not appropriate for blood products.',
        source: 'BCSH (2012). Guidelines for the administration of blood and blood components. Transfusion Medicine.',
        validated: false
      },
      {
        id: 'iv3', title: 'Aseptic technique', category: 'Safety', severity: 'critical',
        prompt: 'Before inserting the cannula, what skin preparation is required?',
        options: [
          { id: 'a', text: 'Wipe the site with a dry gauze to remove visible dirt, then insert immediately.' },
          { id: 'b', text: 'Clean the skin with 2% chlorhexidine in 70% alcohol using a scrubbing technique for 30 seconds, then allow to dry completely (≥30 seconds) before inserting.' },
          { id: 'c', text: 'Use a standard alcohol swab and insert immediately after wiping.' }
        ],
        correct: 'b',
        rationale: 'Chlorhexidine gluconate 2% in 70% isopropyl alcohol is recommended for peripheral IV skin antisepsis. A 30-second scrub followed by 30 seconds of drying is required — inserting before the antiseptic dries negates its antimicrobial effect. This is a key CLABSI/PIVC-related BSI prevention step.',
        source: 'CDC (2011). Guidelines for the Prevention of Intravascular Catheter-Related Infections.',
        validated: false
      }
    ]
  },

  foley: {
    id: 'foley', title: 'Urinary Catheterization', category: 'General',
    time: '10 minutes', difficulty: 'Intermediate',
    objectives: 'to safely and aseptically perform a urinary catheterization',
    steps: [
      {
        id: 'f1', title: 'Indication review', category: 'Preparation', severity: 'critical',
        prompt: 'A nurse asks you to insert a Foley catheter for a patient who "seems incontinent". What is your first step?',
        options: [
          { id: 'a', text: 'Insert the catheter — incontinence is a valid indication.' },
          { id: 'b', text: 'Verify the indication with the medical team. Incontinence alone is NOT an acceptable indication; catheter-associated UTI (CAUTI) risk means catheters must be justified by clinical necessity.' },
          { id: 'c', text: 'Ask the patient if they want the catheter, then proceed if they agree.' }
        ],
        correct: 'b',
        rationale: 'CAUTI is the most common hospital-acquired infection. Incontinence is explicitly listed as an inappropriate indication by the CDC and most national guidelines. Unnecessary catheters must not be inserted. Valid indications include: urinary retention, hourly output monitoring in critical illness, perioperative use, and comfort care in end-of-life.',
        source: 'CDC (2019). CAUTI Prevention Guidelines. HICPAC.',
        validated: false
      },
      {
        id: 'f2', title: 'Sterile field setup', category: 'Preparation', severity: 'critical',
        prompt: 'You are opening your catheter kit. You accidentally touch the inside of the sterile drape with your ungloved hand. What should you do?',
        options: [
          { id: 'a', text: 'Continue — the drape exterior is the sterile surface, not the interior.' },
          { id: 'b', text: 'Open a new catheter kit. The sterile field is contaminated and cannot be used.' },
          { id: 'c', text: 'Use hand sanitiser on the contaminated drape and proceed.' }
        ],
        correct: 'b',
        rationale: 'Once a sterile field is contaminated by contact with a non-sterile item, it cannot be restored. Using hand sanitiser does not re-sterilise a surface. A new kit must be opened. This principle is fundamental to ANTT (Aseptic Non-Touch Technique) and sterile field management.',
        source: 'Rowley S, Clare S (2011). ANTT: A standard approach to aseptic technique. Nursing Times.',
        validated: false
      },
      {
        id: 'f3', title: 'Balloon inflation', category: 'Technique', severity: 'critical',
        prompt: 'You have inserted the catheter and urine is draining. You are about to inflate the balloon. The patient suddenly reports sharp suprapubic pain during inflation after 2 mL. What do you do?',
        options: [
          { id: 'a', text: 'Inflate more slowly — the pain is just from the pressure of the balloon expanding.' },
          { id: 'b', text: 'Immediately deflate the balloon and advance the catheter further before re-attempting inflation — the balloon may be in the urethra, not the bladder.' },
          { id: 'c', text: 'Inflate to the full 10 mL as per protocol, then reassess.' }
        ],
        correct: 'b',
        rationale: 'Balloon inflation in the urethra (rather than the bladder) causes urethral rupture — a serious complication. Sharp pain during inflation is the classic warning sign. The correct response is immediate deflation and further advancement. Free urine flow before inflation must be confirmed, but pain on inflation requires the balloon be deflated immediately.',
        source: 'Feneley RC et al. (2015). Urinary catheter complications. Therapeutic Advances in Urology.',
        validated: false
      }
    ]
  },

  /* ── ICU SKILLS ─────────────────────────────────── */

  cl_jugular: {
    id: 'cl_jugular', title: 'Central Line – Internal Jugular', category: 'ICU',
    time: '15 minutes', difficulty: 'Advanced',
    objectives: 'to safely insert a central venous catheter via the internal jugular vein using ultrasound guidance and Seldinger technique',
    steps: [
      {
        id: 'clj1', title: 'Pre-procedure time-out', category: 'Preparation', severity: 'critical',
        prompt: 'Before inserting a central venous catheter (CVC), which pre-procedure check is MANDATORY to reduce preventable harm?',
        options: [
          { id: 'a', text: 'A formal time-out: confirm patient identity, site (side), indication, consent, allergies, and coagulation status (platelets > 50×10⁹/L, INR < 1.5 for elective insertion).' },
          { id: 'b', text: 'Confirm the patient has IV access elsewhere so you can run fluids during the procedure.' },
          { id: 'c', text: 'Ensure the patient has had nothing by mouth for 4 hours.' }
        ],
        correct: 'a',
        rationale: 'A formal pre-procedural time-out (analogous to the WHO Surgical Safety Checklist) is required before all CVC insertions. Coagulation parameters must be reviewed — uncorrected coagulopathy is a relative contraindication. Wrong-site CVC insertion is a reportable never event.',
        source: 'McGee DC, Gould MK (2003). Preventing complications of central venous catheterization. NEJM. 348(12):1123–1133.',
        validated: false
      },
      {
        id: 'clj2', title: 'Maximal sterile barrier', category: 'Preparation', severity: 'critical',
        prompt: 'You are about to perform the CVC insertion. Which sterile barrier precautions are required?',
        options: [
          { id: 'a', text: 'Sterile gloves and a small sterile drape over the insertion site.' },
          { id: 'b', text: 'Full sterile gown, sterile gloves, cap, mask, and a large full-body sterile drape covering the patient from head to feet.' },
          { id: 'c', text: 'Sterile gloves only — the internal jugular is a relatively clean site.' }
        ],
        correct: 'b',
        rationale: 'Maximal sterile barrier (MSB) precautions are required for all CVC insertions per CDC guidelines. MSB includes: surgical cap, mask, sterile gown, sterile gloves, and a large sterile drape. MSB precautions reduce CLABSI rates by 50–70% compared to gloves-only technique.',
        source: 'CDC (2011). Guidelines for the Prevention of Intravascular Catheter-Related Infections. MMWR.',
        validated: false
      },
      {
        id: 'clj3', title: 'Ultrasound guidance', category: 'Technique', severity: 'standard',
        prompt: 'Using ultrasound, you identify two vessels in the neck. How do you differentiate the internal jugular vein (IJV) from the carotid artery?',
        options: [
          { id: 'a', text: 'The artery is lateral and the vein is medial on ultrasound.' },
          { id: 'b', text: 'The IJV is compressible with gentle probe pressure, appears thin-walled, and enlarges with Valsalva. The carotid artery is non-compressible, has visible pulsation, and thicker walls.' },
          { id: 'c', text: 'The vein appears brighter (hyperechoic) on ultrasound compared to the artery.' }
        ],
        correct: 'b',
        rationale: 'Compressibility is the most reliable bedside ultrasound test to distinguish vein from artery. Veins collapse with gentle probe pressure; arteries do not. Additional features: IJV enlarges with Valsalva (breath-hold) and Trendelenburg positioning. Inadvertent carotid puncture can cause haematoma, stroke, or death.',
        source: 'Troianos CA et al. (2011). Guidelines for performing ultrasound guided vascular cannulation. J Am Soc Echocardiogr.',
        validated: false
      },
      {
        id: 'clj4', title: 'Seldinger technique', category: 'Technique', severity: 'critical',
        prompt: 'After successful needle venipuncture (dark, non-pulsatile blood returns), what is the correct NEXT step in the Seldinger technique?',
        options: [
          { id: 'a', text: 'Remove the needle and immediately apply pressure — confirm venous access with blood gas before proceeding.' },
          { id: 'b', text: 'Advance the guidewire through the needle with the J-tip leading, confirm it passes without resistance, then remove the needle while holding the wire.' },
          { id: 'c', text: 'Thread the catheter directly over the needle before removing it.' }
        ],
        correct: 'b',
        rationale: 'The Seldinger technique sequence is: needle → guidewire → dilator → catheter, each over the wire. The wire must advance without resistance (resistance = malposition, e.g., wire entering the right atrium triggering arrhythmia). The needle is never removed before the wire is secured, and the wire must never be lost inside the patient.',
        source: 'Seldinger SI (1953). Catheter replacement of the needle in percutaneous arteriography. Acta Radiol.',
        validated: false
      },
      {
        id: 'clj5', title: 'Post-insertion confirmation', category: 'Verification', severity: 'critical',
        prompt: 'The CVC is placed and sutured. All lumens aspirate blood and flush easily. What is the mandatory post-insertion step?',
        options: [
          { id: 'a', text: 'Start the ordered IV infusion immediately — aspiration and flushing confirm position.' },
          { id: 'b', text: 'Order and review a chest X-ray (CXR) before any infusion. Confirm catheter tip position in the distal SVC/cavoatrial junction and exclude pneumothorax.' },
          { id: 'c', text: 'Document the procedure and monitor the patient for 30 minutes before using the line.' }
        ],
        correct: 'b',
        rationale: 'CXR is mandatory before using an IJV CVC to: (1) confirm tip position — tip in the right atrium causes arrhythmias; too proximal risks thrombosis; (2) exclude pneumothorax (rare with IJV but possible). Aspiration and flushing alone do not confirm safe tip location.',
        source: 'Vesely TM (2003). Central venous catheter tip position: a continuing controversy. J Vasc Interv Radiol.',
        validated: false
      }
    ]
  },

  arterial: {
    id: 'arterial', title: 'Arterial Line Insertion', category: 'ICU',
    time: '10 minutes', difficulty: 'Advanced',
    objectives: 'to safely establish continuous invasive arterial blood pressure monitoring via radial artery cannulation',
    steps: [
      {
        id: 'art1', title: "Allen's test", category: 'Preparation', severity: 'critical',
        prompt: "You plan to insert a radial arterial line in the right wrist. You perform an Allen's test. After releasing the ulnar artery (while keeping radial compressed), the palm remains pale for 15 seconds. What does this mean?",
        options: [
          { id: 'a', text: 'Normal — pallor lasting up to 15 seconds is acceptable; proceed with right radial cannulation.' },
          { id: 'b', text: "Abnormal Allen's test — inadequate ulnar collateral circulation. The right radial artery should NOT be cannulated; consider the left wrist or an alternative site." },
          { id: 'c', text: "Inconclusive — repeat the test three times and average the result." }
        ],
        correct: 'b',
        rationale: "A positive Allen's test (normal) is refill within ≤ 7 seconds. Persistent pallor > 7–10 seconds indicates inadequate ulnar collateral flow, meaning hand perfusion depends on the radial artery. Cannulating in this setting risks hand ischaemia. Use the contralateral wrist or the femoral/dorsalis pedis artery.",
        source: "Allen EV (1929). Thromboangiitis obliterans. Am J Med Sci. Modified Allen test: Fuhrman BP et al., Critical Care.",
        validated: false
      },
      {
        id: 'art2', title: 'Wrist positioning', category: 'Preparation', severity: 'standard',
        prompt: 'How should the wrist be positioned to optimise radial artery access?',
        options: [
          { id: 'a', text: 'Wrist in neutral (straight) position, palm facing up.' },
          { id: 'b', text: 'Wrist dorsiflexed 30–60° (extended backward) over a rolled towel, palm facing up — this moves the artery closer to the skin surface.' },
          { id: 'c', text: 'Wrist flexed (bent forward) 45° to relax the skin.' }
        ],
        correct: 'b',
        rationale: 'Dorsiflexion of 30–60° tenses the skin and subcutaneous tissue, elevating the radial artery and making it easier to palpate and cannulate. A rolled towel or IV bag under the wrist maintains this position. Over-extension (> 60°) can occlude the artery.',
        source: 'Scheer BV et al. (2002). Clinical review: complications and risk factors of arterial catheters. Crit Care.',
        validated: false
      },
      {
        id: 'art3', title: 'Cannulation and flashback', category: 'Technique', severity: 'critical',
        prompt: 'You advance the needle at 30–45° and see a flash of bright red, pulsatile blood in the hub. What is the NEXT correct step?',
        options: [
          { id: 'a', text: 'Immediately connect the transducer tubing to the needle hub and begin monitoring.' },
          { id: 'b', text: 'Lower the needle angle to ~10°, advance 1–2 mm more to ensure the catheter tip (not just the needle bevel) is intraluminal, then advance the catheter over the needle while withdrawing the needle.' },
          { id: 'c', text: 'Inject 2 mL of heparinised saline through the needle to confirm position before advancing the catheter.' }
        ],
        correct: 'b',
        rationale: 'Flashback confirms the needle bevel is in the artery, but the catheter tip may still be outside the vessel wall. Lowering the angle and advancing slightly ensures the plastic catheter is fully intraluminal before threading. Injecting saline through a needle in an artery risks air embolism and is not the correct technique.',
        source: 'Scheer BV et al. (2002). Clinical review: complications and risk factors of arterial catheters. Crit Care.',
        validated: false
      },
      {
        id: 'art4', title: 'Transducer zeroing', category: 'Verification', severity: 'standard',
        prompt: 'Before recording blood pressure readings, you must zero the transducer. At which anatomical level should the air-fluid interface of the transducer be placed?',
        options: [
          { id: 'a', text: 'At the level of the radial artery in the wrist.' },
          { id: 'b', text: 'At the phlebostatic axis: 4th intercostal space, mid-axillary line — the estimated level of the right atrium.' },
          { id: 'c', text: 'At the mid-sternal level.' }
        ],
        correct: 'b',
        rationale: 'The phlebostatic axis (4th ICS, mid-axillary line) is the standard reference level for haemodynamic pressure measurement as it approximates the right atrial level. Every 2.5 cm the transducer is above the phlebostatic axis results in ~2 mmHg underestimation of BP, and vice versa. Incorrect levelling leads to erroneous treatment decisions.',
        source: 'Ahrens TS, Taylor LA (1992). Hemodynamic Waveform Analysis. Saunders; Magder S (2006). Central venous pressure monitoring. Curr Opin Crit Care.',
        validated: false
      }
    ]
  },

  tracheostomy: {
    id: 'tracheostomy', title: 'Tracheostomy Care', category: 'ICU',
    time: '12 minutes', difficulty: 'Advanced',
    objectives: 'to safely perform routine tracheostomy tube care and respond appropriately to complications including accidental decannulation',
    steps: [
      {
        id: 'trach1', title: 'Tube type identification', category: 'Preparation', severity: 'standard',
        prompt: 'Your patient has a tracheostomy and is being weaned from ventilation. They can phonate (make sounds). What type of tracheostomy tube does this suggest is in situ?',
        options: [
          { id: 'a', text: 'A cuffed tube with cuff fully inflated — phonation is still possible with a full cuff.' },
          { id: 'b', text: 'A fenestrated tube (with inner fenestrated cannula in place) or a deflated cuffed tube — air can pass upward through the larynx allowing phonation.' },
          { id: 'c', text: 'A standard non-fenestrated tube — all tracheostomy patients can phonate.' }
        ],
        correct: 'b',
        rationale: 'When a cuffed tracheostomy tube has a fully inflated cuff, air cannot bypass the cuff to reach the larynx, so phonation is impossible. Phonation indicates either: cuff is deflated, or a fenestrated tube is in use (hole allows airflow above the cuff). This distinction matters when suctioning — a fenestrated inner cannula must be replaced with a non-fenestrated one before suctioning to prevent suction catheter trauma through the fenestration.',
        source: 'Mitchell RB et al. (2013). Clinical consensus statement: Tracheostomy care. Otolaryngology HNS.',
        validated: false
      },
      {
        id: 'trach2', title: 'Cuff pressure management', category: 'Technique', severity: 'critical',
        prompt: 'You check the tracheostomy cuff pressure with a manometer and find it reads 38 cmH₂O. What is the correct action?',
        options: [
          { id: 'a', text: 'This is within normal range — cuff pressures up to 40 cmH₂O are acceptable.' },
          { id: 'b', text: 'Deflate the cuff slightly to achieve a pressure of 20–30 cmH₂O, then recheck.' },
          { id: 'c', text: 'Increase the pressure to 40 cmH₂O to ensure a complete seal and prevent aspiration.' }
        ],
        correct: 'b',
        rationale: 'Target tracheal cuff pressure is 20–30 cmH₂O (15–22 mmHg). Above 30 cmH₂O, cuff pressure exceeds tracheal mucosal capillary perfusion pressure, causing mucosal ischaemia, necrosis, and eventual tracheomalacia or tracheal stenosis. Below 20 cmH₂O risks aspiration of subglottic secretions. Cuff pressure should be checked every 8–12 hours using a calibrated aneroid manometer.',
        source: 'Nseir S et al. (2011). Continuous cuff pressure control to avoid tracheal damage. Crit Care Med.',
        validated: false
      },
      {
        id: 'trach3', title: 'Suctioning depth and technique', category: 'Technique', severity: 'standard',
        prompt: 'You need to perform endotracheal suctioning via the tracheostomy. What is the correct maximum depth to insert the suction catheter?',
        options: [
          { id: 'a', text: 'Insert until resistance is felt (carina level), then pull back 1 cm before applying suction.' },
          { id: 'b', text: 'Insert to a pre-measured depth: just beyond the end of the tracheostomy tube (length of tube + 1–2 cm). Apply suction only while withdrawing.' },
          { id: 'c', text: 'Insert to 20 cm from the tracheostomy opening in all adults.' }
        ],
        correct: 'b',
        rationale: 'Shallow, pre-measured suctioning (just past the tube tip) is evidence-based. Deep suctioning to the carina causes tracheal mucosal trauma, increases infection risk, and can trigger bradycardia via vagal stimulation. Suction should only be applied during withdrawal (rotating motion, < 15 seconds per pass) with re-oxygenation between passes.',
        source: 'AARC Clinical Practice Guideline (2010). Endotracheal suctioning of mechanically ventilated patients. Respir Care.',
        validated: false
      },
      {
        id: 'trach4', title: 'Accidental decannulation', category: 'Safety', severity: 'critical',
        prompt: 'You walk into a room and find the tracheostomy tube has fallen out. The stoma is < 7 days old (a fresh surgical tracheostomy). The patient is in respiratory distress. What is the IMMEDIATE priority?',
        options: [
          { id: 'a', text: 'Attempt to re-insert the original tracheostomy tube into the stoma immediately.' },
          { id: 'b', text: 'Call a code blue/emergency team immediately. Cover the stoma with a gloved hand or dressing. Maintain oxygenation by bag-valve-mask over the mouth and nose. Do NOT attempt blind re-insertion — a fresh stoma (<7 days) can create a false passage.' },
          { id: 'c', text: 'Apply oxygen via face mask over the stoma opening.' }
        ],
        correct: 'b',
        rationale: 'Accidental decannulation in a fresh tracheostomy (< 7 days) is a life-threatening emergency. The tracheocutaneous tract is not yet mature and can collapse, making blind re-insertion dangerous — creating a false passage into the mediastinum. Immediate actions: emergency call, stoma occlusion to allow oral/nasal ventilation, oxygenation by BVM over mouth/nose, await team capable of airway re-establishment (ENT/anaesthesia). Mature stomas (> 7 days) may allow careful re-insertion by experienced operators.',
        source: 'McGrath BA et al. (2020). UK National Tracheostomy Safety Project: Decannulation guidance. Anaesthesia.',
        validated: false
      }
    ]
  },

  /* ── OR / SURGICAL ───────────────────────────────── */

  laparotomy: {
    id: 'laparotomy', title: 'Exploratory Laparotomy', category: 'OR',
    time: '20 minutes', difficulty: 'Advanced',
    objectives: 'to understand the sequence of perioperative steps and key decision points in an emergency exploratory laparotomy',
    steps: [
      {
        id: 'lap1', title: 'WHO Surgical Safety Checklist – Sign In', category: 'Preparation', severity: 'critical',
        prompt: 'The patient arrives in the OR for emergency laparotomy. Which of the following is the correct WHO Sign In check?',
        options: [
          { id: 'a', text: 'Confirm patient identity, procedure, site, and consent; confirm anaesthesia machine/medication check complete; confirm pulse oximeter attached and functioning; note known allergies and aspiration/difficult airway risk.' },
          { id: 'b', text: 'Confirm sterility of instruments, surgeon experience, and expected blood loss.' },
          { id: 'c', text: 'The Sign In is only for elective cases — emergencies proceed directly to surgery.' }
        ],
        correct: 'a',
        rationale: 'The WHO Sign In (before anaesthesia induction) confirms: patient ID, site, consent, anaesthetic safety checks, allergy review, aspiration and difficult airway risk. The WHO checklist applies to ALL surgical cases including emergencies — it reduces surgical mortality by ~47% and is mandated in most jurisdictions. Never-event wrong-site surgery requires identity and site confirmation regardless of urgency.',
        source: 'Haynes AB et al. (2009). A surgical safety checklist to reduce morbidity and mortality in a global population. NEJM. 360(5):491–499.',
        validated: false
      },
      {
        id: 'lap2', title: 'Incision selection', category: 'Technique', severity: 'standard',
        prompt: 'For an emergency exploratory laparotomy where the cause is unknown, which incision gives the best access to the entire abdominal cavity?',
        options: [
          { id: 'a', text: 'Right subcostal (Kocher) incision — access to liver, gallbladder, and biliary tree.' },
          { id: 'b', text: 'Midline (median) laparotomy from xiphisternum to pubic symphysis — fastest, extensible, and gives full abdominal access.' },
          { id: 'c', text: 'Pfannenstiel (transverse suprapubic) — low morbidity and good cosmesis.' }
        ],
        correct: 'b',
        rationale: 'The midline laparotomy is the standard emergency incision. Advantages: rapid entry (avascular plane through linea alba), full abdominal exposure from diaphragm to pelvis, easily extendable, allows packing for damage control. Kocher is organ-specific; Pfannenstiel provides limited upper abdominal access and is used primarily for pelvic/obstetric surgery.',
        source: 'Skandalakis LJ et al. (2004). Surgical Anatomy and Technique. Springer; Emergency Laparotomy Collaborative UK.',
        validated: false
      },
      {
        id: 'lap3', title: 'Massive haemorrhage — damage control', category: 'Safety', severity: 'critical',
        prompt: 'On entering the abdomen, you encounter massive haemoperitoneum from a liver laceration. The patient is in haemorrhagic shock (BP 70/40, HR 140). What is the immediate surgical priority?',
        options: [
          { id: 'a', text: 'Attempt definitive repair of the liver laceration immediately — stopping bleeding is the priority.' },
          { id: 'b', text: 'Pack all four abdominal quadrants with lap sponges to apply tamponade pressure, temporarily control haemorrhage, then close the abdomen rapidly. Proceed with damage-control resuscitation in ICU before planned re-look in 24–48 hours.' },
          { id: 'c', text: 'Call interventional radiology for immediate hepatic embolisation while the abdomen remains open.' }
        ],
        correct: 'b',
        rationale: 'Damage Control Surgery (DCS) for haemorrhagic shock prioritises: haemorrhage control (packing/clamping) → bowel spillage control → rapid closure → ICU resuscitation → planned re-look. Definitive repair in a coagulopathic, hypothermic, acidaemic patient (the "lethal triad") dramatically increases mortality. DCS followed by staged repair has transformed survival in major trauma.',
        source: 'Rotondo MF et al. (1993). "Damage control": an approach for improved survival in exsanguinating penetrating abdominal injury. J Trauma.',
        validated: false
      },
      {
        id: 'lap4', title: 'Instrument count before closure', category: 'Verification', severity: 'critical',
        prompt: 'You are ready to close the abdomen. The scrub nurse announces the instrument count does not reconcile — one lap sponge is missing. What must you do?',
        options: [
          { id: 'a', text: 'Close the abdomen and order an immediate post-operative X-ray to locate the sponge.' },
          { id: 'b', text: 'Do not close until the count is reconciled. Perform a methodical cavity search. If not found, intraoperative X-ray must be obtained before closure.' },
          { id: 'c', text: 'Document the discrepancy and close — a sponge left in the abdomen is rare and will cause symptoms prompting investigation.' }
        ],
        correct: 'b',
        rationale: 'Retained surgical items (RSIs) are a WHO "never event." Closure before count reconciliation is not acceptable. The correct protocol: cavity search by surgical team, then intraoperative radiograph if still not located. Radio-opaque markers in surgical sponges exist specifically to aid X-ray detection. RSIs cause sepsis, fistula, bowel obstruction, and death.',
        source: 'Gawande AA et al. (2003). Risk factors for retained instruments and sponges after surgery. NEJM. 348:229–235.',
        validated: false
      }
    ]
  },

  endoscopy: {
    id: 'endoscopy', title: 'Upper GI Endoscopy (OGD)', category: 'OR',
    time: '15 minutes', difficulty: 'Intermediate',
    objectives: 'to understand the safe sequencing of an upper gastrointestinal endoscopy including complication recognition',
    steps: [
      {
        id: 'endo1', title: 'Consent and sedation assessment', category: 'Preparation', severity: 'critical',
        prompt: 'A 72-year-old patient with COPD (FEV₁ 45% predicted) and OSA requires an urgent OGD for suspected upper GI bleeding. Before proceeding, what is the critical assessment step?',
        options: [
          { id: 'a', text: 'Confirm the patient has fasted for at least 6 hours.' },
          { id: 'b', text: 'Conduct a pre-sedation airway and respiratory assessment (Mallampati score, neck mobility, STOP-BANG for OSA). Discuss monitored anaesthesia care or anaesthetist presence given the high sedation risk. Obtain informed consent explaining sedation and perforation risk (1:1000 for diagnostic OGD).' },
          { id: 'c', text: 'Start supplemental oxygen at 2 L/min as a pre-emptive measure and proceed with standard midazolam/fentanyl sedation.' }
        ],
        correct: 'b',
        rationale: 'Patients with COPD and OSA are at significantly elevated risk for sedation-related respiratory depression during endoscopy. Pre-sedation risk stratification (ASA class, airway assessment, STOP-BANG score) is mandatory. High-risk patients may require anaesthetist-administered propofol (TIVA) or general anaesthesia. Consent for diagnostic OGD must include: bleeding risk, perforation (~1:1000), aspiration, and sedation risks.',
        source: 'BSG (2020). Guideline for the use of sedation in adult gastrointestinal endoscopy. Gut. 69(7):1159–1174.',
        validated: false
      },
      {
        id: 'endo2', title: 'Scope insertion', category: 'Technique', severity: 'standard',
        prompt: 'You are advancing the endoscope and encounter resistance at the cricopharyngeus (upper oesophageal sphincter). What is the correct technique?',
        options: [
          { id: 'a', text: 'Apply firm, steady pressure to push through the resistance.' },
          { id: 'b', text: 'Ask the patient to swallow — this relaxes the cricopharyngeus momentarily, allowing the scope to pass. Advance gently under direct vision, never blind.' },
          { id: 'c', text: 'Rotate the scope clockwise 90° to navigate the angle.' }
        ],
        correct: 'b',
        rationale: 'The cricopharyngeus is the most common site of perforation during OGD (Zenker\'s diverticulum is also a risk here). Asking the patient to swallow relaxes the sphincter and allows gentle passage. Force must never be applied against resistance. All advancement must be under direct vision. Blind advancement in the pharynx risks perforation of Killian\'s triangle.',
        source: 'ASGE Standards of Practice Committee (2013). Complications of upper GI endoscopy. GIE. 78(3):363–373.',
        validated: false
      },
      {
        id: 'endo3', title: 'Bleeding lesion assessment', category: 'Technique', severity: 'critical',
        prompt: 'You visualise a gastric ulcer with a visible vessel in its base (no active bleeding). Using the Forrest Classification, how is this classified and what is the management?',
        options: [
          { id: 'a', text: 'Forrest IIa — high rebleeding risk (~50%). Endoscopic haemostasis is required (e.g., adrenaline injection + thermal coagulation or clip). IV PPI infusion and repeat endoscopy at 24 hours.' },
          { id: 'b', text: 'Forrest III — low risk, clean base. No endoscopic intervention needed; discharge with oral PPI.' },
          { id: 'c', text: 'Forrest Ib — active oozing. Inject adrenaline 1:10,000 only and observe for 30 minutes.' }
        ],
        correct: 'a',
        rationale: 'Forrest IIa (non-bleeding visible vessel) carries a ~50% risk of rebleeding without treatment. ESGE/BSG guidelines mandate endoscopic therapy: dual therapy (adrenaline injection + mechanical clip or thermal coagulation) is superior to monotherapy. IV PPI (e.g., omeprazole 80 mg bolus + 8 mg/hr infusion) is given for 72 hours post-haemostasis. Forrest III (clean base) has < 5% rebleed risk and does not require endoscopic treatment.',
        source: 'Barkun AN et al. (2019). Management of nonvariceal upper gastrointestinal bleeding. Ann Intern Med.',
        validated: false
      },
      {
        id: 'endo4', title: 'Perforation recognition', category: 'Safety', severity: 'critical',
        prompt: 'During therapeutic endoscopy, the patient suddenly develops severe chest and epigastric pain. You notice retroperitoneal fat on the monitor. What is your immediate response?',
        options: [
          { id: 'a', text: 'Continue the procedure quickly to complete haemostasis before managing the complication.' },
          { id: 'b', text: 'Stop all insufflation immediately. Remove the scope. Urgently contact the surgical team and anaesthesiology. Nil by mouth, IV access, imaging (erect CXR for free air + CT). Prepare for potential emergency surgery.' },
          { id: 'c', text: 'Inject water through the scope channel to flush the area and reassess.' }
        ],
        correct: 'b',
        rationale: 'Visualisation of retroperitoneal fat or mediastinal structures during endoscopy is pathognomonic of perforation. Continuing insufflation worsens the pneumoperitoneum/pneumomediastinum and can cause haemodynamic collapse and tension pneumothorax. Immediate steps: scope out, stop air, nil by mouth, emergency surgical referral, and imaging. Delayed recognition of perforation is associated with significantly higher mortality.',
        source: 'ASGE (2013). Complications of upper GI endoscopy. GIE; Paspatis GA et al. (2014). Diagnosis and management of iatrogenic endoscopic perforations. Endoscopy.',
        validated: false
      }
    ]
  }

};
