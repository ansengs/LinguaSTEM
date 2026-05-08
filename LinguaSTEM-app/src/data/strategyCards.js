// Extracted from stem-study-lab.html
export const STRATEGY_CARDS = [

/* ── READING ──────────────────────────────────────────────────── */
{
  cat: 'Reading',
  title: 'Schema Activation & Top-Down Reading',
  research: 'Anderson & Pearson (1984) Schema Theory; Rosenblatt (1978) Transactional Theory',
  finding: 'Readers who activate prior knowledge before reading comprehend 40–60% more than those who read cold. Top-down processing (using background knowledge to predict text) reduces cognitive load.',
  model: 'KWL+ Model: Know → Want to Know → Learned → Still wondering',
  steps: [
    'Before reading: spend 60–90 seconds listing what you already know about the topic.',
    'Generate 2–3 questions you expect the text to answer.',
    'Preview title, headings, bold terms, first and last sentences of each section.',
    'While reading, confirm or correct your predictions — actively compare text to schema.',
    'After reading: answer your pre-questions, note what surprised you, and identify gaps.'
  ],
  example: 'Reading a chapter on DNA replication: activate knowledge of cells, base pairs, enzymes → ask "What triggers replication? What stops it?" → read actively checking those answers.'
},
{
  cat: 'Reading',
  title: 'SQ3R — Survey, Question, Read, Recite, Review',
  research: 'Robinson (1946) SQ3R; confirmed by Carlston (2011) and multiple meta-analyses showing 20–30% comprehension gains',
  finding: 'Converting headings into questions before reading forces active processing. Recitation (self-testing) is more effective than re-reading by a factor of 2–4 (Roediger & Karpicke, 2006).',
  model: 'Survey → Question → Read → Recite → Review',
  steps: [
    'Survey: scan the entire chapter — headings, figures, captions, summary, review questions (2 min).',
    'Question: rewrite each heading as a question (e.g. "The Cell Membrane" → "What is the cell membrane and what does it do?").',
    'Read: read one section at a time with the question in mind — stop when you can answer it.',
    'Recite: close the book and answer your question aloud or in writing from memory.',
    'Review: after completing the chapter, answer all questions from memory, then check.'
  ],
  example: 'Textbook heading "Factors Affecting Enzyme Activity" → Question: "What 4 factors affect enzyme activity and how?" → Read section → Recite: temperature, pH, substrate concentration, inhibitors → Review: reproduce diagram from memory.'
},
{
  cat: 'Reading',
  title: 'Metacognitive Reading Monitoring',
  research: 'Flavell (1979) Metacognition; Baker & Brown (1984); Pressley & Afflerbach (1995) Verbal Protocol Studies',
  finding: 'Skilled readers constantly monitor comprehension. Studies show metacognitive strategy instruction improves reading performance by 0.69 standard deviations (Hattie, 2009 meta-analysis, d=0.69).',
  model: 'PLAN → MONITOR → REPAIR (fix-up strategies)',
  steps: [
    'PLAN: identify text type, purpose, and time available; choose a reading speed accordingly.',
    'MONITOR: ask yourself every paragraph — "Can I state the main point in one sentence?"',
    'Signal confusion: unfamiliar words, unclear pronouns, contradictory information, or lost tracking.',
    'REPAIR strategies: re-read, read ahead for clarification, use context clues, look up key term, draw a diagram.',
    'After each section: rate comprehension (1–3). Only re-read sections rated 1.'
  ],
  example: 'Reading a research methods section and losing the thread at "stratified random sampling" → stop → draw a diagram of the population divided into strata → re-read with diagram → comprehension restores.'
},
{
  cat: 'Reading',
  title: 'Speed Reading vs. Deep Reading — What Research Says',
  research: 'Rayner et al. (2016) "So Much to Read, So Little Time" — Psychological Science in the Public Interest',
  finding: 'Speed reading techniques (skimming, RSVP) reduce comprehension by 50–75% for complex material. Average fluent reading speed is 200–250 wpm. For technical/academic text, 100–150 wpm with full comprehension outperforms 400 wpm with poor retention.',
  model: 'Match speed to purpose: Skim (preview) · Scan (find facts) · Read (understand) · Study-read (retain)',
  steps: [
    'Skim (600–1000 wpm): read first/last sentence of each paragraph only — for previewing or deciding relevance.',
    'Scan: move eyes rapidly looking for a specific word, date, or number — do not read surrounding text.',
    'Normal reading (200–300 wpm): full sentence by sentence — for narrative and straightforward exposition.',
    'Study-reading (100–150 wpm): stop after each paragraph to recite, annotate, or draw — for textbooks and technical material.',
    'Never use skimming for math, statistics, legal, or scientific writing — every sentence carries weight.'
  ],
  example: 'Research paper: skim abstract + conclusion (30 sec) to judge relevance → scan for key terms in methodology → study-read results section at 120 wpm with margin notes.'
},

/* ── WRITING ──────────────────────────────────────────────────── */
{
  cat: 'Writing',
  title: 'Flower & Hayes Cognitive Writing Model',
  research: 'Flower & Hayes (1981) "A Cognitive Process Theory of Writing" — College Composition and Communication',
  finding: 'Expert writers spend 2–3× more time planning than novices. The recursive planning→translating→reviewing cycle (not a linear draft-then-edit approach) produces better writing. Novices jump to transcription; experts front-load planning.',
  model: 'PLANNING (goals, content, organization) ↔ TRANSLATING (drafting) ↔ REVIEWING (evaluating & revising) — all recursive',
  steps: [
    'Planning — Rhetorical problem: identify audience, purpose, persona, and constraints before writing a single sentence.',
    'Planning — Content inventory: brainstorm all ideas without filtering (free-write or mind map for 5–10 min).',
    'Planning — Organization: sort ideas into an argument structure (claim → reasons → evidence → counterargument → conclusion).',
    'Translating — Draft fast: turn off internal editor; write complete sentences but do not polish.',
    'Reviewing — Revise in 4 separate passes: (1) argument logic, (2) paragraph structure, (3) sentence clarity, (4) grammar and mechanics.'
  ],
  example: 'Essay on climate policy: 10-min brainstorm → identify audience (college instructor) → outline: thesis + 3 evidenced reasons + 1 counterargument → draft in 25 min → 4 revision passes over 20 min.'
},
{
  cat: 'Writing',
  title: 'The PEEL Paragraph Method',
  research: 'Grounded in genre pedagogy (Martin & Rose, 2003); validated in academic writing research by Nippold (2004) and Schleppegrell (2004)',
  finding: 'Explicit paragraph structure instruction raises writing quality ratings by 0.62 standard deviations in controlled studies (Graham & Perin, 2007 meta-analysis). Signposting (explicit connectives) improves reader comprehension by 30%.',
  model: 'P — Point (claim) · E — Evidence · E — Explain (link evidence to claim) · L — Link (to thesis/next paragraph)',
  steps: [
    'Point: open with a clear, arguable claim — one sentence that directly supports your thesis.',
    'Evidence: give 1–2 specific pieces of support (data, quote, example, case study). Never drop evidence without attribution.',
    'Explain: write 2–3 sentences showing HOW and WHY the evidence proves the point — this is the most skipped step.',
    'Link: end with a sentence connecting back to the overall thesis or forward to the next paragraph\'s point.',
    'Check: every paragraph should pass the "so what?" test — if removed, the argument weakens.'
  ],
  example: 'Point: "Spaced practice improves long-term retention more than massed practice." Evidence: "Cepeda et al. (2008) found a 150–200% retention advantage for spaced over massed study across 271 studies." Explain: "This suggests…" Link: "Just as spacing benefits factual recall, it also…"'
},
{
  cat: 'Writing',
  title: 'Revision as Re-Vision — Not Proofreading',
  research: 'Sommers (1980) "Revision Strategies of Student Writers and Experienced Adult Writers"; Faigley & Witte (1981)',
  finding: 'Expert writers make meaning-level revisions (reorder arguments, add evidence, cut whole sections) 5× more than novices. Novice writers treat revision as surface-level proofreading. Revision at the discourse level (argument structure) matters more than sentence-level fixes.',
  model: 'Macro revision (meaning) FIRST → Meso revision (paragraph) → Micro revision (sentence) → Proofreading (mechanics)',
  steps: [
    'Reverse outline: after drafting, write one sentence summarizing each paragraph to reveal gaps and logic breaks.',
    'Macro check: does each paragraph advance the argument? Is any section redundant or missing?',
    'Meso check: does each paragraph have a clear topic sentence, specific evidence, and explanation?',
    'Micro check: are sentences concise? Eliminate: "there is/are," "it is important that," passive voice when active is clearer.',
    'Proofread last — at the word/punctuation level only. Read aloud slowly to catch errors the eye skips.'
  ],
  example: 'Reverse outline reveals paragraphs 3 and 5 make the same point → merge → adds logical gap before conclusion → adds transition paragraph → then sentence-level revisions → then proofread.'
},

/* ── PRONUNCIATION ────────────────────────────────────────────── */
{
  cat: 'Pronunciation',
  title: 'Phonological Awareness — The Foundation',
  research: 'Ziegler & Goswami (2005) "Reading Acquisition, Developmental Dyslexia, and Skilled Reading Across Languages" — Psychological Bulletin; Ehri et al. (2001) systematic phonics meta-analysis',
  finding: 'Phonological awareness (ability to hear and manipulate sound units in words) is the single strongest predictor of reading accuracy and spelling (r = 0.70–0.82 across studies). Explicit phoneme training produces 2× the decoding accuracy gains of whole-language instruction alone.',
  model: 'Syllable awareness → Onset-rime → Phoneme awareness → Phoneme-grapheme mapping',
  steps: [
    'Segment words into syllables by tapping or clapping: "con-ver-sa-tion" = 4 taps. Identify stress: "con-VER-sa-tion."',
    'Identify onset (initial consonant cluster) and rime (vowel + everything after): "str-eam," "bl-ock."',
    'Isolate individual phonemes: "speech" = /s/ /p/ /iː/ /tʃ/ — 5 letters, 4 phonemes.',
    'Map phonemes to graphemes: know that English has ~44 phonemes but 26 letters — digraphs (sh, ch, th, ng) account for the gap.',
    'Minimal pair drilling: practise word pairs differing by one phoneme (/p/-/b/: "pat/bat", /ɪ/-/iː/: "sit/seat") to sharpen perception.'
  ],
  example: 'Struggling with "thoroughly": segment /ˈθɜː.ə.li/ — 3 syllables, stress on 1st, /θ/ (voiced-less dental fricative, tongue between teeth). Minimal pairs: "thought/though/through/thorough" — each has /θ/ but different vowels.'
},
{
  cat: 'Pronunciation',
  title: 'IPA & Articulatory Phonetics',
  research: 'Ladefoged & Johnson (2014) "A Course in Phonetics"; Celce-Murcia et al. (2010) "Teaching Pronunciation" — Cambridge',
  finding: 'Learners who study the International Phonetic Alphabet and articulatory placement (where tongue/lips go) acquire accurate pronunciation 35–50% faster than those who rely only on imitation. Articulatory phonetics provides explicit feedback unavailable through listening alone.',
  model: 'Place of Articulation × Manner × Voicing → IPA Symbol → Minimal Pair Practice',
  steps: [
    'Learn the 3 dimensions of every consonant: PLACE (where the air is blocked: bilabial, alveolar, velar…), MANNER (how: stop, fricative, nasal…), VOICING (vocal cords vibrating or not).',
    'Vowels: learn the F1/F2 vowel space — tongue height (high/mid/low) × tongue backness (front/central/back) × lip rounding.',
    'Use IPA transcription to record a word\'s pronunciation independently of spelling: "knight" = /naɪt/, "pneumonia" = /njuːˈmoʊniə/.',
    'Mirror work: watch your mouth while saying minimal pairs — observe lip position differences for /f/ vs /v/, /p/ vs /b/.',
    'Record yourself reading a passage, transcribe what you actually said, compare to target IPA transcription — identify systematic errors.'
  ],
  example: 'Confusion between /ɪ/ and /iː/: /ɪ/ is lax mid-high front (jaw slightly open, lips neutral) — "bit." /iː/ is tense high front (jaw nearly closed, lips spread) — "beat." Record "I beat the bit" — hear the difference on playback.'
},
{
  cat: 'Pronunciation',
  title: 'Suprasegmentals: Stress, Rhythm & Intonation',
  research: 'Brazil (1997) "The Communicative Value of Intonation in English"; Dauer (1983) stress-timing; Chun (2002) "Discourse Intonation in L2"',
  finding: 'Foreign accent is 60–70% attributable to suprasegmental errors (wrong stress, rhythm, intonation) rather than individual phoneme errors. Native listeners rate suprasegmental accuracy as more important for intelligibility than individual sounds.',
  model: 'Word stress → Sentence stress → Rhythm (strong-weak syllables) → Intonation contours (fall/rise/fall-rise)',
  steps: [
    'Word stress: English uses stress to distinguish word class — REcord (noun) vs reCORD (verb), PROtest vs proTEST. Learn stress as part of vocabulary.',
    'Sentence stress: content words (nouns, verbs, adjectives, adverbs) receive stress; function words (articles, prepositions, pronouns) are reduced.',
    'Rhythm: English is stress-timed — stressed syllables occur at roughly equal intervals. Unstressed syllables are compressed with schwa /ə/.',
    'Intonation — falling tone: statements and wh-questions signal completion. Rising tone: yes/no questions, listing items (except the last). Fall-rise: implication, contrast, or reservation.',
    'Shadow reading: listen to a native speaker recording, read along simultaneously matching stress and intonation exactly — repeat 3–5 times.'
  ],
  example: '"I didn\'t say she STOLE the money" (someone else stole it) vs "I didn\'t say SHE stole the money" (someone else did) — same words, opposite meaning through stress placement alone.'
},

/* ── FOREIGN LANGUAGE LISTENING ───────────────────────────────── */
{
  cat: 'Foreign Language Listening',
  title: 'Krashen\'s Input Hypothesis & Comprehensible Input',
  research: 'Krashen (1982) "Principles and Practice in Second Language Acquisition"; VanPatten (2004) Input Processing Theory',
  finding: 'Language acquisition occurs when learners process input at i+1 (slightly above current level), not through conscious grammar study. Comprehensible input studies show 85–90% comprehension rate is optimal — lower produces frustration, higher produces no acquisition (Long, 1996).',
  model: 'i+1 Rule: current level + one step above → acquisition zone',
  steps: [
    'Assess your level: choose listening material where you understand ~85% without effort — this is your i+1 zone.',
    'Extensive listening: listen to large quantities at 85%+ comprehension without looking up every word.',
    'Intensive listening: take a short passage (1–3 min) and work it deeply — transcribe, look up unknowns, re-listen.',
    'Use context to infer meaning before consulting a dictionary — this builds independent inference skills.',
    'Negotiate meaning: when talking with a speaker, use clarification requests ("Did you say…?", "Could you repeat that more slowly?") — these are acquisition-accelerating interactions (Long, 1996).'
  ],
  example: 'Spanish learner at A2: watching a B1 telenovela at 85% comprehension (i+1). Before the episode, preview new vocabulary from a plot summary. During: focus on understanding the scene, not every word. After: intensive work on 3 confusing sentences.'
},
{
  cat: 'Foreign Language Listening',
  title: 'Bottom-Up vs. Top-Down Listening Processing',
  research: 'Rost (2011) "Teaching and Researching Listening" — Pearson; Field (2008) "Listening in the Language Classroom" — Cambridge',
  finding: 'Weak listeners over-rely on top-down (contextual guessing). Strong listeners can deploy both — bottom-up (phoneme→word→clause decoding) and top-down (schema + context prediction) simultaneously. Explicit bottom-up training reduces phonological mis-segmentation errors by 45%.',
  model: 'Bottom-up: phonemes → words → syntax → meaning. Top-down: context + schema → predicted meaning → verification.',
  steps: [
    'Bottom-up training: listen to a sentence and write every word you hear (dictation). Identify exactly where you failed — was it a phoneme, a word boundary, a reduced form, or a fast speech rule?',
    'Common fast-speech rules: linking (gonna, wanna, didja), elision (last consonant dropped before next consonant), assimilation (n→m before /b/ or /p/), reduction (function words: "to" → /tə/, "of" → /əv/).',
    'Top-down training: before listening, activate schema — read a brief summary, look at the image, predict 5 words you\'ll hear.',
    'Discrimination practice: use minimal pair audio — /r/ vs /l/ (rice/lice), /θ/ vs /s/ (think/sink) in connected speech.',
    'After listening, replay the audio while reading the transcript simultaneously — let the brain map heard sounds to written words.'
  ],
  example: 'Mishearing "I need to get it done" as "I need to get a done": bottom-up failure — "it" reduced to /ɪt/ → /ə/ in fast speech. Solution: listen for weak-form patterns at word boundaries.'
},
{
  cat: 'Foreign Language Listening',
  title: 'Listening Strategy Training (MALQ Framework)',
  research: 'Vandergrift et al. (2006) "The Metacognitive Awareness Listening Questionnaire" — Language Learning; Vandergrift & Goh (2012)',
  finding: 'Metacognitive listening strategies (planning, monitoring, evaluating, problem-solving) explain 13–19% of variance in listening test scores beyond linguistic proficiency alone. Explicit strategy training improves listening scores significantly over control groups (d=0.62–0.89).',
  model: 'PLAN → ATTEND → MONITOR → EVALUATE → REPAIR',
  steps: [
    'PLAN: before listening, identify the genre and purpose, predict likely content, decide what to focus on.',
    'ATTEND: focus on key words and the global message — do not try to understand every word in real time.',
    'MONITOR: notice when understanding breaks down — what specifically caused it (speed? vocabulary? accent? background noise?)',
    'EVALUATE: after listening, rate your comprehension and identify which parts were clear vs. unclear.',
    'REPAIR: listen again, focus specifically on the unclear sections, use transcript if available, then re-evaluate.'
  ],
  example: 'French news podcast: PLAN — news genre, political topic, predict "gouvernement, réforme, président." ATTEND — catch key phrases. MONITOR — lost thread at the guest speaker (different accent). REPAIR — replay that segment twice with transcript.'
},
{
  cat: 'Foreign Language Listening',
  title: 'Extensive Listening & Narrow Listening',
  research: 'Nation & Newton (2009) "Teaching ESL/EFL Listening and Speaking"; Krashen (1996) "The Case for Narrow Reading" (extended to listening)',
  finding: 'Narrow listening (multiple episodes on the same topic with the same speaker) builds vocabulary in context 3× faster than wide listening across random topics because the recycling rate of vocabulary is higher. Nation & Newton recommend 4–5 exposures per target word for incidental acquisition.',
  model: 'Wide listening (for general exposure) + Narrow listening (for vocabulary depth) = balanced program',
  steps: [
    'Narrow listening series: choose 4–6 podcasts or videos on a single topic by the same speaker or channel.',
    'First listen: for gist and enjoyment — no stopping.',
    'Second listen: with transcript — look up words you missed but that seem frequent.',
    'Third listen (no transcript): has comprehension improved? Note remaining gaps.',
    'Create a vocabulary card for each new high-frequency word with: L2 word, L1 meaning, sentence heard, phonetic transcription.'
  ],
  example: 'Learning Spanish via football commentary: narrow listening to the same commentator for 4 matches → words like "tiro libre," "fuera de juego," "marcador" recycled naturally 8–12 times across episodes → acquired without flashcards.'
},

/* ── MEMORY & RETENTION ───────────────────────────────────────── */
{
  cat: 'Memory',
  title: 'Spaced Repetition & The Forgetting Curve',
  research: 'Ebbinghaus (1885) forgetting curve; Cepeda et al. (2008) "Spacing Effects in Learning" — Psychological Science in the Public Interest (271-study meta-analysis)',
  finding: 'Without review, memory decays exponentially: ~50% loss within 20 min, ~70% within 24 hours, ~90% within 1 week. Spaced reviews at expanding intervals reduce forgetting and produce 150–200% better retention than massed (cramming) study across all material types.',
  model: 'Review intervals: 10 min → 1 day → 3 days → 1 week → 2 weeks → 1 month → 3 months',
  steps: [
    'After learning new material, do a first review within 10–20 minutes — this catches the steepest part of the forgetting curve.',
    'Schedule the next review at approximately 1 day, then 3 days, then 1 week.',
    'Use a spaced repetition system (SRS): Anki (free) automates the optimal intervals using the SM-2 algorithm.',
    'During each review, retrieve actively — try to recall the answer before revealing it.',
    'Items answered correctly get longer intervals; items answered incorrectly get reset to short intervals.'
  ],
  example: 'Learning 100 Spanish vocabulary words: Day 1 (initial study) → Day 2 (review: 40% forgotten, refresh) → Day 5 → Day 12 → Day 30 → Day 90. Result: ~90% retention at 90 days vs. ~10% for a single massed study session.'
},
{
  cat: 'Memory',
  title: 'The Testing Effect (Retrieval Practice)',
  research: 'Roediger & Karpicke (2006) "Test-Enhanced Learning" — Psychological Science; Dunlosky et al. (2013) "Improving Students\' Learning With Effective Learning Techniques" — Psychological Science in the Public Interest',
  finding: 'Retrieval practice (testing yourself) produces 2–4× better long-term retention than re-reading or note-reviewing. Dunlosky et al. rated retrieval practice as "high utility" — it is the single most evidence-supported study strategy. Effect is robust across all ages, subjects, and material formats.',
  model: 'ENCODE → (delay) → RETRIEVE (without looking) → CHECK → CORRECT errors → space the next retrieval',
  steps: [
    'After reading a section, close the book and write (or say aloud) everything you can remember — this is free recall.',
    'Use flashcards (physical or Anki) — always attempt to retrieve the answer before flipping.',
    'The Blank Page technique: take a blank sheet of paper and write everything you know about the topic from scratch. Gaps reveal what needs more study.',
    'Practice tests: work through past exam questions under realistic conditions. Struggle before looking up answers — the struggle strengthens encoding.',
    'Interleaved practice: mix different topics in a single study session rather than blocking by subject (Brown et al., 2014 "Make It Stick" — increases difficulty but produces stronger long-term retention).'
  ],
  example: 'Studying for CLEP Biology: after each chapter, write a blank-page brain dump. Then compare to notes — circle gaps. Create Anki cards for only the gaps. Next session: start with retrieval of yesterday\'s material before new material.'
},
{
  cat: 'Memory',
  title: 'Elaborative Interrogation & Self-Explanation',
  research: 'Pressley et al. (1992) Elaborative Interrogation; Chi et al. (1989) Self-Explanation Effect; Dunlosky et al. (2013)',
  finding: 'Asking "Why is this true?" for each fact you learn improves retention by 40–120% compared to simply re-reading. Self-explanation (explaining why each step is correct while solving a problem) produces better procedural learning than worked examples alone.',
  model: 'FACT → "Why is this true?" → Connect to prior knowledge → Build causal chain',
  steps: [
    'For every new fact, ask: "Why is this true? What causes it? What does it connect to? What would happen if it were not true?"',
    'Connect new information to at least 2 things you already know — the richer the web of connections, the more retrieval routes exist.',
    'While working a practice problem, narrate each step aloud: "I\'m doing this because… the reason this step comes next is… this value tells me…"',
    'Generate your own examples and non-examples for every concept — this forces understanding rather than memorisation.',
    'Concept mapping: draw nodes for each concept with labelled arrows showing the relationship — forces explicit connection-making.'
  ],
  example: 'Learning Le Chatelier\'s Principle: instead of memorising "stress shifts the equilibrium," ask WHY — "because the system minimises free energy by moving to where products/reactants are consumed." Connect to thermodynamics (ΔG) and kinetics (rate ratio). Now one explanation covers all cases.'
},
{
  cat: 'Memory',
  title: 'Dual Coding Theory',
  research: 'Paivio (1971, 1986) Dual Coding Theory; Mayer (2001) "Multimedia Learning" — Cambridge; Sweller (1988) Cognitive Load Theory',
  finding: 'Information stored in both verbal and visual codes is recalled 2× better than information stored in one code alone (Paivio, 1986). Mayer\'s multimedia learning research (meta-analysis of 100+ studies) confirms: words + relevant images outperform words alone by an average effect size of 1.67.',
  model: 'Verbal system (language, text) + Non-verbal system (images, spatial, embodied) → dual memory traces → stronger retrieval',
  steps: [
    'For every abstract concept, create a visual: diagram, sketch, flowchart, spatial map, or timeline.',
    'Don\'t just re-draw textbook figures — create your own from scratch using only what you remember (generative drawing).',
    'For processes or sequences, use arrow diagrams or comic-strip panels — spatial layout encodes order.',
    'For vocabulary, create a mental image linking the sound of the word to its meaning (keyword method).',
    'For formulas: draw a physical situation that the formula describes — every variable should map to a visible component in the drawing.'
  ],
  example: 'Learning Newton\'s Second Law F=ma: draw a box on a surface, arrow labelled F pushing it, dotted arrow showing acceleration, label "m" inside the box. Now the formula has a physical picture rather than just 3 letters. Recall the picture → reconstruct the formula.'
},
{
  cat: 'Memory',
  title: 'The Method of Loci (Memory Palace)',
  research: 'Yates (1966) "The Art of Memory"; Dresler et al. (2017) "Mnemonic Training Reshapes Brain Networks" — Neuron; Legge et al. (2012)',
  finding: 'Dresler et al. (2017) trained 51 naive subjects in the method of loci over 40 days — their recall of 72-word lists improved from 26 to 62 words (138% gain). Brain imaging showed reorganisation toward spatial memory networks used by memory champions. Effect maintained at 4-month follow-up.',
  model: 'Familiar spatial route → Place each item at a specific location → Retrieve by mentally walking the route',
  steps: [
    'Choose a familiar route (your home, walk to class, childhood house) with 10–20 distinct, orderable locations (front door, coat hook, hallway, kitchen table…).',
    'Convert each item to memorise into a vivid, bizarre, or emotionally strong image.',
    'Place each image at a specific location on your route — the more ridiculous and sensory-rich the better.',
    'To recall: mentally walk the route in order, "seeing" each image at its location.',
    'Best for: ordered lists, steps in a process, vocabulary with translation cues, speech outlines, chemical element groups.'
  ],
  example: 'Memorising the 9 planets in order: route through your house. Mercury (a giant thermometer) in the doorway. Venus (a beautiful mirror) on the coat hook. Earth (a globe) on the hallway table. Mars (red face, angry) in the kitchen. Each location = one planet.'
}
];
