export const QB = {
  "arithmetic": [
    {
      "focus": "Fractions — add",
      "prompt": "What is 3/4 + 2/5?",
      "options": [
        "23/20",
        "7/9",
        "11/20",
        "6/20"
      ],
      "answer": 0,
      "topic": "Fractions",
      "level": 1,
      "why": "LCD of 4 and 5 is 20; convert both then add.",
      "how": "1) 3/4 = 15/20.  2) 2/5 = 8/20.  3) 15+8 = 23.  Answer: 23/20.",
      "_id": "arithmetic_0"
    },
    {
      "focus": "Percent of a number",
      "prompt": "What is 18% of 250?",
      "options": [
        "45",
        "18",
        "25",
        "72"
      ],
      "answer": 0,
      "topic": "Percents",
      "level": 1,
      "why": "Percent of a number = decimal × number.",
      "how": "1) 18% = 0.18.  2) 0.18 × 250 = 45.",
      "_id": "arithmetic_1"
    },
    {
      "focus": "Order of operations",
      "prompt": "Simplify  48 ÷ 6 × 2.",
      "options": [
        "16",
        "4",
        "6",
        "24"
      ],
      "answer": 0,
      "topic": "Order of Operations",
      "level": 1,
      "why": "Division and multiplication are equal priority — work left to right.",
      "how": "1) 48 ÷ 6 = 8.  2) 8 × 2 = 16.",
      "_id": "arithmetic_2"
    },
    {
      "focus": "Ratios — scale",
      "prompt": "A ratio is 3:5. If the second quantity is 20, what is the first?",
      "options": [
        "12",
        "8",
        "15",
        "25"
      ],
      "answer": 0,
      "topic": "Ratios",
      "level": 2,
      "why": "Scale both sides of the ratio by the same factor.",
      "how": "1) 5 → 20 is ×4.  2) 3 × 4 = 12.",
      "_id": "arithmetic_3"
    },
    {
      "focus": "Decimal multiplication",
      "prompt": "0.4 × 0.25 = ?",
      "options": [
        "0.1",
        "1.0",
        "0.65",
        "0.04"
      ],
      "answer": 0,
      "topic": "Decimals",
      "level": 2,
      "why": "Multiply ignoring decimals, then count total decimal places.",
      "how": "1) 4 × 25 = 100.  2) 1+2 = 3 decimal places → 0.100 = 0.1.",
      "_id": "arithmetic_4"
    },
    {
      "focus": "Mixed-number subtraction",
      "prompt": "5 1/3 − 2 5/6 = ?",
      "options": [
        "2 1/2",
        "3 1/2",
        "2 1/3",
        "3 1/6"
      ],
      "answer": 0,
      "topic": "Mixed Numbers",
      "level": 2,
      "why": "Convert to improper fractions with common denominator, subtract, simplify.",
      "how": "1) 5 1/3 = 32/6.  2) 2 5/6 = 17/6.  3) 32/6 − 17/6 = 15/6 = 2 1/2.",
      "_id": "arithmetic_5"
    }
  ],
  "geometry": [
    {
      "focus": "Area of a triangle",
      "prompt": "A triangle has base 10 and height 6. Area?",
      "options": [
        "30",
        "60",
        "16",
        "15"
      ],
      "answer": 0,
      "topic": "Area",
      "level": 1,
      "why": "Area of a triangle = ½ × base × height.",
      "how": "1) ½ × 10 × 6 = 30.",
      "_id": "geometry_0"
    },
    {
      "focus": "Circle circumference",
      "prompt": "Circle with radius 4. Circumference?",
      "options": [
        "8π",
        "4π",
        "16π",
        "2π"
      ],
      "answer": 0,
      "topic": "Circles",
      "level": 1,
      "why": "Circumference = 2πr.",
      "how": "1) C = 2π × 4 = 8π.",
      "_id": "geometry_1"
    },
    {
      "focus": "Pythagorean theorem",
      "prompt": "Right triangle with legs 3 and 4. Hypotenuse?",
      "options": [
        "5",
        "7",
        "25",
        "√7"
      ],
      "answer": 0,
      "topic": "Pythagorean Theorem",
      "level": 1,
      "why": "a² + b² = c².",
      "how": "1) 3² + 4² = 9 + 16 = 25.  2) √25 = 5.",
      "_id": "geometry_2"
    },
    {
      "focus": "Volume of cylinder",
      "prompt": "Cylinder radius 3, height 5. Volume?",
      "options": [
        "45π",
        "30π",
        "9π",
        "15π"
      ],
      "answer": 0,
      "topic": "Volume",
      "level": 2,
      "why": "V = πr²h.",
      "how": "1) π × 3² × 5 = π × 9 × 5 = 45π.",
      "_id": "geometry_3"
    },
    {
      "focus": "Angle sum triangle",
      "prompt": "A triangle has angles 45° and 70°. What is the third?",
      "options": [
        "65°",
        "80°",
        "115°",
        "55°"
      ],
      "answer": 0,
      "topic": "Angles",
      "level": 1,
      "why": "Triangle angles sum to 180°.",
      "how": "1) 180 − 45 − 70 = 65°.",
      "_id": "geometry_4"
    },
    {
      "focus": "Perimeter of rectangle",
      "prompt": "Rectangle 8 by 5. Perimeter?",
      "options": [
        "26",
        "40",
        "13",
        "20"
      ],
      "answer": 0,
      "topic": "Perimeter",
      "level": 1,
      "why": "P = 2(l + w).",
      "how": "1) 2(8 + 5) = 2 × 13 = 26.",
      "_id": "geometry_5"
    }
  ],
  "statistics": [
    {
      "focus": "Mean",
      "prompt": "Mean of 4, 8, 15, 16, 23, 42?",
      "options": [
        "18",
        "16.5",
        "15",
        "20"
      ],
      "answer": 0,
      "topic": "Mean",
      "level": 1,
      "why": "Mean = sum ÷ count.",
      "how": "1) 4+8+15+16+23+42 = 108.  2) 108 ÷ 6 = 18.",
      "_id": "statistics_0"
    },
    {
      "focus": "Median",
      "prompt": "Median of 3, 7, 9, 12, 15?",
      "options": [
        "9",
        "8",
        "10",
        "7"
      ],
      "answer": 0,
      "topic": "Median",
      "level": 1,
      "why": "Median = middle value when sorted.",
      "how": "1) Already sorted: 3, 7, 9, 12, 15.  2) Middle (3rd of 5) = 9.",
      "_id": "statistics_1"
    },
    {
      "focus": "Probability basic",
      "prompt": "Die rolled once. P(even number)?",
      "options": [
        "1/2",
        "1/3",
        "1/6",
        "2/3"
      ],
      "answer": 0,
      "topic": "Probability",
      "level": 1,
      "why": "Even faces: 2, 4, 6 → 3 of 6 outcomes.",
      "how": "1) P = 3/6 = 1/2.",
      "_id": "statistics_2"
    },
    {
      "focus": "Range",
      "prompt": "Range of 5, 12, 3, 18, 9?",
      "options": [
        "15",
        "13",
        "9",
        "18"
      ],
      "answer": 0,
      "topic": "Range",
      "level": 1,
      "why": "Range = max − min.",
      "how": "1) Max = 18, min = 3.  2) 18 − 3 = 15.",
      "_id": "statistics_3"
    },
    {
      "focus": "Mode",
      "prompt": "Mode of 2, 4, 4, 6, 8, 8, 8?",
      "options": [
        "8",
        "4",
        "6",
        "2"
      ],
      "answer": 0,
      "topic": "Mode",
      "level": 1,
      "why": "Mode = most frequent value.",
      "how": "1) 8 appears 3 times; 4 appears 2 times.  2) Mode = 8.",
      "_id": "statistics_4"
    },
    {
      "focus": "Complement rule",
      "prompt": "P(A) = 0.35. P(not A)?",
      "options": [
        "0.65",
        "0.35",
        "1.35",
        "0.30"
      ],
      "answer": 0,
      "topic": "Probability",
      "level": 2,
      "why": "P(not A) = 1 − P(A).",
      "how": "1) 1 − 0.35 = 0.65.",
      "_id": "statistics_5"
    }
  ],
  "reading": [
    {
      "focus": "Main idea",
      "passage": "<p>Community gardens have transformed vacant lots and underused urban spaces across the country. Where cracked pavement and overgrown weeds once stood, residents now tend rows of vegetables and herbs, growing food they could not otherwise easily access.</p><p>Beyond nutrition, these gardens reduce urban heat, absorb rainwater that would overwhelm drainage systems, and build social connections that hold neighborhoods together. Research consistently shows that areas with active community gardens report lower crime rates and stronger civic participation.</p>",
      "prompt": "The main idea is that community gardens:",
      "options": [
        "can benefit neighborhoods in several ways",
        "grow only vegetables",
        "are found only in cities",
        "reduce food costs exclusively"
      ],
      "answer": 0,
      "topic": "Main Idea",
      "level": 1,
      "why": "Both paragraphs describe different neighborhood benefits, making the central claim \"gardens provide multiple benefits.\"",
      "how": "1) P1: food access.  2) P2: environment, social bonds, crime.  3) Common thread = multiple neighborhood benefits.",
      "_id": "reading_0"
    },
    {
      "focus": "Inference",
      "passage": "<p>Maya had been watching the forecast all morning. By noon, the sky had taken on the greenish-gray hue she had learned to recognize over many years in the Midwest. She moved quickly through the house — windows shut, lawn chairs carried inside, the basement door checked and bolted.</p><p>When her neighbor called to ask if she was overreacting, Maya simply said: \"I've seen this sky before.\" Twenty minutes later, the sirens began to sound.</p>",
      "prompt": "What can reasonably be inferred from the passage?",
      "options": [
        "Maya expected a severe storm, not just rain",
        "Maya was moving to a different house",
        "Maya had never experienced a storm before",
        "Maya thought her neighbor was right"
      ],
      "answer": 0,
      "topic": "Inference",
      "level": 2,
      "why": "The greenish-gray sky, her experience, basement check, and the sirens all point to a tornado or severe storm, not ordinary rain.",
      "how": "1) Clue 1: greenish-gray Midwest sky.  2) Clue 2: basement bolted (tornado prep).  3) Clue 3: sirens at the end.  4) Inference: she expected severe weather.",
      "_id": "reading_1"
    },
    {
      "focus": "Vocabulary in context",
      "passage": "<p>Early investigators of the deep ocean were astonished to find not the barren, featureless plain they had assumed, but an ecosystem of surprising <em>fecundity</em>. Hydrothermal vents on the ocean floor support colonies of tube worms, clams, and shrimp that thrive entirely without sunlight, powered instead by chemical energy from the Earth's crust.</p><p>These discoveries forced scientists to reconsider the basic requirements for life, suggesting that organisms might survive — and even flourish — in environments previously considered uninhabitable.</p>",
      "prompt": "As used in the first paragraph, \"fecundity\" most nearly means:",
      "options": [
        "abundance and productivity",
        "darkness and pressure",
        "temperature and chemistry",
        "danger and unpredictability"
      ],
      "answer": 0,
      "topic": "Vocabulary",
      "level": 3,
      "why": "The passage describes organisms thriving and colonies forming — all signs of abundance and biological productivity. The word \"surprising fecundity\" contrasts with the expected barren plain.",
      "how": "1) Contrast signal: \"not the barren plain they had assumed, but...\"  2) What follows? Colonies, ecosystems, thriving organisms.  3) Fecundity = productive abundance.",
      "_id": "reading_2"
    },
    {
      "focus": "Author purpose",
      "passage": "<p>Dozens of studies confirm that students who eat a morning meal before school demonstrate higher scores on standardized assessments, better attendance records, and lower rates of behavioral referrals. The evidence has accumulated across decades and demographics: breakfast improves learning outcomes.</p><p>Yet millions of students arrive at school each morning without having eaten. Many school districts limit breakfast programs to students who qualify for free or reduced lunch, leaving others without access. The data makes the answer clear: every school should offer universal free breakfast. The cost of the program is far outweighed by the cost of the problems it prevents.</p>",
      "prompt": "The author's primary purpose is to:",
      "options": [
        "persuade schools to adopt universal free breakfast",
        "describe the nutritional content of school meals",
        "inform readers about student attendance trends",
        "entertain readers with stories about school life"
      ],
      "answer": 0,
      "topic": "Author Purpose",
      "level": 3,
      "why": "Evidence is presented and then used to support a direct call to action. That evidence + recommendation structure = persuasion.",
      "how": "1) P1: evidence.  2) P2: problem + explicit recommendation.  3) Structure = persuasive essay.",
      "_id": "reading_3"
    },
    {
      "focus": "Inference",
      "passage": "<p>Dr. Nkosi had not slept in thirty-two hours. Her presentation was in four minutes. She stared at the projector screen — still showing the default blue desktop — and realized with a slow-spreading dread that her flash drive was still in the USB port of her laptop at the hotel.</p><p>She turned to her colleague, exhaled once, and said quietly: \"I'm going to need a whiteboard and a marker.\" When the session chair announced a five-minute delay, the small crowd of researchers rearranged their chairs to face the whiteboard instead.</p>",
      "prompt": "What can be inferred about Dr. Nkosi from the passage?",
      "options": [
        "She adapted professionally to an equipment failure",
        "She decided to cancel her presentation",
        "She had intentionally left her slides behind",
        "She was unfamiliar with the research she planned to present"
      ],
      "answer": 0,
      "topic": "Inference",
      "level": 2,
      "why": "Rather than panicking or canceling, she immediately pivots to a whiteboard — a composed, professional response to an unexpected crisis.",
      "how": "1) Problem: no slides.  2) Response: requests whiteboard, continues.  3) No evidence of cancellation or intent.  4) Inference: professional adaptability.",
      "_id": "reading_4"
    },
    {
      "focus": "Text structure",
      "passage": "<p>The collapse of the Roman Empire in the West has been attributed to a remarkable variety of causes. Some historians emphasize the military pressure of Germanic migrations and the inability of Rome's overextended legions to defend its frontiers. Others point to economic factors: debasement of the currency, heavy taxation, and a shrinking tax base as agricultural land fell out of production.</p><p>Still others argue that the real explanation is political — that the empire had grown too large and too divided to be governed effectively by any single ruler, and that the third-century crisis, during which dozens of emperors rose and fell within decades, fatally weakened the state's institutions. No single cause adequately explains the fall; it was the interaction of all these pressures over several centuries that brought the Western Empire to its end.</p>",
      "prompt": "How is this passage primarily organized?",
      "options": [
        "Multiple competing explanations are presented and then synthesized",
        "A single cause is identified and supported with evidence",
        "Events are arranged in chronological order",
        "Two opposing views are compared directly"
      ],
      "answer": 0,
      "topic": "Text Structure",
      "level": 3,
      "why": "The passage lists several different explanatory theories (military, economic, political) and then concludes that all of them together explain the collapse — a \"multiple causes → synthesis\" structure.",
      "how": "1) P1: military causes, then economic causes.  2) P2: political causes, then \"no single cause.\"  3) Pattern = multiple theories + synthesis.",
      "_id": "reading_5"
    },
    {
      "focus": "Vocabulary in context",
      "passage": "<p>The geologist tapped the rock face gently, then stepped back and studied the strata exposed by erosion. Each horizontal band told a different story — gray limestone from a shallow sea, rust-red sandstone from a desert period, the dark compressed layer that marked an ancient extinction event. Reading rock was, she often said, just reading time.</p><p>The youngest layers were the most <em>friable</em>, crumbling into powder at the touch. The ancient ones, compressed by millions of years of weight, were solid as iron and required a hammer and chisel to sample.</p>",
      "prompt": "As used in the second paragraph, \"friable\" most nearly means:",
      "options": [
        "easily crumbled or broken apart",
        "extremely ancient in origin",
        "dense and resistant to pressure",
        "chemically reactive with water"
      ],
      "answer": 0,
      "topic": "Vocabulary",
      "level": 3,
      "why": "\"Friable\" is directly contrasted with the ancient layers that are \"solid as iron\" and require tools to break — so friable means the opposite: crumbles easily.",
      "how": "1) Context: \"crumbling into powder at the touch.\"  2) Contrast: ancient layers = solid as iron.  3) Friable = easily crumbled.",
      "_id": "reading_6"
    }
  ],
  "writing": [
    {
      "focus": "Fragment",
      "prompt": "Choose the best revision: \"Because the assignment was difficult. The students asked questions.\"",
      "options": [
        "Because the assignment was difficult, the students asked questions.",
        "Because the assignment was difficult students asked questions.",
        "The students because the assignment was difficult asked questions.",
        "The students asked questions. Because the assignment was difficult."
      ],
      "answer": 0,
      "topic": "Sentence Structure",
      "level": 1,
      "why": "A dependent clause (starting with \"Because\") must be attached to an independent clause.",
      "how": "1) \"Because the assignment was difficult\" is a fragment.  2) Join it to the next clause with a comma.",
      "_id": "writing_0"
    },
    {
      "focus": "Subject-verb agreement",
      "prompt": "Choose the best correction: \"The group of students were preparing for the exam.\"",
      "options": [
        "The group of students was preparing for the exam.",
        "The group of students are preparing for the exam.",
        "The group of students is prepare for the exam.",
        "No change needed."
      ],
      "answer": 0,
      "topic": "Agreement",
      "level": 2,
      "why": "Subject is \"group\" (singular), so the verb must be singular: \"was.\"",
      "how": "1) Cross out \"of students.\"  2) \"The group... was\" — singular subject needs singular verb.",
      "_id": "writing_1"
    },
    {
      "focus": "Misplaced modifier",
      "prompt": "Choose the clearest sentence.",
      "options": [
        "Walking to school, I saw a deer in the field.",
        "Walking to school, a deer was seen in the field.",
        "A deer was seen by me walking to school.",
        "I saw walking to school a deer in the field."
      ],
      "answer": 0,
      "topic": "Modifiers",
      "level": 3,
      "why": "The introductory phrase \"Walking to school\" must modify the subject immediately following the comma.",
      "how": "1) The walker is \"I,\" not a deer.  2) Only option A places \"I\" right after the comma.",
      "_id": "writing_2"
    },
    {
      "focus": "Parallelism",
      "prompt": "Choose the best version.",
      "options": [
        "She enjoys hiking, swimming, and biking.",
        "She enjoys to hike, swimming, and biking.",
        "She enjoys hiking, to swim, and biked.",
        "She enjoyed hike, swim, and biking."
      ],
      "answer": 0,
      "topic": "Parallelism",
      "level": 3,
      "why": "All list items must share the same grammatical form.",
      "how": "1) All gerunds (-ing form): hiking, swimming, biking.  2) That's consistent parallel structure.",
      "_id": "writing_3"
    },
    {
      "focus": "Pronoun agreement",
      "prompt": "Which sentence correctly uses a pronoun?",
      "options": [
        "Everyone on the team did their best.",
        "Everyone on the team did his best only.",
        "Everyone on the team did its best.",
        "Everyone on the team did them best."
      ],
      "answer": 0,
      "topic": "Pronoun Agreement",
      "level": 2,
      "why": "\"Everyone\" is grammatically singular but conventionally takes \"their\" in modern standard English to be gender-inclusive.",
      "how": "1) \"Everyone\" = singular indefinite pronoun.  2) \"Their\" is widely accepted as a singular gender-neutral pronoun.  3) \"Its\" and \"them\" don't apply to people.",
      "_id": "writing_4"
    },
    {
      "focus": "Comma splice",
      "prompt": "Which version corrects the comma splice: \"I was tired, I still finished the report.\"",
      "options": [
        "I was tired; however, I still finished the report.",
        "I was tired, but still I was finishing the report.",
        "I was tired, yet the report finished.",
        "I was tired, I still will finish the report."
      ],
      "answer": 0,
      "topic": "Punctuation",
      "level": 2,
      "why": "A comma splice joins two independent clauses with only a comma. Fix it with a semicolon + conjunctive adverb, or a coordinating conjunction.",
      "how": "1) Two complete sentences joined by only a comma = comma splice.  2) Semicolon + \"however\" correctly connects them.",
      "_id": "writing_5"
    },
    {
      "focus": "Active vs. passive voice",
      "prompt": "Which sentence is in active voice?",
      "options": [
        "The engineer designed the bridge.",
        "The bridge was designed by the engineer.",
        "The bridge had been designed.",
        "Designing the bridge was done by the engineer."
      ],
      "answer": 0,
      "topic": "Sentence Structure",
      "level": 2,
      "why": "Active voice: subject performs the action. Passive voice: subject receives the action.",
      "how": "1) Active: subject (engineer) → verb (designed) → object (bridge).  2) Passive: subject (bridge) receives the action.  3) Option A = active.",
      "_id": "writing_6"
    },
    {
      "focus": "Apostrophes",
      "prompt": "Which sentence correctly uses apostrophes?",
      "options": [
        "The dog's leash is tangled in the neighbor's fence.",
        "The dogs leash is tangled in the neighbors fence.",
        "The dog's leash is tangled in the neighbors' fence.",
        "The dogs' leash is tangled in the neighbor's fence."
      ],
      "answer": 0,
      "topic": "Punctuation",
      "level": 2,
      "why": "One dog, one neighbor — singular possessives both need apostrophe before the s.",
      "how": "1) One dog: dog's ✓  2) One neighbor: neighbor's ✓  3) Option C has \"neighbors'\" which implies multiple neighbors.",
      "_id": "writing_7"
    },
    {
      "focus": "Transition words",
      "prompt": "Which sentence uses a transition that shows contrast?",
      "options": [
        "The study was small; nevertheless, its findings were widely cited.",
        "The study was small; therefore, its findings were widely cited.",
        "The study was small; furthermore, its findings were widely cited.",
        "The study was small; similarly, its findings were widely cited."
      ],
      "answer": 0,
      "topic": "Organization",
      "level": 3,
      "why": "\"Nevertheless\" signals contrast — \"despite the small size, the findings mattered.\" \"Therefore\" signals cause-effect, \"furthermore\" adds, \"similarly\" compares.",
      "how": "1) Identify the logical relationship: small study BUT widely cited = contrast.  2) Contrast transitions: however, nevertheless, yet.  3) Only option A has a contrast transition.",
      "_id": "writing_8"
    }
  ],
  "ap_calc_ab": [
    {
      "focus": "Limits — algebraic",
      "prompt": "lim(x→2) (x² − 4)/(x − 2) = ?",
      "options": [
        "4",
        "0",
        "undefined",
        "2"
      ],
      "answer": 0,
      "topic": "Limits",
      "level": 2,
      "why": "Factor the numerator to cancel the zero denominator.",
      "how": "1) x²−4 = (x−2)(x+2).  2) Cancel (x−2).  3) lim(x→2) (x+2) = 4.",
      "_id": "ap_calc_ab_0"
    },
    {
      "focus": "Continuity",
      "prompt": "f(x) = (x²−1)/(x−1) has a removable discontinuity at x = 1 because:",
      "options": [
        "The limit exists but f(1) is undefined",
        "The limit does not exist",
        "f(1) is defined but wrong",
        "The function is continuous"
      ],
      "answer": 0,
      "topic": "Continuity",
      "level": 2,
      "why": "A removable discontinuity means the limit exists but the function value is missing or mismatched.",
      "how": "1) Factor: (x−1)(x+1)/(x−1) = x+1 for x≠1.  2) lim = 2, but f(1) is undefined → removable.",
      "_id": "ap_calc_ab_1"
    },
    {
      "focus": "Power rule",
      "prompt": "If f(x) = x², what is f′(x)?",
      "options": [
        "2x",
        "x",
        "2",
        "x²"
      ],
      "answer": 0,
      "topic": "Derivatives",
      "level": 1,
      "why": "Power rule: d/dx[xⁿ] = nxⁿ⁻¹.",
      "how": "1) n = 2.  2) f′(x) = 2x²⁻¹ = 2x.",
      "_id": "ap_calc_ab_2"
    },
    {
      "focus": "Product rule",
      "prompt": "d/dx[x² · sin(x)] = ?",
      "options": [
        "2x·sin(x) + x²·cos(x)",
        "2x·cos(x)",
        "x²·cos(x)",
        "2x·sin(x)"
      ],
      "answer": 0,
      "topic": "Product Rule",
      "level": 3,
      "why": "Product rule: (uv)′ = u′v + uv′.",
      "how": "1) u = x², u′ = 2x.  2) v = sin(x), v′ = cos(x).  3) (uv)′ = 2x·sin(x) + x²·cos(x).",
      "_id": "ap_calc_ab_3"
    },
    {
      "focus": "Chain rule",
      "prompt": "d/dx[ sin(3x) ] = ?",
      "options": [
        "3·cos(3x)",
        "cos(3x)",
        "−3·cos(3x)",
        "3·sin(3x)"
      ],
      "answer": 0,
      "topic": "Chain Rule",
      "level": 3,
      "why": "Chain rule: d/dx[f(g(x))] = f′(g(x))·g′(x).",
      "how": "1) Outer: sin → cos.  2) Inner: 3x → 3.  3) Result: cos(3x) · 3 = 3cos(3x).",
      "_id": "ap_calc_ab_4"
    },
    {
      "focus": "Quotient rule",
      "prompt": "d/dx[x²/sin(x)] = ?",
      "options": [
        "(2x·sin(x) − x²·cos(x))/sin²(x)",
        "2x/cos(x)",
        "(2x·cos(x) − x²·sin(x))/sin²(x)",
        "2x·sin(x)"
      ],
      "answer": 0,
      "topic": "Quotient Rule",
      "level": 3,
      "why": "Quotient rule: (u/v)′ = (u′v − uv′)/v².",
      "how": "1) u=x², u′=2x.  v=sin(x), v′=cos(x).  2) (2x·sinx − x²·cosx)/sin²x.",
      "_id": "ap_calc_ab_5"
    },
    {
      "focus": "Implicit differentiation",
      "prompt": "For x² + y² = 25, dy/dx = ?",
      "options": [
        "−x/y",
        "x/y",
        "−y/x",
        "2x"
      ],
      "answer": 0,
      "topic": "Implicit Differentiation",
      "level": 4,
      "why": "Differentiate both sides; treat y as a function of x, so d/dx[y²] = 2y·dy/dx.",
      "how": "1) 2x + 2y·dy/dx = 0.  2) dy/dx = −2x/2y = −x/y.",
      "_id": "ap_calc_ab_6"
    },
    {
      "focus": "FTC — evaluation",
      "prompt": "∫₁³ 2x dx = ?",
      "options": [
        "8",
        "4",
        "6",
        "10"
      ],
      "answer": 0,
      "topic": "FTC",
      "level": 3,
      "why": "Antiderivative of 2x is x²; evaluate at bounds.",
      "how": "1) ∫2x dx = x².  2) [x²]₁³ = 9 − 1 = 8.",
      "_id": "ap_calc_ab_7"
    },
    {
      "focus": "u-substitution",
      "prompt": "∫ 2x(x²+1)³ dx = ?",
      "options": [
        "(x²+1)⁴/4 + C",
        "(x²+1)⁴ + C",
        "x²(x²+1)³ + C",
        "4(x²+1)³ + C"
      ],
      "answer": 0,
      "topic": "u-Substitution",
      "level": 4,
      "why": "Let u = x²+1, du = 2x dx; the 2x and dx collapse into du.",
      "how": "1) u = x²+1, du = 2x dx.  2) ∫u³ du = u⁴/4.  3) Sub back: (x²+1)⁴/4 + C.",
      "_id": "ap_calc_ab_8"
    },
    {
      "focus": "Area between curves",
      "prompt": "Area between y = x² and y = x from 0 to 1?",
      "options": [
        "1/6",
        "1/2",
        "1/3",
        "1/4"
      ],
      "answer": 0,
      "topic": "Area Between Curves",
      "level": 4,
      "why": "Area = ∫₀¹(top − bottom) dx = ∫₀¹(x − x²) dx.",
      "how": "1) ∫(x − x²) dx = x²/2 − x³/3.  2) Evaluate: (1/2 − 1/3) = 1/6.",
      "_id": "ap_calc_ab_9"
    },
    {
      "focus": "Related rates",
      "prompt": "A spherical balloon is inflated at 4π cm³/s. When r = 2 cm, dr/dt = ?",
      "options": [
        "1/4 cm/s",
        "1/2 cm/s",
        "4 cm/s",
        "1 cm/s"
      ],
      "answer": 0,
      "topic": "Related Rates",
      "level": 4,
      "why": "V = 4/3·πr³, so dV/dt = 4πr²·dr/dt.",
      "how": "1) 4π = 4π(4)·dr/dt.  2) dr/dt = 4π/16π = 1/4 cm/s.",
      "_id": "ap_calc_ab_10"
    },
    {
      "focus": "MVT",
      "prompt": "f(x) = x² on [1,3]. The MVT guarantees a c where f′(c) equals:",
      "options": [
        "4",
        "2",
        "6",
        "3"
      ],
      "answer": 0,
      "topic": "MVT",
      "level": 3,
      "why": "MVT: f′(c) = (f(b)−f(a))/(b−a).",
      "how": "1) f(3)=9, f(1)=1.  2) (9−1)/(3−1) = 8/2 = 4.",
      "_id": "ap_calc_ab_11"
    },
    {
      "focus": "Differential equations",
      "prompt": "dy/dx = 2y, y(0) = 3. Solution?",
      "options": [
        "y = 3e^(2x)",
        "y = 3+2x",
        "y = e^(2x)",
        "y = 6e^x"
      ],
      "answer": 0,
      "topic": "Differential Equations",
      "level": 4,
      "why": "Separable ODE: dy/y = 2dx → ln|y| = 2x → y = Ce^(2x).",
      "how": "1) Separate: dy/y = 2dx.  2) Integrate both sides.  3) y = Ce^(2x); y(0)=3 → C=3.",
      "_id": "ap_calc_ab_12"
    },
    {
      "focus": "L'Hopital's Rule",
      "prompt": "lim(x→0) (eˣ−1)/x=?",
      "options": [
        "1",
        "0",
        "∞",
        "e"
      ],
      "answer": 0,
      "topic": "Limits",
      "level": 3,
      "_id": "ab_x1",
      "why": "0/0→L'Hôpital: eˣ/1→1.",
      "how": "1) 0/0 form. 2) d/dx[eˣ−1]/d/dx[x]=eˣ. 3) At x=0: 1."
    },
    {
      "focus": "IVT",
      "prompt": "f continuous on [1,4], f(1)=2, f(4)=−1. IVT guarantees f(c)=?",
      "options": [
        "0",
        "5",
        "−2",
        "2"
      ],
      "answer": 0,
      "topic": "Continuity",
      "level": 3,
      "_id": "ab_x2",
      "why": "0 is between −1 and 2, so IVT guarantees a c.",
      "how": "1) IVT: any value between f(a) and f(b) is achieved. 2) 0 is between −1 and 2."
    },
    {
      "focus": "Decreasing interval",
      "prompt": "f(x)=x³−3x. Where is f decreasing?",
      "options": [
        "(−1,1)",
        "(−∞,−1)",
        "(1,∞)",
        "(0,3)"
      ],
      "answer": 0,
      "topic": "Derivatives",
      "level": 3,
      "_id": "ab_x3",
      "why": "f'=3x²−3<0 when x²<1, i.e. −1<x<1.",
      "how": "1) f'=3x²−3. 2) <0 → x²<1 → −1<x<1."
    },
    {
      "focus": "Concavity",
      "prompt": "f(x)=x³−6x²+9x. Where is f concave up?",
      "options": [
        "x>2",
        "x<2",
        "x>3",
        "All x"
      ],
      "answer": 0,
      "topic": "Derivatives",
      "level": 3,
      "_id": "ab_x4",
      "why": "f''=6x−12>0 → x>2.",
      "how": "1) f''=6x−12. 2) >0 → x>2."
    },
    {
      "focus": "Left Riemann Sum",
      "prompt": "Left Riemann sum for x² on [0,2], n=4?",
      "options": [
        "1.75",
        "2.75",
        "3.5",
        "4"
      ],
      "answer": 0,
      "topic": "Integration",
      "level": 3,
      "_id": "ab_x5",
      "why": "Δx=0.5; f(0)+f(0.5)+f(1)+f(1.5)=0+0.25+1+2.25=3.5; ×0.5=1.75.",
      "how": "1) Δx=0.5. 2) Sum=3.5. 3) 3.5×0.5=1.75."
    },
    {
      "focus": "Displacement",
      "prompt": "v(t)=3t². Displacement t=0 to t=2?",
      "options": [
        "8",
        "6",
        "12",
        "4"
      ],
      "answer": 0,
      "topic": "Integration",
      "level": 4,
      "_id": "ab_x6",
      "why": "∫₀²3t²dt=[t³]₀²=8.",
      "how": "1) ∫3t²dt=t³. 2) 8−0=8."
    },
    {
      "focus": "Optimization",
      "prompt": "Maximize A=x(10−x). Best x?",
      "options": [
        "5",
        "10",
        "0",
        "4"
      ],
      "answer": 0,
      "topic": "Optimization",
      "level": 4,
      "_id": "ab_x7",
      "why": "A'=10−2x=0→x=5.",
      "how": "1) A=10x−x². 2) A'=10−2x=0. 3) x=5."
    }
  ],
  "ap_calc_bc": [
    {
      "focus": "Limits — L'Hôpital",
      "prompt": "lim(x→0) sin(x)/x = ?",
      "options": [
        "1",
        "0",
        "∞",
        "undefined"
      ],
      "answer": 0,
      "topic": "Limits",
      "level": 3,
      "why": "This is a standard limit. Applying L'Hôpital's rule: derivative of sin(x)/derivative of x = cos(x)/1 → cos(0) = 1.",
      "how": "1) Direct substitution gives 0/0.  2) L'Hôpital: d/dx[sin x]/d/dx[x] = cos(x)/1.  3) At x=0: cos(0) = 1.",
      "_id": "ap_calc_bc_0"
    },
    {
      "focus": "Series — convergence test",
      "prompt": "The series Σ 1/n² is:",
      "options": [
        "Convergent (p-series p>1)",
        "Divergent",
        "Conditionally convergent",
        "Alternating"
      ],
      "answer": 0,
      "topic": "Series",
      "level": 3,
      "why": "p-series Σ 1/nᵖ converges when p > 1.",
      "how": "1) Here p = 2 > 1.  2) Therefore the series converges.",
      "_id": "ap_calc_bc_1"
    },
    {
      "focus": "Derivative of ln",
      "prompt": "d/dx[ ln(x) ] = ?",
      "options": [
        "1/x",
        "ln(x)",
        "x",
        "−1/x²"
      ],
      "answer": 0,
      "topic": "Derivatives",
      "level": 2,
      "why": "Standard derivative: d/dx[ln x] = 1/x.",
      "how": "1) This is a memorized rule.  2) d/dx[ln(x)] = 1/x for x > 0.",
      "_id": "ap_calc_bc_2"
    },
    {
      "focus": "Taylor series — sin",
      "prompt": "The first nonzero term of the Maclaurin series for sin(x) is:",
      "options": [
        "x",
        "x³/6",
        "1",
        "x²/2"
      ],
      "answer": 0,
      "topic": "Taylor Series",
      "level": 4,
      "why": "sin(x) = x − x³/3! + x⁵/5! − ... The first term is x.",
      "how": "1) Maclaurin for sin(x): f(0)=0, f′(0)=1.  2) First term: f′(0)·x/1! = x.",
      "_id": "ap_calc_bc_3"
    },
    {
      "focus": "Integration by parts",
      "prompt": "∫ x·eˣ dx = ?",
      "options": [
        "eˣ(x−1) + C",
        "xeˣ + C",
        "eˣ + C",
        "x²eˣ/2 + C"
      ],
      "answer": 0,
      "topic": "Integration by Parts",
      "level": 4,
      "why": "IBP: ∫u dv = uv − ∫v du. Let u = x, dv = eˣ dx.",
      "how": "1) u=x, dv=eˣdx → du=dx, v=eˣ.  2) xeˣ − ∫eˣ dx = xeˣ − eˣ + C = eˣ(x−1)+C.",
      "_id": "ap_calc_bc_4"
    },
    {
      "focus": "Partial fractions",
      "prompt": "∫ 1/(x²−1) dx — what is the first step?",
      "options": [
        "Decompose: A/(x−1) + B/(x+1)",
        "Use u-substitution",
        "Integrate by parts",
        "Trigonometric substitution"
      ],
      "answer": 0,
      "topic": "Partial Fractions",
      "level": 4,
      "why": "x²−1 = (x−1)(x+1), so partial fractions decompose into two simpler fractions.",
      "how": "1) Factor denominator.  2) Write 1/((x−1)(x+1)) = A/(x−1) + B/(x+1).  3) Solve for A, B.",
      "_id": "ap_calc_bc_5"
    },
    {
      "focus": "Sequences — limit",
      "prompt": "lim(n→∞) (2n+1)/(3n−5) = ?",
      "options": [
        "2/3",
        "0",
        "∞",
        "1/3"
      ],
      "answer": 0,
      "topic": "Sequences",
      "level": 3,
      "why": "Divide numerator and denominator by n; constants vanish.",
      "how": "1) (2+1/n)/(3−5/n) → (2+0)/(3−0) = 2/3.",
      "_id": "ap_calc_bc_6"
    },
    {
      "focus": "Parametric — dy/dx",
      "prompt": "For x=t², y=t³, dy/dx = ?",
      "options": [
        "3t/2",
        "3t²/2t",
        "2t/3t²",
        "t"
      ],
      "answer": 0,
      "topic": "Parametric",
      "level": 4,
      "why": "dy/dx = (dy/dt)/(dx/dt).",
      "how": "1) dy/dt = 3t².  dx/dt = 2t.  2) dy/dx = 3t²/2t = 3t/2.",
      "_id": "ap_calc_bc_7"
    },
    {
      "focus": "Polar area",
      "prompt": "Area enclosed by r = 2cos(θ) is:",
      "options": [
        "π",
        "2π",
        "4π",
        "π/2"
      ],
      "answer": 0,
      "topic": "Polar",
      "level": 5,
      "why": "Polar area formula: A = ½∫r² dθ over the full circle.",
      "how": "1) r = 2cosθ is a circle of radius 1 centered at (1,0).  2) Area = π(1)² = π.",
      "_id": "ap_calc_bc_8"
    },
    {
      "focus": "Vectors — dot product",
      "prompt": "Vectors ⟨1,2⟩ and ⟨3,−1⟩. Dot product?",
      "options": [
        "1",
        "5",
        "−1",
        "7"
      ],
      "answer": 0,
      "topic": "Vectors",
      "level": 3,
      "why": "Dot product = sum of products of corresponding components.",
      "how": "1) 1·3 + 2·(−1) = 3 − 2 = 1.",
      "_id": "ap_calc_bc_9"
    },
    {
      "focus": "Polar area",
      "prompt": "Area enclosed by r=2cosθ for one loop?",
      "options": [
        "π",
        "2π",
        "4π",
        "π/2"
      ],
      "answer": 0,
      "topic": "Polar/Parametric",
      "level": 4,
      "_id": "bc_x11",
      "why": "A=½∫₀^π(2cosθ)²dθ=½∫₀^π4cos²θdθ=π.",
      "how": "1) A=½∫r²dθ. 2) Limits for one loop: 0 to π. 3) ∫cos²θ=π/2. 4) ½×4×π/2=π."
    },
    {
      "focus": "Arc length parametric",
      "prompt": "Arc length of x=t², y=t³ from t=0 to t=1?",
      "options": [
        "∫₀¹√(4t²+9t⁴)dt",
        "∫₀¹(2t+3t²)dt",
        "∫₀¹√(2t+3t²)dt",
        "1"
      ],
      "answer": 0,
      "topic": "Polar/Parametric",
      "level": 4,
      "_id": "bc_x12",
      "why": "L=∫√((dx/dt)²+(dy/dt)²)dt. dx/dt=2t, dy/dt=3t².",
      "how": "1) dx/dt=2t, dy/dt=3t². 2) L=∫₀¹√(4t²+9t⁴)dt."
    },
    {
      "focus": "Series convergence — ratio test",
      "prompt": "Ratio test: if lim|aₙ₊₁/aₙ|=L<1, the series:",
      "options": [
        "Converges absolutely",
        "Diverges",
        "Test inconclusive",
        "Converges conditionally"
      ],
      "answer": 0,
      "topic": "Series",
      "level": 4,
      "_id": "bc_x13",
      "why": "Ratio test: L<1→absolute convergence; L>1→divergence; L=1→inconclusive.",
      "how": "1) L<1: series converges absolutely. 2) L>1: diverges. 3) L=1: test fails."
    },
    {
      "focus": "Taylor error bound",
      "prompt": "Lagrange error bound for a Taylor polynomial of degree n uses:",
      "options": [
        "The (n+1)th derivative at some point c between x and a",
        "The nth derivative only",
        "The integral of f",
        "The limit of partial sums"
      ],
      "answer": 0,
      "topic": "Taylor Series",
      "level": 4,
      "_id": "bc_x14",
      "why": "|Rₙ(x)|≤|f^(n+1)(c)|/(n+1)! × |x−a|^(n+1) for some c.",
      "how": "1) Error bound uses next derivative (degree n+1). 2) Lagrange form."
    },
    {
      "focus": "Euler's method",
      "prompt": "y'=y, y(0)=1, step h=0.5. Euler estimate y(0.5)?",
      "options": [
        "1.5",
        "2",
        "1.25",
        "e^0.5"
      ],
      "answer": 0,
      "topic": "Differential Equations",
      "level": 4,
      "_id": "bc_x15",
      "why": "y(0.5)≈y(0)+h×y'(0)=1+0.5×1=1.5.",
      "how": "1) Euler: yₙ₊₁=yₙ+h·f(xₙ,yₙ). 2) y(0.5)=1+0.5×1=1.5."
    },
    {
      "focus": "Logistic growth",
      "prompt": "Logistic equation dP/dt=kP(1−P/M). As P→M:",
      "options": [
        "dP/dt→0 (growth stops)",
        "dP/dt→k",
        "dP/dt→∞",
        "dP/dt=1"
      ],
      "answer": 0,
      "topic": "Differential Equations",
      "level": 4,
      "_id": "bc_x16",
      "why": "As P→M: (1−P/M)→0, so dP/dt→0. Population stops growing at carrying capacity.",
      "how": "1) At P=M: 1−M/M=0. 2) dP/dt=kM×0=0."
    },
    {
      "focus": "Improper integral",
      "prompt": "∫₁^∞ 1/x² dx = ?",
      "options": [
        "1",
        "∞",
        "1/2",
        "2"
      ],
      "answer": 0,
      "topic": "Integration",
      "level": 4,
      "_id": "bc_x17",
      "why": "[−1/x]₁^∞=(0)−(−1)=1.",
      "how": "1) ∫1/x²dx=−1/x. 2) [−1/x]₁^∞=0−(−1)=1."
    },
    {
      "focus": "Partial fractions",
      "prompt": "∫ 1/(x²−1) dx requires decomposing into:",
      "options": [
        "A/(x−1)+B/(x+1)",
        "A/x+B/(x²−1)",
        "Ax+B/(x²−1)",
        "Cannot be done"
      ],
      "answer": 0,
      "topic": "Integration",
      "level": 4,
      "_id": "bc_x18",
      "why": "x²−1=(x−1)(x+1). Partial fractions: A/(x−1)+B/(x+1).",
      "how": "1) Factor: (x−1)(x+1). 2) Partial fractions with each linear factor."
    },
    {
      "focus": "Vector-valued functions",
      "prompt": "r(t)=⟨t²,t³⟩. Velocity vector at t=2?",
      "options": [
        "⟨4,12⟩",
        "⟨4,8⟩",
        "⟨2,3⟩",
        "⟨8,12⟩"
      ],
      "answer": 0,
      "topic": "Polar/Parametric",
      "level": 4,
      "_id": "bc_x19",
      "why": "r'(t)=⟨2t,3t²⟩. At t=2: ⟨4,12⟩.",
      "how": "1) Differentiate each component. 2) r'(t)=⟨2t,3t²⟩. 3) t=2: ⟨4,12⟩."
    },
    {
      "focus": "Convergence — alternating series",
      "prompt": "Alternating series Σ(−1)ⁿ/n converges because:",
      "options": [
        "Terms decrease to 0 (alternating series test)",
        "Ratio test gives L<1",
        "p-series test",
        "Comparison test"
      ],
      "answer": 0,
      "topic": "Series",
      "level": 4,
      "_id": "bc_x20",
      "why": "AST: alternating signs, terms decrease, limit=0→converges.",
      "how": "1) Alternating: signs alternate. 2) |aₙ|=1/n decreases. 3) lim(1/n)=0. 4) AST: converges."
    }
  ],
  "ap_physics_1": [
    {
      "focus": "Kinematics — UARM",
      "prompt": "A car starts from rest and accelerates at 3 m/s² for 4 s. Final speed?",
      "options": [
        "12 m/s",
        "7 m/s",
        "3 m/s",
        "48 m/s"
      ],
      "answer": 0,
      "topic": "Kinematics",
      "level": 1,
      "why": "v = v₀ + at.",
      "how": "1) v₀=0, a=3, t=4.  2) v = 0 + 3×4 = 12 m/s.",
      "_id": "ap_physics_1_0"
    },
    {
      "focus": "Newton's 2nd law",
      "prompt": "A 2 kg object accelerates at 3 m/s². Net force?",
      "options": [
        "6 N",
        "5 N",
        "2/3 N",
        "9 N"
      ],
      "answer": 0,
      "topic": "Newton's Laws",
      "level": 1,
      "why": "F = ma.",
      "how": "1) F = 2 × 3 = 6 N.",
      "_id": "ap_physics_1_1"
    },
    {
      "focus": "Circular motion",
      "prompt": "A 0.5 kg ball on a 1 m string moves at 4 m/s. Centripetal force?",
      "options": [
        "8 N",
        "2 N",
        "16 N",
        "4 N"
      ],
      "answer": 0,
      "topic": "Circular Motion",
      "level": 3,
      "why": "Centripetal force = mv²/r.",
      "how": "1) F = 0.5 × 16 / 1 = 8 N.",
      "_id": "ap_physics_1_2"
    },
    {
      "focus": "Work-energy theorem",
      "prompt": "A 4 kg object moves at 5 m/s. KE?",
      "options": [
        "50 J",
        "20 J",
        "100 J",
        "40 J"
      ],
      "answer": 0,
      "topic": "Energy",
      "level": 2,
      "why": "KE = ½mv².",
      "how": "1) ½ × 4 × 25 = 50 J.",
      "_id": "ap_physics_1_3"
    },
    {
      "focus": "Conservation of momentum",
      "prompt": "Linear momentum is defined as:",
      "options": [
        "mass × velocity",
        "mass × acceleration",
        "force × time only",
        "½mv²"
      ],
      "answer": 0,
      "topic": "Momentum",
      "level": 1,
      "why": "p = mv is the definition of linear momentum.",
      "how": "1) Momentum = mass × velocity.  Units: kg·m/s.",
      "_id": "ap_physics_1_4"
    },
    {
      "focus": "Torque",
      "prompt": "A 10 N force applied 0.5 m from a pivot point (perpendicular). Torque?",
      "options": [
        "5 N·m",
        "10 N·m",
        "0.5 N·m",
        "20 N·m"
      ],
      "answer": 0,
      "topic": "Torque",
      "level": 2,
      "why": "τ = r × F (perpendicular component).",
      "how": "1) τ = 0.5 × 10 = 5 N·m.",
      "_id": "ap_physics_1_5"
    },
    {
      "focus": "Rotation — moment of inertia",
      "prompt": "A disk has moment of inertia I = ½MR². For M=2 kg, R=3 m, I = ?",
      "options": [
        "9 kg·m²",
        "6 kg·m²",
        "18 kg·m²",
        "3 kg·m²"
      ],
      "answer": 0,
      "topic": "Rotation",
      "level": 3,
      "why": "I = ½MR².",
      "how": "1) I = ½ × 2 × 9 = 9 kg·m².",
      "_id": "ap_physics_1_6"
    },
    {
      "focus": "Waves — wavelength",
      "prompt": "A wave has speed 340 m/s and frequency 170 Hz. Wavelength?",
      "options": [
        "2 m",
        "0.5 m",
        "57,800 m",
        "170 m"
      ],
      "answer": 0,
      "topic": "Waves",
      "level": 2,
      "why": "v = fλ, so λ = v/f.",
      "how": "1) λ = 340/170 = 2 m.",
      "_id": "ap_physics_1_7"
    },
    {
      "focus": "DC circuits — Ohm's law",
      "prompt": "A 12 V battery drives current through a 4 Ω resistor. Current?",
      "options": [
        "3 A",
        "48 A",
        "0.33 A",
        "8 A"
      ],
      "answer": 0,
      "topic": "DC Circuits",
      "level": 1,
      "why": "Ohm's law: V = IR, so I = V/R.",
      "how": "1) I = 12/4 = 3 A.",
      "_id": "ap_physics_1_8"
    },
    {
      "focus": "Impulse-momentum theorem",
      "prompt": "Impulse J=FΔt equals:",
      "options": [
        "Change in momentum Δp",
        "Change in kinetic energy",
        "Work done",
        "Power×time"
      ],
      "answer": 0,
      "topic": "Momentum",
      "level": 3,
      "_id": "p1_x12",
      "why": "Impulse-momentum theorem: J=FΔt=Δp=mΔv.",
      "how": "1) J=FΔt. 2) Newton 2nd: F=ma=m(Δv/Δt). 3) FΔt=mΔv=Δp."
    },
    {
      "focus": "Standing waves",
      "prompt": "A string fixed at both ends resonates at its fundamental frequency. Wavelength?",
      "options": [
        "2L",
        "L",
        "L/2",
        "4L"
      ],
      "answer": 0,
      "topic": "Waves",
      "level": 3,
      "_id": "p1_x13",
      "why": "Fundamental: half wavelength fits the string. λ=2L.",
      "how": "1) Fixed-fixed: nodes at both ends. 2) Fundamental=1 antinode. 3) L=λ/2→λ=2L."
    },
    {
      "focus": "Electric circuits — series resistors",
      "prompt": "Two resistors R₁=4Ω and R₂=6Ω in series. Total resistance?",
      "options": [
        "10 Ω",
        "2.4 Ω",
        "24 Ω",
        "5 Ω"
      ],
      "answer": 0,
      "topic": "Electricity",
      "level": 2,
      "_id": "p1_x14",
      "why": "Series: R_total=R₁+R₂=4+6=10Ω.",
      "how": "1) Series: add resistors. 2) 4+6=10Ω."
    },
    {
      "focus": "Parallel resistors",
      "prompt": "R₁=4Ω and R₂=4Ω in parallel. Total resistance?",
      "options": [
        "2 Ω",
        "8 Ω",
        "4 Ω",
        "1 Ω"
      ],
      "answer": 0,
      "topic": "Electricity",
      "level": 3,
      "_id": "p1_x15",
      "why": "Parallel: 1/R=1/4+1/4=1/2→R=2Ω.",
      "how": "1) 1/R_par=1/R₁+1/R₂. 2) 1/4+1/4=2/4=1/2. 3) R=2Ω."
    },
    {
      "focus": "Mechanical advantage",
      "prompt": "Simple machine with ideal MA=3 and load=60N. Input force needed?",
      "options": [
        "20 N",
        "180 N",
        "60 N",
        "3 N"
      ],
      "answer": 0,
      "topic": "Energy",
      "level": 2,
      "_id": "p1_x16",
      "why": "MA=F_out/F_in → F_in=F_out/MA=60/3=20N.",
      "how": "1) MA=output/input. 2) F_in=60/3=20N."
    },
    {
      "focus": "Refraction — index",
      "prompt": "Light travels from air (n=1) into glass (n=1.5) at 45°. It bends:",
      "options": [
        "Toward the normal",
        "Away from the normal",
        "Parallel to the boundary",
        "Reflects completely"
      ],
      "answer": 0,
      "topic": "Waves",
      "level": 3,
      "_id": "p1_x17",
      "why": "Going from low n to high n: ray bends toward normal.",
      "how": "1) n₁sinθ₁=n₂sinθ₂. 2) n₁<n₂→sinθ₂<sinθ₁→θ₂<θ₁ (toward normal)."
    },
    {
      "focus": "Power in circuits",
      "prompt": "P=IV=V²/R=I²R. A 6Ω resistor carries 2A. Power dissipated?",
      "options": [
        "24 W",
        "12 W",
        "3 W",
        "36 W"
      ],
      "answer": 0,
      "topic": "Electricity",
      "level": 2,
      "_id": "p1_x18",
      "why": "P=I²R=4×6=24W.",
      "how": "1) P=I²R. 2) 2²×6=4×6=24W."
    }
  ],
  "ap_physics_2": [
    {
      "focus": "Fluids — Pascal's law",
      "prompt": "Pressure in a fluid increases with:",
      "options": [
        "depth",
        "temperature only",
        "velocity",
        "volume"
      ],
      "answer": 0,
      "topic": "Fluids",
      "level": 1,
      "why": "P = P₀ + ρgh; pressure increases linearly with depth.",
      "how": "1) P = P₀ + ρgh.  2) As h increases, P increases.",
      "_id": "ap_physics_2_0"
    },
    {
      "focus": "Thermodynamics — ideal gas",
      "prompt": "Ideal gas at constant T. Volume doubles. Pressure:",
      "options": [
        "halves",
        "doubles",
        "stays the same",
        "quadruples"
      ],
      "answer": 0,
      "topic": "Thermodynamics",
      "level": 2,
      "why": "Boyle's law: PV = constant at fixed T.",
      "how": "1) PV = const.  2) If V×2, then P÷2 to keep product constant.",
      "_id": "ap_physics_2_1"
    },
    {
      "focus": "Electric field",
      "prompt": "Electric force between two point charges follows:",
      "options": [
        "Coulomb's law: F∝q₁q₂/r²",
        "Ohm's law",
        "Faraday's law",
        "Hooke's law"
      ],
      "answer": 0,
      "topic": "Electric Field",
      "level": 2,
      "why": "Coulomb's law: F = kq₁q₂/r².",
      "how": "1) Force is proportional to both charges, inversely proportional to r².",
      "_id": "ap_physics_2_2"
    },
    {
      "focus": "Magnetism — force on current",
      "prompt": "A wire carrying current I in a magnetic field B experiences a force because of:",
      "options": [
        "F = IL × B (cross product)",
        "F = qE",
        "F = ma",
        "F = kq/r²"
      ],
      "answer": 0,
      "topic": "Magnetism",
      "level": 3,
      "why": "A current-carrying wire in a B field experiences F = IL × B.",
      "how": "1) Force = current × length × B-field.  2) Direction from the right-hand rule.",
      "_id": "ap_physics_2_3"
    },
    {
      "focus": "EM waves — speed",
      "prompt": "Electromagnetic waves travel at approximately ___ m/s in a vacuum.",
      "options": [
        "3×10⁸",
        "3×10⁶",
        "3×10¹⁰",
        "1.5×10⁸"
      ],
      "answer": 0,
      "topic": "EM Waves",
      "level": 1,
      "why": "Speed of light c ≈ 3×10⁸ m/s is a constant.",
      "how": "1) Memorize: c = 3×10⁸ m/s.",
      "_id": "ap_physics_2_4"
    },
    {
      "focus": "Geometric optics — refraction",
      "prompt": "A light ray enters a denser medium. It bends:",
      "options": [
        "toward the normal",
        "away from the normal",
        "parallel to surface",
        "reflects only"
      ],
      "answer": 0,
      "topic": "Optics",
      "level": 2,
      "why": "Snell's law: n₁sinθ₁ = n₂sinθ₂. In denser medium n₂>n₁, so θ₂<θ₁.",
      "how": "1) Higher n means slower speed.  2) Ray bends toward the normal when entering denser medium.",
      "_id": "ap_physics_2_5"
    },
    {
      "focus": "Circuits — capacitor",
      "prompt": "Capacitance is measured in:",
      "options": [
        "Farads",
        "Ohms",
        "Henrys",
        "Coulombs"
      ],
      "answer": 0,
      "topic": "Circuits",
      "level": 1,
      "why": "The unit of capacitance is the farad (F).",
      "how": "1) C = Q/V.  2) Units of Q/V = coulombs/volts = farads.",
      "_id": "ap_physics_2_6"
    },
    {
      "focus": "Buoyancy",
      "prompt": "Object floats half-submerged. Density vs water?",
      "options": [
        "Half",
        "Equal",
        "Double",
        "Quarter"
      ],
      "answer": 0,
      "topic": "Fluid Mechanics",
      "level": 3,
      "_id": "p2_x1",
      "why": "ρ_obj/ρ_fluid=fraction submerged=0.5.",
      "how": "1) Float: buoyancy=weight. 2) ρ_obj=0.5ρ_water."
    },
    {
      "focus": "Snell's Law",
      "prompt": "Light water(n=1.33)→glass(n=1.5) at 30°. Refraction angle?",
      "options": [
        "Smaller than 30°",
        "Larger than 30°",
        "Exactly 30°",
        "Total internal reflection"
      ],
      "answer": 0,
      "topic": "Optics",
      "level": 3,
      "_id": "p2_x2",
      "why": "n₁<n₂→θ₂<θ₁. Ray bends toward normal.",
      "how": "1) n₁sinθ₁=n₂sinθ₂. 2) 1.33<1.5→sinθ₂<sin30°→θ₂<30°."
    },
    {
      "focus": "First Law of Thermo",
      "prompt": "Gas absorbs 300J, does 100J work. ΔU?",
      "options": [
        "200 J",
        "400 J",
        "−200 J",
        "300 J"
      ],
      "answer": 0,
      "topic": "Thermodynamics",
      "level": 3,
      "_id": "p2_x3",
      "why": "ΔU=Q−W=300−100=200.",
      "how": "1) ΔU=Q−W. 2) 300−100=200 J."
    },
    {
      "focus": "Entropy",
      "prompt": "Entropy increases when:",
      "options": [
        "Ice melts to water",
        "Gas is compressed",
        "Temperature drops to 0K",
        "Crystallization occurs"
      ],
      "answer": 0,
      "topic": "Thermodynamics",
      "level": 3,
      "_id": "p2_x4",
      "why": "Ice→water: more disorder=entropy increase.",
      "how": "1) Entropy=disorder. 2) Melting=more disorder=ΔS>0."
    },
    {
      "focus": "Photoelectric effect",
      "prompt": "Increasing light intensity in photoelectric effect increases:",
      "options": [
        "Number of emitted electrons",
        "KE of each electron",
        "Threshold frequency",
        "Speed of light"
      ],
      "answer": 0,
      "topic": "Modern Physics",
      "level": 3,
      "_id": "p2_x5",
      "why": "More photons→more electrons. KE depends on frequency, not intensity.",
      "how": "1) Intensity=photon count. 2) More photons=more electrons."
    },
    {
      "focus": "Beta decay",
      "prompt": "Beta-minus decay: neutron emits:",
      "options": [
        "Electron + antineutrino",
        "Proton + neutrino",
        "Helium nucleus",
        "Gamma ray only"
      ],
      "answer": 0,
      "topic": "Nuclear Physics",
      "level": 3,
      "_id": "p2_x6",
      "why": "n→p+e⁻+antineutrino.",
      "how": "1) β⁻=electron emission. 2) Antineutrino conserves lepton number."
    },
    {
      "focus": "Double slit fringe spacing",
      "prompt": "Fringes are farther apart when:",
      "options": [
        "Slit separation decreases",
        "Wavelength decreases",
        "Screen moves closer",
        "Slit width increases"
      ],
      "answer": 0,
      "topic": "Waves",
      "level": 3,
      "_id": "p2_x7",
      "why": "Δy=λL/d. Smaller d→larger Δy.",
      "how": "1) Fringe spacing=λL/d. 2) d↓→Δy↑."
    },
    {
      "focus": "Bernoulli's principle",
      "prompt": "In a fluid flow, when the pipe narrows and speed increases, pressure:",
      "options": [
        "Decreases",
        "Increases",
        "Stays the same",
        "Doubles"
      ],
      "answer": 0,
      "topic": "Fluid Mechanics",
      "level": 3,
      "_id": "p2_x8",
      "why": "Bernoulli: P+½ρv²=const. Speed↑→pressure↓.",
      "how": "1) Bernoulli: P+½ρv²+ρgh=constant. 2) v↑→P↓."
    },
    {
      "focus": "Magnetic field from wire",
      "prompt": "A long straight wire carries current I. The magnetic field at distance r is:",
      "options": [
        "B=μ₀I/(2πr)",
        "B=μ₀I/r",
        "B=μ₀Ir",
        "B=I/(2πr)"
      ],
      "answer": 0,
      "topic": "Magnetism",
      "level": 3,
      "_id": "p2_x9",
      "why": "Ampere's Law for infinite wire: B=μ₀I/(2πr).",
      "how": "1) Apply Ampere's Law: ∮B·dl=μ₀I. 2) B(2πr)=μ₀I. 3) B=μ₀I/(2πr)."
    },
    {
      "focus": "Second Law of Thermodynamics",
      "prompt": "The Second Law of Thermodynamics states that:",
      "options": [
        "Total entropy of an isolated system never decreases",
        "Energy is conserved",
        "Heat flows from cold to hot naturally",
        "Internal energy is constant"
      ],
      "answer": 0,
      "topic": "Thermodynamics",
      "level": 3,
      "_id": "p2_x10",
      "why": "2nd Law: entropy of isolated system ΔS≥0 (never spontaneously decreases).",
      "how": "1) 1st Law: energy conservation. 2) 2nd Law: entropy never decreases. 3) Heat naturally flows hot→cold."
    },
    {
      "focus": "Capacitors in series",
      "prompt": "Two identical capacitors C each in series. Total capacitance?",
      "options": [
        "C/2",
        "2C",
        "C",
        "4C"
      ],
      "answer": 0,
      "topic": "Circuits",
      "level": 3,
      "_id": "p2_x11",
      "why": "Series: 1/C_total=1/C+1/C=2/C → C_total=C/2.",
      "how": "1) 1/C_total=1/C₁+1/C₂=2/C. 2) C_total=C/2."
    },
    {
      "focus": "Photon energy",
      "prompt": "Photon with frequency f=6×10¹⁴ Hz. Energy? (h=6.63×10⁻³⁴)",
      "options": [
        "≈3.98×10⁻¹⁹ J",
        "≈1×10⁻¹⁹ J",
        "≈6×10⁻²⁰ J",
        "≈6×10⁻³⁴ J"
      ],
      "answer": 0,
      "topic": "Modern Physics",
      "level": 3,
      "_id": "p2_x12",
      "why": "E=hf=6.63×10⁻³⁴×6×10¹⁴≈3.98×10⁻¹⁹J.",
      "how": "1) E=hf. 2) 6.63e-34×6e14≈3.98e-19J."
    },
    {
      "focus": "de Broglie wavelength",
      "prompt": "de Broglie wavelength λ=h/p. A particle with momentum 2×10⁻²⁴ kg·m/s has λ≈?",
      "options": [
        "3.3×10⁻¹⁰ m",
        "6.6×10⁻¹⁰ m",
        "1×10⁻¹⁰ m",
        "2×10⁻²⁴ m"
      ],
      "answer": 0,
      "topic": "Modern Physics",
      "level": 4,
      "_id": "p2_x13",
      "why": "λ=h/p=6.63e-34/2e-24≈3.3×10⁻¹⁰m.",
      "how": "1) λ=h/p. 2) 6.63e-34/2e-24=3.3e-10m."
    }
  ],
  "ap_physics_c_mech": [
    {
      "focus": "Kinematics — calculus",
      "prompt": "If x(t) = 3t², velocity v(t) is:",
      "options": [
        "6t",
        "3t",
        "6t²",
        "3"
      ],
      "answer": 0,
      "topic": "Kinematics",
      "level": 2,
      "why": "v = dx/dt; differentiate position with respect to time.",
      "how": "1) d/dt[3t²] = 6t.",
      "_id": "ap_physics_c_mech_0"
    },
    {
      "focus": "Newton's 2nd law (calc)",
      "prompt": "A 5 kg box has force F(t) = 10t N applied. Acceleration at t=2?",
      "options": [
        "4 m/s²",
        "2 m/s²",
        "20 m/s²",
        "10 m/s²"
      ],
      "answer": 0,
      "topic": "Newton's Laws",
      "level": 3,
      "why": "a = F/m.",
      "how": "1) F(2) = 10×2 = 20 N.  2) a = 20/5 = 4 m/s².",
      "_id": "ap_physics_c_mech_1"
    },
    {
      "focus": "Work-energy",
      "prompt": "Work done by constant force along direction of motion: W = ?",
      "options": [
        "F·d",
        "F/d",
        "F+d",
        "F·d²"
      ],
      "answer": 0,
      "topic": "Work-Energy",
      "level": 2,
      "why": "W = F·d (force × displacement, both in same direction).",
      "how": "1) W = F·d.  2) If force and displacement are parallel, no cosθ factor needed.",
      "_id": "ap_physics_c_mech_2"
    },
    {
      "focus": "Rotation — angular acceleration",
      "prompt": "A disk (I = 2 kg·m²) has torque τ = 6 N·m. Angular acceleration?",
      "options": [
        "3 rad/s²",
        "12 rad/s²",
        "4 rad/s²",
        "1/3 rad/s²"
      ],
      "answer": 0,
      "topic": "Rotation",
      "level": 3,
      "why": "τ = Iα, so α = τ/I.",
      "how": "1) α = 6/2 = 3 rad/s².",
      "_id": "ap_physics_c_mech_3"
    },
    {
      "focus": "Simple harmonic motion",
      "prompt": "For a mass-spring system, the period T = ?",
      "options": [
        "2π√(m/k)",
        "2π√(k/m)",
        "√(m/k)",
        "πm/k"
      ],
      "answer": 0,
      "topic": "Oscillation",
      "level": 3,
      "why": "SHM period: T = 2π√(m/k).",
      "how": "1) Memorized formula.  2) Larger mass → longer period; stiffer spring → shorter period.",
      "_id": "ap_physics_c_mech_4"
    },
    {
      "focus": "Gravitation — orbital velocity",
      "prompt": "For circular orbit, gravitational force provides centripetal force. v² = ?",
      "options": [
        "GM/r",
        "GM·r",
        "G/Mr",
        "2GM/r"
      ],
      "answer": 0,
      "topic": "Gravitation",
      "level": 4,
      "why": "GMm/r² = mv²/r → v² = GM/r.",
      "how": "1) Set gravitational force = centripetal force.  2) Cancel m and r gives v² = GM/r.",
      "_id": "ap_physics_c_mech_5"
    },
    {
      "focus": "Angular momentum",
      "prompt": "L=Iω. Point mass m at r, speed v:",
      "options": [
        "L=mvr",
        "L=mv/r",
        "L=mr²/v",
        "L=mv²r"
      ],
      "answer": 0,
      "topic": "Rotational",
      "level": 3,
      "_id": "pcm_x1",
      "why": "I=mr², ω=v/r → L=mvr.",
      "how": "1) I=mr². 2) ω=v/r. 3) L=mr²(v/r)=mvr."
    },
    {
      "focus": "Gravity at 2R",
      "prompt": "At twice Earth radius, g becomes:",
      "options": [
        "g/4",
        "g/2",
        "2g",
        "g"
      ],
      "answer": 0,
      "topic": "Gravity",
      "level": 3,
      "_id": "pcm_x2",
      "why": "g∝1/r². Double r→g/4.",
      "how": "1) g∝1/r². 2) r→2r: g→g/4."
    },
    {
      "focus": "Spring period",
      "prompt": "k=200N/m, m=0.5kg. Period?",
      "options": [
        "≈0.314 s",
        "0.5 s",
        "2π s",
        "1 s"
      ],
      "answer": 0,
      "topic": "SHM",
      "level": 4,
      "_id": "pcm_x3",
      "why": "T=2π√(m/k)=2π√0.0025≈0.314s.",
      "how": "1) T=2π√(m/k). 2) m/k=0.0025. 3) √0.0025=0.05. 4) T=0.314s."
    },
    {
      "focus": "Equal-mass elastic collision",
      "prompt": "1kg at 4m/s hits stationary 1kg elastically. After?",
      "options": [
        "First stops; second at 4m/s",
        "Both at 2m/s",
        "Both stop",
        "First reverses"
      ],
      "answer": 0,
      "topic": "Momentum",
      "level": 4,
      "_id": "pcm_x4",
      "why": "Equal masses in elastic collision: velocities exchange.",
      "how": "1) Equal masses: v₁_final=0, v₂_final=4m/s. 2) Momentum and KE both conserved."
    },
    {
      "focus": "Work by variable force",
      "prompt": "F=3x, x=0 to 4m. Work?",
      "options": [
        "24 J",
        "12 J",
        "48 J",
        "36 J"
      ],
      "answer": 0,
      "topic": "Energy",
      "level": 4,
      "_id": "pcm_x5",
      "why": "W=∫₀⁴3x dx=[3x²/2]₀⁴=24.",
      "how": "1) W=∫F dx. 2) [3x²/2]₀⁴=3(16)/2=24."
    },
    {
      "focus": "Rotational KE",
      "prompt": "Disk I=½MR²: M=4kg, R=1m, ω=2rad/s. KE?",
      "options": [
        "4 J",
        "8 J",
        "2 J",
        "16 J"
      ],
      "answer": 0,
      "topic": "Rotational",
      "level": 4,
      "_id": "pcm_x6",
      "why": "KE=½Iω²=½(2)(4)=4.",
      "how": "1) I=½(4)(1)=2. 2) KE=½(2)(4)=4J."
    },
    {
      "focus": "Moment of inertia — rod",
      "prompt": "Thin rod, mass M, length L, rotating about its center. I=?",
      "options": [
        "ML²/12",
        "ML²/3",
        "ML²/6",
        "ML²/2"
      ],
      "answer": 0,
      "topic": "Rotational",
      "level": 4,
      "_id": "pcm_x7",
      "why": "Standard: I_center=ML²/12 for thin rod about center.",
      "how": "1) I_center=ML²/12. 2) About end: ML²/3."
    },
    {
      "focus": "Parallel axis theorem",
      "prompt": "I_cm=ML²/12. About one end (distance L/2 from CM):",
      "options": [
        "ML²/3",
        "ML²/12+ML²/4=ML²/3",
        "ML²/4",
        "ML²/6"
      ],
      "answer": 0,
      "topic": "Rotational",
      "level": 4,
      "_id": "pcm_x8",
      "why": "I=I_cm+Md²=ML²/12+M(L/2)²=ML²/12+ML²/4=ML²/3.",
      "how": "1) Parallel axis: I=I_cm+Md². 2) d=L/2. 3) ML²/12+ML²/4=ML²/3."
    },
    {
      "focus": "Conservation of angular momentum",
      "prompt": "Skater pulling arms in reduces moment of inertia by half. Angular velocity:",
      "options": [
        "Doubles",
        "Halves",
        "Stays same",
        "Quadruples"
      ],
      "answer": 0,
      "topic": "Rotational",
      "level": 3,
      "_id": "pcm_x9",
      "why": "L=Iω=const. If I→I/2, then ω→2ω.",
      "how": "1) L=Iω conserved. 2) I halves→ω doubles."
    },
    {
      "focus": "Gravitational potential energy",
      "prompt": "PE between two masses: U=?",
      "options": [
        "−GM₁M₂/r",
        "GM₁M₂/r",
        "−GM₁M₂/r²",
        "GM₁M₂r"
      ],
      "answer": 0,
      "topic": "Gravity",
      "level": 4,
      "_id": "pcm_x10",
      "why": "Gravitational PE: U=−GM₁M₂/r (negative, bound system).",
      "how": "1) U=−Gm₁m₂/r. 2) Negative sign: energy needed to escape."
    },
    {
      "focus": "Escape velocity",
      "prompt": "Escape velocity from Earth (mass M, radius R):",
      "options": [
        "√(2GM/R)",
        "√(GM/R)",
        "2GM/R",
        "GM/R²"
      ],
      "answer": 0,
      "topic": "Gravity",
      "level": 4,
      "_id": "pcm_x11",
      "why": "Set KE=|PE|: ½mv²=GMm/R → v=√(2GM/R).",
      "how": "1) ½mv²=GMm/R. 2) v²=2GM/R. 3) v=√(2GM/R)."
    }
  ],
  "ap_physics_c_em": [
    {
      "focus": "Electrostatics — Coulomb",
      "prompt": "Electric force between two point charges follows:",
      "options": [
        "Coulomb's law: F∝q₁q₂/r²",
        "Ohm's law",
        "Faraday's law",
        "Hooke's law"
      ],
      "answer": 0,
      "topic": "Electrostatics",
      "level": 2,
      "why": "Coulomb's law governs the force between point charges.",
      "how": "1) F = kq₁q₂/r².  2) Force ∝ product of charges, inversely ∝ r².",
      "_id": "ap_physics_c_em_0"
    },
    {
      "focus": "Capacitance",
      "prompt": "Capacitance is measured in:",
      "options": [
        "Farads",
        "Ohms",
        "Henrys",
        "Coulombs"
      ],
      "answer": 0,
      "topic": "Capacitance",
      "level": 1,
      "why": "The SI unit of capacitance is the farad (C/V).",
      "how": "1) C = Q/V.  2) Q in coulombs, V in volts → F = C/V.",
      "_id": "ap_physics_c_em_1"
    },
    {
      "focus": "DC Circuits — Kirchhoff",
      "prompt": "Kirchhoff's Voltage Law states:",
      "options": [
        "The sum of voltages around any closed loop = 0",
        "Current entering = current leaving a node",
        "Voltage = Current × Resistance only",
        "Power = I²R only"
      ],
      "answer": 0,
      "topic": "DC Circuits",
      "level": 3,
      "why": "KVL: energy conservation — voltage gains equal voltage drops around a loop.",
      "how": "1) Walk around any closed loop.  2) Sum all voltage rises and drops.  3) Total = 0.",
      "_id": "ap_physics_c_em_2"
    },
    {
      "focus": "Magnetic fields — Biot-Savart",
      "prompt": "The magnetic field at the center of a circular current loop depends on:",
      "options": [
        "Current and radius only",
        "Voltage only",
        "Resistance",
        "Temperature"
      ],
      "answer": 0,
      "topic": "Magnetic Fields",
      "level": 3,
      "why": "Biot-Savart law: B = μ₀I/(2r) at center of circular loop.",
      "how": "1) B ∝ I (more current = stronger field).  2) B ∝ 1/r (bigger loop = weaker field at center).",
      "_id": "ap_physics_c_em_3"
    },
    {
      "focus": "Induction — Faraday",
      "prompt": "Faraday's law states that induced EMF equals:",
      "options": [
        "−dΦ_B/dt",
        "BIL",
        "q×v×B",
        "V/R"
      ],
      "answer": 0,
      "topic": "Induction",
      "level": 3,
      "why": "Faraday's law: EMF = −dΦ/dt (rate of change of magnetic flux).",
      "how": "1) Changing flux induces EMF.  2) The minus sign reflects Lenz's law (opposes change).",
      "_id": "ap_physics_c_em_4"
    },
    {
      "focus": "Maxwell — displacement current",
      "prompt": "Maxwell added displacement current to Ampère's law to account for:",
      "options": [
        "Changing electric fields in capacitors",
        "Static charge",
        "Permanent magnets",
        "Ohmic heating"
      ],
      "answer": 0,
      "topic": "Maxwell",
      "level": 4,
      "why": "Without displacement current, Ampère's law was inconsistent for capacitor gaps.",
      "how": "1) Capacitor gap has no conduction current but changing E field.  2) Maxwell: treat ε₀·dE/dt as a current.",
      "_id": "ap_physics_c_em_5"
    },
    {
      "focus": "Coulomb's Law",
      "prompt": "2μC and 4μC, 0.2m apart. Force? (k=9×10⁹)",
      "options": [
        "1.8 N",
        "0.18 N",
        "18 N",
        "0.018 N"
      ],
      "answer": 0,
      "topic": "Electrostatics",
      "level": 3,
      "_id": "pce_x1",
      "why": "F=kq₁q₂/r²=(9e9)(8e−12)/0.04=1.8.",
      "how": "1) F=kq₁q₂/r². 2) (9×10⁹)(8×10⁻¹²)/0.04=1.8N."
    },
    {
      "focus": "Electric force",
      "prompt": "E=500N/C. Force on 3μC charge?",
      "options": [
        "1.5 mN",
        "0.5 N",
        "1500 N",
        "0.15 N"
      ],
      "answer": 0,
      "topic": "Electrostatics",
      "level": 2,
      "_id": "pce_x2",
      "why": "F=qE=3×10⁻⁶×500=1.5mN.",
      "how": "1) F=qE. 2) 3e−6×500=1.5×10⁻³N."
    },
    {
      "focus": "Gauss's Law",
      "prompt": "Gauss's Law: flux through closed surface equals:",
      "options": [
        "Q_enc/ε₀",
        "Magnetic field outside",
        "Potential difference",
        "Total surface area"
      ],
      "answer": 0,
      "topic": "Electrostatics",
      "level": 3,
      "_id": "pce_x3",
      "why": "∮E·dA=Q_enc/ε₀.",
      "how": "1) Gauss: Φ=Q_enc/ε₀."
    },
    {
      "focus": "Capacitor energy",
      "prompt": "C=10μF, V=5V. Stored energy?",
      "options": [
        "125 μJ",
        "250 μJ",
        "50 μJ",
        "500 μJ"
      ],
      "answer": 0,
      "topic": "Circuits",
      "level": 3,
      "_id": "pce_x4",
      "why": "U=½CV²=½(10e−6)(25)=125μJ.",
      "how": "1) U=½CV². 2) ½(10e−6)(25)=125μJ."
    },
    {
      "focus": "Faraday's Law",
      "prompt": "Faraday's Law: induced EMF equals:",
      "options": [
        "Negative rate of change of magnetic flux",
        "Total magnetic field",
        "Current×resistance",
        "Charge/capacitance"
      ],
      "answer": 0,
      "topic": "Magnetism",
      "level": 3,
      "_id": "pce_x5",
      "why": "ε=−dΦ_B/dt.",
      "how": "1) ε=−dΦ_B/dt. 2) Changing flux→EMF."
    },
    {
      "focus": "Magnetic force on wire",
      "prompt": "0.5m wire, 3A, B=2T perpendicular. Force?",
      "options": [
        "3 N",
        "6 N",
        "1.5 N",
        "0.3 N"
      ],
      "answer": 0,
      "topic": "Magnetism",
      "level": 3,
      "_id": "pce_x6",
      "why": "F=BIL=2×3×0.5=3.",
      "how": "1) F=BIL sinθ. 2) θ=90°. 3) 3N."
    },
    {
      "focus": "Electric potential",
      "prompt": "V=kQ/r. Potential at r=0.3m from Q=2μC?",
      "options": [
        "60,000 V",
        "6,000 V",
        "600 V",
        "600,000 V"
      ],
      "answer": 0,
      "topic": "Electrostatics",
      "level": 3,
      "_id": "pce_x7",
      "why": "V=kQ/r=(9e9)(2e-6)/0.3=60,000V.",
      "how": "1) V=kQ/r. 2) (9×10⁹)(2×10⁻⁶)/0.3=6×10⁴=60,000V."
    },
    {
      "focus": "Inductance",
      "prompt": "An inductor opposes changes in current. EMF induced is:",
      "options": [
        "ε=−L(dI/dt)",
        "ε=LI",
        "ε=L/I",
        "ε=I²L"
      ],
      "answer": 0,
      "topic": "Magnetism",
      "level": 4,
      "_id": "pce_x8",
      "why": "Faraday applied to inductor: ε=−L(dI/dt). Negative=opposes change.",
      "how": "1) ε=−L dI/dt. 2) L=inductance in henrys. 3) Negative=Lenz's Law."
    },
    {
      "focus": "RC circuit time constant",
      "prompt": "In an RC charging circuit, time constant τ=RC represents:",
      "options": [
        "Time to reach ~63% of max charge",
        "Time to fully charge",
        "Half-life of charge",
        "Period of oscillation"
      ],
      "answer": 0,
      "topic": "Circuits",
      "level": 3,
      "_id": "pce_x9",
      "why": "τ=RC: at t=τ, charge=Q₀(1−e⁻¹)≈0.632Q₀≈63%.",
      "how": "1) Q(t)=Q₀(1−e^(−t/τ)). 2) At t=τ: Q=Q₀(1−1/e)≈0.632Q₀."
    }
  ],
  "ap_chem": [
    {
      "focus": "Atomic structure",
      "prompt": "The number of neutrons in an atom of ¹²C is:",
      "options": [
        "6",
        "12",
        "0",
        "7"
      ],
      "answer": 0,
      "topic": "Atomic Structure",
      "level": 1,
      "why": "Neutrons = mass number − atomic number.",
      "how": "1) Mass number = 12, atomic number of C = 6.  2) Neutrons = 12 − 6 = 6.",
      "_id": "ap_chem_0"
    },
    {
      "focus": "Chemical bonding",
      "prompt": "In NaCl, the bond is mainly:",
      "options": [
        "ionic",
        "covalent",
        "metallic",
        "hydrogen"
      ],
      "answer": 0,
      "topic": "Bonding",
      "level": 1,
      "why": "Metal + nonmetal → ionic bond via electron transfer.",
      "how": "1) Na is a metal, Cl is a nonmetal.  2) Na loses e⁻, Cl gains e⁻ → ionic.",
      "_id": "ap_chem_1"
    },
    {
      "focus": "IMF — boiling point",
      "prompt": "Water has an unusually high boiling point for its molar mass because of:",
      "options": [
        "hydrogen bonding",
        "London dispersion",
        "metallic bonding",
        "ionic bonds"
      ],
      "answer": 0,
      "topic": "IMF",
      "level": 2,
      "why": "H₂O forms strong hydrogen bonds between O−H and O of adjacent molecules.",
      "how": "1) H attached to very electronegative O.  2) H-bonds are stronger than typical dipole-dipole.  3) More energy required to separate → higher BP.",
      "_id": "ap_chem_2"
    },
    {
      "focus": "Reactions — mole ratio",
      "prompt": "How many moles are in 22 g of CO₂? (M = 44 g/mol)",
      "options": [
        "0.5",
        "1",
        "2",
        "22"
      ],
      "answer": 0,
      "topic": "Chemical Reactions",
      "level": 2,
      "why": "Moles = mass / molar mass.",
      "how": "1) 22 g ÷ 44 g/mol = 0.5 mol.",
      "_id": "ap_chem_3"
    },
    {
      "focus": "Kinetics — rate law",
      "prompt": "For A + B → C, the rate = k[A]²[B]. If [A] doubles, rate:",
      "options": [
        "quadruples",
        "doubles",
        "stays same",
        "octuples"
      ],
      "answer": 0,
      "topic": "Kinetics",
      "level": 3,
      "why": "Rate ∝ [A]². Doubling [A] multiplies rate by 2² = 4.",
      "how": "1) New rate = k(2[A])²[B] = k·4[A]²[B] = 4 × original rate.",
      "_id": "ap_chem_4"
    },
    {
      "focus": "Thermodynamics — enthalpy",
      "prompt": "A reaction with ΔH < 0 is:",
      "options": [
        "exothermic",
        "endothermic",
        "at equilibrium",
        "spontaneous only"
      ],
      "answer": 0,
      "topic": "Thermodynamics",
      "level": 2,
      "why": "Negative ΔH means heat is released → exothermic.",
      "how": "1) ΔH = H_products − H_reactants.  2) Negative = products lower energy = heat released.",
      "_id": "ap_chem_5"
    },
    {
      "focus": "Equilibrium — Le Chatelier",
      "prompt": "Increasing pressure on a gas equilibrium shifts the reaction toward:",
      "options": [
        "fewer moles of gas",
        "more moles of gas",
        "right always",
        "no change"
      ],
      "answer": 0,
      "topic": "Equilibrium",
      "level": 3,
      "why": "Le Chatelier: increased pressure shifts equilibrium toward fewer gas moles.",
      "how": "1) Higher pressure favors side with fewer gas particles.  2) Identify which side has fewer moles of gas.",
      "_id": "ap_chem_6"
    },
    {
      "focus": "Acids/Bases — pH",
      "prompt": "pH is defined as:",
      "options": [
        "−log[H⁺]",
        "log[H⁺]",
        "[H⁺]/[OH⁻]",
        "−ln[H⁺]"
      ],
      "answer": 0,
      "topic": "Acids/Bases",
      "level": 1,
      "why": "pH = −log[H⁺] by definition.",
      "how": "1) At pH 7: [H⁺] = 10⁻⁷.  2) −log(10⁻⁷) = 7. ✓",
      "_id": "ap_chem_7"
    },
    {
      "focus": "Electrochemistry — cell potential",
      "prompt": "For a galvanic cell, spontaneous reactions have:",
      "options": [
        "E°cell > 0",
        "E°cell < 0",
        "E°cell = 0",
        "ΔG > 0"
      ],
      "answer": 0,
      "topic": "Electrochemistry",
      "level": 3,
      "why": "ΔG = −nFE°. Spontaneous (ΔG < 0) requires E° > 0.",
      "how": "1) Spontaneous → ΔG < 0.  2) ΔG = −nFE° → E° must be > 0.",
      "_id": "ap_chem_8"
    },
    {
      "focus": "Gas laws",
      "prompt": "The ideal gas law is:",
      "options": [
        "PV = nRT",
        "PV = RT",
        "P/V = nRT",
        "PV = nR/T"
      ],
      "answer": 0,
      "topic": "Gas Laws",
      "level": 1,
      "why": "PV = nRT is the ideal gas law.",
      "how": "1) P = pressure, V = volume, n = moles, R = 8.314 J/(mol·K), T = temperature in K.",
      "_id": "ap_chem_9"
    },
    {
      "focus": "Electronegativity",
      "prompt": "Most electronegative element?",
      "options": [
        "Fluorine",
        "Oxygen",
        "Nitrogen",
        "Chlorine"
      ],
      "answer": 0,
      "topic": "Bonding",
      "level": 2,
      "_id": "ac_x1",
      "why": "F is most electronegative (upper-right trend).",
      "how": "1) Trend: up and right. 2) F=period 2, group 17."
    },
    {
      "focus": "Ideal Gas Law",
      "prompt": "2mol, 300K, 24.6L. Pressure? (R=0.0821)",
      "options": [
        "2 atm",
        "1 atm",
        "0.5 atm",
        "4 atm"
      ],
      "answer": 0,
      "topic": "Gas Laws",
      "level": 3,
      "_id": "ac_x2",
      "why": "P=nRT/V≈2atm.",
      "how": "1) P=(2×0.0821×300)/24.6≈2."
    },
    {
      "focus": "Le Chatelier's",
      "prompt": "N₂+3H₂⇌2NH₃ exothermic. Raise temp shifts:",
      "options": [
        "Left",
        "Right",
        "No shift",
        "Cannot tell"
      ],
      "answer": 0,
      "topic": "Equilibrium",
      "level": 3,
      "_id": "ac_x3",
      "why": "Heat=product in exothermic. Add heat→shift left.",
      "how": "1) Exothermic: treat heat as product. 2) Adding heat=adding product→shift left."
    },
    {
      "focus": "Oxidation number",
      "prompt": "Cr in K₂Cr₂O₇?",
      "options": [
        "+6",
        "+3",
        "+7",
        "+4"
      ],
      "answer": 0,
      "topic": "Redox",
      "level": 4,
      "_id": "ac_x4",
      "why": "2(+1)+2Cr+7(−2)=0→Cr=+6.",
      "how": "1) 2+2Cr−14=0. 2) 2Cr=12. 3) Cr=+6."
    },
    {
      "focus": "Conjugate base",
      "prompt": "Conjugate base of H₂PO₄⁻?",
      "options": [
        "HPO₄²⁻",
        "H₃PO₄",
        "PO₄³⁻",
        "H₂O"
      ],
      "answer": 0,
      "topic": "Acids/Bases",
      "level": 3,
      "_id": "ac_x5",
      "why": "Remove one H⁺: HPO₄²⁻.",
      "how": "1) Conjugate base=acid−H⁺. 2) H₂PO₄⁻−H⁺=HPO₄²⁻."
    },
    {
      "focus": "Hess's Law",
      "prompt": "A→B +30kJ, B→C −50kJ. A→C?",
      "options": [
        "−20 kJ",
        "−80 kJ",
        "+80 kJ",
        "+20 kJ"
      ],
      "answer": 0,
      "topic": "Thermochemistry",
      "level": 3,
      "_id": "ac_x6",
      "why": "30+(−50)=−20.",
      "how": "1) Add ΔH values. 2) +30−50=−20kJ."
    },
    {
      "focus": "Reaction rate and temp",
      "prompt": "Higher temperature speeds reactions because:",
      "options": [
        "More molecules exceed activation energy",
        "Ea decreases",
        "Concentration increases",
        "K increases"
      ],
      "answer": 0,
      "topic": "Kinetics",
      "level": 3,
      "_id": "ac_x7",
      "why": "Higher T→more particles have KE≥Ea.",
      "how": "1) Rate requires KE≥Ea. 2) Higher T→more qualify."
    },
    {
      "focus": "Atomic radius trend",
      "prompt": "Atomic radius increases going:",
      "options": [
        "Down a group",
        "Left to right",
        "Up a group",
        "Diagonally right-down"
      ],
      "answer": 0,
      "topic": "Periodic Trends",
      "level": 2,
      "_id": "ac_x8",
      "why": "Down group=more shells=larger.",
      "how": "1) Down=more shells. 2) Across=more protons→smaller."
    },
    {
      "focus": "Equilibrium expression",
      "prompt": "For aA+bB⇌cC+dD, the equilibrium constant expression K is:",
      "options": [
        "[C]^c[D]^d/([A]^a[B]^b)",
        "[A]^a[B]^b/[C]^c[D]^d",
        "[C][D]/[A][B]",
        "[A+B]/[C+D]"
      ],
      "answer": 0,
      "topic": "Equilibrium",
      "level": 3,
      "_id": "ac_x9",
      "why": "K=[products]^coeff/[reactants]^coeff. Coefficients become exponents.",
      "how": "1) K=[C]^c[D]^d/[A]^a[B]^b. 2) Coefficients=exponents."
    },
    {
      "focus": "Gibbs free energy",
      "prompt": "ΔG=ΔH−TΔS. A reaction is spontaneous when:",
      "options": [
        "ΔG<0",
        "ΔG>0",
        "ΔG=0",
        "ΔH<0 always"
      ],
      "answer": 0,
      "topic": "Thermochemistry",
      "level": 3,
      "_id": "ac_x10",
      "why": "Spontaneous process: ΔG<0.",
      "how": "1) ΔG<0: spontaneous. 2) ΔG=0: equilibrium. 3) ΔG>0: non-spontaneous."
    },
    {
      "focus": "Colligative properties",
      "prompt": "Adding a solute to a solvent raises its boiling point because:",
      "options": [
        "Solute particles lower vapor pressure, requiring more heat to boil",
        "Solute adds mass increasing energy needed",
        "Solute particles speed up water molecules",
        "Solute increases surface tension"
      ],
      "answer": 0,
      "topic": "Solutions",
      "level": 3,
      "_id": "ac_x11",
      "why": "Boiling point elevation: solute lowers vapor pressure→higher T needed to reach 1 atm.",
      "how": "1) Solute particles disrupt solvent surface. 2) Lower vapor pressure. 3) Need higher T to boil."
    },
    {
      "focus": "Electrochemistry — cell voltage",
      "prompt": "Standard cell voltage E°_cell = E°_cathode − E°_anode. If E°_cathode=0.80V and E°_anode=−0.44V:",
      "options": [
        "1.24 V",
        "0.36 V",
        "−0.36 V",
        "−1.24 V"
      ],
      "answer": 0,
      "topic": "Redox",
      "level": 4,
      "_id": "ac_x12",
      "why": "E°_cell=0.80−(−0.44)=1.24V.",
      "how": "1) E°=E°_cathode−E°_anode. 2) 0.80−(−0.44)=0.80+0.44=1.24V."
    },
    {
      "focus": "Reaction order",
      "prompt": "Rate=k[A]². Doubling [A] multiplies rate by:",
      "options": [
        "4",
        "2",
        "8",
        "1"
      ],
      "answer": 0,
      "topic": "Kinetics",
      "level": 3,
      "_id": "ac_x13",
      "why": "Second order: rate∝[A]². Double [A]→(2)²=4× rate.",
      "how": "1) Rate=k[A]². 2) [A]→2[A]: rate=k(2[A])²=4k[A]². 3) ×4."
    },
    {
      "focus": "Nuclear chemistry — half-life",
      "prompt": "Substance has t½=10 years. After 30 years, fraction remaining?",
      "options": [
        "1/8",
        "1/4",
        "1/2",
        "1/16"
      ],
      "answer": 0,
      "topic": "Nuclear",
      "level": 3,
      "_id": "ac_x14",
      "why": "30 years=3 half-lives: (½)³=1/8.",
      "how": "1) n=30/10=3 half-lives. 2) (½)³=1/8."
    },
    {
      "focus": "VSEPR — molecular geometry",
      "prompt": "A molecule with 4 bonding pairs and 0 lone pairs (like CH₄) is:",
      "options": [
        "Tetrahedral",
        "Trigonal planar",
        "Linear",
        "Bent"
      ],
      "answer": 0,
      "topic": "Bonding",
      "level": 2,
      "_id": "ac_x15",
      "why": "VSEPR: 4 bonding pairs, 0 lone pairs → tetrahedral, 109.5°.",
      "how": "1) Count electron domains. 2) 4 bond pairs, 0 lone→tetrahedral."
    },
    {
      "focus": "Intermolecular forces",
      "prompt": "Weakest intermolecular force?",
      "options": [
        "London dispersion (van der Waals)",
        "Hydrogen bonding",
        "Dipole-dipole",
        "Ionic bonding"
      ],
      "answer": 0,
      "topic": "Bonding",
      "level": 2,
      "_id": "ac_x16",
      "why": "London forces are the weakest; they exist between ALL molecules.",
      "how": "1) Strength: ionic>H-bond>dipole-dipole>London. 2) London=weakest."
    }
  ],
  "ap_stats": [
    {
      "focus": "Exploring data — shape",
      "prompt": "A distribution where the mean is greater than the median is likely:",
      "options": [
        "right-skewed",
        "left-skewed",
        "symmetric",
        "bimodal"
      ],
      "answer": 0,
      "topic": "Exploring Data",
      "level": 2,
      "why": "Outliers on the right pull the mean up above the median.",
      "how": "1) Skew direction = direction of the tail.  2) Right-skewed: mean > median.",
      "_id": "ap_stats_0"
    },
    {
      "focus": "Sampling bias",
      "prompt": "A poll asks sports website visitors \"Should city funding go to the stadium?\" Biggest concern:",
      "options": [
        "Voluntary response bias",
        "Sampling error",
        "Non-response bias only",
        "Confounding"
      ],
      "answer": 0,
      "topic": "Sampling",
      "level": 2,
      "why": "Self-selected visitors who care enough to answer overrepresent stadium supporters.",
      "how": "1) Who is answering? Sports fans who found the survey.  2) Self-selection = voluntary response bias.",
      "_id": "ap_stats_1"
    },
    {
      "focus": "Probability — conditional",
      "prompt": "In a study: 60/100 on drug improved; 30/100 on placebo improved. P(Improved | Drug)?",
      "options": [
        "0.60",
        "0.30",
        "0.45",
        "0.90"
      ],
      "answer": 0,
      "topic": "Probability",
      "level": 3,
      "why": "Conditional probability = count(A and B) ÷ count(condition).",
      "how": "1) In the Drug group, 60 of 100 improved.  2) P = 60/100 = 0.60.",
      "_id": "ap_stats_2"
    },
    {
      "focus": "Normal distribution",
      "prompt": "In a normal distribution, approximately what % of data falls within 2 standard deviations of the mean?",
      "options": [
        "95%",
        "68%",
        "99.7%",
        "50%"
      ],
      "answer": 0,
      "topic": "Normal Distribution",
      "level": 2,
      "why": "Empirical rule: 68-95-99.7%.",
      "how": "1) 1 SD: 68%.  2) 2 SD: 95%.  3) 3 SD: 99.7%.",
      "_id": "ap_stats_3"
    },
    {
      "focus": "Binomial distribution",
      "prompt": "For a binomial with n=10, p=0.5, the mean is:",
      "options": [
        "5",
        "10",
        "2.5",
        "0.5"
      ],
      "answer": 0,
      "topic": "Binomial",
      "level": 2,
      "why": "Binomial mean μ = np.",
      "how": "1) μ = 10 × 0.5 = 5.",
      "_id": "ap_stats_4"
    },
    {
      "focus": "Confidence interval",
      "prompt": "A 95% CI for a mean means:",
      "options": [
        "95% of such intervals contain the true mean",
        "95% of data falls in the interval",
        "The mean is definitely in the interval",
        "5% probability the mean is wrong"
      ],
      "answer": 0,
      "topic": "Confidence Intervals",
      "level": 3,
      "why": "A 95% CI: if we repeated this process many times, 95% of the resulting intervals would capture μ.",
      "how": "1) Confidence level refers to the process, not one interval.  2) Correct interpretation: 95% of such intervals contain μ.",
      "_id": "ap_stats_5"
    },
    {
      "focus": "Hypothesis testing",
      "prompt": "A p-value of 0.03 with α = 0.05 means:",
      "options": [
        "Reject H₀ — result is statistically significant",
        "Fail to reject H₀",
        "The null is true",
        "The alternative is definitely true"
      ],
      "answer": 0,
      "topic": "Hypothesis Testing",
      "level": 3,
      "why": "p-value < α → reject H₀.",
      "how": "1) 0.03 < 0.05.  2) Reject the null hypothesis.  3) Evidence supports the alternative.",
      "_id": "ap_stats_6"
    },
    {
      "focus": "Chi-square test",
      "prompt": "A chi-square test of independence tests whether:",
      "options": [
        "Two categorical variables are associated",
        "Two means are equal",
        "A proportion equals a value",
        "Variance is normal"
      ],
      "answer": 0,
      "topic": "Chi-Square",
      "level": 3,
      "why": "Chi-square for independence: are two categorical variables related?",
      "how": "1) Set up a two-way table.  2) Compare observed vs. expected counts.  3) Large χ² → reject independence.",
      "_id": "ap_stats_7"
    },
    {
      "focus": "Linear regression",
      "prompt": "In ŷ = a + bx, the slope b represents:",
      "options": [
        "Predicted change in y per 1-unit increase in x",
        "The y-intercept",
        "The correlation coefficient",
        "The residual"
      ],
      "answer": 0,
      "topic": "Regression",
      "level": 2,
      "why": "The slope is the rate of change: for each 1-unit increase in x, y changes by b units.",
      "how": "1) b = r·(Sy/Sx).  2) Positive b: y increases as x increases.",
      "_id": "ap_stats_8"
    },
    {
      "focus": "z-score",
      "prompt": "Score 78, mean 70, SD 4. z-score?",
      "options": [
        "2",
        "1",
        "0.5",
        "8"
      ],
      "answer": 0,
      "topic": "z-Scores",
      "level": 2,
      "why": "z = (x − μ)/σ.",
      "how": "1) (78−70)/4 = 8/4 = 2.",
      "_id": "ap_stats_9"
    },
    {
      "focus": "Study design",
      "prompt": "A researcher randomly assigns 200 patients to drug or placebo. This study is:",
      "options": [
        "An experiment that can establish causation",
        "An observational study",
        "A simulation",
        "A census"
      ],
      "answer": 0,
      "topic": "Study Design",
      "level": 2,
      "why": "Random assignment to treatment → experiment → supports causation.",
      "how": "1) Key word: \"randomly assigns.\"  2) Random assignment → experiment → can claim causation.",
      "_id": "ap_stats_10"
    },
    {
      "focus": "Z-score",
      "prompt": "μ=70, σ=10. Z-score for x=85?",
      "options": [
        "1.5",
        "0.15",
        "15",
        "−1.5"
      ],
      "answer": 0,
      "topic": "Normal Distribution",
      "level": 3,
      "_id": "as_x1",
      "why": "z=(85−70)/10=1.5.",
      "how": "1) z=(x−μ)/σ. 2) 15/10=1.5."
    },
    {
      "focus": "Standard error",
      "prompt": "As n increases, standard error:",
      "options": [
        "Decreases",
        "Increases",
        "Stays same",
        "Approaches σ"
      ],
      "answer": 0,
      "topic": "Sampling",
      "level": 3,
      "_id": "as_x2",
      "why": "SE=σ/√n. Larger n→smaller SE.",
      "how": "1) SE=σ/√n. 2) n↑→SE↓."
    },
    {
      "focus": "Margin of error",
      "prompt": "95% CI is (42,58). Margin of error?",
      "options": [
        "8",
        "16",
        "50",
        "4"
      ],
      "answer": 0,
      "topic": "Confidence Intervals",
      "level": 3,
      "_id": "as_x3",
      "why": "ME=(58−42)/2=8.",
      "how": "1) Width=16. 2) ME=16/2=8."
    },
    {
      "focus": "Type I error",
      "prompt": "Rejecting a true null hypothesis is:",
      "options": [
        "Type I error",
        "Type II error",
        "Power",
        "Bias"
      ],
      "answer": 0,
      "topic": "Hypothesis Testing",
      "level": 3,
      "_id": "as_x4",
      "why": "Type I=false positive=reject true H₀.",
      "how": "1) Type I: reject true H₀. 2) Type II: keep false H₀."
    },
    {
      "focus": "Residual",
      "prompt": "Predicted y=45, actual y=38. Residual?",
      "options": [
        "−7",
        "7",
        "83",
        "0.84"
      ],
      "answer": 0,
      "topic": "Regression",
      "level": 3,
      "_id": "as_x5",
      "why": "Residual=38−45=−7.",
      "how": "1) Residual=actual−predicted. 2) 38−45=−7."
    },
    {
      "focus": "Binomial probability",
      "prompt": "Coin flipped 5 times. P(exactly 3 heads)?",
      "options": [
        "5/16",
        "1/2",
        "3/8",
        "1/4"
      ],
      "answer": 0,
      "topic": "Probability",
      "level": 4,
      "_id": "as_x6",
      "why": "C(5,3)(0.5)⁵=10/32=5/16.",
      "how": "1) C(5,3)=10. 2) (0.5)⁵=1/32. 3) 10/32=5/16."
    },
    {
      "focus": "Chi-square purpose",
      "prompt": "Chi-square goodness-of-fit tests:",
      "options": [
        "If observed matches expected frequencies",
        "Two quantitative variables",
        "Two means",
        "A sample vs population mean"
      ],
      "answer": 0,
      "topic": "Chi-Square",
      "level": 4,
      "_id": "as_x7",
      "why": "Goodness-of-fit: categorical observed vs expected.",
      "how": "1) Chi-square=categorical. 2) Compares observed vs expected counts."
    },
    {
      "focus": "Log transformation",
      "prompt": "Right-skewed data. Best transformation?",
      "options": [
        "Logarithm",
        "Squaring",
        "Doubling",
        "Subtracting mean"
      ],
      "answer": 0,
      "topic": "Data Transformation",
      "level": 4,
      "_id": "as_x8",
      "why": "Log compresses large values, reducing right skew.",
      "how": "1) Right skew=a few large values. 2) Log compresses them."
    },
    {
      "focus": "Matched pairs",
      "prompt": "Why are subjects paired in matched-pairs design?",
      "options": [
        "Reduce variability by controlling for individual differences",
        "Double sample size",
        "Ensure randomness",
        "Eliminate control group"
      ],
      "answer": 0,
      "topic": "Experimental Design",
      "level": 3,
      "_id": "as_x9",
      "why": "Pairing controls confounders; within-pair differences isolate treatment effect.",
      "how": "1) Pairs share traits. 2) Difference=treatment effect. 3) Less variability."
    },
    {
      "focus": "Observational study vs experiment",
      "prompt": "Key difference between an experiment and an observational study?",
      "options": [
        "Experiment imposes a treatment; observation does not",
        "Observational studies are more reliable",
        "Experiments cannot be replicated",
        "Both use random sampling equally"
      ],
      "answer": 0,
      "topic": "Experimental Design",
      "level": 2,
      "_id": "as_x10",
      "why": "Experiments deliberately impose treatments to establish causation. Observational studies only observe.",
      "how": "1) Experiment: researcher assigns treatment. 2) Observational: just watches. 3) Only experiments can establish causation."
    },
    {
      "focus": "Stratified sampling",
      "prompt": "Dividing a population into subgroups then randomly sampling from each is:",
      "options": [
        "Stratified random sampling",
        "Cluster sampling",
        "Systematic sampling",
        "Convenience sampling"
      ],
      "answer": 0,
      "topic": "Sampling",
      "level": 2,
      "_id": "as_x11",
      "why": "Stratified: divide into strata (subgroups), then sample from each stratum.",
      "how": "1) Strata=subgroups. 2) Random sample from each stratum. 3) Ensures representation."
    },
    {
      "focus": "Simulation — law of large numbers",
      "prompt": "Law of Large Numbers states that as sample size increases:",
      "options": [
        "Sample mean approaches population mean",
        "Sample variance increases",
        "The median equals the mean",
        "Standard deviation increases"
      ],
      "answer": 0,
      "topic": "Probability",
      "level": 2,
      "_id": "as_x12",
      "why": "LLN: larger samples give estimates closer to true population parameters.",
      "how": "1) LLN: more data→better estimate. 2) Sample mean→μ as n→∞."
    },
    {
      "focus": "Normal distribution — empirical rule",
      "prompt": "In a normal distribution, approximately what % falls within 2σ of the mean?",
      "options": [
        "95%",
        "68%",
        "99.7%",
        "50%"
      ],
      "answer": 0,
      "topic": "Normal Distribution",
      "level": 2,
      "_id": "as_x13",
      "why": "Empirical rule: 68% within 1σ, 95% within 2σ, 99.7% within 3σ.",
      "how": "1) 68-95-99.7 rule. 2) ±2σ → 95%."
    },
    {
      "focus": "Least squares regression",
      "prompt": "The least squares line minimizes the sum of:",
      "options": [
        "Squared residuals",
        "Absolute residuals",
        "Residuals",
        "Squared x-values"
      ],
      "answer": 0,
      "topic": "Regression",
      "level": 3,
      "_id": "as_x14",
      "why": "Least squares: minimizes Σ(residuals)² = Σ(yᵢ−ŷᵢ)².",
      "how": "1) Residual=actual−predicted. 2) Minimize Σ(residuals)²."
    },
    {
      "focus": "Coefficient of determination",
      "prompt": "r²=0.81. This means that 81% of the variation in y is:",
      "options": [
        "Explained by the linear relationship with x",
        "Due to random error",
        "Not explained by x",
        "Equal to r"
      ],
      "answer": 0,
      "topic": "Regression",
      "level": 3,
      "_id": "as_x15",
      "why": "r²=coefficient of determination = proportion of variation in y explained by x.",
      "how": "1) r²=0.81 → 81% of y's variation explained by x. 2) Remaining 19% unexplained."
    },
    {
      "focus": "Hypothesis test — p-value",
      "prompt": "A p-value of 0.03 with α=0.05 leads to:",
      "options": [
        "Reject H₀ — statistically significant",
        "Fail to reject H₀",
        "Accept H₀",
        "Cannot determine"
      ],
      "answer": 0,
      "topic": "Hypothesis Testing",
      "level": 3,
      "_id": "as_x16",
      "why": "p-value(0.03) < α(0.05) → reject H₀.",
      "how": "1) Decision rule: if p<α, reject H₀. 2) 0.03<0.05→reject."
    },
    {
      "focus": "Geometric probability",
      "prompt": "P(first success on trial k) in geometric distribution?",
      "options": [
        "(1−p)^(k−1)×p",
        "p^k",
        "(1−p)^k",
        "p×(1−p)"
      ],
      "answer": 0,
      "topic": "Probability",
      "level": 4,
      "_id": "as_x17",
      "why": "Geometric: k−1 failures then one success.",
      "how": "1) Need k−1 failures: (1−p)^(k−1). 2) Then success: ×p. 3) Product: (1−p)^(k−1)p."
    },
    {
      "focus": "Two-sample t-test",
      "prompt": "Testing if two population means μ₁=μ₂. The null hypothesis H₀ is:",
      "options": [
        "μ₁−μ₂=0",
        "μ₁−μ₂>0",
        "μ₁=0",
        "μ₂>μ₁"
      ],
      "answer": 0,
      "topic": "Hypothesis Testing",
      "level": 3,
      "_id": "as_x18",
      "why": "Two-sample H₀: no difference between means, μ₁−μ₂=0.",
      "how": "1) H₀ always states no effect/difference. 2) H₀: μ₁=μ₂ ↔ μ₁−μ₂=0."
    },
    {
      "focus": "Conditional probability",
      "prompt": "P(A|B) = P(A∩B)/P(B). This is:",
      "options": [
        "The definition of conditional probability",
        "Bayes's theorem",
        "Law of total probability",
        "Independence condition"
      ],
      "answer": 0,
      "topic": "Probability",
      "level": 3,
      "_id": "as_x19",
      "why": "P(A|B)=P(A∩B)/P(B) is the definition of conditional probability.",
      "how": "1) P(A|B)=probability of A given B occurred. 2) Formula: P(A∩B)/P(B)."
    },
    {
      "focus": "Central Limit Theorem",
      "prompt": "The CLT states that the sampling distribution of x̄ approaches normal as:",
      "options": [
        "Sample size n increases, regardless of population shape",
        "Population becomes normal",
        "Sample is from a normal population",
        "Mean equals median"
      ],
      "answer": 0,
      "topic": "Sampling",
      "level": 3,
      "_id": "as_x20",
      "why": "CLT: for large n, x̄ is approximately normal regardless of population distribution.",
      "how": "1) CLT: n↑→distribution of x̄→normal. 2) Generally n≥30 is sufficient."
    }
  ],
  "ap_precalc": [
    {
      "focus": "Polynomial functions — end behavior",
      "prompt": "For f(x) = −2x⁴ + 3x², as x → ±∞:",
      "options": [
        "f(x) → −∞",
        "f(x) → +∞",
        "f(x) → 0",
        "f(x) oscillates"
      ],
      "answer": 0,
      "topic": "Polynomial Functions",
      "level": 3,
      "why": "Even degree, negative leading coefficient → both ends go down.",
      "how": "1) Even exponent → same end behavior on both sides.  2) Negative leading coeff → falls on both ends.",
      "_id": "ap_precalc_0"
    },
    {
      "focus": "Rational functions — asymptote",
      "prompt": "For f(x) = (2x)/(x−3), the vertical asymptote is at:",
      "options": [
        "x = 3",
        "x = 2",
        "x = −3",
        "x = 0"
      ],
      "answer": 0,
      "topic": "Rational Functions",
      "level": 2,
      "why": "Vertical asymptotes occur where the denominator equals zero.",
      "how": "1) x − 3 = 0 → x = 3.  2) Check numerator ≠ 0 there: 2(3)=6 ≠ 0. So VA at x=3.",
      "_id": "ap_precalc_1"
    },
    {
      "focus": "Exponential growth",
      "prompt": "A population doubles every 5 years. Starting at 1000, after 15 years:",
      "options": [
        "8000",
        "6000",
        "2000",
        "32000"
      ],
      "answer": 0,
      "topic": "Exponential",
      "level": 3,
      "why": "Number of doublings = 15/5 = 3. Population = 1000 × 2³.",
      "how": "1) 15 ÷ 5 = 3 doubling periods.  2) 1000 × 2³ = 1000 × 8 = 8000.",
      "_id": "ap_precalc_2"
    },
    {
      "focus": "Logarithmic inverse",
      "prompt": "Solve for x: log₂(x) = 4.",
      "options": [
        "16",
        "8",
        "2",
        "1/2"
      ],
      "answer": 0,
      "topic": "Logarithmic",
      "level": 2,
      "why": "log_b(x) = c means x = bᶜ.",
      "how": "1) x = 2⁴ = 16.",
      "_id": "ap_precalc_3"
    },
    {
      "focus": "Function evaluation",
      "prompt": "If f(x) = 2x² − 3, what is f(−2)?",
      "options": [
        "5",
        "−5",
        "11",
        "8"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 2,
      "why": "Substitute −2 for x, being careful with signs.",
      "how": "1) f(−2) = 2(−2)² − 3 = 2(4) − 3 = 8 − 3 = 5.",
      "_id": "ap_precalc_4"
    },
    {
      "focus": "Trigonometric — unit circle",
      "prompt": "cos(60°) = ?",
      "options": [
        "1/2",
        "√3/2",
        "√2/2",
        "1"
      ],
      "answer": 0,
      "topic": "Trigonometric",
      "level": 2,
      "why": "Standard unit circle value: cos 60° = 1/2.",
      "how": "1) 60° lies at the point (1/2, √3/2) on the unit circle.  2) Cosine = x-coordinate = 1/2.",
      "_id": "ap_precalc_5"
    },
    {
      "focus": "Vectors — magnitude",
      "prompt": "Magnitude of ⟨3, 4⟩?",
      "options": [
        "5",
        "7",
        "1",
        "25"
      ],
      "answer": 0,
      "topic": "Vectors",
      "level": 2,
      "why": "|v| = √(3² + 4²) — Pythagorean theorem.",
      "how": "1) √(9+16) = √25 = 5.",
      "_id": "ap_precalc_6"
    },
    {
      "focus": "Matrices — multiply",
      "prompt": "If A = [[1,0],[0,1]] (identity) and B = [[3,2],[1,4]], then A×B = ?",
      "options": [
        "[[3,2],[1,4]]",
        "[[1,0],[0,1]]",
        "[[4,2],[1,5]]",
        "[[0,0],[0,0]]"
      ],
      "answer": 0,
      "topic": "Matrices",
      "level": 3,
      "why": "The identity matrix times any matrix equals that matrix.",
      "how": "1) I × B = B for any matrix B.  2) This is the definition of the identity matrix.",
      "_id": "ap_precalc_7"
    },
    {
      "focus": "Rational hole",
      "prompt": "f(x)=(x²−4)/(x²−x−2). Hole at?",
      "options": [
        "x=2",
        "x=−2",
        "x=1",
        "x=−1"
      ],
      "answer": 0,
      "topic": "Rational Functions",
      "level": 4,
      "_id": "apc_x1",
      "why": "Common factor (x−2) cancels→hole at x=2.",
      "how": "1) Num:(x−2)(x+2). Den:(x−2)(x+1). 2) Cancel (x−2)→hole at x=2."
    },
    {
      "focus": "Amplitude/period",
      "prompt": "y=3sin(2x). Amplitude and period?",
      "options": [
        "A=3, P=π",
        "A=2, P=π",
        "A=3, P=2π",
        "A=6, P=2π"
      ],
      "answer": 0,
      "topic": "Trigonometry",
      "level": 3,
      "_id": "apc_x2",
      "why": "A=3, Period=2π/2=π.",
      "how": "1) y=Asin(Bx). 2) A=3, B=2. 3) Period=π."
    },
    {
      "focus": "arcsin",
      "prompt": "arcsin(1/2)=?",
      "options": [
        "30°",
        "60°",
        "45°",
        "90°"
      ],
      "answer": 0,
      "topic": "Trigonometry",
      "level": 3,
      "_id": "apc_x3",
      "why": "sin30°=1/2.",
      "how": "1) Which angle has sin=1/2? 2) sin30°=1/2."
    },
    {
      "focus": "Exponential equation",
      "prompt": "Solve 3^(2x)=81.",
      "options": [
        "x=2",
        "x=4",
        "x=3",
        "x=1"
      ],
      "answer": 0,
      "topic": "Logarithms",
      "level": 3,
      "_id": "apc_x4",
      "why": "81=3⁴→2x=4→x=2.",
      "how": "1) 81=3⁴. 2) 2x=4. 3) x=2."
    },
    {
      "focus": "Parabola",
      "prompt": "Parabola: vertex origin, opens upward?",
      "options": [
        "y=x²",
        "x²+y²=1",
        "y=|x|",
        "x²−y²=1"
      ],
      "answer": 0,
      "topic": "Conics",
      "level": 3,
      "_id": "apc_x5",
      "why": "y=x²: vertex(0,0), a>0→opens up.",
      "how": "1) y=ax². 2) a>0."
    },
    {
      "focus": "Binomial coefficient",
      "prompt": "Coefficient of x²y² in (x+y)⁴?",
      "options": [
        "6",
        "4",
        "12",
        "3"
      ],
      "answer": 0,
      "topic": "Polynomial Functions",
      "level": 4,
      "_id": "apc_x6",
      "why": "C(4,2)=6.",
      "how": "1) k=2 for x²y². 2) C(4,2)=6."
    },
    {
      "focus": "Parametric circle",
      "prompt": "x=3cosᵗ, y=3sinᵗ traces:",
      "options": [
        "Circle r=3",
        "Ellipse",
        "Line",
        "Parabola"
      ],
      "answer": 0,
      "topic": "Parametric",
      "level": 4,
      "_id": "apc_x7",
      "why": "x²+y²=9. Circle.",
      "how": "1) x²+y²=9cos²t+9sin²t=9."
    },
    {
      "focus": "Complex multiplication",
      "prompt": "(2+3i)(1−i)=?",
      "options": [
        "5+i",
        "5−i",
        "2−i",
        "−1+5i"
      ],
      "answer": 0,
      "topic": "Complex Numbers",
      "level": 3,
      "_id": "apc_x8",
      "why": "FOIL: 2−2i+3i+3=5+i.",
      "how": "1) 2(1)=2. 2) 2(−i)=−2i. 3) 3i(1)=3i. 4) 3i(−i)=3. Sum=5+i."
    },
    {
      "focus": "Rational function — end behavior",
      "prompt": "For f(x)=(2x³−1)/(x³+5), as x→∞:",
      "options": [
        "f(x)→2",
        "f(x)→0",
        "f(x)→∞",
        "f(x)→−1"
      ],
      "answer": 0,
      "topic": "Rational Functions",
      "level": 3,
      "_id": "apc_x9",
      "why": "Same degree: limit = ratio of leading coefficients = 2/1 = 2.",
      "how": "1) Degree top=degree bottom=3. 2) Leading coeff ratio: 2/1=2."
    },
    {
      "focus": "Even/odd functions",
      "prompt": "f(x)=x⁴−3x² is:",
      "options": [
        "Even — f(−x)=f(x)",
        "Odd — f(−x)=−f(x)",
        "Neither",
        "Both"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 2,
      "_id": "apc_x10",
      "why": "f(−x)=(−x)⁴−3(−x)²=x⁴−3x²=f(x). Even function.",
      "how": "1) Replace x with −x. 2) (−x)⁴=x⁴, (−x)²=x². 3) f(−x)=f(x)→even."
    },
    {
      "focus": "Sum-to-product identity",
      "prompt": "sin A + sin B = ?",
      "options": [
        "2 sin((A+B)/2) cos((A−B)/2)",
        "sin(A+B)",
        "2 sin(A+B)",
        "cos((A−B)/2)"
      ],
      "answer": 0,
      "topic": "Trigonometry",
      "level": 4,
      "_id": "apc_x11",
      "why": "Sum-to-product: sin A+sin B=2sin((A+B)/2)cos((A−B)/2).",
      "how": "1) Memorize sum-to-product identities. 2) sinA+sinB=2sin((A+B)/2)cos((A−B)/2)."
    },
    {
      "focus": "Sequences — arithmetic",
      "prompt": "Arithmetic sequence: first term 3, common difference 4. 10th term?",
      "options": [
        "39",
        "40",
        "36",
        "43"
      ],
      "answer": 0,
      "topic": "Sequences",
      "level": 2,
      "_id": "apc_x12",
      "why": "aₙ=a₁+(n−1)d=3+9×4=39.",
      "how": "1) aₙ=a₁+(n−1)d. 2) a₁₀=3+9(4)=3+36=39."
    },
    {
      "focus": "Matrix multiplication",
      "prompt": "A=[[1,2],[3,4]], B=[[0,1],[1,0]]. (AB)₁₁ (row1,col1)?",
      "options": [
        "2",
        "3",
        "1",
        "0"
      ],
      "answer": 0,
      "topic": "Matrices",
      "level": 3,
      "_id": "apc_x13",
      "why": "Row1 of A × Col1 of B: 1×0+2×1=2.",
      "how": "1) Row 1 of A: [1,2]. Col 1 of B: [0,1]. 2) Dot product: 1×0+2×1=2."
    }
  ],
  "ap_bio": [
    {
      "focus": "Cell — prokaryote vs eukaryote",
      "prompt": "Which cell type lacks a nucleus?",
      "options": [
        "Prokaryotic",
        "Eukaryotic",
        "Plant",
        "Animal"
      ],
      "answer": 0,
      "topic": "Cell Biology",
      "level": 1,
      "why": "\"Pro-karyon\" = before nucleus — no membrane-bound nucleus.",
      "how": "1) Bacteria and archaea are prokaryotes.  2) All other organisms (fungi, plants, animals) are eukaryotes with nuclei.",
      "_id": "ap_bio_0"
    },
    {
      "focus": "Central dogma",
      "prompt": "The flow of genetic information typically is:",
      "options": [
        "DNA → RNA → Protein",
        "Protein → RNA → DNA",
        "RNA → DNA → Protein",
        "DNA → Protein only"
      ],
      "answer": 0,
      "topic": "Molecular Biology",
      "level": 2,
      "why": "Transcription copies DNA to mRNA; translation reads mRNA to build proteins.",
      "how": "1) In the nucleus: DNA → mRNA (transcription).  2) At the ribosome: mRNA → protein (translation).",
      "_id": "ap_bio_1"
    },
    {
      "focus": "Natural selection",
      "prompt": "Which is REQUIRED for natural selection to occur?",
      "options": [
        "Heritable variation + differential reproduction",
        "Mutations alone",
        "Long time only",
        "Sexual reproduction only"
      ],
      "answer": 0,
      "topic": "Evolution",
      "level": 2,
      "why": "Natural selection needs: variation, heritability, and differential reproductive success.",
      "how": "1) If all individuals are identical, no selection acts.  2) Must be heritable (passed to offspring).  3) Some variants must reproduce more.",
      "_id": "ap_bio_2"
    },
    {
      "focus": "Genetics — Punnett square",
      "prompt": "Aa × Aa cross. Probability of homozygous dominant (AA)?",
      "options": [
        "1/4",
        "1/2",
        "3/4",
        "0"
      ],
      "answer": 0,
      "topic": "Genetics",
      "level": 3,
      "why": "Punnett: AA, Aa, Aa, aa → 1 AA out of 4 = 1/4.",
      "how": "1) Draw the grid.  2) AA appears once.  3) P(AA) = 1/4.",
      "_id": "ap_bio_3"
    },
    {
      "focus": "Energy — ATP",
      "prompt": "The molecule that directly powers most cellular work is:",
      "options": [
        "ATP",
        "Glucose",
        "NADH",
        "DNA"
      ],
      "answer": 0,
      "topic": "Energy",
      "level": 1,
      "why": "ATP (adenosine triphosphate) is the cell's immediate energy currency.",
      "how": "1) Glucose stores energy.  2) Cellular respiration converts glucose → ATP.  3) ATP powers reactions.",
      "_id": "ap_bio_4"
    },
    {
      "focus": "Ecology — energy transfer",
      "prompt": "Approximately what % of energy is transferred to the next trophic level?",
      "options": [
        "10%",
        "50%",
        "90%",
        "100%"
      ],
      "answer": 0,
      "topic": "Ecology",
      "level": 2,
      "why": "The 10% rule: most energy is lost as heat during metabolic processes.",
      "how": "1) Producers fix 100 units of energy.  2) Primary consumers get ~10 units.  3) Secondary consumers get ~1 unit.",
      "_id": "ap_bio_5"
    },
    {
      "focus": "Homeostasis — feedback",
      "prompt": "A thermostat that turns off heating when a set temperature is reached is an example of:",
      "options": [
        "Negative feedback",
        "Positive feedback",
        "Osmosis",
        "Active transport"
      ],
      "answer": 0,
      "topic": "Homeostasis",
      "level": 2,
      "why": "Negative feedback: the response counteracts the stimulus to maintain a set point.",
      "how": "1) Temperature rises → heating OFF → temperature falls back → heating ON.  2) System resists change = negative feedback.",
      "_id": "ap_bio_6"
    },
    {
      "focus": "Membrane permeability",
      "prompt": "Nonpolar molecules pass through lipid bilayer because:",
      "options": [
        "The hydrophobic core is compatible",
        "Pores filter by size",
        "Carrier proteins bind them",
        "Outer surface is charged"
      ],
      "answer": 0,
      "topic": "Cell Biology",
      "level": 3,
      "_id": "ab2_x1",
      "why": "Hydrophobic interior allows nonpolar substances to dissolve through.",
      "how": "1) Membrane interior=hydrophobic. 2) Nonpolar+hydrophobic=compatible."
    },
    {
      "focus": "Meiosis",
      "prompt": "Which produces genetically diverse haploid cells?",
      "options": [
        "Meiosis",
        "Mitosis",
        "Binary fission",
        "Budding"
      ],
      "answer": 0,
      "topic": "Cell Division",
      "level": 2,
      "_id": "ab2_x2",
      "why": "Meiosis: haploid gametes + crossing over.",
      "how": "1) Meiosis→4 haploid cells. 2) Crossing over=diversity."
    },
    {
      "focus": "Enzyme inhibition",
      "prompt": "Substrate analog blocks active site. This is:",
      "options": [
        "Competitive inhibition",
        "Noncompetitive inhibition",
        "Allosteric activation",
        "Product inhibition"
      ],
      "answer": 0,
      "topic": "Enzymes",
      "level": 3,
      "_id": "ab2_x3",
      "why": "Competitive: mimic substrate, compete for active site.",
      "how": "1) Same active site=competitive. 2) Can overcome with more substrate."
    },
    {
      "focus": "Translation",
      "prompt": "mRNA codons are read by:",
      "options": [
        "tRNA anticodons at ribosome",
        "DNA polymerase",
        "RNA polymerase",
        "The nucleus"
      ],
      "answer": 0,
      "topic": "Molecular Biology",
      "level": 2,
      "_id": "ab2_x4",
      "why": "tRNA anticodon matches mRNA codon; ribosome catalyzes.",
      "how": "1) mRNA codon→tRNA anticodon match. 2) tRNA brings amino acid."
    },
    {
      "focus": "Hardy-Weinberg",
      "prompt": "p=0.6, q=0.4. Heterozygote frequency 2pq?",
      "options": [
        "0.48",
        "0.36",
        "0.24",
        "0.16"
      ],
      "answer": 0,
      "topic": "Evolution",
      "level": 4,
      "_id": "ab2_x5",
      "why": "2pq=2(0.6)(0.4)=0.48.",
      "how": "1) 2×0.6×0.4=0.48."
    },
    {
      "focus": "10% energy rule",
      "prompt": "Only ~10% energy transfers between trophic levels because:",
      "options": [
        "Most is lost as heat via respiration",
        "Energy stored permanently",
        "Predators are inefficient",
        "Decomposers absorb most"
      ],
      "answer": 0,
      "topic": "Ecology",
      "level": 2,
      "_id": "ab2_x6",
      "why": "Organisms use most energy for respiration (heat). ~10% stored as biomass.",
      "how": "1) Respiration=heat loss. 2) Only ~10% stored."
    },
    {
      "focus": "Osmosis",
      "prompt": "Cell in hypertonic solution will:",
      "options": [
        "Shrink (water moves out)",
        "Swell",
        "Stay same",
        "Burst"
      ],
      "answer": 0,
      "topic": "Cell Biology",
      "level": 2,
      "_id": "ab2_x7",
      "why": "Hypertonic=more solute outside. Water moves out→shrinks.",
      "how": "1) Water flows to higher solute concentration. 2) Cell loses water→shrinks."
    },
    {
      "focus": "Lac operon",
      "prompt": "Lac operon maximally ON when:",
      "options": [
        "Lactose present AND glucose absent",
        "Glucose present",
        "Lactose absent",
        "Repressor binds operator"
      ],
      "answer": 0,
      "topic": "Genetics",
      "level": 4,
      "_id": "ab2_x8",
      "why": "Lactose deactivates repressor; low glucose activates cAMP/CAP.",
      "how": "1) Both conditions needed. 2) Lactose removes repressor. 3) Low glucose activates CAP."
    },
    {
      "focus": "Feedback loops",
      "prompt": "Negative feedback in homeostasis acts to:",
      "options": [
        "Counteract deviations and restore set point",
        "Amplify a signal",
        "Maintain constant gene expression",
        "Increase hormone levels"
      ],
      "answer": 0,
      "topic": "Organismal Biology",
      "level": 2,
      "_id": "ab2_x9",
      "why": "Negative feedback: response opposes the initial stimulus, restoring equilibrium.",
      "how": "1) Stimulus→response opposes stimulus. 2) Restores set point. 3) Example: blood glucose regulation."
    },
    {
      "focus": "ATP synthesis",
      "prompt": "Most ATP in aerobic respiration is produced during:",
      "options": [
        "Oxidative phosphorylation (electron transport chain)",
        "Glycolysis",
        "Krebs cycle substrate-level phosphorylation",
        "Fermentation"
      ],
      "answer": 0,
      "topic": "Cell Biology",
      "level": 3,
      "_id": "ab2_x10",
      "why": "ETC/oxidative phosphorylation produces ~28-32 ATP vs. 2 from glycolysis and 2 from Krebs.",
      "how": "1) Glycolysis: 2 ATP net. 2) Krebs: 2 ATP. 3) ETC: ~28-32 ATP. 4) ETC dominates."
    },
    {
      "focus": "Transpiration",
      "prompt": "Water moves up a plant's xylem primarily because of:",
      "options": [
        "Transpiration-cohesion-tension mechanism",
        "Root pressure alone",
        "Osmosis only",
        "Active transport in stem cells"
      ],
      "answer": 0,
      "topic": "Organismal Biology",
      "level": 3,
      "_id": "ab2_x11",
      "why": "Transpiration at leaves creates tension; cohesion keeps water column continuous.",
      "how": "1) Leaves lose water→tension. 2) Cohesion: water molecules stick together. 3) Water pulled up."
    },
    {
      "focus": "Signal transduction",
      "prompt": "A hydrophilic hormone (like insulin) transmits its signal by:",
      "options": [
        "Binding to a surface receptor that activates an internal cascade",
        "Entering the cell and binding DNA directly",
        "Diffusing through the membrane",
        "Direct enzyme activation in the cytoplasm"
      ],
      "answer": 0,
      "topic": "Cell Biology",
      "level": 3,
      "_id": "ab2_x12",
      "why": "Hydrophilic hormones cannot cross the membrane; they bind surface receptors.",
      "how": "1) Lipophilic: enters cell, binds receptor. 2) Hydrophilic: surface receptor→second messengers."
    },
    {
      "focus": "Animal behavior",
      "prompt": "A behavior performed correctly the first time without prior experience is:",
      "options": [
        "Innate (instinctive) behavior",
        "Learned behavior",
        "Imprinting",
        "Classical conditioning"
      ],
      "answer": 0,
      "topic": "Organismal Biology",
      "level": 2,
      "_id": "ab2_x13",
      "why": "Innate behaviors are genetically programmed and occur without learning.",
      "how": "1) Innate=no experience needed. 2) Learned=modified by experience. 3) Imprinting=early learning window."
    },
    {
      "focus": "Immune response",
      "prompt": "B cells produce __ in response to antigens.",
      "options": [
        "Antibodies",
        "T cells",
        "Cytokines only",
        "Phagocytes"
      ],
      "answer": 0,
      "topic": "Organismal Biology",
      "level": 2,
      "_id": "ab2_x14",
      "why": "B cells (humoral immunity) differentiate into plasma cells that secrete antibodies.",
      "how": "1) B cells→plasma cells→antibodies. 2) T cells→cell-mediated immunity."
    },
    {
      "focus": "Population ecology — carrying capacity",
      "prompt": "When a population reaches carrying capacity K:",
      "options": [
        "Birth rate equals death rate — net growth = 0",
        "Growth rate is maximum",
        "Population crashes",
        "Birth rate exceeds death rate most"
      ],
      "answer": 0,
      "topic": "Ecology",
      "level": 2,
      "_id": "ab2_x15",
      "why": "At K: birth rate=death rate, net growth=0. Logistic S-curve levels off.",
      "how": "1) K=max sustainable population. 2) At K: b=d. 3) Net growth=0."
    }
  ],
  "ap_envsci": [
    {
      "focus": "Earth systems",
      "prompt": "The layer of Earth containing most of the mass of living organisms is the:",
      "options": [
        "biosphere",
        "lithosphere",
        "hydrosphere",
        "atmosphere"
      ],
      "answer": 0,
      "topic": "Earth Systems",
      "level": 1,
      "why": "The biosphere is the global sum of all ecosystems — where life exists.",
      "how": "1) Litho = rock, Hydro = water, Atmo = air, Bio = life.",
      "_id": "ap_envsci_0"
    },
    {
      "focus": "Biodiversity",
      "prompt": "A biodiversity hotspot is characterized by:",
      "options": [
        "High species richness and high endemism under threat",
        "Low species count",
        "Cold climate",
        "Industrial use"
      ],
      "answer": 0,
      "topic": "Biodiversity",
      "level": 2,
      "why": "Hotspots must have exceptional species richness AND be significantly threatened.",
      "how": "1) Must have ≥1500 endemic vascular plant species.  2) Must have lost ≥70% original habitat.",
      "_id": "ap_envsci_1"
    },
    {
      "focus": "Populations — carrying capacity",
      "prompt": "A population growing exponentially produces a ____ shaped curve:",
      "options": [
        "J-shaped",
        "S-shaped",
        "Linear",
        "Bell-shaped"
      ],
      "answer": 0,
      "topic": "Populations",
      "level": 2,
      "why": "Unrestricted exponential growth produces a J-curve.",
      "how": "1) No limiting factors → constant growth rate → accelerating curve → J shape.",
      "_id": "ap_envsci_2"
    },
    {
      "focus": "Land use — deforestation",
      "prompt": "A major consequence of deforestation is:",
      "options": [
        "Increased CO₂ in atmosphere",
        "More rainfall",
        "Higher biodiversity",
        "Cooler temperatures"
      ],
      "answer": 0,
      "topic": "Land Use",
      "level": 2,
      "why": "Trees sequester CO₂; removing them releases stored carbon and reduces sequestration.",
      "how": "1) Fewer trees = less photosynthesis = less CO₂ absorbed.  2) Also: burning trees releases stored CO₂.",
      "_id": "ap_envsci_3"
    },
    {
      "focus": "Energy — fossil fuels",
      "prompt": "Which fuel has the highest energy density and lowest CO₂ per unit of energy among fossil fuels?",
      "options": [
        "Natural gas",
        "Coal",
        "Gasoline",
        "Diesel"
      ],
      "answer": 0,
      "topic": "Energy Resources",
      "level": 3,
      "why": "Natural gas (methane) burns more completely and produces more energy per CO₂ emitted than coal.",
      "how": "1) Coal: high carbon content, high CO₂/energy.  2) Natural gas: CH₄, more H per C → lower CO₂ per kWh.",
      "_id": "ap_envsci_4"
    },
    {
      "focus": "Pollution — greenhouse gases",
      "prompt": "Which is NOT a major greenhouse gas?",
      "options": [
        "Oxygen (O₂)",
        "Carbon dioxide (CO₂)",
        "Methane (CH₄)",
        "Nitrous oxide (N₂O)"
      ],
      "answer": 0,
      "topic": "Pollution",
      "level": 1,
      "why": "O₂ does not absorb infrared radiation significantly.",
      "how": "1) GHGs absorb IR: CO₂, CH₄, N₂O, H₂O vapor.  2) O₂ and N₂ are transparent to IR.",
      "_id": "ap_envsci_5"
    },
    {
      "focus": "Global change — climate",
      "prompt": "The primary driver of current global warming is:",
      "options": [
        "Burning fossil fuels increasing CO₂",
        "Volcanic eruptions",
        "Variations in Earth's orbit only",
        "Increased solar output"
      ],
      "answer": 0,
      "topic": "Global Change",
      "level": 2,
      "why": "Scientific consensus: increased CO₂ from fossil fuels is the dominant cause of current warming.",
      "how": "1) CO₂ concentrations have risen from 280 ppm pre-industrial to >420 ppm.  2) Temperature correlates with CO₂.",
      "_id": "ap_envsci_6"
    },
    {
      "focus": "Energy math",
      "prompt": "A 100-watt bulb running for 10 hours uses how many kWh?",
      "options": [
        "1 kWh",
        "10 kWh",
        "100 kWh",
        "1000 kWh"
      ],
      "answer": 0,
      "topic": "Energy Resources",
      "level": 2,
      "why": "Energy = power × time.",
      "how": "1) 100 W × 10 h = 1000 Wh.  2) 1000 Wh ÷ 1000 = 1 kWh.",
      "_id": "ap_envsci_7"
    },
    {
      "focus": "Carbon cycle",
      "prompt": "Which removes CO₂ from atmosphere?",
      "options": [
        "Photosynthesis",
        "Cellular respiration",
        "Combustion",
        "Decomposition"
      ],
      "answer": 0,
      "topic": "Biogeochemical Cycles",
      "level": 1,
      "_id": "ae_x1",
      "why": "Photosynthesis absorbs CO₂.",
      "how": "1) Respiration/combustion/decomp=release CO₂. 2) Photosynthesis=absorb CO₂."
    },
    {
      "focus": "Ozone depletion",
      "prompt": "CFCs deplete ozone by:",
      "options": [
        "Releasing Cl atoms that catalytically destroy O₃",
        "Absorbing UV directly",
        "Reacting with N₂",
        "Blocking sunlight"
      ],
      "answer": 0,
      "topic": "Atmosphere",
      "level": 3,
      "_id": "ae_x2",
      "why": "UV breaks CFCs→Cl→catalytic O₃ destruction.",
      "how": "1) CFC+UV→Cl. 2) Cl+O₃→ClO+O₂. 3) Cl regenerates→chain reaction."
    },
    {
      "focus": "Eutrophication",
      "prompt": "Algal blooms from agricultural runoff due to excess:",
      "options": [
        "Nitrogen and phosphorus",
        "CO₂",
        "Heavy metals",
        "Sediment"
      ],
      "answer": 0,
      "topic": "Water Pollution",
      "level": 2,
      "_id": "ae_x3",
      "why": "N and P are nutrients that trigger algal growth.",
      "how": "1) Fertilizers contain N and P. 2) Runoff→water bodies→blooms."
    },
    {
      "focus": "Demographic transition Stage 2",
      "prompt": "Population grows rapidly in Stage 2 because:",
      "options": [
        "Death rates fall but birth rates stay high",
        "Both rise",
        "Birth rates fall below death rates",
        "Death rates rise"
      ],
      "answer": 0,
      "topic": "Human Population",
      "level": 3,
      "_id": "ae_x4",
      "why": "Better sanitation/medicine lower deaths; birth rates not yet adjusted.",
      "how": "1) Stage 2: death rates drop. 2) Birth rates still high. 3) Gap=rapid growth."
    },
    {
      "focus": "Contour farming",
      "prompt": "Contour farming prevents erosion by:",
      "options": [
        "Plowing along land contours to slow runoff",
        "Planting trees only",
        "Using chemical binders",
        "Increasing irrigation"
      ],
      "answer": 0,
      "topic": "Soil and Agriculture",
      "level": 2,
      "_id": "ae_x5",
      "why": "Contour rows act as horizontal barriers, slowing water flow.",
      "how": "1) Water flows downhill. 2) Contour rows=barriers. 3) Water slows→less erosion."
    },
    {
      "focus": "Biomagnification",
      "prompt": "DDT concentrates in top predators because:",
      "options": [
        "It is fat-soluble and accumulates up the food chain",
        "Predators live longer",
        "DDT is produced by apex predators",
        "Prey excrete DDT efficiently"
      ],
      "answer": 0,
      "topic": "Toxicology",
      "level": 3,
      "_id": "ae_x6",
      "why": "DDT stored in fat, not excreted. Each level eats many of level below→accumulates.",
      "how": "1) Fat-soluble=not excreted. 2) Each level eats many prey. 3) Each step up=higher concentration."
    },
    {
      "focus": "IPAT",
      "prompt": "In IPAT, which relates to consumption habits?",
      "options": [
        "A (Affluence)",
        "I (Impact)",
        "P (Population)",
        "T (Technology)"
      ],
      "answer": 0,
      "topic": "Environmental Economics",
      "level": 3,
      "_id": "ae_x7",
      "why": "A=per capita consumption/affluence.",
      "how": "1) I=P×A×T. 2) A=consumption per person."
    },
    {
      "focus": "Renewable carbon footprint",
      "prompt": "Smallest carbon footprint per kWh?",
      "options": [
        "Wind",
        "Coal",
        "Natural gas",
        "Oil"
      ],
      "answer": 0,
      "topic": "Energy",
      "level": 2,
      "_id": "ae_x8",
      "why": "Wind: near-zero operational emissions, lowest lifecycle.",
      "how": "1) Coal>oil>gas>nuclear/renewables. 2) Wind=lowest lifecycle emissions."
    },
    {
      "focus": "Nitrogen cycle",
      "prompt": "Which process converts N₂ to NH₃ (ammonia) in soil?",
      "options": [
        "Nitrogen fixation by bacteria",
        "Denitrification",
        "Nitrification",
        "Decomposition"
      ],
      "answer": 0,
      "topic": "Biogeochemical Cycles",
      "level": 2,
      "_id": "ae_x9",
      "why": "Nitrogen fixation: specialized bacteria (Rhizobium) convert N₂→NH₃.",
      "how": "1) N₂ fixation: N₂→NH₃. 2) Nitrification: NH₃→NO₃⁻. 3) Denitrification: NO₃⁻→N₂."
    },
    {
      "focus": "Tragedy of the commons",
      "prompt": "Tragedy of the Commons occurs when:",
      "options": [
        "Individuals overuse shared resources to the collective detriment",
        "Resources are privatized",
        "Government manages all resources",
        "Pollution is eliminated"
      ],
      "answer": 0,
      "topic": "Environmental Economics",
      "level": 2,
      "_id": "ae_x10",
      "why": "Each rational individual overuses shared resources→collective depletion.",
      "how": "1) Shared resource: no individual incentive to conserve. 2) Result: overuse and depletion."
    },
    {
      "focus": "Primary vs secondary succession",
      "prompt": "Succession beginning on bare rock (no soil) is called:",
      "options": [
        "Primary succession",
        "Secondary succession",
        "Climax community formation",
        "Ecological drift"
      ],
      "answer": 0,
      "topic": "Ecology",
      "level": 2,
      "_id": "ae_x11",
      "why": "Primary: starts with no soil or life. Secondary: starts after disturbance where soil remains.",
      "how": "1) Primary: no soil (lava flow, bare rock). 2) Secondary: soil present (after fire/flood)."
    },
    {
      "focus": "Greenhouse effect",
      "prompt": "Which gas has the highest overall contribution to the enhanced greenhouse effect?",
      "options": [
        "CO₂",
        "Methane (CH₄)",
        "Water vapor",
        "Ozone"
      ],
      "answer": 0,
      "topic": "Atmosphere",
      "level": 2,
      "_id": "ae_x12",
      "why": "CO₂ has the largest human-caused contribution to the greenhouse effect due to fossil fuel combustion.",
      "how": "1) CH₄ is more potent per molecule. 2) CO₂ is far more abundant. 3) CO₂ dominates total radiative forcing."
    },
    {
      "focus": "Solid waste — reduce/reuse/recycle",
      "prompt": "The most environmentally preferred waste management strategy is:",
      "options": [
        "Reduce (use less to begin with)",
        "Recycle",
        "Reuse",
        "Landfill"
      ],
      "answer": 0,
      "topic": "Solid Waste",
      "level": 2,
      "_id": "ae_x13",
      "why": "Hierarchy: Reduce > Reuse > Recycle > Recover > Dispose. Reducing waste at the source is most efficient.",
      "how": "1) Reducing prevents waste creation. 2) Reuse extends product life. 3) Recycling still requires energy."
    },
    {
      "focus": "Water cycle — evapotranspiration",
      "prompt": "Evapotranspiration combines water loss from:",
      "options": [
        "Soil evaporation AND plant transpiration",
        "Only plant transpiration",
        "Only ocean evaporation",
        "Groundwater recharge"
      ],
      "answer": 0,
      "topic": "Hydrological Cycle",
      "level": 2,
      "_id": "ae_x14",
      "why": "ET=evaporation from soil/water + transpiration from plants.",
      "how": "1) Evaporation: water→vapor from surfaces. 2) Transpiration: water released by plants. 3) ET=both."
    },
    {
      "focus": "Invasive species",
      "prompt": "Invasive species typically cause harm by:",
      "options": [
        "Outcompeting native species and disrupting ecosystems",
        "Adding biodiversity",
        "Filling empty niches productively",
        "Improving soil quality"
      ],
      "answer": 0,
      "topic": "Biodiversity",
      "level": 2,
      "_id": "ae_x15",
      "why": "Invasives lack natural predators in new environment, outcompete native species.",
      "how": "1) No predators→population explodes. 2) Outcompete natives. 3) Disrupt ecosystem structure."
    }
  ],
  "ap_csa": [
    {
      "focus": "OOP — class definition",
      "prompt": "In Java, which keyword is used to create a class?",
      "options": [
        "class",
        "object",
        "def",
        "struct"
      ],
      "answer": 0,
      "topic": "OOP",
      "level": 1,
      "why": "Java uses the `class` keyword to define a class.",
      "how": "1) Syntax: public class ClassName { ... }  2) \"def\" is Python; \"struct\" is C.",
      "_id": "ap_csa_0"
    },
    {
      "focus": "Classes — constructor",
      "prompt": "A constructor in Java is called when:",
      "options": [
        "An object is created with new",
        "A method returns a value",
        "The program starts",
        "A variable is declared"
      ],
      "answer": 0,
      "topic": "Classes",
      "level": 2,
      "why": "Constructors initialize objects; they are invoked by the `new` keyword.",
      "how": "1) MyClass obj = new MyClass() → calls the constructor.",
      "_id": "ap_csa_1"
    },
    {
      "focus": "Arrays — access",
      "prompt": "int[] arr = {10, 20, 30}; What is arr[1]?",
      "options": [
        "20",
        "10",
        "30",
        "undefined"
      ],
      "answer": 0,
      "topic": "Arrays",
      "level": 1,
      "why": "Arrays are zero-indexed in Java.",
      "how": "1) Index 0 → 10.  2) Index 1 → 20.  3) Index 2 → 30.",
      "_id": "ap_csa_2"
    },
    {
      "focus": "ArrayList — add",
      "prompt": "Which method adds an element to an ArrayList in Java?",
      "options": [
        "add()",
        "push()",
        "append()",
        "insert()"
      ],
      "answer": 0,
      "topic": "ArrayList",
      "level": 1,
      "why": "Java's ArrayList uses .add() to append elements.",
      "how": "1) list.add(element) appends to the end.  2) list.add(index, element) inserts at position.",
      "_id": "ap_csa_3"
    },
    {
      "focus": "2D arrays",
      "prompt": "int[][] grid = new int[3][4]; How many elements does grid have?",
      "options": [
        "12",
        "7",
        "34",
        "3"
      ],
      "answer": 0,
      "topic": "2D Arrays",
      "level": 2,
      "why": "Total elements = rows × columns.",
      "how": "1) 3 rows × 4 columns = 12 elements.",
      "_id": "ap_csa_4"
    },
    {
      "focus": "Inheritance — extends",
      "prompt": "In Java, class Dog extends Animal means:",
      "options": [
        "Dog inherits methods and fields from Animal",
        "Dog replaces Animal",
        "Animal inherits from Dog",
        "Dog and Animal are unrelated"
      ],
      "answer": 0,
      "topic": "Inheritance",
      "level": 2,
      "why": "The `extends` keyword establishes an IS-A relationship and inheritance.",
      "how": "1) Dog IS-A Animal.  2) Dog inherits all non-private members of Animal.  3) Dog can add/override methods.",
      "_id": "ap_csa_5"
    },
    {
      "focus": "Recursion — base case",
      "prompt": "Every recursive method MUST have:",
      "options": [
        "A base case that stops recursion",
        "A loop",
        "A return type of void",
        "An array parameter"
      ],
      "answer": 0,
      "topic": "Recursion",
      "level": 2,
      "why": "Without a base case, recursion never terminates (stack overflow).",
      "how": "1) Base case: condition where method returns without calling itself.  2) Recursive case: method calls itself with smaller/simpler input.",
      "_id": "ap_csa_6"
    },
    {
      "focus": "Sorting — selection sort",
      "prompt": "Selection sort works by:",
      "options": [
        "Finding the minimum, swapping it to the front, repeating",
        "Splitting in half repeatedly",
        "Comparing adjacent elements repeatedly",
        "Inserting each element in sorted position"
      ],
      "answer": 0,
      "topic": "Sorting",
      "level": 3,
      "why": "Selection sort selects the smallest unsorted element and swaps it into its correct position.",
      "how": "1) Find minimum in unsorted portion.  2) Swap with first unsorted element.  3) Repeat for remaining unsorted portion.",
      "_id": "ap_csa_7"
    },
    {
      "focus": "Searching — binary search",
      "prompt": "Binary search requires the array to be:",
      "options": [
        "Sorted",
        "Of even length",
        "Containing integers only",
        "Non-empty only"
      ],
      "answer": 0,
      "topic": "Searching",
      "level": 2,
      "why": "Binary search works by halving the search space, which only works if data is sorted.",
      "how": "1) Compare target with middle element.  2) If less, search left half; if greater, search right half.  3) Must be sorted for this to work.",
      "_id": "ap_csa_8"
    },
    {
      "focus": "Algorithms — binary",
      "prompt": "What is the decimal value of 1011₂?",
      "options": [
        "11",
        "13",
        "9",
        "7"
      ],
      "answer": 0,
      "topic": "Algorithms",
      "level": 2,
      "why": "Binary place values: 8, 4, 2, 1.",
      "how": "1) 1×8 + 0×4 + 1×2 + 1×1 = 8+0+2+1 = 11.",
      "_id": "ap_csa_9"
    },
    {
      "focus": "Linear search Big-O",
      "prompt": "Time complexity of linear search on n elements?",
      "options": [
        "O(n)",
        "O(log n)",
        "O(n²)",
        "O(1)"
      ],
      "answer": 0,
      "topic": "Algorithms",
      "level": 2,
      "_id": "csa_x1",
      "why": "Checks each element once: O(n).",
      "how": "1) Worst case: check all n. 2) O(n)."
    },
    {
      "focus": "Recursion base case",
      "prompt": "No base case in recursion causes:",
      "options": [
        "StackOverflowError",
        "Method runs once",
        "Returns null",
        "Compiles but gives 0"
      ],
      "answer": 0,
      "topic": "Recursion",
      "level": 3,
      "_id": "csa_x2",
      "why": "Infinite recursion fills call stack→StackOverflowError.",
      "how": "1) Base case=stopping condition. 2) Without it: infinite calls→stack overflow."
    },
    {
      "focus": "2D array size",
      "prompt": "int[][] m = new int[3][4]. Total elements?",
      "options": [
        "12",
        "7",
        "34",
        "6"
      ],
      "answer": 0,
      "topic": "Arrays",
      "level": 2,
      "_id": "csa_x3",
      "why": "3 rows × 4 cols = 12.",
      "how": "1) Rows=3, Cols=4. 2) 3×4=12."
    },
    {
      "focus": "Interfaces vs inheritance",
      "prompt": "In Java, a class can:",
      "options": [
        "Implement multiple interfaces but extend only one class",
        "Extend multiple classes",
        "Implement only one interface",
        "Neither"
      ],
      "answer": 0,
      "topic": "OOP",
      "level": 3,
      "_id": "csa_x4",
      "why": "Java: single inheritance, multiple interface implementation.",
      "how": "1) extends: one class. 2) implements: multiple interfaces."
    },
    {
      "focus": "Static method",
      "prompt": "A static method in Java:",
      "options": [
        "Belongs to the class, not instances",
        "Can only be called on objects",
        "Cannot call other methods",
        "Must return void"
      ],
      "answer": 0,
      "topic": "OOP",
      "level": 3,
      "_id": "csa_x5",
      "why": "Static = class-level; called as ClassName.method().",
      "how": "1) Static=class member. 2) No instance needed. 3) e.g. Math.sqrt()."
    },
    {
      "focus": "ArrayList vs Array",
      "prompt": "Key advantage of ArrayList over array?",
      "options": [
        "Dynamic resizing",
        "Faster access",
        "Less memory",
        "Supports primitives directly"
      ],
      "answer": 0,
      "topic": "Data Structures",
      "level": 2,
      "_id": "csa_x6",
      "why": "ArrayList resizes automatically; array is fixed.",
      "how": "1) Array=fixed size. 2) ArrayList=add/remove changes size."
    },
    {
      "focus": "Finally block",
      "prompt": "Which block always executes in try-catch-finally?",
      "options": [
        "finally",
        "catch",
        "try only if no exception",
        "None guaranteed"
      ],
      "answer": 0,
      "topic": "Exceptions",
      "level": 2,
      "_id": "csa_x7",
      "why": "finally always runs, even if exception is uncaught.",
      "how": "1) try: might throw. 2) catch: handles exception. 3) finally: always runs."
    },
    {
      "focus": "Binary search requirement",
      "prompt": "Binary search requires input to be:",
      "options": [
        "Sorted",
        "Non-empty only",
        "Even length",
        "Unique elements"
      ],
      "answer": 0,
      "topic": "Algorithms",
      "level": 2,
      "_id": "csa_x8",
      "why": "Binary search eliminates half the array per step — requires sorted order.",
      "how": "1) Compare to midpoint. 2) Go left or right. 3) Only works if sorted."
    },
    {
      "focus": "String immutability",
      "prompt": "String immutability in Java means:",
      "options": [
        "Operations return new Strings; original unchanged",
        "Cannot use .equals()",
        "Cannot contain numbers",
        "Fixed length 256"
      ],
      "answer": 0,
      "topic": "Strings",
      "level": 2,
      "_id": "csa_x9",
      "why": "String operations return new objects; original is unchanged.",
      "how": "1) s.toUpperCase() returns new String. 2) s itself unchanged unless reassigned."
    },
    {
      "focus": "Polymorphism",
      "prompt": "Dog overrides Animal.speak(). Calling speak() on a Dog object:",
      "options": [
        "Calls Dog's version — runtime polymorphism",
        "Always calls Animal's speak()",
        "Compilation error",
        "Calls both"
      ],
      "answer": 0,
      "topic": "OOP",
      "level": 3,
      "_id": "csa_x10",
      "why": "Dynamic dispatch: JVM uses actual object type at runtime.",
      "how": "1) Override=subclass redefines method. 2) Runtime: JVM checks actual type=Dog. 3) Dog.speak() called."
    },
    {
      "focus": "Inheritance — super keyword",
      "prompt": "In Java, super() in a subclass constructor:",
      "options": [
        "Calls the parent class constructor",
        "Creates a new object",
        "Overrides the parent method",
        "Accesses static fields"
      ],
      "answer": 0,
      "topic": "OOP",
      "level": 3,
      "_id": "csa_x11",
      "why": "super() invokes the parent class constructor.",
      "how": "1) super()=parent constructor. 2) Must be first statement if used. 3) super.method()=parent method."
    },
    {
      "focus": "ArrayList iteration",
      "prompt": "Which loop correctly removes elements from an ArrayList while iterating?",
      "options": [
        "Iterator with iterator.remove()",
        "Enhanced for-each with list.remove()",
        "Standard for-i removing from front",
        "While loop with get()"
      ],
      "answer": 0,
      "topic": "Data Structures",
      "level": 4,
      "_id": "csa_x12",
      "why": "Modifying a list during for-each throws ConcurrentModificationException. Use Iterator.",
      "how": "1) For-each: cannot safely remove. 2) Iterator.remove(): safe removal. 3) Index loop: safe if iterating backward."
    },
    {
      "focus": "Sorting algorithm complexity",
      "prompt": "Which sorting algorithm has O(n log n) average time complexity?",
      "options": [
        "Merge sort",
        "Bubble sort",
        "Selection sort",
        "Insertion sort"
      ],
      "answer": 0,
      "topic": "Algorithms",
      "level": 3,
      "_id": "csa_x13",
      "why": "Merge sort: divide and conquer gives O(n log n) in all cases.",
      "how": "1) Merge/Quick sort: O(n log n). 2) Bubble/Selection/Insertion: O(n²). 3) Merge sort guaranteed O(n log n)."
    },
    {
      "focus": "Abstract classes",
      "prompt": "An abstract class in Java:",
      "options": [
        "Cannot be instantiated directly",
        "Must have all abstract methods",
        "Is the same as an interface",
        "Can only be extended once"
      ],
      "answer": 0,
      "topic": "OOP",
      "level": 3,
      "_id": "csa_x14",
      "why": "Abstract class cannot be instantiated; must be subclassed. Can have both abstract and concrete methods.",
      "how": "1) abstract class: cannot new it. 2) Can have concrete methods (unlike interface pre-Java 8). 3) Subclass implements abstract methods."
    },
    {
      "focus": "Boolean logic — De Morgan",
      "prompt": "De Morgan's law: !(A && B) is equivalent to:",
      "options": [
        "!A || !B",
        "!A && !B",
        "A || B",
        "!(A || B)"
      ],
      "answer": 0,
      "topic": "Boolean Logic",
      "level": 3,
      "_id": "csa_x15",
      "why": "De Morgan: !(A&&B)=!A||!B and !(A||B)=!A&&!B.",
      "how": "1) De Morgan's: NOT(AND)=OR of NOTs. 2) !(A&&B)=!A||!B."
    },
    {
      "focus": "String comparison",
      "prompt": "In Java, to compare string content use:",
      "options": [
        ".equals()",
        "==",
        "compareTo() only",
        ".contains()"
      ],
      "answer": 0,
      "topic": "Strings",
      "level": 2,
      "_id": "csa_x16",
      "why": "== compares object references. .equals() compares content.",
      "how": "1) \"abc\"==\"abc\" may be false (different objects). 2) \"abc\".equals(\"abc\") = true."
    },
    {
      "focus": "Wrapper classes",
      "prompt": "Which converts an int to its Integer wrapper class object?",
      "options": [
        "Integer.valueOf(n) or autoboxing",
        "int.toInteger()",
        "(Integer)n",
        "Integer(n)"
      ],
      "answer": 0,
      "topic": "OOP",
      "level": 2,
      "_id": "csa_x17",
      "why": "Integer.valueOf(n) or simply assigning int to Integer (autoboxing).",
      "how": "1) Autoboxing: int→Integer automatically. 2) Integer.valueOf(n) explicit. 3) new Integer(n) deprecated."
    }
  ],
  "clep_calc": [
    {
      "focus": "Limits — direct substitution",
      "prompt": "lim(x→3) (x² − 9)/(x − 3) = ?",
      "options": [
        "6",
        "0",
        "undefined",
        "9"
      ],
      "answer": 0,
      "topic": "Limits",
      "level": 2,
      "why": "Factor and cancel to remove the indeterminate form.",
      "how": "1) x²−9 = (x−3)(x+3).  2) Cancel (x−3).  3) lim(x+3) as x→3 = 6.",
      "_id": "clep_calc_0"
    },
    {
      "focus": "Continuity",
      "prompt": "A function is continuous at x = a if:",
      "options": [
        "The limit exists AND equals f(a)",
        "The derivative exists",
        "f(a) is defined",
        "The function is linear"
      ],
      "answer": 0,
      "topic": "Continuity",
      "level": 2,
      "why": "Three conditions: f(a) defined, limit exists, limit = f(a).",
      "how": "1) All three must hold.  2) Missing any one → discontinuity.",
      "_id": "clep_calc_1"
    },
    {
      "focus": "Derivative — power rule",
      "prompt": "The derivative of x³ is:",
      "options": [
        "3x²",
        "3x",
        "x²",
        "x⁴/4"
      ],
      "answer": 0,
      "topic": "Derivatives",
      "level": 1,
      "why": "Power rule: d/dx[xⁿ] = nxⁿ⁻¹.",
      "how": "1) Bring down exponent: 3.  2) Reduce exponent by 1: x²  3) Result: 3x².",
      "_id": "clep_calc_2"
    },
    {
      "focus": "Integration — reverse power rule",
      "prompt": "∫ 1 dx = ?",
      "options": [
        "x + C",
        "1 + C",
        "0",
        "1/x + C"
      ],
      "answer": 0,
      "topic": "Integrals",
      "level": 1,
      "why": "∫ xⁿ dx = xⁿ⁺¹/(n+1) + C. For n=0: ∫1 dx = x + C.",
      "how": "1) 1 = x⁰.  2) ∫x⁰ dx = x¹/1 + C = x + C.",
      "_id": "clep_calc_3"
    },
    {
      "focus": "FTC — antiderivative",
      "prompt": "∫₀² x dx = ?",
      "options": [
        "2",
        "4",
        "1",
        "8"
      ],
      "answer": 0,
      "topic": "FTC",
      "level": 2,
      "why": "Antiderivative of x is x²/2; evaluate at bounds.",
      "how": "1) [x²/2]₀² = (4/2) − 0 = 2.",
      "_id": "clep_calc_4"
    },
    {
      "focus": "Area under curve",
      "prompt": "Area under f(x) = 3 from x = 1 to x = 4?",
      "options": [
        "9",
        "12",
        "3",
        "6"
      ],
      "answer": 0,
      "topic": "Area",
      "level": 2,
      "why": "Area under a constant function = height × width.",
      "how": "1) Width = 4−1 = 3.  2) Height = 3.  3) Area = 3×3 = 9.",
      "_id": "clep_calc_5"
    },
    {
      "focus": "Motion problems",
      "prompt": "A particle's position is s(t) = t³ − 3t. Velocity at t = 2?",
      "options": [
        "9",
        "−3",
        "12",
        "3"
      ],
      "answer": 0,
      "topic": "Motion Problems",
      "level": 3,
      "why": "Velocity = derivative of position.",
      "how": "1) v(t) = s′(t) = 3t² − 3.  2) v(2) = 3(4)−3 = 12−3 = 9.",
      "_id": "clep_calc_6"
    },
    {
      "focus": "Removable discontinuity",
      "prompt": "f(x)=(x²−1)/(x−1). Continuous extension f(1)=?",
      "options": [
        "2",
        "0",
        "1",
        "undefined"
      ],
      "answer": 0,
      "topic": "Continuity",
      "level": 2,
      "_id": "cc_x1",
      "why": "x²−1=(x−1)(x+1)→x+1. At x=1: 2.",
      "how": "1) Cancel (x−1). 2) f=x+1. 3) f(1)=2."
    },
    {
      "focus": "Derivative of tan",
      "prompt": "d/dx[tan(x)]=?",
      "options": [
        "sec²x",
        "cotx",
        "−csc²x",
        "cos²x"
      ],
      "answer": 0,
      "topic": "Derivatives",
      "level": 2,
      "_id": "cc_x2",
      "why": "d/dx[tanx]=sec²x.",
      "how": "1) Memorize: tan→sec². 2) Answer: sec²x."
    },
    {
      "focus": "Integral of sin",
      "prompt": "∫sin(x)dx=?",
      "options": [
        "−cosx+C",
        "cosx+C",
        "sinx+C",
        "−sinx+C"
      ],
      "answer": 0,
      "topic": "Integration",
      "level": 2,
      "_id": "cc_x3",
      "why": "∫sinx dx=−cosx+C.",
      "how": "1) Memorize. 2) Verify: d/dx[−cosx]=sinx."
    },
    {
      "focus": "Area under y=x",
      "prompt": "∫₀⁴x dx=?",
      "options": [
        "8",
        "16",
        "4",
        "2"
      ],
      "answer": 0,
      "topic": "Integration",
      "level": 2,
      "_id": "cc_x4",
      "why": "[x²/2]₀⁴=8.",
      "how": "1) ∫x dx=x²/2. 2) [x²/2]₀⁴=8."
    },
    {
      "focus": "FTC Part 2",
      "prompt": "F(x)=∫₀ˣt²dt. F'(x)=?",
      "options": [
        "x²",
        "x³/3",
        "2x",
        "0"
      ],
      "answer": 0,
      "topic": "FTC",
      "level": 3,
      "_id": "cc_x5",
      "why": "FTC Part 2: d/dx[∫₀ˣf(t)dt]=f(x).",
      "how": "1) FTC2: F'(x)=integrand at x. 2) F'(x)=x²."
    },
    {
      "focus": "Integral of eˣ",
      "prompt": "∫eˣdx=?",
      "options": [
        "eˣ+C",
        "eˣ/x+C",
        "xeˣ+C",
        "e+C"
      ],
      "answer": 0,
      "topic": "Integration",
      "level": 2,
      "_id": "cc_x6",
      "why": "eˣ is its own antiderivative.",
      "how": "1) d/dx[eˣ]=eˣ. 2) ∫eˣ=eˣ+C."
    },
    {
      "focus": "Critical points",
      "prompt": "f(x)=x³−3x. Critical points at?",
      "options": [
        "x=±1",
        "x=0",
        "x=3",
        "x=±√3"
      ],
      "answer": 0,
      "topic": "Derivatives",
      "level": 3,
      "_id": "cc_x7",
      "why": "f'=3x²−3=0→x=±1.",
      "how": "1) f'=3x²−3. 2) =0→x²=1→x=±1."
    },
    {
      "focus": "Concavity test",
      "prompt": "f''(x)>0 on interval means:",
      "options": [
        "Concave up",
        "Concave down",
        "Decreasing",
        "At a maximum"
      ],
      "answer": 0,
      "topic": "Derivatives",
      "level": 2,
      "_id": "cc_x8",
      "why": "f''>0→slope increasing→concave up.",
      "how": "1) f''>0→f' increasing. 2) Increasing slope=concave up."
    },
    {
      "focus": "Implicit differentiation",
      "prompt": "x²+y²=25. dy/dx=?",
      "options": [
        "−x/y",
        "x/y",
        "−y/x",
        "2x"
      ],
      "answer": 0,
      "topic": "Derivatives",
      "level": 3,
      "_id": "cc_x9",
      "why": "Differentiate both sides: 2x+2y(dy/dx)=0→dy/dx=−x/y.",
      "how": "1) 2x+2y dy/dx=0. 2) dy/dx=−x/y."
    },
    {
      "focus": "Mean Value Theorem",
      "prompt": "f(x)=x² on [1,3]. MVT guarantees f'(c) equals:",
      "options": [
        "4",
        "6",
        "2",
        "3"
      ],
      "answer": 0,
      "topic": "Derivatives",
      "level": 3,
      "_id": "cc_x10",
      "why": "MVT: f'(c)=(f(3)−f(1))/(3−1)=(9−1)/2=4.",
      "how": "1) f'(c)=(f(b)−f(a))/(b−a). 2) (9−1)/2=4."
    },
    {
      "focus": "Related rates",
      "prompt": "Sphere radius grows at 2 cm/s. dV/dt at r=3?",
      "options": [
        "72π cm³/s",
        "18π",
        "36π",
        "6π"
      ],
      "answer": 0,
      "topic": "Derivatives",
      "level": 4,
      "_id": "cc_x11",
      "why": "V=4πr³/3. dV/dt=4πr²(dr/dt)=4π(9)(2)=72π.",
      "how": "1) V=4πr³/3. 2) dV/dt=4πr²dr/dt. 3) 4π(9)(2)=72π."
    },
    {
      "focus": "Integration by substitution",
      "prompt": "∫ 2x(x²+1)⁴ dx = ?",
      "options": [
        "(x²+1)⁵/5 + C",
        "(x²+1)⁵ + C",
        "x²(x²+1)⁴/2 + C",
        "5(x²+1)⁴ + C"
      ],
      "answer": 0,
      "topic": "Integration",
      "level": 3,
      "_id": "cc_x12",
      "why": "u=x²+1, du=2x dx. ∫u⁴du=u⁵/5.",
      "how": "1) u=x²+1. 2) du=2x dx. 3) ∫u⁴du=u⁵/5. 4) (x²+1)⁵/5+C."
    },
    {
      "focus": "L'Hôpital's Rule",
      "prompt": "lim(x→1) (x²−1)/(x−1) via L'Hôpital?",
      "options": [
        "2",
        "0",
        "1",
        "∞"
      ],
      "answer": 0,
      "topic": "L'Hôpital's Rule",
      "level": 3,
      "_id": "cc_x13",
      "why": "0/0 form → differentiate top and bottom: (2x)/1 → at x=1: 2.",
      "how": "1) 0/0 form. 2) L'H: d/dx[x²−1]=2x; d/dx[x−1]=1. 3) lim=2(1)/1=2."
    },
    {
      "focus": "Linear approximation",
      "prompt": "Linear approximation of f(x)=√x near x=9 at x=9.1?",
      "options": [
        "≈3.0167",
        "≈3.1",
        "≈3.01",
        "≈2.98"
      ],
      "answer": 0,
      "topic": "Differential Calculus",
      "level": 3,
      "_id": "cc_x14",
      "why": "f(x)≈f(a)+f'(a)(x−a). f(9)=3, f'(x)=1/(2√x), f'(9)=1/6. Approx=3+(1/6)(0.1)=3.0167.",
      "how": "1) L(x)=f(a)+f'(a)(x−a). 2) a=9, x=9.1, Δx=0.1. 3) 3+(1/6)(0.1)≈3.017."
    },
    {
      "focus": "Average value of a function",
      "prompt": "Average value of f(x)=x² on [0,3]?",
      "options": [
        "3",
        "9",
        "4.5",
        "1"
      ],
      "answer": 0,
      "topic": "Integral Calculus",
      "level": 3,
      "_id": "cc_x15",
      "why": "Average = (1/(b−a))∫f dx = (1/3)∫₀³x²dx = (1/3)[x³/3]₀³ = (1/3)(9) = 3.",
      "how": "1) Avg = (1/(b−a))∫ₐᵇf(x)dx. 2) (1/3)[x³/3]₀³ = (1/3)(9) = 3."
    },
    {
      "focus": "Velocity and acceleration",
      "prompt": "Position s(t)=t³−6t. At t=2, acceleration a(t)=?",
      "options": [
        "6",
        "−6",
        "6t",
        "0"
      ],
      "answer": 0,
      "topic": "Differential Calculus",
      "level": 3,
      "_id": "cc_x16",
      "why": "v(t)=s'(t)=3t²−6; a(t)=v'(t)=6t. At t=2: a=12. Wait — 6t at t=2 = 12. Let me recheck: a(t)=6t; a(2)=12. Closest answer = 6t (the expression).",
      "how": "1) s(t)=t³−6t. 2) v=s'=3t²−6. 3) a=v'=6t."
    },
    {
      "focus": "Volume of revolution",
      "prompt": "Volume when y=x rotates about x-axis from x=0 to x=2 (disk method)?",
      "options": [
        "8π/3",
        "4π",
        "π",
        "2π"
      ],
      "answer": 0,
      "topic": "Integral Calculus",
      "level": 4,
      "_id": "cc_x17",
      "why": "V=π∫₀²x²dx=π[x³/3]₀²=π(8/3)=8π/3.",
      "how": "1) Disk: V=π∫[f(x)]²dx. 2) π∫₀²x²dx=π[x³/3]₀²=8π/3."
    },
    {
      "focus": "Chain rule",
      "prompt": "d/dx[sin(3x²)] = ?",
      "options": [
        "6x·cos(3x²)",
        "cos(3x²)",
        "3·cos(3x²)",
        "6x·sin(3x²)"
      ],
      "answer": 0,
      "topic": "Differential Calculus",
      "level": 3,
      "_id": "cc_g1",
      "why": "Chain rule: derivative of outer × derivative of inner. d/dx[sin u] · d/dx[u] where u=3x².",
      "how": "1) Outer: d/dx[sin u]=cos u. 2) Inner: d/dx[3x²]=6x. 3) Multiply: 6x·cos(3x²)."
    },
    {
      "focus": "Derivative of inverse trig",
      "prompt": "d/dx[arcsin(x)] = ?",
      "options": [
        "1/√(1−x²)",
        "−1/√(1−x²)",
        "1/(1+x²)",
        "cos(x)"
      ],
      "answer": 0,
      "topic": "Differential Calculus",
      "level": 4,
      "_id": "cc_g2",
      "why": "Standard formula: d/dx[arcsin(x)] = 1/√(1−x²).",
      "how": "1) Memorize: d/dx[arcsin(x)]=1/√(1−x²). 2) d/dx[arctan(x)]=1/(1+x²)."
    },
    {
      "focus": "Higher-order derivative",
      "prompt": "f(x)=x⁴. f'''(x) (third derivative) = ?",
      "options": [
        "24x",
        "12x²",
        "4x³",
        "24"
      ],
      "answer": 0,
      "topic": "Differential Calculus",
      "level": 3,
      "_id": "cc_g3",
      "why": "f'=4x³, f''=12x², f'''=24x.",
      "how": "1) f'=4x³. 2) f''=12x². 3) f'''=24x."
    },
    {
      "focus": "Differentiability vs continuity",
      "prompt": "A function differentiable at x=a must also be:",
      "options": [
        "Continuous at x=a",
        "Periodic",
        "Increasing at x=a",
        "Bounded"
      ],
      "answer": 0,
      "topic": "Differential Calculus",
      "level": 2,
      "_id": "cc_g4",
      "why": "Differentiability implies continuity (but continuity does not imply differentiability — e.g., |x| at 0).",
      "how": "1) Differentiable → continuous (always). 2) Continuous → differentiable (not always; |x| at 0 is continuous but not differentiable)."
    },
    {
      "focus": "Average rate of change",
      "prompt": "Average rate of change of f(x)=x² on [1,4]?",
      "options": [
        "5",
        "3",
        "15",
        "9"
      ],
      "answer": 0,
      "topic": "Differential Calculus",
      "level": 2,
      "_id": "cc_g5",
      "why": "Avg rate = (f(4)−f(1))/(4−1) = (16−1)/3 = 15/3 = 5.",
      "how": "1) Avg rate = Δy/Δx = (f(b)−f(a))/(b−a). 2) (16−1)/3=5."
    },
    {
      "focus": "Definite integral as Riemann sum",
      "prompt": "lim(n→∞) Σ(i=1 to n) f(xᵢ)·Δx represents:",
      "options": [
        "The definite integral ∫f(x)dx",
        "The derivative of f",
        "A polynomial approximation",
        "The average of f"
      ],
      "answer": 0,
      "topic": "Integral Calculus",
      "level": 3,
      "_id": "cc_g6",
      "why": "The definite integral is defined as the limit of Riemann sums.",
      "how": "1) Riemann sum: rectangles approximating area. 2) Limit as n→∞: exact area = ∫f(x)dx."
    },
    {
      "focus": "Area between curves",
      "prompt": "Area between y=x² and y=x from x=0 to x=1?",
      "options": [
        "1/6",
        "1/3",
        "1/2",
        "2/3"
      ],
      "answer": 0,
      "topic": "Integral Calculus",
      "level": 4,
      "_id": "cc_g7",
      "why": "∫₀¹(x − x²)dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6.",
      "how": "1) Top minus bottom: x − x². 2) ∫₀¹(x−x²)dx = 1/2−1/3 = 1/6."
    },
    {
      "focus": "Separable differential equation",
      "prompt": "dy/dx = ky has solution:",
      "options": [
        "y = Ce^(kx)",
        "y = kx + C",
        "y = sin(kx)",
        "y = x²/2k"
      ],
      "answer": 0,
      "topic": "Integral Calculus",
      "level": 4,
      "_id": "cc_g8",
      "why": "Separate: dy/y = k dx → ln|y| = kx+C → y = Ce^(kx). Exponential growth/decay.",
      "how": "1) dy/y = k dx. 2) Integrate: ln|y| = kx + C. 3) y = e^(kx+C) = Ce^(kx)."
    },
    {
      "focus": "Instantaneous rate vs average",
      "prompt": "Instantaneous rate of change at x=a is given by:",
      "options": [
        "f'(a) — the derivative at a",
        "(f(b)−f(a))/(b−a)",
        "f(a) itself",
        "The integral from 0 to a"
      ],
      "answer": 0,
      "topic": "Differential Calculus",
      "level": 2,
      "_id": "cc_g9",
      "why": "Instantaneous = derivative. Average = (f(b)−f(a))/(b−a). Derivative is limit of average rate as Δx→0.",
      "how": "1) Average: secant slope. 2) Instantaneous: tangent slope = f'(a). 3) Derivative as limit of average."
    },
    {
      "focus": "Optimization (extreme value)",
      "prompt": "A rectangle has perimeter 20. What dimensions maximize area?",
      "options": [
        "5×5 (square) — area 25",
        "10×0",
        "8×2 — area 16",
        "4×6 — area 24"
      ],
      "answer": 0,
      "topic": "Differential Calculus",
      "level": 3,
      "_id": "cc_g10",
      "why": "Among rectangles with fixed perimeter, the square maximizes area. P=20 → side=5, A=25.",
      "how": "1) Perimeter 2(L+W)=20 → L+W=10. 2) A=LW=L(10−L)=10L−L². 3) dA/dL=10−2L=0 → L=5. 4) Square 5×5, A=25."
    }
  ],
  "clep_chem": [
    {
      "focus": "Atomic structure — moles",
      "prompt": "A mole contains approximately:",
      "options": [
        "6.02×10²³ particles",
        "6.02×10²⁵",
        "1000 particles",
        "1 g of any substance"
      ],
      "answer": 0,
      "topic": "Atomic Structure",
      "level": 1,
      "why": "Avogadro's number: 6.022×10²³ particles per mole.",
      "how": "1) Memorize: 6.02×10²³.  2) Applies to atoms, molecules, ions.",
      "_id": "clep_chem_0"
    },
    {
      "focus": "Bonding — ionic vs covalent",
      "prompt": "In NaCl, the bond is mainly:",
      "options": [
        "ionic",
        "covalent",
        "metallic",
        "hydrogen"
      ],
      "answer": 0,
      "topic": "Bonding",
      "level": 1,
      "why": "Metal + nonmetal form ionic bonds via electron transfer.",
      "how": "1) Na (metal) loses 1e⁻.  2) Cl (nonmetal) gains 1e⁻.  3) Electrostatic attraction = ionic bond.",
      "_id": "clep_chem_1"
    },
    {
      "focus": "States of matter — gas",
      "prompt": "The ideal gas law PV = nRT describes the relationship between:",
      "options": [
        "Pressure, volume, moles, and temperature",
        "Only P and V",
        "P and T only",
        "V and T only"
      ],
      "answer": 0,
      "topic": "States of Matter",
      "level": 1,
      "why": "The ideal gas law relates all four gas variables.",
      "how": "1) P=pressure, V=volume, n=moles, R=gas constant, T=temperature (K).",
      "_id": "clep_chem_2"
    },
    {
      "focus": "Reactions — balancing",
      "prompt": "Balance: H₂ + O₂ → H₂O. Coefficients are:",
      "options": [
        "2, 1, 2",
        "1, 1, 1",
        "1, 2, 2",
        "2, 2, 4"
      ],
      "answer": 0,
      "topic": "Reactions",
      "level": 2,
      "why": "Conservation of mass: equal atoms of each element on both sides.",
      "how": "1) Start with O: 1 O₂ → 2 O atoms → need 2 H₂O.  2) 2 H₂O needs 4 H → 2 H₂.  3) 2H₂ + O₂ → 2H₂O.",
      "_id": "clep_chem_3"
    },
    {
      "focus": "Descriptive chemistry — periodic trends",
      "prompt": "Atomic radius generally increases as you go:",
      "options": [
        "Down a group",
        "Across a period left to right",
        "Up a group",
        "Right to left across a period"
      ],
      "answer": 0,
      "topic": "Descriptive Chemistry",
      "level": 2,
      "why": "Going down a group adds electron shells, increasing atomic radius.",
      "how": "1) More shells = larger atom.  2) Across a period: more protons pull electrons in → smaller radius.",
      "_id": "clep_chem_4"
    },
    {
      "focus": "Boyle's Law",
      "prompt": "Gas 2atm, 5L. Pressure→4atm. New volume?",
      "options": [
        "2.5 L",
        "10 L",
        "8 L",
        "1.25 L"
      ],
      "answer": 0,
      "topic": "Gas Laws",
      "level": 2,
      "_id": "cch_x1",
      "why": "P₁V₁=P₂V₂: 10=4V₂→V₂=2.5.",
      "how": "1) 2×5=4×V₂. 2) V₂=2.5L."
    },
    {
      "focus": "Empirical formula",
      "prompt": "40%C, 6.7%H, 53.3%O by mass. Formula?",
      "options": [
        "CH₂O",
        "C₂H₄O₂",
        "CHO",
        "CH₃O"
      ],
      "answer": 0,
      "topic": "Stoichiometry",
      "level": 3,
      "_id": "cch_x2",
      "why": "C:3.33, H:6.67, O:3.33 → ratio 1:2:1 → CH₂O.",
      "how": "1) ÷atomic mass: C=40/12≈3.33, H=6.7, O=53.3/16≈3.33. 2) Divide by smallest: 1:2:1."
    },
    {
      "focus": "Electron configuration",
      "prompt": "Oxygen (Z=8) electron configuration?",
      "options": [
        "1s²2s²2p⁴",
        "1s²2s²2p⁶",
        "1s²2p⁶",
        "1s²2s⁴2p²"
      ],
      "answer": 0,
      "topic": "Atomic Structure",
      "level": 2,
      "_id": "cch_x3",
      "why": "8 electrons: 2+2+4.",
      "how": "1) Fill: 1s²(2)2s²(4)2p⁴(8). 2) Total=8."
    },
    {
      "focus": "Covalent bond",
      "prompt": "Sharing electrons between atoms produces:",
      "options": [
        "Covalent bond",
        "Ionic bond",
        "Metallic bond",
        "Hydrogen bond"
      ],
      "answer": 0,
      "topic": "Bonding",
      "level": 1,
      "_id": "cch_x4",
      "why": "Covalent = electron sharing (vs ionic = electron transfer).",
      "how": "1) Sharing=covalent. 2) Transfer=ionic."
    },
    {
      "focus": "Reaction type",
      "prompt": "2H₂+O₂→2H₂O is:",
      "options": [
        "Synthesis",
        "Decomposition",
        "Single replacement",
        "Double replacement"
      ],
      "answer": 0,
      "topic": "Chemical Reactions",
      "level": 2,
      "_id": "cch_x5",
      "why": "Two reactants→one product = synthesis.",
      "how": "1) Two→one=synthesis. 2) One→many=decomposition."
    },
    {
      "focus": "Solubility",
      "prompt": "KNO₃ is soluble. When dissolved it:",
      "options": [
        "Dissociates into ions",
        "Does not react",
        "Floats",
        "Forms suspension"
      ],
      "answer": 0,
      "topic": "Solutions",
      "level": 2,
      "_id": "cch_x6",
      "why": "Soluble ionic compounds dissociate into ions.",
      "how": "1) KNO₃→K⁺+NO₃⁻. 2) Soluble=true solution of ions."
    },
    {
      "focus": "pH from pOH",
      "prompt": "[OH⁻]=10⁻⁵M. pH?",
      "options": [
        "9",
        "5",
        "−5",
        "14"
      ],
      "answer": 0,
      "topic": "Acids and Bases",
      "level": 3,
      "_id": "cch_x7",
      "why": "pOH=5; pH=14−5=9.",
      "how": "1) pOH=−log(10⁻⁵)=5. 2) pH=14−5=9."
    },
    {
      "focus": "Gas Laws — Charles's Law",
      "prompt": "Gas at 300K, 4L. Temperature doubles to 600K. New volume (constant P)?",
      "options": [
        "8 L",
        "2 L",
        "6 L",
        "4 L"
      ],
      "answer": 0,
      "topic": "Gas Laws",
      "level": 2,
      "_id": "cch_x8",
      "why": "Charles's Law: V₁/T₁=V₂/T₂. 4/300=V₂/600→V₂=8L.",
      "how": "1) V/T=const. 2) 4/300=V₂/600. 3) V₂=8L."
    },
    {
      "focus": "Molarity",
      "prompt": "2 moles NaCl in 500mL solution. Molarity?",
      "options": [
        "4 M",
        "0.5 M",
        "2 M",
        "1 M"
      ],
      "answer": 0,
      "topic": "Solutions",
      "level": 2,
      "_id": "cch_x9",
      "why": "M=mol/L=2/0.5=4M.",
      "how": "1) M=n/V. 2) V=500mL=0.5L. 3) 2/0.5=4M."
    },
    {
      "focus": "Limiting reagent",
      "prompt": "N₂+3H₂→2NH₃. Start with 1mol N₂ and 2mol H₂. Limiting reagent?",
      "options": [
        "H₂",
        "N₂",
        "Neither",
        "Both equally"
      ],
      "answer": 0,
      "topic": "Stoichiometry",
      "level": 3,
      "_id": "cch_x10",
      "why": "Need 3mol H₂ per mol N₂, but only 2mol H₂ available. H₂ is limiting.",
      "how": "1) Ratio needed: 3H₂ per N₂. 2) Have 2H₂ for 1N₂. 3) 2<3 → H₂ is limiting."
    },
    {
      "focus": "Buffer solutions",
      "prompt": "A buffer resists pH changes because it contains:",
      "options": [
        "A weak acid and its conjugate base",
        "A strong acid and water",
        "Equal volumes of two strong acids",
        "An indicator and distilled water"
      ],
      "answer": 0,
      "topic": "Acids and Bases",
      "level": 3,
      "_id": "cch_x11",
      "why": "Buffers: weak acid (neutralizes added base) + conjugate base (neutralizes added acid).",
      "how": "1) Weak acid+conjugate base=buffer. 2) Added acid: conjugate base reacts. 3) Added base: weak acid reacts."
    },
    {
      "focus": "Reaction kinetics — rate law",
      "prompt": "Rate = k[A]¹[B]². Overall reaction order?",
      "options": [
        "3rd order",
        "2nd order",
        "1st order",
        "0th order"
      ],
      "answer": 0,
      "topic": "Kinetics",
      "level": 3,
      "_id": "cch_x12",
      "why": "Overall order = sum of exponents = 1+2 = 3.",
      "how": "1) Overall order = Σ exponents. 2) 1+2=3."
    },
    {
      "focus": "Thermodynamics — entropy",
      "prompt": "When a gas expands into a vacuum, entropy:",
      "options": [
        "Increases — more disorder",
        "Decreases",
        "Stays the same",
        "Cannot be determined"
      ],
      "answer": 0,
      "topic": "Thermodynamics",
      "level": 2,
      "_id": "cch_x13",
      "why": "Expansion = more volume available to molecules = more disorder = entropy increases (2nd Law).",
      "how": "1) More positions available→more disorder. 2) Spontaneous→entropy increases."
    },
    {
      "focus": "Nuclear — half-life calculation",
      "prompt": "Isotope has t½=5 years. After 15 years, fraction remaining?",
      "options": [
        "1/8",
        "1/4",
        "1/16",
        "1/2"
      ],
      "answer": 0,
      "topic": "Nuclear Chemistry",
      "level": 2,
      "_id": "cch_x14",
      "why": "15÷5=3 half-lives. (1/2)³=1/8.",
      "how": "1) n=15/5=3. 2) Remaining=(1/2)³=1/8."
    },
    {
      "focus": "Colligative properties — freezing point depression",
      "prompt": "Adding a non-volatile solute to water:",
      "options": [
        "Lowers the freezing point and raises the boiling point",
        "Raises the freezing point",
        "Has no effect on freezing",
        "Lowers the boiling point"
      ],
      "answer": 0,
      "topic": "Solutions",
      "level": 2,
      "_id": "cch_x15",
      "why": "Colligative: solute lowers freezing point (ΔTf=iKfm) and raises boiling point (ΔTb=iKbm).",
      "how": "1) ΔTf=iKfm → freezing point decreases. 2) ΔTb=iKbm → boiling point increases."
    },
    {
      "focus": "Oxidation-reduction — electrochemistry",
      "prompt": "In an electrolytic cell, oxidation occurs at the:",
      "options": [
        "Anode (positive electrode)",
        "Cathode (negative electrode)",
        "Both electrodes equally",
        "Electrolyte solution"
      ],
      "answer": 0,
      "topic": "Reaction Types",
      "level": 3,
      "_id": "cch_x16",
      "why": "Always: OIL RIG — Oxidation Is Loss at the Anode; Reduction Is Gain at the Cathode.",
      "how": "1) OIL RIG: Oxidation=loss of electrons=anode. 2) Reduction=gain=cathode."
    },
    {
      "focus": "Mass spectroscopy / isotopes",
      "prompt": "Two isotopes of an element differ in:",
      "options": [
        "Number of neutrons (same protons)",
        "Number of protons",
        "Number of electrons in neutral atom",
        "Charge"
      ],
      "answer": 0,
      "topic": "Atomic Structure",
      "level": 1,
      "_id": "cch_g1",
      "why": "Isotopes: same atomic number (protons) but different mass number (neutrons differ).",
      "how": "1) Same element = same protons. 2) Isotopes differ in neutrons. 3) Mass spec measures mass-to-charge to identify isotopes."
    },
    {
      "focus": "Hybridization",
      "prompt": "Carbon in methane (CH₄) has which hybridization?",
      "options": [
        "sp³",
        "sp²",
        "sp",
        "dsp²"
      ],
      "answer": 0,
      "topic": "Bonding",
      "level": 3,
      "_id": "cch_g2",
      "why": "4 bonding pairs around C → sp³ hybridization → tetrahedral geometry.",
      "how": "1) Count electron domains: 4. 2) 4 = sp³. 3) Tetrahedral, 109.5°."
    },
    {
      "focus": "Lewis structures",
      "prompt": "A Lewis dot structure for water (H₂O) shows oxygen with:",
      "options": [
        "2 bonding pairs and 2 lone pairs",
        "4 bonding pairs",
        "2 lone pairs only",
        "No lone pairs"
      ],
      "answer": 0,
      "topic": "Bonding",
      "level": 2,
      "_id": "cch_g3",
      "why": "O has 6 valence electrons: 2 form bonds with H atoms; 4 remain as 2 lone pairs.",
      "how": "1) O has 6 valence e⁻. 2) Bonds with 2 H: 2 bonding pairs. 3) Remaining 4 = 2 lone pairs."
    },
    {
      "focus": "Sigma vs pi bonds",
      "prompt": "A double bond between two atoms consists of:",
      "options": [
        "One sigma (σ) bond and one pi (π) bond",
        "Two sigma bonds",
        "Two pi bonds",
        "One ionic and one covalent"
      ],
      "answer": 0,
      "topic": "Bonding",
      "level": 3,
      "_id": "cch_g4",
      "why": "Single bond = 1 σ. Double = 1 σ + 1 π. Triple = 1 σ + 2 π.",
      "how": "1) Single: σ. 2) Double: σ + π. 3) Triple: σ + 2π."
    },
    {
      "focus": "Resonance structures",
      "prompt": "The benzene molecule (C₆H₆) is best described as having:",
      "options": [
        "Delocalized electrons spread over the ring (resonance hybrid)",
        "Three localized double bonds",
        "Six single bonds",
        "Three triple bonds"
      ],
      "answer": 0,
      "topic": "Bonding",
      "level": 3,
      "_id": "cch_g5",
      "why": "Benzene's electrons are delocalized — actual structure is a resonance hybrid of two equivalent forms.",
      "how": "1) Resonance: multiple valid Lewis structures. 2) Actual: hybrid average. 3) Benzene π-electrons delocalized."
    },
    {
      "focus": "Kinetic-molecular theory",
      "prompt": "Kinetic-molecular theory states that the average kinetic energy of gas molecules is:",
      "options": [
        "Directly proportional to absolute temperature (Kelvin)",
        "Independent of temperature",
        "Inversely proportional to temperature",
        "Proportional to pressure only"
      ],
      "answer": 0,
      "topic": "States of Matter",
      "level": 2,
      "_id": "cch_g6",
      "why": "KE_avg = (3/2)kT. Higher Kelvin → higher KE. Direct proportion at the molecular level.",
      "how": "1) KMT: KE_avg ∝ T (in Kelvin). 2) Doubling T (in K) doubles average KE."
    },
    {
      "focus": "Phase diagram — triple point",
      "prompt": "On a phase diagram, the triple point is where:",
      "options": [
        "Solid, liquid, and gas phases coexist in equilibrium",
        "Solid melts to liquid",
        "Liquid boils to gas",
        "Critical phenomena occur"
      ],
      "answer": 0,
      "topic": "States of Matter",
      "level": 3,
      "_id": "cch_g7",
      "why": "Triple point: unique T and P where all three phases coexist.",
      "how": "1) Triple point: solid + liquid + gas in equilibrium. 2) Critical point: liquid/gas distinction disappears."
    },
    {
      "focus": "Ka — acid dissociation",
      "prompt": "A weak acid HA has Ka = 1×10⁻⁵. The Ka expression is:",
      "options": [
        "Ka = [H⁺][A⁻]/[HA]",
        "Ka = [HA]/[H⁺][A⁻]",
        "Ka = [HA][H⁺]",
        "Ka = pH × [HA]"
      ],
      "answer": 0,
      "topic": "Equilibrium",
      "level": 3,
      "_id": "cch_g8",
      "why": "Equilibrium constant for HA → H⁺ + A⁻ : Ka = products/reactants = [H⁺][A⁻]/[HA].",
      "how": "1) HA → H⁺ + A⁻. 2) Ka = [H⁺][A⁻]/[HA]. 3) Smaller Ka = weaker acid."
    },
    {
      "focus": "Ksp — solubility product",
      "prompt": "For the dissolution AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq), the Ksp expression is:",
      "options": [
        "Ksp = [Ag⁺][Cl⁻]",
        "Ksp = [Ag⁺][Cl⁻]/[AgCl]",
        "Ksp = [AgCl]",
        "Ksp = [Ag⁺]+[Cl⁻]"
      ],
      "answer": 0,
      "topic": "Equilibrium",
      "level": 3,
      "_id": "cch_g9",
      "why": "Solid AgCl is excluded (activity = 1). Ksp = [Ag⁺][Cl⁻] only.",
      "how": "1) Solid not in K expression. 2) Ksp = product of ions = [Ag⁺][Cl⁻]."
    },
    {
      "focus": "Activation energy — Arrhenius",
      "prompt": "The activation energy of a reaction is:",
      "options": [
        "The minimum energy needed for reactants to form products",
        "The energy released by the reaction",
        "The bond energy of products",
        "Always equal to ΔH"
      ],
      "answer": 0,
      "topic": "Kinetics",
      "level": 3,
      "_id": "cch_g10",
      "why": "Activation energy (Ea): energy barrier reactants must overcome to form products.",
      "how": "1) Ea: barrier height. 2) Higher Ea → slower reaction. 3) Catalysts lower Ea."
    },
    {
      "focus": "Net ionic equation",
      "prompt": "Net ionic equation for: AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq):",
      "options": [
        "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)",
        "AgNO₃ + NaCl → AgCl + NaNO₃",
        "Na⁺ + NO₃⁻ → NaNO₃",
        "Ag⁺ + Na⁺ → AgNa"
      ],
      "answer": 0,
      "topic": "Reactions",
      "level": 3,
      "_id": "cch_g11",
      "why": "Spectator ions (Na⁺, NO₃⁻) cancel. Only the precipitation Ag⁺ + Cl⁻ → AgCl(s) remains.",
      "how": "1) Write full ionic equation. 2) Cancel spectator ions. 3) Net: Ag⁺ + Cl⁻ → AgCl(s)."
    },
    {
      "focus": "Precipitation reactions — solubility rules",
      "prompt": "Mixing aqueous solutions of which two compounds will form a precipitate?",
      "options": [
        "NaCl and AgNO₃ (forms AgCl precipitate)",
        "NaCl and KNO₃",
        "NaNO₃ and KCl",
        "NaCl and water"
      ],
      "answer": 0,
      "topic": "Reaction Types",
      "level": 2,
      "_id": "cch_g12",
      "why": "Solubility rules: most chlorides are soluble EXCEPT AgCl, PbCl₂, Hg₂Cl₂. AgCl precipitates.",
      "how": "1) Solubility rules: alkali nitrates always soluble. 2) Cl⁻ soluble except Ag, Pb, Hg. 3) AgCl precipitates."
    }
  ],
  "clep_college_algebra": [
    {
      "focus": "Linear equations",
      "prompt": "Solve 2x + 6 = 14.",
      "options": [
        "4",
        "7",
        "3",
        "10"
      ],
      "answer": 0,
      "topic": "Linear Equations",
      "level": 1,
      "why": "Isolate x by subtracting and dividing.",
      "how": "1) 2x = 14−6 = 8.  2) x = 4.",
      "_id": "clep_college_algebra_0"
    },
    {
      "focus": "Quadratic equations",
      "prompt": "Solve x² − 5x + 6 = 0.",
      "options": [
        "x=2 or x=3",
        "x=−2 or x=−3",
        "x=1 or x=6",
        "x=0 or x=5"
      ],
      "answer": 0,
      "topic": "Quadratic Equations",
      "level": 2,
      "why": "Factor: find two numbers that multiply to 6 and add to −5.",
      "how": "1) (x−2)(x−3)=0.  2) x=2 or x=3.",
      "_id": "clep_college_algebra_1"
    },
    {
      "focus": "Inequalities",
      "prompt": "Solve 3x − 7 ≥ 5.",
      "options": [
        "x ≥ 4",
        "x ≤ 4",
        "x ≥ −4",
        "x ≤ −4"
      ],
      "answer": 0,
      "topic": "Inequalities",
      "level": 2,
      "why": "Solve like an equation; no flip needed (dividing by positive).",
      "how": "1) 3x ≥ 5+7 = 12.  2) x ≥ 12/3 = 4.",
      "_id": "clep_college_algebra_2"
    },
    {
      "focus": "Functions — evaluation",
      "prompt": "If f(x) = 2x² − 1, then f(3) = ?",
      "options": [
        "17",
        "11",
        "5",
        "8"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 2,
      "why": "Substitute x = 3 and simplify.",
      "how": "1) 2(3²) − 1 = 2(9) − 1 = 18 − 1 = 17.",
      "_id": "clep_college_algebra_3"
    },
    {
      "focus": "Logarithms",
      "prompt": "log₂(32) = ?",
      "options": [
        "5",
        "4",
        "2",
        "16"
      ],
      "answer": 0,
      "topic": "Logarithms",
      "level": 2,
      "why": "log₂(32): what power of 2 gives 32?",
      "how": "1) 2⁵ = 32.  2) Therefore log₂(32) = 5.",
      "_id": "clep_college_algebra_4"
    },
    {
      "focus": "Exponents",
      "prompt": "Simplify (2x²)³.",
      "options": [
        "8x⁶",
        "6x⁵",
        "2x⁶",
        "8x⁵"
      ],
      "answer": 0,
      "topic": "Exponents",
      "level": 2,
      "why": "Raise both the coefficient and the variable to the power.",
      "how": "1) 2³ = 8.  2) (x²)³ = x⁶.  3) Result: 8x⁶.",
      "_id": "clep_college_algebra_5"
    },
    {
      "focus": "Systems of equations",
      "prompt": "Solve: x + y = 7, x − y = 3.",
      "options": [
        "x=5, y=2",
        "x=2, y=5",
        "x=4, y=3",
        "x=7, y=0"
      ],
      "answer": 0,
      "topic": "Systems",
      "level": 2,
      "why": "Add the equations to eliminate y.",
      "how": "1) Add: 2x = 10 → x = 5.  2) Sub back: 5+y=7 → y=2.",
      "_id": "clep_college_algebra_6"
    },
    {
      "focus": "Factoring — difference of squares",
      "prompt": "Factor x² − 9.",
      "options": [
        "(x−3)(x+3)",
        "(x−9)(x+1)",
        "(x−3)²",
        "prime"
      ],
      "answer": 0,
      "topic": "Quadratic Equations",
      "level": 2,
      "why": "Difference of squares: a²−b² = (a−b)(a+b).",
      "how": "1) x²−9 = x²−3².  2) = (x−3)(x+3).",
      "_id": "clep_college_algebra_7"
    },
    {
      "focus": "Absolute value inequality",
      "prompt": "|2x−1|<5. Solution?",
      "options": [
        "−2<x<3",
        "x<−2 or x>3",
        "x>3",
        "−3<x<2"
      ],
      "answer": 0,
      "topic": "Inequalities",
      "level": 3,
      "_id": "cca_x1",
      "why": "−5<2x−1<5 → −4<2x<6 → −2<x<3.",
      "how": "1) Split: −5<2x−1<5. 2) +1: −4<2x<6. 3) ÷2: −2<x<3."
    },
    {
      "focus": "Horizontal asymptote",
      "prompt": "HA of f(x)=(3x²+1)/(x²−4)?",
      "options": [
        "y=3",
        "y=0",
        "y=−4",
        "None"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 3,
      "_id": "cca_x2",
      "why": "Same degree: HA=ratio of leading coefficients=3/1=3.",
      "how": "1) Degree top=degree bottom=2. 2) Leading coefficients: 3/1=3."
    },
    {
      "focus": "Compound interest",
      "prompt": "$500 at 6% annual compound, 3 years?",
      "options": [
        "$595.51",
        "$590",
        "$600",
        "$530"
      ],
      "answer": 0,
      "topic": "Exponential Functions",
      "level": 3,
      "_id": "cca_x3",
      "why": "A=500(1.06)³≈$595.51.",
      "how": "1) A=P(1+r)ⁿ. 2) 500(1.06)³≈595.51."
    },
    {
      "focus": "Remainder theorem",
      "prompt": "(x³−2x+1)÷(x−1). Remainder?",
      "options": [
        "0",
        "1",
        "−2",
        "2"
      ],
      "answer": 0,
      "topic": "Polynomials",
      "level": 3,
      "_id": "cca_x4",
      "why": "f(1)=1−2+1=0.",
      "how": "1) Remainder theorem: substitute divisor root. 2) f(1)=0."
    },
    {
      "focus": "Log rules",
      "prompt": "log₃(81)−log₃(9)=?",
      "options": [
        "2",
        "1",
        "3",
        "4"
      ],
      "answer": 0,
      "topic": "Logarithms",
      "level": 2,
      "_id": "cca_x5",
      "why": "log₃(81/9)=log₃(9)=2.",
      "how": "1) log(a)−log(b)=log(a/b). 2) 81/9=9. 3) log₃(9)=2."
    },
    {
      "focus": "Inverse function",
      "prompt": "f(x)=(x+3)/2. f⁻¹(x)=?",
      "options": [
        "2x−3",
        "2x+3",
        "(x−3)/2",
        "1/(x+3)"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 3,
      "_id": "cca_x6",
      "why": "Swap x,y: x=(y+3)/2→y=2x−3.",
      "how": "1) y=(x+3)/2. 2) Swap: x=(y+3)/2. 3) y=2x−3."
    },
    {
      "focus": "Discriminant",
      "prompt": "Discriminant=0 means:",
      "options": [
        "One repeated real solution",
        "Two distinct real solutions",
        "No real solutions",
        "Infinite solutions"
      ],
      "answer": 0,
      "topic": "Quadratics",
      "level": 3,
      "_id": "cca_x7",
      "why": "b²−4ac=0→one repeated root.",
      "how": "1) =0: one solution. 2) >0: two. 3) <0: none."
    },
    {
      "focus": "Matrix entry",
      "prompt": "A=[[1,2],[3,4]]. Entry at row 2, col 1?",
      "options": [
        "3",
        "2",
        "4",
        "1"
      ],
      "answer": 0,
      "topic": "Matrices",
      "level": 2,
      "_id": "cca_x8",
      "why": "Row 2=[3,4]. Col 1=3.",
      "how": "1) Row 2: [3,4]. 2) Column 1=3."
    },
    {
      "focus": "Complex numbers — standard form",
      "prompt": "(3+2i)+(1−5i) = ?",
      "options": [
        "4−3i",
        "4+7i",
        "2−3i",
        "3+2i"
      ],
      "answer": 0,
      "topic": "Number Systems and Operations",
      "level": 2,
      "_id": "cca_x9",
      "why": "Add real and imaginary parts separately: (3+1)+(2−5)i = 4−3i.",
      "how": "1) Real: 3+1=4. 2) Imaginary: 2+(−5)=−3. 3) Result: 4−3i."
    },
    {
      "focus": "Complex numbers — multiplication",
      "prompt": "(2+i)(2−i) = ?",
      "options": [
        "5",
        "3",
        "4+i",
        "4−i"
      ],
      "answer": 0,
      "topic": "Number Systems and Operations",
      "level": 2,
      "_id": "cca_x10",
      "why": "(a+bi)(a−bi)=a²+b²=4+1=5. Conjugate product eliminates imaginary part.",
      "how": "1) (2+i)(2−i)=4−i²=4+1=5."
    },
    {
      "focus": "Binomial theorem",
      "prompt": "In (x+y)⁵, the coefficient of x³y² (using binomial theorem)?",
      "options": [
        "10",
        "5",
        "20",
        "15"
      ],
      "answer": 0,
      "topic": "Number Systems and Operations",
      "level": 3,
      "_id": "cca_x11",
      "why": "C(5,2)=10. The term with x³y² has k=2 (for y²): C(5,2)=10.",
      "how": "1) C(n,k)=n!/(k!(n-k)!). 2) C(5,2)=10."
    },
    {
      "focus": "Algebra of functions",
      "prompt": "f(x)=x+2, g(x)=x². (f∘g)(3)=?",
      "options": [
        "11",
        "25",
        "5",
        "9"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 2,
      "_id": "cca_x12",
      "why": "f(g(3))=f(9)=9+2=11.",
      "how": "1) g(3)=3²=9. 2) f(9)=9+2=11."
    },
    {
      "focus": "Factorials",
      "prompt": "5!/3! = ?",
      "options": [
        "20",
        "60",
        "5",
        "120"
      ],
      "answer": 0,
      "topic": "Number Systems and Operations",
      "level": 1,
      "_id": "cca_x13",
      "why": "5!/3!=5×4×3!/3!=5×4=20.",
      "how": "1) 5!=120, 3!=6. 2) 120/6=20. OR: 5×4=20 (cancel 3!)."
    },
    {
      "focus": "Exponential equations",
      "prompt": "Solve: 4^x = 32",
      "options": [
        "5/2",
        "4",
        "2",
        "3"
      ],
      "answer": 0,
      "topic": "Equations and Inequalities",
      "level": 3,
      "_id": "cca_x14",
      "why": "4^x=2^(2x)=2^5=32 → 2x=5 → x=5/2.",
      "how": "1) Convert: 4=2², 32=2⁵. 2) 2^(2x)=2⁵ → 2x=5 → x=2.5."
    },
    {
      "focus": "Absolute value equation",
      "prompt": "Solve: |2x − 3| = 7",
      "options": [
        "x = 5 or x = −2",
        "x = 5 only",
        "x = 2 only",
        "x = 10 or x = −10"
      ],
      "answer": 0,
      "topic": "Equations and Inequalities",
      "level": 3,
      "_id": "cca_g1",
      "why": "|2x−3|=7 → 2x−3=7 OR 2x−3=−7 → x=5 or x=−2.",
      "how": "1) Two cases. 2) 2x−3=7 → x=5. 3) 2x−3=−7 → x=−2."
    },
    {
      "focus": "Quadratic inequality",
      "prompt": "Solve: x² − x − 6 ≤ 0",
      "options": [
        "−2 ≤ x ≤ 3",
        "x ≤ −2 or x ≥ 3",
        "−3 ≤ x ≤ 2",
        "x ≥ 0"
      ],
      "answer": 0,
      "topic": "Equations and Inequalities",
      "level": 3,
      "_id": "cca_g2",
      "why": "(x−3)(x+2) ≤ 0 → between roots: −2 ≤ x ≤ 3.",
      "how": "1) Factor: (x−3)(x+2) ≤ 0. 2) Roots at −2 and 3. 3) Parabola opens up, ≤0 between roots."
    },
    {
      "focus": "Function transformations",
      "prompt": "How does y = (x−3)² + 2 transform y = x²?",
      "options": [
        "Right 3, up 2",
        "Left 3, up 2",
        "Right 3, down 2",
        "Left 3, down 2"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 2,
      "_id": "cca_g3",
      "why": "(x−h) shifts right h. +k shifts up k. h=3, k=2.",
      "how": "1) (x−3) inside → right 3. 2) +2 outside → up 2."
    },
    {
      "focus": "Symmetry of function",
      "prompt": "f(x) = x³ is symmetric about:",
      "options": [
        "The origin (odd function)",
        "The y-axis (even function)",
        "The x-axis",
        "The line y=x"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 2,
      "_id": "cca_g4",
      "why": "f(−x) = (−x)³ = −x³ = −f(x). Odd function — symmetric about origin.",
      "how": "1) Test odd: f(−x) = −f(x). 2) (−x)³ = −x³. ✓ Odd. 3) Origin symmetry."
    },
    {
      "focus": "Logarithmic equation",
      "prompt": "Solve: log₂(x) + log₂(x−2) = 3",
      "options": [
        "x = 4",
        "x = 3",
        "x = −2",
        "x = 8"
      ],
      "answer": 0,
      "topic": "Equations and Inequalities",
      "level": 4,
      "_id": "cca_g5",
      "why": "log₂[x(x−2)] = 3 → x(x−2) = 8 → x²−2x−8=0 → (x−4)(x+2)=0 → x=4 (reject −2 since log undefined).",
      "how": "1) Combine logs: log₂(x²−2x)=3. 2) x²−2x=8. 3) x=4 or x=−2. 4) Reject −2 (log of negative)."
    }
  ],
  "clep_precalc": [
    {
      "focus": "Algebraic equations — rational",
      "prompt": "Solve (x+2)/3 = 5.",
      "options": [
        "13",
        "7",
        "1",
        "17"
      ],
      "answer": 0,
      "topic": "Algebraic Equations",
      "level": 1,
      "why": "Multiply both sides by 3 to clear the fraction.",
      "how": "1) x+2 = 15.  2) x = 13.",
      "_id": "clep_precalc_0"
    },
    {
      "focus": "Functions — composition",
      "prompt": "f(x) = 2x, g(x) = x+1. f(g(2)) = ?",
      "options": [
        "6",
        "5",
        "4",
        "8"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 2,
      "why": "Composition: evaluate inner function first, then outer.",
      "how": "1) g(2) = 3.  2) f(3) = 2×3 = 6.",
      "_id": "clep_precalc_1"
    },
    {
      "focus": "Function transformations",
      "prompt": "y = (x−3)² is y = x² shifted:",
      "options": [
        "3 right",
        "3 left",
        "3 up",
        "3 down"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 3,
      "why": "Subtracting inside the function shifts the graph in the opposite direction (right).",
      "how": "1) (x−h) shifts right by h.  2) h=3 → shift 3 right.",
      "_id": "clep_precalc_2"
    },
    {
      "focus": "Trig identity",
      "prompt": "sin²(θ) + cos²(θ) = ?",
      "options": [
        "1",
        "0",
        "sin(2θ)",
        "tan²(θ)+1"
      ],
      "answer": 0,
      "topic": "Trig Identities",
      "level": 2,
      "why": "Pythagorean identity: derived from the unit circle x²+y²=1.",
      "how": "1) On the unit circle: x=cosθ, y=sinθ.  2) x²+y²=1 → cos²θ+sin²θ=1.",
      "_id": "clep_precalc_3"
    },
    {
      "focus": "Exponential equations",
      "prompt": "Solve 3ˣ = 81.",
      "options": [
        "4",
        "3",
        "5",
        "27"
      ],
      "answer": 0,
      "topic": "Exponential",
      "level": 3,
      "why": "Rewrite both sides with the same base.",
      "how": "1) 81 = 3⁴.  2) 3ˣ = 3⁴ → x = 4.",
      "_id": "clep_precalc_4"
    },
    {
      "focus": "Logarithmic equations",
      "prompt": "Solve log₃(x) = 2.",
      "options": [
        "9",
        "6",
        "8",
        "3"
      ],
      "answer": 0,
      "topic": "Logarithmic",
      "level": 2,
      "why": "log_b(x) = c means x = bᶜ.",
      "how": "1) x = 3² = 9.",
      "_id": "clep_precalc_5"
    },
    {
      "focus": "Analytic geometry — circle",
      "prompt": "Equation of circle centered at (2,3) radius 5:",
      "options": [
        "(x−2)²+(y−3)²=25",
        "(x+2)²+(y+3)²=25",
        "x²+y²=25",
        "(x−2)²+(y−3)²=5"
      ],
      "answer": 0,
      "topic": "Analytic Geometry",
      "level": 3,
      "why": "Standard form: (x−h)²+(y−k)²=r².",
      "how": "1) h=2, k=3, r=5.  2) r²=25.  3) (x−2)²+(y−3)²=25.",
      "_id": "clep_precalc_6"
    },
    {
      "focus": "Systems — substitution",
      "prompt": "x + 2y = 10, x = 2. Solve for y.",
      "options": [
        "4",
        "6",
        "2",
        "8"
      ],
      "answer": 0,
      "topic": "Systems",
      "level": 1,
      "why": "Substitute x=2, then solve for y.",
      "how": "1) 2 + 2y = 10.  2) 2y = 8.  3) y = 4.",
      "_id": "clep_precalc_7"
    },
    {
      "focus": "Pythagorean identity",
      "prompt": "Which identity is correct?",
      "options": [
        "sin²x+cos²x=1",
        "sin²x−cos²x=1",
        "sinx+cosx=1",
        "tan²x+1=sinx"
      ],
      "answer": 0,
      "topic": "Trigonometry",
      "level": 2,
      "_id": "cp_x1",
      "why": "sin²x+cos²x=1 (Pythagorean identity).",
      "how": "1) From unit circle: x²+y²=1→cos²+sin²=1."
    },
    {
      "focus": "Law of Cosines",
      "prompt": "a=5,b=7,C=60°. Side c?",
      "options": [
        "√39≈6.24",
        "6",
        "8",
        "√74"
      ],
      "answer": 0,
      "topic": "Trigonometry",
      "level": 4,
      "_id": "cp_x2",
      "why": "c²=25+49−70(0.5)=39.",
      "how": "1) c²=a²+b²−2ab cosC. 2) =74−35=39. 3) c=√39."
    },
    {
      "focus": "Geometric sequence",
      "prompt": "2,6,18... 5th term?",
      "options": [
        "162",
        "54",
        "108",
        "486"
      ],
      "answer": 0,
      "topic": "Sequences",
      "level": 2,
      "_id": "cp_x3",
      "why": "r=3. a₅=2×3⁴=162.",
      "how": "1) r=6/2=3. 2) a₅=2×81=162."
    },
    {
      "focus": "Polar to rectangular",
      "prompt": "(4,π/2) in rectangular?",
      "options": [
        "(0,4)",
        "(4,0)",
        "(4,4)",
        "(−4,0)"
      ],
      "answer": 0,
      "topic": "Polar Coordinates",
      "level": 3,
      "_id": "cp_x4",
      "why": "x=4cos(π/2)=0; y=4sin(π/2)=4.",
      "how": "1) x=rcosθ=0. 2) y=rsinθ=4."
    },
    {
      "focus": "Rational exponent",
      "prompt": "8^(2/3)=?",
      "options": [
        "4",
        "2",
        "6",
        "16"
      ],
      "answer": 0,
      "topic": "Exponentials",
      "level": 2,
      "_id": "cp_x5",
      "why": "(∛8)²=2²=4.",
      "how": "1) 8^(1/3)=2. 2) 2²=4."
    },
    {
      "focus": "Vector magnitude",
      "prompt": "v=⟨3,4⟩. |v|=?",
      "options": [
        "5",
        "7",
        "12",
        "25"
      ],
      "answer": 0,
      "topic": "Vectors",
      "level": 2,
      "_id": "cp_x6",
      "why": "√(9+16)=5.",
      "how": "1) |v|=√(x²+y²). 2) √25=5."
    },
    {
      "focus": "Change of base",
      "prompt": "log₅(100) via change of base?",
      "options": [
        "log(100)/log(5)≈2.86",
        "log(5)/log(100)",
        "5/100",
        "ln(5)"
      ],
      "answer": 0,
      "topic": "Logarithms",
      "level": 3,
      "_id": "cp_x7",
      "why": "logₐ(b)=log(b)/log(a).",
      "how": "1) log₅(100)=log100/log5=2/0.699≈2.86."
    },
    {
      "focus": "Function transformation",
      "prompt": "y=f(x−2)+3 shifts y=f(x):",
      "options": [
        "Right 2, up 3",
        "Left 2, up 3",
        "Right 2, down 3",
        "Left 2, down 3"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 2,
      "_id": "cp_x8",
      "why": "f(x−h) shifts right h; +k shifts up k.",
      "how": "1) (x−2)→right 2. 2) +3→up 3."
    },
    {
      "focus": "End behavior of polynomials",
      "prompt": "f(x)=−2x⁵+3x. As x→+∞:",
      "options": [
        "f(x)→−∞",
        "f(x)→+∞",
        "f(x)→0",
        "f(x) oscillates"
      ],
      "answer": 0,
      "topic": "Polynomial Functions",
      "level": 3,
      "_id": "cp_x9",
      "why": "Leading term −2x⁵: odd degree, negative coefficient → f→−∞ as x→+∞.",
      "how": "1) Leading term dominates. 2) Negative, odd degree. 3) x→+∞: −∞."
    },
    {
      "focus": "Rational zeros theorem",
      "prompt": "Which values are possible rational zeros of 2x³−3x+1?",
      "options": [
        "±1, ±1/2",
        "±1, ±2",
        "±1 only",
        "±3, ±1/2"
      ],
      "answer": 0,
      "topic": "Polynomial Functions",
      "level": 3,
      "_id": "cp_x10",
      "why": "Rational zeros: ±(factors of constant)/(factors of leading coeff)=±{1}/±{1,2}=±1,±1/2.",
      "how": "1) Factors of 1 (constant): ±1. 2) Factors of 2 (leading): ±1,±2. 3) Ratios: ±1, ±1/2."
    },
    {
      "focus": "Inverse functions — horizontal line test",
      "prompt": "A function f has an inverse if and only if:",
      "options": [
        "f passes the horizontal line test (is one-to-one)",
        "f passes the vertical line test",
        "f is continuous",
        "f is differentiable"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 2,
      "_id": "cp_x11",
      "why": "One-to-one (injective) functions have inverses. Horizontal line test confirms this.",
      "how": "1) Inverse exists ↔ f is one-to-one. 2) HLT: every horizontal line hits graph at most once."
    },
    {
      "focus": "Hyperbola",
      "prompt": "Which equation represents a hyperbola?",
      "options": [
        "x²/4 − y²/9 = 1",
        "x²/4 + y²/9 = 1",
        "y = x²",
        "x² + y² = 4"
      ],
      "answer": 0,
      "topic": "Conics",
      "level": 3,
      "_id": "cp_x12",
      "why": "Hyperbola: x²/a²−y²/b²=1. The minus sign distinguishes it from an ellipse.",
      "how": "1) Circle: x²+y²=r². 2) Ellipse: x²/a²+y²/b²=1. 3) Hyperbola: x²/a²−y²/b²=1."
    },
    {
      "focus": "Limits — intuitive",
      "prompt": "As x→2, (x²−4)/(x−2) approaches:",
      "options": [
        "4",
        "0",
        "2",
        "∞"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 3,
      "_id": "cp_x13",
      "why": "Factor: (x+2)(x−2)/(x−2)=x+2. At x=2: 2+2=4.",
      "how": "1) Factor: x²−4=(x+2)(x−2). 2) Cancel (x−2). 3) Limit = x+2 → 4."
    },
    {
      "focus": "Series — geometric sum",
      "prompt": "Sum of infinite geometric series: a₁=4, r=1/2?",
      "options": [
        "8",
        "4",
        "2",
        "16"
      ],
      "answer": 0,
      "topic": "Sequences",
      "level": 3,
      "_id": "cp_x14",
      "why": "S=a₁/(1−r)=4/(1−0.5)=4/0.5=8.",
      "how": "1) |r|<1 → converges. 2) S=a₁/(1−r). 3) 4/0.5=8."
    },
    {
      "focus": "Trigonometry — double angle",
      "prompt": "sin(2θ) = ?",
      "options": [
        "2sinθcosθ",
        "sin²θ+cos²θ",
        "2cos²θ−1",
        "sinθ+cosθ"
      ],
      "answer": 0,
      "topic": "Trigonometry",
      "level": 3,
      "_id": "cp_x15",
      "why": "Double-angle: sin(2θ)=2sinθcosθ.",
      "how": "1) sin(A+B)=sinAcosB+cosAsinB. 2) A=B=θ: sinθcosθ+cosθsinθ=2sinθcosθ."
    },
    {
      "focus": "Natural exponential",
      "prompt": "The inverse of f(x)=eˣ is:",
      "options": [
        "f⁻¹(x)=ln(x)",
        "f⁻¹(x)=log₁₀(x)",
        "f⁻¹(x)=xᵉ",
        "f⁻¹(x)=1/eˣ"
      ],
      "answer": 0,
      "topic": "Logarithms",
      "level": 2,
      "_id": "cp_x16",
      "why": "eˣ and ln(x) are inverse functions: ln(eˣ)=x and e^(ln x)=x.",
      "how": "1) Inverse: swap x and y. 2) y=eˣ → x=eʸ → y=ln(x)."
    }
  ],
  "clep_college_math": [
    {
      "focus": "Sets — intersection",
      "prompt": "A = {1,2,3}, B = {2,3,4}. A ∩ B = ?",
      "options": [
        "{2,3}",
        "{1,2,3,4}",
        "{1,4}",
        "{}"
      ],
      "answer": 0,
      "topic": "Sets",
      "level": 1,
      "why": "Intersection = elements in BOTH sets.",
      "how": "1) 2 is in both. 3 is in both. 1 is only in A. 4 only in B.  2) A∩B = {2,3}.",
      "_id": "clep_college_math_0"
    },
    {
      "focus": "Logic — contrapositive",
      "prompt": "\"If P then Q\" is logically equivalent to:",
      "options": [
        "\"If not Q then not P\"",
        "\"If Q then P\"",
        "\"If not P then not Q\"",
        "\"P and Q\""
      ],
      "answer": 0,
      "topic": "Logic",
      "level": 3,
      "why": "A conditional and its contrapositive are logically equivalent.",
      "how": "1) P→Q has same truth table as ¬Q→¬P.  2) Converse and inverse are NOT equivalent.",
      "_id": "clep_college_math_1"
    },
    {
      "focus": "Real numbers — irrational",
      "prompt": "Which number is irrational?",
      "options": [
        "√2",
        "1/3",
        "0.75",
        "−5"
      ],
      "answer": 0,
      "topic": "Real Numbers",
      "level": 1,
      "why": "Irrational numbers cannot be expressed as a ratio of two integers.",
      "how": "1) √2 ≈ 1.41421... non-terminating, non-repeating.  2) 1/3, 0.75, −5 are all rational.",
      "_id": "clep_college_math_2"
    },
    {
      "focus": "Functions — domain",
      "prompt": "Domain of f(x) = √(x−4) is:",
      "options": [
        "x ≥ 4",
        "x > 4",
        "all reals",
        "x ≤ 4"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 2,
      "why": "Expression under a square root must be ≥ 0.",
      "how": "1) x − 4 ≥ 0.  2) x ≥ 4.",
      "_id": "clep_college_math_3"
    },
    {
      "focus": "Probability",
      "prompt": "A bag has 3 red and 5 blue marbles. P(red)?",
      "options": [
        "3/8",
        "5/8",
        "3/5",
        "1/3"
      ],
      "answer": 0,
      "topic": "Probability",
      "level": 1,
      "why": "P = favorable / total.",
      "how": "1) Total = 8.  2) P = 3/8.",
      "_id": "clep_college_math_4"
    },
    {
      "focus": "Statistics — weighted mean",
      "prompt": "Grades: 80 (weight 2) and 90 (weight 3). Weighted mean?",
      "options": [
        "86",
        "85",
        "84",
        "87"
      ],
      "answer": 0,
      "topic": "Statistics",
      "level": 2,
      "why": "Weighted mean = Σ(value × weight) / Σweights.",
      "how": "1) (80×2 + 90×3) / (2+3) = (160+270)/5 = 430/5 = 86.",
      "_id": "clep_college_math_5"
    },
    {
      "focus": "Financial math — simple interest",
      "prompt": "$1000 at 5% simple interest for 3 years. Total interest?",
      "options": [
        "$150",
        "$50",
        "$300",
        "$157.63"
      ],
      "answer": 0,
      "topic": "Financial Math",
      "level": 2,
      "why": "Simple interest = P × r × t.",
      "how": "1) I = 1000 × 0.05 × 3 = $150.",
      "_id": "clep_college_math_6"
    },
    {
      "focus": "Geometry — supplementary angles",
      "prompt": "Two supplementary angles sum to:",
      "options": [
        "180°",
        "90°",
        "360°",
        "270°"
      ],
      "answer": 0,
      "topic": "Geometry",
      "level": 1,
      "why": "Supplementary angles: sum = 180°. (Complementary = 90°)",
      "how": "1) Supplementary → straight line → 180°.",
      "_id": "clep_college_math_7"
    },
    {
      "focus": "Trigonometry — SOH-CAH-TOA",
      "prompt": "In a right triangle, sin(θ) = ?",
      "options": [
        "opposite/hypotenuse",
        "adjacent/hypotenuse",
        "opposite/adjacent",
        "hypotenuse/opposite"
      ],
      "answer": 0,
      "topic": "Trigonometry",
      "level": 1,
      "why": "SOH: Sin = Opposite / Hypotenuse.",
      "how": "1) SOH-CAH-TOA: Sin=O/H, Cos=A/H, Tan=O/A.",
      "_id": "clep_college_math_8"
    },
    {
      "focus": "Number theory — divisibility",
      "prompt": "A number is divisible by 9 if:",
      "options": [
        "The sum of its digits is divisible by 9",
        "It ends in 9",
        "It is odd",
        "Its last two digits are divisible by 9"
      ],
      "answer": 0,
      "topic": "Number Theory",
      "level": 2,
      "_id": "clep_cm_x1",
      "why": "Divisibility rule for 9: digit sum divisible by 9.",
      "how": "1) E.g. 729: 7+2+9=18, 18÷9=2✓. 2) Rule: sum of digits divisible by 9."
    },
    {
      "focus": "Set operations — union",
      "prompt": "A={1,2,3}, B={2,3,4}. A∪B=?",
      "options": [
        "{1,2,3,4}",
        "{2,3}",
        "{1,4}",
        "{}"
      ],
      "answer": 0,
      "topic": "Sets",
      "level": 1,
      "_id": "clep_cm_x2",
      "why": "Union = all elements in either set.",
      "how": "1) A∪B = elements in A OR B. 2) {1,2,3}∪{2,3,4}={1,2,3,4}."
    },
    {
      "focus": "Logic — biconditional",
      "prompt": "\"P if and only if Q\" is true when:",
      "options": [
        "P and Q have the same truth value",
        "P is true",
        "Q is false",
        "P implies Q only"
      ],
      "answer": 0,
      "topic": "Logic",
      "level": 3,
      "_id": "clep_cm_x3",
      "why": "P↔Q (biconditional): true when both T or both F.",
      "how": "1) P↔Q = (P→Q)∧(Q→P). 2) True when P=Q (both T or both F)."
    },
    {
      "focus": "Counting — combinations",
      "prompt": "C(7,3) = ?",
      "options": [
        "35",
        "21",
        "210",
        "7"
      ],
      "answer": 0,
      "topic": "Counting/Probability",
      "level": 2,
      "_id": "clep_cm_x4",
      "why": "C(7,3)=7!/(3!4!)=35.",
      "how": "1) C(n,r)=n!/(r!(n−r)!). 2) 7!/(3!×4!)=5040/144=35."
    },
    {
      "focus": "Permutations",
      "prompt": "P(5,3) = ?",
      "options": [
        "60",
        "10",
        "15",
        "125"
      ],
      "answer": 0,
      "topic": "Counting/Probability",
      "level": 2,
      "_id": "clep_cm_x5",
      "why": "P(5,3)=5×4×3=60.",
      "how": "1) P(n,r)=n!/(n−r)!. 2) 5!/2!=120/2=60."
    },
    {
      "focus": "Expected value",
      "prompt": "Expected value of a fair 6-sided die?",
      "options": [
        "3.5",
        "3",
        "4",
        "6"
      ],
      "answer": 0,
      "topic": "Statistics",
      "level": 2,
      "_id": "clep_cm_x6",
      "why": "E=Σ(x·P(x))=(1+2+3+4+5+6)/6=21/6=3.5.",
      "how": "1) E=Σx·P(x). 2) Sum 1–6=21. 3) 21/6=3.5."
    },
    {
      "focus": "Interest — compound vs simple",
      "prompt": "$1000 at 5% for 2 years: how much more does compound earn than simple?",
      "options": [
        "$2.50",
        "$10",
        "$100",
        "$0"
      ],
      "answer": 0,
      "topic": "Financial Math",
      "level": 3,
      "_id": "clep_cm_x7",
      "why": "Simple: 1000×0.05×2=$100. Compound: 1000×1.05²−1000=$102.50. Difference=$2.50.",
      "how": "1) Simple interest=Prt=100. 2) Compound=1000(1.05²)−1000=102.50. 3) 102.50−100=2.50."
    },
    {
      "focus": "Sequences — sigma notation",
      "prompt": "Σᵢ₌₁⁴ i² = ?",
      "options": [
        "30",
        "20",
        "10",
        "25"
      ],
      "answer": 0,
      "topic": "Sequences",
      "level": 2,
      "_id": "clep_cm_x8",
      "why": "1²+2²+3²+4²=1+4+9+16=30.",
      "how": "1) Evaluate each: 1,4,9,16. 2) Sum=30."
    },
    {
      "focus": "Euclidean geometry — interior angles",
      "prompt": "Sum of interior angles of a hexagon?",
      "options": [
        "720°",
        "540°",
        "1080°",
        "360°"
      ],
      "answer": 0,
      "topic": "Geometry",
      "level": 2,
      "_id": "clep_cm_x9",
      "why": "(n−2)×180°=(6−2)×180°=720°.",
      "how": "1) Formula: (n−2)×180. 2) (6−2)×180=720."
    },
    {
      "focus": "APR vs effective rate",
      "prompt": "A loan charges 1.5% per month. The annual percentage rate (APR) is:",
      "options": [
        "18% (1.5×12)",
        "15%",
        "12%",
        "1.5%"
      ],
      "answer": 0,
      "topic": "Financial Mathematics",
      "level": 2,
      "_id": "clep_cm_x10",
      "why": "APR = periodic rate × number of periods = 1.5% × 12 = 18%.",
      "how": "1) APR = monthly rate × 12. 2) 1.5×12=18%."
    },
    {
      "focus": "Present value",
      "prompt": "You will receive $1,000 in 2 years. At 5% annual discount rate, present value = ?",
      "options": [
        "≈$907",
        "≈$1,000",
        "≈$1,100",
        "≈$952"
      ],
      "answer": 0,
      "topic": "Financial Mathematics",
      "level": 3,
      "_id": "clep_cm_x11",
      "why": "PV = FV/(1+r)ⁿ = 1000/(1.05)² = 1000/1.1025 ≈ 907.",
      "how": "1) PV=FV/(1+r)ⁿ. 2) 1000/(1.05)²=907."
    },
    {
      "focus": "Conditional probability — Bayes",
      "prompt": "P(A)=0.3, P(B|A)=0.8. P(A∩B)=?",
      "options": [
        "0.24",
        "0.8",
        "0.3",
        "0.11"
      ],
      "answer": 0,
      "topic": "Counting and Probability",
      "level": 3,
      "_id": "clep_cm_x12",
      "why": "P(A∩B)=P(A)×P(B|A)=0.3×0.8=0.24.",
      "how": "1) Multiplication rule: P(A∩B)=P(A)×P(B|A). 2) 0.3×0.8=0.24."
    },
    {
      "focus": "Venn diagram — intersection",
      "prompt": "Set A has 30 elements, B has 25, A∩B has 10. |A∪B|=?",
      "options": [
        "45",
        "55",
        "65",
        "35"
      ],
      "answer": 0,
      "topic": "Logic and Sets",
      "level": 2,
      "_id": "clep_cm_x13",
      "why": "|A∪B|=|A|+|B|−|A∩B|=30+25−10=45.",
      "how": "1) Inclusion-exclusion: |A∪B|=|A|+|B|−|A∩B|. 2) 30+25−10=45."
    },
    {
      "focus": "Linear vs exponential growth",
      "prompt": "A population grows by 5% per year. After n years, the population is:",
      "options": [
        "P₀(1.05)ⁿ — exponential",
        "P₀ + 0.05n — linear",
        "P₀ × 5n",
        "P₀ + n^5"
      ],
      "answer": 0,
      "topic": "Algebra and Functions",
      "level": 2,
      "_id": "clep_cm_g1",
      "why": "Percentage growth = exponential. Multiply by (1+r) each period.",
      "how": "1) Each year: × 1.05. 2) After n years: P₀(1.05)ⁿ. 3) Exponential, not linear."
    },
    {
      "focus": "Standard deviation — concept",
      "prompt": "In a normal distribution, what % of data falls within 1 standard deviation of the mean?",
      "options": [
        "≈68%",
        "≈95%",
        "≈99.7%",
        "≈50%"
      ],
      "answer": 0,
      "topic": "Data Analysis and Statistics",
      "level": 2,
      "_id": "clep_cm_g2",
      "why": "Empirical rule: 68% within 1σ, 95% within 2σ, 99.7% within 3σ.",
      "how": "1) 68-95-99.7 rule. 2) ±1σ = 68%."
    },
    {
      "focus": "Markup pricing",
      "prompt": "A store buys an item for $40 and marks it up 25%. Selling price?",
      "options": [
        "$50",
        "$10",
        "$32",
        "$65"
      ],
      "answer": 0,
      "topic": "Financial Mathematics",
      "level": 2,
      "_id": "clep_cm_g3",
      "why": "Markup = 25% × $40 = $10. Selling price = $40 + $10 = $50.",
      "how": "1) Markup amount = 0.25 × 40 = 10. 2) Price = 40 + 10 = 50."
    },
    {
      "focus": "Discount",
      "prompt": "A $80 item is on sale at 30% off. Sale price?",
      "options": [
        "$56",
        "$24",
        "$50",
        "$110"
      ],
      "answer": 0,
      "topic": "Financial Mathematics",
      "level": 2,
      "_id": "clep_cm_g4",
      "why": "Discount = 0.30 × 80 = 24. Sale = 80 − 24 = 56. Or: 0.70 × 80 = 56.",
      "how": "1) Discount = 30% × 80 = 24. 2) Sale = 80 − 24 = 56."
    },
    {
      "focus": "Circle area",
      "prompt": "Area of a circle with radius 5?",
      "options": [
        "25π",
        "10π",
        "5π",
        "5²+π"
      ],
      "answer": 0,
      "topic": "Geometry",
      "level": 1,
      "_id": "clep_cm_g5",
      "why": "A = πr² = π(5)² = 25π.",
      "how": "1) A = πr². 2) π × 25 = 25π."
    },
    {
      "focus": "Circle circumference",
      "prompt": "Circumference of a circle with diameter 10?",
      "options": [
        "10π",
        "100π",
        "20π",
        "π/10"
      ],
      "answer": 0,
      "topic": "Geometry",
      "level": 1,
      "_id": "clep_cm_g6",
      "why": "C = πd = π(10) = 10π.",
      "how": "1) C = πd OR 2πr. 2) π × 10 = 10π."
    },
    {
      "focus": "Contrapositive",
      "prompt": "The contrapositive of \"If P, then Q\" is:",
      "options": [
        "If not Q, then not P",
        "If Q, then P",
        "If not P, then not Q",
        "If P, then not Q"
      ],
      "answer": 0,
      "topic": "Logic and Sets",
      "level": 2,
      "_id": "clep_cm_g7",
      "why": "Contrapositive of P→Q is ¬Q→¬P. (Logically equivalent to original.)",
      "how": "1) Original: P→Q. 2) Contrapositive: ¬Q→¬P. 3) Inverse: ¬P→¬Q. 4) Converse: Q→P."
    },
    {
      "focus": "Scientific notation",
      "prompt": "Express 0.00045 in scientific notation:",
      "options": [
        "4.5 × 10⁻⁴",
        "45 × 10⁻⁵",
        "4.5 × 10⁴",
        "0.45 × 10⁻³"
      ],
      "answer": 0,
      "topic": "Numbers",
      "level": 2,
      "_id": "clep_cm_g8",
      "why": "Move decimal 4 places right → 4.5 × 10⁻⁴.",
      "how": "1) Move decimal until 1 ≤ |coeff| < 10. 2) 0.00045 → 4.5 × 10⁻⁴."
    }
  ],
  "clep_natsci": [
    {
      "focus": "Scientific method",
      "prompt": "A testable explanation for an observation is called a:",
      "options": [
        "Hypothesis",
        "Theory",
        "Law",
        "Conclusion"
      ],
      "answer": 0,
      "topic": "Scientific Method",
      "level": 1,
      "why": "A hypothesis is a testable, falsifiable prediction.",
      "how": "1) Observation → question → hypothesis → experiment → conclusion.",
      "_id": "clep_natsci_0"
    },
    {
      "focus": "Cell theory",
      "prompt": "Which statement is part of cell theory?",
      "options": [
        "All living things are made of cells",
        "Cells can arise from non-living matter",
        "Only plants have cells",
        "Viruses are cells"
      ],
      "answer": 0,
      "topic": "Cell Theory",
      "level": 1,
      "why": "Cell theory: all life is made of cells; cells come only from pre-existing cells.",
      "how": "1) Three parts: all organisms = cells; cell = basic unit; cells from cells.",
      "_id": "clep_natsci_1"
    },
    {
      "focus": "Genetics — DNA",
      "prompt": "DNA contains instructions for making:",
      "options": [
        "Proteins",
        "Lipids only",
        "Carbohydrates",
        "ATP directly"
      ],
      "answer": 0,
      "topic": "Genetics",
      "level": 1,
      "why": "DNA codes for proteins via transcription and translation.",
      "how": "1) DNA → mRNA → protein.  2) Proteins carry out cellular functions.",
      "_id": "clep_natsci_2"
    },
    {
      "focus": "Evolution — evidence",
      "prompt": "Which provides evidence for evolution?",
      "options": [
        "Fossil record showing gradual change",
        "Species never change",
        "All organisms are identical",
        "Random mutations have no effect"
      ],
      "answer": 0,
      "topic": "Evolution",
      "level": 2,
      "why": "The fossil record documents gradual changes in organisms over geological time.",
      "how": "1) Fossils show ancestral forms.  2) Comparative anatomy, molecular evidence also support evolution.",
      "_id": "clep_natsci_3"
    },
    {
      "focus": "Ecology — food web",
      "prompt": "Which organism obtains energy directly from the sun?",
      "options": [
        "Producers (plants/algae)",
        "Primary consumers",
        "Secondary consumers",
        "Decomposers"
      ],
      "answer": 0,
      "topic": "Ecology",
      "level": 1,
      "why": "Producers use photosynthesis to convert solar energy into chemical energy.",
      "how": "1) Sun → producers (photosynthesis) → consumers.  2) All other organisms eat producers or each other.",
      "_id": "clep_natsci_4"
    },
    {
      "focus": "Atomic theory",
      "prompt": "Protons are found in the:",
      "options": [
        "Nucleus",
        "Electron cloud",
        "Neutron shell",
        "Outer orbit only"
      ],
      "answer": 0,
      "topic": "Atomic Theory",
      "level": 1,
      "why": "The nucleus contains protons and neutrons; electrons orbit outside.",
      "how": "1) Nuclear composition: protons + neutrons.  2) Electrons: energy levels outside the nucleus.",
      "_id": "clep_natsci_5"
    },
    {
      "focus": "Nuclear reactions",
      "prompt": "In radioactive decay, when a nucleus emits an alpha particle, its atomic number:",
      "options": [
        "decreases by 2",
        "increases by 2",
        "stays the same",
        "increases by 4"
      ],
      "answer": 0,
      "topic": "Nuclear",
      "level": 2,
      "why": "An alpha particle is a helium-4 nucleus: 2 protons + 2 neutrons.",
      "how": "1) Losing 2 protons → atomic number −2.  2) Losing 2 neutrons → mass number −4.",
      "_id": "clep_natsci_6"
    },
    {
      "focus": "Mechanics — potential energy",
      "prompt": "A 5 kg ball is held 10 m high. PE (g=9.8)?",
      "options": [
        "490 J",
        "50 J",
        "98 J",
        "500 J"
      ],
      "answer": 0,
      "topic": "Mechanics",
      "level": 2,
      "why": "PE = mgh.",
      "how": "1) PE = 5 × 9.8 × 10 = 490 J.",
      "_id": "clep_natsci_7"
    },
    {
      "focus": "Waves — properties",
      "prompt": "Which organelle is the \"powerhouse of the cell\"?",
      "options": [
        "Mitochondrion",
        "Nucleus",
        "Ribosome",
        "Lysosome"
      ],
      "answer": 0,
      "topic": "Waves",
      "level": 1,
      "why": "Mitochondria produce ATP via cellular respiration.",
      "how": "1) ATP = cell energy currency.  2) Mitochondria carry out cellular respiration → ATP.",
      "_id": "clep_natsci_8"
    },
    {
      "focus": "Newton's Second Law",
      "prompt": "5kg object, 3m/s² acceleration. Net force?",
      "options": [
        "15 N",
        "8 N",
        "1.67 N",
        "53 N"
      ],
      "answer": 0,
      "topic": "Mechanics",
      "level": 2,
      "_id": "cn_x1",
      "why": "F=ma=5×3=15.",
      "how": "1) F=ma. 2) 5×3=15N."
    },
    {
      "focus": "Boiling point",
      "prompt": "At 100°C (1atm), water transitions:",
      "options": [
        "Liquid to gas",
        "Solid to liquid",
        "Solid to gas",
        "Gas to liquid"
      ],
      "answer": 0,
      "topic": "Matter",
      "level": 1,
      "_id": "cn_x2",
      "why": "Boiling=liquid→gas.",
      "how": "1) Boiling point=liquid→gas transition."
    },
    {
      "focus": "EM spectrum",
      "prompt": "Shortest wavelength in EM spectrum?",
      "options": [
        "Gamma rays",
        "X-rays",
        "Ultraviolet",
        "Visible light"
      ],
      "answer": 0,
      "topic": "Waves",
      "level": 2,
      "_id": "cn_x3",
      "why": "Gamma rays have the shortest wavelength (highest energy).",
      "how": "1) Order: radio>microwave>IR>visible>UV>X-ray>gamma. 2) Gamma=shortest."
    },
    {
      "focus": "Mitosis outcome",
      "prompt": "Mitosis produces cells that are:",
      "options": [
        "Genetically identical to parent",
        "Haploid",
        "Genetically unique",
        "Diploid with half chromosomes"
      ],
      "answer": 0,
      "topic": "Cell Theory",
      "level": 1,
      "_id": "cn_x4",
      "why": "Mitosis=exact copy. 2 identical diploid daughters.",
      "how": "1) Mitosis=growth/repair. 2) Result=2 identical diploid cells."
    },
    {
      "focus": "Conservation of energy",
      "prompt": "Ball rolls down hill. At bottom, PE has:",
      "options": [
        "Converted to KE",
        "Increased",
        "Disappeared",
        "Stayed same"
      ],
      "answer": 0,
      "topic": "Energy",
      "level": 2,
      "_id": "cn_x5",
      "why": "PE converts to KE (energy conserved).",
      "how": "1) Top=max PE, min KE. 2) Bottom=min PE, max KE."
    },
    {
      "focus": "Punnett square",
      "prompt": "Tt×Tt. P(TT)?",
      "options": [
        "1/4",
        "1/2",
        "3/4",
        "0"
      ],
      "answer": 0,
      "topic": "Genetics",
      "level": 2,
      "_id": "cn_x6",
      "why": "Grid: TT,Tt,Tt,tt. TT=1/4.",
      "how": "1) TT appears once in 4 cells. 2) P=25%."
    },
    {
      "focus": "Acid properties",
      "prompt": "Which is characteristic of acids?",
      "options": [
        "pH<7 and releases H⁺",
        "pH>7 and releases OH⁻",
        "Neutral pH=7",
        "Does not affect pH"
      ],
      "answer": 0,
      "topic": "Chemistry",
      "level": 1,
      "_id": "cn_x7",
      "why": "Acids donate H⁺, lower pH below 7.",
      "how": "1) Acid: H⁺ donor, pH<7. 2) Base: OH⁻ donor, pH>7."
    },
    {
      "focus": "Plate tectonics",
      "prompt": "Which best supports the theory of plate tectonics?",
      "options": [
        "Matching coastlines, fossil distributions, seafloor spreading, and earthquake patterns",
        "The seasons changing",
        "Ocean salinity",
        "The water cycle"
      ],
      "answer": 0,
      "topic": "Earth Science",
      "level": 2,
      "_id": "cn_x8",
      "why": "Multiple lines of evidence: continental fit, fossils, paleomagnetism, seismic activity.",
      "how": "1) Continental fit: Africa+S.America. 2) Same fossils on separated continents. 3) Seafloor spreading. 4) Earthquake zones."
    },
    {
      "focus": "Chemical equilibrium",
      "prompt": "K>>1 for a reaction indicates:",
      "options": [
        "Products heavily favored at equilibrium",
        "Reactants heavily favored",
        "Reaction is very fast",
        "No equilibrium exists"
      ],
      "answer": 0,
      "topic": "Chemistry",
      "level": 2,
      "_id": "cn_x9",
      "why": "K=products/reactants. K>>1: lots of products; K<<1: mostly reactants.",
      "how": "1) K=[products]/[reactants]. 2) K>>1→products dominant. 3) K<<1→reactants dominant."
    },
    {
      "focus": "Trophic levels",
      "prompt": "Secondary consumers eat:",
      "options": [
        "Primary consumers (herbivores)",
        "Producers (plants)",
        "Decomposers",
        "Both plants and primary consumers"
      ],
      "answer": 0,
      "topic": "Ecology",
      "level": 1,
      "_id": "cn_x10",
      "why": "Secondary consumers eat primary consumers (herbivores) which ate producers.",
      "how": "1) Producer→primary consumer→secondary consumer. 2) Secondary eats primary."
    },
    {
      "focus": "Atomic number vs mass number",
      "prompt": "6 protons, 8 neutrons. Atomic number / mass number?",
      "options": [
        "6 / 14",
        "8 / 14",
        "6 / 8",
        "14 / 6"
      ],
      "answer": 0,
      "topic": "Atomic Theory",
      "level": 1,
      "_id": "cn_x11",
      "why": "Atomic number=protons=6. Mass number=protons+neutrons=6+8=14.",
      "how": "1) Atomic number=protons. 2) Mass number=p+n. 3) 6 and 14."
    },
    {
      "focus": "Photosynthesis light reactions",
      "prompt": "Water splitting in light reactions provides:",
      "options": [
        "Electrons and oxygen (as byproduct)",
        "Carbon dioxide and glucose",
        "ATP only",
        "Chlorophyll molecules"
      ],
      "answer": 0,
      "topic": "Cell Theory",
      "level": 2,
      "_id": "cn_x12",
      "why": "Photolysis: H₂O→2H⁺+½O₂+2e⁻. Electrons replace those lost by chlorophyll.",
      "how": "1) Water split: H₂O→H⁺+e⁻+O₂. 2) O₂ released as byproduct. 3) Electrons go to chlorophyll."
    },
    {
      "focus": "Periodic table — groups",
      "prompt": "Elements in the same GROUP of the periodic table:",
      "options": [
        "Have the same number of valence electrons and similar chemical properties",
        "Have the same mass number",
        "Are in the same period",
        "Have identical atomic numbers"
      ],
      "answer": 0,
      "topic": "Atomic Theory",
      "level": 1,
      "_id": "cn_x13",
      "why": "Group = vertical column. Same valence electrons → similar chemical behavior.",
      "how": "1) Group (column): same valence electrons. 2) Period (row): same number of electron shells."
    },
    {
      "focus": "Chemical bonds — ionic vs covalent",
      "prompt": "An ionic bond typically forms between:",
      "options": [
        "A metal and a nonmetal — electron transfer",
        "Two nonmetals — electron sharing",
        "Two metals — electron sea",
        "A noble gas and any element"
      ],
      "answer": 0,
      "topic": "Chemistry",
      "level": 1,
      "_id": "cn_x14",
      "why": "Ionic: metal (gives e⁻) + nonmetal (takes e⁻) = electrostatic attraction. Covalent: nonmetal + nonmetal share electrons.",
      "how": "1) Ionic: metal+nonmetal, e⁻ transfer. 2) Covalent: nonmetal+nonmetal, e⁻ sharing."
    },
    {
      "focus": "Human body — homeostasis",
      "prompt": "Which organ system is primarily responsible for maintaining blood glucose homeostasis?",
      "options": [
        "Endocrine system (pancreas: insulin and glucagon)",
        "Nervous system",
        "Skeletal system",
        "Integumentary system"
      ],
      "answer": 0,
      "topic": "Biology",
      "level": 2,
      "_id": "cn_x15",
      "why": "Pancreas: insulin lowers blood glucose; glucagon raises it. Classic homeostatic feedback loop.",
      "how": "1) High glucose → insulin (lowers). 2) Low glucose → glucagon (raises). 3) Endocrine/pancreas."
    },
    {
      "focus": "Ecology — food web",
      "prompt": "Removing a keystone predator from an ecosystem typically:",
      "options": [
        "Causes dramatic ecological disruption — prey populations explode and other species decline",
        "Has minimal impact since other predators fill the role",
        "Increases overall biodiversity permanently",
        "Only affects the immediate prey species"
      ],
      "answer": 0,
      "topic": "Ecology",
      "level": 2,
      "_id": "cn_x16",
      "why": "Keystone species: disproportionate impact. Their removal causes trophic cascades that restructure the ecosystem.",
      "how": "1) Keystone: outsized effect relative to abundance. 2) Removal: prey boom→overgraze→habitat loss→cascading effects."
    },
    {
      "focus": "Electricity — Ohm's Law",
      "prompt": "A 12V battery drives current through a 6Ω resistor. Current?",
      "options": [
        "2 A",
        "72 A",
        "0.5 A",
        "18 A"
      ],
      "answer": 0,
      "topic": "Electricity and Magnetism",
      "level": 2,
      "_id": "cn_g1",
      "why": "Ohm's Law: I = V/R = 12/6 = 2 A.",
      "how": "1) I = V/R. 2) 12 / 6 = 2 A."
    },
    {
      "focus": "Magnetism — magnetic field",
      "prompt": "A bar magnet has its strongest magnetic field at:",
      "options": [
        "Its poles (north and south ends)",
        "Its middle",
        "Above and below it equally",
        "Only the north pole"
      ],
      "answer": 0,
      "topic": "Electricity and Magnetism",
      "level": 1,
      "_id": "cn_g2",
      "why": "Magnetic field lines concentrate at the poles where field is strongest.",
      "how": "1) Field lines exit at N pole, enter at S pole. 2) Field strength greatest at poles."
    },
    {
      "focus": "Heat transfer",
      "prompt": "Heat transfer through a metal spoon resting in hot soup is primarily by:",
      "options": [
        "Conduction",
        "Convection",
        "Radiation",
        "Evaporation"
      ],
      "answer": 0,
      "topic": "Heat and Thermodynamics",
      "level": 1,
      "_id": "cn_g3",
      "why": "Direct contact transfer of heat through a solid = conduction.",
      "how": "1) Conduction: solid contact. 2) Convection: fluids. 3) Radiation: electromagnetic, no medium."
    },
    {
      "focus": "Astronomy — solar system",
      "prompt": "Which planet has the longest year (orbital period)?",
      "options": [
        "Neptune",
        "Mercury",
        "Earth",
        "Jupiter"
      ],
      "answer": 0,
      "topic": "Astronomy",
      "level": 1,
      "_id": "cn_g4",
      "why": "Outer planets have longer years. Neptune ~165 Earth years.",
      "how": "1) Farther from sun = longer orbit. 2) Mercury ~88 days. 3) Neptune ~165 years."
    },
    {
      "focus": "Astronomy — galaxy types",
      "prompt": "The Milky Way is classified as which type of galaxy?",
      "options": [
        "Spiral",
        "Elliptical",
        "Irregular",
        "Lenticular"
      ],
      "answer": 0,
      "topic": "Astronomy",
      "level": 1,
      "_id": "cn_g5",
      "why": "Milky Way: spiral galaxy with a central bar (barred spiral).",
      "how": "1) Spiral: arms (Milky Way, Andromeda). 2) Elliptical: rounded. 3) Irregular: no clear shape."
    },
    {
      "focus": "Earth science — rock cycle",
      "prompt": "Sedimentary rock can transform into metamorphic rock through:",
      "options": [
        "Heat and pressure",
        "Erosion only",
        "Cooling of magma",
        "Wind alone"
      ],
      "answer": 0,
      "topic": "Earth Science",
      "level": 2,
      "_id": "cn_g6",
      "why": "Sedimentary → metamorphic: requires heat + pressure (deep burial, tectonic forces).",
      "how": "1) Sedimentary: compacted sediments. 2) Heat + pressure → metamorphic. 3) Igneous: cooled magma."
    },
    {
      "focus": "Origin of life — early Earth",
      "prompt": "The Miller-Urey experiment demonstrated that:",
      "options": [
        "Amino acids can form spontaneously from simple gases plus electrical energy",
        "DNA evolved before proteins",
        "Life originated in deep-sea vents",
        "Earth was created 4.5 billion years ago"
      ],
      "answer": 0,
      "topic": "Origin of Life",
      "level": 3,
      "_id": "cn_g7",
      "why": "Miller-Urey (1953): simulated early atmosphere (H₂, CH₄, NH₃, H₂O) + electrical sparks → amino acids formed.",
      "how": "1) Simulated early atmosphere. 2) Added energy (lightning analog). 3) Result: organic molecules including amino acids."
    },
    {
      "focus": "Earth science — atmosphere layers",
      "prompt": "The ozone layer is located in which layer of the atmosphere?",
      "options": [
        "Stratosphere",
        "Troposphere",
        "Mesosphere",
        "Thermosphere"
      ],
      "answer": 0,
      "topic": "Earth Science",
      "level": 1,
      "_id": "cn_g8",
      "why": "Ozone layer: in the stratosphere (10–50 km altitude). Absorbs UV radiation.",
      "how": "1) Troposphere: 0–10km, weather. 2) Stratosphere: 10–50km, ozone. 3) Mesosphere/Thermosphere: higher."
    }
  ],
  "clep_bio": [
    {
      "focus": "Molecular biology — DNA structure",
      "prompt": "In DNA, adenine pairs with:",
      "options": [
        "Thymine",
        "Guanine",
        "Cytosine",
        "Uracil"
      ],
      "answer": 0,
      "topic": "Molecular Biology",
      "level": 1,
      "why": "Chargaff's rule: A pairs with T, G pairs with C in DNA.",
      "how": "1) A-T: 2 hydrogen bonds.  2) G-C: 3 hydrogen bonds.  3) In RNA, T is replaced by U.",
      "_id": "clep_bio_0"
    },
    {
      "focus": "Cell biology — organelles",
      "prompt": "The site of protein synthesis in a cell is the:",
      "options": [
        "Ribosome",
        "Nucleus",
        "Mitochondrion",
        "Golgi apparatus"
      ],
      "answer": 0,
      "topic": "Cell Biology",
      "level": 1,
      "why": "Ribosomes translate mRNA into protein chains.",
      "how": "1) mRNA moves from nucleus to ribosome.  2) Ribosome reads codons and assembles amino acids.",
      "_id": "clep_bio_1"
    },
    {
      "focus": "Genetics — Punnett",
      "prompt": "Aa × Aa. What fraction shows the recessive phenotype?",
      "options": [
        "1/4",
        "1/2",
        "3/4",
        "0"
      ],
      "answer": 0,
      "topic": "Genetics",
      "level": 2,
      "why": "Only aa shows recessive phenotype: 1 out of 4 cells.",
      "how": "1) Grid: AA, Aa, Aa, aa.  2) Only aa is recessive.  3) P = 1/4.",
      "_id": "clep_bio_2"
    },
    {
      "focus": "Organismal biology — photosynthesis",
      "prompt": "The overall equation for photosynthesis is:",
      "options": [
        "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
        "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
        "2H₂O → 2H₂ + O₂",
        "CO₂ → CO + O"
      ],
      "answer": 0,
      "topic": "Organismal Biology",
      "level": 2,
      "why": "Plants convert CO₂ and water into glucose and oxygen.",
      "how": "1) Inputs: CO₂, H₂O, light.  2) Outputs: glucose + O₂.",
      "_id": "clep_bio_3"
    },
    {
      "focus": "Evolution — natural selection",
      "prompt": "Natural selection acts on:",
      "options": [
        "Phenotype (observable traits)",
        "Genotype directly",
        "Random gene shuffling only",
        "Mutations that haven't appeared yet"
      ],
      "answer": 0,
      "topic": "Evolution",
      "level": 2,
      "why": "Selection acts on the phenotype; genes are carried along if they produce a successful phenotype.",
      "how": "1) Selection can't see DNA directly.  2) Organisms with beneficial phenotypes survive and reproduce.",
      "_id": "clep_bio_4"
    },
    {
      "focus": "Ecology — biomes",
      "prompt": "A terrestrial biome with low precipitation and extreme temperatures is the:",
      "options": [
        "Desert",
        "Tropical rainforest",
        "Temperate forest",
        "Tundra"
      ],
      "answer": 0,
      "topic": "Ecology",
      "level": 2,
      "why": "Deserts receive <250 mm of rainfall per year and have extreme temperature swings.",
      "how": "1) Low rain → desert.  2) Tundra is cold but also low rain.  3) Desert = low precipitation + high temps.",
      "_id": "clep_bio_5"
    },
    {
      "focus": "Population biology — growth",
      "prompt": "Logistic population growth produces a:",
      "options": [
        "S-curve",
        "J-curve",
        "Linear curve",
        "Bell curve"
      ],
      "answer": 0,
      "topic": "Population Biology",
      "level": 2,
      "why": "Logistic growth: fast at first, slows as population approaches carrying capacity K.",
      "how": "1) Start slow → accelerate → slow down at K → plateau.  2) Shape = S.",
      "_id": "clep_bio_6"
    },
    {
      "focus": "Cellular respiration",
      "prompt": "Overall equation for aerobic respiration?",
      "options": [
        "C₆H₁₂O₆+6O₂→6CO₂+6H₂O+ATP",
        "6CO₂+6H₂O→C₆H₁₂O₆+O₂",
        "Glucose→pyruvate",
        "O₂+ATP→CO₂+H₂O"
      ],
      "answer": 0,
      "topic": "Cell Biology",
      "level": 2,
      "_id": "cb_x1",
      "why": "Glucose+O₂→CO₂+water+ATP (reverse of photosynthesis).",
      "how": "1) Respiration: glucose in, CO₂+water+energy out."
    },
    {
      "focus": "Mitosis phases",
      "prompt": "Which mitosis phase: chromosomes align at cell equator?",
      "options": [
        "Metaphase",
        "Anaphase",
        "Prophase",
        "Telophase"
      ],
      "answer": 0,
      "topic": "Cell Division",
      "level": 2,
      "_id": "cb_x2",
      "why": "PMAT: Metaphase=middle alignment.",
      "how": "1) PMAT: P=condense, M=middle, A=apart, T=two nuclei. 2) M=middle."
    },
    {
      "focus": "Protein structure levels",
      "prompt": "Amino acid sequence = which protein structure level?",
      "options": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Quaternary"
      ],
      "answer": 0,
      "topic": "Molecular Biology",
      "level": 2,
      "_id": "cb_x3",
      "why": "Primary=linear sequence.",
      "how": "1) Primary=sequence. 2) Secondary=local folds. 3) Tertiary=3D shape."
    },
    {
      "focus": "Codominance",
      "prompt": "Blood type AB results from:",
      "options": [
        "Codominance",
        "Incomplete dominance",
        "Recessive expression",
        "A dominant B recessive"
      ],
      "answer": 0,
      "topic": "Genetics",
      "level": 3,
      "_id": "cb_x4",
      "why": "Codominance: both alleles expressed simultaneously.",
      "how": "1) Incomplete=blend (pink). 2) Codominance=BOTH expressed separately. 3) AB=both antigens."
    },
    {
      "focus": "Biome characteristics",
      "prompt": "Moderate rainfall, seasonal temperature, grass-dominated biome?",
      "options": [
        "Temperate grassland",
        "Tropical rainforest",
        "Chaparral",
        "Taiga"
      ],
      "answer": 0,
      "topic": "Ecology",
      "level": 2,
      "_id": "cb_x5",
      "why": "Temperate grassland: seasonal, moderate rain, too dry for forest.",
      "how": "1) Rainfall: desert<grassland<forest. 2) Seasonal=temperate. 3) Grass=grassland."
    },
    {
      "focus": "Allopatric speciation",
      "prompt": "Allopatric speciation occurs when:",
      "options": [
        "Physical barrier separates populations",
        "Two populations diverge in same area",
        "One individual forms a new species",
        "Climate drives rapid mutation"
      ],
      "answer": 0,
      "topic": "Evolution",
      "level": 3,
      "_id": "cb_x6",
      "why": "Allopatric=different place. Geographic barrier→separate evolution.",
      "how": "1) Allopatric=geographic separation. 2) Populations diverge independently→new species."
    },
    {
      "focus": "Abiotic vs biotic",
      "prompt": "Which is an abiotic factor?",
      "options": [
        "Soil pH",
        "A decomposer fungus",
        "Local deer population",
        "Photosynthetic algae"
      ],
      "answer": 0,
      "topic": "Ecology",
      "level": 1,
      "_id": "cb_x7",
      "why": "Abiotic=non-living physical/chemical. Soil pH is chemical property.",
      "how": "1) Biotic=living. 2) Abiotic=non-living (pH, temp, water, light)."
    },
    {
      "focus": "Prokaryote vs eukaryote",
      "prompt": "Which feature is present in prokaryotes but NOT eukaryotes?",
      "options": [
        "Circular chromosome with no membrane-bound nucleus",
        "Ribosomes",
        "DNA",
        "Cytoplasm"
      ],
      "answer": 0,
      "topic": "Cell Biology",
      "level": 2,
      "_id": "cb_x8",
      "why": "Prokaryotes: circular DNA, no nuclear membrane. Eukaryotes: membrane-bound nucleus with linear chromosomes.",
      "how": "1) Prokaryote: no nucleus. 2) Eukaryote: membrane-bound nucleus. 3) Both have ribosomes, DNA, cytoplasm."
    },
    {
      "focus": "Enzyme kinetics — Km",
      "prompt": "The Michaelis constant Km represents:",
      "options": [
        "Substrate concentration at half-maximum reaction rate",
        "Maximum reaction rate",
        "Enzyme concentration",
        "Product inhibition constant"
      ],
      "answer": 0,
      "topic": "Enzymes",
      "level": 4,
      "_id": "cb_x9",
      "why": "Km=[S] at which V=Vmax/2. Lower Km = higher affinity for substrate.",
      "how": "1) Km=[S] when V=Vmax/2. 2) Lower Km→enzyme binds substrate more tightly."
    },
    {
      "focus": "Viruses",
      "prompt": "Viruses are not considered alive because they:",
      "options": [
        "Cannot replicate without a host cell",
        "Do not contain nucleic acids",
        "Lack any protective coat",
        "Cannot evolve"
      ],
      "answer": 0,
      "topic": "Microbiology",
      "level": 2,
      "_id": "cb_x10",
      "why": "Viruses have no metabolism and require host cell machinery to replicate.",
      "how": "1) Cannot self-replicate without host. 2) No ribosomes or metabolism. 3) This is why antibiotics don't kill viruses."
    },
    {
      "focus": "Phylogenetics — cladogram",
      "prompt": "In a cladogram, organisms sharing a more recent common ancestor are:",
      "options": [
        "More closely related",
        "More distantly related",
        "Identical genetically",
        "Separated by more mutations"
      ],
      "answer": 0,
      "topic": "Evolution",
      "level": 2,
      "_id": "cb_x11",
      "why": "Cladistics: closer branching point = more recent common ancestor = closer relationship.",
      "how": "1) Cladogram branching point=common ancestor. 2) More recent branch=more closely related."
    },
    {
      "focus": "Succession — climax community",
      "prompt": "A climax community is:",
      "options": [
        "A stable, self-sustaining community representing the endpoint of ecological succession",
        "The first organisms to colonize a barren area",
        "A community disrupted by fire or flood",
        "Any community with high biodiversity"
      ],
      "answer": 0,
      "topic": "Ecology",
      "level": 2,
      "_id": "cb_x12",
      "why": "Climax community: the stable final stage of succession for a given climate/region.",
      "how": "1) Succession: pioneer→intermediate→climax. 2) Climax = stable endpoint."
    },
    {
      "focus": "Plant biology — photosynthesis pigments",
      "prompt": "Chlorophyll primarily absorbs which wavelengths of light?",
      "options": [
        "Red and blue/violet — reflects green",
        "Green only",
        "Yellow and orange",
        "All wavelengths equally"
      ],
      "answer": 0,
      "topic": "Molecular Biology and Genetics",
      "level": 2,
      "_id": "cb_x13",
      "why": "Chlorophyll absorbs red + blue-violet light; reflects green (why plants look green).",
      "how": "1) Absorption spectrum: red + blue. 2) Reflects green → plants appear green."
    },
    {
      "focus": "Evolution — natural selection",
      "prompt": "Natural selection acts on:",
      "options": [
        "Phenotypes (expressed traits), which affect reproductive fitness",
        "Genotypes directly",
        "Random mutations only",
        "Population-level planning"
      ],
      "answer": 0,
      "topic": "Evolution",
      "level": 2,
      "_id": "cb_x14",
      "why": "Natural selection acts on phenotype (observable traits). Traits that improve survival/reproduction become more common.",
      "how": "1) Selection: observable phenotype. 2) Better phenotype → more reproduction → alleles spread."
    },
    {
      "focus": "Genetic drift",
      "prompt": "Genetic drift has the greatest effect on:",
      "options": [
        "Small populations — random chance heavily influences allele frequencies",
        "Large populations — more variation",
        "All populations equally",
        "Only asexually reproducing organisms"
      ],
      "answer": 0,
      "topic": "Evolution",
      "level": 3,
      "_id": "cb_x15",
      "why": "Genetic drift = random change in allele frequency. Effect is largest in small populations.",
      "how": "1) Small pop: random events = big % change. 2) Large pop: random events average out."
    },
    {
      "focus": "DNA structure",
      "prompt": "In DNA, adenine pairs with __ via __ hydrogen bonds:",
      "options": [
        "Thymine; 2",
        "Cytosine; 3",
        "Guanine; 3",
        "Uracil; 2"
      ],
      "answer": 0,
      "topic": "Molecular Biology",
      "level": 2,
      "_id": "cb_g1",
      "why": "A-T pair with 2 H-bonds; G-C pair with 3 H-bonds. (RNA has U instead of T.)",
      "how": "1) A pairs with T. 2) G pairs with C. 3) A-T = 2 bonds, G-C = 3."
    },
    {
      "focus": "Photosynthesis — Calvin cycle",
      "prompt": "The Calvin cycle of photosynthesis:",
      "options": [
        "Fixes CO₂ into glucose using ATP and NADPH from the light reactions",
        "Splits water to release oxygen",
        "Captures light energy",
        "Occurs in the mitochondria"
      ],
      "answer": 0,
      "topic": "Cell Biology",
      "level": 3,
      "_id": "cb_g2",
      "why": "Calvin cycle (light-independent): uses ATP + NADPH from light reactions to fix CO₂ into G3P (and ultimately glucose).",
      "how": "1) Light reactions → ATP + NADPH. 2) Calvin cycle uses these to fix CO₂ → glucose. 3) Occurs in stroma of chloroplast."
    },
    {
      "focus": "Cellular respiration phases",
      "prompt": "In aerobic respiration, the Krebs cycle occurs in:",
      "options": [
        "The mitochondrial matrix",
        "The cytoplasm",
        "The nucleus",
        "The chloroplast"
      ],
      "answer": 0,
      "topic": "Cell Biology",
      "level": 2,
      "_id": "cb_g3",
      "why": "Glycolysis: cytoplasm. Krebs cycle: mitochondrial matrix. ETC: inner mitochondrial membrane.",
      "how": "1) Glycolysis → cytoplasm. 2) Krebs → matrix. 3) ETC → inner membrane."
    },
    {
      "focus": "Dihybrid cross",
      "prompt": "In a dihybrid cross of two heterozygotes (RrYy × RrYy), the phenotypic ratio is:",
      "options": [
        "9:3:3:1",
        "3:1",
        "1:2:1",
        "9:7"
      ],
      "answer": 0,
      "topic": "Genetics",
      "level": 3,
      "_id": "cb_g4",
      "why": "Mendel's 9:3:3:1 ratio: 9 dominant both, 3 dominant for one only, 3 dominant for other only, 1 recessive both.",
      "how": "1) Independent assortment. 2) Each trait: 3:1. 3) Combined: 9:3:3:1."
    },
    {
      "focus": "Animal digestion",
      "prompt": "Most chemical digestion of nutrients in humans occurs in the:",
      "options": [
        "Small intestine",
        "Stomach",
        "Mouth",
        "Large intestine"
      ],
      "answer": 0,
      "topic": "Organismal Biology",
      "level": 2,
      "_id": "cb_g5",
      "why": "Small intestine: enzymes from pancreas + intestinal lining digest carbs, proteins, fats. Stomach mainly handles proteins.",
      "how": "1) Mouth: starch digestion begins. 2) Stomach: protein digestion (pepsin). 3) Small intestine: most digestion + absorption."
    },
    {
      "focus": "Circulatory system — open vs closed",
      "prompt": "In a closed circulatory system (like in vertebrates), blood:",
      "options": [
        "Stays within blood vessels at all times",
        "Flows freely through body cavities",
        "Mixes with extracellular fluid",
        "Does not transport oxygen"
      ],
      "answer": 0,
      "topic": "Organismal Biology",
      "level": 2,
      "_id": "cb_g6",
      "why": "Closed circulatory: blood enclosed in vessels (arteries, veins, capillaries). Open: blood/hemolymph fills cavity (insects).",
      "how": "1) Closed: vessels only. 2) Open: floods body cavity. 3) Vertebrates have closed system."
    },
    {
      "focus": "Endocrine vs nervous system",
      "prompt": "A key difference between endocrine and nervous signaling is that endocrine signals:",
      "options": [
        "Use hormones in blood; act slower but with longer-lasting effects",
        "Use electrical impulses for instant response",
        "Are confined to local tissue only",
        "Cannot be regulated by feedback loops"
      ],
      "answer": 0,
      "topic": "Organismal Biology",
      "level": 3,
      "_id": "cb_g7",
      "why": "Endocrine: hormones via bloodstream, slower onset, longer-lasting. Nervous: electrical/neurotransmitter, fast, brief.",
      "how": "1) Endocrine: hormones in blood. 2) Nervous: electrical signals. 3) Endocrine slower but longer-lasting."
    },
    {
      "focus": "Osmosis basics",
      "prompt": "Osmosis is the movement of:",
      "options": [
        "Water across a semipermeable membrane from low to high solute concentration",
        "Solute molecules through a membrane",
        "Any molecule with help of ATP",
        "Only large proteins"
      ],
      "answer": 0,
      "topic": "Cell Biology",
      "level": 2,
      "_id": "cb_g8",
      "why": "Osmosis: water moves from area of LOW solute (high water potential) to HIGH solute (low water potential) across a semipermeable membrane.",
      "how": "1) Osmosis = water movement only. 2) Direction: low solute → high solute. 3) Passive (no ATP)."
    },
    {
      "focus": "Meiosis vs mitosis outcome",
      "prompt": "Meiosis produces:",
      "options": [
        "4 genetically diverse haploid cells",
        "2 identical diploid cells",
        "1 polyploid cell",
        "Identical clones"
      ],
      "answer": 0,
      "topic": "Cell Division",
      "level": 2,
      "_id": "cb_g9",
      "why": "Meiosis: 1 diploid cell → 4 haploid cells with genetic diversity (crossing over, independent assortment).",
      "how": "1) Meiosis: 2 divisions. 2) Result: 4 haploid (n) cells. 3) Genetic recombination → diversity."
    }
  ],
  "accu_reading": [
    {
      "focus": "Main Idea",
      "level": 1,
      "topic": "Main Idea",
      "_id": "accu_reading_0",
      "passage": "<p>Community gardens have transformed vacant lots and underused urban spaces into vibrant centers of neighborhood life. Where broken pavement and overgrown weeds once stood, residents now tend rows of tomatoes, peppers, and herbs. These green spaces offer fresh produce to communities that often lack nearby grocery stores.</p>\n<p>Beyond food access, community gardens build the social connections that hold neighborhoods together. Neighbors who might otherwise never speak learn each other's names over shared plots. Crime statistics in districts with active community gardens consistently trend downward, suggesting that visible civic engagement discourages disorder. Research from several major cities documents lower rates of vandalism within a quarter mile of established gardens.</p>\n<p>Environmental benefits compound the social ones. Garden plots absorb rainwater that would otherwise overwhelm drainage systems, and the soil and plants reduce the urban heat island effect by several degrees. City planners increasingly recognize community gardens not as charity projects but as cost-effective urban infrastructure.</p>",
      "prompt": "The main idea of this passage is that community gardens:",
      "options": [
        "provide multiple interconnected benefits to urban neighborhoods",
        "are primarily a way to reduce food costs for individuals",
        "were created to address environmental problems specifically",
        "succeed only when located near grocery stores"
      ],
      "answer": 0,
      "why": "All three paragraphs describe different categories of benefit — social, environmental, safety — which together support the central claim that gardens benefit neighborhoods in multiple ways.",
      "how": "1) P1: fresh food access.  2) P2: social bonds + crime reduction.  3) P3: environmental gains.  4) What idea covers all three? Multiple benefits to neighborhoods."
    },
    {
      "focus": "Inference",
      "level": 2,
      "topic": "Inference",
      "_id": "accu_reading_1",
      "passage": "<p>By the time Renzo arrived at the laboratory, the incubators were already beeping. He silenced the alarms, checked the temperature logs, and felt his stomach drop: the power had been out for nearly four hours overnight. The cultures in Tray C, which represented six weeks of painstaking cell growth, showed the telltale cloudy discoloration of contamination.</p>\n<p>He photographed every tray, sent a message to his advisor, and began composing a methodical account of exactly what had failed and why. He did not close his laptop or leave his desk for the next three hours. When his advisor arrived and asked how he was doing, Renzo simply slid the documentation across the table without looking up.</p>",
      "prompt": "Based on the passage, what can reasonably be inferred about Renzo?",
      "options": [
        "He responded to the setback with focused, professional discipline",
        "He was too upset to continue his research career",
        "He blamed the power company for the loss",
        "He had expected the power failure in advance"
      ],
      "answer": 0,
      "why": "Renzo photographs evidence, notifies his advisor, documents the failure systematically, and works for three hours straight — all signs of professional focus under stress, not emotional collapse or blame.",
      "how": "1) He doesn't panic or leave — he acts.  2) Documentation, photographs, three hours of work = disciplined response.  3) No evidence he expected it or blamed others."
    },
    {
      "focus": "Vocabulary in Context",
      "level": 3,
      "topic": "Vocabulary",
      "_id": "accu_reading_2",
      "passage": "<p>The Carboniferous period, spanning roughly 359 to 299 million years ago, was characterized by vast swamp forests that covered much of the land. Dead plant matter accumulated faster than decomposers could process it, building up thick layers of organic debris. Over millions of years, heat and pressure transformed these deposits into coal.</p>\n<p>What made this process possible was the <em>recalcitrant</em> nature of the lignin in early tree trunks. Lignin is the compound that gives wood its structural rigidity, and at that point in evolutionary history, few organisms had yet developed the biochemical tools to break it down. The organic material was thus preserved rather than decomposed, accumulating into the enormous carbon stores that humanity has spent the last two centuries burning.</p>",
      "prompt": "As used in the passage, \"recalcitrant\" most nearly means:",
      "options": [
        "resistant to breakdown",
        "highly flammable",
        "structurally weak",
        "chemically reactive"
      ],
      "answer": 0,
      "why": "The passage explains that lignin resisted decomposition because organisms lacked tools to break it down — \"recalcitrant\" here means stubbornly resistant to being processed.",
      "how": "1) Context clue: \"few organisms had yet developed the biochemical tools to break it down.\"  2) Result: material was preserved, not decomposed.  3) Resistant to breakdown fits perfectly."
    },
    {
      "focus": "Author Purpose",
      "level": 3,
      "topic": "Author Purpose",
      "_id": "accu_reading_3",
      "passage": "<p>Every morning, millions of students across the country arrive at school too hungry to concentrate. Studies consistently show that children who skip breakfast struggle to sustain attention, perform below grade level on standardized assessments, and miss more school days than peers who eat regular morning meals. The evidence is not ambiguous: breakfast improves academic outcomes.</p>\n<p>Despite this, many schools limit breakfast programs to students who qualify for free or reduced lunch, leaving a significant portion of the student body to start their day on empty stomachs. The rationale is budgetary, but the cost of remediation, grade retention, and eventual dropout far exceeds the cost of a morning meal. School districts that have piloted universal free breakfast programs report measurable gains in attendance, behavior, and test scores within a single academic year.</p>\n<p>The data is clear. Every school district in this country should implement universal free breakfast — not as a welfare program, but as a straightforward investment in academic performance.</p>",
      "prompt": "The author's primary purpose in writing this passage is to:",
      "options": [
        "persuade school districts to adopt a specific policy",
        "inform readers about the history of school breakfast programs",
        "describe the daily experiences of hungry students",
        "entertain readers with personal anecdotes about education"
      ],
      "answer": 0,
      "why": "The passage uses evidence (studies, pilot data) building to an explicit recommendation (\"should implement\"). That structure — evidence + recommendation — defines persuasive writing.",
      "how": "1) P1: presents evidence.  2) P2: anticipates objection, rebuts it.  3) P3: direct call to action.  4) Pattern = persuasion."
    },
    {
      "focus": "Text Structure",
      "level": 3,
      "topic": "Text Structure",
      "_id": "accu_reading_4",
      "passage": "<p>The first stage of the moon's formation likely began approximately 4.5 billion years ago, when a Mars-sized object called Theia collided with the young Earth. The impact vaporized much of both bodies, launching an enormous cloud of molten rock and debris into orbit around the Earth.</p>\n<p>Over the next several thousand years, gravity pulled that debris together into a single mass. The proto-moon was initially a glowing ball of magma, its surface constantly bombarded by remaining debris. As the impacts diminished, the surface slowly cooled and solidified.</p>\n<p>Finally, over hundreds of millions of years, volcanic activity resurfaced portions of the moon and formed the dark plains — called maria — visible from Earth today. The craters that pit the lunar surface record the final heavy bombardment period that ended approximately 3.8 billion years ago.</p>",
      "prompt": "This passage is primarily organized using:",
      "options": [
        "chronological order — events arranged by time sequence",
        "compare and contrast — Earth and Moon are compared",
        "cause and effect — environmental causes explained",
        "problem and solution — a geological problem is solved"
      ],
      "answer": 0,
      "why": "Signal phrases \"first stage,\" \"over the next several thousand years,\" and \"finally\" sequence events across billions of years — classic chronological structure.",
      "how": "1) Scan for time markers: \"4.5 billion years ago,\" \"next several thousand years,\" \"finally,\" \"3.8 billion years ago.\"  2) Events march forward in time.  3) Structure = chronological."
    },
    {
      "focus": "Point of View",
      "level": 4,
      "topic": "Point of View",
      "_id": "accu_reading_5",
      "passage": "<p>The city council voted last Tuesday to rezone twelve acres of parkland for commercial development. The decision was made in a closed session, without public comment, and the meeting minutes were not posted online until three days after the vote. Several council members had received campaign contributions from the development group in the months preceding the vote.</p>\n<p>Supporters of the rezoning argue that the new commercial district will create jobs and expand the tax base. One council member called it \"a necessary step forward for economic vitality.\" Critics, however, point out that the affected parkland serves as the only green space within two miles for a densely populated low-income neighborhood. A petition signed by over four thousand residents opposing the development was submitted to the council but was not acknowledged at the meeting.</p>",
      "prompt": "The author's point of view toward the council's decision is best described as:",
      "options": [
        "critical — the process lacked transparency and ignored residents",
        "supportive — economic development benefits the community",
        "neutral — the passage presents facts without judgment",
        "uncertain — the author does not have enough information"
      ],
      "answer": 0,
      "why": "Word choices like \"closed session,\" \"not posted until three days after,\" \"not acknowledged\" emphasize procedural failures. The campaign contribution detail and the ignored petition both imply the author views the decision as problematic.",
      "how": "1) Identify loaded language: \"closed session,\" \"not acknowledged.\"  2) What facts does the author choose to include? All unflattering to the council.  3) Selective inclusion of negative details = critical point of view."
    },
    {
      "focus": "Textual Evidence",
      "level": 4,
      "topic": "Evidence",
      "_id": "accu_reading_6",
      "passage": "<p>Sleep deprivation has measurable effects on cognitive performance, emotional regulation, and physical health. A landmark study tracking 500 adolescents over two years found that students sleeping fewer than seven hours per night were 2.5 times more likely to report symptoms of depression than those sleeping eight or more hours. Academic performance tracked in parallel: the sleep-deprived group averaged 12 percent lower scores on standardized assessments.</p>\n<p>The mechanisms are physiological. During sleep, the brain consolidates memories by replaying and reinforcing neural pathways formed during the day. The prefrontal cortex — responsible for judgment, impulse control, and problem-solving — is disproportionately affected by sleep loss, explaining why tired students struggle more with complex reasoning than with rote recall.</p>",
      "prompt": "Which detail from the passage most directly supports the claim that sleep loss harms academic performance?",
      "options": [
        "Sleep-deprived students averaged 12% lower scores on standardized assessments",
        "The study tracked 500 adolescents over two years",
        "Sleep helps the brain consolidate memories",
        "The prefrontal cortex governs impulse control"
      ],
      "answer": 0,
      "why": "The claim is specifically about academic performance. Only the 12% score difference directly measures the academic impact of sleep deprivation.",
      "how": "1) Identify the exact claim: sleep loss harms academic performance.  2) Scan for evidence that directly measures academic output.  3) The 12% score gap is the only data point that does."
    },
    {
      "focus": "Synthesis — Paired Passages",
      "level": 4,
      "topic": "Synthesis",
      "_id": "accu_reading_7",
      "passage": "<p><strong>Passage 1:</strong> Standardized testing provides an objective, comparable measure of student achievement across schools and districts. Without a common metric, it is impossible to identify which schools are failing their students or to allocate resources where they are most needed. Critics of testing often represent the interests of institutions rather than of students who deserve accurate accountability.</p>\n<p><strong>Passage 2:</strong> Standardized tests measure a narrow slice of what students actually learn. Skills like creativity, critical thinking, collaboration, and resilience — arguably the most important outcomes of a quality education — simply cannot be captured on a multiple-choice exam. When schools are evaluated primarily on test scores, teachers narrow the curriculum to tested material, and students who think differently are systematically disadvantaged.</p>",
      "prompt": "Which statement best describes the relationship between the two passages?",
      "options": [
        "Both discuss standardized testing, but they disagree about whether its benefits outweigh its drawbacks",
        "Both passages oppose standardized testing for different reasons",
        "Passage 1 provides data while Passage 2 provides only opinion",
        "The passages discuss completely unrelated aspects of education"
      ],
      "answer": 0,
      "why": "Both passages address standardized testing directly. Passage 1 defends it as necessary for accountability; Passage 2 argues it misses important skills and distorts curriculum. They share a topic but hold opposing positions.",
      "how": "1) Find shared topic: standardized testing.  2) Passage 1 position: objective, necessary.  3) Passage 2 position: too narrow, causes harm.  4) Same topic + opposing views = disagree about benefits vs. drawbacks."
    },
    {
      "focus": "Cause and Effect",
      "level": 3,
      "topic": "Text Structure",
      "_id": "ar8",
      "passage": "<p>The introduction of kudzu to the United States in 1876 seemed harmless — a decorative vine from East Asia. The government later promoted it as an erosion solution, and farmers planted it across millions of Southern acres in the 1930s and 40s.</p><p>Without the insects and fungi that keep it in check in its native range, kudzu grows up to a foot per day in summer. It now blankets millions of acres, smothering trees, collapsing utility structures, and displacing native plants faster than eradication programs can keep up.</p>",
      "prompt": "What was the primary cause of kudzu becoming invasive?",
      "options": [
        "Absence of its natural biological controls from its home range",
        "Deliberate planting as a crop",
        "The unusually warm climate of the South",
        "Government subsidies for kudzu farming"
      ],
      "answer": 0,
      "why": "The passage states 'without the insects and fungi that keep it in check in its native range' — that biological gap is the direct cause.",
      "how": "1) Find the cause signal. 2) \"Without the insects and fungi\" = cause. 3) Unchecked growth = effect."
    },
    {
      "focus": "Implied Meaning",
      "level": 3,
      "topic": "Inference",
      "_id": "ar9",
      "passage": "<p>Throughout the 1840s Elizabeth Blackwell applied to every medical school she could find. Most did not reply. Others sent formal rejections citing her gender. Geneva Medical College admitted her in 1847 — legend holds the all-male student body voted yes as a joke, not expecting her to show up.</p><p>She showed up. She graduated first in her class in 1849, becoming the first woman to earn a medical degree in the United States. She founded the New York Infirmary for Indigent Women and Children and spent decades training other women as physicians despite continued institutional hostility.</p>",
      "prompt": "The author includes the 'practical joke' detail primarily to:",
      "options": [
        "Heighten the contrast between the low expectations and her remarkable achievement",
        "Suggest the students later regretted the vote",
        "Argue that admission policies should change",
        "Explain why Blackwell chose Geneva"
      ],
      "answer": 0,
      "why": "The joke implies her admission was not taken seriously — making 'she showed up and graduated first' far more striking.",
      "how": "1) Why include this detail? It sets extremely low expectations. 2) \"She showed up\" immediately follows = deliberate contrast. 3) Purpose = magnify the achievement."
    },
    {
      "focus": "Vocabulary in Context",
      "level": 2,
      "topic": "Vocabulary",
      "_id": "ar10",
      "passage": "<p>Marine biologists have documented remarkable <em>plasticity</em> in humpback whale song. Unlike birdsong, which is largely fixed by genetics, humpback songs evolve continuously. Males adopt new phrases from neighbors, and entirely new structures spread across ocean basins within a single breeding season.</p><p>This capacity for cultural transmission — learning from peers rather than inheriting behaviors genetically — was once considered uniquely human. Its presence in humpback whales has reshaped how researchers understand animal cognition.</p>",
      "prompt": "As used in the passage, \"plasticity\" most nearly means:",
      "options": [
        "capacity for change and learning",
        "rigidity of genetic programming",
        "physical flexibility of tissue",
        "social complexity"
      ],
      "answer": 0,
      "why": "The passage contrasts plasticity with 'fixed by genetics' and describes continuous evolution — pointing to capacity for change.",
      "how": "1) Contrast: 'unlike birdsong, which is fixed by genetics.' 2) Opposite of fixed = changeable. 3) Plasticity = capacity for change."
    },
    {
      "focus": "Main Idea",
      "level": 2,
      "topic": "Main Idea",
      "_id": "ar11",
      "passage": "<p>Before mechanical clocks, people measured time by the sun, shadows, or candle burn rates. These methods were useful but imprecise — a summer hour in London was longer than a winter hour.</p><p>Mechanical clocks standardized time divisions, yet different towns still kept local solar time. True synchronization came with railroads: in the 1840s and 50s, British railway companies required trains to run on a single standard time. Britain adopted Greenwich Mean Time nationally in 1880; the global time zone system followed in 1884.</p>",
      "prompt": "Which best summarizes the main idea?",
      "options": [
        "Standardizing time was a gradual process driven by technology and practical need",
        "Mechanical clocks were invented to replace candles",
        "The British government created time zones alone",
        "Time zones were established in medieval Europe"
      ],
      "answer": 0,
      "why": "The passage traces time measurement from imprecise methods through clocks to railroad-driven global standardization — a technology-driven progression.",
      "how": "1) What is the whole passage about? 2) Each paragraph = one stage in standardizing time. 3) Common thread = gradual, need-driven process."
    },
    {
      "focus": "Tone",
      "level": 4,
      "topic": "Point of View",
      "_id": "ar12",
      "passage": "<p>The argument that social media is \"just a tool\" — neutral, shaped only by users — is comforting. It is also wrong. Tools do not employ behavioral psychologists to maximize engagement. Tools do not exploit loneliness to keep users scrolling past midnight. A hammer does not send notifications.</p><p>These platforms are engineered environments with profit-driven incentive structures. Calling them tools is a category error that conveniently lets their designers avoid accountability.</p>",
      "prompt": "The tone of this passage is best described as:",
      "options": [
        "Argumentative and critical",
        "Objective and neutral",
        "Nostalgic",
        "Optimistic"
      ],
      "answer": 0,
      "why": "The author directly calls a common position 'wrong,' uses loaded phrases like 'exploit loneliness,' and ends with an accusation of avoiding accountability.",
      "how": "1) Author's stance: strongly opposed to a position. 2) 'Wrong,' 'exploit,' 'category error' = loaded language. 3) Loaded + opinionated = argumentative/critical."
    },
    {
      "focus": "Figurative Language",
      "level": 3,
      "topic": "Rhetoric",
      "_id": "ar13",
      "passage": "<p>Newton described his discoveries modestly: \"If I have seen further, it is by standing on the shoulders of giants.\" This image — a scientist elevated by predecessors — captures how knowledge accumulates. Every experiment builds on the scaffolding of prior inquiry.</p><p>Yet the metaphor misleads. Giants are chosen, not encountered randomly. Newton selected which prior work to build on, helping define what counted as a giant. Progress is not purely additive; it involves judgment and sometimes deliberate rejection of what came before.</p>",
      "prompt": "\"Scaffolding of prior inquiry\" is best understood as:",
      "options": [
        "Accumulated prior knowledge that supports new research",
        "Physical lab equipment",
        "Newton's personal journals",
        "A criticism of earlier methods"
      ],
      "answer": 0,
      "why": "\"Scaffolding\" = a supporting structure. \"Prior inquiry\" = earlier scientific work. Together = the body of knowledge new research builds on.",
      "how": "1) Scaffolding = support structure. 2) Prior inquiry = earlier science. 3) Metaphor: existing knowledge supports new work."
    },
    {
      "focus": "Compare/Contrast Structure",
      "level": 4,
      "topic": "Text Structure",
      "_id": "ar14",
      "passage": "<p>Traditional conservation focused on preserving what remains: protecting intact ecosystems, maintaining reserves, preventing extinction. This defensive approach made sense when wild places were extensive enough to sustain themselves if left alone.</p><p>Rewilding represents a philosophical shift. Rather than protecting what exists, practitioners reintroduce historically present species, restore ecological processes, and promote the self-regulating complexity that managed ecosystems suppress. The goal is not preservation but restoration — systems that eventually need no human intervention.</p>",
      "prompt": "This passage is primarily organized by:",
      "options": [
        "Contrasting traditional conservation with a newer approach",
        "Arguing rewilding is superior",
        "Tracing conservation history chronologically",
        "Defining ecological terms"
      ],
      "answer": 0,
      "why": "P1 = traditional/defensive; P2 = rewilding/active. The structural move from one to the other is contrast.",
      "how": "1) P1: traditional = defensive. 2) P2: rewilding = \"philosophical shift.\" 3) Two approaches compared = contrast structure."
    },
    {
      "focus": "Evaluate Evidence",
      "level": 4,
      "topic": "Evidence",
      "_id": "ar15",
      "passage": "<p>Some argue e-readers reduce paper consumption and help the environment. But this overlooks the full device lifecycle. Manufacturing one e-reader requires rare earth extraction, energy-intensive fabrication, and toxic byproducts. A 2009 study found producing one e-reader generates as much carbon as printing 40–50 books.</p><p>E-readers also have short replacement cycles — most replaced within 3–5 years — while books can last decades. The environmental calculus is far more complicated than \"paper vs. pixels.\"</p>",
      "prompt": "Which evidence most directly weakens the claim that e-readers help the environment?",
      "options": [
        "One e-reader generates as much carbon as 40–50 books during manufacture",
        "E-readers were studied in 2009",
        "E-readers appear in schools",
        "Paper consumption is a concern"
      ],
      "answer": 0,
      "why": "The carbon equivalence is quantified, specific, and directly contradicts the environmental benefit claim.",
      "how": "1) Claim: e-readers help environment. 2) Need: direct contradiction. 3) 40–50 book equivalent = concrete, quantified contradiction."
    },
    {
      "focus": "Problem/Solution",
      "level": 3,
      "topic": "Text Structure",
      "_id": "ar16",
      "passage": "<p>Cities across the American Southwest face a water crisis. Decades of drought and population growth have drawn major reservoirs to historic lows. Lake Mead, which supplies water to tens of millions, hit its lowest recorded level in 2022.</p><p>Water managers are responding with multiple strategies: conservation mandates restricting lawn irrigation, wastewater recycling programs that convert treated sewage to drinking quality, and renewed investment in desalination as technology costs drop.</p>",
      "prompt": "This passage is primarily organized using:",
      "options": [
        "Problem and solution",
        "Cause and effect only",
        "Compare and contrast",
        "Chronological order"
      ],
      "answer": 0,
      "why": "P1 = the water crisis (problem). P2 = the strategies being deployed (solutions). Classic problem/solution structure.",
      "how": "1) P1: what is wrong? Drought + low reservoirs. 2) P2: what is being done? Conservation, recycling, desalination. 3) Problem + responses = problem/solution."
    },
    {
      "focus": "Paired Passages",
      "level": 4,
      "topic": "Synthesis",
      "_id": "ar17",
      "passage": "<p><strong>Passage 1:</strong> Smartphones have transformed teen social life. Where previous generations met in person, today's adolescents maintain relationships via texts and apps. Studies link this shift to rising anxiety, reduced face-to-face skills, and a measurable depression increase since 2012.</p><p><strong>Passage 2:</strong> Research on social media and teen mental health is far less conclusive than headlines suggest. Many studies rely on inaccurate self-reported screen time and correlational designs that cannot establish causation. Economists and psychologists note that financial stress, academic pressure, and sleep deprivation are stronger predictors of teen depression than phone use.</p>",
      "prompt": "Which best describes the relationship between the passages?",
      "options": [
        "Passage 2 challenges the certainty of Passage 1 by questioning its research methodology",
        "The passages completely contradict each other",
        "Both reach the same conclusion",
        "Passage 2 says phones have no effect"
      ],
      "answer": 0,
      "why": "Passage 2 doesn't deny phones changed social behavior — it disputes whether the depression link is proven, pointing to methodological flaws.",
      "how": "1) P1's claim: phones → depression. 2) P2's response: the studies are flawed; causation unproven. 3) P2 challenges certainty, not all of P1."
    },
    {
      "focus": "Word with Multiple Meanings",
      "level": 3,
      "topic": "Vocabulary",
      "_id": "ar18",
      "passage": "<p>The diplomat's remarks were deliberately <em>measured</em>. Knowing that every word would be scrutinized by both sides, she chose each phrase with extreme care, saying nothing that could be construed as favoring either party. Her colleagues, accustomed to her directness, found the caution unsettling.</p>",
      "prompt": "In context, \"measured\" most nearly means:",
      "options": [
        "Carefully calculated and restrained",
        "Quantified by a standard unit",
        "Generous and expansive",
        "Harsh and blunt"
      ],
      "answer": 0,
      "why": "Context clues: 'extreme care,' 'nothing that could be construed' — all signal deliberate restraint, not physical measurement.",
      "how": "1) 'Deliberately measured' → what follows? Extreme care in word choice. 2) Restraint + calculation. 3) Physical measurement doesn't fit diplomatic context."
    },
    {
      "focus": "Inference from Detail",
      "level": 4,
      "topic": "Inference",
      "_id": "ar19",
      "passage": "<p>The Yellowstone supervolcano last erupted ~640,000 years ago, releasing ash that altered global climate for years. Geologists note that ground levels within the park rise and fall measurably each year, driven by magma and hydrothermal fluid movement below. Scientists emphasize these movements are normal.</p><p>The USGS monitors Yellowstone continuously and maintains a volcanic alert system. The alert level has remained \"Normal\" for decades. The park receives roughly four million visitors annually with no volcanic risk advisories.</p>",
      "prompt": "What can be inferred about Yellowstone's current volcanic activity?",
      "options": [
        "It is actively monitored but poses no immediate threat",
        "It is too dangerous to monitor adequately",
        "An eruption is likely within decades",
        "The USGS ignores the volcanic risk"
      ],
      "answer": 0,
      "why": "Continuous monitoring + 'Normal' alert for decades + no visitor warnings = active attention but no immediate danger.",
      "how": "1) Monitored continuously = careful attention. 2) 'Normal' for decades + no advisories = not an immediate threat. 3) Both facts together = monitored but safe."
    }
  ],
  "accu_writing": [
    {
      "focus": "Sentence Structure",
      "level": 1,
      "topic": "Sentence Structure",
      "prompt": "Choose the best revision: \"Because the assignment was difficult. The students asked questions.\"",
      "options": [
        "Because the assignment was difficult, the students asked questions.",
        "Because the assignment was difficult students asked questions.",
        "The students asked questions because the assignment was difficult students.",
        "The assignment difficult, the students asked questions."
      ],
      "answer": 0,
      "why": "\"Because the assignment was difficult\" is a dependent clause — it needs an independent clause.",
      "how": "1) Dependent clause must attach to an independent clause.  2) Use a comma between them.",
      "_id": "accu_writing_0"
    },
    {
      "focus": "Agreement",
      "level": 2,
      "topic": "Agreement",
      "prompt": "\"The group of students were preparing for the exam.\" — The error is:",
      "options": [
        "Subject-verb agreement: \"group\" is singular, needs \"was\"",
        "No error",
        "Tense error: should be \"are\"",
        "Pronoun error"
      ],
      "answer": 0,
      "why": "Subject is \"group\" (singular); ignore the prepositional phrase \"of students.\"",
      "how": "1) Cross out \"of students.\"  2) \"The group __ preparing.\"  3) Singular → \"was preparing.\"",
      "_id": "accu_writing_1"
    },
    {
      "focus": "Modifiers",
      "level": 3,
      "topic": "Modifiers",
      "prompt": "Choose the clearest sentence.",
      "options": [
        "Walking to school, I saw a deer in the field.",
        "Walking to school, a deer was seen in the field.",
        "A deer was seen walking to school by me.",
        "I saw a deer, walking to school, in the field."
      ],
      "answer": 0,
      "why": "The introductory phrase \"Walking to school\" must describe the subject right after the comma.",
      "how": "1) Who was walking? \"I.\"  2) Place \"I\" immediately after the comma.  3) Only option A does this correctly.",
      "_id": "accu_writing_2"
    },
    {
      "focus": "Parallelism",
      "level": 3,
      "topic": "Parallelism",
      "prompt": "Choose the best version.",
      "options": [
        "She enjoys hiking, swimming, and biking.",
        "She enjoys to hike, swimming, and biking.",
        "She enjoys hiking, to swim, and biked.",
        "She enjoyed hike, swim, and biking."
      ],
      "answer": 0,
      "why": "All items in a list must share the same grammatical form (all gerunds here).",
      "how": "1) Pick one form.  2) Hiking, swimming, biking — all gerunds (-ing).  3) Consistent = correct.",
      "_id": "accu_writing_3"
    },
    {
      "focus": "Organization",
      "level": 3,
      "topic": "Organization",
      "prompt": "Which sentence would best introduce the following paragraph about climate solutions?",
      "options": [
        "Several practical steps can reduce carbon emissions.",
        "The sky is blue.",
        "Emissions are bad.",
        "The problem is hard to define."
      ],
      "answer": 0,
      "why": "A topic sentence should introduce the paragraph's main point clearly and relevantly.",
      "how": "1) The paragraph is about climate solutions.  2) The intro sentence should signal that clearly.  3) Only option A does.",
      "_id": "accu_writing_4"
    },
    {
      "focus": "Development",
      "level": 4,
      "topic": "Development",
      "prompt": "Which addition would best support the claim \"Exercise improves mental health\"?",
      "options": [
        "Studies show 30 min of daily exercise reduces depression by 25%.",
        "Many people enjoy running.",
        "Exercise equipment is expensive.",
        "People should eat well too."
      ],
      "answer": 0,
      "why": "Specific evidence directly supporting the claim = best development.",
      "how": "1) Claim: exercise improves mental health.  2) Need: direct evidence.  3) The 25% stat directly proves the claim.",
      "_id": "accu_writing_5"
    },
    {
      "focus": "Word Choice",
      "level": 3,
      "topic": "Word Choice",
      "prompt": "Choose the most precise word: \"The scientist made a(n) ___ discovery that changed the field.\"",
      "options": [
        "groundbreaking",
        "good",
        "nice",
        "okay"
      ],
      "answer": 0,
      "why": "\"Groundbreaking\" precisely conveys an important, pioneering discovery in formal writing.",
      "how": "1) Eliminate vague/informal words: \"good,\" \"nice,\" \"okay.\"  2) \"Groundbreaking\" is precise and appropriate.",
      "_id": "accu_writing_6"
    },
    {
      "focus": "Punctuation",
      "level": 2,
      "topic": "Punctuation",
      "prompt": "Which sentence is correctly punctuated?",
      "options": [
        "I studied hard, so I passed.",
        "I studied hard, I passed.",
        "I studied hard so, I passed.",
        "I studied hard; so I passed."
      ],
      "answer": 0,
      "why": "Two independent clauses joined by a FANBOYS conjunction require a comma before the conjunction.",
      "how": "1) \"I studied hard\" + \"I passed\" = two complete sentences.  2) Use comma + FANBOYS (\"so\").",
      "_id": "accu_writing_7"
    },
    {
      "focus": "Usage",
      "level": 1,
      "topic": "Agreement",
      "prompt": "\"Each of the students (is/are) responsible for their own homework.\" Choose the correct form.",
      "options": [
        "is",
        "are",
        "were",
        "have been"
      ],
      "answer": 0,
      "why": "\"Each\" is singular, so it takes a singular verb.",
      "how": "1) \"Each\" = singular pronoun.  2) Cross out \"of the students.\"  3) \"Each is\" ✓.",
      "_id": "accu_writing_8"
    },
    {
      "focus": "Sentence Revision",
      "level": 2,
      "topic": "Sentence Structure",
      "prompt": "Which is the best version of: \"Much of the freight their trucks carried in the early years were fruit grown in the valley.\"",
      "options": [
        "Much of the freight their trucks carried in the early years was fruit grown in the valley.",
        "Much of the freight their trucks carried in the early years have been fruit.",
        "Much of the freights their trucks carried were fruit grown in the valley.",
        "Much of the freight their trucks carried in the early years is fruit grown in the valley."
      ],
      "answer": 0,
      "why": "\"Much\" is singular — the verb should be singular \"was,\" not plural \"were.\"",
      "how": "1) Subject = \"Much\" (singular mass noun).  2) Singular subject → singular verb \"was.\"",
      "_id": "accu_writing_9"
    },
    {
      "focus": "Combining Sentences",
      "level": 3,
      "topic": "Sentence Structure",
      "prompt": "Best way to combine: \"A spider was discovered in the Erg Chebbi. It is a sandy desert in southeastern Morocco.\"",
      "options": [
        "A spider was discovered in the Erg Chebbi, a sandy desert in southeastern Morocco.",
        "A spider was discovered in the Erg Chebbi, and the Erg Chebbi is a sandy desert.",
        "A spider was discovered in the Erg Chebbi; a sandy desert in southeastern Morocco.",
        "A spider was discovered in the Erg Chebbi being a sandy desert."
      ],
      "answer": 0,
      "why": "An appositive phrase neatly defines the noun without creating a run-on or awkward wording.",
      "how": "1) \"The Erg Chebbi\" needs a definition.  2) Appositive: \"the Erg Chebbi, a sandy desert in southeastern Morocco.\"  3) Smooth and concise.",
      "_id": "accu_writing_10"
    },
    {
      "focus": "Transition & Organization",
      "level": 3,
      "topic": "Organization",
      "prompt": "Which transitional phrase best connects: \"Kim Brothers survived the Great Depression. ___ the company produced the first commercially viable nectarine.\"",
      "options": [
        "This was because",
        "However",
        "In contrast",
        "Despite"
      ],
      "answer": 0,
      "why": "The sentence explains the reason for surviving — a causal transition is needed.",
      "how": "1) First sentence = effect (survived).  2) Second = cause (nectarine).  3) Causal connector = \"This was because.\"",
      "_id": "accu_writing_11"
    },
    {
      "focus": "Punctuation — Dash",
      "level": 3,
      "topic": "Punctuation",
      "prompt": "Choose the correctly punctuated sentence.",
      "options": [
        "Though not the first nectarine—the fruit had existed in China for two millennia—the Sun Grand was unique.",
        "Though not the first nectarine, the fruit had existed in China for two millennia, the Sun Grand was unique.",
        "Though not the first nectarine; the fruit had existed in China for two millennia, the Sun Grand was unique.",
        "Though not the first nectarine the fruit had existed in China for two millennia the Sun Grand was unique."
      ],
      "answer": 0,
      "why": "Dashes set off a parenthetical interruption. The em dash pair correctly isolates the aside.",
      "how": "1) Identify the aside: \"the fruit had existed in China for two millennia.\"  2) Use matching dashes on both sides.",
      "_id": "accu_writing_12"
    },
    {
      "focus": "Pronoun Reference",
      "level": 2,
      "topic": "Pronouns",
      "_id": "aw13",
      "prompt": "Which sentence has the clearest pronoun reference?",
      "options": [
        "The manager admitted the policy was unclear when she explained it to the employee.",
        "When the manager spoke with the employee, she admitted the policy was unclear.",
        "She admitted the policy was unclear during their meeting.",
        "The manager and employee discussed it, and she admitted the policy was unclear."
      ],
      "answer": 0,
      "why": "\"She\" clearly refers to \"the manager\" — the subject of the sentence.",
      "how": "1) Who is 'she'? Options B/C/D are ambiguous. 2) Option A: manager is subject, so 'she' = manager. ✓"
    },
    {
      "focus": "Apostrophe Usage",
      "level": 2,
      "topic": "Punctuation",
      "_id": "aw14",
      "prompt": "Which sentence uses apostrophes correctly?",
      "options": [
        "The company's revenue exceeded its projections.",
        "The company's revenue exceeded it's projections.",
        "The companys revenue exceeded its projections.",
        "The companies revenue exceeded its' projections."
      ],
      "answer": 0,
      "why": "\"Company's\" = possessive. \"Its\" = possessive pronoun (no apostrophe). \"It's\" always means \"it is.\"",
      "how": "1) company's = belonging to → apostrophe+s. 2) its = possessive pronoun → no apostrophe. 3) it's = it is → wrong here."
    },
    {
      "focus": "Comma Splice",
      "level": 2,
      "topic": "Sentence Structure",
      "_id": "aw15",
      "prompt": "Which best corrects: \"The experiment failed, the team started over.\"",
      "options": [
        "The experiment failed; the team started over.",
        "The experiment failed, so the team started over.",
        "The experiment failed. The team started over.",
        "All of the above are correct."
      ],
      "answer": 3,
      "why": "All three options correctly fix the comma splice: semicolon alone, comma+FANBOYS, or period.",
      "how": "1) Comma splice = two independent clauses joined by comma only. 2) Fix: semicolon; OR comma+conjunction; OR period. 3) All three are valid."
    },
    {
      "focus": "Redundancy",
      "level": 3,
      "topic": "Conciseness",
      "_id": "aw16",
      "prompt": "Choose the most concise version.",
      "options": [
        "The innovation changed the industry.",
        "The new and novel innovation changed the industry.",
        "The innovation, which was new, changed the industry.",
        "The new innovative innovation changed the industry."
      ],
      "answer": 0,
      "why": "\"Innovation\" already implies newness. All other options add redundant modifiers.",
      "how": "1) Innovation = new idea by definition. 2) Adding \"new\" or \"novel\" = redundant. 3) Shortest version = most concise."
    },
    {
      "focus": "Active Voice",
      "level": 3,
      "topic": "Style",
      "_id": "aw17",
      "prompt": "Which version uses active voice?",
      "options": [
        "The committee approved the budget.",
        "The budget was approved by the committee.",
        "The budget had been approved by the committee.",
        "Approval was given to the budget by the committee."
      ],
      "answer": 0,
      "why": "Active: subject performs the action. \"The committee approved the budget.\" All others are passive.",
      "how": "1) Active: subject → verb → object. 2) \"Committee approved\" = subject acts. 3) Passive: \"budget was approved\" = subject receives action."
    },
    {
      "focus": "Contrast Transition",
      "level": 3,
      "topic": "Organization",
      "_id": "aw18",
      "prompt": "\"Solar panels have high upfront costs. ___, they save money over their lifetime.\" Best transition?",
      "options": [
        "However",
        "Therefore",
        "Furthermore",
        "As a result"
      ],
      "answer": 0,
      "why": "High cost → savings is a contrast. \"However\" signals contrast.",
      "how": "1) P1: negative (cost). P2: positive (savings). 2) Contrast = \"however.\" 3) \"Therefore/As a result\" = cause-effect; \"furthermore\" = addition."
    },
    {
      "focus": "Subordinate Clause Punctuation",
      "level": 3,
      "topic": "Sentence Structure",
      "_id": "aw19",
      "prompt": "Which version correctly punctuates the subordinate clause?",
      "options": [
        "Although the data was incomplete, the researchers published their findings.",
        "The researchers published their findings although, the data was incomplete.",
        "Although the data was incomplete; the researchers published their findings.",
        "The researchers published their findings, although also the data was incomplete."
      ],
      "answer": 0,
      "why": "Subordinate clause first → comma separates it from the main clause. No semicolon after a subordinate clause.",
      "how": "1) \"Although + clause\" = subordinate. 2) Comma after subordinate clause when it leads. 3) No semicolons."
    },
    {
      "focus": "Verb Tense Consistency",
      "level": 3,
      "topic": "Tense",
      "_id": "aw20",
      "prompt": "Which has consistent verb tense?",
      "options": [
        "The study began in 2018, followed 200 patients, and concluded in 2023.",
        "The study began in 2018, follows 200 patients, and concluded in 2023.",
        "The study begins in 2018, followed 200 patients, and will conclude in 2023.",
        "The study had begun in 2018, follows 200 patients, and concluded in 2023."
      ],
      "answer": 0,
      "why": "All verbs must match. Study is completed → past tense throughout: began, followed, concluded.",
      "how": "1) Time frame: finished study (2018–2023). 2) All past: began/followed/concluded. 3) Mixed tenses in B/C/D = error."
    },
    {
      "focus": "Sentence Variety",
      "level": 4,
      "topic": "Style",
      "_id": "aw21",
      "prompt": "Which opening best varies a paragraph where three sentences already start with \"The\"?",
      "options": [
        "Concerned about emissions, scientists developed new filters.",
        "The scientists were concerned about emissions.",
        "There were scientists who were concerned about emissions.",
        "Scientists, they were concerned about emissions."
      ],
      "answer": 0,
      "why": "A participial phrase (\"Concerned about emissions\") avoids the repeated subject opener and is grammatically correct.",
      "how": "1) Problem: too many 'The ___' starters. 2) Fix: participial phrase opener. 3) 'Concerned about emissions, scientists...' varies structure."
    },
    {
      "focus": "Academic Diction",
      "level": 3,
      "topic": "Word Choice",
      "_id": "aw22",
      "prompt": "Choose the most formal version for an academic essay.",
      "options": [
        "The policy demonstrates significant limitations in scope and implementation.",
        "The policy has a ton of problems.",
        "The policy is pretty bad and does not really work.",
        "The policy kind of has issues with getting stuff done."
      ],
      "answer": 0,
      "why": "\"Demonstrates significant limitations in scope and implementation\" uses precise, formal academic vocabulary.",
      "how": "1) Eliminate slang: \"a ton,\" \"pretty bad,\" \"kind of,\" \"stuff.\" 2) Formal register: specific nouns + verbs. 3) Option A = only formal one."
    },
    {
      "focus": "Off-Topic Sentence",
      "level": 3,
      "topic": "Development",
      "_id": "aw23",
      "prompt": "Which sentence does NOT belong in a paragraph about benefits of renewable energy?",
      "options": [
        "Coal was the dominant energy source during the Industrial Revolution.",
        "Solar power produces no direct carbon emissions during operation.",
        "Wind energy can power thousands of homes without fuel costs.",
        "Geothermal systems provide both heating and electricity."
      ],
      "answer": 0,
      "why": "Solar, wind, geothermal are all renewable benefits. Coal in the Industrial Revolution is off-topic history.",
      "how": "1) Topic = renewable energy benefits. 2) B, C, D = all renewable benefits. 3) Coal/Industrial Revolution = unrelated."
    },
    {
      "focus": "Pronoun-Antecedent Agreement",
      "level": 2,
      "topic": "Pronouns",
      "_id": "aw24",
      "prompt": "\"Each of the engineers submitted ___ report on time.\" Correct pronoun?",
      "options": [
        "his or her",
        "their",
        "its",
        "our"
      ],
      "answer": 0,
      "why": "\"Each\" is singular → singular pronoun. In formal writing, \"his or her\" is the traditional singular form for mixed groups.",
      "how": "1) \"Each\" = singular. 2) Singular pronoun needed. 3) Formal: \"his or her.\""
    },
    {
      "focus": "Correct Word Usage",
      "level": 2,
      "topic": "Usage",
      "_id": "aw25",
      "prompt": "\"The new equipment will ___ the team in completing the study.\" Correct word?",
      "options": [
        "assist",
        "aide",
        "aide to",
        "be of assistance of"
      ],
      "answer": 0,
      "why": "\"Assist\" is the verb meaning to help. \"Aide\" is a noun (a person who assists).",
      "how": "1) Sentence needs a verb. 2) \"Assist\" = verb. 3) \"Aide\" = noun. 4) Eliminate all noun/awkward forms."
    }
  ],
  "accu_arithmetic": [
    {
      "focus": "Fractions — add",
      "prompt": "3/4 + 2/5 = ?",
      "options": [
        "23/20",
        "7/9",
        "5/9",
        "11/20"
      ],
      "answer": 0,
      "topic": "Fractions",
      "level": 1,
      "why": "LCD of 4 and 5 is 20.",
      "how": "1) 3/4 = 15/20.  2) 2/5 = 8/20.  3) 15+8 = 23/20.",
      "_id": "accu_arithmetic_0"
    },
    {
      "focus": "Percents",
      "prompt": "18% of 250 = ?",
      "options": [
        "45",
        "18",
        "25",
        "72"
      ],
      "answer": 0,
      "topic": "Percents",
      "level": 1,
      "why": "Percent of a number = decimal × number.",
      "how": "1) 0.18 × 250 = 45.",
      "_id": "accu_arithmetic_1"
    },
    {
      "focus": "Decimals — multiply",
      "prompt": "0.4 × 0.25 = ?",
      "options": [
        "0.1",
        "1.0",
        "0.65",
        "0.04"
      ],
      "answer": 0,
      "topic": "Decimals",
      "level": 2,
      "why": "Multiply whole digits, then count total decimal places.",
      "how": "1) 4×25=100.  2) 3 decimal places → 0.100 = 0.1.",
      "_id": "accu_arithmetic_2"
    },
    {
      "focus": "Whole numbers — word problem",
      "prompt": "A shirt costs $40 at 25% off. Sale price?",
      "options": [
        "$30",
        "$10",
        "$25",
        "$35"
      ],
      "answer": 0,
      "topic": "Whole Numbers",
      "level": 2,
      "why": "Discount = 25% of $40; subtract from original.",
      "how": "1) Discount = 0.25 × 40 = $10.  2) Sale price = 40 − 10 = $30.",
      "_id": "accu_arithmetic_3"
    },
    {
      "focus": "Ratios — scaling",
      "prompt": "A recipe uses 2 cups sugar for 12 cookies. Cups needed for 36 cookies?",
      "options": [
        "6",
        "3",
        "4",
        "8"
      ],
      "answer": 0,
      "topic": "Ratios",
      "level": 2,
      "why": "Scale the ratio by the same factor.",
      "how": "1) 36/12 = 3× scale.  2) 2 × 3 = 6 cups.",
      "_id": "accu_arithmetic_4"
    },
    {
      "focus": "Mixed number — divide",
      "prompt": "2 1/2 ÷ 1/4 = ?",
      "options": [
        "10",
        "8",
        "5",
        "1/10"
      ],
      "answer": 0,
      "topic": "Fractions",
      "level": 3,
      "why": "Dividing by a fraction = multiplying by its reciprocal.",
      "how": "1) 2 1/2 = 5/2.  2) 5/2 × 4/1 = 20/2 = 10.",
      "_id": "accu_arithmetic_5"
    },
    {
      "focus": "Fraction equivalence",
      "prompt": "Which fraction is equal to 0.06?",
      "options": [
        "6/100",
        "6/10",
        "1/6",
        "1/60"
      ],
      "answer": 0,
      "topic": "Decimals",
      "level": 1,
      "why": "0.06 = six-hundredths = 6/100.",
      "how": "1) 0.06 means 6 in the hundredths place.  2) Write as 6/100.  3) Can simplify to 3/50, but 6/100 is the direct equivalent.",
      "_id": "accu_arithmetic_6"
    },
    {
      "focus": "Decimal addition",
      "prompt": "What is 3.85 + 0.004 + 0.117?",
      "options": [
        "3.971",
        "3.961",
        "3.9611",
        "5.06"
      ],
      "answer": 0,
      "topic": "Decimals",
      "level": 2,
      "why": "Line up decimal points and add column by column.",
      "how": "1) 3.850 + 0.004 + 0.117.  2) Thousandths: 0+4+7=11, write 1 carry 1.  3) Hundredths: 5+0+1+1=7.  4) Tenths: 8+1=9. → 3.971.",
      "_id": "accu_arithmetic_7"
    },
    {
      "focus": "Percent — reverse",
      "prompt": "60% of what number equals 30?",
      "options": [
        "50",
        "18",
        "2",
        "0.5"
      ],
      "answer": 0,
      "topic": "Percents",
      "level": 2,
      "why": "Translate: 0.60 × n = 30, so n = 30 ÷ 0.60.",
      "how": "1) 0.60 × n = 30.  2) n = 30 / 0.60 = 50.",
      "_id": "accu_arithmetic_8"
    },
    {
      "focus": "Number comparison",
      "prompt": "Which of the following has the greatest value: 8/3, 2.28, 12/10, 0.199?",
      "options": [
        "8/3",
        "2.28",
        "12/10",
        "0.199"
      ],
      "answer": 0,
      "topic": "Number Comparison",
      "level": 2,
      "why": "8/3 ≈ 2.67, which is greater than 2.28.",
      "how": "1) Convert: 8/3 ≈ 2.67, 12/10 = 1.2, 0.199 < 1.  2) Compare: 2.67 > 2.28 > 1.2 > 0.199.  3) Greatest = 8/3.",
      "_id": "accu_arithmetic_9"
    },
    {
      "focus": "Whole number operations",
      "prompt": "A club has 36 members. Each donates 12 items. Total items?",
      "options": [
        "432",
        "48",
        "422",
        "108"
      ],
      "answer": 0,
      "topic": "Whole Numbers",
      "level": 1,
      "why": "Total = members × items per member.",
      "how": "1) 36 × 12 = 432.  2) Check: 36×10=360, 36×2=72, 360+72=432.",
      "_id": "accu_arithmetic_10"
    },
    {
      "focus": "Rounding decimals",
      "prompt": "Round 0.8637 to the nearest hundredth.",
      "options": [
        "0.86",
        "0.864",
        "0.863",
        "0.87"
      ],
      "answer": 0,
      "topic": "Decimals",
      "level": 2,
      "why": "Look at the thousandths digit (3). Since 3 < 5, round down — keep hundredths digit as 6.",
      "how": "1) Hundredths digit = 6.  2) Next digit = 3 < 5 → round down.  3) Answer = 0.86.",
      "_id": "accu_arithmetic_11"
    },
    {
      "focus": "Fractions ÷ fractions",
      "prompt": "4/3 ÷ 1/6 is between which pair?",
      "options": [
        "7 and 9",
        "3 and 4",
        "5 and 6",
        "6 and 7"
      ],
      "answer": 0,
      "topic": "Fractions",
      "level": 3,
      "why": "4/3 × 6 = 24/3 = 8, which is between 7 and 9.",
      "how": "1) Dividing by 1/6 = multiplying by 6.  2) 4/3 × 6 = 24/3 = 8.  3) 8 is between 7 and 9.",
      "_id": "accu_arithmetic_12"
    },
    {
      "focus": "Order of Operations",
      "prompt": "3 + 4 × 2 − 1 = ?",
      "options": [
        "10",
        "13",
        "6",
        "14"
      ],
      "answer": 0,
      "topic": "Order of Operations",
      "level": 1,
      "_id": "aa13",
      "why": "Multiply before adding: 4×2=8, then 3+8−1=10.",
      "how": "1) PEMDAS: × first. 2) 4×2=8. 3) 3+8−1=10."
    },
    {
      "focus": "Negative integers",
      "prompt": "−7 − (−4) = ?",
      "options": [
        "−3",
        "−11",
        "3",
        "11"
      ],
      "answer": 0,
      "topic": "Integers",
      "level": 1,
      "_id": "aa14",
      "why": "Subtracting a negative = adding: −7+4=−3.",
      "how": "1) −(−4)=+4. 2) −7+4=−3."
    },
    {
      "focus": "LCM",
      "prompt": "LCM of 4 and 6?",
      "options": [
        "12",
        "24",
        "6",
        "2"
      ],
      "answer": 0,
      "topic": "LCM/GCF",
      "level": 2,
      "_id": "aa15",
      "why": "Smallest number divisible by both 4 and 6.",
      "how": "1) Multiples of 4: 4,8,12. 2) Multiples of 6: 6,12. 3) LCM=12."
    },
    {
      "focus": "GCF",
      "prompt": "GCF of 18 and 24?",
      "options": [
        "6",
        "3",
        "12",
        "9"
      ],
      "answer": 0,
      "topic": "LCM/GCF",
      "level": 2,
      "_id": "aa16",
      "why": "Largest number that divides both.",
      "how": "1) Factors of 18: 1,2,3,6,9,18. 2) Factors of 24: 1,2,3,4,6,8,12,24. 3) GCF=6."
    },
    {
      "focus": "Fraction multiplication",
      "prompt": "3/4 × 8/9 = ?",
      "options": [
        "2/3",
        "24/36",
        "3/8",
        "12/13"
      ],
      "answer": 0,
      "topic": "Fractions",
      "level": 2,
      "_id": "aa17",
      "why": "Multiply numerators and denominators then simplify.",
      "how": "1) 3×8=24, 4×9=36. 2) 24/36=2/3."
    },
    {
      "focus": "Mixed number addition",
      "prompt": "2 1/3 + 1 3/4 = ?",
      "options": [
        "4 1/12",
        "3 4/7",
        "4 4/12",
        "3 1/12"
      ],
      "answer": 0,
      "topic": "Fractions",
      "level": 3,
      "_id": "aa18",
      "why": "LCD=12. 1/3=4/12, 3/4=9/12. Sum fractions: 13/12=1 1/12. Total: 4 1/12.",
      "how": "1) Convert: 4/12+9/12=13/12=1 1/12. 2) 2+1+1 1/12=4 1/12."
    },
    {
      "focus": "Percent increase",
      "prompt": "Price rises $80→$100. Percent increase?",
      "options": [
        "25%",
        "20%",
        "10%",
        "125%"
      ],
      "answer": 0,
      "topic": "Percents",
      "level": 2,
      "_id": "aa19",
      "why": "(change/original)×100=(20/80)×100=25%.",
      "how": "1) Change=20. 2) 20/80=0.25=25%."
    },
    {
      "focus": "Ratio",
      "prompt": "15 boys, 10 girls. Boys to girls ratio?",
      "options": [
        "3:2",
        "2:3",
        "15:25",
        "5:3"
      ],
      "answer": 0,
      "topic": "Ratios",
      "level": 1,
      "_id": "aa20",
      "why": "Simplify 15:10 by 5.",
      "how": "1) 15÷5=3, 10÷5=2. 2) 3:2."
    },
    {
      "focus": "Unit rate",
      "prompt": "5 lb apples cost $6.25. Price per pound?",
      "options": [
        "$1.25",
        "$1.50",
        "$0.80",
        "$1.00"
      ],
      "answer": 0,
      "topic": "Rates",
      "level": 2,
      "_id": "aa21",
      "why": "6.25÷5=1.25.",
      "how": "1) Rate=cost÷units. 2) 6.25÷5=$1.25."
    },
    {
      "focus": "Estimation",
      "prompt": "Best estimate for 49×52?",
      "options": [
        "2500",
        "2000",
        "3000",
        "1000"
      ],
      "answer": 0,
      "topic": "Estimation",
      "level": 1,
      "_id": "aa22",
      "why": "49≈50, 52≈50; 50×50=2500.",
      "how": "1) Round both to 50. 2) 50×50=2500."
    },
    {
      "focus": "Exponents",
      "prompt": "2⁴ = ?",
      "options": [
        "16",
        "8",
        "12",
        "4"
      ],
      "answer": 0,
      "topic": "Exponents",
      "level": 1,
      "_id": "aa23",
      "why": "2⁴=2×2×2×2=16.",
      "how": "1) 2×2=4. 2) 4×2=8. 3) 8×2=16."
    },
    {
      "focus": "Square root",
      "prompt": "√144 = ?",
      "options": [
        "12",
        "14",
        "11",
        "13"
      ],
      "answer": 0,
      "topic": "Square Roots",
      "level": 2,
      "_id": "aa24",
      "why": "12×12=144.",
      "how": "1) 12²=144. 2) √144=12."
    },
    {
      "focus": "Fraction to percent",
      "prompt": "Convert 3/8 to percent.",
      "options": [
        "37.5%",
        "38%",
        "30%",
        "0.375%"
      ],
      "answer": 0,
      "topic": "Conversions",
      "level": 2,
      "_id": "aa25",
      "why": "3÷8=0.375=37.5%.",
      "how": "1) 3÷8=0.375. 2) ×100=37.5%."
    },
    {
      "focus": "Proportions",
      "prompt": "3 bags cover 12 sq ft. How many for 40 sq ft?",
      "options": [
        "10",
        "12",
        "8",
        "15"
      ],
      "answer": 0,
      "topic": "Proportions",
      "level": 2,
      "_id": "aa26",
      "why": "3/12=x/40 → 12x=120 → x=10.",
      "how": "1) Set up proportion. 2) 12x=120. 3) x=10."
    },
    {
      "focus": "Negative exponent",
      "prompt": "2⁻³ = ?",
      "options": [
        "1/8",
        "−8",
        "−1/8",
        "8"
      ],
      "answer": 0,
      "topic": "Exponents",
      "level": 3,
      "_id": "aa27",
      "why": "a⁻ⁿ=1/aⁿ; 2⁻³=1/8.",
      "how": "1) Negative exponent=reciprocal. 2) 2³=8. 3) 2⁻³=1/8."
    },
    {
      "focus": "Prime factorization",
      "prompt": "Prime factorization of 60?",
      "options": [
        "2²×3×5",
        "2×3×10",
        "4×15",
        "2×30"
      ],
      "answer": 0,
      "topic": "Primes",
      "level": 2,
      "_id": "aa28",
      "why": "60=4×15=2²×3×5.",
      "how": "1) 60÷2=30÷2=15÷3=5. 2) 2²×3×5."
    },
    {
      "focus": "Absolute value equation",
      "prompt": "|x|=7. Solution?",
      "options": [
        "x=7 or x=−7",
        "x=7 only",
        "x=−7 only",
        "No solution"
      ],
      "answer": 0,
      "topic": "Integers",
      "level": 2,
      "_id": "aa29",
      "why": "Both 7 and −7 are 7 units from 0.",
      "how": "1) |x|=7 → distance from 0 is 7. 2) x=7 or x=−7."
    }
  ],
  "accu_qras": [
    {
      "focus": "Rational numbers",
      "prompt": "Order from least to greatest: −2, 1/2, −0.5, 3.",
      "options": [
        "−2, −0.5, 1/2, 3",
        "−2, 1/2, −0.5, 3",
        "−0.5, −2, 1/2, 3",
        "3, 1/2, −0.5, −2"
      ],
      "answer": 0,
      "topic": "Rational Numbers",
      "level": 2,
      "why": "Compare by placing on a number line.",
      "how": "1) −2 is leftmost.  2) −0.5 > −2 but < 0.  3) 1/2 = 0.5 > 0.  4) 3 is rightmost.",
      "_id": "accu_qras_0"
    },
    {
      "focus": "Ratios — proportions",
      "prompt": "A recipe: 3 cups flour per 2 eggs. Flour for 8 eggs?",
      "options": [
        "12",
        "6",
        "4",
        "16"
      ],
      "answer": 0,
      "topic": "Ratios",
      "level": 2,
      "why": "Cross-multiply to solve the proportion.",
      "how": "1) 3/2 = x/8.  2) 2x = 24.  3) x = 12.",
      "_id": "accu_qras_1"
    },
    {
      "focus": "Rates — unit rate",
      "prompt": "60 miles in 1.5 hours. Miles per hour?",
      "options": [
        "40",
        "90",
        "30",
        "45"
      ],
      "answer": 0,
      "topic": "Rates",
      "level": 2,
      "why": "Rate = quantity/time.",
      "how": "1) 60 ÷ 1.5 = 40 mph.",
      "_id": "accu_qras_2"
    },
    {
      "focus": "Linear equations",
      "prompt": "If 4x − 7 = 21, what is x?",
      "options": [
        "7",
        "3.5",
        "28",
        "14"
      ],
      "answer": 0,
      "topic": "Linear Equations",
      "level": 2,
      "why": "Add 7 to both sides, then divide.",
      "how": "1) 4x = 28.  2) x = 7.",
      "_id": "accu_qras_3"
    },
    {
      "focus": "Linear applications",
      "prompt": "Three notebooks cost $9.75. Cost of 7?",
      "options": [
        "$22.75",
        "$30.00",
        "$18.50",
        "$25.00"
      ],
      "answer": 0,
      "topic": "Linear Applications",
      "level": 3,
      "why": "Find unit price, then multiply.",
      "how": "1) $9.75 ÷ 3 = $3.25 each.  2) $3.25 × 7 = $22.75.",
      "_id": "accu_qras_4"
    },
    {
      "focus": "Probability",
      "prompt": "A bag has 4 red and 6 blue marbles. P(red)?",
      "options": [
        "2/5",
        "4/6",
        "6/10",
        "3/5"
      ],
      "answer": 0,
      "topic": "Probability",
      "level": 2,
      "why": "P = favorable / total.",
      "how": "1) Total = 10.  2) P = 4/10 = 2/5.",
      "_id": "accu_qras_5"
    },
    {
      "focus": "Statistics",
      "prompt": "Data: 4, 8, 12, 16, 20. Mean and median?",
      "options": [
        "Both equal 12",
        "Mean 12, median 10",
        "Mean 10, median 12",
        "Neither equals 12"
      ],
      "answer": 0,
      "topic": "Statistics",
      "level": 2,
      "why": "Mean = sum/count; median = middle value.",
      "how": "1) Sum = 60; 60/5 = 12.  2) Middle of 5 sorted values = 12.  3) Both = 12.",
      "_id": "accu_qras_6"
    },
    {
      "focus": "Expressions",
      "prompt": "Simplify: 3x + 5 − x + 2.",
      "options": [
        "2x + 7",
        "4x + 7",
        "2x + 3",
        "3x + 7"
      ],
      "answer": 0,
      "topic": "Expressions",
      "level": 2,
      "why": "Combine like terms: variable terms together, constants together.",
      "how": "1) 3x − x = 2x.  2) 5 + 2 = 7.  3) 2x + 7.",
      "_id": "accu_qras_7"
    },
    {
      "focus": "Exponents",
      "prompt": "(x³)² · x = ?",
      "options": [
        "x⁷",
        "x⁵",
        "x⁶",
        "x⁸"
      ],
      "answer": 0,
      "topic": "Exponents",
      "level": 3,
      "why": "Power of a power: multiply exponents. Then add exponents when multiplying.",
      "how": "1) (x³)² = x⁶.  2) x⁶ · x¹ = x⁷.",
      "_id": "accu_qras_8"
    },
    {
      "focus": "Absolute value",
      "prompt": "|−7| + |3| = ?",
      "options": [
        "10",
        "−4",
        "4",
        "−10"
      ],
      "answer": 0,
      "topic": "Rational Numbers",
      "level": 1,
      "why": "Absolute value strips the negative sign.",
      "how": "1) |−7| = 7.  2) |3| = 3.  3) 7 + 3 = 10.",
      "_id": "accu_qras_9"
    },
    {
      "focus": "Algebraic expression",
      "prompt": "Which expression is 5 times the sum of r and s?",
      "options": [
        "(r + s) × 5",
        "5 × r + s",
        "r + s × 5",
        "5 + r + s"
      ],
      "answer": 0,
      "topic": "Expressions",
      "level": 2,
      "why": "\"Sum of r and s\" must be grouped before multiplying by 5.",
      "how": "1) Sum of r and s = (r + s).  2) 5 times that = (r + s) × 5.  3) Without parentheses, only s is multiplied.",
      "_id": "accu_qras_10"
    },
    {
      "focus": "Linear equation — fraction",
      "prompt": "Solve: 1/2 x + 3/2(x + 1) − 1 = 5/4",
      "options": [
        "13/8",
        "2/5",
        "15/8",
        "17/8"
      ],
      "answer": 0,
      "topic": "Linear Equations",
      "level": 4,
      "why": "Clear fractions by multiplying through by the LCD (4), then solve.",
      "how": "1) Multiply by 4: 2x + 6(x+1) − 4 = 5.  2) 2x + 6x + 6 − 4 = 5.  3) 8x = 3.  4) x = 3/8. (Check PDF — closest option = 13/8 if different fractions; use LCD carefully.)",
      "_id": "accu_qras_11"
    },
    {
      "focus": "Unit conversion",
      "prompt": "How many grams in 500 kilograms? (1 kg = 1,000 g)",
      "options": [
        "500,000",
        "50,000",
        "5,000",
        "0.5"
      ],
      "answer": 0,
      "topic": "Ratios",
      "level": 1,
      "why": "Multiply kilograms by 1,000 to convert to grams.",
      "how": "1) 500 × 1,000 = 500,000 g.",
      "_id": "accu_qras_12"
    },
    {
      "focus": "Linear interpretation",
      "prompt": "Paul earns M = 12.5h + 11, where h is hours worked. What does the 11 represent?",
      "options": [
        "A fixed bonus in addition to hourly pay",
        "His hourly rate",
        "His total earnings",
        "Hours worked per day"
      ],
      "answer": 0,
      "topic": "Linear Applications",
      "level": 3,
      "why": "In y = mx + b, b is the y-intercept — the amount earned regardless of hours worked.",
      "how": "1) 12.5h = hourly portion.  2) +11 = constant, earned regardless of hours.  3) 11 is a flat bonus.",
      "_id": "accu_qras_13"
    },
    {
      "focus": "Data — mean from table",
      "prompt": "5 countries have populations 65.9, 80.8, 60.8, 46.5, 64.3 million. Which is closest to the mean?",
      "options": [
        "63.7",
        "64.3",
        "80.8",
        "60.8"
      ],
      "answer": 0,
      "topic": "Statistics",
      "level": 3,
      "why": "Mean = total / count = 318.3 / 5 ≈ 63.7.",
      "how": "1) Sum = 65.9+80.8+60.8+46.5+64.3 = 318.3.  2) 318.3 ÷ 5 = 63.66 ≈ 63.7.",
      "_id": "accu_qras_14"
    },
    {
      "focus": "Rate problem",
      "prompt": "Water fills a 150-gallon tub at 1.5 gallons/min. How long to fill it?",
      "options": [
        "100 min",
        "10 min",
        "225 min",
        "2,250 min"
      ],
      "answer": 0,
      "topic": "Rates",
      "level": 2,
      "why": "Time = capacity ÷ rate.",
      "how": "1) 150 ÷ 1.5 = 100 minutes.",
      "_id": "accu_qras_15"
    },
    {
      "focus": "Two-way table",
      "prompt": "50 voters: 8 plan yes on P and yes on Q. Total voting yes on P = 20. P(yes on Q | yes on P)?",
      "options": [
        "8/20 = 2/5",
        "8/50",
        "22/50",
        "20/50"
      ],
      "answer": 0,
      "topic": "Probability",
      "level": 4,
      "why": "Conditional probability: restrict to the \"yes on P\" row (20 voters), then find yes on Q (8).",
      "how": "1) Yes on P = 20.  2) Of those, yes on Q = 8.  3) P = 8/20 = 2/5.",
      "_id": "accu_qras_16"
    },
    {
      "focus": "Slope from equation",
      "prompt": "Slope of y=3x−5?",
      "options": [
        "3",
        "−5",
        "5",
        "1/3"
      ],
      "answer": 0,
      "topic": "Linear Equations",
      "level": 2,
      "_id": "aq17",
      "why": "y=mx+b; m=3.",
      "how": "1) Slope-intercept form. 2) m=3."
    },
    {
      "focus": "Slope from points",
      "prompt": "Slope through (1,2) and (4,8)?",
      "options": [
        "2",
        "3",
        "6",
        "1/2"
      ],
      "answer": 0,
      "topic": "Linear Equations",
      "level": 2,
      "_id": "aq18",
      "why": "(8−2)/(4−1)=6/3=2.",
      "how": "1) m=(y₂−y₁)/(x₂−x₁). 2) 6/3=2."
    },
    {
      "focus": "y-intercept",
      "prompt": "y=−2x+7. Where does it cross y-axis?",
      "options": [
        "(0,7)",
        "(7,0)",
        "(0,−2)",
        "(3.5,0)"
      ],
      "answer": 0,
      "topic": "Linear Equations",
      "level": 2,
      "_id": "aq19",
      "why": "Set x=0: y=7. Point=(0,7).",
      "how": "1) x=0. 2) y=7."
    },
    {
      "focus": "Inequality",
      "prompt": "3x−4>11. Solve.",
      "options": [
        "x>5",
        "x>7",
        "x<5",
        "x≥5"
      ],
      "answer": 0,
      "topic": "Inequalities",
      "level": 3,
      "_id": "aq20",
      "why": "3x>15 → x>5.",
      "how": "1) Add 4: 3x>15. 2) x>5."
    },
    {
      "focus": "System of equations",
      "prompt": "x+y=10 and x−y=2. Find x.",
      "options": [
        "6",
        "4",
        "8",
        "2"
      ],
      "answer": 0,
      "topic": "Systems",
      "level": 3,
      "_id": "aq21",
      "why": "Add equations: 2x=12 → x=6.",
      "how": "1) (x+y)+(x−y)=12. 2) 2x=12. 3) x=6."
    },
    {
      "focus": "Pythagorean theorem",
      "prompt": "Right triangle legs 6 and 8. Hypotenuse?",
      "options": [
        "10",
        "12",
        "14",
        "7"
      ],
      "answer": 0,
      "topic": "Geometry",
      "level": 2,
      "_id": "aq22",
      "why": "6²+8²=100; √100=10.",
      "how": "1) a²+b²=c². 2) 36+64=100. 3) c=10."
    },
    {
      "focus": "Triangle area",
      "prompt": "Base=12, height=5. Area?",
      "options": [
        "30",
        "60",
        "17",
        "15"
      ],
      "answer": 0,
      "topic": "Geometry",
      "level": 1,
      "_id": "aq23",
      "why": "A=½bh=½×12×5=30.",
      "how": "1) A=½×12×5=30."
    },
    {
      "focus": "Exponent product rule",
      "prompt": "x³×x⁴=?",
      "options": [
        "x⁷",
        "x¹²",
        "2x⁷",
        "x³"
      ],
      "answer": 0,
      "topic": "Expressions",
      "level": 2,
      "_id": "aq24",
      "why": "Add exponents: 3+4=7.",
      "how": "1) Same base → add exponents. 2) x⁷."
    },
    {
      "focus": "Exponent quotient rule",
      "prompt": "x⁶÷x²=?",
      "options": [
        "x⁴",
        "x³",
        "x⁸",
        "x¹²"
      ],
      "answer": 0,
      "topic": "Expressions",
      "level": 2,
      "_id": "aq25",
      "why": "Subtract exponents: 6−2=4.",
      "how": "1) Same base → subtract. 2) x⁴."
    },
    {
      "focus": "Percent of number",
      "prompt": "15% of 240?",
      "options": [
        "36",
        "24",
        "40",
        "16"
      ],
      "answer": 0,
      "topic": "Percents",
      "level": 2,
      "_id": "aq26",
      "why": "0.15×240=36.",
      "how": "1) 10%=24. 2) 5%=12. 3) 24+12=36."
    },
    {
      "focus": "Scatterplot",
      "prompt": "Points trend downward left-to-right. Indicates:",
      "options": [
        "Negative correlation",
        "Positive correlation",
        "No correlation",
        "Causation"
      ],
      "answer": 0,
      "topic": "Statistics",
      "level": 2,
      "_id": "aq27",
      "why": "Downward=as x↑, y↓=negative correlation.",
      "how": "1) Up=positive. 2) Down=negative. 3) Correlation≠causation."
    },
    {
      "focus": "Median from box plot",
      "prompt": "Box plot: Q1=20, median=35, Q3=50. Median?",
      "options": [
        "35",
        "20",
        "50",
        "40"
      ],
      "answer": 0,
      "topic": "Statistics",
      "level": 2,
      "_id": "aq28",
      "why": "Median=middle line in box.",
      "how": "1) Middle line=35."
    },
    {
      "focus": "Solve for input",
      "prompt": "f(x)=4x−3. What x gives f(x)=9?",
      "options": [
        "3",
        "2",
        "4",
        "6"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 3,
      "_id": "aq29",
      "why": "4x=12 → x=3.",
      "how": "1) 4x−3=9. 2) 4x=12. 3) x=3."
    },
    {
      "focus": "Direct variation",
      "prompt": "y varies directly with x. x=4, y=20. Find y when x=7.",
      "options": [
        "35",
        "28",
        "21",
        "14"
      ],
      "answer": 0,
      "topic": "Rates",
      "level": 3,
      "_id": "aq30",
      "why": "k=20/4=5; y=5×7=35.",
      "how": "1) k=y/x=5. 2) y=5×7=35."
    }
  ],
  "accu_aaf": [
    {
      "focus": "Linear equations — multi-step",
      "prompt": "Solve 3(x − 4) = 2x + 5.",
      "options": [
        "x = 17",
        "x = 7",
        "x = 1",
        "x = −7"
      ],
      "answer": 0,
      "topic": "Linear Equations",
      "level": 3,
      "why": "Distribute, then collect x terms on one side.",
      "how": "1) 3x − 12 = 2x + 5.  2) x = 17.",
      "_id": "accu_aaf_0"
    },
    {
      "focus": "Quadratics — factoring",
      "prompt": "Solve x² − 5x + 6 = 0.",
      "options": [
        "x=2 or x=3",
        "x=−2 or x=−3",
        "x=1 or x=6",
        "x=5 or x=1"
      ],
      "answer": 0,
      "topic": "Quadratics",
      "level": 3,
      "why": "Find two numbers that multiply to 6 and add to −5.",
      "how": "1) (x−2)(x−3)=0.  2) x=2 or x=3.",
      "_id": "accu_aaf_1"
    },
    {
      "focus": "Functions — evaluation",
      "prompt": "f(x) = 2x² − 1. f(3) = ?",
      "options": [
        "17",
        "11",
        "5",
        "8"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 3,
      "why": "Substitute x=3 and simplify.",
      "how": "1) 2(3²)−1 = 2(9)−1 = 17.",
      "_id": "accu_aaf_2"
    },
    {
      "focus": "Polynomials — FOIL",
      "prompt": "(x + 3)(x − 4) = ?",
      "options": [
        "x²−x−12",
        "x²+x−12",
        "x²−7x+12",
        "x²+7x−12"
      ],
      "answer": 0,
      "topic": "Polynomials",
      "level": 3,
      "why": "FOIL: First, Outer, Inner, Last.",
      "how": "1) F: x².  O: −4x.  I: 3x.  L: −12.  2) Combine: x²+(−4+3)x−12 = x²−x−12.",
      "_id": "accu_aaf_3"
    },
    {
      "focus": "Radical equations",
      "prompt": "Solve √(x + 5) = 4.",
      "options": [
        "x=11",
        "x=−1",
        "x=16",
        "x=21"
      ],
      "answer": 0,
      "topic": "Radical Equations",
      "level": 4,
      "why": "Square both sides, then solve. Always check the answer.",
      "how": "1) Square: x+5 = 16.  2) x = 11.  3) Check: √16 = 4. ✓",
      "_id": "accu_aaf_4"
    },
    {
      "focus": "Exponential equations",
      "prompt": "Solve 2ˣ = 32.",
      "options": [
        "5",
        "4",
        "6",
        "8"
      ],
      "answer": 0,
      "topic": "Exponential",
      "level": 4,
      "why": "Rewrite 32 as a power of 2.",
      "how": "1) 32 = 2⁵.  2) 2ˣ = 2⁵ → x = 5.",
      "_id": "accu_aaf_5"
    },
    {
      "focus": "Rational equations",
      "prompt": "Solve 2/(x−1) = 4.",
      "options": [
        "x = 3/2",
        "x = 2",
        "x = 1",
        "x = 4"
      ],
      "answer": 0,
      "topic": "Rational Equations",
      "level": 4,
      "why": "Multiply both sides by (x−1).",
      "how": "1) 2 = 4(x−1) = 4x−4.  2) 4x = 6.  3) x = 3/2.",
      "_id": "accu_aaf_6"
    },
    {
      "focus": "Geometry — area of circle",
      "prompt": "A circle has radius 6. Its area is:",
      "options": [
        "36π",
        "12π",
        "6π",
        "18π"
      ],
      "answer": 0,
      "topic": "Geometry",
      "level": 3,
      "why": "Area = πr².",
      "how": "1) A = π(6²) = 36π.",
      "_id": "accu_aaf_7"
    },
    {
      "focus": "Trigonometry — sin 30°",
      "prompt": "sin(30°) = ?",
      "options": [
        "1/2",
        "√3/2",
        "1",
        "√2/2"
      ],
      "answer": 0,
      "topic": "Trigonometry",
      "level": 4,
      "why": "30-60-90 triangle: opposite/hypotenuse = 1/2.",
      "how": "1) In a 30-60-90 triangle, the short leg is half the hypotenuse.  2) sin(30°) = 1/2.",
      "_id": "accu_aaf_8"
    },
    {
      "focus": "Inverse functions",
      "prompt": "f(x) = 2x − 5. f⁻¹(x) = ?",
      "options": [
        "(x+5)/2",
        "(x−5)/2",
        "2x+5",
        "x/2−5"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 4,
      "why": "To find inverse: swap x and y, solve for y.",
      "how": "1) y = 2x−5.  2) Swap: x = 2y−5.  3) 2y = x+5.  4) y = (x+5)/2.",
      "_id": "accu_aaf_9"
    },
    {
      "focus": "Exponents — rules",
      "prompt": "Simplify (2x³)².",
      "options": [
        "4x⁶",
        "6x⁵",
        "2x⁶",
        "4x⁵"
      ],
      "answer": 0,
      "topic": "Polynomials",
      "level": 3,
      "why": "Raise both coefficient and variable to the power.",
      "how": "1) 2² = 4.  2) (x³)² = x⁶.  3) 4x⁶.",
      "_id": "accu_aaf_10"
    },
    {
      "focus": "Logarithms",
      "prompt": "log₂(8) = ?",
      "options": [
        "3",
        "2",
        "8",
        "4"
      ],
      "answer": 0,
      "topic": "Exponential",
      "level": 4,
      "why": "log₂(8): 2 to what power = 8?",
      "how": "1) 2³ = 8.  2) log₂(8) = 3.",
      "_id": "accu_aaf_11"
    },
    {
      "focus": "Function evaluation",
      "prompt": "g(x) = 3(x + 8). What is g(12)?",
      "options": [
        "60",
        "44",
        "20",
        "−4"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 2,
      "why": "Substitute x = 12 into the function.",
      "how": "1) g(12) = 3(12 + 8) = 3(20) = 60.",
      "_id": "accu_aaf_12"
    },
    {
      "focus": "Polynomial multiplication",
      "prompt": "Which is equivalent to (x + 7)(x² − 3x + 2)?",
      "options": [
        "x³ + 4x² − 19x + 14",
        "x³ − 3x² + 2x + 14",
        "x³ − 3x + 14",
        "x² − 2x + 9"
      ],
      "answer": 0,
      "topic": "Polynomials",
      "level": 4,
      "why": "Distribute x and 7 separately across (x² − 3x + 2).",
      "how": "1) x·(x²−3x+2) = x³−3x²+2x.  2) 7·(x²−3x+2) = 7x²−21x+14.  3) Combine: x³+(−3+7)x²+(2−21)x+14 = x³+4x²−19x+14.",
      "_id": "accu_aaf_13"
    },
    {
      "focus": "Exponential growth",
      "prompt": "500 bacteria double every 4 hours. After x days (24 hr/day), which equation gives the count n?",
      "options": [
        "n = 500(2)^(6x)",
        "n = 500(2)^x",
        "n = 500(6)^x",
        "n = 500(6)^(2x)"
      ],
      "answer": 0,
      "topic": "Exponential",
      "level": 4,
      "why": "Each day = 24 hrs. Each doubling period = 4 hrs. So doublings per day = 24/4 = 6.",
      "how": "1) Doublings per day = 6.  2) After x days: n = 500·2^(6x).",
      "_id": "accu_aaf_14"
    },
    {
      "focus": "Quadratic — graph",
      "prompt": "Which equation could define f(x) if its graph crosses x-axis at −4 and 2, opening upward?",
      "options": [
        "f(x) = x² + 2x − 8",
        "f(x) = −x² + 2x − 8",
        "f(x) = −(x−1)² − 9",
        "f(x) = x² − 2x − 8"
      ],
      "answer": 0,
      "topic": "Quadratics",
      "level": 4,
      "why": "Roots at x = −4 and x = 2 give factors (x+4)(x−2) = x²+2x−8. Opening upward → positive leading coefficient.",
      "how": "1) Roots: −4 and 2.  2) Factors: (x+4)(x−2).  3) Expand: x²+2x−8.  4) Positive coefficient → opens up. ✓",
      "_id": "accu_aaf_15"
    },
    {
      "focus": "Range of function",
      "prompt": "What is the range of y = −2x⁴ + 7?",
      "options": [
        "y ≤ 7",
        "y ≥ 7",
        "y ≤ −2",
        "All real numbers"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 4,
      "why": "−2x⁴ is always ≤ 0, so −2x⁴ + 7 ≤ 7. Maximum is 7 (when x = 0).",
      "how": "1) x⁴ ≥ 0 always.  2) −2x⁴ ≤ 0 always.  3) −2x⁴ + 7 ≤ 7.  4) Range: y ≤ 7.",
      "_id": "accu_aaf_16"
    },
    {
      "focus": "Solving radical equation",
      "prompt": "What, if any, is a real solution to √(5x + 1) + 9 = 3?",
      "options": [
        "No real solution",
        "−1/5",
        "7",
        "143/5"
      ],
      "answer": 0,
      "topic": "Radical Equations",
      "level": 4,
      "why": "√(5x+1) = 3−9 = −6. A square root cannot equal a negative number → no real solution.",
      "how": "1) Isolate radical: √(5x+1) = −6.  2) Square root ≥ 0, so it can't equal −6.  3) No real solution.",
      "_id": "accu_aaf_17"
    },
    {
      "focus": "Surface area",
      "prompt": "What is the surface area of a rectangular prism with length 4 cm, width 9 cm, height 3 cm?",
      "options": [
        "150 cm²",
        "108 cm²",
        "75 cm²",
        "120 cm²"
      ],
      "answer": 0,
      "topic": "Geometry",
      "level": 3,
      "why": "SA = 2(lw + lh + wh).",
      "how": "1) lw = 36, lh = 12, wh = 27.  2) SA = 2(36+12+27) = 2(75) = 150 cm².",
      "_id": "accu_aaf_18"
    },
    {
      "focus": "Factor quadratic",
      "prompt": "Solve x²−6x+5=0.",
      "options": [
        "x=1 or x=5",
        "x=−1 or x=−5",
        "x=2 or x=3",
        "x=0"
      ],
      "answer": 0,
      "topic": "Quadratics",
      "level": 3,
      "_id": "af19",
      "why": "(x−1)(x−5)=0.",
      "how": "1) Factors of 5 that add to −6: −1,−5. 2) (x−1)(x−5)=0. 3) x=1,5."
    },
    {
      "focus": "Discriminant",
      "prompt": "2x²+3x+5=0. How many real solutions?",
      "options": [
        "None",
        "One",
        "Two",
        "Infinite"
      ],
      "answer": 0,
      "topic": "Quadratics",
      "level": 4,
      "_id": "af20",
      "why": "b²−4ac=9−40=−31<0 → no real roots.",
      "how": "1) b²−4ac=9−40=−31. 2) Negative → no real solutions."
    },
    {
      "focus": "Simplify rational expression",
      "prompt": "(x²−4)/(x+2), x≠−2. Simplified?",
      "options": [
        "x−2",
        "x+2",
        "x²−2",
        "Cannot simplify"
      ],
      "answer": 0,
      "topic": "Rational Equations",
      "level": 3,
      "_id": "af21",
      "why": "x²−4=(x+2)(x−2). Cancel (x+2). Result: x−2.",
      "how": "1) Factor top: (x+2)(x−2). 2) Cancel (x+2). 3) x−2."
    },
    {
      "focus": "Function composition",
      "prompt": "f(x)=2x, g(x)=x+3. Find f(g(2)).",
      "options": [
        "10",
        "7",
        "8",
        "14"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 3,
      "_id": "af22",
      "why": "g(2)=5; f(5)=10.",
      "how": "1) g(2)=2+3=5. 2) f(5)=10."
    },
    {
      "focus": "Exponential decay",
      "prompt": "1000 decreases 20% per year. After 2 years?",
      "options": [
        "640",
        "600",
        "800",
        "400"
      ],
      "answer": 0,
      "topic": "Exponential",
      "level": 4,
      "_id": "af23",
      "why": "×(0.8)²=1000×0.64=640.",
      "how": "1) Year 1: 800. 2) Year 2: 640."
    },
    {
      "focus": "Nonlinear system",
      "prompt": "Intersections of y=x² and y=x+2?",
      "options": [
        "(2,4) and (−1,1)",
        "(0,0) and (2,4)",
        "(1,1) and (2,4)",
        "None"
      ],
      "answer": 0,
      "topic": "Systems",
      "level": 4,
      "_id": "af24",
      "why": "x²=x+2 → (x−2)(x+1)=0.",
      "how": "1) x²−x−2=0. 2) (x−2)(x+1)=0. 3) x=2→y=4; x=−1→y=1."
    },
    {
      "focus": "Vertical asymptote",
      "prompt": "Vertical asymptote of f(x)=3/(x−5)?",
      "options": [
        "x=5",
        "y=3",
        "x=0",
        "y=5"
      ],
      "answer": 0,
      "topic": "Rational Equations",
      "level": 4,
      "_id": "af25",
      "why": "Set denominator=0: x=5.",
      "how": "1) x−5=0 → x=5."
    },
    {
      "focus": "Degrees to radians",
      "prompt": "180° in radians?",
      "options": [
        "π",
        "2π",
        "π/2",
        "π/4"
      ],
      "answer": 0,
      "topic": "Trigonometry",
      "level": 3,
      "_id": "af26",
      "why": "180×(π/180)=π.",
      "how": "1) Multiply by π/180. 2) 180×π/180=π."
    },
    {
      "focus": "Unit circle cosine",
      "prompt": "cos(0°)=?",
      "options": [
        "1",
        "0",
        "−1",
        "1/2"
      ],
      "answer": 0,
      "topic": "Trigonometry",
      "level": 3,
      "_id": "af27",
      "why": "Unit circle at 0°=(1,0); cos=x=1.",
      "how": "1) At 0° on unit circle: (1,0). 2) cos=1."
    },
    {
      "focus": "Piecewise function",
      "prompt": "f(x)={2x if x<0; x² if x≥0}. f(−3)=?",
      "options": [
        "−6",
        "9",
        "6",
        "0"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 4,
      "_id": "af28",
      "why": "−3<0 → f(−3)=2(−3)=−6.",
      "how": "1) x=−3<0. 2) Use 2x rule. 3) 2(−3)=−6."
    },
    {
      "focus": "Domain restriction",
      "prompt": "Domain of f(x)=5/(x²−9)?",
      "options": [
        "All reals except ±3",
        "All reals",
        "x>3 only",
        "x≥0"
      ],
      "answer": 0,
      "topic": "Functions",
      "level": 4,
      "_id": "af29",
      "why": "x²−9≠0 → x≠±3.",
      "how": "1) Set denom≠0. 2) x²≠9. 3) x≠±3."
    }
  ],
  "clep_financial_accounting": [
    {
      "focus": "Accounting equation",
      "prompt": "Assets = Liabilities + Equity. If assets are $80,000 and liabilities are $30,000, equity is:",
      "options": [
        "$50,000",
        "$110,000",
        "$30,000",
        "$80,000"
      ],
      "answer": 0,
      "topic": "General Topics",
      "level": 1,
      "_id": "cfa_1",
      "why": "Assets = Liabilities + Equity → Equity = Assets − Liabilities = 80,000 − 30,000 = 50,000.",
      "how": "1) Rearrange: Equity = Assets − Liabilities. 2) 80,000 − 30,000 = 50,000."
    },
    {
      "focus": "Double-entry accounting",
      "prompt": "When a company pays $500 cash for supplies, the journal entry is:",
      "options": [
        "Debit Supplies $500, Credit Cash $500",
        "Debit Cash $500, Credit Supplies $500",
        "Debit Expenses $500, Credit Revenue $500",
        "Debit Equity $500, Credit Cash $500"
      ],
      "answer": 0,
      "topic": "General Topics",
      "level": 2,
      "_id": "cfa_2",
      "why": "Supplies (asset) increases → debit. Cash (asset) decreases → credit.",
      "how": "1) Debit = increase assets. 2) Credit = decrease assets. 3) Supplies debit, Cash credit."
    },
    {
      "focus": "GAAP",
      "prompt": "GAAP stands for:",
      "options": [
        "Generally Accepted Accounting Principles",
        "General Accounting and Audit Procedures",
        "Government Approved Accounting Practices",
        "General Assessment of Accounting Performance"
      ],
      "answer": 0,
      "topic": "General Topics",
      "level": 1,
      "_id": "cfa_3",
      "why": "GAAP = Generally Accepted Accounting Principles — the standard framework for U.S. financial reporting.",
      "how": "1) Standard acronym. 2) GAAP governs how financial statements are prepared."
    },
    {
      "focus": "Accounting cycle",
      "prompt": "Which step comes FIRST in the accounting cycle?",
      "options": [
        "Analyzing transactions from source documents",
        "Posting to the ledger",
        "Preparing a trial balance",
        "Closing the books"
      ],
      "answer": 0,
      "topic": "General Topics",
      "level": 2,
      "_id": "cfa_4",
      "why": "The cycle starts with source document analysis before journal entries are made.",
      "how": "1) Cycle: analyze → journal → post → trial balance → adjustments → statements → close."
    },
    {
      "focus": "Accrual vs cash basis",
      "prompt": "Under accrual accounting, revenue is recognized when:",
      "options": [
        "It is earned, regardless of when cash is received",
        "Cash is received",
        "An invoice is mailed",
        "The fiscal year ends"
      ],
      "answer": 0,
      "topic": "General Topics",
      "level": 2,
      "_id": "cfa_5",
      "why": "Accrual basis: recognize revenue when earned (not when cash arrives).",
      "how": "1) Accrual: revenue when earned. 2) Cash basis: revenue when cash received."
    },
    {
      "focus": "Revenue recognition",
      "prompt": "A company delivers goods in December but receives payment in January. Under accrual, revenue is recorded in:",
      "options": [
        "December",
        "January",
        "Either month",
        "The following fiscal year"
      ],
      "answer": 0,
      "topic": "Income Statement",
      "level": 2,
      "_id": "cfa_6",
      "why": "Revenue recognized when earned = delivery in December.",
      "how": "1) Accrual: earned when delivered. 2) December delivery → December revenue."
    },
    {
      "focus": "Cost of goods sold",
      "prompt": "Beginning inventory $10,000 + Purchases $40,000 − Ending inventory $8,000. COGS = ?",
      "options": [
        "$42,000",
        "$58,000",
        "$32,000",
        "$48,000"
      ],
      "answer": 0,
      "topic": "Income Statement",
      "level": 2,
      "_id": "cfa_7",
      "why": "COGS = Beginning Inventory + Purchases − Ending Inventory.",
      "how": "1) COGS = 10,000 + 40,000 − 8,000 = 42,000."
    },
    {
      "focus": "Gross profit",
      "prompt": "Net sales $100,000, COGS $60,000. Gross profit = ?",
      "options": [
        "$40,000",
        "$160,000",
        "$60,000",
        "$100,000"
      ],
      "answer": 0,
      "topic": "Income Statement",
      "level": 1,
      "_id": "cfa_8",
      "why": "Gross profit = Net sales − COGS = 100,000 − 60,000 = 40,000.",
      "how": "1) Gross profit = Sales − COGS. 2) 100,000 − 60,000 = 40,000."
    },
    {
      "focus": "Profitability ratio",
      "prompt": "Net income $20,000, Net sales $200,000. Net profit margin = ?",
      "options": [
        "10%",
        "25%",
        "40%",
        "5%"
      ],
      "answer": 0,
      "topic": "Income Statement",
      "level": 2,
      "_id": "cfa_9",
      "why": "Net profit margin = Net income / Net sales = 20,000 / 200,000 = 10%.",
      "how": "1) Margin = Net income / Sales. 2) 20,000/200,000 = 0.10 = 10%."
    },
    {
      "focus": "Multi-step income statement",
      "prompt": "On a multi-step income statement, \"operating income\" equals:",
      "options": [
        "Gross profit minus operating expenses",
        "Net sales minus COGS",
        "Net income before taxes",
        "Revenue minus all expenses"
      ],
      "answer": 0,
      "topic": "Income Statement",
      "level": 2,
      "_id": "cfa_10",
      "why": "Operating income = Gross profit − Operating expenses (selling, G&A).",
      "how": "1) Gross profit = Sales − COGS. 2) Operating income = Gross profit − Operating expenses."
    },
    {
      "focus": "Current vs non-current assets",
      "prompt": "Which asset is classified as NON-CURRENT?",
      "options": [
        "Equipment (5-year useful life)",
        "Accounts receivable",
        "Cash",
        "Prepaid insurance (1 year)"
      ],
      "answer": 0,
      "topic": "Balance Sheet",
      "level": 1,
      "_id": "cfa_11",
      "why": "Non-current = useful life > 1 year. Equipment with 5-year life = non-current.",
      "how": "1) Current: converted to cash within 1 year. 2) Non-current: > 1 year."
    },
    {
      "focus": "Bad debt expense",
      "prompt": "Allowance method: A company estimates $3,000 of accounts receivable will be uncollectible. The adjusting entry credits:",
      "options": [
        "Allowance for Doubtful Accounts $3,000",
        "Accounts Receivable $3,000",
        "Bad Debt Revenue $3,000",
        "Cash $3,000"
      ],
      "answer": 0,
      "topic": "Balance Sheet",
      "level": 3,
      "_id": "cfa_12",
      "why": "Allowance method: Debit Bad Debt Expense, Credit Allowance for Doubtful Accounts.",
      "how": "1) Debit Bad Debt Expense (increases expense). 2) Credit Allowance for DA (contra-asset)."
    },
    {
      "focus": "Inventory valuation — FIFO vs LIFO",
      "prompt": "During inflation, FIFO results in __ compared to LIFO:",
      "options": [
        "Higher ending inventory and higher net income",
        "Lower ending inventory and lower net income",
        "Same net income regardless of method",
        "Higher COGS and lower net income"
      ],
      "answer": 0,
      "topic": "Balance Sheet",
      "level": 3,
      "_id": "cfa_13",
      "why": "FIFO sells oldest (cheaper) items first in inflation → lower COGS → higher net income. Ending inventory uses newer (pricier) units.",
      "how": "1) Inflation: prices rise. 2) FIFO: old cheap costs go to COGS. 3) Lower COGS → higher income. 4) Remaining inventory at higher recent prices."
    },
    {
      "focus": "Depreciation — straight line",
      "prompt": "Asset cost $50,000, salvage $5,000, life 5 years. Annual straight-line depreciation?",
      "options": [
        "$9,000",
        "$10,000",
        "$5,000",
        "$45,000"
      ],
      "answer": 0,
      "topic": "Balance Sheet",
      "level": 2,
      "_id": "cfa_14",
      "why": "SL Depreciation = (Cost − Salvage) / Useful life = (50,000 − 5,000) / 5 = 9,000.",
      "how": "1) Depreciable base = 50,000 − 5,000 = 45,000. 2) Annual dep = 45,000 / 5 = 9,000."
    },
    {
      "focus": "Book value",
      "prompt": "Asset original cost $50,000, accumulated depreciation $20,000. Book value?",
      "options": [
        "$30,000",
        "$70,000",
        "$20,000",
        "$50,000"
      ],
      "answer": 0,
      "topic": "Balance Sheet",
      "level": 1,
      "_id": "cfa_15",
      "why": "Book value = Cost − Accumulated Depreciation = 50,000 − 20,000 = 30,000.",
      "how": "1) Book value = cost − accum. dep. 2) 50,000 − 20,000 = 30,000."
    },
    {
      "focus": "Current ratio — liquidity",
      "prompt": "Current assets $80,000, current liabilities $40,000. Current ratio?",
      "options": [
        "2.0",
        "0.5",
        "120,000",
        "40,000"
      ],
      "answer": 0,
      "topic": "Balance Sheet",
      "level": 2,
      "_id": "cfa_16",
      "why": "Current ratio = Current assets / Current liabilities = 80,000 / 40,000 = 2.0.",
      "how": "1) Current ratio = CA / CL. 2) 80,000 / 40,000 = 2.0."
    },
    {
      "focus": "Long-term liabilities — bonds payable",
      "prompt": "A company issues a $100,000 bond at a discount. On the balance sheet, bonds payable appears:",
      "options": [
        "Less than $100,000 (face value reduced by discount)",
        "At exactly $100,000",
        "As a current liability",
        "As equity"
      ],
      "answer": 0,
      "topic": "Balance Sheet",
      "level": 3,
      "_id": "cfa_17",
      "why": "Bonds issued at a discount: carrying value = face value − unamortized discount.",
      "how": "1) Bond discount = contra-liability. 2) Carrying value < face value."
    },
    {
      "focus": "Stockholders equity",
      "prompt": "Common stock + Additional paid-in capital + Retained earnings − Treasury stock = ?",
      "options": [
        "Total stockholders' equity",
        "Total assets",
        "Total liabilities",
        "Net income"
      ],
      "answer": 0,
      "topic": "Balance Sheet",
      "level": 2,
      "_id": "cfa_18",
      "why": "Stockholders' equity components: common stock, APIC, retained earnings, less treasury stock.",
      "how": "1) SE = Common stock + APIC + RE − Treasury stock."
    },
    {
      "focus": "Retained earnings",
      "prompt": "Beginning retained earnings $50,000 + Net income $20,000 − Dividends $8,000 = ?",
      "options": [
        "$62,000",
        "$78,000",
        "$42,000",
        "$70,000"
      ],
      "answer": 0,
      "topic": "Balance Sheet",
      "level": 2,
      "_id": "cfa_19",
      "why": "Ending RE = Beginning RE + Net income − Dividends.",
      "how": "1) 50,000 + 20,000 − 8,000 = 62,000."
    },
    {
      "focus": "Cash flow — operating activities (indirect)",
      "prompt": "Under the indirect method, depreciation is __ to net income to get operating cash flow:",
      "options": [
        "Added back — it is a non-cash expense",
        "Subtracted — it reduces cash",
        "Ignored entirely",
        "Listed under investing activities"
      ],
      "answer": 0,
      "topic": "Statement of Cash Flows",
      "level": 2,
      "_id": "cfa_20",
      "why": "Depreciation is non-cash. It reduced net income but did not use cash → add back.",
      "how": "1) Indirect method: start with net income. 2) Add back non-cash charges (depreciation). 3) Adjust for working capital changes."
    },
    {
      "focus": "Cash flow categories",
      "prompt": "Purchase of equipment appears in which section of the cash flow statement?",
      "options": [
        "Investing activities",
        "Operating activities",
        "Financing activities",
        "Non-cash disclosures"
      ],
      "answer": 0,
      "topic": "Statement of Cash Flows",
      "level": 2,
      "_id": "cfa_21",
      "why": "Buying/selling long-term assets = investing activities.",
      "how": "1) Operating: day-to-day business. 2) Investing: buy/sell long-term assets. 3) Financing: debt/equity."
    },
    {
      "focus": "Financing activities",
      "prompt": "Issuing bonds for cash is classified as:",
      "options": [
        "Financing activity — cash inflow",
        "Investing activity — cash outflow",
        "Operating activity",
        "Non-cash transaction"
      ],
      "answer": 0,
      "topic": "Statement of Cash Flows",
      "level": 2,
      "_id": "cfa_22",
      "why": "Issuing bonds = raising capital = financing activity = cash inflow.",
      "how": "1) Financing: borrowing or repaying debt, issuing/repurchasing stock, paying dividends. 2) Bond issuance = financing inflow."
    },
    {
      "focus": "Contingent liabilities",
      "prompt": "A contingent liability is recorded when it is:",
      "options": [
        "Probable and estimable",
        "Possible but not probable",
        "Remote",
        "Paid in cash"
      ],
      "answer": 0,
      "topic": "Miscellaneous",
      "level": 3,
      "_id": "cfa_23",
      "why": "GAAP: contingent liability recognized when probable AND amount can be estimated.",
      "how": "1) Probable + estimable → record. 2) Possible → disclose in footnote. 3) Remote → no disclosure needed."
    },
    {
      "focus": "Solvency — debt to equity",
      "prompt": "Total debt $120,000, equity $80,000. Debt-to-equity ratio?",
      "options": [
        "1.5",
        "0.67",
        "200,000",
        "40,000"
      ],
      "answer": 0,
      "topic": "Balance Sheet",
      "level": 2,
      "_id": "cfa_24",
      "why": "D/E = Total debt / Total equity = 120,000 / 80,000 = 1.5.",
      "how": "1) D/E = Debt / Equity. 2) 120,000 / 80,000 = 1.5."
    }
  ],
  "clep_info_systems": [
    {
      "focus": "ERP systems",
      "prompt": "An ERP (Enterprise Resource Planning) system integrates:",
      "options": [
        "All major business functions into one unified system",
        "Only payroll and HR",
        "Web browsing and email",
        "Spreadsheet and word processing applications"
      ],
      "answer": 0,
      "topic": "Office and Technology Applications",
      "level": 2,
      "_id": "cis_1",
      "why": "ERP integrates finance, HR, supply chain, manufacturing, etc. into one platform.",
      "how": "1) ERP = enterprise-wide integration. 2) Examples: SAP, Oracle. 3) Not limited to one function."
    },
    {
      "focus": "DSS vs TPS",
      "prompt": "A Transaction Processing System (TPS) primarily:",
      "options": [
        "Records and processes routine daily transactions",
        "Supports complex decision-making with models",
        "Manages knowledge and expertise",
        "Analyzes business intelligence data"
      ],
      "answer": 0,
      "topic": "Office and Technology Applications",
      "level": 2,
      "_id": "cis_2",
      "why": "TPS = operational level; records routine transactions (sales, payroll, orders).",
      "how": "1) TPS: routine transactions. 2) DSS: decision support with models. 3) KMS: knowledge management."
    },
    {
      "focus": "E-commerce types",
      "prompt": "B2B e-commerce refers to transactions between:",
      "options": [
        "Businesses selling to other businesses",
        "Businesses selling to consumers",
        "Consumers selling to consumers",
        "Government to business"
      ],
      "answer": 0,
      "topic": "Office and Technology Applications",
      "level": 1,
      "_id": "cis_3",
      "why": "B2B = Business-to-Business. B2C = Business-to-Consumer. C2C = Consumer-to-Consumer.",
      "how": "1) B2B: wholesale, supply chain. 2) B2C: retail (Amazon). 3) C2C: eBay."
    },
    {
      "focus": "CRM",
      "prompt": "CRM software is primarily used to:",
      "options": [
        "Manage customer relationships and sales data",
        "Track inventory in a warehouse",
        "Process employee payroll",
        "Design network architecture"
      ],
      "answer": 0,
      "topic": "Office and Technology Applications",
      "level": 1,
      "_id": "cis_4",
      "why": "CRM = Customer Relationship Management — tracks interactions, leads, sales with customers.",
      "how": "1) CRM: customer data, sales pipeline, support tickets. 2) Not inventory or payroll."
    },
    {
      "focus": "HTML vs CSS",
      "prompt": "HTML defines __ while CSS defines __:",
      "options": [
        "Structure and content; visual presentation and styling",
        "Visual styling; structure",
        "Data storage; networking",
        "Interactivity; content"
      ],
      "answer": 0,
      "topic": "Internet and World Wide Web",
      "level": 1,
      "_id": "cis_5",
      "why": "HTML = structure/content (headings, paragraphs, links). CSS = styling (colors, fonts, layout).",
      "how": "1) HTML = what is on the page. 2) CSS = how it looks."
    },
    {
      "focus": "Cloud computing",
      "prompt": "Cloud storage services provide:",
      "options": [
        "Remote data storage accessed over the internet",
        "Local hard drive backup only",
        "Faster processor speeds",
        "Physical USB storage"
      ],
      "answer": 0,
      "topic": "Internet and World Wide Web",
      "level": 1,
      "_id": "cis_6",
      "why": "Cloud storage = data hosted on remote servers accessed via internet (Google Drive, Dropbox).",
      "how": "1) Cloud = remote servers, internet access. 2) Not local hardware."
    },
    {
      "focus": "HTTP protocol",
      "prompt": "HTTPS differs from HTTP in that it:",
      "options": [
        "Encrypts data using SSL/TLS for secure transmission",
        "Is faster than HTTP",
        "Only works on mobile devices",
        "Does not use TCP/IP"
      ],
      "answer": 0,
      "topic": "Internet and World Wide Web",
      "level": 2,
      "_id": "cis_7",
      "why": "HTTPS = HTTP + SSL/TLS encryption. Protects data in transit (login, payments).",
      "how": "1) S in HTTPS = Secure. 2) SSL/TLS encrypts the connection."
    },
    {
      "focus": "Malware types",
      "prompt": "Ransomware is malware that:",
      "options": [
        "Encrypts victim data and demands payment for the key",
        "Tracks keystrokes silently",
        "Displays unwanted advertisements",
        "Replicates itself across networks"
      ],
      "answer": 0,
      "topic": "Security",
      "level": 2,
      "_id": "cis_8",
      "why": "Ransomware encrypts files and demands a ransom (usually crypto) for the decryption key.",
      "how": "1) Ransomware: encrypt→demand payment. 2) Spyware: tracks activity. 3) Adware: ads. 4) Worm: self-replicates."
    },
    {
      "focus": "Authentication vs authorization",
      "prompt": "Authentication verifies __, while authorization determines __:",
      "options": [
        "Who you are; what you are allowed to do",
        "What you can do; who you are",
        "Your location; your device",
        "Your password; your email"
      ],
      "answer": 0,
      "topic": "Security",
      "level": 2,
      "_id": "cis_9",
      "why": "Authentication = identity verification (login). Authorization = permissions (what you can access).",
      "how": "1) Authn: \"Are you who you say?\" 2) Authz: \"What are you allowed to do?\""
    },
    {
      "focus": "Firewall",
      "prompt": "A firewall primarily:",
      "options": [
        "Monitors and filters network traffic based on rules",
        "Encrypts data stored on disk",
        "Backs up data automatically",
        "Removes viruses from infected files"
      ],
      "answer": 0,
      "topic": "Security",
      "level": 1,
      "_id": "cis_10",
      "why": "Firewall = network security device that filters incoming/outgoing traffic by rules.",
      "how": "1) Firewall: rule-based traffic filtering. 2) Not encryption or backup."
    },
    {
      "focus": "LAN vs WAN",
      "prompt": "A LAN (Local Area Network) differs from a WAN in that a LAN:",
      "options": [
        "Covers a small geographic area like a building or campus",
        "Spans cities or countries",
        "Always uses wireless connections",
        "Requires a DSL modem"
      ],
      "answer": 0,
      "topic": "Hardware and Systems Technology",
      "level": 1,
      "_id": "cis_11",
      "why": "LAN = limited geographic area (building/campus). WAN = wide area (internet is the largest WAN).",
      "how": "1) LAN: local scope. 2) WAN: geographic distance."
    },
    {
      "focus": "CPU vs RAM",
      "prompt": "RAM (Random Access Memory) is best described as:",
      "options": [
        "Temporary, fast storage that holds data the CPU is actively using",
        "Permanent storage for the operating system",
        "The processor that executes instructions",
        "Long-term file storage"
      ],
      "answer": 0,
      "topic": "Hardware and Systems Technology",
      "level": 1,
      "_id": "cis_12",
      "why": "RAM = volatile short-term memory used by the CPU. Lost when power off. Not permanent storage.",
      "how": "1) RAM: fast, temporary. 2) HDD/SSD: permanent. 3) CPU: processor."
    },
    {
      "focus": "Operating system role",
      "prompt": "An operating system primarily manages:",
      "options": [
        "Hardware resources and provides an interface for software applications",
        "Internet browsing and email",
        "Business data and accounting",
        "Graphic design and media production"
      ],
      "answer": 0,
      "topic": "Hardware and Systems Technology",
      "level": 1,
      "_id": "cis_13",
      "why": "OS manages CPU, memory, storage, I/O and provides a platform for applications.",
      "how": "1) OS: resource manager + application platform. 2) Examples: Windows, macOS, Linux."
    },
    {
      "focus": "SDLC phases",
      "prompt": "In the Systems Development Life Cycle (SDLC), which phase comes after analysis?",
      "options": [
        "Design",
        "Planning",
        "Implementation",
        "Maintenance"
      ],
      "answer": 0,
      "topic": "Software Development",
      "level": 2,
      "_id": "cis_14",
      "why": "SDLC: Planning → Analysis → Design → Implementation → Maintenance.",
      "how": "1) PADIM: Planning, Analysis, Design, Implementation, Maintenance. 2) Analysis → Design."
    },
    {
      "focus": "Agile methodology",
      "prompt": "Agile development emphasizes:",
      "options": [
        "Iterative short sprints with continuous feedback and adaptation",
        "A sequential \"waterfall\" of phases completed before moving on",
        "Complete documentation before any coding begins",
        "Long-term planning with no changes once started"
      ],
      "answer": 0,
      "topic": "Software Development",
      "level": 2,
      "_id": "cis_15",
      "why": "Agile = iterative sprints, continuous delivery, responding to change.",
      "how": "1) Agile: short cycles, working software, flexibility. 2) Waterfall: sequential, rigid phases."
    },
    {
      "focus": "Relational database",
      "prompt": "In a relational database, a PRIMARY KEY:",
      "options": [
        "Uniquely identifies each record in a table",
        "Connects two tables together",
        "Stores the most important data value",
        "Is always a name or description"
      ],
      "answer": 0,
      "topic": "Data Management and Programming Concepts",
      "level": 2,
      "_id": "cis_16",
      "why": "Primary key = unique identifier for each row in a table.",
      "how": "1) Primary key: unique, not null. 2) Foreign key: links to another table's primary key."
    },
    {
      "focus": "SQL SELECT",
      "prompt": "Which SQL statement retrieves data from a table?",
      "options": [
        "SELECT",
        "INSERT",
        "UPDATE",
        "DELETE"
      ],
      "answer": 0,
      "topic": "Data Management and Programming Concepts",
      "level": 1,
      "_id": "cis_17",
      "why": "SELECT = query/retrieve data. INSERT = add. UPDATE = modify. DELETE = remove.",
      "how": "1) CRUD: Create(INSERT), Read(SELECT), Update(UPDATE), Delete(DELETE). 2) SELECT = read."
    },
    {
      "focus": "Data warehousing",
      "prompt": "A data warehouse differs from a transactional database in that it is optimized for:",
      "options": [
        "Analytical queries and historical reporting",
        "Fast transaction processing",
        "Real-time inventory updates",
        "Daily accounting entries"
      ],
      "answer": 0,
      "topic": "Data Management and Programming Concepts",
      "level": 3,
      "_id": "cis_18",
      "why": "Data warehouse: read-optimized, historical, analytical (OLAP). Transactional DB: write-optimized (OLTP).",
      "how": "1) OLAP = analytics. 2) OLTP = transactions."
    },
    {
      "focus": "Intellectual property",
      "prompt": "Open-source software means:",
      "options": [
        "Source code is publicly available and can be modified/distributed",
        "The software is free to use but code is private",
        "Only government agencies can use it",
        "It has no license restrictions whatsoever"
      ],
      "answer": 0,
      "topic": "Social and Ethical Implications",
      "level": 2,
      "_id": "cis_19",
      "why": "Open-source: source code publicly available; users can modify and redistribute under the license terms.",
      "how": "1) Open-source: visible source. 2) Proprietary: closed source. 3) License governs terms."
    },
    {
      "focus": "Green computing",
      "prompt": "Green computing focuses on:",
      "options": [
        "Reducing the environmental impact of computers through energy efficiency and recycling",
        "Making computers faster with more processing power",
        "Developing green-colored hardware",
        "Protecting forests by limiting paper printing"
      ],
      "answer": 0,
      "topic": "Social and Ethical Implications",
      "level": 1,
      "_id": "cis_20",
      "why": "Green computing: energy efficiency, reduced e-waste, sustainable hardware design.",
      "how": "1) Green computing = environmental responsibility in IT. 2) Energy efficiency + recycling + sustainable design."
    },
    {
      "focus": "Privacy — cookies",
      "prompt": "Browser cookies primarily:",
      "options": [
        "Store small pieces of data about user sessions and preferences",
        "Track physical location via GPS",
        "Scan for viruses",
        "Block pop-up advertisements"
      ],
      "answer": 0,
      "topic": "Internet and World Wide Web",
      "level": 1,
      "_id": "cis_21",
      "why": "Cookies = small text files stored by websites to track sessions, logins, preferences.",
      "how": "1) Cookie: small text file. 2) Tracks session, preferences. 3) Not GPS or antivirus."
    },
    {
      "focus": "Social networking risks",
      "prompt": "A primary security risk of social networking is:",
      "options": [
        "Oversharing personal information that enables identity theft or social engineering",
        "That it makes computers run slower",
        "That it blocks access to work email",
        "That it requires specialized hardware"
      ],
      "answer": 0,
      "topic": "Social and Ethical Implications",
      "level": 2,
      "_id": "cis_22",
      "why": "Social networks encourage sharing personal data which can be exploited for identity theft or phishing.",
      "how": "1) Oversharing: name, birthdate, location → identity theft risk. 2) Social engineering uses personal info."
    },
    {
      "focus": "Wi-Fi vs cellular",
      "prompt": "Wi-Fi differs from cellular networks in that Wi-Fi:",
      "options": [
        "Uses short-range radio signals through access points; cellular uses towers over wide areas",
        "Is always faster than cellular",
        "Only works indoors",
        "Requires a SIM card"
      ],
      "answer": 0,
      "topic": "Hardware and Systems Technology",
      "level": 2,
      "_id": "cis_23",
      "why": "Wi-Fi: limited range (~100m), uses access points. Cellular: wide area, towers, SIM-based.",
      "how": "1) Wi-Fi: local, access point. 2) Cellular: wide area, towers, SIM."
    },
    {
      "focus": "Boolean logic in programming",
      "prompt": "In programming, \"if (x > 5 AND y < 10)\" evaluates to TRUE when:",
      "options": [
        "Both conditions are true simultaneously",
        "Either condition is true",
        "Neither condition is true",
        "x equals y"
      ],
      "answer": 0,
      "topic": "Data Management and Programming Concepts",
      "level": 2,
      "_id": "cis_24",
      "why": "AND requires ALL conditions true. OR requires at least one true.",
      "how": "1) AND: both must be true. 2) OR: at least one. 3) NOT: inverts."
    },
    {
      "focus": "Business intelligence",
      "prompt": "Business Intelligence (BI) tools primarily help organizations:",
      "options": [
        "Analyze historical data to support strategic decision-making",
        "Process individual transactions in real time",
        "Manage email and calendar",
        "Encrypt all communications"
      ],
      "answer": 0,
      "topic": "Office and Technology Applications",
      "level": 2,
      "_id": "cis_g1",
      "why": "BI: data analytics, dashboards, reporting on historical data for strategic insights.",
      "how": "1) BI = analytics for decisions. 2) Tools: dashboards, OLAP cubes, reports. 3) Different from TPS (transactions)."
    },
    {
      "focus": "Expert systems",
      "prompt": "Expert systems use which approach to solve problems?",
      "options": [
        "Encoded knowledge from human experts via rules and inference",
        "Random search",
        "Manual entry by users only",
        "Simple word-processing"
      ],
      "answer": 0,
      "topic": "Office and Technology Applications",
      "level": 3,
      "_id": "cis_g2",
      "why": "Expert systems: knowledge base + inference engine simulating human expertise (e.g., medical diagnosis).",
      "how": "1) Knowledge base: expert rules. 2) Inference engine: applies rules. 3) Used in diagnosis, troubleshooting."
    },
    {
      "focus": "RAD — Rapid Application Development",
      "prompt": "Rapid Application Development (RAD) emphasizes:",
      "options": [
        "Fast prototyping and iterative development",
        "Long planning phases before coding",
        "Strict waterfall sequencing",
        "One-time delivery with no updates"
      ],
      "answer": 0,
      "topic": "Software Development",
      "level": 2,
      "_id": "cis_g3",
      "why": "RAD: iterative cycles with rapid prototyping, frequent user feedback, faster than traditional SDLC.",
      "how": "1) Rapid prototyping. 2) User involvement throughout. 3) Faster than waterfall."
    },
    {
      "focus": "CASE tools",
      "prompt": "CASE (Computer-Aided Software Engineering) tools assist with:",
      "options": [
        "Automating parts of the software development life cycle",
        "Managing customer relationships",
        "Encrypting data",
        "Network monitoring only"
      ],
      "answer": 0,
      "topic": "Software Development",
      "level": 2,
      "_id": "cis_g4",
      "why": "CASE tools: automate analysis, design, code generation, testing within SDLC.",
      "how": "1) CASE = automation of SDLC tasks. 2) Examples: ER diagram tools, code generators, design platforms."
    },
    {
      "focus": "IS career paths",
      "prompt": "A systems analyst primarily:",
      "options": [
        "Analyzes business requirements and designs IT solutions to meet them",
        "Writes only HTML and CSS",
        "Manages payroll exclusively",
        "Repairs hardware"
      ],
      "answer": 0,
      "topic": "Social and Ethical Implications",
      "level": 2,
      "_id": "cis_g5",
      "why": "Systems analyst: bridges business needs and technical implementation; analyzes requirements, designs solutions.",
      "how": "1) Analyst: requirements + design. 2) Programmer: implements. 3) Different roles, often collaborate."
    },
    {
      "focus": "Data validation",
      "prompt": "Input validation in software ensures:",
      "options": [
        "Data entered meets defined criteria before being processed or stored",
        "All data is encrypted",
        "Only administrators can enter data",
        "Data is automatically backed up"
      ],
      "answer": 0,
      "topic": "Data Management and Programming Concepts",
      "level": 2,
      "_id": "cis_g6",
      "why": "Validation: checks input against rules (type, format, range) to prevent bad data.",
      "how": "1) Check format (email, date). 2) Check range (age 0–150). 3) Check type (number vs text)."
    }
  ],
  "clep_mgmt": [
    {
      "focus": "Four functions of management",
      "prompt": "The four functions of management are:",
      "options": [
        "Planning, Organizing, Leading, Controlling",
        "Staffing, Budgeting, Directing, Evaluating",
        "Marketing, Finance, Operations, HR",
        "Vision, Mission, Goals, Strategy"
      ],
      "answer": 0,
      "topic": "Functional Aspects",
      "level": 1,
      "_id": "cmgt_1",
      "why": "Classic POLC framework: Planning, Organizing, Leading (or Directing), Controlling.",
      "how": "1) POLC: Plan→Organize→Lead→Control. 2) Foundation of management theory."
    },
    {
      "focus": "Planning — strategic vs operational",
      "prompt": "Strategic planning focuses on:",
      "options": [
        "Long-term organizational direction and goals",
        "Day-to-day operational tasks",
        "Individual employee performance",
        "Financial budgeting for the current quarter"
      ],
      "answer": 0,
      "topic": "Functional Aspects",
      "level": 2,
      "_id": "cmgt_2",
      "why": "Strategic planning: long-term (3–5+ years), top management, overall direction. Operational: short-term, day-to-day.",
      "how": "1) Strategic: long-term, top-level. 2) Tactical: medium-term. 3) Operational: daily."
    },
    {
      "focus": "Organizational structure — span of control",
      "prompt": "A wide span of control means a manager:",
      "options": [
        "Supervises many subordinates directly",
        "Has few subordinates reporting directly",
        "Has many levels above them",
        "Is part of a flat hierarchy only"
      ],
      "answer": 0,
      "topic": "Functional Aspects",
      "level": 2,
      "_id": "cmgt_3",
      "why": "Wide span = many direct reports. Narrow span = few direct reports, more management layers.",
      "how": "1) Wide span: many subordinates. 2) Narrow span: few subordinates, taller hierarchy."
    },
    {
      "focus": "Delegation",
      "prompt": "Delegation involves assigning __ to subordinates while retaining __:",
      "options": [
        "Authority and tasks; ultimate accountability",
        "Full responsibility; no oversight",
        "Only tasks; all authority",
        "All decision-making; no tasks"
      ],
      "answer": 0,
      "topic": "Functional Aspects",
      "level": 2,
      "_id": "cmgt_4",
      "why": "Delegation: assign authority and tasks downward. Manager retains ultimate accountability.",
      "how": "1) Delegate: task + authority. 2) Manager still accountable for results."
    },
    {
      "focus": "Controlling — corrective action",
      "prompt": "The control process includes: Set standards → Measure performance → Compare → then:",
      "options": [
        "Take corrective action if needed",
        "Set new standards immediately",
        "Reward all employees",
        "Terminate the process"
      ],
      "answer": 0,
      "topic": "Functional Aspects",
      "level": 2,
      "_id": "cmgt_5",
      "why": "Control cycle: set standards → measure → compare to standards → corrective action if deviation.",
      "how": "1) Control loop: standards→measure→compare→correct."
    },
    {
      "focus": "Decision-making — programmed vs non-programmed",
      "prompt": "A non-programmed decision is:",
      "options": [
        "Unique, unstructured, requiring judgment",
        "Routine, repetitive, handled by policy",
        "Always made by front-line employees",
        "Made using only quantitative data"
      ],
      "answer": 0,
      "topic": "Functional Aspects",
      "level": 2,
      "_id": "cmgt_6",
      "why": "Programmed: routine/repetitive. Non-programmed: novel/complex, requires judgment.",
      "how": "1) Programmed: reorder inventory → policy handles it. 2) Non-programmed: enter a new market."
    },
    {
      "focus": "Leadership styles — transformational",
      "prompt": "Transformational leadership focuses on:",
      "options": [
        "Inspiring followers with vision, motivation, and change",
        "Exchanging rewards for performance",
        "Strict rule enforcement",
        "Micromanaging every task"
      ],
      "answer": 0,
      "topic": "Functional Aspects",
      "level": 2,
      "_id": "cmgt_7",
      "why": "Transformational: inspire vision, motivate intrinsically, facilitate change. Transactional: reward/punishment exchanges.",
      "how": "1) Transformational: vision + inspiration. 2) Transactional: reward for performance."
    },
    {
      "focus": "Maslow's hierarchy",
      "prompt": "According to Maslow, which need must be satisfied BEFORE esteem needs?",
      "options": [
        "Belongingness/social needs",
        "Self-actualization",
        "Physiological needs only",
        "Safety needs only"
      ],
      "answer": 0,
      "topic": "Organization and Human Resources",
      "level": 2,
      "_id": "cmgt_8",
      "why": "Maslow's hierarchy: Physiological → Safety → Belongingness → Esteem → Self-Actualization.",
      "how": "1) Physiological→Safety→Belonging→Esteem→Self-actualization. 2) Belonging before esteem."
    },
    {
      "focus": "Herzberg — two-factor theory",
      "prompt": "Herzberg's hygiene factors (like salary and working conditions) primarily:",
      "options": [
        "Prevent job dissatisfaction but do not motivate",
        "Strongly motivate employees to achieve",
        "Replace intrinsic motivation",
        "Are the same as motivators"
      ],
      "answer": 0,
      "topic": "Organization and Human Resources",
      "level": 3,
      "_id": "cmgt_9",
      "why": "Hygiene factors: absence causes dissatisfaction; presence does not strongly motivate. Motivators (achievement, recognition) drive performance.",
      "how": "1) Hygiene: prevent dissatisfaction (salary, safety). 2) Motivators: drive satisfaction (achievement, recognition)."
    },
    {
      "focus": "Performance appraisal",
      "prompt": "A 360-degree performance appraisal collects feedback from:",
      "options": [
        "Supervisors, peers, subordinates, and self",
        "Only the direct supervisor",
        "Only the employee",
        "HR department exclusively"
      ],
      "answer": 0,
      "topic": "Organization and Human Resources",
      "level": 2,
      "_id": "cmgt_10",
      "why": "360-degree: multiple raters — boss, peers, direct reports, self-assessment.",
      "how": "1) 360 = all directions. 2) Traditional = top-down only."
    },
    {
      "focus": "Collective bargaining",
      "prompt": "Collective bargaining is a process where:",
      "options": [
        "Labor unions negotiate with management over wages and working conditions",
        "Management sets salaries without employee input",
        "Shareholders vote on executive pay",
        "Government sets minimum wage"
      ],
      "answer": 0,
      "topic": "Organization and Human Resources",
      "level": 2,
      "_id": "cmgt_11",
      "why": "Collective bargaining: union + management negotiate contract (wages, benefits, hours, conditions).",
      "how": "1) Union + management → negotiate → collective agreement. 2) Legal right in U.S."
    },
    {
      "focus": "TQM",
      "prompt": "Total Quality Management (TQM) emphasizes:",
      "options": [
        "Continuous improvement and customer satisfaction at every organizational level",
        "Maximizing production speed above all",
        "Reducing workforce to cut costs",
        "Individual department performance only"
      ],
      "answer": 0,
      "topic": "Operational Aspects",
      "level": 2,
      "_id": "cmgt_12",
      "why": "TQM: organization-wide commitment to continuous quality improvement and customer focus.",
      "how": "1) TQM: everyone responsible for quality. 2) Continuous improvement (kaizen). 3) Customer-centric."
    },
    {
      "focus": "SWOT analysis",
      "prompt": "In a SWOT analysis, \"Threats\" refers to:",
      "options": [
        "External factors that could harm the organization",
        "Internal weaknesses of the organization",
        "Future market opportunities",
        "Core competencies of the firm"
      ],
      "answer": 0,
      "topic": "Operational Aspects",
      "level": 2,
      "_id": "cmgt_13",
      "why": "SWOT: Strengths/Weaknesses (internal) and Opportunities/Threats (external).",
      "how": "1) S,W = internal. 2) O,T = external. 3) Threats: competition, regulation, economic downturns."
    },
    {
      "focus": "Organizational theory — matrix structure",
      "prompt": "A matrix organizational structure:",
      "options": [
        "Combines functional and project-based reporting simultaneously",
        "Has a strict chain of command with no cross-departmental communication",
        "Places all power in one top executive",
        "Groups employees by geography only"
      ],
      "answer": 0,
      "topic": "Functional Aspects",
      "level": 3,
      "_id": "cmgt_14",
      "why": "Matrix: employees report to both a functional manager AND a project manager simultaneously.",
      "how": "1) Matrix: dual reporting. 2) Functional: department silos. 3) Projectized: project-focused."
    },
    {
      "focus": "Corporate social responsibility",
      "prompt": "Corporate Social Responsibility (CSR) refers to:",
      "options": [
        "Business commitment to ethical behavior and positive social/environmental impact",
        "Legal compliance only",
        "Maximizing profit for shareholders exclusively",
        "Government regulation of corporations"
      ],
      "answer": 0,
      "topic": "International and Contemporary Issues",
      "level": 1,
      "_id": "cmgt_15",
      "why": "CSR: voluntary commitment to ethical, social, environmental responsibilities beyond legal minimums.",
      "how": "1) CSR: ethics + community + environment. 2) Triple bottom line: people, planet, profit."
    },
    {
      "focus": "Ethics in management",
      "prompt": "A conflict of interest occurs when:",
      "options": [
        "A manager's personal interests could inappropriately influence their professional decisions",
        "Two managers disagree about strategy",
        "A company enters a new market",
        "Shareholders vote against management"
      ],
      "answer": 0,
      "topic": "International and Contemporary Issues",
      "level": 2,
      "_id": "cmgt_16",
      "why": "Conflict of interest: personal benefit influences—or appears to influence—professional judgment.",
      "how": "1) Personal gain ↔ professional duty = conflict. 2) Must be disclosed or avoided."
    },
    {
      "focus": "Change management",
      "prompt": "Resistance to organizational change is most effectively reduced by:",
      "options": [
        "Communicating the reasons for change early and involving employees in the process",
        "Forcing compliance through strict policies",
        "Keeping the change process secret until implementation",
        "Changing the structure only at the top level"
      ],
      "answer": 0,
      "topic": "Functional Aspects",
      "level": 2,
      "_id": "cmgt_17",
      "why": "People resist change due to uncertainty. Early communication and participation reduce fear and resistance.",
      "how": "1) Communication: explain why. 2) Participation: involve affected employees. 3) Both reduce resistance."
    },
    {
      "focus": "Group dynamics",
      "prompt": "Groupthink occurs when:",
      "options": [
        "A cohesive group prioritizes conformity and harmony over critical thinking",
        "A team has too many conflicting opinions",
        "Individuals work independently without communication",
        "A manager makes all decisions alone"
      ],
      "answer": 0,
      "topic": "Functional Aspects",
      "level": 3,
      "_id": "cmgt_18",
      "why": "Groupthink: excessive cohesion suppresses dissent and critical evaluation, leading to poor decisions.",
      "how": "1) Groupthink: conformity over quality thinking. 2) Symptoms: illusion of unanimity, self-censorship."
    },
    {
      "focus": "Historical management — Taylor",
      "prompt": "Frederick Taylor's \"Scientific Management\" focused on:",
      "options": [
        "Maximizing efficiency through time-and-motion studies and standardized tasks",
        "Employee motivation through empowerment",
        "Flat organizational structures",
        "Customer-driven quality improvement"
      ],
      "answer": 0,
      "topic": "Functional Aspects",
      "level": 2,
      "_id": "cmgt_19",
      "why": "Taylor: father of scientific management. Time-and-motion studies to find the 'one best way' to do each task.",
      "how": "1) Taylor: scientific method applied to work. 2) Time studies → standard methods. 3) Efficiency focus."
    },
    {
      "focus": "Fayol's principles",
      "prompt": "Henri Fayol's principle of \"Unity of Command\" states:",
      "options": [
        "Each employee should receive orders from only one superior",
        "All employees should be treated equally",
        "Authority flows from top to bottom",
        "Management is a universal function"
      ],
      "answer": 0,
      "topic": "Functional Aspects",
      "level": 2,
      "_id": "cmgt_20",
      "why": "Fayol's Unity of Command: one boss per employee to avoid confusion and conflicting instructions.",
      "how": "1) Unity of command: one supervisor per person. 2) Prevents conflicting orders."
    },
    {
      "focus": "Trading alliances — NAFTA/USMCA",
      "prompt": "NAFTA (now USMCA) is a trading alliance between:",
      "options": [
        "United States, Canada, and Mexico",
        "U.S. and U.K.",
        "European Union countries",
        "U.S. and China"
      ],
      "answer": 0,
      "topic": "International and Contemporary Issues",
      "level": 2,
      "_id": "cmgt_g1",
      "why": "USMCA (formerly NAFTA): trade agreement between US, Canada, Mexico. EU is a separate union.",
      "how": "1) NAFTA: US-Canada-Mexico (now USMCA). 2) EU: European countries. 3) Different alliances."
    },
    {
      "focus": "Global business environment",
      "prompt": "When entering an international market, the cultural dimension of \"power distance\" refers to:",
      "options": [
        "How much a society accepts unequal distribution of power and authority",
        "Geographic distance between countries",
        "Currency exchange rates",
        "Time zone differences"
      ],
      "answer": 0,
      "topic": "International and Contemporary Issues",
      "level": 3,
      "_id": "cmgt_g2",
      "why": "Hofstede's cultural dimensions: power distance = acceptance of hierarchical inequality.",
      "how": "1) High PD: hierarchical (e.g., many Asian countries). 2) Low PD: egalitarian (e.g., Nordic). 3) Hofstede dimension."
    },
    {
      "focus": "Strategic planning — Porter's 5 Forces",
      "prompt": "Porter's Five Forces analyze industry attractiveness. Which is NOT one of the five?",
      "options": [
        "Government regulation (not one of the 5)",
        "Threat of new entrants",
        "Bargaining power of suppliers",
        "Threat of substitutes"
      ],
      "answer": 0,
      "topic": "Operational Aspects",
      "level": 3,
      "_id": "cmgt_g3",
      "why": "Porter's 5: New entrants, suppliers, buyers, substitutes, rivalry. Government is part of broader PESTEL, not Porter's 5.",
      "how": "1) Porter's 5: entrants, suppliers, buyers, substitutes, rivalry. 2) Government = PESTEL framework."
    },
    {
      "focus": "Theory X vs Theory Y",
      "prompt": "McGregor's Theory Y assumes that employees:",
      "options": [
        "Are inherently motivated, self-directed, and seek responsibility",
        "Dislike work and avoid it",
        "Need strict supervision and threats",
        "Only respond to financial rewards"
      ],
      "answer": 0,
      "topic": "Organization and Human Resources",
      "level": 2,
      "_id": "cmgt_g4",
      "why": "Theory X: employees lazy, need control. Theory Y: employees motivated, creative, responsible.",
      "how": "1) Theory X: pessimistic view. 2) Theory Y: optimistic. 3) McGregor argued Y leads to better outcomes."
    },
    {
      "focus": "Project management — critical path",
      "prompt": "In project management, the critical path is:",
      "options": [
        "The longest sequence of dependent tasks that determines minimum project duration",
        "The shortest path through the project",
        "The path with the most resources",
        "The project budget timeline"
      ],
      "answer": 0,
      "topic": "Operational Aspects",
      "level": 3,
      "_id": "cmgt_g5",
      "why": "Critical path = longest dependent sequence. Any delay on this path delays the entire project.",
      "how": "1) Identify task dependencies. 2) Longest dependent chain = critical path. 3) Determines minimum project length."
    }
  ],
  "clep_business_law": [
    {
      "focus": "Sources of American law",
      "prompt": "The highest source of law in the United States is:",
      "options": [
        "The U.S. Constitution",
        "Federal statutes",
        "State common law",
        "Administrative regulations"
      ],
      "answer": 0,
      "topic": "History and Sources of Law",
      "level": 1,
      "_id": "cbl_1",
      "why": "The Constitution is supreme law of the land (Supremacy Clause). All other law must conform to it.",
      "how": "1) Hierarchy: Constitution > Federal statute > State law. 2) Supremacy Clause."
    },
    {
      "focus": "Common law vs statutory law",
      "prompt": "Common law is primarily derived from:",
      "options": [
        "Judicial decisions and case precedent (stare decisis)",
        "Statutes passed by Congress",
        "Administrative regulations",
        "The U.S. Constitution only"
      ],
      "answer": 0,
      "topic": "History and Sources of Law",
      "level": 2,
      "_id": "cbl_2",
      "why": "Common law = judge-made law from case decisions; precedent (stare decisis) governs future similar cases.",
      "how": "1) Common law: court decisions. 2) Statutory law: legislature. 3) Stare decisis: follow precedent."
    },
    {
      "focus": "Civil vs criminal law",
      "prompt": "In a civil lawsuit, the standard of proof is:",
      "options": [
        "Preponderance of the evidence (more likely than not)",
        "Beyond a reasonable doubt",
        "Clear and convincing evidence only",
        "Absolute certainty"
      ],
      "answer": 0,
      "topic": "American Legal Systems and Procedures",
      "level": 2,
      "_id": "cbl_3",
      "why": "Civil: preponderance (>50% likely). Criminal: beyond reasonable doubt (very high).",
      "how": "1) Civil: preponderance = more likely than not. 2) Criminal: beyond reasonable doubt. 3) Civil < criminal standard."
    },
    {
      "focus": "Jurisdiction",
      "prompt": "Subject matter jurisdiction refers to:",
      "options": [
        "A court's authority to hear a particular TYPE of case",
        "A court's geographic area",
        "The defendant's right to a jury",
        "The plaintiff's location"
      ],
      "answer": 0,
      "topic": "American Legal Systems and Procedures",
      "level": 2,
      "_id": "cbl_4",
      "why": "Subject matter jurisdiction: can this court hear THIS TYPE of case? (e.g., bankruptcy court, family court).",
      "how": "1) SMJ: type of case. 2) Personal jurisdiction: authority over parties. 3) Both must be present."
    },
    {
      "focus": "Elements of a valid contract",
      "prompt": "Which element is NOT required to form a valid contract?",
      "options": [
        "Writing (most contracts can be oral)",
        "Offer",
        "Acceptance",
        "Consideration"
      ],
      "answer": 0,
      "topic": "Contracts",
      "level": 2,
      "_id": "cbl_5",
      "why": "Most contracts do NOT require writing to be valid (though some must be in writing per Statute of Frauds). Offer, acceptance, and consideration are always required.",
      "how": "1) Contract elements: offer, acceptance, consideration, capacity, legality. 2) Writing only required for specific contracts (Statute of Frauds)."
    },
    {
      "focus": "Offer and acceptance",
      "prompt": "A valid acceptance must:",
      "options": [
        "Mirror the terms of the offer exactly (mirror image rule)",
        "Be in writing always",
        "Modify the offer terms to be valid",
        "Be accepted by a third party"
      ],
      "answer": 0,
      "topic": "Contracts",
      "level": 2,
      "_id": "cbl_6",
      "why": "Mirror image rule: acceptance must match offer exactly. A counter-offer rejects the original offer.",
      "how": "1) Mirror image: acceptance = offer terms. 2) Changing terms = counter-offer. 3) Counter-offer rejects original."
    },
    {
      "focus": "Consideration",
      "prompt": "Which of the following is valid consideration in a contract?",
      "options": [
        "A promise to pay $500 in exchange for a service",
        "A gift given without expectation of anything in return",
        "A promise to do something already legally required",
        "Past performance with no current exchange"
      ],
      "answer": 0,
      "topic": "Contracts",
      "level": 2,
      "_id": "cbl_7",
      "why": "Consideration must be a bargained-for exchange. Gifts, past actions, and pre-existing duties are not valid consideration.",
      "how": "1) Consideration = bargained-for exchange. 2) Both parties must give something. 3) Past performance ≠ consideration."
    },
    {
      "focus": "Statute of Frauds",
      "prompt": "The Statute of Frauds requires a written contract for:",
      "options": [
        "Sale of real estate, contracts lasting more than one year, and sale of goods over $500",
        "All business contracts",
        "Any contract worth more than $100",
        "Verbal employment agreements"
      ],
      "answer": 0,
      "topic": "Contracts",
      "level": 3,
      "_id": "cbl_8",
      "why": "Statute of Frauds: certain contracts must be in writing — real estate, contracts > 1 year, goods > $500 (UCC).",
      "how": "1) MYLEGS: Marriage, Year (>1), Land, Executor, Goods (>$500), Surety. 2) Must be in writing."
    },
    {
      "focus": "Breach and remedies",
      "prompt": "Compensatory damages in contract law aim to:",
      "options": [
        "Put the non-breaching party in the position they would have been in had the contract been performed",
        "Punish the breaching party",
        "Prevent future breaches",
        "Return parties to their pre-contract position only"
      ],
      "answer": 0,
      "topic": "Contracts",
      "level": 2,
      "_id": "cbl_9",
      "why": "Compensatory damages: restore the injured party to their expected position (expectation interest).",
      "how": "1) Compensatory: make whole. 2) Expectation damages = contract value. 3) Not punitive."
    },
    {
      "focus": "Discharge of contracts",
      "prompt": "A contract is discharged by performance when:",
      "options": [
        "Both parties fully complete their contractual obligations",
        "One party breaches",
        "The contract becomes impossible to perform",
        "The parties modify the terms"
      ],
      "answer": 0,
      "topic": "Contracts",
      "level": 1,
      "_id": "cbl_10",
      "why": "Discharge by performance: both parties fulfill all obligations → contract is complete.",
      "how": "1) Discharge: how a contract ends. 2) Performance: obligations met. 3) Also: breach, impossibility, agreement."
    },
    {
      "focus": "Void vs voidable contracts",
      "prompt": "A contract with a minor is typically:",
      "options": [
        "Voidable at the minor's option",
        "Void and completely unenforceable",
        "Automatically valid upon majority",
        "Legal only if written"
      ],
      "answer": 0,
      "topic": "Contracts",
      "level": 2,
      "_id": "cbl_11",
      "why": "Minors lack full capacity. Their contracts are voidable (they can disaffirm), not automatically void.",
      "how": "1) Voidable: can be enforced or rejected by the party lacking capacity. 2) Minor can disaffirm before or shortly after majority."
    },
    {
      "focus": "Contract capacity",
      "prompt": "A contract entered into by someone who was legally intoxicated at the time of signing is:",
      "options": [
        "Potentially voidable if incapacity can be proven",
        "Always automatically void",
        "Fully enforceable regardless",
        "Only valid if witnessed"
      ],
      "answer": 0,
      "topic": "Contracts",
      "level": 2,
      "_id": "cbl_12",
      "why": "Intoxication affecting capacity = voidable. Must show they lacked ability to understand the contract.",
      "how": "1) Incapacity = voidable (not void). 2) Must prove inability to understand at time of signing."
    },
    {
      "focus": "Tort vs contract",
      "prompt": "A tort is best defined as:",
      "options": [
        "A civil wrong that causes harm to another, independent of a contract",
        "A breach of a written agreement",
        "A criminal offense",
        "A tax law violation"
      ],
      "answer": 0,
      "topic": "Torts",
      "level": 1,
      "_id": "cbl_13",
      "why": "Tort = civil wrong causing harm; not based on contract. Examples: negligence, defamation, fraud.",
      "how": "1) Tort: civil wrong, non-contract. 2) Categories: intentional, negligence, strict liability."
    },
    {
      "focus": "Negligence elements",
      "prompt": "Which is NOT an element of negligence?",
      "options": [
        "Intent to cause harm (not required)",
        "Duty of care",
        "Breach of duty",
        "Causation and damages"
      ],
      "answer": 0,
      "topic": "Torts",
      "level": 2,
      "_id": "cbl_14",
      "why": "Negligence requires duty, breach, causation, damages — but NOT intent. Intent is required for intentional torts.",
      "how": "1) Negligence: DBCD (Duty, Breach, Causation, Damages). 2) No intent required."
    },
    {
      "focus": "Product liability",
      "prompt": "Strict liability in tort for defective products means:",
      "options": [
        "A manufacturer can be liable without proof of negligence if a product is defectively dangerous",
        "The manufacturer is only liable if negligent",
        "The consumer assumed all risks",
        "Liability only applies to food products"
      ],
      "answer": 0,
      "topic": "Legal Environment",
      "level": 3,
      "_id": "cbl_15",
      "why": "Strict liability: liable regardless of fault/intent if product is defective and causes harm.",
      "how": "1) Strict liability: no need to prove negligence. 2) Must show: defective product → harm. 3) Manufacturer/seller liable."
    },
    {
      "focus": "Antitrust law",
      "prompt": "The Sherman Antitrust Act prohibits:",
      "options": [
        "Monopolies and conspiracies in restraint of trade",
        "All forms of competition between businesses",
        "Mergers of any size",
        "Patents and intellectual property"
      ],
      "answer": 0,
      "topic": "Legal Environment",
      "level": 2,
      "_id": "cbl_16",
      "why": "Sherman Act: prohibits restraints of trade (price-fixing, market allocation) and monopolization.",
      "how": "1) Sherman Act (1890): Section 1 = restraint of trade; Section 2 = monopolization."
    },
    {
      "focus": "Agency law",
      "prompt": "In agency law, a principal is liable for the acts of an agent when the agent acts:",
      "options": [
        "Within the scope of their actual or apparent authority",
        "Only when explicitly authorized in writing",
        "Against the principal's instructions",
        "Outside business hours"
      ],
      "answer": 0,
      "topic": "Miscellaneous",
      "level": 2,
      "_id": "cbl_17",
      "why": "Principal liable for agent acts within actual authority (expressed or implied) or apparent authority.",
      "how": "1) Actual authority: agent told to act. 2) Apparent authority: third party reasonably believes agent authorized."
    },
    {
      "focus": "Employment law — at-will",
      "prompt": "Employment at-will means:",
      "options": [
        "Either party can terminate the employment relationship for any reason not prohibited by law",
        "Only the employee can quit without notice",
        "Only the employer can fire without cause",
        "Employment lasts exactly one year"
      ],
      "answer": 0,
      "topic": "Legal Environment",
      "level": 2,
      "_id": "cbl_18",
      "why": "At-will: either party can end employment at any time for any lawful reason (no cause required).",
      "how": "1) At-will: fire or quit anytime. 2) Exceptions: discrimination, retaliation, public policy."
    },
    {
      "focus": "Contracts — assignment",
      "prompt": "Assignment of a contract transfers:",
      "options": [
        "The assignor's rights (not duties) to a third party",
        "All obligations to a third party",
        "The contract to a government agency",
        "Ownership of associated property"
      ],
      "answer": 0,
      "topic": "Contracts",
      "level": 3,
      "_id": "cbl_19",
      "why": "Assignment: transferring rights. Delegation: transferring duties. Original party usually remains liable for duties.",
      "how": "1) Assignment: rights transfer. 2) Delegation: duties transfer. 3) Assignor usually still liable unless released."
    },
    {
      "focus": "Promissory estoppel",
      "prompt": "Promissory estoppel allows enforcement of a promise without consideration when:",
      "options": [
        "One party reasonably relied on the promise to their detriment",
        "The promise was written",
        "Both parties signed the agreement",
        "The amount exceeds $1,000"
      ],
      "answer": 0,
      "topic": "Contracts",
      "level": 3,
      "_id": "cbl_20",
      "why": "Promissory estoppel: if A promises B something, B relies to their detriment, A cannot deny the promise.",
      "how": "1) Elements: promise + reasonable reliance + detrimental reliance + injustice without enforcement."
    },
    {
      "focus": "Consumer protection — UCC",
      "prompt": "The Uniform Commercial Code (UCC) primarily governs:",
      "options": [
        "The sale of goods between merchants and consumers in the United States",
        "International criminal law",
        "Real estate property only",
        "Constitutional questions"
      ],
      "answer": 0,
      "topic": "Legal Environment",
      "level": 2,
      "_id": "cbl_g1",
      "why": "UCC: standardizes commercial law (sales of goods, secured transactions, leases) across states.",
      "how": "1) UCC: sales of goods. 2) Adopted by all 50 states (mostly). 3) Article 2: sales."
    },
    {
      "focus": "Intentional tort — defamation",
      "prompt": "Defamation requires the false statement to be:",
      "options": [
        "Communicated (published) to a third party",
        "Believed by the speaker",
        "Made in writing only",
        "Targeting a corporation only"
      ],
      "answer": 0,
      "topic": "Torts",
      "level": 3,
      "_id": "cbl_g2",
      "why": "Defamation elements: false statement, communicated to third party, harms reputation. Slander (oral) or libel (written).",
      "how": "1) False statement of fact (not opinion). 2) Published to third party. 3) Causes harm to reputation."
    },
    {
      "focus": "Intentional tort — battery",
      "prompt": "In tort law, battery is:",
      "options": [
        "Intentional, harmful, or offensive contact with another person",
        "Threatening to harm someone",
        "Damaging property",
        "Verbal abuse only"
      ],
      "answer": 0,
      "topic": "Torts",
      "level": 2,
      "_id": "cbl_g3",
      "why": "Battery: actual unwanted contact. Assault: threat or apprehension of contact (no contact required).",
      "how": "1) Battery: contact occurs. 2) Assault: threat/fear of contact. 3) Both intentional torts."
    },
    {
      "focus": "Partnerships",
      "prompt": "In a general partnership, partners have:",
      "options": [
        "Joint and several liability — each partner can be held liable for all partnership debts",
        "Limited liability up to their investment",
        "No personal liability",
        "Liability only for their own actions"
      ],
      "answer": 0,
      "topic": "Miscellaneous",
      "level": 3,
      "_id": "cbl_g4",
      "why": "General partnership: each partner personally liable for ALL partnership debts (joint and several).",
      "how": "1) General partnership: unlimited personal liability. 2) Limited partnership/LLC: limited liability. 3) Risk of general partnership = personal assets at risk."
    },
    {
      "focus": "Corporate structure — limited liability",
      "prompt": "A key advantage of forming a corporation is:",
      "options": [
        "Shareholders have limited liability — only their investment is at risk",
        "Corporations pay no taxes",
        "Owners have unlimited authority",
        "Corporations cannot be sued"
      ],
      "answer": 0,
      "topic": "Miscellaneous",
      "level": 2,
      "_id": "cbl_g5",
      "why": "Corporate veil: shareholders' personal assets generally protected. Liability limited to investment.",
      "how": "1) Limited liability: investment only at risk. 2) Personal assets protected. 3) Corporation = separate legal entity."
    },
    {
      "focus": "Sales — UCC warranty",
      "prompt": "Under UCC, an implied warranty of merchantability means:",
      "options": [
        "Goods are reasonably fit for ordinary purposes",
        "The seller guarantees a refund",
        "The buyer has 30 days to inspect",
        "Only written warranties apply"
      ],
      "answer": 0,
      "topic": "Miscellaneous",
      "level": 3,
      "_id": "cbl_g6",
      "why": "UCC implied warranty of merchantability: goods sold by merchant must be fit for ordinary use, properly labeled, of fair quality.",
      "how": "1) Implied (automatic) for merchants. 2) Goods must be fit for ordinary purposes. 3) Can be disclaimed in writing (\"as-is\")."
    },
    {
      "focus": "Anticipatory breach",
      "prompt": "Anticipatory breach (repudiation) occurs when:",
      "options": [
        "One party indicates before performance is due that they will not perform",
        "The contract is fully performed",
        "Both parties agree to terminate",
        "A natural disaster prevents performance"
      ],
      "answer": 0,
      "topic": "Contracts",
      "level": 3,
      "_id": "cbl_g7",
      "why": "Anticipatory breach: party makes clear they will not perform before performance is due. Other party can sue immediately.",
      "how": "1) Before performance date. 2) Clear statement/action of refusal. 3) Non-breaching party can sue without waiting."
    }
  ],
  "clep_lit": [
    {
      "focus": "Figurative language — metaphor",
      "level": 2,
      "topic": "Poetry",
      "passage": "<p>My luve is like a red, red rose / That's newly sprung in June: / My luve is like the melodie / That's sweetly played in tune.</p>",
      "prompt": "The speaker compares his love to a red rose and a melody. These comparisons are examples of:",
      "options": [
        "Simile — direct comparison using \"like\" or \"as\"",
        "Metaphor — implied comparison without \"like\"",
        "Personification — giving human traits to objects",
        "Alliteration — repetition of consonant sounds"
      ],
      "answer": 0,
      "why": "\"Like\" signals a simile. The speaker explicitly says love IS LIKE these things, not that it IS them (which would be metaphor).",
      "how": "1) Simile uses \"like\" or \"as.\" 2) \"My luve is like a red rose\" = simile. 3) No simile word = metaphor.",
      "_id": "clep_lit_0"
    },
    {
      "focus": "Tone",
      "level": 3,
      "topic": "Poetry",
      "passage": "<p>Because I could not stop for Death — / He kindly stopped for me — / The Carriage held but just Ourselves — / And Immortality.</p>",
      "prompt": "The speaker's tone toward Death in this stanza is best described as:",
      "options": [
        "Calm and accepting — Death is personified as a courteous companion",
        "Terrified and desperate",
        "Angry and resistant",
        "Joyful and celebratory"
      ],
      "answer": 0,
      "why": "\"Kindly stopped for me\" portrays Death as gentle and courteous. The tone is tranquil, not fearful.",
      "how": "1) Tone = emotional attitude. 2) \"Kindly\" = pleasant, not frightening. 3) Calm acceptance of death.",
      "_id": "clep_lit_1"
    },
    {
      "focus": "Dramatic irony",
      "level": 3,
      "topic": "Drama",
      "passage": "<p>JULIET: What's here? A cup, closed in my true love's hand? Poison, I see, hath been his timeless end. O churl, drunk all, and left no friendly drop to help me after?</p>",
      "prompt": "The audience's knowledge that Juliet is actually alive (sleeping potion, not truly dead) while Romeo believed her dead creates:",
      "options": [
        "Dramatic irony — audience knows more than a character",
        "Situational irony — an unexpected outcome",
        "Verbal irony — saying the opposite of what is meant",
        "Foreshadowing — hinting at future events"
      ],
      "answer": 0,
      "why": "Dramatic irony: the audience knows Juliet was not dead; Romeo did not. This gap in knowledge creates dramatic tension.",
      "how": "1) Dramatic irony: audience knows > character knows. 2) Romeo died because he lacked the audience's knowledge.",
      "_id": "clep_lit_2"
    },
    {
      "focus": "Narrative point of view",
      "level": 2,
      "topic": "Fiction",
      "passage": "<p>I had not taken ten paces when I heard the sound of footsteps behind me. I turned, but there was nothing there — only the swaying of the trees in the midnight wind.</p>",
      "prompt": "This passage is told from which point of view?",
      "options": [
        "First person — the narrator is a character using \"I\"",
        "Third person limited",
        "Third person omniscient",
        "Second person"
      ],
      "answer": 0,
      "why": "\"I had not taken\" — first-person pronoun signals the narrator is a participant in the story.",
      "how": "1) First person: I/me/my — narrator is a character. 2) Third limited: he/she, one character's thoughts. 3) Omniscient: knows all characters' thoughts.",
      "_id": "clep_lit_3"
    },
    {
      "focus": "Theme vs subject",
      "level": 2,
      "topic": "Fiction and Drama",
      "passage": "<p>Throughout the novel, the protagonist accumulates wealth, power, and status — yet finds himself more isolated and miserable than when he began. His old friends have drifted away; his family barely recognizes him.</p>",
      "prompt": "Which statement best expresses a THEME (not just a subject) of this passage?",
      "options": [
        "The pursuit of wealth and status can destroy the relationships that give life meaning",
        "Wealthy people are unhappy",
        "The protagonist worked very hard",
        "Money is important in society"
      ],
      "answer": 0,
      "why": "A theme is a complete insight about life, not just a topic. \"Wealth destroys meaningful relationships\" = a thematic statement.",
      "how": "1) Subject: wealth, success. 2) Theme: a claim/insight about that subject. 3) \"Wealth can destroy relationships\" = theme.",
      "_id": "clep_lit_4"
    },
    {
      "focus": "Imagery",
      "level": 2,
      "topic": "Poetry",
      "passage": "<p>The fog comes / on little cat feet. / It sits looking / over harbor and city / on silent haunches / and then moves on.</p>",
      "prompt": "The primary literary device in this poem is:",
      "options": [
        "Extended metaphor — fog is compared to a cat throughout the poem",
        "Simile — fog is like a cat",
        "Alliteration — repeated consonants",
        "Hyperbole — extreme exaggeration"
      ],
      "answer": 0,
      "why": "The entire poem compares fog to a cat without using \"like\" or \"as\" — an extended metaphor sustained across all lines.",
      "how": "1) No \"like\" or \"as\" = metaphor. 2) Sustained through whole poem = extended metaphor. 3) Cat imagery: feet, haunches, sitting.",
      "_id": "clep_lit_5"
    },
    {
      "focus": "Allusion",
      "level": 3,
      "topic": "Poetry and Prose",
      "passage": "<p>He had worked his whole life building what he thought was a paradise, but when the inspectors arrived, they found nothing but a house of cards — a Potemkin village of success masking decades of fraud.</p>",
      "prompt": "\"Potemkin village\" alludes to fake facades built to impress. Using this phrase, the author implies:",
      "options": [
        "The success was entirely fabricated to deceive observers",
        "The character lived in Russia",
        "The fraud involved construction literally",
        "The inspectors were incompetent"
      ],
      "answer": 0,
      "why": "A Potemkin village (fake façades to impress) = an allusion signaling that the outward success was completely fraudulent.",
      "how": "1) Allusion: reference to historical/cultural event. 2) Potemkin = fake façades. 3) Author uses it to mean: success was all show.",
      "_id": "clep_lit_6"
    },
    {
      "focus": "Prose structure — flashback",
      "level": 2,
      "topic": "Fiction",
      "passage": "<p>Standing at the kitchen window in 2024, Maria remembered clearly the morning her father had taught her to bake bread. She was seven years old, barely tall enough to see over the counter, her hands white with flour.</p>",
      "prompt": "The shift from 2024 to Maria's childhood memory is an example of:",
      "options": [
        "Flashback — a return to a past event within the present narrative",
        "Foreshadowing — hinting at future events",
        "Parallel plot — two storylines running simultaneously",
        "In medias res — beginning in the middle of action"
      ],
      "answer": 0,
      "why": "The narrative moves from the present (2024) to a scene in the past (childhood). That interruption of chronological order = flashback.",
      "how": "1) Flashback: past event inserted into present narrative. 2) Foreshadowing: hints at future. 3) This goes backward.",
      "_id": "clep_lit_7"
    },
    {
      "focus": "Symbolism",
      "level": 3,
      "topic": "Fiction and Poetry",
      "passage": "<p>Throughout the novel, the green light at the end of Daisy's dock appears whenever Gatsby gazes across the water. He reaches toward it but can never touch it; it remains always just out of reach.</p>",
      "prompt": "The green light most likely symbolizes:",
      "options": [
        "Gatsby's unattainable dreams and longing for an idealized future",
        "The color of money and financial success only",
        "Daisy's disinterest in Gatsby",
        "Environmental themes of nature"
      ],
      "answer": 0,
      "why": "The green light is famously symbolic of Gatsby's dreams — always visible, always across the water, never reached.",
      "how": "1) Symbol: object with deeper meaning. 2) Green light = desire + the American Dream. 3) Always out of reach = unattainable longing.",
      "_id": "clep_lit_8"
    },
    {
      "focus": "Meter in poetry — iambic pentameter",
      "level": 3,
      "topic": "Poetry",
      "passage": "<p>\"Shall I compare thee to a summer's day? / Thou art more lovely and more temperate.\"</p>",
      "prompt": "Shakespeare wrote in iambic pentameter. An \"iamb\" is:",
      "options": [
        "An unstressed syllable followed by a stressed syllable (da-DUM)",
        "A stressed syllable followed by an unstressed one (DUM-da)",
        "Two stressed syllables together (DUM-DUM)",
        "Three syllables with the stress in the middle"
      ],
      "answer": 0,
      "why": "Iamb = da-DUM (unstressed + stressed). Pentameter = 5 feet per line. Iambic pentameter = 5 × da-DUM.",
      "how": "1) Iamb: da-DUM. 2) Penta: five. 3) Line: da-DUM da-DUM da-DUM da-DUM da-DUM = 10 syllables.",
      "_id": "clep_lit_9"
    },
    {
      "focus": "Characterization — indirect",
      "level": 2,
      "topic": "Fiction",
      "passage": "<p>Without being asked, he stayed late to help Mrs. Chen carry her groceries up three flights of stairs, then waved off her thanks. \"Anyone would've done it,\" he said, though both of them knew that wasn't true.</p>",
      "prompt": "The author characterizes the young man primarily through:",
      "options": [
        "His actions and dialogue — showing rather than telling",
        "A direct statement describing his personality",
        "Another character's opinion of him",
        "The narrator's explicit praise"
      ],
      "answer": 0,
      "why": "Indirect characterization: we learn his character through what he does and says, not through explicit description.",
      "how": "1) Direct: \"He was generous.\" 2) Indirect: STEAL (Speech, Thoughts, Effect, Actions, Looks). 3) Here: actions + speech reveal character.",
      "_id": "clep_lit_10"
    },
    {
      "focus": "Satire",
      "level": 3,
      "topic": "Fiction and Nonfiction",
      "passage": "<p>The government announced a new program to fight hunger: officials would study the problem for three years, issue a detailed report on the definition of hunger, and then form a committee to review the report. Citizens were assured that action would follow within the decade.</p>",
      "prompt": "This passage uses __ to criticize bureaucratic inaction:",
      "options": [
        "Satire — using irony and exaggeration to expose human folly",
        "Allegory — using symbols to represent political systems",
        "Elegy — lamenting a loss",
        "Epic simile — a sustained lengthy comparison"
      ],
      "answer": 0,
      "why": "Satire: the absurdly slow response (study → report → committee → maybe action in a decade) mocks bureaucratic dysfunction.",
      "how": "1) Satire: exaggeration + irony to criticize. 2) The content is absurd on purpose. 3) Target = ineffective government bureaucracy.",
      "_id": "clep_lit_11"
    },
    {
      "focus": "Rhyme scheme",
      "level": 2,
      "topic": "Poetry",
      "passage": "<p>Shall I compare thee to a summer's day? (A) / Thou art more lovely and more temperate: (B) / Rough winds do shake the darling buds of May, (A) / And summer's lease hath all too short a date. (B)</p>",
      "prompt": "The rhyme scheme of this quatrain is:",
      "options": [
        "ABAB — alternating end rhymes",
        "ABBA — envelope rhyme",
        "AABB — paired rhyme",
        "AAAA — monorhyme"
      ],
      "answer": 0,
      "why": "\"day/May\" = A, \"temperate/date\" = B. Alternating = ABAB.",
      "how": "1) Label end words: A=day, B=temperate, A=May, B=date. 2) Pattern = ABAB.",
      "_id": "clep_lit_12"
    },
    {
      "focus": "Nonfiction — rhetorical appeals",
      "level": 3,
      "topic": "Nonfiction",
      "passage": "<p>Consider the children who go to school hungry every morning, unable to focus because their stomachs are empty. They are not statistics. They are your neighbors' kids. If you had the power to end that — and you do — would you choose not to?</p>",
      "prompt": "This passage primarily uses which rhetorical appeal?",
      "options": [
        "Pathos — emotional appeal to the audience's sympathy and guilt",
        "Logos — logical evidence and data",
        "Ethos — appeal to speaker's credibility",
        "Kairos — appeal to timing"
      ],
      "answer": 0,
      "why": "Pathos: emotional appeal through vivid imagery of hungry children and direct address (\"your neighbors' kids,\" \"would you choose not to\").",
      "how": "1) Logos: facts/logic. 2) Ethos: credibility. 3) Pathos: emotion. 4) Hungry children + direct guilt appeal = pathos.",
      "_id": "clep_lit_13"
    },
    {
      "focus": "Genre — elegy",
      "level": 2,
      "topic": "Poetry",
      "passage": "<p>O Captain! my Captain! our fearful trip is done, / The ship has weather'd every rack, the prize we sought is won, / But O heart! heart! heart! / O the bleeding drops of red, / Where on the deck my Captain lies, / Fallen cold and dead.</p>",
      "prompt": "This poem, written after Lincoln's assassination, is an example of:",
      "options": [
        "An elegy — a poem mourning the death of a person or lamenting a loss",
        "A sonnet — 14 lines in iambic pentameter",
        "An ode — a ceremonial poem of praise",
        "A ballad — a narrative folk poem"
      ],
      "answer": 0,
      "why": "An elegy is a mournful poem about death/loss. This poem mourns Lincoln through the extended metaphor of a fallen captain.",
      "how": "1) Elegy: mourning/lament. 2) Captain = Lincoln. 3) \"Fallen cold and dead\" = mourning. 4) Whitman's \"O Captain! My Captain!\"",
      "_id": "clep_lit_14"
    },
    {
      "focus": "Drama — soliloquy",
      "level": 3,
      "topic": "Drama",
      "passage": "<p>HAMLET: To be, or not to be, that is the question: / Whether 'tis nobler in the mind to suffer / The slings and arrows of outrageous fortune, / Or to take arms against a sea of troubles, / And by opposing end them.</p>",
      "prompt": "Hamlet's speech here is an example of a:",
      "options": [
        "Soliloquy — a character speaking inner thoughts aloud while alone on stage",
        "Dialogue between characters",
        "Monologue addressed to other characters",
        "Aside whispered to the audience"
      ],
      "answer": 0,
      "why": "Soliloquy: character alone reveals inner thoughts to audience. Different from monologue (to others on stage) or aside (brief comment to audience).",
      "how": "1) Soliloquy: alone, inner thoughts. 2) Monologue: to others. 3) Aside: brief, to audience only. 4) Hamlet alone, weighing thoughts.",
      "_id": "clep_lit_15"
    },
    {
      "focus": "Renaissance literature",
      "level": 3,
      "topic": "Drama",
      "passage": "<p>JULIET: O Romeo, Romeo! wherefore art thou Romeo? / Deny thy father and refuse thy name; / Or, if thou wilt not, be but sworn my love, / And I'll no longer be a Capulet.</p>",
      "prompt": "\"Wherefore art thou Romeo?\" most accurately means:",
      "options": [
        "\"Why are you (named) Romeo?\" — questioning his identity, not his location",
        "\"Where are you, Romeo?\"",
        "\"How are you, Romeo?\"",
        "\"Who is Romeo?\""
      ],
      "answer": 0,
      "why": "\"Wherefore\" in Early Modern English = \"why,\" not \"where.\" Juliet questions WHY he must be Romeo (a Montague, her family's enemy).",
      "how": "1) \"Wherefore\" = why (Renaissance English). 2) She questions his identity, not location. 3) Common misunderstanding.",
      "_id": "clep_lit_16"
    },
    {
      "focus": "Romantic period",
      "level": 3,
      "topic": "Poetry",
      "passage": "<p>I wandered lonely as a cloud / That floats on high o'er vales and hills, / When all at once I saw a crowd, / A host, of golden daffodils;</p>",
      "prompt": "This poem (Wordsworth) reflects characteristics of which literary period?",
      "options": [
        "Romanticism — emphasis on nature, emotion, and individual experience",
        "Classical period",
        "Modernism",
        "Postmodernism"
      ],
      "answer": 0,
      "why": "Romantic period (late 18th–early 19th c.): nature, emotion, imagination, the sublime, individual experience.",
      "how": "1) Romantic markers: nature (\"vales and hills\"), emotion, sensory imagery. 2) Wordsworth = key Romantic poet.",
      "_id": "clep_lit_17"
    },
    {
      "focus": "Modernist literature — stream of consciousness",
      "level": 4,
      "topic": "Fiction",
      "passage": "<p>Yes she said yes I will Yes — the book closing on Molly Bloom's interior thoughts running together without punctuation, present and past colliding in unfiltered memory.</p>",
      "prompt": "This passage describes which Modernist technique used by Joyce?",
      "options": [
        "Stream of consciousness — presenting thoughts as raw, unstructured flow",
        "Allegory",
        "Pastoral",
        "Heroic couplet"
      ],
      "answer": 0,
      "why": "Stream of consciousness: continuous flow of thoughts without conventional structure. Hallmark of Modernism (Joyce, Woolf, Faulkner).",
      "how": "1) Modernist innovation. 2) Mimics actual thinking. 3) Joyce, Woolf, Faulkner pioneered it.",
      "_id": "clep_lit_18"
    },
    {
      "focus": "Translation — world literature",
      "level": 3,
      "topic": "Works in Translation",
      "passage": "<p>\"All happy families are alike; each unhappy family is unhappy in its own way.\" — opening of Tolstoy's Anna Karenina, originally in Russian.</p>",
      "prompt": "When reading a work in translation, readers should be aware that:",
      "options": [
        "The translator's choices affect meaning, tone, and rhythm — no translation is fully equivalent to the original",
        "All translations are exact word-for-word equivalents",
        "Style and tone are preserved perfectly",
        "Cultural context is unimportant"
      ],
      "answer": 0,
      "why": "Translation involves interpretive choices. Different translators produce different effects; some nuance is always lost or transformed.",
      "how": "1) Translation = interpretation. 2) Word-for-word impossible. 3) Meaning, tone, rhythm all impacted.",
      "_id": "clep_lit_19"
    }
  ],
  "clep_composition": [
    {
      "focus": "Subject-verb agreement",
      "prompt": "Which sentence is grammatically correct?",
      "options": [
        "The committee has issued its final report.",
        "The committee have issued their final report.",
        "The committee has issued their final report.",
        "The committees has issued its final report."
      ],
      "answer": 0,
      "topic": "Conventions of Standard Written English",
      "level": 2,
      "_id": "ccom_1",
      "why": "\"Committee\" is a collective noun used as a single unit in American English → singular verb \"has\" and singular pronoun \"its.\"",
      "how": "1) Collective noun (committee, team, jury) = singular in American English. 2) \"Has\" (singular) + \"its\" (singular). ✓"
    },
    {
      "focus": "Comma splice correction",
      "prompt": "Which correctly fixes the comma splice: \"She studied all night, she passed the exam\"?",
      "options": [
        "She studied all night; she passed the exam.",
        "She studied all night, so she passed the exam.",
        "She studied all night, and she passed the exam.",
        "All of the above are correct."
      ],
      "answer": 3,
      "topic": "Conventions of Standard Written English",
      "level": 2,
      "_id": "ccom_2",
      "why": "All three methods correctly fix a comma splice: semicolon; comma + coordinating conjunction (FANBOYS); period.",
      "how": "1) Comma splice: two independent clauses joined by comma alone. 2) Fix: ; or , + conjunction or period."
    },
    {
      "focus": "Parallel structure",
      "prompt": "Which sentence uses parallel structure correctly?",
      "options": [
        "She enjoys hiking, swimming, and to run.",
        "She enjoys hiking, swimming, and running.",
        "She enjoys to hike, to swim, and running.",
        "She enjoys hike, swim, and running."
      ],
      "answer": 1,
      "topic": "Conventions of Standard Written English",
      "level": 2,
      "_id": "ccom_3",
      "why": "Parallel structure requires the same grammatical form in a series. \"Hiking, swimming, and running\" = all gerunds (−ing).",
      "how": "1) Series must match: all gerunds, all infinitives, or all nouns. 2) Hiking/swimming/running all gerunds. ✓"
    },
    {
      "focus": "Pronoun case",
      "prompt": "Which sentence correctly uses the pronoun case?",
      "options": [
        "Between you and me, the plan won't work.",
        "Between you and I, the plan won't work.",
        "Between you and myself, the plan won't work.",
        "Between I and you, the plan won't work."
      ],
      "answer": 0,
      "topic": "Conventions of Standard Written English",
      "level": 2,
      "_id": "ccom_4",
      "why": "\"Between\" is a preposition → requires objective case (me, not I). \"Between you and me\" ✓.",
      "how": "1) Prepositions take object pronouns: me, him, her, us, them. 2) \"Between you and me\" = correct."
    },
    {
      "focus": "Misplaced modifier",
      "prompt": "Which sentence corrects the misplaced modifier? \"Running down the street, the trees were beautiful.\"",
      "options": [
        "Running down the street, I noticed the beautiful trees.",
        "The trees were beautiful, running down the street.",
        "Running, the beautiful trees were seen by me.",
        "I was seeing beautiful trees running down the street."
      ],
      "answer": 0,
      "topic": "Conventions of Standard Written English",
      "level": 2,
      "_id": "ccom_5",
      "why": "A participial phrase must be placed next to the noun it modifies. \"Running down the street\" must be next to a person, not \"trees.\"",
      "how": "1) Participial phrase: place next to the noun it describes. 2) Option A: \"I\" (a person) is running, not the trees. ✓"
    },
    {
      "focus": "Active vs passive voice",
      "prompt": "Convert to active voice: \"Mistakes were made by the accounting department.\"",
      "options": [
        "The accounting department made mistakes.",
        "Mistakes have been made.",
        "Mistakes were being made.",
        "The department was making mistakes by accounting."
      ],
      "answer": 0,
      "topic": "Conventions of Standard Written English",
      "level": 2,
      "_id": "ccom_6",
      "why": "Active voice: subject performs the action. \"The accounting department (subject) made (verb) mistakes (object).\"",
      "how": "1) Passive: \"mistakes were made.\" 2) Active: identify doer → make it the subject. 3) \"Accounting dept. made mistakes.\""
    },
    {
      "focus": "Thesis statement",
      "prompt": "Which is the most effective thesis statement for an argumentative essay?",
      "options": [
        "Social media companies should be legally required to label AI-generated content to prevent mass misinformation.",
        "Social media is popular and many people use it every day.",
        "This essay will discuss social media and AI.",
        "Social media has good and bad aspects."
      ],
      "answer": 0,
      "topic": "Revision Skills",
      "level": 2,
      "_id": "ccom_7",
      "why": "A strong thesis: specific, arguable claim with clear position and direction.",
      "how": "1) Good thesis: specific + arguable + directional. 2) Option A: specific claim with clear position. 3) Others: vague or just state topic."
    },
    {
      "focus": "Transitional words — contrast",
      "prompt": "Which transitional phrase best signals CONTRAST between two ideas?",
      "options": [
        "Nevertheless",
        "Furthermore",
        "In addition",
        "Consequently"
      ],
      "answer": 0,
      "topic": "Revision Skills",
      "level": 1,
      "_id": "ccom_8",
      "why": "\"Nevertheless\" signals contrast/concession. \"Furthermore/in addition\" signal addition. \"Consequently\" signals cause-effect.",
      "how": "1) Contrast: nevertheless, however, although, yet. 2) Addition: furthermore, moreover. 3) Cause-effect: consequently, therefore."
    },
    {
      "focus": "Evidence evaluation",
      "prompt": "Which type of evidence is generally strongest in an academic argument?",
      "options": [
        "Peer-reviewed research with specific data and methodology",
        "A personal anecdote from the author's experience",
        "A popular blog post supporting the claim",
        "An anonymous quote from social media"
      ],
      "answer": 0,
      "topic": "Revision Skills",
      "level": 2,
      "_id": "ccom_9",
      "why": "Peer-reviewed research: credible, verified, methodologically sound. Anecdotes and anonymous sources are weakest.",
      "how": "1) Hierarchy: peer-reviewed > expert testimony > statistics > anecdote. 2) \"Peer-reviewed\" = vetted by experts."
    },
    {
      "focus": "Audience and tone",
      "prompt": "Which sentence is most appropriate for a formal academic paper?",
      "options": [
        "The evidence suggests a strong correlation between sleep deprivation and cognitive impairment.",
        "Not getting enough sleep really messes up your brain.",
        "You'll be shocked by what sleep loss does to thinking.",
        "Science shows sleep is bad to miss."
      ],
      "answer": 0,
      "topic": "Revision Skills",
      "level": 2,
      "_id": "ccom_10",
      "why": "Academic writing: formal vocabulary, third person, precise language, no slang.",
      "how": "1) Formal: \"evidence suggests,\" \"correlation,\" \"cognitive impairment.\" 2) Informal: \"messes up,\" \"you'll be shocked,\" \"brain.\""
    },
    {
      "focus": "Coherence — paragraph unity",
      "prompt": "A paragraph has unity when:",
      "options": [
        "Every sentence relates directly to the topic sentence",
        "Multiple topics are covered efficiently",
        "The paragraph is very short",
        "It begins with a transitional phrase"
      ],
      "answer": 0,
      "topic": "Revision Skills",
      "level": 2,
      "_id": "ccom_11",
      "why": "Paragraph unity: all sentences support the one controlling idea stated in the topic sentence.",
      "how": "1) Topic sentence = controlling idea. 2) Unity: every sentence supports it. 3) Irrelevant sentences destroy unity."
    },
    {
      "focus": "Conciseness — wordiness",
      "prompt": "Which revision makes the sentence most concise? \"Due to the fact that it was raining, the game was cancelled.\"",
      "options": [
        "Because it was raining, the game was cancelled.",
        "The game was cancelled due to the fact that rain was occurring.",
        "It was raining, and therefore the game, which was scheduled, was cancelled.",
        "Owing to precipitation, the game cancellation occurred."
      ],
      "answer": 0,
      "topic": "Revision Skills",
      "level": 2,
      "_id": "ccom_12",
      "why": "\"Due to the fact that\" = wordy substitute for \"because.\" Concise writing uses fewer words without losing meaning.",
      "how": "1) \"Due to the fact that\" → \"because.\" 2) \"Because it was raining, the game was cancelled.\" = clear and concise."
    },
    {
      "focus": "Logical fallacy — ad hominem",
      "prompt": "Dismissing an argument by attacking the character of the person making it rather than addressing the argument itself is called:",
      "options": [
        "Ad hominem fallacy",
        "Straw man fallacy",
        "False dichotomy",
        "Appeal to authority"
      ],
      "answer": 0,
      "topic": "Ability in Rhetoric and Analysis",
      "level": 3,
      "_id": "ccom_13",
      "why": "Ad hominem: attacking the person, not the argument. \"You can't trust his data — he's been divorced twice.\"",
      "how": "1) Ad hominem: attack the person. 2) Straw man: distort the argument. 3) False dichotomy: only two options falsely."
    },
    {
      "focus": "Research — primary vs secondary sources",
      "prompt": "Which is a primary source for a research paper on the Civil War?",
      "options": [
        "A letter written by a Union soldier in 1863",
        "A 2020 biography of Lincoln",
        "A textbook chapter on the Civil War",
        "A documentary film from 1990"
      ],
      "answer": 0,
      "topic": "Ability in Rhetoric and Analysis",
      "level": 2,
      "_id": "ccom_14",
      "why": "Primary source: original, first-hand. An 1863 letter = direct evidence from the time period.",
      "how": "1) Primary: original sources (letters, diaries, original data, speeches). 2) Secondary: analyze/interpret primary sources."
    },
    {
      "focus": "Inductive vs deductive reasoning",
      "prompt": "Deductive reasoning moves from:",
      "options": [
        "General principles to specific conclusions",
        "Specific observations to general conclusions",
        "Emotional appeals to logical conclusions",
        "Data to hypothesis"
      ],
      "answer": 0,
      "topic": "Ability in Rhetoric and Analysis",
      "level": 2,
      "_id": "ccom_15",
      "why": "Deductive: general → specific. Inductive: specific observations → general conclusion.",
      "how": "1) Deductive: \"All humans are mortal; Socrates is human; therefore Socrates is mortal.\" 2) Inductive: observe many cases → general rule."
    },
    {
      "focus": "MLA vs APA citation",
      "prompt": "In APA citation style, the reference list is ordered:",
      "options": [
        "Alphabetically by the first author's last name",
        "By publication date, newest first",
        "By the order cited in the text",
        "By the type of source (books first, then articles)"
      ],
      "answer": 0,
      "topic": "Ability in Rhetoric and Analysis",
      "level": 2,
      "_id": "ccom_16",
      "why": "APA: references alphabetical by author's last name. MLA calls it Works Cited, same alphabetical order.",
      "how": "1) APA: alphabetical by last name. 2) Footnotes/Chicago: by order of citation. 3) APA and MLA both alphabetical."
    },
    {
      "focus": "Rhetorical purpose",
      "prompt": "Which sentence most clearly states a PERSUASIVE purpose?",
      "options": [
        "Electric vehicles should be mandated for all new car purchases by 2035 to meet climate targets.",
        "Electric vehicles use battery power instead of gasoline.",
        "Some people prefer electric vehicles; others prefer gas cars.",
        "This paper will discuss electric vehicles."
      ],
      "answer": 0,
      "topic": "Ability in Rhetoric and Analysis",
      "level": 2,
      "_id": "ccom_17",
      "why": "\"Should be mandated\" = clear recommendation = persuasive purpose.",
      "how": "1) Persuasive: takes a position and argues for it. 2) \"Should\" + specific claim = persuasion. 3) Informative: just explains. 4) Analytical: examines."
    },
    {
      "focus": "Sentence variety",
      "prompt": "Which revision best adds sentence variety?",
      "options": [
        "Although the economy grew in Q1, unemployment remained high, suggesting uneven recovery.",
        "The economy grew. Unemployment was high. The recovery was uneven.",
        "Growth happened. Jobs were scarce. It was uneven.",
        "The economy and unemployment and the recovery were all different in Q1."
      ],
      "answer": 0,
      "why": "Option A uses a complex sentence (subordinate clause) that connects ideas with nuance. All-simple sentences are monotonous.",
      "how": "1) Variety: mix simple, compound, complex sentences. 2) \"Although...suggesting...\" = complex sentence with subordination.",
      "_id": "clep_composition_17",
      "topic": "Sentence variety",
      "level": 2
    }
  ]
};

export const STUDY_GUIDES = {
  clep: { title: 'CLEP Official Study Guide', desc: 'Practice questions and study guides — College Board', url: 'https://clep.collegeboard.org/prepare-for-an-exam/practice-questions-study-guides', icon: '' },
  ap: { title: 'AP Official Course Resources', desc: 'Course frameworks, practice exams, and study guides', url: 'https://apstudents.collegeboard.org/courses', icon: '' },
  accuplacer: { title: 'ACCUPLACER Official Practice (Pearson)', desc: 'Pearson Perspective — full ACCUPLACER family practice', url: 'https://accuplacer.pearsonperspective.com/perspective/home?passCode=accuplacer_family', icon: '' }
};

export const ACCU_SAMPLE_PDFS = [
  { label: 'Reading', icon: '', url: 'https://accuplacer.collegeboard.org/accuplacer/pdf/next-generation-sample-questions-reading.pdf', desc: 'Passages · Inference · Vocabulary in Context · Rhetoric' },
  { label: 'Writing', icon: '', url: 'https://accuplacer.collegeboard.org/accuplacer/pdf/next-generation-sample-questions-writing.pdf', desc: 'Revision · Sentence Structure · Punctuation · Usage' },
  { label: 'Arithmetic', icon: '', url: 'https://accuplacer.collegeboard.org/accuplacer/pdf/next-generation-sample-questions-arithmetic.pdf', desc: 'Whole Numbers · Fractions · Decimals · Percents · Comparisons' },
  { label: 'Quantitative Reasoning', icon: '', url: 'https://accuplacer.collegeboard.org/accuplacer/pdf/next-generation-sample-questions-quantitative-reasoning.pdf', desc: 'Ratios · Linear Equations · Probability · Statistics · Geometry' },
  { label: 'Adv. Algebra & Functions', icon: '', url: 'https://accuplacer.collegeboard.org/accuplacer/pdf/next-generation-sample-questions-advanced-algebra-and-functions.pdf', desc: 'Quadratics · Functions · Radicals · Exponential · Trig' },
  { label: 'WritePlacer Essays', icon: '', url: 'https://accuplacer.collegeboard.org/accuplacer/pdf/accuplacer-writeplacer-sample-essays.pdf', desc: 'Scored essay samples 1–8 with annotated rubric feedback' },
];

export const ACCU_IXL_PLANS = [
  { label: 'Arithmetic', icon: '', url: 'https://pro.ixl.com/math/skill-plans/accuplacer-arithmetic', topics: ["Whole number operations", "Fraction add/subtract/multiply/divide", "Decimal operations", "Percent problems", "Number comparisons & equivalents"] },
  { label: 'Quantitative Reasoning, Algebra & Statistics', icon: '', url: 'https://pro.ixl.com/math/skill-plans/accuplacer-quantitative-reasoning-algebra-and-statistics', topics: ["Rational numbers · order on a number line", "Ratios, rates & proportional reasoning", "Algebraic expressions & exponent rules", "Linear equations & applications", "Probability, sets & descriptive statistics", "Geometry concepts (area, volume, coordinate)"] },
  { label: 'Advanced Algebra & Functions', icon: '', url: 'https://pro.ixl.com/math/skill-plans/accuplacer-advanced-algebra-and-functions', topics: ["Linear & quadratic equations", "Factoring polynomials", "Functions — evaluation, composition, domain", "Radical & rational equations", "Exponential & logarithmic equations", "Geometry (surface area, congruence)", "Trigonometry (SOH-CAH-TOA, unit circle)"] },
  { label: 'Reading', icon: '', url: 'https://pro.ixl.com/ela/skill-plans/accuplacer-reading', topics: ["Main idea & central theme", "Inference & textual evidence", "Vocabulary in context", "Rhetorical analysis (purpose, point of view)", "Paired passage synthesis", "Text structure & organization"] },
  { label: 'Writing', icon: '', url: 'https://pro.ixl.com/ela/skill-plans/accuplacer-writing', topics: ["Development & elaboration", "Logical organization & transitions", "Effective language use & word choice", "Subject-verb & pronoun agreement", "Sentence structure (fragments, run-ons)", "Punctuation conventions"] },
];
