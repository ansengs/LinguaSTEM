export const STEM_TOPICS = [
  // ---------------------------------------------------------
  // ORIGINAL STEM CARDS
  // ---------------------------------------------------------
  {
    "cat": "Problem-Solving",
    "title": "Word Problem → Math Translation",
    "emoji": "",
    "formula": "Key: \"is/equals\"=, \"of\"=×, \"per\"=÷, \"difference\"=−, \"sum\"=+, \"every\"=exponent or rate, \"increased by\"=+, \"decreased by\"=−, \"times\"=×, \"quotient\"=÷, \"at least\"=≥, \"at most\"=≤, \"more than\"=>",
    "desc": "Translate English words into math symbols systematically before solving.",
    "examples": [
      { "l": "Additive (+)", "r": "\"sum of x and 5\" → x+5 | \"5 more than x\" → x+5 | \"increased by 3\" → +3" },
      { "l": "Subtractive (−)", "r": "\"difference of x and 4\" → x−4 | \"5 less than x\" → x−5 | \"decreased by 2\" → −2" },
      { "l": "Multiplicative (×)", "r": "\"product of 3 and x\" → 3x | \"3 times x\" → 3x | \"20% of x\" → 0.20x | \"half of x\" → x/2" },
      { "l": "Division (÷)", "r": "\"quotient of x and 4\" → x/4 | \"x per hour\" → x/hr | \"ratio of x to y\" → x/y" },
      { "l": "Equals (=)", "r": "\"is, are, was, were, equals, gives, yields\" → = | \"x is 12\" → x=12" },
      { "l": "Inequalities", "r": "\"at least\" → ≥ | \"at most\" → ≤ | \"more than\" → > | \"fewer than\" → < | \"no more than\" → ≤" },
      { "l": "Exponents/Powers", "r": "\"x squared\" → x² | \"cube of x\" → x³ | \"x to the nth power\" → xⁿ | \"every [n] periods\" → base^n" },
      { "l": "Rates & Per", "r": "\"miles per hour\" → miles/hr | \"cost per unit\" → cost÷units | \"n items every k days\" → n/k per day" },
      { "l": "Consecutive integers", "r": "n, n+1, n+2 (consecutive) | n, n+2, n+4 (consecutive odd/even)" },
      { "l": "Age problems", "r": "\"x years from now\" → current+x | \"x years ago\" → current−x" }
    ]
  },
  {
    "cat": "Problem-Solving",
    "tags": ["all", "daily", "math"],
    "title": "Universal Problem-Solving Loop (K-U-D)",
    "theory": "",
    "reality": "When your bike breaks, you do not just randomly twist things — you figure out what is wrong, make a plan, then fix it. Scientists, doctors, and engineers use this same Know-Understand-Do loop every time they solve a real problem.",
    "formula": "KNOWN → UNKNOWN → DIAGRAM\nTranslate → Select Formula → Solve Symbolically\nPlug Numbers → Attach Units → Check Answer",
    "method": "Research-proven: Polya's 4-Step Model (1945) — Understand, Plan, Execute, Review.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"ah\" markerWidth=\"6\" markerHeight=\"6\" refX=\"5\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7aabcf\"/></marker></defs><rect x=\"4\" y=\"40\" width=\"48\" height=\"26\" rx=\"6\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1\"/><text x=\"28\" y=\"51\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\" font-weight=\"700\">READ</text><text x=\"28\" y=\"62\" text-anchor=\"middle\" font-size=\"7\" fill=\"#9ecef0\">Known?</text><line x1=\"53\" y1=\"53\" x2=\"68\" y2=\"53\" stroke=\"#7aabcf\" stroke-width=\"1.2\" marker-end=\"url(#ah)\"/><rect x=\"70\" y=\"40\" width=\"48\" height=\"26\" rx=\"6\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1\"/><text x=\"94\" y=\"51\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\" font-weight=\"700\">DRAW</text><text x=\"94\" y=\"62\" text-anchor=\"middle\" font-size=\"7\" fill=\"#9ecef0\">Diagram</text><line x1=\"119\" y1=\"53\" x2=\"134\" y2=\"53\" stroke=\"#7aabcf\" stroke-width=\"1.2\" marker-end=\"url(#ah)\"/><rect x=\"136\" y=\"40\" width=\"48\" height=\"26\" rx=\"6\" fill=\"rgba(201,160,96,.15)\" stroke=\"#c9a060\" stroke-width=\"1\"/><text x=\"160\" y=\"51\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\" font-weight=\"700\">SOLVE</text><text x=\"160\" y=\"62\" text-anchor=\"middle\" font-size=\"7\" fill=\"#d4b87a\">Symbol first</text><line x1=\"185\" y1=\"53\" x2=\"200\" y2=\"53\" stroke=\"#c9a060\" stroke-width=\"1.2\" marker-end=\"url(#ah)\"/><rect x=\"202\" y=\"40\" width=\"52\" height=\"26\" rx=\"6\" fill=\"rgba(122,176,96,.15)\" stroke=\"#7ab060\" stroke-width=\"1\"/><text x=\"228\" y=\"51\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7ab060\" font-weight=\"700\">CHECK</text><text x=\"228\" y=\"62\" text-anchor=\"middle\" font-size=\"7\" fill=\"#a0c888\">Units+size</text><text x=\"130\" y=\"108\" text-anchor=\"middle\" font-size=\"9\" fill=\"#8a8a8a\">Polya 4-Step · KUD · Symbol-before-numbers</text></svg>",
    "caption": "Read → Draw → Solve symbolically → Check units and magnitude",
    "steps": [
      "Underline exactly what the question asks for.",
      "List every given quantity with its unit.",
      "Sketch a diagram, table, or flow chart — never skip this step.",
      "Rearrange the formula for the unknown before substituting numbers.",
      "After calculating, check units, sign, and whether the number is a reasonable real-world size."
    ],
    "example": "Find the acceleration of a 5 kg block under 20 N. Given: m=5 kg, F=20 N. Unknown: a. Formula: F=ma → a=F/m=20/5=4 m/s². Check: units kg·m/s²/kg = m/s². ✓"
  },
  {
    "cat": "Numbers & Operations",
    "tags": ["arithmetic", "beginner", "daily"],
    "title": "Order of Operations — PEMDAS Step-by-Step",
    "reality": "When you compute a tip, follow a recipe doubled, or read a price-with-tax sign, the order in which you apply each operation changes the answer. PEMDAS is the rule that keeps everyone's answer the same.",
    "formula": "P  Parentheses\nE  Exponents\nMD Multiplication & Division (left → right)\nAS Addition & Subtraction (left → right)",
    "method": "Tip: when M and D appear together, do them in the order they appear (left to right). Same for A and S.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"pe1\" markerWidth=\"6\" markerHeight=\"6\" refX=\"5\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7aabcf\"/></marker></defs><rect x=\"6\" y=\"14\" width=\"44\" height=\"22\" rx=\"6\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1\"/><text x=\"28\" y=\"29\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7aabcf\" font-weight=\"700\">P</text><line x1=\"51\" y1=\"25\" x2=\"62\" y2=\"25\" stroke=\"#7aabcf\" marker-end=\"url(#pe1)\"/><rect x=\"63\" y=\"14\" width=\"44\" height=\"22\" rx=\"6\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1\"/><text x=\"85\" y=\"29\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7aabcf\" font-weight=\"700\">E</text><line x1=\"108\" y1=\"25\" x2=\"119\" y2=\"25\" stroke=\"#c9a060\" marker-end=\"url(#pe1)\"/><rect x=\"120\" y=\"14\" width=\"58\" height=\"22\" rx=\"6\" fill=\"rgba(201,160,96,.15)\" stroke=\"#c9a060\" stroke-width=\"1\"/><text x=\"149\" y=\"29\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\" font-weight=\"700\">M / D</text><line x1=\"179\" y1=\"25\" x2=\"190\" y2=\"25\" stroke=\"#7ab060\" marker-end=\"url(#pe1)\"/><rect x=\"191\" y=\"14\" width=\"58\" height=\"22\" rx=\"6\" fill=\"rgba(122,176,96,.15)\" stroke=\"#7ab060\" stroke-width=\"1\"/><text x=\"220\" y=\"29\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">A / S</text><text x=\"130\" y=\"62\" text-anchor=\"middle\" font-size=\"10\" fill=\"#9ecef0\">Example: 3 + 4 × 2² = ?</text><text x=\"130\" y=\"76\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\">Step 1: 2² = 4   →   3 + 4 × 4</text><text x=\"130\" y=\"90\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\">Step 2: 4 × 4 = 16   →   3 + 16</text><text x=\"130\" y=\"104\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7ab060\">Step 3: 3 + 16 = 19  ✓</text></svg>",
    "caption": "Always work P → E → MD (L→R) → AS (L→R)",
    "steps": [
      "Scan the expression for parentheses; do everything inside them first.",
      "Next, evaluate every exponent (powers and roots).",
      "Now sweep left to right and do every × or ÷ in the order they appear.",
      "Finally sweep left to right and do every + or − in the order they appear.",
      "Check: did you do M before A? If yes, you followed PEMDAS."
    ],
    "example": "Compute 8 ÷ 2 × (1+3). Step 1: (1+3)=4. Step 2: 8 ÷ 2 = 4. Step 3: 4 × 4 = 16. Answer: 16."
  },
  {
    "cat": "Numbers & Operations",
    "tags": ["arithmetic", "beginner", "fractions"],
    "title": "Adding & Subtracting Fractions",
    "reality": "When you split a recipe in half, combine partial gas-tank fills, or add up time worked across days, you are adding fractions. Same denominators? Easy. Different? Find a common one.",
    "formula": "Same denom:  a/b ± c/b = (a ± c) / b\nDifferent:    a/b ± c/d = (a·d ± c·b) / (b·d)\n(then simplify)",
    "method": "LCD shortcut: if denominators share factors, use the LCM (lowest common multiple). If not, just multiply them — bigger numbers but you can simplify at the end.",
    "svg": "<svg viewBox=\"0 0 260 100\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"8\" y=\"14\" width=\"60\" height=\"60\" rx=\"6\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1\"/><line x1=\"8\" y1=\"44\" x2=\"68\" y2=\"44\" stroke=\"#7aabcf\" stroke-width=\"1.2\"/><text x=\"38\" y=\"36\" text-anchor=\"middle\" font-size=\"13\" fill=\"#7aabcf\" font-weight=\"700\">2</text><text x=\"38\" y=\"60\" text-anchor=\"middle\" font-size=\"13\" fill=\"#7aabcf\" font-weight=\"700\">3</text><text x=\"78\" y=\"48\" text-anchor=\"middle\" font-size=\"14\" fill=\"#c9a060\">+</text><rect x=\"92\" y=\"14\" width=\"60\" height=\"60\" rx=\"6\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1\"/><line x1=\"92\" y1=\"44\" x2=\"152\" y2=\"44\" stroke=\"#c9a060\" stroke-width=\"1.2\"/><text x=\"122\" y=\"36\" text-anchor=\"middle\" font-size=\"13\" fill=\"#c9a060\" font-weight=\"700\">1</text><text x=\"122\" y=\"60\" text-anchor=\"middle\" font-size=\"13\" fill=\"#c9a060\" font-weight=\"700\">4</text><text x=\"162\" y=\"48\" text-anchor=\"middle\" font-size=\"14\" fill=\"#7ab060\">=</text><rect x=\"176\" y=\"14\" width=\"76\" height=\"60\" rx=\"6\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1\"/><line x1=\"176\" y1=\"44\" x2=\"252\" y2=\"44\" stroke=\"#7ab060\" stroke-width=\"1.2\"/><text x=\"214\" y=\"36\" text-anchor=\"middle\" font-size=\"13\" fill=\"#7ab060\" font-weight=\"700\">8 + 3</text><text x=\"214\" y=\"60\" text-anchor=\"middle\" font-size=\"13\" fill=\"#7ab060\" font-weight=\"700\">12</text><text x=\"130\" y=\"92\" text-anchor=\"middle\" font-size=\"9\" fill=\"#8a8a8a\">LCD = 12 → 2/3 = 8/12,  1/4 = 3/12</text></svg>",
    "caption": "Find the common denominator, then add the numerators",
    "steps": [
      "Look at the two denominators. If they match, skip to step 4.",
      "If they differ, find the LCD (least common multiple of the denominators).",
      "Convert each fraction so its bottom equals the LCD — multiply top AND bottom by the same number.",
      "Add (or subtract) the numerators only. Keep the denominator.",
      "Simplify by dividing top and bottom by their greatest common factor."
    ],
    "example": "5/6 − 1/4 = ? LCD of 6 and 4 is 12. 5/6 = 10/12, 1/4 = 3/12. Subtract: 10/12 − 3/12 = 7/12. Already in lowest terms."
  },
  {
    "cat": "Numbers & Operations",
    "tags": ["arithmetic", "beginner", "fractions"],
    "title": "Multiplying & Dividing Fractions",
    "reality": "Half of a half-pizza is a quarter-pizza. Doubling 3/4 cup is 1½ cups. Splitting a 3/4-mile route into 1/8-mile segments is a division problem. These come up daily.",
    "formula": "Multiply:  a/b × c/d = (a·c) / (b·d)\nDivide:    a/b ÷ c/d = a/b × d/c   (flip & multiply)",
    "method": "For division, \"Keep, Change, Flip\": keep the first fraction, change ÷ to ×, flip the second. Cancel common factors BEFORE multiplying to keep numbers small.",
    "svg": "<svg viewBox=\"0 0 260 100\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"14\" y=\"32\" font-size=\"11\" fill=\"#7aabcf\" font-weight=\"700\">×</text><rect x=\"28\" y=\"20\" width=\"48\" height=\"22\" rx=\"5\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1\"/><text x=\"52\" y=\"35\" text-anchor=\"middle\" font-size=\"10\" fill=\"#9ecef0\">2/3 × 4/5</text><text x=\"80\" y=\"33\" font-size=\"10\" fill=\"#7aabcf\">→</text><rect x=\"96\" y=\"20\" width=\"68\" height=\"22\" rx=\"5\" fill=\"rgba(122,176,96,.12)\" stroke=\"#7ab060\" stroke-width=\"1\"/><text x=\"130\" y=\"35\" text-anchor=\"middle\" font-size=\"10\" fill=\"#a0c888\" font-weight=\"700\">(2·4)/(3·5)</text><text x=\"170\" y=\"33\" font-size=\"10\" fill=\"#7ab060\">=</text><rect x=\"184\" y=\"20\" width=\"48\" height=\"22\" rx=\"5\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"1\"/><text x=\"208\" y=\"35\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7ab060\" font-weight=\"700\">8/15</text><text x=\"14\" y=\"74\" font-size=\"11\" fill=\"#c9a060\" font-weight=\"700\">÷</text><rect x=\"28\" y=\"62\" width=\"48\" height=\"22\" rx=\"5\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1\"/><text x=\"52\" y=\"77\" text-anchor=\"middle\" font-size=\"10\" fill=\"#d4b87a\">3/4 ÷ 1/2</text><text x=\"80\" y=\"75\" font-size=\"10\" fill=\"#c9a060\">→</text><rect x=\"96\" y=\"62\" width=\"68\" height=\"22\" rx=\"5\" fill=\"rgba(201,160,96,.18)\" stroke=\"#c9a060\" stroke-width=\"1\"/><text x=\"130\" y=\"77\" text-anchor=\"middle\" font-size=\"10\" fill=\"#d4b87a\" font-weight=\"700\">3/4 × 2/1</text><text x=\"170\" y=\"75\" font-size=\"10\" fill=\"#7ab060\">=</text><rect x=\"184\" y=\"62\" width=\"48\" height=\"22\" rx=\"5\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"1\"/><text x=\"208\" y=\"77\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7ab060\" font-weight=\"700\">6/4 = 3/2</text></svg>",
    "caption": "Multiply straight across; divide = flip & multiply",
    "steps": [
      "For multiplying: multiply the tops together, then the bottoms together.",
      "Look for common factors between any top and any bottom — cancel them BEFORE multiplying.",
      "For dividing: keep the first fraction; change the sign to ×; flip the second fraction (its reciprocal).",
      "Now follow the multiply steps on the rewritten expression.",
      "Simplify the final result if needed."
    ],
    "example": "3/8 ÷ 9/16. Keep-Change-Flip: 3/8 × 16/9. Cancel: 3/9 → 1/3, 16/8 → 2/1. Now: (1·2)/(3·1) = 2/3."
  },
  {
    "cat": "Numbers & Operations",
    "tags": ["arithmetic", "beginner", "percents"],
    "title": "Decimals ↔ Fractions ↔ Percents",
    "reality": "Sale signs say \"25% off\". Test scores say \"0.85\". Recipes say \"1/2\". They're all the same kind of number — the unit just changed. Knowing how to switch between them is essential.",
    "formula": "Decimal → Percent:  ×100  (move decimal 2 right)\nPercent → Decimal:  ÷100  (move decimal 2 left)\nFraction → Decimal: divide top by bottom\nDecimal → Fraction: write over a power of 10, simplify",
    "method": "Memorize 4 anchors: 1/2 = 0.5 = 50%, 1/4 = 0.25 = 25%, 3/4 = 0.75 = 75%, 1/10 = 0.1 = 10%. Most percent problems on tests reduce to one of these.",
    "svg": "<svg viewBox=\"0 0 260 100\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"14\" y=\"20\" width=\"68\" height=\"60\" rx=\"8\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1\"/><text x=\"48\" y=\"38\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7aabcf\" font-weight=\"700\">FRACTION</text><text x=\"48\" y=\"58\" text-anchor=\"middle\" font-size=\"14\" fill=\"#9ecef0\">3/4</text><line x1=\"84\" y1=\"50\" x2=\"98\" y2=\"50\" stroke=\"#c9a060\" stroke-width=\"1.2\"/><polygon points=\"98,50 95,47 95,53\" fill=\"#c9a060\"/><rect x=\"100\" y=\"20\" width=\"68\" height=\"60\" rx=\"8\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1\"/><text x=\"134\" y=\"38\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\" font-weight=\"700\">DECIMAL</text><text x=\"134\" y=\"58\" text-anchor=\"middle\" font-size=\"14\" fill=\"#d4b87a\">0.75</text><line x1=\"170\" y1=\"50\" x2=\"184\" y2=\"50\" stroke=\"#7ab060\" stroke-width=\"1.2\"/><polygon points=\"184,50 181,47 181,53\" fill=\"#7ab060\"/><rect x=\"186\" y=\"20\" width=\"68\" height=\"60\" rx=\"8\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1\"/><text x=\"220\" y=\"38\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">PERCENT</text><text x=\"220\" y=\"58\" text-anchor=\"middle\" font-size=\"14\" fill=\"#a0c888\">75%</text></svg>",
    "caption": "All three are the same number in different clothes",
    "steps": [
      "Decimal → Percent: shift the decimal point two places to the right (or multiply by 100).",
      "Percent → Decimal: shift the decimal point two places to the left (or divide by 100).",
      "Fraction → Decimal: divide the top number by the bottom number using long division.",
      "Decimal → Fraction: write the digits after the decimal over the matching power of 10 (one digit → /10, two digits → /100). Simplify.",
      "To find a percent of a number: convert the percent to a decimal first, then multiply."
    ],
    "example": "What is 35% of 80?  Convert 35% → 0.35.  Multiply: 0.35 × 80 = 28."
  },
  {
    "cat": "Algebra",
    "tags": ["algebra", "beginner"],
    "title": "One-Step & Two-Step Equations",
    "reality": "When you reverse-engineer a phone bill, find the original price after a discount, or figure out how many hours you worked from your paycheck — you're solving a one- or two-step equation.",
    "formula": "Goal: isolate x.\n• Undo addition with subtraction (and vice-versa).\n• Undo multiplication with division (and vice-versa).\n• Whatever you do to one side, do to the other.",
    "method": "Two-step rule: undo addition/subtraction FIRST, then undo multiplication/division. (Reverse order of PEMDAS.) This rule almost never fails.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"130\" y=\"22\" text-anchor=\"middle\" font-size=\"11\" fill=\"#9ecef0\" font-weight=\"700\">3x + 7 = 22</text><line x1=\"50\" y1=\"32\" x2=\"210\" y2=\"32\" stroke=\"#7aabcf\" stroke-width=\"0.5\" stroke-dasharray=\"2,2\"/><text x=\"14\" y=\"50\" font-size=\"10\" fill=\"#c9a060\" font-weight=\"700\">Step 1:</text><text x=\"60\" y=\"50\" font-size=\"10\" fill=\"#d4b87a\">subtract 7 from both sides</text><text x=\"180\" y=\"50\" font-size=\"10\" fill=\"#d4b87a\">→ 3x = 15</text><text x=\"14\" y=\"70\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">Step 2:</text><text x=\"60\" y=\"70\" font-size=\"10\" fill=\"#a0c888\">divide both sides by 3</text><text x=\"180\" y=\"70\" font-size=\"10\" fill=\"#a0c888\">→ x = 5</text><rect x=\"60\" y=\"84\" width=\"140\" height=\"20\" rx=\"5\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"1\"/><text x=\"130\" y=\"98\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7ab060\" font-weight=\"700\">Check: 3(5)+7 = 22 ✓</text></svg>",
    "caption": "Undo +/− first, then undo ×/÷. Always check.",
    "steps": [
      "Identify which operations are being done to x (addition? multiplication? both?).",
      "Undo addition or subtraction first by doing the opposite to BOTH sides.",
      "Then undo multiplication or division by doing the opposite to BOTH sides.",
      "You should now have x = (some number).",
      "CHECK by substituting your answer back into the original equation. Both sides equal? You're done."
    ],
    "example": "Solve 5x − 3 = 17.  Step 1: add 3 to both sides → 5x = 20.  Step 2: divide by 5 → x = 4.  Check: 5(4) − 3 = 17 ✓."
  },
  {
    "cat": "Algebra",
    "tags": ["algebra", "beginner", "geometry"],
    "title": "Slope-Intercept Form  y = mx + b",
    "reality": "Phone plans cost a flat fee (b) plus a per-minute rate (m). Distance during a road trip = starting odometer (b) + speed × time (mx). Slope-intercept lines are how rates show up in the real world.",
    "formula": "y = m x + b\n  m = slope    (rise over run)\n  b = y-intercept   (where the line crosses the y-axis)\nSlope between two points: m = (y₂ − y₁) / (x₂ − x₁)",
    "method": "Plot the y-intercept first (the line's anchor point on the y-axis). From there, use slope as \"rise over run\" — up = positive rise, right = positive run.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"240\" y2=\"100\" stroke=\"#5e5e5e\" stroke-width=\"0.6\"/><line x1=\"40\" y1=\"10\" x2=\"40\" y2=\"110\" stroke=\"#5e5e5e\" stroke-width=\"0.6\"/><text x=\"234\" y=\"113\" font-size=\"9\" fill=\"#8a8a8a\">x</text><text x=\"30\" y=\"14\" font-size=\"9\" fill=\"#8a8a8a\">y</text><line x1=\"20\" y1=\"80\" x2=\"240\" y2=\"20\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/><circle cx=\"40\" cy=\"74\" r=\"3\" fill=\"#c9a060\"/><text x=\"48\" y=\"72\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">b = 2  (y-intercept)</text><line x1=\"100\" y1=\"58\" x2=\"160\" y2=\"58\" stroke=\"#7ab060\" stroke-width=\"0.8\" stroke-dasharray=\"3,2\"/><line x1=\"160\" y1=\"58\" x2=\"160\" y2=\"42\" stroke=\"#7ab060\" stroke-width=\"0.8\" stroke-dasharray=\"3,2\"/><text x=\"124\" y=\"55\" font-size=\"8\" fill=\"#a0c888\">run = 2</text><text x=\"164\" y=\"52\" font-size=\"8\" fill=\"#a0c888\">rise = 1</text><text x=\"174\" y=\"98\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">slope m = 1/2</text></svg>",
    "caption": "Start at b on the y-axis, then climb by m for every step right",
    "steps": [
      "If the equation is not yet in y = mx + b form, solve it for y first.",
      "Identify m (the coefficient on x) and b (the constant alone).",
      "Plot the point (0, b) on the y-axis — this is your starting anchor.",
      "From that anchor, count \"rise\" up and \"run\" right based on m. (Slope of 2 = up 2, right 1. Slope of 3/4 = up 3, right 4.)",
      "Mark the second point and connect with a straight line."
    ],
    "example": "Graph y = 2x − 3. Start at (0, −3). Slope 2 = up 2, right 1, so next point is (1, −1). Connect."
  },
  {
    "cat": "Trigonometry",
    "tags": ["geometry", "beginner", "trigonometry"],
    "title": "SOH-CAH-TOA — Right Triangle Trig",
    "reality": "You see a tall building, walk back 50 ft, look up at a 60° angle — how tall is it? You know one leg of a right triangle and the angle, so trig finds the other leg. SOH-CAH-TOA solves angle-of-elevation, ramp problems, and roof pitches.",
    "formula": "sin θ = Opposite / Hypotenuse\ncos θ = Adjacent / Hypotenuse\ntan θ = Opposite / Adjacent\n\nMnemonic: SOH · CAH · TOA",
    "method": "Step 1: identify which side is opposite the angle, which is adjacent (next to it, NOT the hypotenuse), and which is the hypotenuse (always opposite the right angle). Then pick the ratio that uses the two sides you know/want.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"40,100 200,100 200,30\" fill=\"rgba(122,171,207,.08)\" stroke=\"#7aabcf\" stroke-width=\"1.4\"/><rect x=\"190\" y=\"90\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"0.7\"/><path d=\"M 70,100 A 30,30 0 0,0 60,84\" fill=\"none\" stroke=\"#c9a060\" stroke-width=\"1\"/><text x=\"76\" y=\"92\" font-size=\"10\" fill=\"#c9a060\" font-weight=\"700\">θ</text><text x=\"120\" y=\"113\" text-anchor=\"middle\" font-size=\"10\" fill=\"#9ecef0\">Adjacent</text><text x=\"208\" y=\"68\" font-size=\"10\" fill=\"#a0c888\">Opposite</text><text x=\"100\" y=\"60\" font-size=\"10\" fill=\"#d4b87a\" font-weight=\"700\" transform=\"rotate(-25 100 60)\">Hypotenuse</text><rect x=\"6\" y=\"14\" width=\"48\" height=\"14\" rx=\"3\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"0.5\"/><text x=\"30\" y=\"24\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">SOH</text><rect x=\"6\" y=\"32\" width=\"48\" height=\"14\" rx=\"3\" fill=\"rgba(201,160,96,.18)\" stroke=\"#c9a060\" stroke-width=\"0.5\"/><text x=\"30\" y=\"42\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">CAH</text><rect x=\"6\" y=\"50\" width=\"48\" height=\"14\" rx=\"3\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"0.5\"/><text x=\"30\" y=\"60\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">TOA</text></svg>",
    "caption": "Identify Opposite, Adjacent, Hypotenuse — then pick the ratio",
    "steps": [
      "Find the right angle (the small square). The side opposite to it is the HYPOTENUSE — always the longest.",
      "Locate the angle θ you care about. The side directly across from θ is the OPPOSITE side.",
      "The remaining leg, touching θ but not the hypotenuse, is the ADJACENT side.",
      "Look at which two sides you have or need. SOH if you need O and H. CAH if A and H. TOA if O and A.",
      "Set up the ratio, plug in known values, solve for the unknown using a calculator."
    ],
    "example": "A ramp rises 4 ft over a horizontal run of 10 ft. Find θ. tan θ = O/A = 4/10 = 0.4. θ = arctan(0.4) ≈ 21.8°."
  },
  {
    "cat": "Statistics",
    "tags": ["data", "beginner", "statistics"],
    "title": "Mean, Median, & Mode — The Three Averages",
    "reality": "Your \"average grade\" (mean), the \"middle income\" of a town (median), and the \"most popular shoe size\" (mode) are three different ways to describe a typical value. Each tells a different story.",
    "formula": "Mean   = (sum of all values) ÷ (count)\nMedian = middle value once sorted\n         (with even count: mean of the two middle values)\nMode   = the value that appears most often\nRange  = max − min",
    "method": "Outliers (extreme values) drag the mean but barely move the median. Use median when data is skewed (incomes, house prices). Use mean when data is symmetric (test scores).",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"14\" y=\"20\" font-size=\"10\" fill=\"#9ecef0\" font-weight=\"700\">Data: 4, 7, 7, 9, 13</text><rect x=\"14\" y=\"32\" width=\"74\" height=\"22\" rx=\"5\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1\"/><text x=\"51\" y=\"46\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7aabcf\" font-weight=\"700\">MEAN = 8</text><rect x=\"92\" y=\"32\" width=\"74\" height=\"22\" rx=\"5\" fill=\"rgba(201,160,96,.18)\" stroke=\"#c9a060\" stroke-width=\"1\"/><text x=\"129\" y=\"46\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\" font-weight=\"700\">MEDIAN = 7</text><rect x=\"170\" y=\"32\" width=\"74\" height=\"22\" rx=\"5\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"1\"/><text x=\"207\" y=\"46\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">MODE = 7</text><text x=\"14\" y=\"74\" font-size=\"9\" fill=\"#7aabcf\">sum 40 ÷ count 5</text><text x=\"92\" y=\"74\" font-size=\"9\" fill=\"#c9a060\">middle of 5 values</text><text x=\"170\" y=\"74\" font-size=\"9\" fill=\"#7ab060\">7 appears twice</text><text x=\"14\" y=\"100\" font-size=\"9\" fill=\"#8a8a8a\">Range = 13 − 4 = 9   (spread of the data)</text></svg>",
    "caption": "Mean: the balance point. Median: the middle. Mode: the most common.",
    "steps": [
      "SORT the data from smallest to largest. (Always step 1.)",
      "MEAN: add every value, then divide by how many there are.",
      "MEDIAN: pick the middle value. If there are two middle values, take their average.",
      "MODE: count how many times each value appears; the most frequent is the mode. (Data can have no mode, one mode, or multiple modes.)",
      "RANGE: subtract the smallest from the largest."
    ],
    "example": "Data: 3, 6, 6, 7, 10, 12. Mean = (3+6+6+7+10+12)/6 = 44/6 ≈ 7.33. Median = (6+7)/2 = 6.5. Mode = 6."
  },
  {
    "cat": "Statistics",
    "tags": ["data", "beginner", "probability"],
    "title": "Probability Basics — Counting Possibilities",
    "reality": "Will it rain? What's the chance of drawing an ace? Should you take this insurance? Probability is the math of \"how often\" — it tells you what to expect over many tries.",
    "formula": "P(event) = (favorable outcomes) / (total possible outcomes)\n0 ≤ P ≤ 1\nP(A and B independent) = P(A) × P(B)\nP(A or B disjoint)     = P(A) + P(B)\nP(not A) = 1 − P(A)",
    "method": "List the sample space (all possible outcomes), then count which ones match the event. For \"and\" with independent events, multiply. For \"or\" with disjoint events, add. Always check 0 ≤ P ≤ 1.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"14\" y=\"14\" width=\"232\" height=\"40\" rx=\"6\" fill=\"rgba(122,171,207,.08)\" stroke=\"#7aabcf\" stroke-width=\"0.7\"/><text x=\"22\" y=\"28\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">Sample space (single die):</text><g font-family=\"ui-monospace,monospace\"><rect x=\"22\" y=\"32\" width=\"20\" height=\"20\" fill=\"rgba(255,255,255,.06)\" stroke=\"#7aabcf\" stroke-width=\"0.6\"/><text x=\"32\" y=\"46\" text-anchor=\"middle\" font-size=\"11\" fill=\"#9ecef0\">1</text><rect x=\"46\" y=\"32\" width=\"20\" height=\"20\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"0.7\"/><text x=\"56\" y=\"46\" text-anchor=\"middle\" font-size=\"11\" fill=\"#a0c888\">2</text><rect x=\"70\" y=\"32\" width=\"20\" height=\"20\" fill=\"rgba(255,255,255,.06)\" stroke=\"#7aabcf\" stroke-width=\"0.6\"/><text x=\"80\" y=\"46\" text-anchor=\"middle\" font-size=\"11\" fill=\"#9ecef0\">3</text><rect x=\"94\" y=\"32\" width=\"20\" height=\"20\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"0.7\"/><text x=\"104\" y=\"46\" text-anchor=\"middle\" font-size=\"11\" fill=\"#a0c888\">4</text><rect x=\"118\" y=\"32\" width=\"20\" height=\"20\" fill=\"rgba(255,255,255,.06)\" stroke=\"#7aabcf\" stroke-width=\"0.6\"/><text x=\"128\" y=\"46\" text-anchor=\"middle\" font-size=\"11\" fill=\"#9ecef0\">5</text><rect x=\"142\" y=\"32\" width=\"20\" height=\"20\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"0.7\"/><text x=\"152\" y=\"46\" text-anchor=\"middle\" font-size=\"11\" fill=\"#a0c888\">6</text></g><text x=\"178\" y=\"46\" font-size=\"10\" fill=\"#a0c888\" font-weight=\"700\">3 evens of 6</text><rect x=\"14\" y=\"68\" width=\"232\" height=\"32\" rx=\"6\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/><text x=\"130\" y=\"88\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7ab060\" font-weight=\"700\">P(even) = 3/6 = 1/2 = 0.5 = 50%</text></svg>",
    "caption": "Favorable ÷ Total. Probability is always between 0 and 1.",
    "steps": [
      "List the SAMPLE SPACE — every possible outcome. Make sure each is equally likely.",
      "COUNT how many of those outcomes match the event you care about (favorable).",
      "DIVIDE: P = favorable / total.",
      "For \"and\" with INDEPENDENT events (one doesn't affect the other), multiply: P(A) × P(B).",
      "For \"or\" with DISJOINT events (cannot both happen), add: P(A) + P(B). Sanity-check: never above 1."
    ],
    "example": "Two coins flipped. P(both heads)? Each flip is independent. P(H) = 1/2 each. P(HH) = 1/2 × 1/2 = 1/4."
  },
  {
    "cat": "Numbers & Operations",
    "tags": ["arithmetic", "beginner"],
    "title": "GCF & LCM — Greatest Common Factor, Least Common Multiple",
    "reality": "GCF tells you how to simplify a fraction. LCM tells you when two events line up — like when two buses, one running every 12 min and one every 20 min, will arrive at the same stop together.",
    "formula": "GCF (greatest common factor): the largest number that divides BOTH evenly\nLCM (least common multiple): the smallest number that BOTH divide into evenly\n\nUseful identity: GCF(a,b) × LCM(a,b) = a × b",
    "method": "Prime-factor method works for everything: factor each number into primes, then GCF = product of shared primes (lowest power), LCM = product of all primes (highest power).",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"14\" y=\"20\" font-size=\"10\" fill=\"#9ecef0\" font-weight=\"700\">12 = 2 × 2 × 3</text><text x=\"14\" y=\"36\" font-size=\"10\" fill=\"#9ecef0\" font-weight=\"700\">18 = 2 × 3 × 3</text><rect x=\"14\" y=\"46\" width=\"110\" height=\"22\" rx=\"5\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1\"/><text x=\"69\" y=\"60\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7aabcf\" font-weight=\"700\">GCF = 2 × 3 = 6</text><rect x=\"130\" y=\"46\" width=\"116\" height=\"22\" rx=\"5\" fill=\"rgba(201,160,96,.18)\" stroke=\"#c9a060\" stroke-width=\"1\"/><text x=\"188\" y=\"60\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\" font-weight=\"700\">LCM = 2² × 3² = 36</text><text x=\"14\" y=\"84\" font-size=\"9\" fill=\"#7aabcf\">Shared primes (lowest power)</text><text x=\"130\" y=\"84\" font-size=\"9\" fill=\"#c9a060\">All primes (highest power)</text><text x=\"14\" y=\"100\" font-size=\"9\" fill=\"#7ab060\">Check: 6 × 36 = 216 = 12 × 18 ✓</text></svg>",
    "caption": "GCF: shared primes only. LCM: all primes, highest power.",
    "steps": [
      "Break each number into its PRIME FACTORS. (12 = 2 × 2 × 3, etc.)",
      "For GCF: write down ONLY the primes that appear in BOTH lists, using the LOWEST power they appear in.",
      "For LCM: write down EVERY prime that appears in EITHER list, using the HIGHEST power.",
      "Multiply your selected primes to get the answer.",
      "Optional check: GCF × LCM should equal the product of the two original numbers."
    ],
    "example": "GCF and LCM of 8 and 12. 8 = 2³, 12 = 2² × 3. GCF = 2² = 4. LCM = 2³ × 3 = 24. Check: 4 × 24 = 96 = 8 × 12 ✓."
  },
  {
    "cat": "Algebra",
    "tags": ["arithmetic", "beginner", "algebra", "accuplacer"],
    "title": "Ratios, Rates & Proportions",
    "reality": "A recipe says \"3 cups flour for every 2 eggs.\" Gas mileage is \"miles per gallon.\" Map scales say \"1 inch = 50 miles.\" All of these are ratios or rates. Proportions let you scale them up or down without changing the relationship.",
    "formula": "Ratio:        a : b   or   a/b\nRate:         a units per b units (one quantity per other)\nProportion:   a/b = c/d   →   cross-multiply: a·d = b·c\nUnit rate:    rate with denominator = 1",
    "method": "Cross-multiplication shortcut: any proportion a/b = c/d becomes a·d = b·c. To find a unit rate, divide so the bottom becomes 1.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"14\" y=\"20\" font-size=\"11\" fill=\"#9ecef0\" font-weight=\"700\">3 cups flour : 2 eggs   →   ? cups : 8 eggs</text><rect x=\"14\" y=\"30\" width=\"100\" height=\"30\" rx=\"6\" fill=\"rgba(122,171,207,.12)\" stroke=\"#7aabcf\" stroke-width=\"0.8\"/><text x=\"64\" y=\"42\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7aabcf\">3</text><line x1=\"32\" y1=\"46\" x2=\"96\" y2=\"46\" stroke=\"#7aabcf\" stroke-width=\"0.8\"/><text x=\"64\" y=\"56\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7aabcf\">2</text><text x=\"120\" y=\"48\" font-size=\"14\" fill=\"#c9a060\">=</text><rect x=\"138\" y=\"30\" width=\"100\" height=\"30\" rx=\"6\" fill=\"rgba(201,160,96,.14)\" stroke=\"#c9a060\" stroke-width=\"0.8\"/><text x=\"188\" y=\"42\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\">x</text><line x1=\"156\" y1=\"46\" x2=\"220\" y2=\"46\" stroke=\"#c9a060\" stroke-width=\"0.8\"/><text x=\"188\" y=\"56\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\">8</text><text x=\"14\" y=\"78\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">Cross-multiply: 3·8 = 2·x</text><text x=\"14\" y=\"92\" font-size=\"10\" fill=\"#7ab060\">→ 24 = 2x  →  x = 12 cups</text><text x=\"170\" y=\"92\" font-size=\"9\" fill=\"#8a8a8a\">scale factor 4</text></svg>",
    "caption": "Set up the ratio, then cross-multiply",
    "steps": [
      "Write the ratio as a fraction with the same units in matching positions (top vs. top, bottom vs. bottom).",
      "Set up the proportion: known ratio = unknown ratio.",
      "Cross-multiply: top of left × bottom of right equals bottom of left × top of right.",
      "Solve the resulting one-step equation for the unknown.",
      "Sanity-check: did the units line up? Is the answer in the right ballpark?"
    ],
    "example": "A car drives 180 miles on 6 gallons. How far on 10 gallons? 180/6 = x/10. Cross: 180·10 = 6·x → 1800 = 6x → x = 300 miles."
  },
  {
    "cat": "Algebra",
    "tags": ["algebra", "beginner", "accuplacer"],
    "title": "Linear Inequalities",
    "reality": "\"You must be at least 65 inches tall to ride.\" \"Spend less than $50.\" \"Earn more than 80% to pass.\" All of these are inequalities — math statements about ranges, not single answers.",
    "formula": "Solve the same way as equations EXCEPT:\n  When you multiply or divide by a NEGATIVE number, FLIP the inequality sign.\n\n<  : less than           ≤ : less than or equal\n>  : greater than        ≥ : greater than or equal",
    "method": "Treat it like an equation step-by-step, but the moment you multiply or divide both sides by a negative, flip < to > (or ≤ to ≥). Check by plugging a number from your answer set into the original.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"14\" y=\"22\" font-size=\"11\" fill=\"#9ecef0\" font-weight=\"700\">−2x + 5 &lt; 11</text><text x=\"14\" y=\"40\" font-size=\"9\" fill=\"#c9a060\">Step 1: subtract 5 →  −2x &lt; 6</text><text x=\"14\" y=\"56\" font-size=\"9\" fill=\"#c07070\" font-weight=\"700\">Step 2: divide by −2 → FLIP the sign:  x &gt; −3</text><line x1=\"20\" y1=\"86\" x2=\"240\" y2=\"86\" stroke=\"#5e5e5e\" stroke-width=\"0.6\"/><line x1=\"100\" y1=\"83\" x2=\"100\" y2=\"89\" stroke=\"#5e5e5e\" stroke-width=\"0.6\"/><text x=\"100\" y=\"103\" text-anchor=\"middle\" font-size=\"9\" fill=\"#8a8a8a\">−3</text><circle cx=\"100\" cy=\"86\" r=\"3\" fill=\"none\" stroke=\"#7ab060\" stroke-width=\"1.2\"/><line x1=\"103\" y1=\"86\" x2=\"240\" y2=\"86\" stroke=\"#7ab060\" stroke-width=\"1.6\"/><polygon points=\"240,86 234,82 234,90\" fill=\"#7ab060\"/><text x=\"170\" y=\"80\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">all x &gt; −3</text></svg>",
    "caption": "Open circle for &lt;/&gt;; closed for ≤/≥. Flip when multiplying by negative.",
    "steps": [
      "Treat the inequality like an equation. Move terms with x to one side, numbers to the other.",
      "Combine like terms.",
      "Isolate x. CAUTION: if you must multiply or divide by a negative number, flip the inequality sign.",
      "Graph on a number line: open circle for < or >, filled circle for ≤ or ≥. Shade the side that includes the solutions.",
      "Check: pick any number in your shaded region; it should make the original inequality true."
    ],
    "example": "Solve 3x − 7 ≥ 5. Add 7: 3x ≥ 12. Divide by 3 (positive — no flip): x ≥ 4. Closed circle at 4, shade right."
  },
  {
    "cat": "Algebra",
    "tags": ["algebra", "beginner", "accuplacer", "aaf"],
    "title": "Functions: Notation, Evaluation & Transformations",
    "reality": "A function is a machine: feed it an input, it returns a single output. Cost as a function of items bought, distance as a function of time — they're everywhere. f(x) is just shorthand for \"the rule named f, applied to input x.\"",
    "formula": "Notation:        f(x) = (rule using x)\nEvaluate:        f(a) = (replace every x with a)\nDomain:          allowed inputs\nRange:           possible outputs\nTransformations of y = f(x):\n  f(x) + k  → shift UP k\n  f(x − h)  → shift RIGHT h\n  −f(x)     → flip over x-axis\n  a·f(x)    → vertical stretch by factor a",
    "method": "Evaluation tip: wrap parentheses around what you substitute. f(x) = x² − 3 then f(−2) = (−2)² − 3 = 4 − 3 = 1. The parentheses prevent sign mistakes.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"36\" width=\"42\" height=\"40\" rx=\"6\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1\"/><text x=\"41\" y=\"52\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">INPUT</text><text x=\"41\" y=\"66\" text-anchor=\"middle\" font-size=\"11\" fill=\"#9ecef0\">x = 4</text><line x1=\"64\" y1=\"56\" x2=\"100\" y2=\"56\" stroke=\"#c9a060\" stroke-width=\"1.2\" marker-end=\"url(#fnar1)\"/><defs><marker id=\"fnar1\" markerWidth=\"6\" markerHeight=\"6\" refX=\"5\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#c9a060\"/></marker></defs><rect x=\"100\" y=\"32\" width=\"68\" height=\"48\" rx=\"8\" fill=\"rgba(201,160,96,.18)\" stroke=\"#c9a060\" stroke-width=\"1.2\"/><text x=\"134\" y=\"50\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\" font-weight=\"700\">f(x) = x² − 3</text><text x=\"134\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#d4b87a\">(the machine)</text><line x1=\"170\" y1=\"56\" x2=\"206\" y2=\"56\" stroke=\"#7ab060\" stroke-width=\"1.2\" marker-end=\"url(#fnar2)\"/><defs><marker id=\"fnar2\" markerWidth=\"6\" markerHeight=\"6\" refX=\"5\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7ab060\"/></marker></defs><rect x=\"206\" y=\"36\" width=\"44\" height=\"40\" rx=\"6\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"1\"/><text x=\"228\" y=\"52\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">OUTPUT</text><text x=\"228\" y=\"66\" text-anchor=\"middle\" font-size=\"11\" fill=\"#a0c888\">f(4) = 13</text><text x=\"130\" y=\"100\" text-anchor=\"middle\" font-size=\"8\" fill=\"#8a8a8a\">Substitute, square, subtract: 4²−3 = 16−3 = 13</text></svg>",
    "caption": "A function is an input-output machine. f(a) = \"plug a in for x.\"",
    "steps": [
      "Identify the rule: f(x) = (something with x).",
      "To evaluate f(a), wrap a in parentheses and replace EVERY x.",
      "Simplify using order of operations.",
      "For transformations: numbers added OUTSIDE move the graph vertically, INSIDE shift it horizontally (in the OPPOSITE direction).",
      "Domain: list any x-values that break the rule (division by zero, negative under a square root, etc.) and exclude them."
    ],
    "example": "g(x) = 3x + 1. Find g(−2). Wrap: g(−2) = 3(−2) + 1 = −6 + 1 = −5."
  },
  {
    "cat": "Algebra",
    "tags": ["algebra", "beginner", "accuplacer", "aaf"],
    "title": "Polynomial Equations — Factor & Solve",
    "reality": "Trajectories of thrown objects, profit-maximization curves, and area problems all give you polynomial equations. Setting one equal to zero and factoring is how you find where the curve crosses the x-axis — the answer to \"when?\" or \"for what input?\"",
    "formula": "Quadratic standard form:  ax² + bx + c = 0\nFactor patterns:\n  Difference of squares:  a² − b² = (a−b)(a+b)\n  Perfect square:         a² ± 2ab + b² = (a ± b)²\n  Common monomial:        ax² + bx = x(ax + b)\nZero-product property: if A·B = 0 then A = 0 or B = 0",
    "method": "Factoring decision tree: (1) GCF first — pull out anything common. (2) Try difference-of-squares pattern. (3) Try the AC method or \"two numbers that multiply to ac and add to b\". (4) If nothing works, use the quadratic formula.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"14\" y=\"22\" font-size=\"11\" fill=\"#9ecef0\" font-weight=\"700\">x² − 5x + 6 = 0</text><text x=\"14\" y=\"40\" font-size=\"9\" fill=\"#c9a060\">Find two numbers: multiply to 6, add to −5</text><text x=\"14\" y=\"56\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">→ −2 and −3   ✓ ((−2)(−3)=6, −2+−3=−5)</text><text x=\"14\" y=\"72\" font-size=\"9\" fill=\"#7aabcf\">Factor:  (x − 2)(x − 3) = 0</text><text x=\"14\" y=\"88\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">Zero-product: x − 2 = 0   OR   x − 3 = 0</text><rect x=\"60\" y=\"96\" width=\"60\" height=\"20\" rx=\"4\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/><text x=\"90\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7ab060\" font-weight=\"700\">x = 2</text><rect x=\"140\" y=\"96\" width=\"60\" height=\"20\" rx=\"4\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/><text x=\"170\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7ab060\" font-weight=\"700\">x = 3</text></svg>",
    "caption": "Factor → use zero-product rule → split into smaller equations",
    "steps": [
      "Set the equation equal to zero (move everything to one side).",
      "Pull out any GREATEST COMMON FACTOR first.",
      "For ax² + bx + c: find two numbers that multiply to a·c and add to b.",
      "Rewrite using those numbers and factor by grouping; or use the quadratic formula x = (−b ± √(b²−4ac)) / (2a).",
      "Apply the zero-product property: set each factor equal to zero, solve, and list both roots."
    ],
    "example": "Solve x² + 2x − 8 = 0. Two numbers: ×−8, +2 → +4 and −2. Factor (x+4)(x−2)=0. Roots: x = −4 or x = 2."
  },
  {
    "cat": "Algebra",
    "tags": ["algebra", "accuplacer", "aaf"],
    "title": "Rational Equations — Equations with Fractions",
    "reality": "Work-rate problems (\"two pumps fill a tank in...\") and average-speed problems (\"part of trip at one speed, part at another...\") give you rational equations: equations with variables in denominators. Clear the fractions to make life easy.",
    "formula": "Multiply BOTH SIDES by the LCD (least common denominator), then solve as usual.\n\nALWAYS check for excluded values: any x that makes a denominator zero is forbidden.",
    "method": "Step 1: factor every denominator. Step 2: find LCD. Step 3: multiply both sides of the equation by the LCD — this cancels all fractions. Step 4: solve the resulting equation. Step 5: discard any answer that makes an original denominator zero (extraneous).",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"14\" y=\"22\" font-size=\"11\" fill=\"#9ecef0\" font-weight=\"700\">2/x + 1/3 = 5/6</text><text x=\"14\" y=\"40\" font-size=\"9\" fill=\"#c9a060\">LCD of x, 3, 6 is 6x</text><text x=\"14\" y=\"56\" font-size=\"9\" fill=\"#c9a060\">Multiply each term by 6x:</text><text x=\"14\" y=\"70\" font-size=\"9\" fill=\"#7aabcf\">12 + 2x = 5x</text><text x=\"14\" y=\"86\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">3x = 12  →  x = 4</text><text x=\"14\" y=\"102\" font-size=\"8\" fill=\"#8a8a8a\">Check x ≠ 0 (denominator). 4 is allowed ✓</text></svg>",
    "caption": "Clear the fractions with the LCD, then check for excluded x",
    "steps": [
      "Factor every denominator if it is not already a single number or single variable.",
      "Find the LCD of all denominators.",
      "Multiply BOTH sides of the equation, term by term, by the LCD. Cancel.",
      "Solve the resulting non-fraction equation.",
      "CHECK: substitute your answer into the ORIGINAL equation and reject any value that makes a denominator zero."
    ],
    "example": "Solve 1/(x+2) = 3/x. Cross-multiply: x = 3(x+2) → x = 3x+6 → −2x = 6 → x = −3. Check: x = −3 makes neither denom zero. ✓"
  },
  {
    "cat": "Algebra",
    "tags": ["algebra", "accuplacer", "aaf"],
    "title": "Radical Equations — Equations with Square Roots",
    "reality": "Pendulum period, free-fall time, and pythagorean distance problems all give you radical equations. The trick is that you must square both sides — but squaring can create fake answers, so you must check every solution.",
    "formula": "To clear a square root: ISOLATE the radical, then SQUARE both sides.\n\nIf there are TWO radicals: isolate one, square, simplify, isolate the other, square again.\n\nALWAYS check: squaring can introduce extraneous solutions.",
    "method": "Why check? Squaring both sides treats both +√ and −√ the same, so a \"solution\" might satisfy the squared equation but not the original. Plug every candidate back in.",
    "svg": "<svg viewBox=\"0 0 260 100\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"14\" y=\"20\" font-size=\"11\" fill=\"#9ecef0\" font-weight=\"700\">√(x + 7) = 3</text><text x=\"14\" y=\"38\" font-size=\"9\" fill=\"#c9a060\">Square both sides:  x + 7 = 9</text><text x=\"14\" y=\"54\" font-size=\"9\" fill=\"#7aabcf\">Solve:  x = 2</text><text x=\"14\" y=\"72\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">Check: √(2+7) = √9 = 3 ✓</text><rect x=\"14\" y=\"80\" width=\"232\" height=\"16\" rx=\"4\" fill=\"rgba(192,112,112,.10)\" stroke=\"#c07070\" stroke-width=\"0.7\"/><text x=\"130\" y=\"92\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c07070\" font-weight=\"700\">Always check — squaring can create fake answers!</text></svg>",
    "caption": "Isolate the root, square, solve, and CHECK every answer",
    "steps": [
      "Move every non-radical term to the OTHER side so the radical is alone.",
      "Square both sides of the equation. (For cube roots, cube both sides.)",
      "Simplify and solve the resulting equation. It may be linear or quadratic.",
      "For two radicals: after first square, isolate the remaining radical and square again.",
      "Substitute every candidate solution back into the ORIGINAL equation. Discard any that don't work."
    ],
    "example": "Solve √(2x + 3) = 5. Square: 2x + 3 = 25 → 2x = 22 → x = 11. Check: √(22+3)=√25=5. ✓"
  },
  {
    "cat": "Algebra",
    "tags": ["algebra", "accuplacer", "aaf"],
    "title": "Exponential & Logarithmic Equations",
    "reality": "Population growth, radioactive decay, compound interest, and earthquake magnitudes (Richter scale) all use exponential or logarithmic equations. Whenever something grows or shrinks by the same RATIO each step, exponentials describe it.",
    "formula": "Exponential: bˣ = bʸ  ⇒  x = y    (same base = same exponent)\n\nKey fact: log_b(x) and bˣ are INVERSES.\n  • To solve bˣ = c, take log of both sides.\n  • To solve log_b(x) = c, exponentiate: x = bᶜ.\n\nLog rules:\n  log(ab) = log a + log b\n  log(a/b) = log a − log b\n  log(aⁿ) = n · log a",
    "method": "Quick decision: equation has a variable as an EXPONENT? Take a log. Equation has a variable INSIDE a log? Exponentiate (raise the base to both sides).",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"14\" y=\"14\" width=\"116\" height=\"40\" rx=\"6\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"0.8\"/><text x=\"72\" y=\"30\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">EXPONENTIAL</text><text x=\"72\" y=\"46\" text-anchor=\"middle\" font-size=\"10\" fill=\"#9ecef0\">2ˣ = 32</text><rect x=\"138\" y=\"14\" width=\"108\" height=\"40\" rx=\"6\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"0.8\"/><text x=\"192\" y=\"30\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">LOGARITHMIC</text><text x=\"192\" y=\"46\" text-anchor=\"middle\" font-size=\"10\" fill=\"#d4b87a\">log₂(x) = 5</text><text x=\"14\" y=\"72\" font-size=\"9\" fill=\"#7aabcf\">Same base: 2ˣ = 2⁵ → x = 5</text><text x=\"138\" y=\"72\" font-size=\"9\" fill=\"#c9a060\">Exponentiate: x = 2⁵ = 32</text><rect x=\"14\" y=\"84\" width=\"232\" height=\"22\" rx=\"6\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/><text x=\"130\" y=\"98\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">Logs and exponents undo each other.</text></svg>",
    "caption": "Variable in exponent → log it. Variable in log → exponentiate.",
    "steps": [
      "Identify the form: is the variable an EXPONENT or INSIDE a log?",
      "For exponentials: rewrite both sides with the same base if possible. If equal bases, equal exponents — solve.",
      "If bases can't be matched: take log of both sides, then use log(aⁿ) = n·log(a) to bring the variable down.",
      "For logarithmic equations: combine logs into a single log first (using product/quotient rules), then exponentiate.",
      "Check the domain: any answer making the inside of a log ≤ 0 must be discarded."
    ],
    "example": "Solve 5ˣ = 125. Same base trick: 125 = 5³, so 5ˣ = 5³ → x = 3."
  },
  {
    "cat": "Statistics",
    "tags": ["probability", "accuplacer", "beginner"],
    "title": "Sets, Venn Diagrams & Set Notation",
    "reality": "When 60 students like math and 40 like science and 25 like both, how many like neither? Set theory is how we organize and count overlapping groups — used in surveys, databases, polling, and probability.",
    "formula": "A ∪ B = \"A union B\" = elements in A OR B (or both)\nA ∩ B = \"A intersection B\" = elements in BOTH A AND B\nA' or Aᶜ = complement of A = NOT in A\n|A| = number of elements in A\n\nInclusion–exclusion:\n  |A ∪ B| = |A| + |B| − |A ∩ B|",
    "method": "Draw it! For two-set problems, sketch two overlapping circles. Fill in the overlap first, then the rest, then the outside. Counting becomes obvious.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"14\" y=\"10\" width=\"232\" height=\"90\" rx=\"8\" fill=\"none\" stroke=\"#5e5e5e\" stroke-width=\"0.6\" stroke-dasharray=\"2,2\"/><text x=\"226\" y=\"22\" text-anchor=\"end\" font-size=\"9\" fill=\"#8a8a8a\">Universe U</text><circle cx=\"100\" cy=\"58\" r=\"34\" fill=\"rgba(122,171,207,.20)\" stroke=\"#7aabcf\" stroke-width=\"1\"/><circle cx=\"160\" cy=\"58\" r=\"34\" fill=\"rgba(201,160,96,.20)\" stroke=\"#c9a060\" stroke-width=\"1\"/><text x=\"80\" y=\"62\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7aabcf\" font-weight=\"700\">A only</text><text x=\"80\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#9ecef0\">35</text><text x=\"180\" y=\"62\" text-anchor=\"middle\" font-size=\"11\" fill=\"#c9a060\" font-weight=\"700\">B only</text><text x=\"180\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#d4b87a\">15</text><text x=\"130\" y=\"62\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">A∩B</text><text x=\"130\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#a0c888\">25</text><text x=\"220\" y=\"92\" text-anchor=\"end\" font-size=\"9\" fill=\"#8a8a8a\">outside both: 5</text></svg>",
    "caption": "Two circles, three regions. Fill the overlap first.",
    "steps": [
      "List the universe (everyone you're counting) and label each set.",
      "Place the count of A ∩ B (the overlap) FIRST in the center region.",
      "For \"A only\", subtract the overlap from |A|. Same for \"B only\".",
      "The complement (outside both) = |U| − everything inside either circle.",
      "Read counts directly off the diagram. For probability: divide each region by |U|."
    ],
    "example": "In a class of 80: 50 take Math (A), 35 take Science (B), 25 take both. |A∪B| = 50 + 35 − 25 = 60. So 80 − 60 = 20 take neither."
  },
  {
    "cat": "Reading",
    "tags": ["reading", "accuplacer", "beginner"],
    "title": "Reading: Finding the Main Idea",
    "reality": "Every email, article, and instruction page has ONE central point — the main idea. Find it and you've \"got\" the passage. Miss it and even all the details won't help you answer the question.",
    "formula": "Main idea = WHAT the passage is mostly about\nDifferent from a TOPIC (one phrase) and a DETAIL (one fact)\n\nLook for:\n  • Repeated words or themes\n  • A sentence that summarizes the rest (often first or last)\n  • The umbrella claim that all other sentences support",
    "method": "Test each answer choice with the \"umbrella test\": does this answer COVER everything in the passage, or does it only cover one detail? The right answer covers the whole umbrella.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"14\" y=\"14\" width=\"232\" height=\"20\" rx=\"6\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1\"/><text x=\"130\" y=\"28\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7aabcf\" font-weight=\"700\">MAIN IDEA — the umbrella claim</text><line x1=\"60\" y1=\"36\" x2=\"60\" y2=\"46\" stroke=\"#7aabcf\" stroke-width=\"0.6\"/><line x1=\"130\" y1=\"36\" x2=\"130\" y2=\"46\" stroke=\"#7aabcf\" stroke-width=\"0.6\"/><line x1=\"200\" y1=\"36\" x2=\"200\" y2=\"46\" stroke=\"#7aabcf\" stroke-width=\"0.6\"/><rect x=\"20\" y=\"48\" width=\"80\" height=\"18\" rx=\"4\" fill=\"rgba(201,160,96,.14)\" stroke=\"#c9a060\" stroke-width=\"0.7\"/><text x=\"60\" y=\"60\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\">Detail 1</text><rect x=\"100\" y=\"48\" width=\"60\" height=\"18\" rx=\"4\" fill=\"rgba(201,160,96,.14)\" stroke=\"#c9a060\" stroke-width=\"0.7\"/><text x=\"130\" y=\"60\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\">Detail 2</text><rect x=\"160\" y=\"48\" width=\"80\" height=\"18\" rx=\"4\" fill=\"rgba(201,160,96,.14)\" stroke=\"#c9a060\" stroke-width=\"0.7\"/><text x=\"200\" y=\"60\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\">Detail 3</text><rect x=\"14\" y=\"76\" width=\"232\" height=\"26\" rx=\"6\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/><text x=\"130\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">UMBRELLA TEST</text><text x=\"130\" y=\"100\" text-anchor=\"middle\" font-size=\"9\" fill=\"#a0c888\">Does the answer cover ALL details, or just one?</text></svg>",
    "caption": "The main idea is the umbrella under which all the details fit",
    "steps": [
      "Read the whole passage once — fast, just to get the gist.",
      "Ask yourself: \"What is this passage mostly about?\" Try answering in your own words in one sentence.",
      "Look at the FIRST and LAST sentences. They often state the main idea explicitly.",
      "Now check the answers. Reject any that focus on only one detail. Reject any too broad to fit the passage.",
      "The remaining choice should be the umbrella — broad enough to cover the whole passage, narrow enough to be specific."
    ],
    "example": "Passage: \"Bees pollinate crops worth $15B/year. They also produce honey and beeswax. Saving bees protects food supply.\" Main idea: \"Bees provide significant economic and agricultural value\" — covers all three details. Wrong: \"Bees produce honey\" (one detail only)."
  },
  {
    "cat": "Reading",
    "tags": ["reading", "accuplacer", "beginner"],
    "title": "Reading: Drawing Inferences",
    "reality": "Inferences are educated guesses based on text clues — like a detective. Authors don't always say things directly; sometimes they imply. \"She slammed the door\" → you infer she's angry, even though \"angry\" isn't in the sentence.",
    "formula": "Inference = Text Evidence + Reasoning\n\nNOT a guess. NOT outside knowledge.\nMUST be supported by SOMETHING in the passage.",
    "method": "The \"two-finger\" test: point at the answer, then point at the line in the passage that proves it. If you can't point to evidence, it's not the right inference. The right answer follows DIRECTLY from clues you can locate.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"14\" y=\"14\" width=\"100\" height=\"80\" rx=\"8\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1\"/><text x=\"64\" y=\"28\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">CLUES (in text)</text><text x=\"64\" y=\"44\" text-anchor=\"middle\" font-size=\"8\" fill=\"#9ecef0\">\"checked sky\"</text><text x=\"64\" y=\"58\" text-anchor=\"middle\" font-size=\"8\" fill=\"#9ecef0\">\"packed umbrella\"</text><text x=\"64\" y=\"72\" text-anchor=\"middle\" font-size=\"8\" fill=\"#9ecef0\">\"basket inside\"</text><text x=\"118\" y=\"58\" font-size=\"14\" fill=\"#c9a060\">→</text><rect x=\"138\" y=\"14\" width=\"108\" height=\"80\" rx=\"8\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1\"/><text x=\"192\" y=\"28\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">INFERENCE</text><text x=\"192\" y=\"50\" text-anchor=\"middle\" font-size=\"11\" fill=\"#a0c888\" font-weight=\"700\">\"She expects rain\"</text><text x=\"192\" y=\"68\" text-anchor=\"middle\" font-size=\"8\" fill=\"#a0c888\">(not stated, but</text><text x=\"192\" y=\"80\" text-anchor=\"middle\" font-size=\"8\" fill=\"#a0c888\">strongly supported)</text></svg>",
    "caption": "Combine clues with reasoning. Stay anchored to the text.",
    "steps": [
      "Read the passage carefully and underline anything that feels like a HINT or detail.",
      "Identify the question: what is being inferred?",
      "Look for 2 or 3 clues in the passage that point to the same conclusion.",
      "Test each answer: \"Can I point to specific text that supports this?\" If no, it's wrong.",
      "Pick the answer that the text MOST DIRECTLY supports — even if it's not stated explicitly."
    ],
    "example": "Passage: \"Carlos hadn't eaten since 6 a.m. By 2 p.m. his stomach was loud enough to embarrass him in the meeting.\" Inference: \"Carlos was hungry\" — supported by \"hadn't eaten\" + \"stomach loud.\""
  },
  {
    "cat": "Reading",
    "tags": ["reading", "accuplacer", "beginner"],
    "title": "Reading: Vocabulary in Context",
    "reality": "You don't always need to know what a word means in a vacuum — context tells you. \"Lauded\" might be unfamiliar, but \"the achievement was lauded by everyone who admired her work\" gives it away. Most test-day vocabulary is solved by context, not memorization.",
    "formula": "4 context-clue types:\n  1. DEFINITION clue: \"fauna, or animals, of the region...\"\n  2. SYNONYM clue: \"she was elated — overjoyed, even...\"\n  3. ANTONYM clue: \"unlike his brusque manner, she was warm...\"\n  4. INFERENCE clue: surrounding sentences imply the meaning",
    "method": "TONE is half the battle. If the surrounding text is positive, the unknown word is probably positive too. Reject answer choices whose tone clashes with the rest of the sentence.",
    "svg": "<svg viewBox=\"0 0 260 100\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"14\" y=\"20\" font-size=\"9\" fill=\"#9ecef0\" font-weight=\"700\">\"The decision was [LAUDED] by activists who fought for it.\"</text><line x1=\"14\" y1=\"28\" x2=\"246\" y2=\"28\" stroke=\"#5e5e5e\" stroke-width=\"0.4\" stroke-dasharray=\"2,2\"/><text x=\"14\" y=\"44\" font-size=\"9\" fill=\"#7aabcf\">Clue 1: \"activists who fought for it\" → they wanted it</text><text x=\"14\" y=\"58\" font-size=\"9\" fill=\"#7aabcf\">Clue 2: their reaction must be POSITIVE</text><text x=\"14\" y=\"74\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">→ \"lauded\" most likely means \"praised\"</text><rect x=\"14\" y=\"84\" width=\"232\" height=\"14\" rx=\"4\" fill=\"rgba(192,112,112,.08)\" stroke=\"#c07070\" stroke-width=\"0.5\"/><text x=\"130\" y=\"94\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c07070\">Negative answers like \"blocked\" or \"rejected\" clash with tone — eliminate.</text></svg>",
    "caption": "Match the unknown word's TONE to the surrounding sentence",
    "steps": [
      "Replace the unfamiliar word with \"BLANK\" and read the sentence again.",
      "Decide: is the missing word POSITIVE, NEGATIVE, or NEUTRAL? That alone often eliminates two answers.",
      "Look at the words BEFORE and AFTER the unknown word for definition, synonym, antonym, or inference clues.",
      "Plug each remaining answer choice into the sentence. Does it sound natural and match the meaning?",
      "Pick the choice that fits both the tone and the surrounding context."
    ],
    "example": "\"The lecturer was so prolix that students began checking the clock.\" Tone is negative (students bored). \"Prolix\" = wordy/long-winded."
  },
  {
    "cat": "Writing",
    "tags": ["writing", "accuplacer", "beginner"],
    "title": "Writing: Subject-Verb Agreement & Pronouns",
    "reality": "\"The students was ready\" sounds wrong because the subject (students) is plural but the verb (was) is singular. Subject-verb agreement is the most common error tested on the ACCUPLACER Writing section.",
    "formula": "Singular subject → singular verb (he runs, she has, it is)\nPlural subject → plural verb (they run, they have, they are)\n\nIgnore phrases between subject and verb when matching!\n\nPronouns must agree with their ANTECEDENT in number and gender.",
    "method": "CROSS OUT the prepositional phrase between the subject and verb. The real subject is what's left. \"The box [of pencils] is/are heavy\" → cross out \"[of pencils]\" → \"The box is heavy.\"",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"14\" y=\"22\" font-size=\"10\" fill=\"#9ecef0\" font-weight=\"700\">The group of students was/were ready.</text><line x1=\"55\" y1=\"14\" x2=\"170\" y2=\"14\" stroke=\"#c07070\" stroke-width=\"0.7\" stroke-dasharray=\"2,2\"/><text x=\"112\" y=\"9\" text-anchor=\"middle\" font-size=\"7\" fill=\"#c07070\">cross out — distractor!</text><line x1=\"20\" y1=\"38\" x2=\"240\" y2=\"38\" stroke=\"#5e5e5e\" stroke-width=\"0.4\"/><text x=\"14\" y=\"54\" font-size=\"10\" fill=\"#7ab060\">Real subject:  group  (singular)</text><text x=\"14\" y=\"68\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">→ Use singular verb:  was</text><rect x=\"14\" y=\"80\" width=\"232\" height=\"22\" rx=\"6\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/><text x=\"130\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\">\"The group of students was ready.\" ✓</text></svg>",
    "caption": "Cross out the prepositional phrase, then match subject to verb",
    "steps": [
      "Find the verb in the sentence.",
      "Ask \"WHO or WHAT is doing this verb?\" — that's your subject.",
      "Cross out any prepositional phrase (of, in, with, etc.) between the subject and verb.",
      "Match: singular subject → singular verb (often ends in -s); plural subject → plural verb.",
      "For pronouns: every \"he/she/it/they\" should clearly point back to one specific noun (the antecedent), and they should agree in number."
    ],
    "example": "\"Each of the answers (is/are) correct.\" Strip \"of the answers\" → \"Each is correct.\" Each is singular, so use IS."
  },
  {
    "cat": "Writing",
    "tags": ["writing", "accuplacer", "beginner"],
    "title": "Writing: Punctuation Essentials",
    "reality": "Commas can change meaning — \"Let's eat, Grandma\" vs. \"Let's eat Grandma\" is a literal life-or-death difference. Punctuation is how writing controls pace, grouping, and meaning.",
    "formula": "COMMA — used for:\n  • after intro phrases (\"After lunch, we left.\")\n  • before FANBOYS conjunctions joining 2 independent clauses\n  • around non-essential info\n  • between items in a list\n\nSEMICOLON — joins 2 closely related independent clauses\nCOLON — introduces a list, explanation, or quote\nAPOSTROPHE — possession (Sam's book) and contractions (don't)",
    "method": "Comma splice red flag: if you find two complete sentences joined ONLY by a comma, that's an error. Fix by (a) adding a FANBOYS word (and, but, or, etc.), (b) using a semicolon, or (c) splitting into two sentences.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"14\" y=\"14\" width=\"116\" height=\"44\" rx=\"6\" fill=\"rgba(192,112,112,.10)\" stroke=\"#c07070\" stroke-width=\"0.8\"/><text x=\"72\" y=\"28\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c07070\" font-weight=\"700\">COMMA SPLICE</text><text x=\"72\" y=\"42\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c07070\">\"I ran, I was late.\"</text><text x=\"72\" y=\"54\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c07070\">two complete + just comma ✗</text><rect x=\"138\" y=\"14\" width=\"108\" height=\"44\" rx=\"6\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/><text x=\"192\" y=\"28\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">FIX OPTIONS</text><text x=\"192\" y=\"40\" text-anchor=\"middle\" font-size=\"8\" fill=\"#a0c888\">\"I ran; I was late.\"</text><text x