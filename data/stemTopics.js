export const STEM_TOPICS = [
  {
    "cat": "Problem-Solving",
    "title": "Word Problem → Math Translation",
    "emoji": "",
    "formula": "Key: \"is/equals\"=, \"of\"=×, \"per\"=÷, \"difference\"=−, \"sum\"=+, \"every\"=exponent or rate, \"increased by\"=+, \"decreased by\"=−, \"times\"=×, \"quotient\"=÷, \"at least\"=≥, \"at most\"=≤, \"more than\"=>",
    "desc": "Translate English words into math symbols systematically before solving.",
    "examples": [
      {
        "l": "Additive (+)",
        "r": "\"sum of x and 5\" → x+5 | \"5 more than x\" → x+5 | \"increased by 3\" → +3"
      },
      {
        "l": "Subtractive (−)",
        "r": "\"difference of x and 4\" → x−4 | \"5 less than x\" → x−5 | \"decreased by 2\" → −2"
      },
      {
        "l": "Multiplicative (×)",
        "r": "\"product of 3 and x\" → 3x | \"3 times x\" → 3x | \"20% of x\" → 0.20x | \"half of x\" → x/2"
      },
      {
        "l": "Division (÷)",
        "r": "\"quotient of x and 4\" → x/4 | \"x per hour\" → x/hr | \"ratio of x to y\" → x/y"
      },
      {
        "l": "Equals (=)",
        "r": "\"is, are, was, were, equals, gives, yields\" → = | \"x is 12\" → x=12"
      },
      {
        "l": "Inequalities",
        "r": "\"at least\" → ≥ | \"at most\" → ≤ | \"more than\" → > | \"fewer than\" → < | \"no more than\" → ≤"
      },
      {
        "l": "Exponents/Powers",
        "r": "\"x squared\" → x² | \"cube of x\" → x³ | \"x to the nth power\" → xⁿ | \"every [n] periods\" → base^n"
      },
      {
        "l": "Rates & Per",
        "r": "\"miles per hour\" → miles/hr | \"cost per unit\" → cost÷units | \"n items every k days\" → n/k per day"
      },
      {
        "l": "Consecutive integers",
        "r": "n, n+1, n+2 (consecutive) | n, n+2, n+4 (consecutive odd/even)"
      },
      {
        "l": "Age problems",
        "r": "\"x years from now\" → current+x | \"x years ago\" → current−x"
      }
    ]
  },
  {
    "cat": "Problem-Solving",
    "tags": [
      "all",
      "daily",
      "math"
    ],
    "title": "Universal Problem-Solving Loop (K-U-D)",
    "theory": "",
    "reality": "When your bike breaks, you do not just randomly twist things — you figure out what is wrong, make a plan, then fix it. Scientists, doctors, and engineers use this same Know-Understand-Do loop every time they solve a real problem.",
    "formula": "KNOWN → UNKNOWN → DIAGRAM\nTranslate → Select Formula → Solve Symbolically\nPlug Numbers → Attach Units → Check Answer",
    "method": "Research-proven: Polya's 4-Step Model (1945) — Understand, Plan, Execute, Review.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs><marker id=\"ah\" markerWidth=\"6\" markerHeight=\"6\" refX=\"5\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7aabcf\"/></marker></defs>\n  <rect x=\"4\" y=\"40\" width=\"48\" height=\"26\" rx=\"6\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <text x=\"28\" y=\"51\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\" font-weight=\"700\">READ</text>\n  <text x=\"28\" y=\"62\" text-anchor=\"middle\" font-size=\"7\" fill=\"#9ecef0\">Known?</text>\n  <line x1=\"53\" y1=\"53\" x2=\"68\" y2=\"53\" stroke=\"#7aabcf\" stroke-width=\"1.2\" marker-end=\"url(#ah)\"/>\n  <rect x=\"70\" y=\"40\" width=\"48\" height=\"26\" rx=\"6\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <text x=\"94\" y=\"51\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\" font-weight=\"700\">DRAW</text>\n  <text x=\"94\" y=\"62\" text-anchor=\"middle\" font-size=\"7\" fill=\"#9ecef0\">Diagram</text>\n  <line x1=\"119\" y1=\"53\" x2=\"134\" y2=\"53\" stroke=\"#7aabcf\" stroke-width=\"1.2\" marker-end=\"url(#ah)\"/>\n  <rect x=\"136\" y=\"40\" width=\"48\" height=\"26\" rx=\"6\" fill=\"rgba(201,160,96,.15)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n  <text x=\"160\" y=\"51\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\" font-weight=\"700\">SOLVE</text>\n  <text x=\"160\" y=\"62\" text-anchor=\"middle\" font-size=\"7\" fill=\"#d4b87a\">Symbol first</text>\n  <line x1=\"185\" y1=\"53\" x2=\"200\" y2=\"53\" stroke=\"#c9a060\" stroke-width=\"1.2\" marker-end=\"url(#ah)\"/>\n  <rect x=\"202\" y=\"40\" width=\"52\" height=\"26\" rx=\"6\" fill=\"rgba(122,176,96,.15)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n  <text x=\"228\" y=\"51\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7ab060\" font-weight=\"700\">CHECK</text>\n  <text x=\"228\" y=\"62\" text-anchor=\"middle\" font-size=\"7\" fill=\"#a0c888\">Units+size</text>\n  <text x=\"130\" y=\"108\" text-anchor=\"middle\" font-size=\"9\" fill=\"#8a8a8a\">Polya 4-Step · KUD · Symbol-before-numbers</text>\n </svg>",
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
    "tags": [
      "arithmetic",
      "beginner",
      "daily"
    ],
    "title": "Order of Operations — PEMDAS Step-by-Step",
    "theory": "",
    "reality": "When you compute a tip, follow a recipe doubled, or read a price-with-tax sign, the order in which you apply each operation changes the answer. PEMDAS is the rule that keeps everyone's answer the same.",
    "formula": "P  Parentheses\nE  Exponents\nMD Multiplication & Division (left → right)\nAS Addition & Subtraction (left → right)",
    "method": "Tip: when M and D appear together, do them in the order they appear (left to right). Same for A and S.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs><marker id=\"pe1\" markerWidth=\"6\" markerHeight=\"6\" refX=\"5\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7aabcf\"/></marker></defs>\n  <rect x=\"6\" y=\"14\" width=\"44\" height=\"22\" rx=\"6\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <text x=\"28\" y=\"29\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7aabcf\" font-weight=\"700\">P</text>\n  <line x1=\"51\" y1=\"25\" x2=\"62\" y2=\"25\" stroke=\"#7aabcf\" marker-end=\"url(#pe1)\"/>\n  <rect x=\"63\" y=\"14\" width=\"44\" height=\"22\" rx=\"6\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <text x=\"85\" y=\"29\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7aabcf\" font-weight=\"700\">E</text>\n  <line x1=\"108\" y1=\"25\" x2=\"119\" y2=\"25\" stroke=\"#c9a060\" marker-end=\"url(#pe1)\"/>\n  <rect x=\"120\" y=\"14\" width=\"58\" height=\"22\" rx=\"6\" fill=\"rgba(201,160,96,.15)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n  <text x=\"149\" y=\"29\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\" font-weight=\"700\">M / D</text>\n  <line x1=\"179\" y1=\"25\" x2=\"190\" y2=\"25\" stroke=\"#7ab060\" marker-end=\"url(#pe1)\"/>\n  <rect x=\"191\" y=\"14\" width=\"58\" height=\"22\" rx=\"6\" fill=\"rgba(122,176,96,.15)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n  <text x=\"220\" y=\"29\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">A / S</text>\n  <text x=\"130\" y=\"62\" text-anchor=\"middle\" font-size=\"10\" fill=\"#9ecef0\">Example: 3 + 4 × 2² = ?</text>\n  <text x=\"130\" y=\"76\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\">Step 1: 2² = 4   →   3 + 4 × 4</text>\n  <text x=\"130\" y=\"90\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\">Step 2: 4 × 4 = 16   →   3 + 16</text>\n  <text x=\"130\" y=\"104\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7ab060\">Step 3: 3 + 16 = 19  ✓</text>\n </svg>",
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
    "tags": [
      "arithmetic",
      "beginner",
      "fractions"
    ],
    "title": "Adding & Subtracting Fractions",
    "theory": "",
    "reality": "When you split a recipe in half, combine partial gas-tank fills, or add up time worked across days, you are adding fractions. Same denominators? Easy. Different? Find a common one.",
    "formula": "Same denom:  a/b ± c/b = (a ± c) / b\nDifferent:    a/b ± c/d = (a·d ± c·b) / (b·d)\n(then simplify)",
    "method": "LCD shortcut: if denominators share factors, use the LCM (lowest common multiple). If not, just multiply them — bigger numbers but you can simplify at the end.",
    "svg": "<svg viewBox=\"0 0 260 100\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"8\" y=\"14\" width=\"60\" height=\"60\" rx=\"6\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <line x1=\"8\" y1=\"44\" x2=\"68\" y2=\"44\" stroke=\"#7aabcf\" stroke-width=\"1.2\"/>\n  <text x=\"38\" y=\"36\" text-anchor=\"middle\" font-size=\"13\" fill=\"#7aabcf\" font-weight=\"700\">2</text>\n  <text x=\"38\" y=\"60\" text-anchor=\"middle\" font-size=\"13\" fill=\"#7aabcf\" font-weight=\"700\">3</text>\n  <text x=\"78\" y=\"48\" text-anchor=\"middle\" font-size=\"14\" fill=\"#c9a060\">+</text>\n  <rect x=\"92\" y=\"14\" width=\"60\" height=\"60\" rx=\"6\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n  <line x1=\"92\" y1=\"44\" x2=\"152\" y2=\"44\" stroke=\"#c9a060\" stroke-width=\"1.2\"/>\n  <text x=\"122\" y=\"36\" text-anchor=\"middle\" font-size=\"13\" fill=\"#c9a060\" font-weight=\"700\">1</text>\n  <text x=\"122\" y=\"60\" text-anchor=\"middle\" font-size=\"13\" fill=\"#c9a060\" font-weight=\"700\">4</text>\n  <text x=\"162\" y=\"48\" text-anchor=\"middle\" font-size=\"14\" fill=\"#7ab060\">=</text>\n  <rect x=\"176\" y=\"14\" width=\"76\" height=\"60\" rx=\"6\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n  <line x1=\"176\" y1=\"44\" x2=\"252\" y2=\"44\" stroke=\"#7ab060\" stroke-width=\"1.2\"/>\n  <text x=\"214\" y=\"36\" text-anchor=\"middle\" font-size=\"13\" fill=\"#7ab060\" font-weight=\"700\">8 + 3</text>\n  <text x=\"214\" y=\"60\" text-anchor=\"middle\" font-size=\"13\" fill=\"#7ab060\" font-weight=\"700\">12</text>\n  <text x=\"130\" y=\"92\" text-anchor=\"middle\" font-size=\"9\" fill=\"#8a8a8a\">LCD = 12 → 2/3 = 8/12,  1/4 = 3/12</text>\n </svg>",
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
    "tags": [
      "arithmetic",
      "beginner",
      "fractions"
    ],
    "title": "Multiplying & Dividing Fractions",
    "theory": "",
    "reality": "Half of a half-pizza is a quarter-pizza. Doubling 3/4 cup is 1½ cups. Splitting a 3/4-mile route into 1/8-mile segments is a division problem. These come up daily.",
    "formula": "Multiply:  a/b × c/d = (a·c) / (b·d)\nDivide:    a/b ÷ c/d = a/b × d/c   (flip & multiply)",
    "method": "For division, \"Keep, Change, Flip\": keep the first fraction, change ÷ to ×, flip the second. Cancel common factors BEFORE multiplying to keep numbers small.",
    "svg": "<svg viewBox=\"0 0 260 100\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"14\" y=\"32\" font-size=\"11\" fill=\"#7aabcf\" font-weight=\"700\">×</text>\n  <rect x=\"28\" y=\"20\" width=\"48\" height=\"22\" rx=\"5\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <text x=\"52\" y=\"35\" text-anchor=\"middle\" font-size=\"10\" fill=\"#9ecef0\">2/3 × 4/5</text>\n  <text x=\"80\" y=\"33\" font-size=\"10\" fill=\"#7aabcf\">→</text>\n  <rect x=\"96\" y=\"20\" width=\"68\" height=\"22\" rx=\"5\" fill=\"rgba(122,176,96,.12)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n  <text x=\"130\" y=\"35\" text-anchor=\"middle\" font-size=\"10\" fill=\"#a0c888\" font-weight=\"700\">(2·4)/(3·5)</text>\n  <text x=\"170\" y=\"33\" font-size=\"10\" fill=\"#7ab060\">=</text>\n  <rect x=\"184\" y=\"20\" width=\"48\" height=\"22\" rx=\"5\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n  <text x=\"208\" y=\"35\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7ab060\" font-weight=\"700\">8/15</text>\n\n  <text x=\"14\" y=\"74\" font-size=\"11\" fill=\"#c9a060\" font-weight=\"700\">÷</text>\n  <rect x=\"28\" y=\"62\" width=\"48\" height=\"22\" rx=\"5\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n  <text x=\"52\" y=\"77\" text-anchor=\"middle\" font-size=\"10\" fill=\"#d4b87a\">3/4 ÷ 1/2</text>\n  <text x=\"80\" y=\"75\" font-size=\"10\" fill=\"#c9a060\">→</text>\n  <rect x=\"96\" y=\"62\" width=\"68\" height=\"22\" rx=\"5\" fill=\"rgba(201,160,96,.18)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n  <text x=\"130\" y=\"77\" text-anchor=\"middle\" font-size=\"10\" fill=\"#d4b87a\" font-weight=\"700\">3/4 × 2/1</text>\n  <text x=\"170\" y=\"75\" font-size=\"10\" fill=\"#7ab060\">=</text>\n  <rect x=\"184\" y=\"62\" width=\"48\" height=\"22\" rx=\"5\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n  <text x=\"208\" y=\"77\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7ab060\" font-weight=\"700\">6/4 = 3/2</text>\n </svg>",
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
    "tags": [
      "arithmetic",
      "beginner",
      "percents"
    ],
    "title": "Decimals ↔ Fractions ↔ Percents",
    "theory": "",
    "reality": "Sale signs say \"25% off\". Test scores say \"0.85\". Recipes say \"1/2\". They're all the same kind of number — the unit just changed. Knowing how to switch between them is essential.",
    "formula": "Decimal → Percent:  ×100  (move decimal 2 right)\nPercent → Decimal:  ÷100  (move decimal 2 left)\nFraction → Decimal: divide top by bottom\nDecimal → Fraction: write over a power of 10, simplify",
    "method": "Memorize 4 anchors: 1/2 = 0.5 = 50%, 1/4 = 0.25 = 25%, 3/4 = 0.75 = 75%, 1/10 = 0.1 = 10%. Most percent problems on tests reduce to one of these.",
    "svg": "<svg viewBox=\"0 0 260 100\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"14\" y=\"20\" width=\"68\" height=\"60\" rx=\"8\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <text x=\"48\" y=\"38\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7aabcf\" font-weight=\"700\">FRACTION</text>\n  <text x=\"48\" y=\"58\" text-anchor=\"middle\" font-size=\"14\" fill=\"#9ecef0\">3/4</text>\n  <line x1=\"84\" y1=\"50\" x2=\"98\" y2=\"50\" stroke=\"#c9a060\" stroke-width=\"1.2\"/>\n  <polygon points=\"98,50 95,47 95,53\" fill=\"#c9a060\"/>\n  <rect x=\"100\" y=\"20\" width=\"68\" height=\"60\" rx=\"8\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n  <text x=\"134\" y=\"38\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\" font-weight=\"700\">DECIMAL</text>\n  <text x=\"134\" y=\"58\" text-anchor=\"middle\" font-size=\"14\" fill=\"#d4b87a\">0.75</text>\n  <line x1=\"170\" y1=\"50\" x2=\"184\" y2=\"50\" stroke=\"#7ab060\" stroke-width=\"1.2\"/>\n  <polygon points=\"184,50 181,47 181,53\" fill=\"#7ab060\"/>\n  <rect x=\"186\" y=\"20\" width=\"68\" height=\"60\" rx=\"8\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n  <text x=\"220\" y=\"38\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">PERCENT</text>\n  <text x=\"220\" y=\"58\" text-anchor=\"middle\" font-size=\"14\" fill=\"#a0c888\">75%</text>\n </svg>",
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
    "tags": [
      "algebra",
      "beginner"
    ],
    "title": "One-Step & Two-Step Equations",
    "theory": "",
    "reality": "When you reverse-engineer a phone bill, find the original price after a discount, or figure out how many hours you worked from your paycheck — you're solving a one- or two-step equation.",
    "formula": "Goal: isolate x.\n• Undo addition with subtraction (and vice-versa).\n• Undo multiplication with division (and vice-versa).\n• Whatever you do to one side, do to the other.",
    "method": "Two-step rule: undo addition/subtraction FIRST, then undo multiplication/division. (Reverse order of PEMDAS.) This rule almost never fails.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"130\" y=\"22\" text-anchor=\"middle\" font-size=\"11\" fill=\"#9ecef0\" font-weight=\"700\">3x + 7 = 22</text>\n  <line x1=\"50\" y1=\"32\" x2=\"210\" y2=\"32\" stroke=\"#7aabcf\" stroke-width=\"0.5\" stroke-dasharray=\"2,2\"/>\n  <text x=\"14\" y=\"50\" font-size=\"10\" fill=\"#c9a060\" font-weight=\"700\">Step 1:</text>\n  <text x=\"60\" y=\"50\" font-size=\"10\" fill=\"#d4b87a\">subtract 7 from both sides</text>\n  <text x=\"180\" y=\"50\" font-size=\"10\" fill=\"#d4b87a\">→ 3x = 15</text>\n  <text x=\"14\" y=\"70\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">Step 2:</text>\n  <text x=\"60\" y=\"70\" font-size=\"10\" fill=\"#a0c888\">divide both sides by 3</text>\n  <text x=\"180\" y=\"70\" font-size=\"10\" fill=\"#a0c888\">→ x = 5</text>\n  <rect x=\"60\" y=\"84\" width=\"140\" height=\"20\" rx=\"5\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n  <text x=\"130\" y=\"98\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7ab060\" font-weight=\"700\">Check: 3(5)+7 = 22 ✓</text>\n </svg>",
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
    "tags": [
      "algebra",
      "beginner",
      "geometry"
    ],
    "title": "Slope-Intercept Form  y = mx + b",
    "theory": "",
    "reality": "Phone plans cost a flat fee (b) plus a per-minute rate (m). Distance during a road trip = starting odometer (b) + speed × time (mx). Slope-intercept lines are how rates show up in the real world.",
    "formula": "y = m x + b\n  m = slope    (rise over run)\n  b = y-intercept   (where the line crosses the y-axis)\nSlope between two points: m = (y₂ − y₁) / (x₂ − x₁)",
    "method": "Plot the y-intercept first (the line's anchor point on the y-axis). From there, use slope as \"rise over run\" — up = positive rise, right = positive run.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"20\" y1=\"100\" x2=\"240\" y2=\"100\" stroke=\"#5e5e5e\" stroke-width=\"0.6\"/>\n  <line x1=\"40\" y1=\"10\" x2=\"40\" y2=\"110\" stroke=\"#5e5e5e\" stroke-width=\"0.6\"/>\n  <text x=\"234\" y=\"113\" font-size=\"9\" fill=\"#8a8a8a\">x</text>\n  <text x=\"30\" y=\"14\" font-size=\"9\" fill=\"#8a8a8a\">y</text>\n  <line x1=\"20\" y1=\"80\" x2=\"240\" y2=\"20\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <circle cx=\"40\" cy=\"74\" r=\"3\" fill=\"#c9a060\"/>\n  <text x=\"48\" y=\"72\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">b = 2  (y-intercept)</text>\n  <line x1=\"100\" y1=\"58\" x2=\"160\" y2=\"58\" stroke=\"#7ab060\" stroke-width=\"0.8\" stroke-dasharray=\"3,2\"/>\n  <line x1=\"160\" y1=\"58\" x2=\"160\" y2=\"42\" stroke=\"#7ab060\" stroke-width=\"0.8\" stroke-dasharray=\"3,2\"/>\n  <text x=\"124\" y=\"55\" font-size=\"8\" fill=\"#a0c888\">run = 2</text>\n  <text x=\"164\" y=\"52\" font-size=\"8\" fill=\"#a0c888\">rise = 1</text>\n  <text x=\"174\" y=\"98\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">slope m = 1/2</text>\n </svg>",
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
    "tags": [
      "geometry",
      "beginner",
      "trigonometry"
    ],
    "title": "SOH-CAH-TOA — Right Triangle Trig",
    "theory": "",
    "reality": "You see a tall building, walk back 50 ft, look up at a 60° angle — how tall is it? You know one leg of a right triangle and the angle, so trig finds the other leg. SOH-CAH-TOA solves angle-of-elevation, ramp problems, and roof pitches.",
    "formula": "sin θ = Opposite / Hypotenuse\ncos θ = Adjacent / Hypotenuse\ntan θ = Opposite / Adjacent\n\nMnemonic: SOH · CAH · TOA",
    "method": "Step 1: identify which side is opposite the angle, which is adjacent (next to it, NOT the hypotenuse), and which is the hypotenuse (always opposite the right angle). Then pick the ratio that uses the two sides you know/want.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"40,100 200,100 200,30\" fill=\"rgba(122,171,207,.08)\" stroke=\"#7aabcf\" stroke-width=\"1.4\"/>\n  <rect x=\"190\" y=\"90\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"0.7\"/>\n  <path d=\"M 70,100 A 30,30 0 0,0 60,84\" fill=\"none\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n  <text x=\"76\" y=\"92\" font-size=\"10\" fill=\"#c9a060\" font-weight=\"700\">θ</text>\n  <text x=\"120\" y=\"113\" text-anchor=\"middle\" font-size=\"10\" fill=\"#9ecef0\">Adjacent</text>\n  <text x=\"208\" y=\"68\" font-size=\"10\" fill=\"#a0c888\">Opposite</text>\n  <text x=\"100\" y=\"60\" font-size=\"10\" fill=\"#d4b87a\" font-weight=\"700\" transform=\"rotate(-25 100 60)\">Hypotenuse</text>\n  <rect x=\"6\" y=\"14\" width=\"48\" height=\"14\" rx=\"3\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"0.5\"/>\n  <text x=\"30\" y=\"24\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">SOH</text>\n  <rect x=\"6\" y=\"32\" width=\"48\" height=\"14\" rx=\"3\" fill=\"rgba(201,160,96,.18)\" stroke=\"#c9a060\" stroke-width=\"0.5\"/>\n  <text x=\"30\" y=\"42\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">CAH</text>\n  <rect x=\"6\" y=\"50\" width=\"48\" height=\"14\" rx=\"3\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"0.5\"/>\n  <text x=\"30\" y=\"60\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">TOA</text>\n </svg>",
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
    "tags": [
      "data",
      "beginner",
      "statistics"
    ],
    "title": "Mean, Median, & Mode — The Three Averages",
    "theory": "",
    "reality": "Your \"average grade\" (mean), the \"middle income\" of a town (median), and the \"most popular shoe size\" (mode) are three different ways to describe a typical value. Each tells a different story.",
    "formula": "Mean   = (sum of all values) ÷ (count)\nMedian = middle value once sorted\n         (with even count: mean of the two middle values)\nMode   = the value that appears most often\nRange  = max − min",
    "method": "Outliers (extreme values) drag the mean but barely move the median. Use median when data is skewed (incomes, house prices). Use mean when data is symmetric (test scores).",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"14\" y=\"20\" font-size=\"10\" fill=\"#9ecef0\" font-weight=\"700\">Data: 4, 7, 7, 9, 13</text>\n  <rect x=\"14\" y=\"32\" width=\"74\" height=\"22\" rx=\"5\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <text x=\"51\" y=\"46\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7aabcf\" font-weight=\"700\">MEAN = 8</text>\n  <rect x=\"92\" y=\"32\" width=\"74\" height=\"22\" rx=\"5\" fill=\"rgba(201,160,96,.18)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n  <text x=\"129\" y=\"46\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\" font-weight=\"700\">MEDIAN = 7</text>\n  <rect x=\"170\" y=\"32\" width=\"74\" height=\"22\" rx=\"5\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n  <text x=\"207\" y=\"46\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">MODE = 7</text>\n  <text x=\"14\" y=\"74\" font-size=\"9\" fill=\"#7aabcf\">sum 40 ÷ count 5</text>\n  <text x=\"92\" y=\"74\" font-size=\"9\" fill=\"#c9a060\">middle of 5 values</text>\n  <text x=\"170\" y=\"74\" font-size=\"9\" fill=\"#7ab060\">7 appears twice</text>\n  <text x=\"14\" y=\"100\" font-size=\"9\" fill=\"#8a8a8a\">Range = 13 − 4 = 9   (spread of the data)</text>\n </svg>",
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
    "tags": [
      "data",
      "beginner",
      "probability"
    ],
    "title": "Probability Basics — Counting Possibilities",
    "theory": "",
    "reality": "Will it rain? What's the chance of drawing an ace? Should you take this insurance? Probability is the math of \"how often\" — it tells you what to expect over many tries.",
    "formula": "P(event) = (favorable outcomes) / (total possible outcomes)\n0 ≤ P ≤ 1\nP(A and B independent) = P(A) × P(B)\nP(A or B disjoint)     = P(A) + P(B)\nP(not A) = 1 − P(A)",
    "method": "List the sample space (all possible outcomes), then count which ones match the event. For \"and\" with independent events, multiply. For \"or\" with disjoint events, add. Always check 0 ≤ P ≤ 1.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"14\" y=\"14\" width=\"232\" height=\"40\" rx=\"6\" fill=\"rgba(122,171,207,.08)\" stroke=\"#7aabcf\" stroke-width=\"0.7\"/>\n  <text x=\"22\" y=\"28\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">Sample space (single die):</text>\n  <g font-family=\"ui-monospace,monospace\">\n    <rect x=\"22\" y=\"32\" width=\"20\" height=\"20\" fill=\"rgba(255,255,255,.06)\" stroke=\"#7aabcf\" stroke-width=\"0.6\"/>\n    <text x=\"32\" y=\"46\" text-anchor=\"middle\" font-size=\"11\" fill=\"#9ecef0\">1</text>\n    <rect x=\"46\" y=\"32\" width=\"20\" height=\"20\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"0.7\"/>\n    <text x=\"56\" y=\"46\" text-anchor=\"middle\" font-size=\"11\" fill=\"#a0c888\">2</text>\n    <rect x=\"70\" y=\"32\" width=\"20\" height=\"20\" fill=\"rgba(255,255,255,.06)\" stroke=\"#7aabcf\" stroke-width=\"0.6\"/>\n    <text x=\"80\" y=\"46\" text-anchor=\"middle\" font-size=\"11\" fill=\"#9ecef0\">3</text>\n    <rect x=\"94\" y=\"32\" width=\"20\" height=\"20\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"0.7\"/>\n    <text x=\"104\" y=\"46\" text-anchor=\"middle\" font-size=\"11\" fill=\"#a0c888\">4</text>\n    <rect x=\"118\" y=\"32\" width=\"20\" height=\"20\" fill=\"rgba(255,255,255,.06)\" stroke=\"#7aabcf\" stroke-width=\"0.6\"/>\n    <text x=\"128\" y=\"46\" text-anchor=\"middle\" font-size=\"11\" fill=\"#9ecef0\">5</text>\n    <rect x=\"142\" y=\"32\" width=\"20\" height=\"20\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"0.7\"/>\n    <text x=\"152\" y=\"46\" text-anchor=\"middle\" font-size=\"11\" fill=\"#a0c888\">6</text>\n  </g>\n  <text x=\"178\" y=\"46\" font-size=\"10\" fill=\"#a0c888\" font-weight=\"700\">3 evens of 6</text>\n  <rect x=\"14\" y=\"68\" width=\"232\" height=\"32\" rx=\"6\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/>\n  <text x=\"130\" y=\"88\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7ab060\" font-weight=\"700\">P(even) = 3/6 = 1/2 = 0.5 = 50%</text>\n </svg>",
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
    "tags": [
      "arithmetic",
      "beginner"
    ],
    "title": "GCF & LCM — Greatest Common Factor, Least Common Multiple",
    "theory": "",
    "reality": "GCF tells you how to simplify a fraction. LCM tells you when two events line up — like when two buses, one running every 12 min and one every 20 min, will arrive at the same stop together.",
    "formula": "GCF (greatest common factor): the largest number that divides BOTH evenly\nLCM (least common multiple): the smallest number that BOTH divide into evenly\n\nUseful identity: GCF(a,b) × LCM(a,b) = a × b",
    "method": "Prime-factor method works for everything: factor each number into primes, then GCF = product of shared primes (lowest power), LCM = product of all primes (highest power).",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"14\" y=\"20\" font-size=\"10\" fill=\"#9ecef0\" font-weight=\"700\">12 = 2 × 2 × 3</text>\n  <text x=\"14\" y=\"36\" font-size=\"10\" fill=\"#9ecef0\" font-weight=\"700\">18 = 2 × 3 × 3</text>\n  <rect x=\"14\" y=\"46\" width=\"110\" height=\"22\" rx=\"5\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <text x=\"69\" y=\"60\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7aabcf\" font-weight=\"700\">GCF = 2 × 3 = 6</text>\n  <rect x=\"130\" y=\"46\" width=\"116\" height=\"22\" rx=\"5\" fill=\"rgba(201,160,96,.18)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n  <text x=\"188\" y=\"60\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\" font-weight=\"700\">LCM = 2² × 3² = 36</text>\n  <text x=\"14\" y=\"84\" font-size=\"9\" fill=\"#7aabcf\">Shared primes (lowest power)</text>\n  <text x=\"130\" y=\"84\" font-size=\"9\" fill=\"#c9a060\">All primes (highest power)</text>\n  <text x=\"14\" y=\"100\" font-size=\"9\" fill=\"#7ab060\">Check: 6 × 36 = 216 = 12 × 18 ✓</text>\n </svg>",
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
    "tags": [
      "arithmetic",
      "beginner",
      "algebra",
      "accuplacer"
    ],
    "title": "Ratios, Rates & Proportions",
    "theory": "",
    "reality": "A recipe says \"3 cups flour for every 2 eggs.\" Gas mileage is \"miles per gallon.\" Map scales say \"1 inch = 50 miles.\" All of these are ratios or rates. Proportions let you scale them up or down without changing the relationship.",
    "formula": "Ratio:        a : b   or   a/b\nRate:         a units per b units (one quantity per other)\nProportion:   a/b = c/d   →   cross-multiply: a·d = b·c\nUnit rate:    rate with denominator = 1",
    "method": "Cross-multiplication shortcut: any proportion a/b = c/d becomes a·d = b·c. To find a unit rate, divide so the bottom becomes 1.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"14\" y=\"20\" font-size=\"11\" fill=\"#9ecef0\" font-weight=\"700\">3 cups flour : 2 eggs   →   ? cups : 8 eggs</text>\n  <rect x=\"14\" y=\"30\" width=\"100\" height=\"30\" rx=\"6\" fill=\"rgba(122,171,207,.12)\" stroke=\"#7aabcf\" stroke-width=\"0.8\"/>\n  <text x=\"64\" y=\"42\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7aabcf\">3</text>\n  <line x1=\"32\" y1=\"46\" x2=\"96\" y2=\"46\" stroke=\"#7aabcf\" stroke-width=\"0.8\"/>\n  <text x=\"64\" y=\"56\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7aabcf\">2</text>\n  <text x=\"120\" y=\"48\" font-size=\"14\" fill=\"#c9a060\">=</text>\n  <rect x=\"138\" y=\"30\" width=\"100\" height=\"30\" rx=\"6\" fill=\"rgba(201,160,96,.14)\" stroke=\"#c9a060\" stroke-width=\"0.8\"/>\n  <text x=\"188\" y=\"42\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\">x</text>\n  <line x1=\"156\" y1=\"46\" x2=\"220\" y2=\"46\" stroke=\"#c9a060\" stroke-width=\"0.8\"/>\n  <text x=\"188\" y=\"56\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\">8</text>\n  <text x=\"14\" y=\"78\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">Cross-multiply: 3·8 = 2·x</text>\n  <text x=\"14\" y=\"92\" font-size=\"10\" fill=\"#7ab060\">→ 24 = 2x  →  x = 12 cups</text>\n  <text x=\"170\" y=\"92\" font-size=\"9\" fill=\"#8a8a8a\">scale factor 4</text>\n </svg>",
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
    "tags": [
      "algebra",
      "beginner",
      "accuplacer"
    ],
    "title": "Linear Inequalities",
    "theory": "",
    "reality": "\"You must be at least 65 inches tall to ride.\" \"Spend less than $50.\" \"Earn more than 80% to pass.\" All of these are inequalities — math statements about ranges, not single answers.",
    "formula": "Solve the same way as equations EXCEPT:\n  When you multiply or divide by a NEGATIVE number, FLIP the inequality sign.\n\n<  : less than           ≤ : less than or equal\n>  : greater than        ≥ : greater than or equal",
    "method": "Treat it like an equation step-by-step, but the moment you multiply or divide both sides by a negative, flip < to > (or ≤ to ≥). Check by plugging a number from your answer set into the original.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"14\" y=\"22\" font-size=\"11\" fill=\"#9ecef0\" font-weight=\"700\">−2x + 5 &lt; 11</text>\n  <text x=\"14\" y=\"40\" font-size=\"9\" fill=\"#c9a060\">Step 1: subtract 5 →  −2x &lt; 6</text>\n  <text x=\"14\" y=\"56\" font-size=\"9\" fill=\"#c07070\" font-weight=\"700\">Step 2: divide by −2 → FLIP the sign:  x &gt; −3</text>\n  <line x1=\"20\" y1=\"86\" x2=\"240\" y2=\"86\" stroke=\"#5e5e5e\" stroke-width=\"0.6\"/>\n  <line x1=\"100\" y1=\"83\" x2=\"100\" y2=\"89\" stroke=\"#5e5e5e\" stroke-width=\"0.6\"/>\n  <text x=\"100\" y=\"103\" text-anchor=\"middle\" font-size=\"9\" fill=\"#8a8a8a\">−3</text>\n  <circle cx=\"100\" cy=\"86\" r=\"3\" fill=\"none\" stroke=\"#7ab060\" stroke-width=\"1.2\"/>\n  <line x1=\"103\" y1=\"86\" x2=\"240\" y2=\"86\" stroke=\"#7ab060\" stroke-width=\"1.6\"/>\n  <polygon points=\"240,86 234,82 234,90\" fill=\"#7ab060\"/>\n  <text x=\"170\" y=\"80\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">all x &gt; −3</text>\n </svg>",
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
    "tags": [
      "algebra",
      "beginner",
      "accuplacer",
      "aaf"
    ],
    "title": "Functions: Notation, Evaluation & Transformations",
    "theory": "",
    "reality": "A function is a machine: feed it an input, it returns a single output. Cost as a function of items bought, distance as a function of time — they're everywhere. f(x) is just shorthand for \"the rule named f, applied to input x.\"",
    "formula": "Notation:        f(x) = (rule using x)\nEvaluate:        f(a) = (replace every x with a)\nDomain:          allowed inputs\nRange:           possible outputs\nTransformations of y = f(x):\n  f(x) + k  → shift UP k\n  f(x − h)  → shift RIGHT h\n  −f(x)     → flip over x-axis\n  a·f(x)    → vertical stretch by factor a",
    "method": "Evaluation tip: wrap parentheses around what you substitute. f(x) = x² − 3 then f(−2) = (−2)² − 3 = 4 − 3 = 1. The parentheses prevent sign mistakes.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"20\" y=\"36\" width=\"42\" height=\"40\" rx=\"6\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <text x=\"41\" y=\"52\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">INPUT</text>\n  <text x=\"41\" y=\"66\" text-anchor=\"middle\" font-size=\"11\" fill=\"#9ecef0\">x = 4</text>\n  <line x1=\"64\" y1=\"56\" x2=\"100\" y2=\"56\" stroke=\"#c9a060\" stroke-width=\"1.2\" marker-end=\"url(#fnar1)\"/>\n  <defs><marker id=\"fnar1\" markerWidth=\"6\" markerHeight=\"6\" refX=\"5\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#c9a060\"/></marker></defs>\n  <rect x=\"100\" y=\"32\" width=\"68\" height=\"48\" rx=\"8\" fill=\"rgba(201,160,96,.18)\" stroke=\"#c9a060\" stroke-width=\"1.2\"/>\n  <text x=\"134\" y=\"50\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c9a060\" font-weight=\"700\">f(x) = x² − 3</text>\n  <text x=\"134\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#d4b87a\">(the machine)</text>\n  <line x1=\"170\" y1=\"56\" x2=\"206\" y2=\"56\" stroke=\"#7ab060\" stroke-width=\"1.2\" marker-end=\"url(#fnar2)\"/>\n  <defs><marker id=\"fnar2\" markerWidth=\"6\" markerHeight=\"6\" refX=\"5\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7ab060\"/></marker></defs>\n  <rect x=\"206\" y=\"36\" width=\"44\" height=\"40\" rx=\"6\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n  <text x=\"228\" y=\"52\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">OUTPUT</text>\n  <text x=\"228\" y=\"66\" text-anchor=\"middle\" font-size=\"11\" fill=\"#a0c888\">f(4) = 13</text>\n  <text x=\"130\" y=\"100\" text-anchor=\"middle\" font-size=\"8\" fill=\"#8a8a8a\">Substitute, square, subtract: 4²−3 = 16−3 = 13</text>\n </svg>",
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
    "tags": [
      "algebra",
      "beginner",
      "accuplacer",
      "aaf"
    ],
    "title": "Polynomial Equations — Factor & Solve",
    "theory": "",
    "reality": "Trajectories of thrown objects, profit-maximization curves, and area problems all give you polynomial equations. Setting one equal to zero and factoring is how you find where the curve crosses the x-axis — the answer to \"when?\" or \"for what input?\"",
    "formula": "Quadratic standard form:  ax² + bx + c = 0\nFactor patterns:\n  Difference of squares:  a² − b² = (a−b)(a+b)\n  Perfect square:         a² ± 2ab + b² = (a ± b)²\n  Common monomial:        ax² + bx = x(ax + b)\nZero-product property: if A·B = 0 then A = 0 or B = 0",
    "method": "Factoring decision tree: (1) GCF first — pull out anything common. (2) Try difference-of-squares pattern. (3) Try the AC method or \"two numbers that multiply to ac and add to b\". (4) If nothing works, use the quadratic formula.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"14\" y=\"22\" font-size=\"11\" fill=\"#9ecef0\" font-weight=\"700\">x² − 5x + 6 = 0</text>\n  <text x=\"14\" y=\"40\" font-size=\"9\" fill=\"#c9a060\">Find two numbers: multiply to 6, add to −5</text>\n  <text x=\"14\" y=\"56\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">→ −2 and −3   ✓ ((−2)(−3)=6, −2+−3=−5)</text>\n  <text x=\"14\" y=\"72\" font-size=\"9\" fill=\"#7aabcf\">Factor:  (x − 2)(x − 3) = 0</text>\n  <text x=\"14\" y=\"88\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">Zero-product: x − 2 = 0   OR   x − 3 = 0</text>\n  <rect x=\"60\" y=\"96\" width=\"60\" height=\"20\" rx=\"4\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/>\n  <text x=\"90\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7ab060\" font-weight=\"700\">x = 2</text>\n  <rect x=\"140\" y=\"96\" width=\"60\" height=\"20\" rx=\"4\" fill=\"rgba(122,176,96,.18)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/>\n  <text x=\"170\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7ab060\" font-weight=\"700\">x = 3</text>\n </svg>",
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
    "tags": [
      "algebra",
      "accuplacer",
      "aaf"
    ],
    "title": "Rational Equations — Equations with Fractions",
    "theory": "",
    "reality": "Work-rate problems (\"two pumps fill a tank in...\") and average-speed problems (\"part of trip at one speed, part at another...\") give you rational equations: equations with variables in denominators. Clear the fractions to make life easy.",
    "formula": "Multiply BOTH SIDES by the LCD (least common denominator), then solve as usual.\n\nALWAYS check for excluded values: any x that makes a denominator zero is forbidden.",
    "method": "Step 1: factor every denominator. Step 2: find LCD. Step 3: multiply both sides of the equation by the LCD — this cancels all fractions. Step 4: solve the resulting equation. Step 5: discard any answer that makes an original denominator zero (extraneous).",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"14\" y=\"22\" font-size=\"11\" fill=\"#9ecef0\" font-weight=\"700\">2/x + 1/3 = 5/6</text>\n  <text x=\"14\" y=\"40\" font-size=\"9\" fill=\"#c9a060\">LCD of x, 3, 6 is 6x</text>\n  <text x=\"14\" y=\"56\" font-size=\"9\" fill=\"#c9a060\">Multiply each term by 6x:</text>\n  <text x=\"14\" y=\"70\" font-size=\"9\" fill=\"#7aabcf\">12 + 2x = 5x</text>\n  <text x=\"14\" y=\"86\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">3x = 12  →  x = 4</text>\n  <text x=\"14\" y=\"102\" font-size=\"8\" fill=\"#8a8a8a\">Check x ≠ 0 (denominator). 4 is allowed ✓</text>\n </svg>",
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
    "tags": [
      "algebra",
      "accuplacer",
      "aaf"
    ],
    "title": "Radical Equations — Equations with Square Roots",
    "theory": "",
    "reality": "Pendulum period, free-fall time, and pythagorean distance problems all give you radical equations. The trick is that you must square both sides — but squaring can create fake answers, so you must check every solution.",
    "formula": "To clear a square root: ISOLATE the radical, then SQUARE both sides.\n\nIf there are TWO radicals: isolate one, square, simplify, isolate the other, square again.\n\nALWAYS check: squaring can introduce extraneous solutions.",
    "method": "Why check? Squaring both sides treats both +√ and −√ the same, so a \"solution\" might satisfy the squared equation but not the original. Plug every candidate back in.",
    "svg": "<svg viewBox=\"0 0 260 100\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"14\" y=\"20\" font-size=\"11\" fill=\"#9ecef0\" font-weight=\"700\">√(x + 7) = 3</text>\n  <text x=\"14\" y=\"38\" font-size=\"9\" fill=\"#c9a060\">Square both sides:  x + 7 = 9</text>\n  <text x=\"14\" y=\"54\" font-size=\"9\" fill=\"#7aabcf\">Solve:  x = 2</text>\n  <text x=\"14\" y=\"72\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">Check: √(2+7) = √9 = 3 ✓</text>\n  <rect x=\"14\" y=\"80\" width=\"232\" height=\"16\" rx=\"4\" fill=\"rgba(192,112,112,.10)\" stroke=\"#c07070\" stroke-width=\"0.7\"/>\n  <text x=\"130\" y=\"92\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c07070\" font-weight=\"700\">Always check — squaring can create fake answers!</text>\n </svg>",
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
    "tags": [
      "algebra",
      "accuplacer",
      "aaf"
    ],
    "title": "Exponential & Logarithmic Equations",
    "theory": "",
    "reality": "Population growth, radioactive decay, compound interest, and earthquake magnitudes (Richter scale) all use exponential or logarithmic equations. Whenever something grows or shrinks by the same RATIO each step, exponentials describe it.",
    "formula": "Exponential: bˣ = bʸ  ⇒  x = y    (same base = same exponent)\n\nKey fact: log_b(x) and bˣ are INVERSES.\n  • To solve bˣ = c, take log of both sides.\n  • To solve log_b(x) = c, exponentiate: x = bᶜ.\n\nLog rules:\n  log(ab) = log a + log b\n  log(a/b) = log a − log b\n  log(aⁿ) = n · log a",
    "method": "Quick decision: equation has a variable as an EXPONENT? Take a log. Equation has a variable INSIDE a log? Exponentiate (raise the base to both sides).",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"14\" y=\"14\" width=\"116\" height=\"40\" rx=\"6\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"0.8\"/>\n  <text x=\"72\" y=\"30\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">EXPONENTIAL</text>\n  <text x=\"72\" y=\"46\" text-anchor=\"middle\" font-size=\"10\" fill=\"#9ecef0\">2ˣ = 32</text>\n  <rect x=\"138\" y=\"14\" width=\"108\" height=\"40\" rx=\"6\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"0.8\"/>\n  <text x=\"192\" y=\"30\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">LOGARITHMIC</text>\n  <text x=\"192\" y=\"46\" text-anchor=\"middle\" font-size=\"10\" fill=\"#d4b87a\">log₂(x) = 5</text>\n  <text x=\"14\" y=\"72\" font-size=\"9\" fill=\"#7aabcf\">Same base: 2ˣ = 2⁵ → x = 5</text>\n  <text x=\"138\" y=\"72\" font-size=\"9\" fill=\"#c9a060\">Exponentiate: x = 2⁵ = 32</text>\n  <rect x=\"14\" y=\"84\" width=\"232\" height=\"22\" rx=\"6\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/>\n  <text x=\"130\" y=\"98\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">Logs and exponents undo each other.</text>\n </svg>",
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
    "tags": [
      "probability",
      "accuplacer",
      "beginner"
    ],
    "title": "Sets, Venn Diagrams & Set Notation",
    "theory": "",
    "reality": "When 60 students like math and 40 like science and 25 like both, how many like neither? Set theory is how we organize and count overlapping groups — used in surveys, databases, polling, and probability.",
    "formula": "A ∪ B = \"A union B\" = elements in A OR B (or both)\nA ∩ B = \"A intersection B\" = elements in BOTH A AND B\nA' or Aᶜ = complement of A = NOT in A\n|A| = number of elements in A\n\nInclusion–exclusion:\n  |A ∪ B| = |A| + |B| − |A ∩ B|",
    "method": "Draw it! For two-set problems, sketch two overlapping circles. Fill in the overlap first, then the rest, then the outside. Counting becomes obvious.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"14\" y=\"10\" width=\"232\" height=\"90\" rx=\"8\" fill=\"none\" stroke=\"#5e5e5e\" stroke-width=\"0.6\" stroke-dasharray=\"2,2\"/>\n  <text x=\"226\" y=\"22\" text-anchor=\"end\" font-size=\"9\" fill=\"#8a8a8a\">Universe U</text>\n  <circle cx=\"100\" cy=\"58\" r=\"34\" fill=\"rgba(122,171,207,.20)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <circle cx=\"160\" cy=\"58\" r=\"34\" fill=\"rgba(201,160,96,.20)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n  <text x=\"80\" y=\"62\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7aabcf\" font-weight=\"700\">A only</text>\n  <text x=\"80\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#9ecef0\">35</text>\n  <text x=\"180\" y=\"62\" text-anchor=\"middle\" font-size=\"11\" fill=\"#c9a060\" font-weight=\"700\">B only</text>\n  <text x=\"180\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#d4b87a\">15</text>\n  <text x=\"130\" y=\"62\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">A∩B</text>\n  <text x=\"130\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#a0c888\">25</text>\n  <text x=\"220\" y=\"92\" text-anchor=\"end\" font-size=\"9\" fill=\"#8a8a8a\">outside both: 5</text>\n </svg>",
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
    "tags": [
      "reading",
      "accuplacer",
      "beginner"
    ],
    "title": "Reading: Finding the Main Idea",
    "theory": "",
    "reality": "Every email, article, and instruction page has ONE central point — the main idea. Find it and you've \"got\" the passage. Miss it and even all the details won't help you answer the question.",
    "formula": "Main idea = WHAT the passage is mostly about\nDifferent from a TOPIC (one phrase) and a DETAIL (one fact)\n\nLook for:\n  • Repeated words or themes\n  • A sentence that summarizes the rest (often first or last)\n  • The umbrella claim that all other sentences support",
    "method": "Test each answer choice with the \"umbrella test\": does this answer COVER everything in the passage, or does it only cover one detail? The right answer covers the whole umbrella.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"14\" y=\"14\" width=\"232\" height=\"20\" rx=\"6\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <text x=\"130\" y=\"28\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7aabcf\" font-weight=\"700\">MAIN IDEA — the umbrella claim</text>\n  <line x1=\"60\" y1=\"36\" x2=\"60\" y2=\"46\" stroke=\"#7aabcf\" stroke-width=\"0.6\"/>\n  <line x1=\"130\" y1=\"36\" x2=\"130\" y2=\"46\" stroke=\"#7aabcf\" stroke-width=\"0.6\"/>\n  <line x1=\"200\" y1=\"36\" x2=\"200\" y2=\"46\" stroke=\"#7aabcf\" stroke-width=\"0.6\"/>\n  <rect x=\"20\" y=\"48\" width=\"80\" height=\"18\" rx=\"4\" fill=\"rgba(201,160,96,.14)\" stroke=\"#c9a060\" stroke-width=\"0.7\"/>\n  <text x=\"60\" y=\"60\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\">Detail 1</text>\n  <rect x=\"100\" y=\"48\" width=\"60\" height=\"18\" rx=\"4\" fill=\"rgba(201,160,96,.14)\" stroke=\"#c9a060\" stroke-width=\"0.7\"/>\n  <text x=\"130\" y=\"60\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\">Detail 2</text>\n  <rect x=\"160\" y=\"48\" width=\"80\" height=\"18\" rx=\"4\" fill=\"rgba(201,160,96,.14)\" stroke=\"#c9a060\" stroke-width=\"0.7\"/>\n  <text x=\"200\" y=\"60\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\">Detail 3</text>\n  <rect x=\"14\" y=\"76\" width=\"232\" height=\"26\" rx=\"6\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/>\n  <text x=\"130\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">UMBRELLA TEST</text>\n  <text x=\"130\" y=\"100\" text-anchor=\"middle\" font-size=\"9\" fill=\"#a0c888\">Does the answer cover ALL details, or just one?</text>\n </svg>",
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
    "tags": [
      "reading",
      "accuplacer",
      "beginner"
    ],
    "title": "Reading: Drawing Inferences",
    "theory": "",
    "reality": "Inferences are educated guesses based on text clues — like a detective. Authors don't always say things directly; sometimes they imply. \"She slammed the door\" → you infer she's angry, even though \"angry\" isn't in the sentence.",
    "formula": "Inference = Text Evidence + Reasoning\n\nNOT a guess. NOT outside knowledge.\nMUST be supported by SOMETHING in the passage.",
    "method": "The \"two-finger\" test: point at the answer, then point at the line in the passage that proves it. If you can't point to evidence, it's not the right inference. The right answer follows DIRECTLY from clues you can locate.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"14\" y=\"14\" width=\"100\" height=\"80\" rx=\"8\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <text x=\"64\" y=\"28\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">CLUES (in text)</text>\n  <text x=\"64\" y=\"44\" text-anchor=\"middle\" font-size=\"8\" fill=\"#9ecef0\">\"checked sky\"</text>\n  <text x=\"64\" y=\"58\" text-anchor=\"middle\" font-size=\"8\" fill=\"#9ecef0\">\"packed umbrella\"</text>\n  <text x=\"64\" y=\"72\" text-anchor=\"middle\" font-size=\"8\" fill=\"#9ecef0\">\"basket inside\"</text>\n  <text x=\"118\" y=\"58\" font-size=\"14\" fill=\"#c9a060\">→</text>\n  <rect x=\"138\" y=\"14\" width=\"108\" height=\"80\" rx=\"8\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n  <text x=\"192\" y=\"28\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">INFERENCE</text>\n  <text x=\"192\" y=\"50\" text-anchor=\"middle\" font-size=\"11\" fill=\"#a0c888\" font-weight=\"700\">\"She expects rain\"</text>\n  <text x=\"192\" y=\"68\" text-anchor=\"middle\" font-size=\"8\" fill=\"#a0c888\">(not stated, but</text>\n  <text x=\"192\" y=\"80\" text-anchor=\"middle\" font-size=\"8\" fill=\"#a0c888\">strongly supported)</text>\n </svg>",
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
    "tags": [
      "reading",
      "accuplacer",
      "beginner"
    ],
    "title": "Reading: Vocabulary in Context",
    "theory": "",
    "reality": "You don't always need to know what a word means in a vacuum — context tells you. \"Lauded\" might be unfamiliar, but \"the achievement was lauded by everyone who admired her work\" gives it away. Most test-day vocabulary is solved by context, not memorization.",
    "formula": "4 context-clue types:\n  1. DEFINITION clue: \"fauna, or animals, of the region...\"\n  2. SYNONYM clue: \"she was elated — overjoyed, even...\"\n  3. ANTONYM clue: \"unlike his brusque manner, she was warm...\"\n  4. INFERENCE clue: surrounding sentences imply the meaning",
    "method": "TONE is half the battle. If the surrounding text is positive, the unknown word is probably positive too. Reject answer choices whose tone clashes with the rest of the sentence.",
    "svg": "<svg viewBox=\"0 0 260 100\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"14\" y=\"20\" font-size=\"9\" fill=\"#9ecef0\" font-weight=\"700\">\"The decision was [LAUDED] by activists who fought for it.\"</text>\n  <line x1=\"14\" y1=\"28\" x2=\"246\" y2=\"28\" stroke=\"#5e5e5e\" stroke-width=\"0.4\" stroke-dasharray=\"2,2\"/>\n  <text x=\"14\" y=\"44\" font-size=\"9\" fill=\"#7aabcf\">Clue 1: \"activists who fought for it\" → they wanted it</text>\n  <text x=\"14\" y=\"58\" font-size=\"9\" fill=\"#7aabcf\">Clue 2: their reaction must be POSITIVE</text>\n  <text x=\"14\" y=\"74\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">→ \"lauded\" most likely means \"praised\"</text>\n  <rect x=\"14\" y=\"84\" width=\"232\" height=\"14\" rx=\"4\" fill=\"rgba(192,112,112,.08)\" stroke=\"#c07070\" stroke-width=\"0.5\"/>\n  <text x=\"130\" y=\"94\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c07070\">Negative answers like \"blocked\" or \"rejected\" clash with tone — eliminate.</text>\n </svg>",
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
    "tags": [
      "writing",
      "accuplacer",
      "beginner"
    ],
    "title": "Writing: Subject-Verb Agreement & Pronouns",
    "theory": "",
    "reality": "\"The students was ready\" sounds wrong because the subject (students) is plural but the verb (was) is singular. Subject-verb agreement is the most common error tested on the ACCUPLACER Writing section.",
    "formula": "Singular subject → singular verb (he runs, she has, it is)\nPlural subject → plural verb (they run, they have, they are)\n\nIgnore phrases between subject and verb when matching!\n\nPronouns must agree with their ANTECEDENT in number and gender.",
    "method": "CROSS OUT the prepositional phrase between the subject and verb. The real subject is what's left. \"The box [of pencils] is/are heavy\" → cross out \"[of pencils]\" → \"The box is heavy.\"",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"14\" y=\"22\" font-size=\"10\" fill=\"#9ecef0\" font-weight=\"700\">The group of students was/were ready.</text>\n  <line x1=\"55\" y1=\"14\" x2=\"170\" y2=\"14\" stroke=\"#c07070\" stroke-width=\"0.7\" stroke-dasharray=\"2,2\"/>\n  <text x=\"112\" y=\"9\" text-anchor=\"middle\" font-size=\"7\" fill=\"#c07070\">cross out — distractor!</text>\n  <line x1=\"20\" y1=\"38\" x2=\"240\" y2=\"38\" stroke=\"#5e5e5e\" stroke-width=\"0.4\"/>\n  <text x=\"14\" y=\"54\" font-size=\"10\" fill=\"#7ab060\">Real subject:  group  (singular)</text>\n  <text x=\"14\" y=\"68\" font-size=\"10\" fill=\"#7ab060\" font-weight=\"700\">→ Use singular verb:  was</text>\n  <rect x=\"14\" y=\"80\" width=\"232\" height=\"22\" rx=\"6\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/>\n  <text x=\"130\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\">\"The group of students was ready.\" ✓</text>\n </svg>",
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
    "tags": [
      "writing",
      "accuplacer",
      "beginner"
    ],
    "title": "Writing: Punctuation Essentials",
    "theory": "",
    "reality": "Commas can change meaning — \"Let's eat, Grandma\" vs. \"Let's eat Grandma\" is a literal life-or-death difference. Punctuation is how writing controls pace, grouping, and meaning.",
    "formula": "COMMA — used for:\n  • after intro phrases (\"After lunch, we left.\")\n  • before FANBOYS conjunctions joining 2 independent clauses\n  • around non-essential info\n  • between items in a list\n\nSEMICOLON — joins 2 closely related independent clauses\nCOLON — introduces a list, explanation, or quote\nAPOSTROPHE — possession (Sam's book) and contractions (don't)",
    "method": "Comma splice red flag: if you find two complete sentences joined ONLY by a comma, that's an error. Fix by (a) adding a FANBOYS word (and, but, or, etc.), (b) using a semicolon, or (c) splitting into two sentences.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"14\" y=\"14\" width=\"116\" height=\"44\" rx=\"6\" fill=\"rgba(192,112,112,.10)\" stroke=\"#c07070\" stroke-width=\"0.8\"/>\n  <text x=\"72\" y=\"28\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c07070\" font-weight=\"700\">COMMA SPLICE</text>\n  <text x=\"72\" y=\"42\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c07070\">\"I ran, I was late.\"</text>\n  <text x=\"72\" y=\"54\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c07070\">two complete + just comma ✗</text>\n  <rect x=\"138\" y=\"14\" width=\"108\" height=\"44\" rx=\"6\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/>\n  <text x=\"192\" y=\"28\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">FIX OPTIONS</text>\n  <text x=\"192\" y=\"40\" text-anchor=\"middle\" font-size=\"8\" fill=\"#a0c888\">\"I ran; I was late.\"</text>\n  <text x=\"192\" y=\"50\" text-anchor=\"middle\" font-size=\"8\" fill=\"#a0c888\">\"I ran, but I was late.\"</text>\n  <text x=\"14\" y=\"78\" font-size=\"9\" fill=\"#7aabcf\">After intro phrase:  After lunch, we left.</text>\n  <text x=\"14\" y=\"92\" font-size=\"9\" fill=\"#c9a060\">Possessive:  Sarah's notebook · the dogs' bowls</text>\n  <text x=\"14\" y=\"106\" font-size=\"9\" fill=\"#7ab060\">Colon for a list:  Bring three items: pen, paper, ID.</text>\n </svg>",
    "caption": "Each mark has one job. Don't use a comma where you need a stronger break.",
    "steps": [
      "After an intro phrase or word (However, After dinner, In fact), put a comma.",
      "Joining two complete sentences? Use either semicolon, OR comma + FANBOYS (for, and, nor, but, or, yet, so).",
      "For non-essential info (asides), surround with commas: \"My brother, who lives in Ohio, called.\"",
      "Apostrophe shows possession (Sarah's) or a contraction (don't = do not). NEVER use it for plural.",
      "Colon introduces a list, explanation, or quote — but only after a complete sentence."
    ],
    "example": "Wrong: \"I studied hard, I passed.\" (comma splice). Right: \"I studied hard, so I passed.\" (comma + FANBOYS) or \"I studied hard; I passed.\" (semicolon)."
  },
  {
    "cat": "Writing",
    "tags": [
      "writing",
      "accuplacer",
      "beginner"
    ],
    "title": "Writing: Sentence Structure & Fragments",
    "theory": "",
    "reality": "A sentence needs a subject AND a verb AND must express a complete thought. \"Because the bus was late\" has a subject and verb but isn't complete — it's a fragment. Fixing fragments and run-ons is a top ACCUPLACER topic.",
    "formula": "Independent clause:  has subject + verb + complete thought   (= a sentence)\nDependent clause:    has subject + verb but starts with \"because, when, although, if...\"  (incomplete)\n\nFRAGMENT: a dependent clause or partial idea standing alone\nRUN-ON: two independent clauses joined incorrectly (no punctuation, or just a comma)",
    "method": "Fragment fix: connect the dependent clause to a complete sentence with a comma. Run-on fix: insert proper punctuation (period, semicolon, or comma+FANBOYS).",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"14\" y=\"14\" width=\"232\" height=\"28\" rx=\"6\" fill=\"rgba(192,112,112,.10)\" stroke=\"#c07070\" stroke-width=\"0.8\"/>\n  <text x=\"22\" y=\"26\" font-size=\"9\" fill=\"#c07070\" font-weight=\"700\">FRAGMENT  ✗</text>\n  <text x=\"22\" y=\"38\" font-size=\"9\" fill=\"#c07070\">\"Because the bus was late.\"  ← starts with \"because\" — incomplete</text>\n  <rect x=\"14\" y=\"46\" width=\"232\" height=\"28\" rx=\"6\" fill=\"rgba(192,112,112,.10)\" stroke=\"#c07070\" stroke-width=\"0.8\"/>\n  <text x=\"22\" y=\"58\" font-size=\"9\" fill=\"#c07070\" font-weight=\"700\">RUN-ON  ✗</text>\n  <text x=\"22\" y=\"70\" font-size=\"9\" fill=\"#c07070\">\"I was late I missed the test.\"  ← two sentences smashed together</text>\n  <rect x=\"14\" y=\"78\" width=\"232\" height=\"34\" rx=\"6\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/>\n  <text x=\"22\" y=\"90\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">FIXED  ✓</text>\n  <text x=\"22\" y=\"102\" font-size=\"9\" fill=\"#a0c888\">\"Because the bus was late, I missed the test.\"</text>\n </svg>",
    "caption": "Every sentence needs subject + verb + complete thought",
    "steps": [
      "Read the sentence ALOUD. Does it sound finished? If your voice trails off expecting more, you have a fragment.",
      "Spot the dependent clause starters: because, although, when, while, if, since, after, before, unless. These signal possible fragments.",
      "For a fragment: attach it to a complete sentence using a comma (intro position) or no comma (back position).",
      "For a run-on: find the two complete sentences. Separate with period, semicolon, or comma + FANBOYS.",
      "Read the fix aloud — it should sound natural and complete."
    ],
    "example": "Run-on: \"It rained we stayed in.\" Fix 1: \"It rained, so we stayed in.\" Fix 2: \"It rained; we stayed in.\" Fix 3: \"It rained. We stayed in.\""
  },
  {
    "cat": "Statistics",
    "tags": [
      "data",
      "statistics",
      "ap"
    ],
    "title": "AP Statistics: Sampling, Study Design & Two-Way Tables",
    "theory": "",
    "reality": "Election polls, drug trials, and Netflix recommendations all rely on sampling. The DESIGN of how you collect data determines whether your conclusion is trustworthy. Bad sampling = bad results, no matter how clever the math.",
    "formula": "Sampling methods:\n  • SRS (simple random)        – every group equally likely\n  • Stratified                  – split into groups, sample within each\n  • Systematic                  – every kth element\n  • Cluster                     – sample whole groups\n\nObservational study: just observe — only association.\nExperiment: assign treatments — can show causation.\n\nTwo-way table:\n  P(A | B) = (count A and B) / (count B)",
    "method": "Causation requires an experiment with random assignment. Observational studies (no matter how big) only show association. Watch for confounding variables.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"14\" y=\"14\" width=\"232\" height=\"14\" rx=\"3\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"0.6\"/>\n  <text x=\"130\" y=\"24\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">Two-way table — Drug trial</text>\n  <line x1=\"14\" y1=\"32\" x2=\"246\" y2=\"32\" stroke=\"#5e5e5e\" stroke-width=\"0.4\"/>\n  <text x=\"20\" y=\"48\" font-size=\"9\" fill=\"#9ecef0\" font-weight=\"700\"></text>\n  <text x=\"120\" y=\"48\" font-size=\"9\" fill=\"#9ecef0\" font-weight=\"700\">Improved</text>\n  <text x=\"190\" y=\"48\" font-size=\"9\" fill=\"#9ecef0\" font-weight=\"700\">Same</text>\n  <text x=\"240\" y=\"48\" font-size=\"9\" fill=\"#9ecef0\" font-weight=\"700\">Total</text>\n  <text x=\"20\" y=\"64\" font-size=\"9\" fill=\"#7aabcf\">Drug</text>\n  <text x=\"124\" y=\"64\" font-size=\"9\" fill=\"#a0c888\">60</text>\n  <text x=\"194\" y=\"64\" font-size=\"9\" fill=\"#a0c888\">40</text>\n  <text x=\"244\" y=\"64\" font-size=\"9\" fill=\"#a0c888\">100</text>\n  <text x=\"20\" y=\"78\" font-size=\"9\" fill=\"#7aabcf\">Placebo</text>\n  <text x=\"124\" y=\"78\" font-size=\"9\" fill=\"#d4b87a\">30</text>\n  <text x=\"194\" y=\"78\" font-size=\"9\" fill=\"#d4b87a\">70</text>\n  <text x=\"244\" y=\"78\" font-size=\"9\" fill=\"#d4b87a\">100</text>\n  <line x1=\"14\" y1=\"84\" x2=\"246\" y2=\"84\" stroke=\"#5e5e5e\" stroke-width=\"0.4\"/>\n  <text x=\"14\" y=\"100\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">P(Improved | Drug) = 60/100 = 0.60</text>\n </svg>",
    "caption": "Random assignment → causation. Random sampling → generalization.",
    "steps": [
      "Identify the population of interest and the sample method used.",
      "Watch for BIAS: voluntary response, undercoverage, or non-response can ruin a sample.",
      "Distinguish OBSERVATIONAL from EXPERIMENTAL — only experiments can establish cause-and-effect.",
      "For two-way tables: marginal totals are row/column sums. Joint = single cell ÷ grand total. Conditional = cell ÷ row (or column) total.",
      "Always state conclusions in context, with appropriate uncertainty (e.g., \"this suggests, but cannot prove...\")."
    ],
    "example": "200-person drug study, randomized: P(Improved | Drug) = 60/100 = 60%. P(Improved | Placebo) = 30/100 = 30%. Difference of 30 pts is large enough to suggest the drug helps."
  },
  {
    "cat": "Biology",
    "tags": [
      "biology",
      "ap",
      "science",
      "beginner"
    ],
    "title": "AP Biology Foundations — Cells, DNA & Evolution",
    "theory": "",
    "reality": "Every disease, crop, vaccine, and ecosystem depends on biology. From cell biology to evolution, four big ideas tie AP Biology together: evolution, energy & matter, information storage, and systems interactions.",
    "formula": "Cell types:\n  • PROKARYOTIC – no nucleus (bacteria)\n  • EUKARYOTIC  – has nucleus (plants, animals, fungi)\n\nDNA: double helix of A-T and G-C base pairs\n  Replication: semi-conservative\n  Transcription: DNA → mRNA\n  Translation: mRNA → protein (in ribosome)\n\nEvolution: Mutation → Variation → Selection → Adaptation",
    "method": "Big-picture link: every AP Bio topic ties back to one of 4 big ideas — Evolution, Energy/Matter, Information, or Systems. When stuck, ask: which big idea is this question testing?",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"14\" y=\"14\" width=\"76\" height=\"86\" rx=\"6\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"0.8\"/>\n  <text x=\"52\" y=\"28\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">EUKARYOTIC CELL</text>\n  <ellipse cx=\"52\" cy=\"60\" rx=\"32\" ry=\"24\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"0.6\"/>\n  <circle cx=\"52\" cy=\"55\" r=\"9\" fill=\"rgba(192,112,112,.30)\" stroke=\"#c07070\" stroke-width=\"0.7\"/>\n  <text x=\"52\" y=\"58\" text-anchor=\"middle\" font-size=\"6\" fill=\"#c07070\">DNA</text>\n  <ellipse cx=\"38\" cy=\"74\" rx=\"3\" ry=\"2\" fill=\"#7ab060\"/>\n  <ellipse cx=\"66\" cy=\"74\" rx=\"3\" ry=\"2\" fill=\"#7ab060\"/>\n  <text x=\"52\" y=\"94\" text-anchor=\"middle\" font-size=\"7\" fill=\"#9ecef0\">nucleus, organelles</text>\n  <rect x=\"98\" y=\"14\" width=\"148\" height=\"42\" rx=\"6\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"0.8\"/>\n  <text x=\"172\" y=\"28\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">CENTRAL DOGMA</text>\n  <text x=\"172\" y=\"42\" text-anchor=\"middle\" font-size=\"9\" fill=\"#d4b87a\">DNA → RNA → PROTEIN</text>\n  <text x=\"172\" y=\"52\" text-anchor=\"middle\" font-size=\"7\" fill=\"#d4b87a\">transcribe · translate</text>\n  <rect x=\"98\" y=\"62\" width=\"148\" height=\"38\" rx=\"6\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/>\n  <text x=\"172\" y=\"76\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">EVOLUTION</text>\n  <text x=\"172\" y=\"88\" text-anchor=\"middle\" font-size=\"8\" fill=\"#a0c888\">Variation → Selection</text>\n  <text x=\"172\" y=\"97\" text-anchor=\"middle\" font-size=\"7\" fill=\"#a0c888\">→ Adaptation over time</text>\n </svg>",
    "caption": "Cell → DNA → Protein → Trait → Selected by environment",
    "steps": [
      "Distinguish prokaryote (bacteria, no nucleus) from eukaryote (plant/animal, has nucleus + organelles).",
      "Memorize the central dogma: DNA codes for RNA (transcription), RNA codes for protein (translation).",
      "Mitosis = body cell division (2 identical daughters). Meiosis = sex cell division (4 unique gametes).",
      "For evolution: variation arises from mutation; selection acts on variation; adaptations emerge over generations.",
      "For ecology: producers → primary consumers → secondary consumers; energy flows up but only ~10% transfers per level."
    ],
    "example": "A bacterial population evolves antibiotic resistance. Mutation creates one resistant cell → antibiotic kills the rest → only resistant cell survives & reproduces → next generation is resistant. Classic natural selection."
  },
  {
    "cat": "Environmental Science",
    "tags": [
      "environment",
      "ap",
      "science"
    ],
    "title": "AP Environmental Science Essentials",
    "theory": "",
    "reality": "Climate change, pollution, biodiversity loss, water scarcity — environmental science is about how human systems interact with Earth's natural systems. The exam stresses quantitative reasoning with real units and real-world data.",
    "formula": "Energy pyramid: ~10% energy transfers up each trophic level\n\nGreenhouse gases: CO₂, CH₄, N₂O, water vapor\n  Trap infrared radiation → warming\n\nPopulation growth:\n  Exponential: r constant — J-curve\n  Logistic:    grows then plateaus at carrying capacity K — S-curve\n\nBiodiversity hot spots = high species count + endemic species + threatened",
    "method": "Always check UNITS in environmental questions: kWh vs. kW, tons vs. metric tons, ppm vs. ppb. Conversions tank exam scores faster than concept gaps. Carry units through every calculation.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"130,16 100,40 160,40\" fill=\"rgba(192,112,112,.20)\" stroke=\"#c07070\" stroke-width=\"0.8\"/>\n  <text x=\"130\" y=\"32\" text-anchor=\"middle\" font-size=\"7\" fill=\"#c07070\" font-weight=\"700\">tertiary</text>\n  <polygon points=\"100,42 80,62 180,62 160,42\" fill=\"rgba(201,160,96,.20)\" stroke=\"#c9a060\" stroke-width=\"0.8\"/>\n  <text x=\"130\" y=\"55\" text-anchor=\"middle\" font-size=\"7\" fill=\"#c9a060\" font-weight=\"700\">secondary consumers</text>\n  <polygon points=\"80,64 60,84 200,84 180,64\" fill=\"rgba(122,171,207,.20)\" stroke=\"#7aabcf\" stroke-width=\"0.8\"/>\n  <text x=\"130\" y=\"77\" text-anchor=\"middle\" font-size=\"7\" fill=\"#7aabcf\" font-weight=\"700\">primary consumers (herbivores)</text>\n  <polygon points=\"60,86 40,102 220,102 200,86\" fill=\"rgba(122,176,96,.20)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/>\n  <text x=\"130\" y=\"98\" text-anchor=\"middle\" font-size=\"7\" fill=\"#7ab060\" font-weight=\"700\">producers (plants, algae)</text>\n  <text x=\"226\" y=\"46\" font-size=\"7\" fill=\"#c07070\">~10%</text>\n  <text x=\"226\" y=\"68\" font-size=\"7\" fill=\"#c9a060\">~10%</text>\n  <text x=\"226\" y=\"90\" font-size=\"7\" fill=\"#7aabcf\">~10%</text>\n </svg>",
    "caption": "Energy pyramid: only ~10% transfers up each trophic level",
    "steps": [
      "Memorize the major greenhouse gases (CO₂, CH₄, N₂O) and their relative warming potential.",
      "Distinguish primary (raw extraction) from secondary (processing) sources of pollution.",
      "Apply the 10% rule: energy or biomass at each trophic level is ~10% of the level below.",
      "For population: J-curve = unchecked exponential; S-curve = leveling at carrying capacity K.",
      "Track UNITS carefully: kWh, ppm, MJ — exam questions deliberately switch units to test conversion skills."
    ],
    "example": "A solar panel produces 5 kWh/day. Yearly: 5 × 365 = 1825 kWh. At $0.13/kWh, savings = $237/year. Watch the units!"
  },
  {
    "cat": "Computer Science",
    "tags": [
      "cs",
      "ap",
      "beginner"
    ],
    "title": "Computer Science Foundations — Algorithms, Boolean Logic & Binary",
    "theory": "",
    "reality": "Every search-engine query, GPS route, video stream, and password check uses an algorithm. Computers think in binary (0s and 1s) and decide using Boolean logic (true/false). Understanding these foundations is the entry to AP CS A and AP CSP.",
    "formula": "Binary: base-2 — each digit is 0 or 1.\n  1011₂ = 1·8 + 0·4 + 1·2 + 1·1 = 11₁₀\n\nBoolean operators:\n  AND  : true only if BOTH true\n  OR   : true if EITHER true\n  NOT  : flips true ↔ false\n\nAlgorithm: a finite step-by-step procedure to solve a problem.",
    "method": "For binary conversion, use the place-value method: write powers of 2 from right (1, 2, 4, 8, 16, 32...) and add up the values where there's a 1. For Boolean problems, build a truth table — list every possible input combination, then evaluate.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"14\" y=\"14\" width=\"118\" height=\"40\" rx=\"6\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"0.8\"/>\n  <text x=\"73\" y=\"28\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">BINARY → DECIMAL</text>\n  <text x=\"73\" y=\"44\" text-anchor=\"middle\" font-size=\"11\" fill=\"#9ecef0\" font-family=\"ui-monospace,monospace\">1011₂ = 11₁₀</text>\n  <rect x=\"138\" y=\"14\" width=\"108\" height=\"40\" rx=\"6\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"0.8\"/>\n  <text x=\"192\" y=\"28\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">TRUTH TABLE  AND</text>\n  <text x=\"158\" y=\"44\" font-size=\"9\" fill=\"#d4b87a\" font-family=\"ui-monospace,monospace\">T·T=T  T·F=F</text>\n  <text x=\"158\" y=\"52\" font-size=\"9\" fill=\"#d4b87a\" font-family=\"ui-monospace,monospace\">F·T=F  F·F=F</text>\n  <rect x=\"14\" y=\"62\" width=\"232\" height=\"44\" rx=\"6\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"0.8\"/>\n  <text x=\"22\" y=\"76\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">ALGORITHM (linear search)</text>\n  <text x=\"22\" y=\"89\" font-size=\"8\" fill=\"#a0c888\" font-family=\"ui-monospace,monospace\">for each item in list:</text>\n  <text x=\"32\" y=\"100\" font-size=\"8\" fill=\"#a0c888\" font-family=\"ui-monospace,monospace\">if item == target: return position</text>\n </svg>",
    "caption": "Binary digits, Boolean logic, and step-by-step algorithms",
    "steps": [
      "BINARY: write powers of 2 above each digit. Add powers where the digit is 1. (1011 = 8+0+2+1 = 11.)",
      "DECIMAL → BINARY: divide by 2 repeatedly, recording remainders bottom-to-top.",
      "BOOLEAN: build a truth table with every possible T/F combination of inputs.",
      "ALGORITHM: write the steps in plain English (pseudocode) before writing code. State input, output, and process.",
      "Trace through your algorithm with a small example to verify correctness — this is what the AP CS exam rewards."
    ],
    "example": "Linear search: to find 7 in [3, 5, 7, 9], check 3 (no), check 5 (no), check 7 (yes — return position 2). Worst case: n comparisons for n items."
  },
  {
    "cat": "Reading",
    "tags": [
      "reading",
      "accuplacer",
      "beginner"
    ],
    "title": "Reading: Author's Purpose & Synthesis",
    "theory": "",
    "reality": "Every passage is written for a reason — to inform, persuade, entertain, or describe. Recognizing the WHY behind a piece helps you predict what kinds of details and tones to expect, and how to compare two related passages.",
    "formula": "Four common purposes:\n  • INFORM        – facts, definitions, neutral tone\n  • PERSUADE      – evidence + a clear position aimed at the reader\n  • ENTERTAIN     – story, humor, vivid description\n  • DESCRIBE      – sensory detail, neutral or admiring tone\n\nSynthesis: how do TWO passages relate?\n  agree · disagree · same topic / different angle · cause / effect",
    "method": "For purpose: ask \"what does the author want me to do or feel after reading this?\" For synthesis: ask \"do these two passages take the same side, opposite sides, or just discuss different parts?\"",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"14\" y=\"14\" width=\"56\" height=\"40\" rx=\"6\" fill=\"rgba(122,171,207,.14)\" stroke=\"#7aabcf\" stroke-width=\"0.7\"/>\n  <text x=\"42\" y=\"30\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">INFORM</text>\n  <text x=\"42\" y=\"44\" text-anchor=\"middle\" font-size=\"8\" fill=\"#9ecef0\">facts</text>\n  <rect x=\"76\" y=\"14\" width=\"56\" height=\"40\" rx=\"6\" fill=\"rgba(201,160,96,.14)\" stroke=\"#c9a060\" stroke-width=\"0.7\"/>\n  <text x=\"104\" y=\"30\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">PERSUADE</text>\n  <text x=\"104\" y=\"44\" text-anchor=\"middle\" font-size=\"8\" fill=\"#d4b87a\">argue</text>\n  <rect x=\"138\" y=\"14\" width=\"56\" height=\"40\" rx=\"6\" fill=\"rgba(122,176,96,.14)\" stroke=\"#7ab060\" stroke-width=\"0.7\"/>\n  <text x=\"166\" y=\"30\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">ENTERTAIN</text>\n  <text x=\"166\" y=\"44\" text-anchor=\"middle\" font-size=\"8\" fill=\"#a0c888\">story</text>\n  <rect x=\"200\" y=\"14\" width=\"46\" height=\"40\" rx=\"6\" fill=\"rgba(160,96,192,.14)\" stroke=\"#a060c0\" stroke-width=\"0.7\"/>\n  <text x=\"223\" y=\"30\" text-anchor=\"middle\" font-size=\"9\" fill=\"#a060c0\" font-weight=\"700\">DESCRIBE</text>\n  <text x=\"223\" y=\"44\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c090e0\">paint</text>\n  <rect x=\"14\" y=\"64\" width=\"232\" height=\"38\" rx=\"6\" fill=\"rgba(122,176,96,.08)\" stroke=\"#7ab060\" stroke-width=\"0.6\"/>\n  <text x=\"22\" y=\"78\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">SYNTHESIS — two passages</text>\n  <text x=\"22\" y=\"91\" font-size=\"8\" fill=\"#a0c888\">Same side · Opposite sides · Different angles · Cause/effect</text>\n </svg>",
    "caption": "Match the purpose to the writing style. Compare angles for synthesis.",
    "steps": [
      "Identify TONE: neutral (inform/describe), positive or negative (persuade), playful (entertain).",
      "Look for evidence + a recommendation → persuade. A claim without evidence is usually entertain or describe.",
      "For synthesis questions, summarize EACH passage in one sentence first.",
      "Compare those sentences: do they support, contradict, or simply address different aspects?",
      "Choose the answer that best matches both your tone read and your one-sentence summaries."
    ],
    "example": "Passage cites studies and recommends a policy → PERSUADE. Two passages on remote work, one praising productivity gains and one warning about isolation → SAME TOPIC, DIFFERENT ANGLES."
  },
  {
    "cat": "Writing",
    "tags": [
      "writing",
      "accuplacer",
      "beginner"
    ],
    "title": "Writing: Modifiers, Parallelism & Conciseness",
    "theory": "",
    "reality": "\"Walking to school, the deer surprised me\" — wait, was the DEER walking to school? A misplaced modifier turns sentences silly or confusing. Parallelism makes lists smooth. Conciseness keeps writing punchy. All three are top ACCUPLACER targets.",
    "formula": "MODIFIER RULE: a descriptive phrase must be next to the word it describes.\n  ✗ \"Walking home, the rain started.\" (rain wasn't walking)\n  ✓ \"Walking home, I noticed the rain start.\"\n\nPARALLELISM: items in a list share the same form.\n  ✗ \"She likes hiking, swimming, and to bike.\"\n  ✓ \"She likes hiking, swimming, and biking.\"\n\nCONCISENESS: cut filler — \"in order to\" → \"to\"; \"due to the fact that\" → \"because\"; \"at this point in time\" → \"now\".",
    "method": "Misplaced modifier test: after the introductory phrase, the very next subject must be the one doing the action. Parallelism test: cover the items and ask \"do they all answer the same grammar question?\"",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"14\" y=\"14\" width=\"232\" height=\"22\" rx=\"5\" fill=\"rgba(192,112,112,.10)\" stroke=\"#c07070\" stroke-width=\"0.7\"/>\n  <text x=\"22\" y=\"28\" font-size=\"9\" fill=\"#c07070\" font-weight=\"700\">MODIFIER ✗  \"Walking home, the rain started.\"</text>\n  <rect x=\"14\" y=\"38\" width=\"232\" height=\"22\" rx=\"5\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"0.7\"/>\n  <text x=\"22\" y=\"52\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">FIXED ✓  \"Walking home, I noticed the rain.\"</text>\n  <rect x=\"14\" y=\"62\" width=\"115\" height=\"40\" rx=\"5\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"0.7\"/>\n  <text x=\"71\" y=\"76\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\" font-weight=\"700\">PARALLELISM</text>\n  <text x=\"71\" y=\"88\" text-anchor=\"middle\" font-size=\"8\" fill=\"#9ecef0\">hiking · swimming</text>\n  <text x=\"71\" y=\"98\" text-anchor=\"middle\" font-size=\"8\" fill=\"#9ecef0\">biking  (-ing)</text>\n  <rect x=\"135\" y=\"62\" width=\"111\" height=\"40\" rx=\"5\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"0.7\"/>\n  <text x=\"190\" y=\"76\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\" font-weight=\"700\">CONCISENESS</text>\n  <text x=\"190\" y=\"88\" text-anchor=\"middle\" font-size=\"8\" fill=\"#d4b87a\">\"in order to\" → \"to\"</text>\n  <text x=\"190\" y=\"98\" text-anchor=\"middle\" font-size=\"8\" fill=\"#d4b87a\">\"due to the fact\" → \"because\"</text>\n </svg>",
    "caption": "Modifiers next to what they modify. Parallel form. Cut the filler.",
    "steps": [
      "MODIFIER: after a phrase like \"Walking home, ___\", the FIRST word after the comma must be the one doing the walking.",
      "PARALLELISM: in a list, every item must answer the same question (all gerunds, all infinitives, all nouns).",
      "CONCISENESS: hunt for filler. \"Due to the fact that\" = \"because\". \"At this point in time\" = \"now\". \"Despite the fact that\" = \"although\".",
      "Prefer the active voice. \"The cat chased the bird\" beats \"The bird was chased by the cat\".",
      "Read the sentence aloud — if it sounds awkward, fix the structure rather than adding more words."
    ],
    "example": "Wrong: \"She enjoys to hike, swimming, and to bike.\" Fix: \"She enjoys hiking, swimming, and biking.\" All gerunds — parallel."
  },
  {
    "cat": "Derivatives & Limits",
    "tags": [
      "calculus",
      "ap",
      "bc"
    ],
    "title": "Taylor & Maclaurin Series — Approximating Functions",
    "theory": "",
    "reality": "Calculators don't magically know sin(0.7) or eˣ. They use Taylor series — polynomial approximations that get more accurate the more terms you keep. This is how computers compute transcendental functions from arithmetic alone.",
    "formula": "Taylor series of f around a:\n  f(x) ≈ f(a) + f'(a)(x−a) + f''(a)/2!·(x−a)² + f'''(a)/3!·(x−a)³ + ...\n\nMaclaurin series (a = 0):\n  eˣ     = 1 + x + x²/2! + x³/3! + ...\n  sin(x) = x − x³/3! + x⁵/5! − ...\n  cos(x) = 1 − x²/2! + x⁴/4! − ...\n  ln(1+x)= x − x²/2 + x³/3 − ...   (|x|<1)",
    "method": "Memorize the four core Maclaurin series above — they appear in nearly every AP Calc BC series question. Differentiate or integrate them term-by-term to get others (e.g., cos = derivative of sin, with a flipped sign).",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"20\" y1=\"60\" x2=\"240\" y2=\"60\" stroke=\"#5e5e5e\" stroke-width=\"0.5\"/>\n  <line x1=\"130\" y1=\"14\" x2=\"130\" y2=\"100\" stroke=\"#5e5e5e\" stroke-width=\"0.5\"/>\n  <path d=\"M 20,60 Q 50,20 80,40 T 130,60 T 180,80 T 240,60\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"1.4\"/>\n  <path d=\"M 20,60 L 240,60\" fill=\"none\" stroke=\"#c9a060\" stroke-width=\"0.7\" stroke-dasharray=\"2,2\"/>\n  <path d=\"M 20,80 Q 130,-20 240,80\" fill=\"none\" stroke=\"#7ab060\" stroke-width=\"0.9\" stroke-dasharray=\"3,2\"/>\n  <text x=\"244\" y=\"58\" font-size=\"8\" fill=\"#5e5e5e\">x</text>\n  <text x=\"20\" y=\"22\" font-size=\"7\" fill=\"#7aabcf\">sin(x)</text>\n  <text x=\"100\" y=\"22\" font-size=\"7\" fill=\"#7ab060\">2nd order Taylor</text>\n  <text x=\"180\" y=\"78\" font-size=\"7\" fill=\"#c9a060\">linear (1st)</text>\n  <text x=\"14\" y=\"106\" font-size=\"8\" fill=\"#a0c888\" font-weight=\"700\">More terms = better approximation near x = a</text>\n </svg>",
    "caption": "Approximate any smooth function with a polynomial — better near the center",
    "steps": [
      "Identify the function f(x) and the center point a (a = 0 for Maclaurin).",
      "Compute f(a), f'(a), f''(a), ... up to the order you need.",
      "Plug into the Taylor formula: f(a) + f'(a)(x−a) + f''(a)/2! · (x−a)² + ...",
      "For BC exam shortcuts: recognize the four standard series for eˣ, sin x, cos x, and ln(1+x).",
      "For convergence: ratio test. The series converges where |aₙ₊₁/aₙ| < 1."
    ],
    "example": "Find the first 3 nonzero terms of sin(x) at 0. Memorized: x − x³/3! + x⁵/5! = x − x³/6 + x⁵/120."
  },
  {
    "cat": "Biology",
    "tags": [
      "biology",
      "genetics",
      "clep",
      "ap"
    ],
    "title": "Genetics & Photosynthesis — Punnett Squares & Energy Capture",
    "theory": "",
    "reality": "Why do you have your mom's eyes but your dad's height? How does a plant turn sunlight into food? Genetics and photosynthesis are how biological information and biological energy get passed around.",
    "formula": "PUNNETT SQUARE — predict offspring genotype:\n  Aa × Aa →  AA : Aa : aA : aa = 1 : 1 : 1 : 1\n  Phenotypes: 3 dominant : 1 recessive\n\nPHOTOSYNTHESIS:\n  6 CO₂ + 6 H₂O  +  light  →  C₆H₁₂O₆ + 6 O₂\n  Inputs: water, CO₂, sunlight\n  Outputs: glucose (energy storage) + oxygen",
    "method": "Capital letter = dominant allele; lowercase = recessive. To show recessive trait you need TWO recessive alleles (aa). For photosynthesis: light reactions split water; Calvin cycle fixes carbon — two stages, one combined output.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"14\" y=\"20\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">Punnett: Aa × Aa</text>\n  <rect x=\"14\" y=\"26\" width=\"100\" height=\"80\" fill=\"rgba(122,171,207,.06)\" stroke=\"#7aabcf\" stroke-width=\"0.6\"/>\n  <line x1=\"64\" y1=\"26\" x2=\"64\" y2=\"106\" stroke=\"#7aabcf\" stroke-width=\"0.4\"/>\n  <line x1=\"14\" y1=\"66\" x2=\"114\" y2=\"66\" stroke=\"#7aabcf\" stroke-width=\"0.4\"/>\n  <text x=\"40\" y=\"22\" text-anchor=\"middle\" font-size=\"9\" fill=\"#9ecef0\">A</text>\n  <text x=\"89\" y=\"22\" text-anchor=\"middle\" font-size=\"9\" fill=\"#9ecef0\">a</text>\n  <text x=\"9\" y=\"48\" font-size=\"9\" fill=\"#9ecef0\">A</text>\n  <text x=\"9\" y=\"88\" font-size=\"9\" fill=\"#9ecef0\">a</text>\n  <text x=\"40\" y=\"50\" text-anchor=\"middle\" font-size=\"10\" fill=\"#a0c888\" font-weight=\"700\">AA</text>\n  <text x=\"89\" y=\"50\" text-anchor=\"middle\" font-size=\"10\" fill=\"#d4b87a\">Aa</text>\n  <text x=\"40\" y=\"90\" text-anchor=\"middle\" font-size=\"10\" fill=\"#d4b87a\">Aa</text>\n  <text x=\"89\" y=\"90\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c07070\" font-weight=\"700\">aa</text>\n  <rect x=\"124\" y=\"26\" width=\"122\" height=\"38\" rx=\"6\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"0.6\"/>\n  <text x=\"185\" y=\"40\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">PHOTOSYNTHESIS</text>\n  <text x=\"185\" y=\"54\" text-anchor=\"middle\" font-size=\"8\" fill=\"#a0c888\">6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂</text>\n  <rect x=\"124\" y=\"68\" width=\"122\" height=\"38\" rx=\"6\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"0.6\"/>\n  <text x=\"185\" y=\"82\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">RATIOS</text>\n  <text x=\"185\" y=\"96\" text-anchor=\"middle\" font-size=\"8\" fill=\"#d4b87a\">Genotype 1:2:1 · Phenotype 3:1</text>\n </svg>",
    "caption": "Genotype ratio 1:2:1 from heterozygote cross. Photo turns CO₂+H₂O into sugar.",
    "steps": [
      "Write parent genotypes. Draw a 2×2 grid with parent 1 alleles on top, parent 2 on the side.",
      "Fill each cell by combining the row + column letter, capital first.",
      "Count results: AA, Aa, aa. Phenotype groups: anything with ≥1 capital A shows the dominant trait.",
      "Standard heterozygote × heterozygote outcome: 1 AA : 2 Aa : 1 aa (genotype) and 3 dominant : 1 recessive (phenotype).",
      "Photosynthesis: balanced equation needs 6 of each on the carbon/water/oxygen side. Plants store the captured energy in glucose bonds."
    ],
    "example": "Cross Tt × Tt for tall (T) vs short (t) pea plants. Punnett: TT, Tt, tT, tt → 3 tall : 1 short. P(short offspring) = 1/4."
  },
  {
    "cat": "Everyday Math",
    "tags": [
      "arithmetic",
      "daily",
      "finance"
    ],
    "title": "Number Operations, Fractions & Percents",
    "theory": "",
    "reality": "If a pizza has 8 slices and you eat 3, you ate 3/8 of it — that is 37.5%. Stores use percents for sales, cooks use fractions in recipes, and banks use decimals for money. You use this math every single day.",
    "formula": "PEMDAS: ( ) → ^ → × ÷ → + −\na/b + c/d = (ad + bc) / bd\nPercent: part/whole × 100\nPercent change: (new−old)/old × 100\nNew = original × (1 ± rate)",
    "method": "Place-value decomposition: break numbers into tens and ones, multiply each part separately, then sum the partial products.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"10\" y=\"14\" width=\"110\" height=\"38\" rx=\"8\" fill=\"rgba(90,176,216,.12)\" stroke=\"#5ab0d8\" stroke-width=\"1\"/>\n  <text x=\"65\" y=\"29\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5ab0d8\" font-weight=\"700\">FRACTION</text>\n  <text x=\"65\" y=\"42\" text-anchor=\"middle\" font-size=\"9\" fill=\"#9ecef0\">2/3 + 1/4 = 8/12 + 3/12 = 11/12</text>\n  <text x=\"65\" y=\"55\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\">Common denominator: ×LCD</text>\n  <rect x=\"140\" y=\"14\" width=\"112\" height=\"38\" rx=\"8\" fill=\"rgba(122,176,96,.12)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n  <text x=\"196\" y=\"29\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">PERCENT</text>\n  <text x=\"196\" y=\"42\" text-anchor=\"middle\" font-size=\"9\" fill=\"#a0c888\">18 of 60 = 18/60 × 100 = 30%</text>\n  <text x=\"196\" y=\"55\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7ab060\">part ÷ whole → decimal → ×100</text>\n  <rect x=\"10\" y=\"66\" width=\"242\" height=\"30\" rx=\"6\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n  <text x=\"131\" y=\"78\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\" font-weight=\"700\">CHUNKING (48×25): 50×25=1250, then −2×25=50, result=1200</text>\n  <text x=\"131\" y=\"90\" text-anchor=\"middle\" font-size=\"8\" fill=\"#d4b87a\">Round up → multiply easy → subtract excess</text>\n </svg>",
    "caption": "Fractions share a denominator; percents are parts per 100; chunking splits large multiplications.",
    "steps": [
      "Estimate the answer first to catch errors.",
      "For fractions: find the LCD, convert, then add/subtract numerators.",
      "For percent: write part/whole as a decimal then multiply by 100.",
      "For percent change: (new − old) / old — a negative means decrease.",
      "Use chunking for mental multiplication: round one factor to a nearby easy number, multiply, then correct."
    ],
    "example": "Tax on a $48 item at 25%: 25% = 0.25. $48 × 0.25 = $12.00. (Chunk: 50×0.25=$12.50, minus 2×0.25=$0.50 → $12.00 ✓)"
  },
  {
    "cat": "Numbers & Operations",
    "tags": [
      "arithmetic",
      "chemistry",
      "physics",
      "engineering"
    ],
    "title": "Scientific Notation, Sig Figs & SI Prefixes",
    "theory": "",
    "reality": "The distance from Earth to the Sun is 150,000,000,000 meters — way too long to write! Scientists shrink it to 1.5 x 10^11 m. Your phone chip is about 5 nanometers wide. Scientific notation makes huge and tiny numbers easy to handle.",
    "formula": "N = a × 10ⁿ  (1 ≤ a < 10)\n10⁻³ = milli (m)  10⁻⁶ = micro (μ)\n10⁻⁹ = nano (n)  10³ = kilo (k)\n10⁶ = mega (M)  10⁹ = giga (G)\n% error = |measured − accepted| / accepted × 100",
    "method": "Sig-fig rule: result has as many sig figs as the least-precise input. Multiplication/division: match fewest sig figs. Addition/subtraction: match fewest decimal places.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"130\" y=\"18\" text-anchor=\"middle\" font-size=\"10\" fill=\"#5ab0d8\" font-weight=\"700\">6.022 × 10²³</text>\n  <line x1=\"30\" y1=\"28\" x2=\"90\" y2=\"28\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <line x1=\"100\" y1=\"28\" x2=\"220\" y2=\"28\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n  <text x=\"60\" y=\"40\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7aabcf\">coefficient a</text>\n  <text x=\"160\" y=\"40\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#c9a060\">exponent = decimal moves</text>\n  <rect x=\"6\" y=\"52\" width=\"58\" height=\"44\" rx=\"6\" fill=\"rgba(90,176,216,.12)\" stroke=\"#5ab0d8\" stroke-width=\"1\"/>\n  <text x=\"35\" y=\"66\" text-anchor=\"middle\" font-size=\"8\" fill=\"#5ab0d8\">nano</text>\n  <text x=\"35\" y=\"78\" text-anchor=\"middle\" font-size=\"10\" fill=\"#9ecef0\" font-weight=\"700\">10⁻⁹</text>\n  <text x=\"35\" y=\"90\" text-anchor=\"middle\" font-size=\"7\" fill=\"#7aabcf\">nm, ns</text>\n  <rect x=\"72\" y=\"52\" width=\"50\" height=\"44\" rx=\"6\" fill=\"rgba(90,176,216,.12)\" stroke=\"#5ab0d8\" stroke-width=\"1\"/>\n  <text x=\"97\" y=\"66\" text-anchor=\"middle\" font-size=\"8\" fill=\"#5ab0d8\">micro</text>\n  <text x=\"97\" y=\"78\" text-anchor=\"middle\" font-size=\"10\" fill=\"#9ecef0\" font-weight=\"700\">10⁻⁶</text>\n  <text x=\"97\" y=\"90\" text-anchor=\"middle\" font-size=\"7\" fill=\"#7aabcf\">μm, μs</text>\n  <rect x=\"130\" y=\"52\" width=\"50\" height=\"44\" rx=\"6\" fill=\"rgba(122,176,96,.12)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n  <text x=\"155\" y=\"66\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7ab060\">kilo</text>\n  <text x=\"155\" y=\"78\" text-anchor=\"middle\" font-size=\"10\" fill=\"#a0c888\" font-weight=\"700\">10³</text>\n  <text x=\"155\" y=\"90\" text-anchor=\"middle\" font-size=\"7\" fill=\"#7ab060\">km, kg</text>\n  <rect x=\"188\" y=\"52\" width=\"66\" height=\"44\" rx=\"6\" fill=\"rgba(201,160,96,.12)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n  <text x=\"221\" y=\"66\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">giga</text>\n  <text x=\"221\" y=\"78\" text-anchor=\"middle\" font-size=\"10\" fill=\"#d4b87a\" font-weight=\"700\">10⁹</text>\n  <text x=\"221\" y=\"90\" text-anchor=\"middle\" font-size=\"7\" fill=\"#c9a060\">GHz, GB</text>\n </svg>",
    "caption": "Move decimal until one digit is left of point. Count moves = exponent. Prefix scales the unit.",
    "steps": [
      "Move the decimal point so exactly one non-zero digit sits left of it.",
      "Count moves: right is negative exponent, left is positive.",
      "For multiply/divide in sci notation: multiply coefficients, add exponents.",
      "Round final answer to the same number of sig figs as the least precise given value.",
      "Use prefix table to swap between SI units without converting the full power."
    ],
    "example": "Avogadro: 602,200,000,000,000,000,000,000 = 6.022 × 10²³. Nanometer: 1 nm = 1 × 10⁻⁹ m. Error: measured=9.81, accepted=9.80 → |9.81−9.80|/9.80×100 = 0.10%"
  },
  {
    "cat": "Algebra",
    "tags": [
      "algebra",
      "math"
    ],
    "title": "Linear Equations, Inequalities & Systems",
    "theory": "",
    "reality": "A phone plan costs $30 per month plus $0.10 per text. Write it as C = 0.10t + 30 and predict any bill instantly! Companies set prices and engineers design roads using these same equations every day.",
    "formula": "ax + b = c  →  x = (c − b) / a\ny = mx + b  (slope-intercept)\nax + by = e\ncx + dy = f  (system)\n← flip inequality when × or ÷ by negative",
    "method": "Elimination: multiply rows so one variable cancels. Substitution: isolate one variable, plug into the other equation. (Research: students who choose the method consciously outperform those who always use the same one.)",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"14\" y1=\"108\" x2=\"246\" y2=\"12\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <line x1=\"14\" y1=\"30\" x2=\"246\" y2=\"100\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <circle cx=\"140\" cy=\"62\" r=\"5\" fill=\"#7ab060\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n  <text x=\"148\" y=\"58\" font-size=\"8.5\" fill=\"#7ab060\" font-weight=\"700\">Solution (x,y)</text>\n  <text x=\"20\" y=\"96\" font-size=\"8\" fill=\"#7aabcf\">Line 1: y = mx+b</text>\n  <text x=\"140\" y=\"96\" font-size=\"8\" fill=\"#c9a060\">Line 2: y = cx+d</text>\n  <path d=\"M20 8 H80 M60 4 L80 8 L60 12\" fill=\"none\" stroke=\"#5a5a5a\" stroke-width=\"1\"/>\n  <text x=\"10\" y=\"15\" font-size=\"7\" fill=\"#8a8a8a\">y-axis</text>\n  <path d=\"M252 108 V70 M248 76 L252 70 L256 76\" fill=\"none\" stroke=\"#5a5a5a\" stroke-width=\"1\"/>\n  <text x=\"238\" y=\"120\" font-size=\"7\" fill=\"#8a8a8a\">x-axis</text>\n  <line x1=\"14\" y1=\"108\" x2=\"252\" y2=\"108\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"14\" y1=\"8\" x2=\"14\" y2=\"108\" stroke=\"#444\" stroke-width=\"1\"/>\n </svg>",
    "caption": "Solution is the intersection point — where both equations are true simultaneously.",
    "steps": [
      "Distribute and clear all parentheses.",
      "Move all variable terms to one side and constants to the other.",
      "For systems: choose elimination when coefficients align easily, substitution when a variable has coefficient 1.",
      "After elimination, substitute the found value back into either original equation.",
      "Check: plug both values into BOTH original equations to confirm."
    ],
    "example": "Solve: x + y = 10 and x − y = 2. Add equations: 2x = 12 → x = 6. Then 6+y=10 → y=4. Check: 6+4=10 ✓ and 6−4=2 ✓"
  },
  {
    "cat": "Algebra",
    "tags": [
      "algebra",
      "physics",
      "finance"
    ],
    "title": "Quadratics, Factoring & the Quadratic Formula",
    "theory": "",
    "reality": "When you throw a ball, it follows a curved path called a parabola — that is a quadratic! Engineers design roller coasters, bridges, and satellite dishes using this curve. Figuring out when a launched rocket hits the ground uses the quadratic formula.",
    "formula": "ax² + bx + c = 0\nx = (−b ± √(b² − 4ac)) / 2a\nVertex: x = −b / 2a\nDiff of squares: a² − b² = (a−b)(a+b)\nPerfect sq: (a+b)² = a² + 2ab + b²",
    "method": "AC method for trinomials: multiply a×c, find factor pair that sums to b, split middle term, factor by grouping. Proven faster than trial-and-error for ax²+bx+c with a≠1.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"14\" y1=\"108\" x2=\"246\" y2=\"108\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"130\" y1=\"12\" x2=\"130\" y2=\"112\" stroke=\"#444\" stroke-width=\"1\"/>\n  <path d=\"M20 108 Q130 -10 240 108\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"2.5\"/>\n  <circle cx=\"60\" cy=\"108\" r=\"4\" fill=\"#c07070\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n  <circle cx=\"200\" cy=\"108\" r=\"4\" fill=\"#c07070\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n  <circle cx=\"130\" cy=\"49\" r=\"4\" fill=\"#c9a060\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n  <text x=\"50\" y=\"120\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c07070\">x₁ root</text>\n  <text x=\"200\" y=\"120\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c07070\">x₂ root</text>\n  <text x=\"145\" y=\"47\" font-size=\"8\" fill=\"#c9a060\">vertex (−b/2a, min)</text>\n  <text x=\"10\" y=\"20\" font-size=\"8\" fill=\"#7aabcf\">y = ax²+bx+c</text>\n  <text x=\"160\" y=\"20\" font-size=\"7.5\" fill=\"#8a8a8a\">discriminant b²−4ac:</text>\n  <text x=\"160\" y=\"32\" font-size=\"7.5\" fill=\"#7ab060\">&gt;0 two roots</text>\n  <text x=\"160\" y=\"44\" font-size=\"7.5\" fill=\"#c9a060\">=0 one root</text>\n  <text x=\"160\" y=\"56\" font-size=\"7.5\" fill=\"#c07070\">&lt;0 no real roots</text>\n </svg>",
    "caption": "Parabola: roots = x-intercepts; vertex = axis of symmetry; discriminant tells number of solutions.",
    "steps": [
      "Always try to factor first — faster when it works.",
      "Check for special patterns: difference of squares, perfect square trinomial.",
      "AC method: compute a×c, find factors of ac that sum to b, split bx, then group.",
      "If factoring fails, use quadratic formula — works for any quadratic.",
      "Interpret: x values are x-intercepts; vertex is max/min height, revenue, or area."
    ],
    "example": "2x²+7x+3=0. AC: 2×3=6, factors of 6 that sum to 7 → 1 and 6. Split: 2x²+x+6x+3 = x(2x+1)+3(2x+1) = (x+3)(2x+1). Roots: x=−3, x=−1/2."
  },
  {
    "cat": "Algebra",
    "tags": [
      "algebra",
      "finance",
      "chemistry",
      "data"
    ],
    "title": "Functions, Exponents, Logs & Sequences",
    "theory": "",
    "reality": "Bacteria double every hour — that is exponential growth. Start with 1 bacterium, and after 10 hours you have over 1,000. Doctors use this to predict infections. Banks use it for compound interest. Your phone battery draining follows these same patterns.",
    "formula": "f(x): one input → one output\naᵐ · aⁿ = aᵐ⁺ⁿ    (aᵐ)ⁿ = aᵐⁿ\nlog_b(x)=y  ↔  bʸ = x\nln(x) = log_e(x)\nArithmetic seq: aₙ = a₁ + (n−1)d\nGeometric seq: aₙ = a₁ · rⁿ⁻¹\nExponential: A = Peʳᵗ  or  A = P(1+r)ⁿ",
    "method": "To solve exponential equations: take log of both sides. To solve log equations: exponentiate both sides. (Inverse function approach — matches standard CLEP/AP solution method.)",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"14\" y1=\"100\" x2=\"246\" y2=\"100\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"14\" y1=\"8\" x2=\"14\" y2=\"104\" stroke=\"#444\" stroke-width=\"1\"/>\n  <path d=\"M20 95 Q60 92 90 80 Q130 62 170 32 Q200 12 240 8\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"2\" opacity=\".9\"/>\n  <path d=\"M20 8 Q60 32 90 50 Q130 68 170 80 Q200 90 240 95\" fill=\"none\" stroke=\"#c9a060\" stroke-width=\"2\" opacity=\".9\"/>\n  <text x=\"200\" y=\"24\" font-size=\"8.5\" fill=\"#7aabcf\" font-weight=\"700\">y = eˣ</text>\n  <text x=\"188\" y=\"88\" font-size=\"8.5\" fill=\"#c9a060\" font-weight=\"700\">y = ln(x)</text>\n  <path d=\"M20 20 L240 100\" stroke=\"#555\" stroke-width=\"1\" stroke-dasharray=\"4,3\"/>\n  <text x=\"90\" y=\"38\" font-size=\"7.5\" fill=\"#888\">y = x (mirror line)</text>\n  <text x=\"90\" y=\"108\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\">eˣ and ln(x) are inverses — reflect over y=x</text>\n </svg>",
    "caption": "Exponential and log functions are inverses of each other — solving one uses the other.",
    "steps": [
      "Identify input variable and output — check if the function is one-to-one.",
      "For exponents: use product/quotient/power rules to simplify before solving.",
      "To isolate an exponent, take the log of both sides (log base matches the base).",
      "To isolate a log, exponentiate both sides (base raised to both sides).",
      "For sequences: determine if each step adds (arithmetic) or multiplies (geometric), then write the general term."
    ],
    "example": "Solve 3^x = 81. Take log₃: x = log₃(81) = 4 (since 3⁴=81). Or: compound interest $1000 at 5% for 3 years: A=1000(1.05)³ = $1157.63"
  },
  {
    "cat": "Coordinate Geometry",
    "tags": [
      "geometry",
      "math",
      "engineering"
    ],
    "title": "Lines, Circles, Distance & Midpoint",
    "theory": "",
    "reality": "GPS finds your exact location by measuring distances from satellites overhead. Architects use coordinate geometry to place every wall and window in a building. The midpoint formula finds the exact center between any two locations on a map.",
    "formula": "Slope: m = (y₂−y₁)/(x₂−x₁)\nDistance: d = √((x₂−x₁)²+(y₂−y₁)²)\nMidpoint: M = ((x₁+x₂)/2, (y₁+y₂)/2)\nCircle: (x−h)²+(y−k)² = r²\nSlope-intercept: y = mx+b\nPoint-slope: y−y₁ = m(x−x₁)",
    "method": "Standard form reveals center and radius immediately by completing the square — convert x²+y²+Dx+Ey+F=0 to standard form to read off (h,k) and r directly.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"14\" y1=\"108\" x2=\"246\" y2=\"108\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"130\" y1=\"10\" x2=\"130\" y2=\"112\" stroke=\"#444\" stroke-width=\"1\"/>\n  <circle cx=\"130\" cy=\"60\" r=\"40\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <circle cx=\"130\" cy=\"60\" r=\"2.5\" fill=\"#7aabcf\"/>\n  <line x1=\"130\" y1=\"60\" x2=\"162\" y2=\"40\" stroke=\"#c9a060\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <text x=\"136\" y=\"56\" font-size=\"8\" fill=\"#c9a060\">r</text>\n  <text x=\"124\" y=\"70\" font-size=\"8\" fill=\"#7aabcf\">(h,k)</text>\n  <circle cx=\"74\" cy=\"90\" r=\"3\" fill=\"#c07070\"/>\n  <circle cx=\"188\" cy=\"38\" r=\"3\" fill=\"#c07070\"/>\n  <line x1=\"74\" y1=\"90\" x2=\"188\" y2=\"38\" stroke=\"#7ab060\" stroke-width=\"1.5\"/>\n  <text x=\"118\" y=\"78\" font-size=\"8\" fill=\"#7ab060\">d=√(Δx²+Δy²)</text>\n </svg>",
    "caption": "Circle centered at (h,k) with radius r. Distance formula from Pythagorean theorem.",
    "steps": [
      "Plot the given points or center to set up the geometry visually.",
      "Use slope formula to find steepness; slope of perpendicular = −1/m.",
      "Distance formula comes from the Pythagorean theorem applied to Δx and Δy.",
      "For a circle from general form, complete the square in x and y separately.",
      "Midpoint is the average of the x-coordinates and the average of the y-coordinates."
    ],
    "example": "Circle: x²+y²−6x+4y−3=0. Complete square: (x²−6x+9)+(y²+4y+4)=3+9+4. So (x−3)²+(y+2)²=16. Center (3,−2), radius 4."
  },
  {
    "cat": "Coordinate Geometry",
    "tags": [
      "geometry",
      "physics",
      "engineering"
    ],
    "title": "Conics: Parabola, Ellipse & Hyperbola",
    "theory": "",
    "reality": "Satellite dishes are parabolas that focus all signals to one point. Planets orbit the Sun in ellipses, not circles. Whispering galleries in museums are ellipse-shaped so a whisper at one end is clearly heard at the other — that is geometry in action.",
    "formula": "Parabola: y = a(x−h)²+k  or  x = a(y−k)²+h\nEllipse: (x−h)²/a²+(y−k)²/b²=1\nHyperbola: (x−h)²/a²−(y−k)²/b²=1\nFocus distance: c²=a²−b² (ellipse)\nc²=a²+b² (hyperbola)",
    "method": "Complete the square on both variables to reach standard form. The shape is identified by sign: same-sign denominators = ellipse; opposite signs = hyperbola; one variable linear = parabola.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M20 108 Q65 -8 110 108\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <text x=\"65\" y=\"16\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\">Parabola</text>\n  <ellipse cx=\"178\" cy=\"60\" rx=\"35\" ry=\"48\" fill=\"none\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <text x=\"178\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">Ellipse</text>\n  <ellipse cx=\"178\" cy=\"60\" rx=\"10\" ry=\"48\" fill=\"none\" stroke=\"#c9a060\" stroke-width=\"1\" stroke-dasharray=\"3,2\" opacity=\".5\"/>\n  <path d=\"M200 12 Q248 60 200 108 M156 12 Q108 60 156 108\" fill=\"none\" stroke=\"#c07070\" stroke-width=\"0\" opacity=\"0\"/>\n  <text x=\"130\" y=\"108\" text-anchor=\"middle\" font-size=\"8\" fill=\"#8a8a8a\">vertex · focus · directrix · center · foci</text>\n </svg>",
    "caption": "Parabola: one focus. Ellipse: two foci, sum of distances constant. Hyperbola: two foci, difference constant.",
    "steps": [
      "Complete the square in both x and y to reach standard form.",
      "Identify the shape: linear variable → parabola; same sign fractions → ellipse; opposite → hyperbola.",
      "Read center/vertex, a, b, and compute c for the foci.",
      "Sketch axes of symmetry and plot the key points (vertices, co-vertices, foci).",
      "For AP/CLEP: know that a > b > 0 for ellipse; a is the transverse semi-axis for hyperbola."
    ],
    "example": "9x²+4y²=36 → x²/4+y²/9=1. Ellipse: a=3 (y-axis), b=2 (x-axis), c=√(9−4)=√5. Foci at (0,±√5)."
  },
  {
    "cat": "Geometry",
    "tags": [
      "geometry",
      "daily",
      "engineering"
    ],
    "title": "Plane Geometry: Angles, Area & Similarity",
    "theory": "",
    "reality": "A carpenter cuts wood at exact angles. A painter calculates wall area to buy the right amount of paint. Architects use similarity to scale blueprints up to real buildings. Geometry is the math of everything you can see, build, and measure.",
    "formula": "Triangle area: A = bh/2\nCircle: C = 2πr,  A = πr²\nParallelogram: A = bh\nTrapezoid: A = (b₁+b₂)h/2\nPythagorean: a²+b²=c²\nSimilar: matching sides proportional",
    "method": "Polya diagram strategy: label every known measurement on the figure before writing any equation. Unknown angles are found by adding/subtracting known angles from 180° or 360°.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"130,12 30,106 230,106\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <line x1=\"130\" y1=\"12\" x2=\"130\" y2=\"106\" stroke=\"#c9a060\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <text x=\"134\" y=\"62\" font-size=\"8\" fill=\"#c9a060\">h</text>\n  <text x=\"70\" y=\"118\" font-size=\"8\" fill=\"#8a8a8a\">b</text>\n  <text x=\"22\" y=\"96\" font-size=\"8.5\" fill=\"#c07070\">A</text>\n  <text x=\"224\" y=\"96\" font-size=\"8.5\" fill=\"#c07070\">B</text>\n  <text x=\"126\" y=\"10\" font-size=\"8.5\" fill=\"#c07070\">C</text>\n  <text x=\"3\" y=\"118\" font-size=\"8\" fill=\"#7aabcf\">A = ½bh</text>\n  <circle cx=\"210\" cy=\"50\" r=\"36\" fill=\"rgba(201,160,96,.08)\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <text x=\"210\" y=\"53\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">A=πr²</text>\n  <text x=\"210\" y=\"66\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">C=2πr</text>\n </svg>",
    "caption": "Triangle area = ½ base × height. Circle uses radius in both area and circumference.",
    "steps": [
      "Label the shape — mark base, height, and all known sides and angles.",
      "Use complementary (sum 90°), supplementary (sum 180°), and vertical angles (equal) to find missing angles.",
      "For similar triangles: set up a proportion of corresponding sides and solve.",
      "Apply the correct area formula — height must be perpendicular to the base.",
      "For composite figures, split into simpler shapes, find each area, then add or subtract."
    ],
    "example": "Triangle with base 8 cm and height 5 cm: A = ½(8)(5) = 20 cm². Circle with radius 7: A = π(49) ≈ 153.94 cm²."
  },
  {
    "cat": "Geometry",
    "tags": [
      "geometry",
      "chemistry",
      "engineering",
      "daily"
    ],
    "title": "Solid Geometry: Volume, Surface Area & Density",
    "theory": "",
    "reality": "How much water fits in a swimming pool? How much cardboard makes a cereal box? Shipping companies calculate volume to pack containers. Doctors measure bone density to check for osteoporosis. These calculations happen in construction and medicine every day.",
    "formula": "Prism/Cylinder V = A_base × h\nCylinder V = πr²h,  SA = 2πr²+2πrh\nCone V = ⅓πr²h\nSphere V = (4/3)πr³,  SA = 4πr²\nDensity ρ = m/V\nPyramid V = ⅓A_base × h",
    "method": "Composite solid strategy: decompose complex 3D objects into prisms, cylinders, cones, and hemispheres. Add or subtract volumes depending on the shape (e.g., hollow cylinders).",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <ellipse cx=\"68\" cy=\"94\" rx=\"40\" ry=\"10\" fill=\"rgba(122,171,207,.15)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <line x1=\"28\" y1=\"94\" x2=\"28\" y2=\"50\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <line x1=\"108\" y1=\"94\" x2=\"108\" y2=\"50\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"68\" cy=\"50\" rx=\"40\" ry=\"10\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <text x=\"68\" y=\"74\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\">V=πr²h</text>\n  <circle cx=\"180\" cy=\"62\" r=\"44\" fill=\"rgba(201,160,96,.08)\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <text x=\"180\" y=\"58\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">V=4πr³/3</text>\n  <text x=\"180\" y=\"72\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">SA=4πr²</text>\n  <text x=\"130\" y=\"114\" text-anchor=\"middle\" font-size=\"8\" fill=\"#8a8a8a\">Cylinder · Sphere · ρ=m/V</text>\n </svg>",
    "caption": "Cylinder: circular base × height. Sphere: depends only on radius. Density links mass to volume.",
    "steps": [
      "Convert ALL dimensions to the same unit before calculating.",
      "Identify the base shape of prisms and cylinders, then multiply base area by height.",
      "For cones and pyramids, use ⅓ × base area × height.",
      "For density: if you know any two of mass, volume, density, find the third by rearranging ρ = m/V.",
      "For composite solids, break into known shapes and add/subtract volumes."
    ],
    "example": "A cylinder of radius 3 cm and height 10 cm: V = π(3²)(10) = 90π ≈ 282.7 cm³. If it is aluminum (ρ = 2.7 g/cm³), mass = 2.7 × 282.7 ≈ 763 g."
  },
  {
    "cat": "Trigonometry",
    "tags": [
      "geometry",
      "calculus",
      "physics",
      "engineering"
    ],
    "title": "Unit Circle, Triangles & Pythagorean Identities",
    "theory": "",
    "reality": "A sailor uses angles and distances to navigate across the ocean without landmarks. Game designers use sine and cosine to make characters move in smooth circles. Your smartphone knows which way it is tilting because its gyroscope uses trigonometry every second.",
    "formula": "SOH-CAH-TOA:\nsin θ = opp/hyp   cos θ = adj/hyp   tan θ = opp/adj\nUnit circle: (cos θ, sin θ)\nPythagorean: sin²θ+cos²θ=1\n1+tan²θ=sec²θ   1+cot²θ=csc²θ\nInverse: θ = arcsin(x), arccos(x), arctan(x)",
    "method": "ASTC (All Students Take Calculus): All positive in Q1, Sine positive in Q2, Tangent in Q3, Cosine in Q4. Use reference angles to find exact values from 30-60-90 and 45-45-90 triangles.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <circle cx=\"130\" cy=\"60\" r=\"48\" fill=\"none\" stroke=\"rgba(122,171,207,.4)\" stroke-width=\"1.5\"/>\n  <line x1=\"78\" y1=\"60\" x2=\"182\" y2=\"60\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"130\" y1=\"8\" x2=\"130\" y2=\"112\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"130\" y1=\"60\" x2=\"164\" y2=\"36\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <circle cx=\"164\" cy=\"36\" r=\"3.5\" fill=\"#7aabcf\"/>\n  <line x1=\"164\" y1=\"60\" x2=\"164\" y2=\"36\" stroke=\"#c9a060\" stroke-width=\"1.8\" stroke-dasharray=\"3,2\"/>\n  <line x1=\"130\" y1=\"60\" x2=\"164\" y2=\"60\" stroke=\"#c07070\" stroke-width=\"1.8\" stroke-dasharray=\"3,2\"/>\n  <path d=\"M148 60 A18 18 0 0 0 143 48\" fill=\"none\" stroke=\"#7ab060\" stroke-width=\"1.5\"/>\n  <text x=\"148\" y=\"57\" font-size=\"8\" fill=\"#7ab060\">θ</text>\n  <text x=\"166\" y=\"50\" font-size=\"8\" fill=\"#c9a060\">sin θ</text>\n  <text x=\"142\" y=\"70\" font-size=\"8\" fill=\"#c07070\">cos θ</text>\n  <text x=\"168\" y=\"33\" font-size=\"8\" fill=\"#7aabcf\">(cos θ, sin θ)</text>\n  <text x=\"72\" y=\"14\" font-size=\"8\" fill=\"#5a8a5a\">Q2 sin+</text>\n  <text x=\"152\" y=\"14\" font-size=\"8\" fill=\"#7aabcf\">Q1 all+</text>\n  <text x=\"72\" y=\"110\" font-size=\"8\" fill=\"#c9a060\">Q3 tan+</text>\n  <text x=\"152\" y=\"110\" font-size=\"8\" fill=\"#c07070\">Q4 cos+</text>\n </svg>",
    "caption": "Point on unit circle = (cos θ, sin θ). ASTC rule shows which functions are positive per quadrant.",
    "steps": [
      "Draw the right triangle or unit circle position for the given angle.",
      "For standard angles (30°, 45°, 60°), use exact values from the special triangles.",
      "For other quadrants, find the reference angle (acute angle to x-axis), then apply ASTC sign rule.",
      "Use Pythagorean identities to swap between sin, cos, tan without recalculating.",
      "For inverses: the output is an angle — check the restricted domain (arcsin: −π/2 to π/2)."
    ],
    "example": "Find sin(150°). Reference angle = 30°, Q2 so sin is positive. sin(30°)=1/2. So sin(150°)=1/2. Check: (cos150°,sin150°) = (−√3/2, 1/2) on unit circle. ✓"
  },
  {
    "cat": "Trigonometry",
    "tags": [
      "physics",
      "engineering",
      "calculus"
    ],
    "title": "Trig Graphs, Waves & Radians",
    "theory": "",
    "reality": "Sound, light, and radio waves are all sine waves. Your speaker makes music by vibrating in wave patterns. Doctors read heartbeats on a monitor — that wavy EKG line is a sine wave. Radians help engineers design everything that spins or pulses.",
    "formula": "Radians = degrees × π/180\ny = A sin(Bx + C) + D\nAmplitude = |A|\nPeriod = 2π/|B|\nPhase shift = −C/B\nVertical shift = D\nWave: y = A sin(kx − ωt + φ)",
    "method": "Graph by landmarks: start at phase shift, plot max at T/4, midline at T/2, min at 3T/4, return at T. Five-point method is the most efficient for AP/CLEP graphing questions.",
    "svg": "<svg viewBox=\"0 0 260 110\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"14\" y1=\"56\" x2=\"246\" y2=\"56\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"14\" y1=\"10\" x2=\"14\" y2=\"100\" stroke=\"#444\" stroke-width=\"1\"/>\n  <path d=\"M14 56 C40 10 66 10 92 56 C118 100 144 100 170 56 C196 10 222 10 248 56\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"2.5\"/>\n  <line x1=\"14\" y1=\"18\" x2=\"246\" y2=\"18\" stroke=\"#c9a060\" stroke-width=\"1\" stroke-dasharray=\"3,2\"/>\n  <line x1=\"14\" y1=\"94\" x2=\"246\" y2=\"94\" stroke=\"#c9a060\" stroke-width=\"1\" stroke-dasharray=\"3,2\"/>\n  <line x1=\"92\" y1=\"10\" x2=\"170\" y2=\"10\" stroke=\"#c07070\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n  <text x=\"131\" y=\"8\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c07070\">Period T = 2π/|B|</text>\n  <text x=\"6\" y=\"21\" font-size=\"7.5\" fill=\"#c9a060\">A</text>\n  <text x=\"6\" y=\"97\" font-size=\"7.5\" fill=\"#c9a060\">−A</text>\n  <text x=\"20\" y=\"44\" font-size=\"7.5\" fill=\"#8a8a8a\">Amplitude |A|</text>\n  <text x=\"130\" y=\"108\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7ab060\">y = A·sin(Bx+C)+D — five landmark points</text>\n </svg>",
    "caption": "Sine wave: A=amplitude, T=period, phase shift moves graph left/right, D shifts up/down.",
    "steps": [
      "Convert degrees to radians when using calculus formulas: multiply by π/180.",
      "Read amplitude as the vertical distance from midline to peak.",
      "Compute period = 2π/|B| — this is the length of one complete cycle.",
      "Phase shift = −C/B moves the graph horizontally (negative = shift right).",
      "For waves in physics: connect angular frequency ω = 2πf and wave number k = 2π/λ."
    ],
    "example": "y = 3 sin(2x − π/2) + 1. Amplitude=3, Period=2π/2=π, Phase shift=π/4 right, Vertical shift=1 up. Five key x-values: start at π/4, then add π/4 each step."
  },
  {
    "cat": "Derivatives & Limits",
    "tags": [
      "calculus",
      "physics",
      "finance",
      "engineering"
    ],
    "title": "Limits, Derivatives & Rates of Change",
    "theory": "",
    "reality": "Your car speedometer shows how fast your position is changing — that is a derivative! Weather forecasters calculate how quickly temperature is dropping. Stock traders watch how fast prices change. Derivatives measure the rate of change of anything in the real world.",
    "formula": "Limit: lim[h→0] (f(x+h)−f(x))/h\nd/dx xⁿ = n·xⁿ⁻¹\nd/dx eˣ = eˣ\nd/dx ln x = 1/x\nd/dx sin x = cos x\nd/dx cos x = −sin x\nSum rule: (f+g)′ = f′+g′",
    "method": "L'Hôpital's Rule: if limit gives 0/0 or ∞/∞ form, differentiate numerator and denominator separately, then re-evaluate. Use for AP Calc limits with indeterminate forms.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"14\" y1=\"108\" x2=\"246\" y2=\"108\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"14\" y1=\"10\" x2=\"14\" y2=\"112\" stroke=\"#444\" stroke-width=\"1\"/>\n  <path d=\"M20 100 Q80 98 120 70 Q160 42 200 22 Q220 14 240 12\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"2.5\"/>\n  <circle cx=\"140\" cy=\"52\" r=\"4\" fill=\"#c9a060\"/>\n  <line x1=\"90\" y1=\"80\" x2=\"200\" y2=\"28\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <text x=\"135\" y=\"44\" font-size=\"7.5\" fill=\"#c9a060\">tangent line</text>\n  <text x=\"135\" y=\"56\" font-size=\"7.5\" fill=\"#c9a060\">slope = f′(x)</text>\n  <line x1=\"140\" y1=\"52\" x2=\"140\" y2=\"108\" stroke=\"#c07070\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <text x=\"142\" y=\"88\" font-size=\"7.5\" fill=\"#c07070\">x = a</text>\n  <text x=\"16\" y=\"22\" font-size=\"8.5\" fill=\"#7aabcf\">y = f(x)</text>\n  <text x=\"60\" y=\"116\" text-anchor=\"middle\" font-size=\"8\" fill=\"#8a8a8a\">secant → tangent as h → 0</text>\n </svg>",
    "caption": "Derivative = slope of tangent line at one point. As h shrinks, secant becomes tangent.",
    "steps": [
      "Simplify the function before differentiating — combine like terms, rewrite radicals as powers.",
      "Apply power rule term by term: bring exponent down, reduce exponent by 1.",
      "Memorize the standard derivatives: trig, exponential, and logarithm.",
      "Interpret result: derivative units = output units per input unit (e.g., m/s is derivative of meters with respect to seconds).",
      "For limits: try direct substitution first; if 0/0, factor/cancel or use L'Hôpital's Rule."
    ],
    "example": "f(x) = 3x⁴ − 5x² + 2. f′(x) = 12x³ − 10x. At x=1: f′(1) = 12−10 = 2. This is the slope of f at x=1."
  },
  {
    "cat": "Derivatives & Limits",
    "tags": [
      "calculus",
      "engineering",
      "finance"
    ],
    "title": "Product, Quotient, Chain Rule & Optimization",
    "theory": "",
    "reality": "A factory wants to make the biggest box possible from one flat sheet of cardboard. A farmer wants to fence the most land using the least fencing. Companies use these techniques to cut costs and maximize profit — it is math that saves real money every day.",
    "formula": "Product: (fg)′ = f′g + fg′\nQuotient: (f/g)′ = (f′g−fg′)/g²\nChain: [f(g(x))]′ = f′(g(x))·g′(x)\nImplicit: differentiate both sides, solve for dy/dx\nOptimization: set f′(x)=0, test with f″(x)\nRelated rates: differentiate both sides w.r.t. time t",
    "method": "Chain rule mnemonic: \"derivative of outside (leaving inside alone) times derivative of inside.\" For optimization: always verify whether critical point is max or min using second derivative test (f″ > 0 → min, f″ < 0 → max).",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"10\" y=\"20\" width=\"60\" height=\"28\" rx=\"7\" fill=\"rgba(122,171,207,.15)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <text x=\"40\" y=\"31\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7aabcf\" font-weight=\"700\">outer f</text>\n  <text x=\"40\" y=\"43\" text-anchor=\"middle\" font-size=\"8\" fill=\"#9ecef0\">f′(g(x))</text>\n  <text x=\"76\" y=\"37\" text-anchor=\"middle\" font-size=\"12\" fill=\"#555\">×</text>\n  <rect x=\"86\" y=\"20\" width=\"60\" height=\"28\" rx=\"7\" fill=\"rgba(201,160,96,.15)\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <text x=\"116\" y=\"31\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#c9a060\" font-weight=\"700\">inner g</text>\n  <text x=\"116\" y=\"43\" text-anchor=\"middle\" font-size=\"8\" fill=\"#d4b87a\">g′(x)</text>\n  <text x=\"156\" y=\"37\" text-anchor=\"middle\" font-size=\"10\" fill=\"#555\">=</text>\n  <rect x=\"164\" y=\"20\" width=\"88\" height=\"28\" rx=\"7\" fill=\"rgba(122,176,96,.12)\" stroke=\"#7ab060\" stroke-width=\"1.5\"/>\n  <text x=\"208\" y=\"31\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7ab060\" font-weight=\"700\">[f(g(x))]′</text>\n  <text x=\"208\" y=\"43\" text-anchor=\"middle\" font-size=\"8\" fill=\"#a0c888\">Chain result</text>\n  <line x1=\"14\" y1=\"108\" x2=\"246\" y2=\"108\" stroke=\"#444\" stroke-width=\"1\"/>\n  <path d=\"M20 108 Q80 104 120 68 Q150 38 180 70 Q210 100 240 108\" fill=\"none\" stroke=\"#c07070\" stroke-width=\"2\"/>\n  <circle cx=\"120\" cy=\"68\" r=\"4\" fill=\"#7ab060\"/>\n  <text x=\"124\" y=\"64\" font-size=\"8\" fill=\"#7ab060\">max f′=0</text>\n  <circle cx=\"178\" cy=\"70\" r=\"4\" fill=\"#c9a060\"/>\n  <text x=\"140\" y=\"88\" font-size=\"7.5\" fill=\"#c9a060\">local min</text>\n  <text x=\"20\" y=\"100\" font-size=\"8\" fill=\"#8a8a8a\">Optimization: critical pts where f′(x)=0</text>\n </svg>",
    "caption": "Chain rule: outside × inside derivative. Optimization: f′=0 at extrema; f″ determines max vs min.",
    "steps": [
      "Identify the outer and inner functions before applying chain rule.",
      "For product rule: d(uv)/dx = u′v + uv′ — differentiate each factor in turn.",
      "For quotient rule: remember \"low d-high minus high d-low, all over low-squared.\"",
      "For optimization: define the objective function, take its derivative, set equal to zero, and solve.",
      "Confirm max or min: f″(x) > 0 → concave up → minimum; f″(x) < 0 → concave down → maximum."
    ],
    "example": "Differentiate h(x)=sin(x³). Outer=sin, inner=x³. h′(x)=cos(x³)·3x². Optimization: maximize area A=x(100−x). A′=100−2x=0 → x=50. A″=−2<0 (max). Max area=50×50=2500 m²."
  },
  {
    "cat": "Integration",
    "tags": [
      "calculus",
      "physics",
      "engineering"
    ],
    "title": "Antiderivatives, Area & the Fundamental Theorem",
    "theory": "",
    "reality": "How far did a car travel if you only know its speed at every moment? You add up all the tiny distances — that is integration. Engineers calculate fuel consumption. Doctors measure total drug dosage in a patient over time using this same idea.",
    "formula": "∫ xⁿ dx = xⁿ⁺¹/(n+1) + C  (n ≠ −1)\n∫ eˣ dx = eˣ + C\n∫ 1/x dx = ln|x| + C\n∫ sin x dx = −cos x + C\nFTC: ∫_a^b f(x) dx = F(b) − F(a)\nAvg value = 1/(b−a) · ∫_a^b f(x) dx",
    "method": "Fundamental Theorem of Calculus (FTC Part 2): find the antiderivative F, then evaluate F(b) − F(a). The constant C disappears in definite integrals. Units of ∫f dx = units of f × units of x.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"14\" y1=\"108\" x2=\"246\" y2=\"108\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"14\" y1=\"10\" x2=\"14\" y2=\"112\" stroke=\"#444\" stroke-width=\"1\"/>\n  <path d=\"M30 100 Q80 98 120 70 Q160 40 200 22 Q220 14 240 12\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <path d=\"M70 90 Q80 88 100 78 Q120 68 140 56 L140 108 L70 108 Z\" fill=\"rgba(122,171,207,.18)\" stroke=\"none\"/>\n  <line x1=\"70\" y1=\"10\" x2=\"70\" y2=\"108\" stroke=\"#c9a060\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <line x1=\"140\" y1=\"10\" x2=\"140\" y2=\"108\" stroke=\"#c9a060\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <text x=\"68\" y=\"118\" font-size=\"8\" fill=\"#c9a060\">a</text>\n  <text x=\"137\" y=\"118\" font-size=\"8\" fill=\"#c9a060\">b</text>\n  <text x=\"100\" y=\"90\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7aabcf\" font-weight=\"700\">∫_a^b f(x) dx</text>\n  <text x=\"100\" y=\"102\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#7aabcf\">= F(b) − F(a)</text>\n  <text x=\"16\" y=\"22\" font-size=\"8.5\" fill=\"#7aabcf\">y=f(x)</text>\n </svg>",
    "caption": "Shaded area = definite integral. FTC: find antiderivative F, evaluate at b, subtract value at a.",
    "steps": [
      "Identify whether the integral is indefinite (+ C) or definite (bounded).",
      "For indefinite integrals, reverse the derivative rules: power rule in reverse, standard forms.",
      "For definite integrals: find antiderivative F(x), then evaluate F(b) − F(a).",
      "Always attach units: if integrating velocity (m/s) over time (s), result is meters.",
      "Average value of f on [a,b] = (1/(b−a)) times the definite integral."
    ],
    "example": "∫₀² 3x² dx. Antiderivative: x³. Evaluate: 2³ − 0³ = 8. Area under 3x² from x=0 to x=2 is 8 square units."
  },
  {
    "cat": "Integration",
    "tags": [
      "calculus",
      "engineering",
      "physics"
    ],
    "title": "Integration Techniques: u-Sub, Parts & Applications",
    "theory": "",
    "reality": "These are tools engineers use to solve integrals that do not fit simple patterns. Finding the center of gravity of an airplane wing, calculating the work a pump does, or designing the shape of a dam all require these techniques.",
    "formula": "u-sub: ∫f(g(x))g′(x) dx = ∫f(u) du\nBy parts: ∫u dv = uv − ∫v du\n(LIATE: Log, Inverse, Algebraic, Trig, Exp)\nDisk: V = π∫[f(x)]² dx\nWasher: V = π∫([R(x)]²−[r(x)]²) dx\nShell: V = 2π∫x·f(x) dx",
    "method": "LIATE rule for integration by parts: choose u from the function that comes first in LIATE; dv is the rest. This gives the most tractable ∫v du. For volumes, disk method for rotation around x-axis; shell method often simpler for rotation around y-axis.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"14\" y1=\"108\" x2=\"246\" y2=\"108\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"14\" y1=\"10\" x2=\"14\" y2=\"112\" stroke=\"#444\" stroke-width=\"1\"/>\n  <path d=\"M60 108 Q100 104 130 80 Q160 56 190 108 Z\" fill=\"rgba(201,160,96,.18)\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <path d=\"M60 108 Q100 104 130 80 Q160 56 190 108\" fill=\"none\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <ellipse cx=\"125\" cy=\"108\" rx=\"65\" ry=\"12\" fill=\"rgba(122,171,207,.12)\" stroke=\"#7aabcf\" stroke-width=\"1\" stroke-dasharray=\"3,2\"/>\n  <text x=\"125\" y=\"80\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#c9a060\">Disk Method</text>\n  <text x=\"125\" y=\"92\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#c9a060\">V=π∫[f(x)]²dx</text>\n  <text x=\"125\" y=\"112\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#7aabcf\">Rotation → solid of revolution</text>\n  <text x=\"16\" y=\"30\" font-size=\"8\" fill=\"#8a8a8a\">u-sub: let u=inner, du=inner′dx</text>\n  <text x=\"16\" y=\"44\" font-size=\"8\" fill=\"#8a8a8a\">Parts: ∫u dv = uv − ∫v du</text>\n  <text x=\"16\" y=\"58\" font-size=\"8\" fill=\"#8a8a8a\">LIATE: choose u from left</text>\n </svg>",
    "caption": "u-substitution wraps up the inner function. Parts splits a product. Rotation around x-axis creates disks.",
    "steps": [
      "For u-substitution: spot a function and its derivative inside the integrand, let u = inner function.",
      "Compute du = inner′ dx, rewrite the entire integral in terms of u, integrate, then substitute back.",
      "For integration by parts: pick u from LIATE order, then dv = rest. Compute v by integrating dv.",
      "Evaluate uv and subtract ∫v du. Sometimes you need to apply parts twice.",
      "For volumes: disk method → square the function; washer → subtract inner squared from outer squared."
    ],
    "example": "∫x·eˣ dx. By parts: u=x, dv=eˣdx → du=dx, v=eˣ. Result: xeˣ − ∫eˣdx = xeˣ − eˣ + C = eˣ(x−1)+C."
  },
  {
    "cat": "Matrices & Vectors",
    "tags": [
      "linear algebra",
      "physics",
      "engineering"
    ],
    "title": "Vectors, Matrices & Systems of Equations",
    "theory": "",
    "reality": "A video game character moves with a velocity vector — speed AND direction together. Google Maps solves a giant system of equations to find the fastest route. Every 3D animated movie uses matrix math to rotate and position every object on screen.",
    "formula": "Ax = b  (system as matrix equation)\nRREF solves systems with row operations\ndot: a·b = |a||b|cosθ = Σaᵢbᵢ\ncross: |a×b| = |a||b|sinθ\ndet(A): 2×2: ad−bc\nA⁻¹ exists iff det(A) ≠ 0",
    "method": "Gaussian elimination with row reduction: use three row operations (swap rows, scale row, add multiple of one row to another). Row echelon form → back substitution. RREF → read solution directly. Research confirms this is the most reliable systematic method.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"10\" y=\"20\" width=\"80\" height=\"68\" rx=\"8\" fill=\"rgba(122,171,207,.08)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <text x=\"50\" y=\"38\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7aabcf\" font-weight=\"700\">Matrix A</text>\n  <text x=\"50\" y=\"54\" text-anchor=\"middle\" font-size=\"9.5\" fill=\"#9ecef0\" font-family=\"monospace\">[a b | e]</text>\n  <text x=\"50\" y=\"68\" text-anchor=\"middle\" font-size=\"9.5\" fill=\"#9ecef0\" font-family=\"monospace\">[c d | f]</text>\n  <text x=\"50\" y=\"82\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#7aabcf\">Row reduce →</text>\n  <text x=\"100\" y=\"57\" text-anchor=\"middle\" font-size=\"16\" fill=\"#555\">→</text>\n  <rect x=\"112\" y=\"20\" width=\"80\" height=\"68\" rx=\"8\" fill=\"rgba(122,176,96,.08)\" stroke=\"#7ab060\" stroke-width=\"1.5\"/>\n  <text x=\"152\" y=\"38\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7ab060\" font-weight=\"700\">RREF</text>\n  <text x=\"152\" y=\"54\" text-anchor=\"middle\" font-size=\"9.5\" fill=\"#a0c888\" font-family=\"monospace\">[1 0 | x₁]</text>\n  <text x=\"152\" y=\"68\" text-anchor=\"middle\" font-size=\"9.5\" fill=\"#a0c888\" font-family=\"monospace\">[0 1 | x₂]</text>\n  <text x=\"152\" y=\"82\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#7ab060\">Solution!</text>\n  <text x=\"205\" y=\"57\" text-anchor=\"middle\" font-size=\"16\" fill=\"#555\">→</text>\n  <circle cx=\"228\" cy=\"54\" r=\"22\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <text x=\"228\" y=\"50\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">det(A)</text>\n  <text x=\"228\" y=\"62\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">≠ 0 → A⁻¹</text>\n  <text x=\"130\" y=\"108\" text-anchor=\"middle\" font-size=\"8\" fill=\"#8a8a8a\">Gaussian elimination: swap · scale · add rows</text>\n </svg>",
    "caption": "Row reduce augmented matrix to RREF. Each pivot column corresponds to one solved variable.",
    "steps": [
      "Write the augmented matrix [A|b] from the system Ax=b.",
      "Use three row operations: R↔R (swap), cR (scale), R+cR (add multiple).",
      "Achieve row echelon form: leading 1s cascade left to right.",
      "For full RREF: also clear entries above each leading 1.",
      "Check determinant: det≠0 means unique solution; det=0 means no solution or infinite solutions."
    ],
    "example": "System: 2x+y=5, x+3y=10. Matrix: [2 1|5][1 3|10] → RREF → [1 0|1][0 1|3]. Solution: x=1, y=3. Check: 2(1)+3=5 ✓, 1+9=10 ✓"
  },
  {
    "cat": "ODEs",
    "tags": [
      "calculus",
      "chemistry",
      "physics"
    ],
    "title": "Separable ODEs: Growth, Decay & Cooling",
    "theory": "",
    "reality": "Hot chocolate cools toward room temperature — that follows a differential equation called Newton's cooling law. Doctors use these equations to figure out how a drug leaves your body over time. Scientists model animal populations and radioactive decay the exact same way.",
    "formula": "dy/dt = ky  →  y = Ce^(kt)\nHalf-life: A = A₀(1/2)^(t/T½)\nCooling: dT/dt = −k(T − T_env)\n→  T(t) = T_env + (T₀−T_env)e^(−kt)\nLogistic: dP/dt = rP(1 − P/K)",
    "method": "Separation of variables: move all y-terms (including dy) to one side and all t-terms (including dt) to the other, then integrate both sides. Always include the constant C and apply initial conditions to solve for C.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"14\" y1=\"108\" x2=\"246\" y2=\"108\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"14\" y1=\"10\" x2=\"14\" y2=\"112\" stroke=\"#444\" stroke-width=\"1\"/>\n  <path d=\"M20 100 Q60 98 100 80 Q140 55 180 32 Q200 22 240 16\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"2.5\"/>\n  <path d=\"M20 20 Q60 22 100 36 Q140 55 180 78 Q200 88 240 98\" fill=\"none\" stroke=\"#c07070\" stroke-width=\"2.5\"/>\n  <text x=\"200\" y=\"22\" font-size=\"8.5\" fill=\"#7aabcf\">growth k&gt;0</text>\n  <text x=\"200\" y=\"92\" font-size=\"8.5\" fill=\"#c07070\">decay k&lt;0</text>\n  <text x=\"130\" y=\"58\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#c9a060\" font-weight=\"700\">y = Ce^(kt)</text>\n  <text x=\"130\" y=\"108\" text-anchor=\"middle\" font-size=\"8\" fill=\"#8a8a8a\">Initial condition C=y₀ when t=0</text>\n </svg>",
    "caption": "k>0 → exponential growth. k<0 → decay. Initial condition pins the curve at t=0.",
    "steps": [
      "Write the rate equation: dy/dt = f(y)·g(t).",
      "Separate: dy/f(y) = g(t) dt.",
      "Integrate both sides independently.",
      "Solve for y explicitly (often involves e^x or ln).",
      "Substitute the initial condition (t=0, y=y₀) to find the constant C."
    ],
    "example": "Carbon-14 decay: dA/dt = −0.000121A. Separate: dA/A = −0.000121 dt. Integrate: ln|A| = −0.000121t+C. Exponentiate: A = A₀e^(−0.000121t). Half-life = ln(2)/0.000121 ≈ 5,730 years."
  },
  {
    "cat": "Statistics",
    "tags": [
      "data",
      "finance",
      "science"
    ],
    "title": "Descriptive Statistics, Distributions & Probability",
    "theory": "",
    "reality": "If your class takes a test, what is the average score and how spread out are the grades? Statistics helps doctors know if a medicine actually works, businesses understand customers, and scientists make sense of messy data. Probability tells you how likely things are.",
    "formula": "Mean: μ = Σx/n\nVariance: σ² = Σ(x−μ)²/n\nStd dev: σ = √σ²\nz-score: z = (x−μ)/σ\nNormal: 68-95-99.7 rule\nP(A and B) = P(A)·P(B) if independent\nP(A or B) = P(A)+P(B)−P(A∩B)",
    "method": "Five-number summary + boxplot: min, Q1, median, Q3, max. IQR = Q3−Q1. Outlier if x < Q1−1.5IQR or x > Q3+1.5IQR. This is the standard exploratory data analysis (EDA) protocol used in AP Statistics and data science.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M14 100 Q65 100 130 18 Q195 100 246 100\" fill=\"rgba(122,171,207,.12)\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <line x1=\"130\" y1=\"10\" x2=\"130\" y2=\"104\" stroke=\"#c9a060\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <line x1=\"66\" y1=\"68\" x2=\"66\" y2=\"104\" stroke=\"#7ab060\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <line x1=\"194\" y1=\"68\" x2=\"194\" y2=\"104\" stroke=\"#7ab060\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <text x=\"130\" y=\"15\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">μ (mean)</text>\n  <text x=\"66\" y=\"116\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#7ab060\">μ−σ</text>\n  <text x=\"194\" y=\"116\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#7ab060\">μ+σ</text>\n  <text x=\"130\" y=\"64\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#7aabcf\">68%</text>\n  <rect x=\"30\" y=\"68\" width=\"72\" height=\"10\" rx=\"3\" fill=\"rgba(122,171,207,.2)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <rect x=\"158\" y=\"68\" width=\"72\" height=\"10\" rx=\"3\" fill=\"rgba(122,171,207,.2)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <text x=\"130\" y=\"108\" text-anchor=\"middle\" font-size=\"8\" fill=\"#8a8a8a\">68-95-99.7 rule · z-score = standard deviations from mean</text>\n </svg>",
    "caption": "Normal distribution: 68% within 1σ, 95% within 2σ, 99.7% within 3σ. z-score = distance in standard deviations.",
    "steps": [
      "Always plot data first — histogram, dotplot, or boxplot reveals shape, center, spread, and outliers.",
      "Calculate mean for symmetric data; use median when the distribution is skewed or has outliers.",
      "Use standard deviation for spread on bell-shaped data; use IQR for skewed data.",
      "For probability: identify sample space, list favorable outcomes, apply addition/multiplication rules.",
      "Check independence before using P(A)·P(B) — events must not influence each other."
    ],
    "example": "Scores: 70,75,80,80,85,90,95. Mean=82.1. Median=80. Mode=80. Range=25. IQR=90−75=15. z-score for 95: (95−82.1)/8.4 ≈ 1.54 standard deviations above mean."
  },
  {
    "cat": "Statistics",
    "tags": [
      "data",
      "finance",
      "engineering"
    ],
    "title": "Regression, Inference, Confidence & Hypothesis Testing",
    "theory": "",
    "reality": "Scientists tested a vaccine on 1,000 people. Did it actually work, or was it just random luck? Hypothesis testing answers that honestly. Regression predicts future house prices from past sales. Every published scientific study uses these tools to draw honest conclusions.",
    "formula": "Lin. reg: ŷ = b₀ + b₁x\nr = correlation (−1 to +1)\nCI: x̄ ± z* · (σ/√n)\nMargin of error: E = z* · (σ/√n)\nHypothesis: H₀ vs Hₐ\nP-value < α → reject H₀\nt-stat: t = (x̄ − μ₀)/(s/√n)",
    "method": "Four-step inference template (AP Statistics standard): State (H₀, Hₐ, α), Plan (identify test, check conditions), Do (calculate test statistic and p-value), Conclude (compare p-value to α, state in context).",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"20\" y1=\"100\" x2=\"240\" y2=\"100\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"20\" y1=\"10\" x2=\"20\" y2=\"104\" stroke=\"#444\" stroke-width=\"1\"/>\n  <circle cx=\"50\" cy=\"85\" r=\"3\" fill=\"#7aabcf\"/><circle cx=\"70\" cy=\"80\" r=\"3\" fill=\"#7aabcf\"/>\n  <circle cx=\"90\" cy=\"70\" r=\"3\" fill=\"#7aabcf\"/><circle cx=\"110\" cy=\"65\" r=\"3\" fill=\"#7aabcf\"/>\n  <circle cx=\"130\" cy=\"55\" r=\"3\" fill=\"#7aabcf\"/><circle cx=\"150\" cy=\"48\" r=\"3\" fill=\"#7aabcf\"/>\n  <circle cx=\"170\" cy=\"40\" r=\"3\" fill=\"#7aabcf\"/><circle cx=\"190\" cy=\"32\" r=\"3\" fill=\"#7aabcf\"/>\n  <line x1=\"40\" y1=\"92\" x2=\"200\" y2=\"26\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <text x=\"192\" y=\"22\" font-size=\"8\" fill=\"#c9a060\">ŷ=b₀+b₁x</text>\n  <text x=\"22\" y=\"24\" font-size=\"7.5\" fill=\"#7aabcf\">r ≈ 0.98</text>\n  <text x=\"22\" y=\"36\" font-size=\"7.5\" fill=\"#7aabcf\">strong positive</text>\n  <text x=\"22\" y=\"48\" font-size=\"7.5\" fill=\"#7aabcf\">linear relation</text>\n  <text x=\"130\" y=\"116\" text-anchor=\"middle\" font-size=\"8\" fill=\"#8a8a8a\">SPDC: State · Plan · Do · Conclude</text>\n </svg>",
    "caption": "Regression line minimizes squared residuals. r near ±1 = strong linear relationship.",
    "steps": [
      "Make a scatterplot to visualize the relationship before calculating.",
      "Compute the regression line; slope b₁ is the predicted change in y per unit change in x.",
      "Examine residuals — if they show a pattern, the linear model is not the best fit.",
      "For hypothesis tests: identify H₀ (no effect), Hₐ (direction of effect), compute test statistic, find p-value.",
      "Conclude in context: \"At α=0.05, we (do/do not) have sufficient evidence that ...\""
    ],
    "example": "CI for mean: n=36, x̄=50, σ=12, 95% CI. z*=1.96. E=1.96·(12/√36)=3.92. CI: (46.08, 53.92). Interpret: 95% confident population mean is between 46.08 and 53.92."
  },
  {
    "cat": "Chemistry",
    "topic": "Inorganic Chemistry",
    "headings": [
      "Reaction family",
      "Product pattern",
      "Balancing check"
    ],
    "tags": [
      "chemistry",
      "inorganic",
      "reactions"
    ],
    "title": "Topic 1 — Inorganic Chemistry: Important Equations & Reaction Patterns",
    "theory": "The fastest way to learn inorganic reactions is to group them by pattern. Once you recognize the reactants, the products become predictable.",
    "reality": "These patterns explain antacid tablets neutralising acid, metals fizzing in acid, limescale dissolving, and precipitation in water treatment.",
    "formula": "Core patterns:\nAcid + metal → salt + H₂\nAcid + base/oxide/hydroxide → salt + H₂O\nAcid + carbonate/hydrogencarbonate → salt + CO₂ + H₂O\nMetal oxide + water → base (where applicable)\nTwo soluble salts → insoluble salt + spectator ions",
    "method": "Read the reactants first, match the family second, then write products and balance last. This is quicker and safer than guessing a full equation from memory.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.4\" fill=\"#dce6f2\" font-weight=\"700\">Reaction Families</text>\n  <rect x=\"14\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(122,171,207,.12)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n    <text x=\"39\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#7aabcf\" font-weight=\"700\">Acid + metal</text>\n    <text x=\"39\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">H₂ evolves</text><rect x=\"74\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(201,160,96,.12)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n    <text x=\"99\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#c9a060\" font-weight=\"700\">Neutralisation</text>\n    <text x=\"99\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">salt + water</text><rect x=\"134\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(122,176,96,.12)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n    <text x=\"159\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#7ab060\" font-weight=\"700\">Carbonate + acid</text>\n    <text x=\"159\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">CO₂ forms</text><rect x=\"194\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(192,112,112,.12)\" stroke=\"#c07070\" stroke-width=\"1\"/>\n    <text x=\"219\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#c07070\" font-weight=\"700\">Double displacement</text>\n    <text x=\"219\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">ppt may form</text><line x1=\"64\" y1=\"53\" x2=\"68\" y2=\"53\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n    <path d=\"M 64 50 L 68 53 L 64 56\" fill=\"none\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/><line x1=\"124\" y1=\"53\" x2=\"128\" y2=\"53\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n    <path d=\"M 124 50 L 128 53 L 124 56\" fill=\"none\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/><line x1=\"184\" y1=\"53\" x2=\"188\" y2=\"53\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n    <path d=\"M 184 50 L 188 53 L 184 56\" fill=\"none\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n  <text x=\"130\" y=\"97\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#9fb0c5\">Pattern first → formula second → balancing last</text>\n </svg>",
    "caption": "Textbook shortcut: predict the product family first, then build the specific chemical equation.",
    "steps": [
      "Identify the reaction family from the reactants.",
      "Write the product pattern for that family before adding formulas.",
      "Use ion charges to build the correct salt formula.",
      "Balance with coefficients only; never change a subscript.",
      "Check for realistic observations such as bubbles, heat, or precipitate."
    ],
    "example": "CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O. Because the reactant is a carbonate, carbon dioxide and water must appear."
  },
  {
    "cat": "Chemistry",
    "topic": "Inorganic Chemistry",
    "headings": [
      "Common ions",
      "Charge balance",
      "Naming rule"
    ],
    "tags": [
      "chemistry",
      "inorganic",
      "ions",
      "nomenclature"
    ],
    "title": "Topic 2 — Inorganic Chemistry: Ions, Formula Writing & Nomenclature",
    "theory": "Ionic compounds are built by balancing charges. Their names tell you which ions are present and, for variable-charge metals, the oxidation state.",
    "reality": "Correct formulas matter in fertilizers, medicines, ceramic glazes, and water treatment salts.",
    "formula": "Common ions:\nNa⁺, K⁺, Ca²⁺, Mg²⁺, Al³⁺, NH₄⁺\nCl⁻, OH⁻, NO₃⁻, CO₃²⁻, SO₄²⁻, PO₄³⁻\nRule: total positive charge = total negative charge\nUse brackets if a polyatomic ion appears more than once",
    "method": "Write ions with charges, find the smallest whole-number ratio that makes the compound neutral, then convert that into the final formula.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.4\" fill=\"#dce6f2\" font-weight=\"700\">Ions &amp; Formula Writing</text>\n  <line x1=\"12\" y1=\"28\" x2=\"248\" y2=\"28\" stroke=\"#7aabcf\" stroke-width=\"0.8\"/>\n  <text x=\"14\" y=\"24\" font-size=\"7.5\" fill=\"#7aabcf\" font-weight=\"700\">Ion type</text>\n  <text x=\"110\" y=\"24\" font-size=\"7.5\" fill=\"#c9a060\" font-weight=\"700\">Examples</text>\n  <text x=\"190\" y=\"24\" font-size=\"7.5\" fill=\"#7ab060\" font-weight=\"700\">Quick rule</text>\n  <rect x=\"12\" y=\"30\" width=\"236\" height=\"12\" fill=\"rgba(255,255,255,.03)\"/>\n    <text x=\"14\" y=\"38\" font-size=\"7.1\" fill=\"#cfe0f4\">Cations</text>\n    <text x=\"110\" y=\"38\" font-size=\"7.1\" fill=\"#e5c98d\">Na⁺, Ca²⁺, NH₄⁺</text>\n    <text x=\"190\" y=\"38\" font-size=\"7.1\" fill=\"#b9dba8\">write first</text><rect x=\"12\" y=\"42\" width=\"236\" height=\"12\" fill=\"rgba(255,255,255,.01)\"/>\n    <text x=\"14\" y=\"50\" font-size=\"7.1\" fill=\"#cfe0f4\">Anions</text>\n    <text x=\"110\" y=\"50\" font-size=\"7.1\" fill=\"#e5c98d\">Cl⁻, SO₄²⁻, NO₃⁻</text>\n    <text x=\"190\" y=\"50\" font-size=\"7.1\" fill=\"#b9dba8\">write second</text><rect x=\"12\" y=\"54\" width=\"236\" height=\"12\" fill=\"rgba(255,255,255,.03)\"/>\n    <text x=\"14\" y=\"62\" font-size=\"7.1\" fill=\"#cfe0f4\">Compound</text>\n    <text x=\"110\" y=\"62\" font-size=\"7.1\" fill=\"#e5c98d\">charge = 0</text>\n    <text x=\"190\" y=\"62\" font-size=\"7.1\" fill=\"#b9dba8\">smallest ratio</text><rect x=\"12\" y=\"66\" width=\"236\" height=\"12\" fill=\"rgba(255,255,255,.01)\"/>\n    <text x=\"14\" y=\"74\" font-size=\"7.1\" fill=\"#cfe0f4\">Variable metal</text>\n    <text x=\"110\" y=\"74\" font-size=\"7.1\" fill=\"#e5c98d\">Fe²⁺ / Fe³⁺</text>\n    <text x=\"190\" y=\"74\" font-size=\"7.1\" fill=\"#b9dba8\">Roman numeral</text><rect x=\"12\" y=\"78\" width=\"236\" height=\"12\" fill=\"rgba(255,255,255,.03)\"/>\n    <text x=\"14\" y=\"86\" font-size=\"7.1\" fill=\"#cfe0f4\">Polyatomic</text>\n    <text x=\"110\" y=\"86\" font-size=\"7.1\" fill=\"#e5c98d\">(SO₄)₂ if needed</text>\n    <text x=\"190\" y=\"86\" font-size=\"7.1\" fill=\"#b9dba8\">use brackets</text>\n  <text x=\"130\" y=\"106\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#9fb0c5\">Formula reflects charge balance, not atom count guessed from the name</text>\n </svg>",
    "caption": "Elegant rule: a compound formula is just a balanced accounting of positive and negative charge.",
    "steps": [
      "Write the cation and anion with their charges.",
      "Choose the smallest ratio that gives a total charge of zero.",
      "Use brackets around polyatomic ions when more than one is needed.",
      "Name the cation first and the anion second.",
      "Use Roman numerals for metals such as iron or copper when more than one oxidation state exists."
    ],
    "example": "Al³⁺ and SO₄²⁻ combine as Al₂(SO₄)₃ because +6 and −6 balance. FeCl₃ is iron(III) chloride."
  },
  {
    "cat": "Chemistry",
    "topic": "Inorganic Chemistry",
    "headings": [
      "Observation",
      "Confirming reagent",
      "Inference"
    ],
    "tags": [
      "chemistry",
      "inorganic",
      "qualitative-analysis"
    ],
    "title": "Topic 3 — Inorganic Chemistry: Qualitative Analysis of Ions & Gases",
    "theory": "Qualitative analysis identifies unknown ions using visible clues: color, precipitate, gas, smell, and solubility in excess reagent.",
    "reality": "The same logic appears in water-quality testing, mineral identification, and forensic screening.",
    "formula": "Must-know tests:\nCu²⁺ + NaOH → blue ppt\nFe²⁺ + NaOH → green ppt\nFe³⁺ + NaOH → brown ppt\nCO₃²⁻ + acid → CO₂ (limewater milky)\nSO₄²⁻ + acidified Ba²⁺ → white BaSO₄\nCl⁻ / Br⁻ / I⁻ + acidified AgNO₃ → white / cream / yellow ppt",
    "method": "Treat it like a mini flow chart: add reagent, observe, then confirm with an excess-reagent or gas test.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.4\" fill=\"#dce6f2\" font-weight=\"700\">Qualitative Analysis</text>\n  <line x1=\"12\" y1=\"28\" x2=\"248\" y2=\"28\" stroke=\"#7aabcf\" stroke-width=\"0.8\"/>\n  <text x=\"14\" y=\"24\" font-size=\"7.5\" fill=\"#7aabcf\" font-weight=\"700\">Test</text>\n  <text x=\"110\" y=\"24\" font-size=\"7.5\" fill=\"#c9a060\" font-weight=\"700\">Observation</text>\n  <text x=\"190\" y=\"24\" font-size=\"7.5\" fill=\"#7ab060\" font-weight=\"700\">What it means</text>\n  <rect x=\"12\" y=\"30\" width=\"236\" height=\"12\" fill=\"rgba(255,255,255,.03)\"/>\n    <text x=\"14\" y=\"38\" font-size=\"7.1\" fill=\"#cfe0f4\">NaOH to Cu²⁺</text>\n    <text x=\"110\" y=\"38\" font-size=\"7.1\" fill=\"#e5c98d\">light blue ppt</text>\n    <text x=\"190\" y=\"38\" font-size=\"7.1\" fill=\"#b9dba8\">Cu²⁺ present</text><rect x=\"12\" y=\"42\" width=\"236\" height=\"12\" fill=\"rgba(255,255,255,.01)\"/>\n    <text x=\"14\" y=\"50\" font-size=\"7.1\" fill=\"#cfe0f4\">Acid + carbonate</text>\n    <text x=\"110\" y=\"50\" font-size=\"7.1\" fill=\"#e5c98d\">bubbles, CO₂</text>\n    <text x=\"190\" y=\"50\" font-size=\"7.1\" fill=\"#b9dba8\">CO₃²⁻ present</text><rect x=\"12\" y=\"54\" width=\"236\" height=\"12\" fill=\"rgba(255,255,255,.03)\"/>\n    <text x=\"14\" y=\"62\" font-size=\"7.1\" fill=\"#cfe0f4\">Limewater</text>\n    <text x=\"110\" y=\"62\" font-size=\"7.1\" fill=\"#e5c98d\">turns milky</text>\n    <text x=\"190\" y=\"62\" font-size=\"7.1\" fill=\"#b9dba8\">CO₂ confirmed</text><rect x=\"12\" y=\"66\" width=\"236\" height=\"12\" fill=\"rgba(255,255,255,.01)\"/>\n    <text x=\"14\" y=\"74\" font-size=\"7.1\" fill=\"#cfe0f4\">Acidified Ba²⁺</text>\n    <text x=\"110\" y=\"74\" font-size=\"7.1\" fill=\"#e5c98d\">white ppt</text>\n    <text x=\"190\" y=\"74\" font-size=\"7.1\" fill=\"#b9dba8\">SO₄²⁻ present</text><rect x=\"12\" y=\"78\" width=\"236\" height=\"12\" fill=\"rgba(255,255,255,.03)\"/>\n    <text x=\"14\" y=\"86\" font-size=\"7.1\" fill=\"#cfe0f4\">AgNO₃</text>\n    <text x=\"110\" y=\"86\" font-size=\"7.1\" fill=\"#e5c98d\">white/cream/yellow</text>\n    <text x=\"190\" y=\"86\" font-size=\"7.1\" fill=\"#b9dba8\">Cl⁻/Br⁻/I⁻</text>\n  <text x=\"130\" y=\"106\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#9fb0c5\">Observation is data: note colour, gas, and whether the precipitate dissolves in excess</text>\n </svg>",
    "caption": "A handbook-style test table is easier to learn than a paragraph: reagent → observation → conclusion.",
    "steps": [
      "Use a fresh small sample and add the reagent dropwise.",
      "Record color, gas bubbles, or precipitate formation immediately.",
      "If the test requires it, add excess reagent and note whether the precipitate dissolves.",
      "Use a confirmatory gas test such as limewater or damp litmus.",
      "Combine the observations before naming the ion."
    ],
    "example": "A cream precipitate with acidified silver nitrate indicates Br⁻. Effervescence with acid plus limewater turning milky indicates CO₃²⁻."
  },
  {
    "cat": "Chemistry",
    "topic": "Physical Chemistry",
    "headings": [
      "Moles as bridge",
      "Equation ratio",
      "Convert out"
    ],
    "tags": [
      "chemistry",
      "physical",
      "stoichiometry",
      "moles"
    ],
    "title": "Topic 4 — Physical Chemistry: Mole Concept, Stoichiometry & Empirical Formula",
    "theory": "The mole connects the microscopic world of particles to measurable mass and gas volume. Stoichiometry uses mole ratios from balanced equations.",
    "reality": "Factories scale production using mole ratios so they buy enough reactants without wasting expensive chemicals.",
    "formula": "n = m / M\nN = nNₐ\nGas volume at RTP ≈ 24n dm³\n% yield = actual / theoretical × 100\nEmpirical formula: divide each mole ratio by the smallest value",
    "method": "Whenever a calculation feels messy, route it through moles. The usual path is: given quantity → moles → ratio → answer in desired units.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.4\" fill=\"#dce6f2\" font-weight=\"700\">Mole Calculation Route</text>\n  <rect x=\"14\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(122,171,207,.12)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n    <text x=\"39\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#7aabcf\" font-weight=\"700\">Given data</text>\n    <text x=\"39\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">mass / gas / %</text><rect x=\"74\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(201,160,96,.12)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n    <text x=\"99\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#c9a060\" font-weight=\"700\">Convert to moles</text>\n    <text x=\"99\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">n = m/M</text><rect x=\"134\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(122,176,96,.12)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n    <text x=\"159\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#7ab060\" font-weight=\"700\">Use ratio</text>\n    <text x=\"159\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">balanced eqn</text><rect x=\"194\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(192,112,112,.12)\" stroke=\"#c07070\" stroke-width=\"1\"/>\n    <text x=\"219\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#c07070\" font-weight=\"700\">Convert out</text>\n    <text x=\"219\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">g, dm³, particles</text><line x1=\"64\" y1=\"53\" x2=\"68\" y2=\"53\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n    <path d=\"M 64 50 L 68 53 L 64 56\" fill=\"none\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/><line x1=\"124\" y1=\"53\" x2=\"128\" y2=\"53\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n    <path d=\"M 124 50 L 128 53 L 124 56\" fill=\"none\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/><line x1=\"184\" y1=\"53\" x2=\"188\" y2=\"53\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n    <path d=\"M 184 50 L 188 53 L 184 56\" fill=\"none\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n  <text x=\"130\" y=\"97\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#9fb0c5\">Moles are the bridge between all chemistry calculation types</text>\n </svg>",
    "caption": "If you learn one chemistry-calculation habit, let it be this: go through moles first.",
    "steps": [
      "Balance the equation before doing any arithmetic.",
      "Convert the known quantity to moles.",
      "Use the coefficient ratio from the balanced equation.",
      "Convert the result into grams, gas volume, particles, or percentage.",
      "For empirical formula, turn each element amount into moles and divide all by the smallest."
    ],
    "example": "N₂ + 3H₂ → 2NH₃. If 0.50 mol N₂ reacts completely, NH₃ formed = 1.0 mol because the ratio is 1 : 2."
  },
  {
    "cat": "Chemistry",
    "topic": "Physical Chemistry",
    "headings": [
      "Concentration",
      "Titration idea",
      "Dilution check"
    ],
    "tags": [
      "chemistry",
      "physical",
      "solutions",
      "titration"
    ],
    "title": "Topic 5 — Physical Chemistry: Concentration, Dilution & Titration",
    "theory": "Solution chemistry links amount and volume. Titration is simply stoichiometry performed with carefully measured liquid volumes.",
    "reality": "This is how blood chemistry, swimming-pool testing, pharmaceuticals, and food-quality labs measure concentration.",
    "formula": "c = n / V\nn = cV\nDilution: c₁V₁ = c₂V₂\nTitration rule: use the balanced-equation mole ratio\nAlways convert cm³ to dm³ before using c = n/V",
    "method": "Think of titration in three moves: known concentration gives known moles, the balanced equation gives the unknown moles, then the unknown concentration follows.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.6\" fill=\"#dce6f2\" font-weight=\"700\">Solutions &amp; Titration</text>\n  <rect x=\"10\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n    <text x=\"46\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7aabcf\" font-weight=\"700\">Core formulas</text><text x=\"46\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">c = n/V</text><text x=\"46\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">n = cV</text><text x=\"46\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">c₁V₁ = c₂V₂</text><rect x=\"92\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n    <text x=\"128\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#c9a060\" font-weight=\"700\">Titration path</text><text x=\"128\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">known c &amp; V</text><text x=\"128\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">find known moles</text><text x=\"128\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">use mole ratio</text><rect x=\"174\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n    <text x=\"210\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7ab060\" font-weight=\"700\">Final move</text><text x=\"210\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">unknown moles</text><text x=\"210\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">divide by volume</text><text x=\"210\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">state unit</text>\n  <text x=\"130\" y=\"104\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#9fb0c5\">Most errors come from wrong units or wrong stoichiometric ratio</text>\n </svg>",
    "caption": "The design idea is clean: formula block, workflow block, final answer block.",
    "steps": [
      "Write and balance the neutralisation or reaction equation.",
      "Convert volumes from cm³ to dm³.",
      "Find moles of the known solution using n = cV.",
      "Use the mole ratio to find moles of the unknown solution.",
      "Calculate the unknown concentration using c = n/V."
    ],
    "example": "25.0 cm³ NaOH is neutralised by 20.0 cm³ of 0.100 mol dm⁻³ HCl. HCl moles = 0.00200 mol, so NaOH moles = 0.00200 mol. NaOH concentration = 0.00200 / 0.0250 = 0.0800 mol dm⁻³."
  },
  {
    "cat": "Chemistry",
    "topic": "Physical Chemistry",
    "headings": [
      "Protons neutrons",
      "Orbital filling",
      "Valence electrons"
    ],
    "tags": [
      "chemistry",
      "physical",
      "atomic-structure",
      "electron-configuration"
    ],
    "title": "Topic 6 — Physical Chemistry: Atomic Structure & Electronic Configuration",
    "theory": "Atomic structure explains why the periodic table exists and why different elements react in different ways.",
    "reality": "Electron arrangement underlies flame colors, spectroscopy, semiconductor behavior, and chemical bonding.",
    "formula": "Atomic number Z = protons\nMass number A = protons + neutrons\nSubshell capacities: s2 p6 d10 f14\nFilling order: 1s 2s 2p 3s 3p 4s 3d 4p ...\nValence electrons largely control reactivity",
    "method": "Build the configuration from low energy to high energy, apply Pauli for pairing, and Hund for equal orbitals.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.6\" fill=\"#dce6f2\" font-weight=\"700\">Atomic Structure</text>\n  <rect x=\"10\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n    <text x=\"46\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7aabcf\" font-weight=\"700\">Particle counts</text><text x=\"46\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">Z = protons</text><text x=\"46\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">A = p + n</text><text x=\"46\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">neutral atom: e = p</text><rect x=\"92\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n    <text x=\"128\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#c9a060\" font-weight=\"700\">Subshells</text><text x=\"128\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">s holds 2</text><text x=\"128\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">p holds 6</text><text x=\"128\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">d holds 10</text><rect x=\"174\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n    <text x=\"210\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7ab060\" font-weight=\"700\">Configuration</text><text x=\"210\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">fill lower first</text><text x=\"210\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">Hund spreads out</text><text x=\"210\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">valence matters</text>\n  <text x=\"130\" y=\"104\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#9fb0c5\">Electronic configuration is the doorway to periodicity and bonding</text>\n </svg>",
    "caption": "Textbook logic: structure first, configuration second, properties third.",
    "steps": [
      "Use the atomic number to find the total electron count for a neutral atom.",
      "Fill orbitals in the accepted energy order.",
      "Apply Hund’s rule before pairing electrons in equal-energy orbitals.",
      "Use noble-gas shorthand to shorten longer configurations.",
      "Focus on the outermost electrons when explaining chemical behavior."
    ],
    "example": "Chlorine has Z = 17, so its configuration is 1s² 2s² 2p⁶ 3s² 3p⁵, or [Ne]3s²3p⁵."
  },
  {
    "cat": "Chemistry",
    "topic": "Physical Chemistry",
    "headings": [
      "Across a period",
      "Down a group",
      "Reason why"
    ],
    "tags": [
      "chemistry",
      "physical",
      "periodic-table",
      "trends"
    ],
    "title": "Topic 7 — Physical Chemistry: Periodic Table, Groups, Blocks & Trends",
    "theory": "Periodic trends are not random facts. They follow from nuclear charge, shielding, and the number of occupied shells.",
    "reality": "These trends help chemists predict bond type, ion formation, reactivity, acidity, and oxidising power.",
    "formula": "Across a period: radius ↓, ionisation energy ↑, electronegativity ↑\nDown a group: radius ↑, shielding ↑, ionisation energy ↓\nSame group: similar valence-shell pattern and similar chemistry\ns / p / d / f blocks reflect the subshell being filled",
    "method": "Explain every trend in words first: stronger pull across, more shielding down.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n    <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n    <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.4\" fill=\"#dce6f2\" font-weight=\"700\">Periodic Trends</text>\n    <line x1=\"26\" y1=\"68\" x2=\"234\" y2=\"68\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n    <text x=\"26\" y=\"56\" text-anchor=\"start\" font-size=\"7.4\" fill=\"#c07070\" font-weight=\"700\">large / metallic</text>\n    <text x=\"234\" y=\"56\" text-anchor=\"end\" font-size=\"7.4\" fill=\"#7ab060\" font-weight=\"700\">small / electronegative</text>\n    <line x1=\"30\" y1=\"64\" x2=\"30\" y2=\"74\" stroke=\"#9fb0c5\" stroke-width=\"0.8\"/>\n      <text x=\"30\" y=\"83\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#cfe0f4\">G1</text><line x1=\"46\" y1=\"64\" x2=\"46\" y2=\"74\" stroke=\"#9fb0c5\" stroke-width=\"0.8\"/>\n      <text x=\"46\" y=\"83\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#cfe0f4\">G2</text><line x1=\"62\" y1=\"64\" x2=\"62\" y2=\"74\" stroke=\"#9fb0c5\" stroke-width=\"0.8\"/>\n      <text x=\"62\" y=\"83\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#cfe0f4\">13</text><line x1=\"78\" y1=\"64\" x2=\"78\" y2=\"74\" stroke=\"#9fb0c5\" stroke-width=\"0.8\"/>\n      <text x=\"78\" y=\"83\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#cfe0f4\">14</text><line x1=\"94\" y1=\"64\" x2=\"94\" y2=\"74\" stroke=\"#9fb0c5\" stroke-width=\"0.8\"/>\n      <text x=\"94\" y=\"83\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#cfe0f4\">15</text><line x1=\"110\" y1=\"64\" x2=\"110\" y2=\"74\" stroke=\"#9fb0c5\" stroke-width=\"0.8\"/>\n      <text x=\"110\" y=\"83\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#cfe0f4\">16</text><line x1=\"126\" y1=\"64\" x2=\"126\" y2=\"74\" stroke=\"#9fb0c5\" stroke-width=\"0.8\"/>\n      <text x=\"126\" y=\"83\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#cfe0f4\">17</text>\n    <text x=\"130\" y=\"101\" text-anchor=\"middle\" font-size=\"7.4\" fill=\"#9fb0c5\">Across the table the pull strengthens; down the table shielding grows</text>\n  </svg>",
    "caption": "Do not memorise isolated arrows; learn the cause behind the arrows.",
    "steps": [
      "Locate the element by period and group.",
      "Count occupied shells from the period number.",
      "Infer valence-electron pattern from the group.",
      "Use effective nuclear pull to explain across-a-period changes.",
      "Use increased shielding and distance to explain down-a-group changes."
    ],
    "example": "Sodium is larger and less electronegative than chlorine because both are in period 3, but chlorine has much stronger effective nuclear pull across the period."
  },
  {
    "cat": "Chemistry",
    "topic": "Physical Chemistry",
    "headings": [
      "Bond type",
      "Shape",
      "Property link"
    ],
    "tags": [
      "chemistry",
      "physical",
      "bonding",
      "vsepr"
    ],
    "title": "Topic 8 — Physical Chemistry: Bonding, Molecular Shape & Intermolecular Forces",
    "theory": "Bonding explains shape, polarity, melting point, boiling point, hardness, and conductivity.",
    "reality": "Why table salt dissolves, why diamond is hard, why graphite conducts, and why water has unusual boiling behavior all come from bonding ideas.",
    "formula": "Ionic: electrostatic attraction after electron transfer\nCovalent: sharing of electron pairs\nMetallic: positive ions in a sea of delocalised electrons\nVSEPR: electron pairs repel to maximum separation\nShapes: linear 180°, trigonal planar 120°, tetrahedral 109.5°",
    "method": "Go in sequence: choose bond type, draw Lewis structure, predict shape, then explain polarity and properties.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.6\" fill=\"#dce6f2\" font-weight=\"700\">Bonding &amp; Shape</text>\n  <rect x=\"10\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n    <text x=\"46\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7aabcf\" font-weight=\"700\">Bond type</text><text x=\"46\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">ionic</text><text x=\"46\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">covalent</text><text x=\"46\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">metallic</text><rect x=\"92\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n    <text x=\"128\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#c9a060\" font-weight=\"700\">VSEPR</text><text x=\"128\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">count e⁻ pairs</text><text x=\"128\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">repulsion sets shape</text><text x=\"128\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">angles follow shape</text><rect x=\"174\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n    <text x=\"210\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7ab060\" font-weight=\"700\">Properties</text><text x=\"210\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">polarity</text><text x=\"210\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">IMF strength</text><text x=\"210\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">m.p. / conductivity</text>\n  <text x=\"130\" y=\"104\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#9fb0c5\">Structure → shape → polarity → properties</text>\n </svg>",
    "caption": "This card works like a mini textbook spread: classification, geometry, then properties.",
    "steps": [
      "Identify whether the substance is ionic, covalent, metallic, or giant covalent.",
      "Draw a Lewis structure for the particle or molecule.",
      "Count bonding and lone pairs around the central atom.",
      "Use VSEPR to predict shape and bond angle.",
      "Link the structure to melting point, solubility, and conductivity."
    ],
    "example": "NH₃ has three bonding pairs and one lone pair around nitrogen, so it is trigonal pyramidal and polar."
  },
  {
    "cat": "Chemistry",
    "topic": "Physical Chemistry",
    "headings": [
      "Particle view",
      "Gas laws",
      "Phase change"
    ],
    "tags": [
      "chemistry",
      "physical",
      "states-of-matter",
      "gas-laws"
    ],
    "title": "Topic 9 — Physical Chemistry: States of Matter, Gas Laws & Phase Changes",
    "theory": "The particle model connects microscopic motion to pressure, volume, temperature, and changes of state.",
    "reality": "Pressure cookers, aerosol cans, fridges, weather balloons, and boiling-point changes all rely on this chemistry.",
    "formula": "Boyle: P₁V₁ = P₂V₂\nCharles: V₁/T₁ = V₂/T₂\nGay-Lussac: P₁/T₁ = P₂/T₂\nIdeal gas: PV = nRT\nTemperature must be in kelvin",
    "method": "Start with the physical picture: particles farther apart or moving faster. Then choose the simplest formula matching the constant quantity.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.6\" fill=\"#dce6f2\" font-weight=\"700\">States &amp; Gas Laws</text>\n  <rect x=\"10\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n    <text x=\"46\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7aabcf\" font-weight=\"700\">Particle model</text><text x=\"46\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">solid: fixed</text><text x=\"46\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">liquid: close mobile</text><text x=\"46\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">gas: far apart</text><rect x=\"92\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n    <text x=\"128\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#c9a060\" font-weight=\"700\">Gas laws</text><text x=\"128\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">P ↔ V inverse</text><text x=\"128\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">V ↔ T direct</text><text x=\"128\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">P ↔ T direct</text><rect x=\"174\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n    <text x=\"210\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7ab060\" font-weight=\"700\">State change</text><text x=\"210\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">melting / freezing</text><text x=\"210\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">boiling / condensing</text><text x=\"210\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">latent heat</text>\n  <text x=\"130\" y=\"104\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#9fb0c5\">A good explanation uses particles, motion, spacing, and collisions</text>\n </svg>",
    "caption": "The formulas make more sense when you picture the particles first.",
    "steps": [
      "Identify which variables change and which stay constant.",
      "Convert any Celsius temperature to kelvin.",
      "Choose the matching gas-law relation.",
      "Rearrange and calculate using consistent units.",
      "Explain the result using particle spacing and kinetic energy."
    ],
    "example": "A gas at 2.0 dm³ and 300 K is heated to 450 K at constant pressure. V₂ = 2.0 × 450/300 = 3.0 dm³."
  },
  {
    "cat": "Chemistry",
    "topic": "Physical Chemistry",
    "headings": [
      "Heat change",
      "Bond energy",
      "Hess cycle"
    ],
    "tags": [
      "chemistry",
      "physical",
      "thermochemistry",
      "hess-law"
    ],
    "title": "Topic 10 — Physical Chemistry: Thermochemistry, Enthalpy & Hess’s Law",
    "theory": "Thermochemistry measures how much energy enters or leaves a chemical change.",
    "reality": "Cold packs, combustion fuels, batteries, food-energy labels, and industrial reactor design all depend on enthalpy change.",
    "formula": "q = mcΔT\nΔH = H(products) − H(reactants)\nΔH = Σ(bonds broken) − Σ(bonds formed)\nHess’s law: total enthalpy change is path independent\nExothermic: ΔH < 0, Endothermic: ΔH > 0",
    "method": "Use calorimetry when heat data are given, bond enthalpies when bonds are specified, and Hess cycles when indirect routes are provided.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.4\" fill=\"#dce6f2\" font-weight=\"700\">Energy Route</text>\n  <rect x=\"14\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(122,171,207,.12)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n    <text x=\"39\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#7aabcf\" font-weight=\"700\">Heat data</text>\n    <text x=\"39\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">q = mcΔT</text><rect x=\"74\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(201,160,96,.12)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n    <text x=\"99\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#c9a060\" font-weight=\"700\">Per mole</text>\n    <text x=\"99\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">divide by moles</text><rect x=\"134\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(122,176,96,.12)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n    <text x=\"159\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#7ab060\" font-weight=\"700\">Indirect route</text>\n    <text x=\"159\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">Hess cycle</text><rect x=\"194\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(192,112,112,.12)\" stroke=\"#c07070\" stroke-width=\"1\"/>\n    <text x=\"219\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#c07070\" font-weight=\"700\">Sign check</text>\n    <text x=\"219\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">exo or endo</text><line x1=\"64\" y1=\"53\" x2=\"68\" y2=\"53\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n    <path d=\"M 64 50 L 68 53 L 64 56\" fill=\"none\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/><line x1=\"124\" y1=\"53\" x2=\"128\" y2=\"53\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n    <path d=\"M 124 50 L 128 53 L 124 56\" fill=\"none\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/><line x1=\"184\" y1=\"53\" x2=\"188\" y2=\"53\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n    <path d=\"M 184 50 L 188 53 L 184 56\" fill=\"none\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n  <text x=\"130\" y=\"97\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#9fb0c5\">Breaking bonds needs energy; making bonds releases energy</text>\n </svg>",
    "caption": "An elegant enthalpy card separates numerical route, conceptual route, and sign interpretation.",
    "steps": [
      "Decide whether the process is exothermic or endothermic from the context or data.",
      "Use q = mcΔT if mass, temperature change, and specific heat are given.",
      "Convert heat to molar enthalpy if the problem asks “per mole”.",
      "Use a Hess cycle when the target enthalpy is not measured directly.",
      "Check the sign and units at the end."
    ],
    "example": "If 100 g of water warms by 5.0 °C, q = 100 × 4.18 × 5.0 = 2090 J. If the reaction caused the warming, it is exothermic."
  },
  {
    "cat": "Chemistry",
    "topic": "Physical Chemistry",
    "headings": [
      "Collision idea",
      "Rate law",
      "Catalyst"
    ],
    "tags": [
      "chemistry",
      "physical",
      "kinetics",
      "rate-law"
    ],
    "title": "Topic 11 — Physical Chemistry: Chemical Kinetics, Rate Law & Catalysis",
    "theory": "Kinetics studies how fast reactions proceed and why that speed changes.",
    "reality": "Catalytic converters, food spoilage, explosives, pharmaceuticals, and industrial reactors are all designed around rate control.",
    "formula": "rate = k[A]^m[B]^n\nOverall order = m + n\nFor first order: t₁/₂ = 0.693/k\nArrhenius: k = Ae^(−Eₐ/RT)\nCatalyst lowers activation energy, not the enthalpy change",
    "method": "Use collision theory for explanation and the rate law for calculation. Keep those two layers distinct but connected.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.6\" fill=\"#dce6f2\" font-weight=\"700\">Reaction Rate</text>\n  <rect x=\"10\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n    <text x=\"46\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7aabcf\" font-weight=\"700\">Why rate changes</text><text x=\"46\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">higher concentration</text><text x=\"46\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">higher temperature</text><text x=\"46\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">larger surface area</text><rect x=\"92\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n    <text x=\"128\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#c9a060\" font-weight=\"700\">Equation view</text><text x=\"128\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">rate = k[A]^m[B]^n</text><text x=\"128\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">find order from data</text><text x=\"128\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">k from substitution</text><rect x=\"174\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n    <text x=\"210\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7ab060\" font-weight=\"700\">Catalyst</text><text x=\"210\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">lower Eₐ</text><text x=\"210\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">alternative path</text><text x=\"210\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">same ΔH</text>\n  <text x=\"130\" y=\"104\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#9fb0c5\">Collision frequency and collision energy both matter</text>\n </svg>",
    "caption": "Learn kinetics in two voices: the particle story and the equation story.",
    "steps": [
      "Read how the rate changes when concentration changes.",
      "Use that pattern to determine the order in each reactant.",
      "Write the rate law and overall order.",
      "Use the correct integrated or half-life relation if time data are given.",
      "Explain catalyst action as lowering the activation-energy barrier."
    ],
    "example": "If doubling [A] makes the rate four times larger, the reaction is second order in A."
  },
  {
    "cat": "Chemistry",
    "topic": "Physical Chemistry",
    "headings": [
      "Equilibrium meaning",
      "K expressions",
      "Shift rules"
    ],
    "tags": [
      "chemistry",
      "physical",
      "equilibrium",
      "kc"
    ],
    "title": "Topic 12 — Physical Chemistry: Chemical Equilibrium, Kc & Le Chatelier",
    "theory": "At equilibrium, both directions continue but at equal rate. The composition becomes stable even though the reaction remains dynamic.",
    "reality": "Industrial ammonia and sulfur trioxide production are equilibrium-driven processes.",
    "formula": "At equilibrium: forward rate = reverse rate\nKc = [products]^coeff / [reactants]^coeff\nQ compares the current mixture with K\nLe Chatelier: a system shifts to oppose a disturbance\nCatalysts do not change K or the final equilibrium composition",
    "method": "Use K expressions for composition and Le Chatelier for direction of shift. Keep those jobs separate.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.6\" fill=\"#dce6f2\" font-weight=\"700\">Chemical Equilibrium</text>\n  <rect x=\"10\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n    <text x=\"46\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7aabcf\" font-weight=\"700\">Meaning</text><text x=\"46\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">dynamic</text><text x=\"46\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">rates equal</text><text x=\"46\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">not “stopped”</text><rect x=\"92\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n    <text x=\"128\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#c9a060\" font-weight=\"700\">Kc</text><text x=\"128\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">products on top</text><text x=\"128\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">reactants below</text><text x=\"128\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">powers = coefficients</text><rect x=\"174\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n    <text x=\"210\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7ab060\" font-weight=\"700\">Shift</text><text x=\"210\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">change conc</text><text x=\"210\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">change pressure</text><text x=\"210\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">change temperature</text>\n  <text x=\"130\" y=\"104\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#9fb0c5\">K tells where equilibrium lies; Le Chatelier tells how it responds</text>\n </svg>",
    "caption": "This card intentionally splits definition, expression, and disturbance-response into separate panels.",
    "steps": [
      "Write the balanced reversible equation.",
      "Construct the Kc expression using concentrations of relevant species.",
      "Compare Q with K if the starting mixture is not at equilibrium.",
      "Predict shifts for concentration, pressure, and temperature changes.",
      "Remember that catalysts only change how quickly equilibrium is reached."
    ],
    "example": "In N₂ + 3H₂ ⇌ 2NH₃, increasing pressure favors the ammonia side because it has fewer moles of gas."
  },
  {
    "cat": "Chemistry",
    "topic": "Physical Chemistry",
    "headings": [
      "pH scale",
      "Strong vs weak",
      "Buffer idea"
    ],
    "tags": [
      "chemistry",
      "physical",
      "acids-bases",
      "ph"
    ],
    "title": "Topic 13 — Physical Chemistry: Acids, Bases, pH, Buffers & Salt Hydrolysis",
    "theory": "Acid-base chemistry measures proton transfer and the concentration of hydrogen ions in solution.",
    "reality": "Blood pH control, antacids, soil treatment, cleaning agents, and fermentation all depend on acid-base balance.",
    "formula": "pH = −log[H⁺]\npOH = −log[OH⁻]\nStrong acids/bases dissociate nearly completely\nWeak acids/bases dissociate partially\nBuffer = weak acid/base + conjugate partner\nSalt hydrolysis can make a solution acidic or basic",
    "method": "Keep strong and weak cases separate. Then add buffer reasoning only after the basic pH idea is secure.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n    <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n    <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.4\" fill=\"#dce6f2\" font-weight=\"700\">pH Scale</text>\n    <line x1=\"26\" y1=\"68\" x2=\"234\" y2=\"68\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n    <text x=\"26\" y=\"56\" text-anchor=\"start\" font-size=\"7.4\" fill=\"#c07070\" font-weight=\"700\">acidic</text>\n    <text x=\"234\" y=\"56\" text-anchor=\"end\" font-size=\"7.4\" fill=\"#7ab060\" font-weight=\"700\">basic</text>\n    <line x1=\"30\" y1=\"64\" x2=\"30\" y2=\"74\" stroke=\"#9fb0c5\" stroke-width=\"0.8\"/>\n      <text x=\"30\" y=\"83\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#cfe0f4\">0</text><line x1=\"46\" y1=\"64\" x2=\"46\" y2=\"74\" stroke=\"#9fb0c5\" stroke-width=\"0.8\"/>\n      <text x=\"46\" y=\"83\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#cfe0f4\">2</text><line x1=\"62\" y1=\"64\" x2=\"62\" y2=\"74\" stroke=\"#9fb0c5\" stroke-width=\"0.8\"/>\n      <text x=\"62\" y=\"83\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#cfe0f4\">4</text><line x1=\"78\" y1=\"64\" x2=\"78\" y2=\"74\" stroke=\"#9fb0c5\" stroke-width=\"0.8\"/>\n      <text x=\"78\" y=\"83\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#cfe0f4\">6</text><line x1=\"94\" y1=\"64\" x2=\"94\" y2=\"74\" stroke=\"#9fb0c5\" stroke-width=\"0.8\"/>\n      <text x=\"94\" y=\"83\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#cfe0f4\">7</text><line x1=\"110\" y1=\"64\" x2=\"110\" y2=\"74\" stroke=\"#9fb0c5\" stroke-width=\"0.8\"/>\n      <text x=\"110\" y=\"83\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#cfe0f4\">8</text><line x1=\"126\" y1=\"64\" x2=\"126\" y2=\"74\" stroke=\"#9fb0c5\" stroke-width=\"0.8\"/>\n      <text x=\"126\" y=\"83\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#cfe0f4\">10</text><line x1=\"142\" y1=\"64\" x2=\"142\" y2=\"74\" stroke=\"#9fb0c5\" stroke-width=\"0.8\"/>\n      <text x=\"142\" y=\"83\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#cfe0f4\">12</text><line x1=\"158\" y1=\"64\" x2=\"158\" y2=\"74\" stroke=\"#9fb0c5\" stroke-width=\"0.8\"/>\n      <text x=\"158\" y=\"83\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#cfe0f4\">14</text>\n    <text x=\"130\" y=\"101\" text-anchor=\"middle\" font-size=\"7.4\" fill=\"#9fb0c5\">pH 7 is neutral; lower means higher [H⁺], higher means higher [OH⁻]</text>\n  </svg>",
    "caption": "A good textbook pH card shows both the numerical scale and the chemistry behind the numbers.",
    "steps": [
      "Identify whether the solution contains a strong acid/base, weak acid/base, or a buffer.",
      "Calculate [H⁺] or [OH⁻] first if needed.",
      "Use the pH definition to convert between concentration and pH.",
      "Explain buffer action using the weak acid/base and its conjugate partner.",
      "Consider salt hydrolysis when the solution comes from a weak acid or weak base."
    ],
    "example": "If [H⁺] = 1.0 × 10⁻³ mol dm⁻³, pH = 3. A mixture of CH₃COOH and CH₃COO⁻ acts as a buffer and resists sharp pH changes."
  },
  {
    "cat": "Chemistry",
    "topic": "Physical Chemistry",
    "headings": [
      "Redox idea",
      "Cell parts",
      "Electrolysis"
    ],
    "tags": [
      "chemistry",
      "physical",
      "electrochemistry",
      "redox"
    ],
    "title": "Topic 14 — Physical Chemistry: Electrochemistry, Redox Cells & Electrolysis",
    "theory": "Electrochemistry studies electron transfer and how chemical change can generate electrical energy or be driven by it.",
    "reality": "Batteries, corrosion, electroplating, metal extraction, and chlor-alkali industry all use electrochemistry.",
    "formula": "Oxidation = loss of electrons\nReduction = gain of electrons\nE°cell = E°cathode − E°anode\nQ = It\nFaraday: m = MIt / nF\nAnode = oxidation, cathode = reduction",
    "method": "Break every electrochemical problem into half-equations first. Once oxidation and reduction are clear, the rest becomes easier.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.4\" fill=\"#dce6f2\" font-weight=\"700\">Electrochemical Cell</text>\n  <rect x=\"20\" y=\"34\" width=\"52\" height=\"46\" rx=\"8\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n  <text x=\"46\" y=\"48\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\" font-weight=\"700\">ANODE</text>\n  <text x=\"46\" y=\"61\" text-anchor=\"middle\" font-size=\"7\" fill=\"#e6cf9a\">oxidation</text>\n  <rect x=\"188\" y=\"34\" width=\"52\" height=\"46\" rx=\"8\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n  <text x=\"214\" y=\"48\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7ab060\" font-weight=\"700\">CATHODE</text>\n  <text x=\"214\" y=\"61\" text-anchor=\"middle\" font-size=\"7\" fill=\"#cfe3c4\">reduction</text>\n  <line x1=\"72\" y1=\"44\" x2=\"188\" y2=\"44\" stroke=\"#9fb0c5\" stroke-width=\"1.3\"/>\n  <path d=\"M 178 40 L 188 44 L 178 48\" fill=\"none\" stroke=\"#9fb0c5\" stroke-width=\"1.3\"/>\n  <text x=\"130\" y=\"37\" text-anchor=\"middle\" font-size=\"7\" fill=\"#cfe0f4\">electron flow</text>\n  <path d=\"M 72 70 C 100 92, 160 92, 188 70\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"1.2\" stroke-dasharray=\"3 2\"/>\n  <text x=\"130\" y=\"96\" text-anchor=\"middle\" font-size=\"7.3\" fill=\"#9fb0c5\">salt bridge / ion migration keeps charge balanced</text>\n  <text x=\"130\" y=\"106\" text-anchor=\"middle\" font-size=\"7.4\" fill=\"#9fb0c5\">Galvanic cells are spontaneous; electrolysis uses external power</text>\n  </svg>",
    "caption": "Elegant cell design: separate the electrodes, show electron flow, then label oxidation and reduction clearly.",
    "steps": [
      "Write oxidation and reduction half-equations.",
      "Identify the anode and cathode from those half-equations.",
      "For cell potentials, subtract anode potential from cathode potential.",
      "For electrolysis, decide which ions or molecules are discharged at each electrode.",
      "Use Q = It and Faraday’s law for mass or deposition calculations."
    ],
    "example": "In a Daniell cell, zinc is oxidised at the anode and Cu²⁺ is reduced at the cathode. Electrons flow from zinc to copper through the wire."
  },
  {
    "cat": "Chemistry",
    "topic": "Organic Chemistry",
    "headings": [
      "Functional group",
      "Naming route",
      "Series idea"
    ],
    "tags": [
      "chemistry",
      "organic",
      "functional-groups",
      "iupac"
    ],
    "title": "Topic 15 — Organic Chemistry: Functional Groups, Homologous Series & IUPAC Naming",
    "theory": "Organic chemistry becomes much easier when compounds are sorted by functional group, because the functional group predicts the main reactions.",
    "reality": "Fuels, plastics, perfumes, pharmaceuticals, and soaps all depend on understanding functional groups.",
    "formula": "Key groups:\nalkane C–C only\nalkene C=C\nalcohol −OH\naldehyde −CHO\nketone >C=O\ncarboxylic acid −COOH\nester −COO−\namine −NH₂\nhalogenoalkane C−X",
    "method": "Name the compound in a fixed order: find the parent chain, locate the highest-priority functional group, number for lowest locant, then add substituents.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.4\" fill=\"#dce6f2\" font-weight=\"700\">Functional Groups</text>\n  <line x1=\"12\" y1=\"28\" x2=\"248\" y2=\"28\" stroke=\"#7aabcf\" stroke-width=\"0.8\"/>\n  <text x=\"14\" y=\"24\" font-size=\"7.5\" fill=\"#7aabcf\" font-weight=\"700\">Family</text>\n  <text x=\"110\" y=\"24\" font-size=\"7.5\" fill=\"#c9a060\" font-weight=\"700\">Group clue</text>\n  <text x=\"190\" y=\"24\" font-size=\"7.5\" fill=\"#7ab060\" font-weight=\"700\">Naming clue</text>\n  <rect x=\"12\" y=\"30\" width=\"236\" height=\"12\" fill=\"rgba(255,255,255,.03)\"/>\n    <text x=\"14\" y=\"38\" font-size=\"7.1\" fill=\"#cfe0f4\">Alkane</text>\n    <text x=\"110\" y=\"38\" font-size=\"7.1\" fill=\"#e5c98d\">single bonds</text>\n    <text x=\"190\" y=\"38\" font-size=\"7.1\" fill=\"#b9dba8\">-ane</text><rect x=\"12\" y=\"42\" width=\"236\" height=\"12\" fill=\"rgba(255,255,255,.01)\"/>\n    <text x=\"14\" y=\"50\" font-size=\"7.1\" fill=\"#cfe0f4\">Alkene</text>\n    <text x=\"110\" y=\"50\" font-size=\"7.1\" fill=\"#e5c98d\">C=C</text>\n    <text x=\"190\" y=\"50\" font-size=\"7.1\" fill=\"#b9dba8\">-ene</text><rect x=\"12\" y=\"54\" width=\"236\" height=\"12\" fill=\"rgba(255,255,255,.03)\"/>\n    <text x=\"14\" y=\"62\" font-size=\"7.1\" fill=\"#cfe0f4\">Alcohol</text>\n    <text x=\"110\" y=\"62\" font-size=\"7.1\" fill=\"#e5c98d\">−OH</text>\n    <text x=\"190\" y=\"62\" font-size=\"7.1\" fill=\"#b9dba8\">-ol</text><rect x=\"12\" y=\"66\" width=\"236\" height=\"12\" fill=\"rgba(255,255,255,.01)\"/>\n    <text x=\"14\" y=\"74\" font-size=\"7.1\" fill=\"#cfe0f4\">Carbonyls</text>\n    <text x=\"110\" y=\"74\" font-size=\"7.1\" fill=\"#e5c98d\">−CHO / &gt;C=O</text>\n    <text x=\"190\" y=\"74\" font-size=\"7.1\" fill=\"#b9dba8\">-al / -one</text><rect x=\"12\" y=\"78\" width=\"236\" height=\"12\" fill=\"rgba(255,255,255,.03)\"/>\n    <text x=\"14\" y=\"86\" font-size=\"7.1\" fill=\"#cfe0f4\">Acid / ester</text>\n    <text x=\"110\" y=\"86\" font-size=\"7.1\" fill=\"#e5c98d\">−COOH / −COO−</text>\n    <text x=\"190\" y=\"86\" font-size=\"7.1\" fill=\"#b9dba8\">-oic acid / -oate</text>\n  <text x=\"130\" y=\"106\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#9fb0c5\">Spot the functional group first — it usually gives the suffix and the chemistry</text>\n </svg>",
    "caption": "This card is designed like a compact textbook table: family, structural clue, and naming clue side by side.",
    "steps": [
      "Identify the highest-priority functional group.",
      "Choose the longest parent chain containing that group.",
      "Number the chain to give the key group the lowest locant.",
      "Name substituents and put them in alphabetical order.",
      "Combine locants, prefixes, parent name, and suffix."
    ],
    "example": "CH₃CH₂CH₂OH is propan-1-ol: a three-carbon chain with the alcohol group on carbon 1."
  },
  {
    "cat": "Chemistry",
    "topic": "Organic Chemistry",
    "headings": [
      "Same formula",
      "Different layout",
      "3D arrangement"
    ],
    "tags": [
      "chemistry",
      "organic",
      "isomerism",
      "stereochemistry"
    ],
    "title": "Topic 16 — Organic Chemistry: Isomerism, Resonance & Stereochemistry",
    "theory": "Molecules with the same molecular formula can differ in connectivity or in 3D arrangement, giving different properties.",
    "reality": "Drug activity, fragrance, and biological recognition often depend on stereochemistry rather than just molecular formula.",
    "formula": "Structural isomerism: same formula, different connectivity\nChain isomerism / position isomerism / functional isomerism\nGeometric isomerism: cis-trans or E/Z\nOptical isomerism: chiral center, non-superimposable mirror images\nResonance: multiple valid contributing structures for one delocalised system",
    "method": "Ask two questions: are the atoms connected differently, or connected the same way but arranged differently in space?",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.6\" fill=\"#dce6f2\" font-weight=\"700\">Isomerism</text>\n  <rect x=\"10\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n    <text x=\"46\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7aabcf\" font-weight=\"700\">Structural</text><text x=\"46\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">same formula</text><text x=\"46\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">different skeleton</text><text x=\"46\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">or group position</text><rect x=\"92\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n    <text x=\"128\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#c9a060\" font-weight=\"700\">Geometric</text><text x=\"128\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">restricted rotation</text><text x=\"128\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">cis / trans</text><text x=\"128\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">E / Z</text><rect x=\"174\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n    <text x=\"210\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7ab060\" font-weight=\"700\">Optical</text><text x=\"210\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">chiral centre</text><text x=\"210\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">mirror images</text><text x=\"210\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">plane-polarised light</text>\n  <text x=\"130\" y=\"104\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#9fb0c5\">The formula stays the same, but the arrangement changes</text>\n </svg>",
    "caption": "A good isomerism card separates structure, geometry, and chirality so the ideas do not blur together.",
    "steps": [
      "Write the molecular formula and possible carbon skeletons.",
      "Move the functional group or multiple bond where allowed.",
      "Check for double bonds or rings that restrict rotation.",
      "Look for tetrahedral carbons with four different groups to find chiral centres.",
      "Use resonance when a structure is better described by delocalised electrons."
    ],
    "example": "C₂H₆O can be ethanol or dimethyl ether — same formula, different functional group, so they are structural isomers."
  },
  {
    "cat": "Chemistry",
    "topic": "Organic Chemistry",
    "headings": [
      "Add",
      "Replace",
      "Remove"
    ],
    "tags": [
      "chemistry",
      "organic",
      "reactions"
    ],
    "title": "Topic 17 — Organic Chemistry: Reaction Types, Conversions & Mechanistic Thinking",
    "theory": "Most organic reactions fall into a few families. Learning those families is more efficient than memorising isolated equations.",
    "reality": "Organic synthesis in medicines and materials is basically a planned map of conversions between functional groups.",
    "formula": "Addition: atoms add across C=C or C≡C\nSubstitution: one atom/group replaces another\nElimination: small molecule removed, often creating C=C\nCondensation: two molecules join, small molecule lost\nHydrolysis: bond broken by water",
    "method": "Track how the bonding changes. If a π bond disappears, it is often addition; if a leaving group is replaced, substitution; if a π bond appears, elimination.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.4\" fill=\"#dce6f2\" font-weight=\"700\">Organic Reaction Map</text>\n  <rect x=\"14\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(122,171,207,.12)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n    <text x=\"39\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#7aabcf\" font-weight=\"700\">Alkene</text>\n    <text x=\"39\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">addition</text><rect x=\"74\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(201,160,96,.12)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n    <text x=\"99\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#c9a060\" font-weight=\"700\">Haloalkane</text>\n    <text x=\"99\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">substitution</text><rect x=\"134\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(122,176,96,.12)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n    <text x=\"159\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#7ab060\" font-weight=\"700\">Alcohol</text>\n    <text x=\"159\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">elimination / oxidation</text><rect x=\"194\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(192,112,112,.12)\" stroke=\"#c07070\" stroke-width=\"1\"/>\n    <text x=\"219\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#c07070\" font-weight=\"700\">Acid / ester</text>\n    <text x=\"219\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">condensation</text><line x1=\"64\" y1=\"53\" x2=\"68\" y2=\"53\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n    <path d=\"M 64 50 L 68 53 L 64 56\" fill=\"none\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/><line x1=\"124\" y1=\"53\" x2=\"128\" y2=\"53\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n    <path d=\"M 124 50 L 128 53 L 124 56\" fill=\"none\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/><line x1=\"184\" y1=\"53\" x2=\"188\" y2=\"53\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n    <path d=\"M 184 50 L 188 53 L 184 56\" fill=\"none\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n  <text x=\"130\" y=\"97\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#9fb0c5\">Reaction type follows the bond change more than the reagent name</text>\n </svg>",
    "caption": "This card is deliberately conversion-based: start material → reaction family → new functional group.",
    "steps": [
      "Identify the functional group in the starting compound.",
      "Identify the functional group in the product.",
      "Choose the reaction family that connects the two.",
      "Add the typical condition such as catalyst, heat, UV light, acid, or base.",
      "Check whether the overall change also counts as oxidation or reduction."
    ],
    "example": "Ethene + Br₂ → 1,2-dibromoethane is addition because the C=C bond opens and bromine atoms add across it."
  },
  {
    "cat": "Chemistry",
    "topic": "Organic Chemistry",
    "headings": [
      "Oxidation ladder",
      "Ester chemistry",
      "Polymer idea"
    ],
    "tags": [
      "chemistry",
      "organic",
      "oxidation",
      "polymers"
    ],
    "title": "Topic 18 — Organic Chemistry: Oxidation, Reduction, Esters & Polymer Chemistry",
    "theory": "Organic transformations become easier when seen as a ladder: alcohols, carbonyl compounds, acids, esters, and polymers each connect in predictable ways.",
    "reality": "Vinegar formation, soap making, polyester fibers, fruit fragrances, and plastic manufacturing all depend on these transformations.",
    "formula": "1° alcohol → aldehyde → carboxylic acid\n2° alcohol → ketone\nAldehyde/ketone + [H] → alcohol\nCarboxylic acid + alcohol ⇌ ester + water\nMany monomers → polymer",
    "method": "Classify the starting functional group first, then move up or down the ladder using oxidation, reduction, esterification, hydrolysis, or polymerisation.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.4\" fill=\"#dce6f2\" font-weight=\"700\">Organic Transformation Ladder</text>\n  <rect x=\"14\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(122,171,207,.12)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n    <text x=\"39\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#7aabcf\" font-weight=\"700\">1° alcohol</text>\n    <text x=\"39\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">oxidise</text><rect x=\"74\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(201,160,96,.12)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n    <text x=\"99\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#c9a060\" font-weight=\"700\">aldehyde</text>\n    <text x=\"99\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">oxidise</text><rect x=\"134\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(122,176,96,.12)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n    <text x=\"159\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#7ab060\" font-weight=\"700\">acid</text>\n    <text x=\"159\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">esterify</text><rect x=\"194\" y=\"38\" width=\"50\" height=\"30\" rx=\"8\" fill=\"rgba(192,112,112,.12)\" stroke=\"#c07070\" stroke-width=\"1\"/>\n    <text x=\"219\" y=\"49\" text-anchor=\"middle\" font-size=\"7.6\" fill=\"#c07070\" font-weight=\"700\">ester / polymer</text>\n    <text x=\"219\" y=\"61\" text-anchor=\"middle\" font-size=\"6.8\" fill=\"#dce6f2\">hydrolyse or build</text><line x1=\"64\" y1=\"53\" x2=\"68\" y2=\"53\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n    <path d=\"M 64 50 L 68 53 L 64 56\" fill=\"none\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/><line x1=\"124\" y1=\"53\" x2=\"128\" y2=\"53\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n    <path d=\"M 124 50 L 128 53 L 124 56\" fill=\"none\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/><line x1=\"184\" y1=\"53\" x2=\"188\" y2=\"53\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n    <path d=\"M 184 50 L 188 53 L 184 56\" fill=\"none\" stroke=\"#9fb0c5\" stroke-width=\"1.2\"/>\n  <text x=\"130\" y=\"97\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#9fb0c5\">Following the ladder keeps long organic-conversion questions under control</text>\n </svg>",
    "caption": "An elegant ladder graphic helps students learn direction and product type at a glance.",
    "steps": [
      "Decide whether the starting alcohol is primary, secondary, or tertiary.",
      "Choose oxidation or reduction conditions according to the target compound.",
      "For esterification, combine a carboxylic acid and an alcohol and remove water.",
      "For hydrolysis or saponification, split the ester using water or alkali.",
      "For polymer questions, identify the repeating unit and whether the polymer is addition or condensation type."
    ],
    "example": "Ethanol oxidises to ethanal and then ethanoic acid. Ethanoic acid with ethanol forms ethyl ethanoate and water."
  },
  {
    "cat": "Chemistry",
    "topic": "Applied Chemistry",
    "headings": [
      "Industrial process",
      "Separation",
      "Green chemistry"
    ],
    "tags": [
      "chemistry",
      "applied",
      "industrial",
      "green-chemistry"
    ],
    "title": "Topic 19 — Applied Chemistry: Industrial Processes, Separation & Green Chemistry",
    "theory": "Applied chemistry turns core principles into large-scale production, purification, and environmental management.",
    "reality": "Fertilizers, sulfuric acid, purified water, pharmaceuticals, and low-waste processes all come from applied chemistry.",
    "formula": "Haber: N₂ + 3H₂ ⇌ 2NH₃\nContact: 2SO₂ + O₂ ⇌ 2SO₃\nSeparation methods: filtration, crystallisation, distillation, chromatography\nGreen chemistry aims: high atom economy, less waste, lower toxicity, catalysts, renewable feedstocks",
    "method": "Think like an engineer: maximize useful product while balancing safety, cost, energy use, and environmental impact.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.6\" fill=\"#dce6f2\" font-weight=\"700\">Applied Chemistry</text>\n  <rect x=\"10\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n    <text x=\"46\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7aabcf\" font-weight=\"700\">Major processes</text><text x=\"46\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">Haber</text><text x=\"46\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">Contact</text><text x=\"46\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">catalyst use</text><rect x=\"92\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n    <text x=\"128\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#c9a060\" font-weight=\"700\">Separation</text><text x=\"128\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">filtration</text><text x=\"128\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">distillation</text><text x=\"128\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">chromatography</text><rect x=\"174\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n    <text x=\"210\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7ab060\" font-weight=\"700\">Green chemistry</text><text x=\"210\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">atom economy</text><text x=\"210\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">renewable feedstocks</text><text x=\"210\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">less waste</text>\n  <text x=\"130\" y=\"104\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#9fb0c5\">The best industrial conditions are usually a compromise, not an extreme</text>\n </svg>",
    "caption": "This card combines process chemistry with practical engineering choices.",
    "steps": [
      "Write the process equation and identify if it is reversible.",
      "Use equilibrium ideas to discuss yield and operating conditions.",
      "Choose the correct separation method based on size, solubility, or boiling point.",
      "Evaluate waste using percent yield and atom economy.",
      "Link the process to a greener alternative when possible."
    ],
    "example": "The Haber process uses high pressure, moderate temperature, and an iron catalyst — a compromise between high yield, acceptable rate, and workable cost."
  },
  {
    "cat": "Chemistry",
    "topic": "Nuclear Chemistry",
    "headings": [
      "Decay type",
      "Half-life",
      "Energy release"
    ],
    "tags": [
      "chemistry",
      "nuclear",
      "radioactivity"
    ],
    "title": "Topic 20 — Nuclear Chemistry: Radioactivity, Decay, Half-Life & Nuclear Energy",
    "theory": "Nuclear chemistry deals with changes in the nucleus, not in electron arrangement. These changes can release huge amounts of energy.",
    "reality": "Radiotherapy, smoke detectors, radiocarbon dating, nuclear power, and the energy of stars all rely on nuclear processes.",
    "formula": "α decay: A − 4, Z − 2\nβ⁻ decay: A unchanged, Z + 1\nγ emission: no change in A or Z\nN = N₀(1/2)^(t/t½)\nE = Δmc²\nFission splits heavy nuclei; fusion joins light nuclei",
    "method": "Balance every nuclear equation by conserving both mass number and atomic number.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"108\" rx=\"10\" fill=\"rgba(18,24,36,.22)\" stroke=\"#5f6f8a\" stroke-width=\"0.8\"/>\n  <rect x=\"6\" y=\"6\" width=\"248\" height=\"16\" rx=\"10\" fill=\"rgba(122,171,207,.18)\"/>\n  <text x=\"130\" y=\"17\" text-anchor=\"middle\" font-size=\"9.6\" fill=\"#dce6f2\" font-weight=\"700\">Nuclear Chemistry</text>\n  <rect x=\"10\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n    <text x=\"46\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7aabcf\" font-weight=\"700\">Radiation</text><text x=\"46\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">alpha</text><text x=\"46\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">beta</text><text x=\"46\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7aabcf\" font-weight=\"600\">gamma</text><rect x=\"92\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n    <text x=\"128\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#c9a060\" font-weight=\"700\">Half-life</text><text x=\"128\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">repeated halving</text><text x=\"128\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">N = N₀(1/2)^n</text><text x=\"128\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#c9a060\" font-weight=\"600\">time = n·t½</text><rect x=\"174\" y=\"28\" width=\"72\" height=\"56\" rx=\"8\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n    <text x=\"210\" y=\"18\" text-anchor=\"middle\" font-size=\"8.2\" fill=\"#7ab060\" font-weight=\"700\">Energy</text><text x=\"210\" y=\"46\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">fission</text><text x=\"210\" y=\"58\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">fusion</text><text x=\"210\" y=\"70\" text-anchor=\"middle\" font-size=\"7.2\" fill=\"#7ab060\" font-weight=\"600\">E = Δmc²</text>\n  <text x=\"130\" y=\"104\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#9fb0c5\">Chemical change rearranges electrons; nuclear change alters the nucleus itself</text>\n </svg>",
    "caption": "A textbook nuclear card should always separate radiation identity, decay math, and energy ideas.",
    "steps": [
      "Identify the radiation type or missing particle.",
      "Balance mass numbers on both sides of the equation.",
      "Balance atomic numbers on both sides.",
      "For half-life questions, count how many half-lives have elapsed and halve repeatedly.",
      "Relate nuclear applications to penetration, ionising power, and energy release."
    ],
    "example": "²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He is α decay. After 3 half-lives, a sample has 1/8 = 12.5% of its original amount remaining."
  },
  {
    "cat": "Physics",
    "tags": [
      "physics",
      "engineering"
    ],
    "title": "Classical Mechanics: Kinematics, Forces & Energy",
    "theory": "",
    "reality": "How fast does a falling object hit the ground? How much braking force stops a car safely? NASA uses these exact equations to land rockets. Car makers use them to design safer airbags. Every sport — throwing, jumping, kicking — follows these laws of motion.",
    "formula": "v = v₀ + at\nx = x₀ + v₀t + ½at²\nv² = v₀² + 2a·Δx\nF = ma\nW = F·d·cosθ\nKE = ½mv²\nPE = mgh\nConservation: KE+PE = constant\np = mv  (momentum)\nJ = FΔt = Δp  (impulse)",
    "method": "Free-body diagram (FBD) protocol: draw the object as a dot, add every force vector with a label, write ΣF=ma for x and y separately. This systematic approach prevents missing forces and is required on AP FRQs.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"90\" y=\"54\" width=\"80\" height=\"40\" rx=\"6\" fill=\"rgba(122,171,207,.15)\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <text x=\"130\" y=\"78\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\">OBJECT</text>\n  <defs><marker id=\"fv\" markerWidth=\"6\" markerHeight=\"6\" refX=\"5\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#c9a060\"/></marker></defs>\n  <line x1=\"130\" y1=\"54\" x2=\"130\" y2=\"20\" stroke=\"#c9a060\" stroke-width=\"2.5\" marker-end=\"url(#fv)\"/>\n  <text x=\"134\" y=\"38\" font-size=\"8\" fill=\"#c9a060\">N (normal)</text>\n  <line x1=\"130\" y1=\"94\" x2=\"130\" y2=\"116\" stroke=\"#c07070\" stroke-width=\"2.5\" marker-end=\"url(#fv)\"/>\n  <text x=\"134\" y=\"112\" font-size=\"8\" fill=\"#c07070\">mg (weight)</text>\n  <line x1=\"90\" y1=\"74\" x2=\"54\" y2=\"74\" stroke=\"#7ab060\" stroke-width=\"2.5\" marker-end=\"url(#fv)\"/>\n  <text x=\"36\" y=\"70\" font-size=\"8\" fill=\"#7ab060\">f (friction)</text>\n  <line x1=\"170\" y1=\"74\" x2=\"210\" y2=\"74\" stroke=\"#c9a060\" stroke-width=\"2.5\" marker-end=\"url(#fv)\"/>\n  <text x=\"212\" y=\"78\" font-size=\"8\" fill=\"#c9a060\">F (applied)</text>\n  <text x=\"130\" y=\"116\" text-anchor=\"middle\" font-size=\"0\" fill=\"#888\">.</text>\n  <text x=\"20\" y=\"14\" font-size=\"8.5\" fill=\"#8a8a8a\">FBD: draw all forces, then ΣF=ma</text>\n </svg>",
    "caption": "Free-body diagram: every force on the object as a vector. ΣF=ma per axis separately.",
    "steps": [
      "Draw the FBD: object as dot, every force labeled with direction.",
      "Set up x and y equations: ΣFₓ = maₓ and ΣFy = may.",
      "For energy problems: identify initial and final states, set up KE+PE_initial = KE+PE_final (no friction) or include work by friction.",
      "For projectile motion: horizontal (constant velocity) and vertical (constant g=9.8 m/s²) are independent.",
      "For impulse-momentum: J = FΔt = Δp. For elastic collisions, both momentum and KE are conserved."
    ],
    "example": "Block, m=5 kg, pushed by F=20 N on frictionless surface: a=F/m=20/5=4 m/s². After 3 s: v=0+4(3)=12 m/s. KE=½(5)(144)=360 J. FBD: N and mg cancel vertically, F causes horizontal acceleration."
  },
  {
    "cat": "Physics",
    "tags": [
      "physics",
      "engineering",
      "chemistry"
    ],
    "title": "Electricity, Magnetism, Waves & Thermodynamics",
    "theory": "",
    "reality": "Every electronic device runs on circuits. Your phone charger controls voltage and current. MRI machines in hospitals use magnetic fields to see inside your body without surgery. Solar panels convert light waves into electricity for your home. This physics powers the modern world.",
    "formula": "V = IR  (Ohm's Law)\nP = IV = I²R = V²/R\nSeries: R_total = ΣRᵢ\nParallel: 1/R = Σ(1/Rᵢ)\nCoulomb: F = kq₁q₂/r²\nE field: E = kQ/r²\nWave: v = fλ\nSnell: n₁sinθ₁ = n₂sinθ₂\nPV = nRT,  Q = mcΔT",
    "method": "Kirchhoff's Laws: KCL — current in = current out at any node (charge conservation). KVL — sum of voltage drops around any closed loop = 0 (energy conservation). Use these systematically to solve any circuit.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"8\" y=\"10\" width=\"120\" height=\"96\" rx=\"8\" fill=\"rgba(122,171,207,.08)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <text x=\"68\" y=\"24\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7aabcf\" font-weight=\"700\">Series Circuit</text>\n  <line x1=\"30\" y1=\"50\" x2=\"60\" y2=\"50\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <rect x=\"60\" y=\"42\" width=\"24\" height=\"16\" rx=\"3\" fill=\"none\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <text x=\"72\" y=\"53\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">R₁</text>\n  <line x1=\"84\" y1=\"50\" x2=\"100\" y2=\"50\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <rect x=\"100\" y=\"42\" width=\"24\" height=\"16\" rx=\"3\" fill=\"none\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <text x=\"112\" y=\"53\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">R₂</text>\n  <line x1=\"30\" y1=\"50\" x2=\"30\" y2=\"80\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <line x1=\"124\" y1=\"50\" x2=\"124\" y2=\"80\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <circle cx=\"50\" cy=\"80\" r=\"12\" fill=\"none\" stroke=\"#7ab060\" stroke-width=\"2\"/>\n  <text x=\"50\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\">V</text>\n  <line x1=\"30\" y1=\"80\" x2=\"38\" y2=\"80\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <line x1=\"62\" y1=\"80\" x2=\"124\" y2=\"80\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <text x=\"68\" y=\"100\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\">same I, V splits</text>\n  <rect x=\"140\" y=\"10\" width=\"112\" height=\"96\" rx=\"8\" fill=\"rgba(201,160,96,.08)\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <text x=\"196\" y=\"24\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#c9a060\" font-weight=\"700\">Wave Properties</text>\n  <path d=\"M148 60 Q162 38 176 60 Q190 82 204 60 Q218 38 232 60\" fill=\"none\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <line x1=\"148\" y1=\"60\" x2=\"232\" y2=\"60\" stroke=\"#888\" stroke-width=\"1\"/>\n  <line x1=\"162\" y1=\"38\" x2=\"190\" y2=\"38\" stroke=\"#7ab060\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <text x=\"176\" y=\"34\" text-anchor=\"middle\" font-size=\"7\" fill=\"#7ab060\">λ (wavelength)</text>\n  <text x=\"196\" y=\"88\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">v = fλ</text>\n  <text x=\"196\" y=\"100\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#c9a060\">speed=freq×wavelength</text>\n </svg>",
    "caption": "Series circuit: same current, voltage splits. Parallel: same voltage, current splits. Wave: v=fλ.",
    "steps": [
      "For circuits: identify series vs parallel components. Series: same current, add voltages. Parallel: same voltage, add currents.",
      "Use Kirchhoff's KVL to write voltage loop equations and KCL for node current equations.",
      "For Coulomb's law: F = kq₁q₂/r² — force and electric field both follow inverse-square law.",
      "For waves: know v=fλ. For light in media, use Snell's law with refractive indices.",
      "For thermodynamics: track Q (heat added +, removed −), W (work done by system), and ΔU = Q − W."
    ],
    "example": "V=12 V, R₁=3 Ω, R₂=6 Ω in series: R_total=9 Ω. I=12/9=1.33 A. V₁=1.33×3=4 V, V₂=1.33×6=8 V. Check: 4+8=12 ✓"
  },
  {
    "cat": "Finance & Commerce",
    "tags": [
      "finance",
      "daily"
    ],
    "title": "Interest, Compound Growth & Loan Payments",
    "theory": "",
    "reality": "Save $100 at 5% interest and it doubles to $200 in about 14 years — without doing anything extra! But credit card debt grows the same way against you. Understanding compound interest is one of the most powerful money skills you can ever learn.",
    "formula": "Simple: I = Prt\nCompound: A = P(1+r/n)^(nt)\nContinuous: A = Pe^(rt)\nPV = FV / (1+r)^t\nLoan PMT = P·r(1+r)^n / ((1+r)^n − 1)\nRule of 72: years to double ≈ 72/r%",
    "method": "Rule of 72: divide 72 by the annual interest rate to estimate years to double. Quick, powerful mental math for comparing investment options — no calculator needed.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"14\" y1=\"108\" x2=\"246\" y2=\"108\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"14\" y1=\"10\" x2=\"14\" y2=\"112\" stroke=\"#444\" stroke-width=\"1\"/>\n  <path d=\"M20 100 Q60 98 100 88 Q140 72 170 50 Q200 28 230 14\" fill=\"none\" stroke=\"#7ab060\" stroke-width=\"2.5\"/>\n  <path d=\"M20 100 Q100 96 160 80 Q200 68 230 50\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n  <text x=\"190\" y=\"20\" font-size=\"8\" fill=\"#7ab060\">Compound</text>\n  <text x=\"190\" y=\"46\" font-size=\"8\" fill=\"#7aabcf\">Simple</text>\n  <text x=\"60\" y=\"80\" font-size=\"8\" fill=\"#c9a060\">$P</text>\n  <text x=\"228\" y=\"11\" font-size=\"8\" fill=\"#7ab060\">$A</text>\n  <text x=\"130\" y=\"108\" text-anchor=\"middle\" font-size=\"8\" fill=\"#8a8a8a\">Compound grows faster — interest earns interest</text>\n  <text x=\"20\" y=\"20\" font-size=\"8\" fill=\"#c9a060\">Rule 72: 72/rate = years to double</text>\n </svg>",
    "caption": "Compound interest accelerates over time — interest earns more interest. Simple interest is linear.",
    "steps": [
      "Convert APR to period rate: monthly rate = APR / 12.",
      "For compound interest: A = P(1+r/n)^(nt) — n is compounding periods per year.",
      "For continuous compounding: A = Pe^(rt) — use this when the problem says \"compounded continuously.\"",
      "For present value: PV = FV/(1+r)^t — reverse-engineers what an investment is worth today.",
      "Rule of 72: years to double ≈ 72/r. At 6%, money doubles in ≈12 years."
    ],
    "example": "$1000 at 6% compounded monthly for 5 years: r=0.06/12=0.005, n=60. A=1000(1.005)^60≈$1348.85. Rule of 72: doubles in 72/6=12 years."
  },
  {
    "cat": "Engineering & Statics",
    "tags": [
      "engineering",
      "physics"
    ],
    "title": "Statics, Stress, Strain & Safety Factors",
    "theory": "",
    "reality": "Why does a bridge not collapse when thousands of cars cross it? Engineers calculate every force on every beam to ensure nothing breaks. A safety factor means the bridge is built 3 to 5 times stronger than the heaviest load it will ever carry.",
    "formula": "Equilibrium: ΣF = 0,  Στ = 0\nTorque: τ = r × F  (or rF sinθ)\nStress: σ = F/A  (Pa = N/m²)\nStrain: ε = ΔL/L  (dimensionless)\nYoung's modulus: E = σ/ε\nSafety factor: SF = capacity / load\nHooke's Law: F = kx  (springs)",
    "method": "Method of sections for trusses: cut through the truss, isolate one portion, and apply 3 equilibrium equations to find internal forces. Far faster than the method of joints for internal members.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"10\" y=\"48\" width=\"190\" height=\"22\" rx=\"4\" fill=\"rgba(122,171,207,.12)\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <text x=\"105\" y=\"63\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\">BEAM (ΣF=0, Στ=0)</text>\n  <line x1=\"20\" y1=\"70\" x2=\"20\" y2=\"95\" stroke=\"#c9a060\" stroke-width=\"3\"/>\n  <line x1=\"14\" y1=\"95\" x2=\"26\" y2=\"95\" stroke=\"#c9a060\" stroke-width=\"3\"/>\n  <line x1=\"190\" y1=\"70\" x2=\"190\" y2=\"95\" stroke=\"#c9a060\" stroke-width=\"3\"/>\n  <line x1=\"184\" y1=\"95\" x2=\"196\" y2=\"95\" stroke=\"#c9a060\" stroke-width=\"3\"/>\n  <text x=\"22\" y=\"108\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">R₁</text>\n  <text x=\"190\" y=\"108\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">R₂</text>\n  <line x1=\"100\" y1=\"10\" x2=\"100\" y2=\"48\" stroke=\"#c07070\" stroke-width=\"2.5\"/>\n  <text x=\"104\" y=\"30\" font-size=\"8\" fill=\"#c07070\">F (load)</text>\n  <rect x=\"214\" y=\"14\" width=\"40\" height=\"88\" rx=\"4\" fill=\"rgba(201,160,96,.10)\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <text x=\"234\" y=\"28\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">σ=F/A</text>\n  <text x=\"234\" y=\"44\" text-anchor=\"middle\" font-size=\"8\" fill=\"#d4b87a\">stress</text>\n  <text x=\"234\" y=\"62\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">ε=ΔL/L</text>\n  <text x=\"234\" y=\"78\" text-anchor=\"middle\" font-size=\"8\" fill=\"#d4b87a\">strain</text>\n  <text x=\"234\" y=\"96\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">E=σ/ε</text>\n </svg>",
    "caption": "Beam in static equilibrium: reactions R₁+R₂ must balance load F. Stress=F/A; strain=ΔL/L.",
    "steps": [
      "Draw the free-body diagram of the structure with all applied loads and support reactions.",
      "Write ΣFx=0, ΣFy=0, and Στ=0 (choose the torque pivot to eliminate as many unknowns as possible).",
      "Compute stress σ=F/A (force divided by cross-sectional area).",
      "Compute strain ε=ΔL/L (change in length divided by original length).",
      "Safety factor = material strength / calculated stress — SF should be ≥ 2 for most structural applications."
    ],
    "example": "Beam with load F=1000 N at center, span=4 m. Take torque about R₁: R₂×4=1000×2 → R₂=500 N. Then R₁=500 N. Column cross-section A=0.01 m², σ=1000/0.01=100,000 Pa = 100 kPa."
  },
  {
    "cat": "Unit Conversions",
    "tags": [
      "conversion",
      "daily",
      "chemistry",
      "engineering"
    ],
    "title": "Unit Conversions: Factor-Label Method",
    "theory": "",
    "reality": "A recipe uses grams but your scale shows ounces. A speed sign says km/h but your car shows mph. Doctors convert patient weight from pounds to kilograms before calculating medicine doses. Unit conversion is used in cooking, travel, science, and medicine every day.",
    "formula": "1 in = 2.54 cm    1 ft = 12 in\n1 mi = 5280 ft = 1.609 km\n1 m = 100 cm = 1000 mm\n1 L = 1000 mL = 1 dm³\n1 kg = 1000 g    1 lb ≈ 453.6 g\n1 atm = 101,325 Pa    1 cal = 4.184 J\nmph × 0.44704 = m/s\n°C × 9/5 + 32 = °F    K = °C + 273.15",
    "method": "Factor-label method (dimensional analysis): write starting value × (wanted unit / unwanted unit). Chain conversions so each step cancels the previous unit. Check: if units don't cancel to give wanted units, the setup is wrong.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"8\" y=\"24\" width=\"72\" height=\"30\" rx=\"6\" fill=\"rgba(122,171,207,.15)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <text x=\"44\" y=\"37\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7aabcf\" font-weight=\"700\">Start value</text>\n  <text x=\"44\" y=\"49\" text-anchor=\"middle\" font-size=\"8\" fill=\"#9ecef0\">unit₁</text>\n  <text x=\"84\" y=\"42\" text-anchor=\"middle\" font-size=\"12\" fill=\"#555\">×</text>\n  <rect x=\"90\" y=\"14\" width=\"72\" height=\"52\" rx=\"6\" fill=\"rgba(201,160,96,.12)\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <line x1=\"96\" y1=\"39\" x2=\"156\" y2=\"39\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n  <text x=\"123\" y=\"32\" text-anchor=\"middle\" font-size=\"8\" fill=\"#d4b87a\">unit₂</text>\n  <text x=\"123\" y=\"52\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#c9a060\">unit₁</text>\n  <text x=\"123\" y=\"62\" text-anchor=\"middle\" font-size=\"7\" fill=\"#c9a060\">cancel ↑↓</text>\n  <text x=\"167\" y=\"42\" text-anchor=\"middle\" font-size=\"12\" fill=\"#555\">=</text>\n  <rect x=\"176\" y=\"24\" width=\"76\" height=\"30\" rx=\"6\" fill=\"rgba(122,176,96,.15)\" stroke=\"#7ab060\" stroke-width=\"1.5\"/>\n  <text x=\"214\" y=\"37\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7ab060\" font-weight=\"700\">Result</text>\n  <text x=\"214\" y=\"49\" text-anchor=\"middle\" font-size=\"8\" fill=\"#a0c888\">unit₂</text>\n  <text x=\"130\" y=\"86\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\">60 mi/hr × (5280 ft/mi) × (1 hr/3600 s) = 88 ft/s</text>\n  <text x=\"130\" y=\"100\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#888\">Units must cancel to leave only the desired unit</text>\n  <text x=\"130\" y=\"114\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#888\">Temperature conversions use formulas, not just ratios</text>\n </svg>",
    "caption": "Write start value × conversion fractions. Unwanted units cancel. Only desired unit remains.",
    "steps": [
      "Write the starting value and its unit.",
      "Write the conversion fraction: wanted unit on top, unit to cancel on the bottom.",
      "Chain as many fractions as needed — each step cancels the previous unit.",
      "Multiply all numerator values together, multiply all denominator values, then divide.",
      "For temperature: use formula (not ratio) because the scales have different zero points."
    ],
    "example": "Convert 60 mph to m/s: 60 mi/hr × (1609 m/mi) × (1 hr/3600 s) = 96,540/3600 = 26.8 m/s. Check: 60 mph is highway speed; 26.8 m/s is reasonable ✓"
  },
  {
    "cat": "Everyday Math",
    "tags": [
      "daily",
      "finance",
      "conversion"
    ],
    "title": "Everyday Math: Scaling, Rates, Bills & Estimates",
    "theory": "",
    "reality": "Is the big cereal box actually cheaper per ounce? How long will your road trip take? How much tip should you leave? Everyday math lets you check prices, plan trips, split bills, and make smart decisions without needing a calculator.",
    "formula": "Unit price = cost / quantity\nFuel cost = (distance / mpg) × price/gallon\nElectric cost = kWh × rate\nRecipe scale = new servings / original × amount\nTip = bill × tip%\nPaycheck net = gross − taxes − deductions",
    "method": "Proportional reasoning: if the rate or ratio is known, scale by multiplying. Never scale by adding. Cross-multiply for missing value in a proportion: a/b = c/x → x = bc/a.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"8\" y=\"10\" width=\"116\" height=\"96\" rx=\"8\" fill=\"rgba(122,176,96,.08)\" stroke=\"#7ab060\" stroke-width=\"1.5\"/>\n  <text x=\"66\" y=\"26\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7ab060\" font-weight=\"700\">Unit Price</text>\n  <text x=\"66\" y=\"42\" text-anchor=\"middle\" font-size=\"9\" fill=\"#a0c888\">Brand A: $2.40 / 16oz</text>\n  <text x=\"66\" y=\"56\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#a0c888\">= $0.15/oz</text>\n  <text x=\"66\" y=\"72\" text-anchor=\"middle\" font-size=\"9\" fill=\"#a0c888\">Brand B: $3.60 / 32oz</text>\n  <text x=\"66\" y=\"86\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7ab060\">= $0.1125/oz ✓</text>\n  <text x=\"66\" y=\"100\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">B is cheaper per unit</text>\n  <rect x=\"140\" y=\"10\" width=\"112\" height=\"96\" rx=\"8\" fill=\"rgba(201,160,96,.08)\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <text x=\"196\" y=\"26\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#c9a060\" font-weight=\"700\">Fuel Cost</text>\n  <text x=\"196\" y=\"46\" text-anchor=\"middle\" font-size=\"9\" fill=\"#d4b87a\">300 miles at 30 mpg</text>\n  <text x=\"196\" y=\"60\" text-anchor=\"middle\" font-size=\"9\" fill=\"#d4b87a\">= 10 gallons needed</text>\n  <text x=\"196\" y=\"76\" text-anchor=\"middle\" font-size=\"9\" fill=\"#d4b87a\">× $3.50/gal</text>\n  <text x=\"196\" y=\"90\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">= $35.00</text>\n  <text x=\"196\" y=\"104\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">distance ÷ mpg × price</text>\n </svg>",
    "caption": "Unit price comparison: divide total cost by quantity. Fuel: divide miles by mpg for gallons, then multiply by price.",
    "steps": [
      "Define the rate or ratio using the correct units (cost per ounce, miles per gallon).",
      "For scaling: multiply the rate by the new quantity — never add rates together.",
      "For proportion problems: write a/b = c/x and cross-multiply to solve for x.",
      "For electric bills: convert wattage to kilowatts (÷1000), multiply by hours used to get kWh, then multiply by rate.",
      "Estimate before calculating: if the answer is far from your estimate, recheck your setup."
    ],
    "example": "Scale a recipe from 4 to 10 servings: scale factor = 10/4 = 2.5. If original uses 2 cups flour, new amount = 2×2.5 = 5 cups. Electric: 100W bulb × 8 hrs = 0.8 kWh × $0.12/kWh = $0.096/day ≈ $2.88/month."
  },
  {
    "cat": "Algebra",
    "tags": [
      "arithmetic",
      "algebra",
      "math"
    ],
    "title": "Real Number Sets, Intervals & Absolute Value",
    "theory": "",
    "reality": "Temperature goes above or below zero — absolute value tells you how far from zero without worrying about direction. A thermostat keeps temperature within an interval like 68 to 72 degrees. Programmers use intervals to set valid ranges so apps do not crash from bad input.",
    "formula": "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ\n|x| = x if x≥0; −x if x<0\n|x| < a  ↔  −a < x < a\n|x| > a  ↔  x < −a  or  x > a\nOpen: (a,b)  Closed: [a,b]\nHalf-open: [a,b)  or  (a,b]\nUnbounded: (−∞,a] or [b,+∞)",
    "method": "Absolute value equations: split into two cases (positive and negative). Absolute value inequalities: |x|<a → single interval; |x|>a → union of two intervals. Always check solutions satisfy original equation.",
    "svg": "<svg viewBox=\"0 0 260 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"4\" y=\"8\" width=\"252\" height=\"104\" rx=\"8\" fill=\"rgba(90,176,216,.06)\" stroke=\"#5ab0d8\" stroke-width=\"1\"/>\n  <rect x=\"12\" y=\"16\" width=\"236\" height=\"88\" rx=\"7\" fill=\"rgba(122,171,207,.08)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <rect x=\"22\" y=\"24\" width=\"216\" height=\"72\" rx=\"6\" fill=\"rgba(201,160,96,.08)\" stroke=\"#c9a060\" stroke-width=\"1\"/>\n  <rect x=\"34\" y=\"32\" width=\"192\" height=\"56\" rx=\"5\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1\"/>\n  <rect x=\"48\" y=\"40\" width=\"164\" height=\"40\" rx=\"4\" fill=\"rgba(192,112,112,.10)\" stroke=\"#c07070\" stroke-width=\"1\"/>\n  <text x=\"62\" y=\"64\" text-anchor=\"middle\" font-size=\"9.5\" fill=\"#c07070\" font-weight=\"700\">ℕ ℤ</text>\n  <text x=\"62\" y=\"74\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#c07070\">integers</text>\n  <text x=\"130\" y=\"58\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">ℚ  rationals</text>\n  <text x=\"195\" y=\"52\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">ℝirrational</text>\n  <text x=\"220\" y=\"28\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\">ℝ reals</text>\n  <text x=\"238\" y=\"16\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5ab0d8\">ℂ</text>\n  <line x1=\"4\" y1=\"100\" x2=\"256\" y2=\"100\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <line x1=\"80\" y1=\"96\" x2=\"80\" y2=\"104\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <line x1=\"180\" y1=\"96\" x2=\"180\" y2=\"104\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <circle cx=\"80\" cy=\"100\" r=\"4\" fill=\"none\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <circle cx=\"180\" cy=\"100\" r=\"4\" fill=\"#c9a060\"/>\n  <text x=\"80\" y=\"116\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">a open (</text>\n  <text x=\"180\" y=\"116\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">b closed ]</text>\n </svg>",
    "caption": "Number sets nest inside each other. Open circle = excluded endpoint. Filled circle = included endpoint.",
    "steps": [
      "Identify which number set a value belongs to: check divisibility (ℤ), ratio form (ℚ), or irrationality (ℝ\\ℚ).",
      "For |ax+b|=c: set ax+b=c AND ax+b=−c; solve both; check both solutions.",
      "For |x|<a (a>0): rewrite as −a<x<a; solution is a single interval (a,b).",
      "For |x|>a: rewrite as x<−a OR x>a; solution is a union of two rays.",
      "Write solution sets using interval notation: use ( ) for strict inequalities, [ ] for ≤ or ≥."
    ],
    "example": "Solve |2x−3|≤5: −5≤2x−3≤5 → −2≤2x≤8 → −1≤x≤4. Solution: [−1,4]. Check endpoints: |2(−1)−3|=5 ✓, |2(4)−3|=5 ✓"
  },
  {
    "cat": "Algebra",
    "tags": [
      "algebra",
      "math",
      "calculus"
    ],
    "title": "Polynomial Operations, Division & Remainder Theorem",
    "theory": "",
    "reality": "Engineers model the bending strength of a beam with polynomial equations. Economists model supply and demand curves the same way. Polynomial division simplifies complex expressions in calculators. It is the algebra behind computer graphics and physics simulations.",
    "formula": "Division algorithm: P(x) = Q(x)·D(x) + R(x)\nRemainder Theorem: P(a) = remainder when P÷(x−a)\nFactor Theorem: (x−a) is a factor ↔ P(a)=0\nNewton binomial: (a+b)ⁿ = Σ C(n,k)·aⁿ⁻ᵏ·bᵏ\n(a+b)² = a²+2ab+b²\n(a−b)² = a²−2ab+b²\n(a+b)(a−b) = a²−b²\n(a±b)³ = a³±3a²b+3ab²±b³",
    "method": "Ruffini's Rule (synthetic division): for divisor (x−a), write a and the coefficients; bring down the first, multiply by a, add — faster than full polynomial long division for linear divisors.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"130\" y=\"13\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">P(x)=2x³−3x²+x−5 ÷ (x−2), Ruffini</text>\n  <rect x=\"4\" y=\"18\" width=\"252\" height=\"56\" rx=\"7\" fill=\"rgba(122,171,207,.07)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <text x=\"22\" y=\"36\" font-size=\"9.5\" fill=\"#c9a060\" font-weight=\"700\">a=2 |</text>\n  <text x=\"72\"  y=\"36\" text-anchor=\"middle\" font-size=\"10\" fill=\"#9ecef0\" font-family=\"monospace\">2</text>\n  <text x=\"102\" y=\"36\" text-anchor=\"middle\" font-size=\"10\" fill=\"#9ecef0\" font-family=\"monospace\">-3</text>\n  <text x=\"132\" y=\"36\" text-anchor=\"middle\" font-size=\"10\" fill=\"#9ecef0\" font-family=\"monospace\">1</text>\n  <text x=\"162\" y=\"36\" text-anchor=\"middle\" font-size=\"10\" fill=\"#9ecef0\" font-family=\"monospace\">-5</text>\n  <line x1=\"58\" y1=\"40\" x2=\"180\" y2=\"40\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <text x=\"102\" y=\"52\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\" font-family=\"monospace\">+4</text>\n  <text x=\"132\" y=\"52\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\" font-family=\"monospace\">+2</text>\n  <text x=\"162\" y=\"52\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\" font-family=\"monospace\">+6</text>\n  <line x1=\"58\" y1=\"56\" x2=\"180\" y2=\"56\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <text x=\"72\"  y=\"68\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7ab060\" font-family=\"monospace\" font-weight=\"700\">2</text>\n  <text x=\"102\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7ab060\" font-family=\"monospace\" font-weight=\"700\">1</text>\n  <text x=\"132\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" fill=\"#7ab060\" font-family=\"monospace\" font-weight=\"700\">3</text>\n  <text x=\"162\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c07070\" font-family=\"monospace\" font-weight=\"700\">1</text>\n  <text x=\"72\"  y=\"79\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#7ab060\">x²</text>\n  <text x=\"102\" y=\"79\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#7ab060\">x</text>\n  <text x=\"132\" y=\"79\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#7ab060\">+3</text>\n  <text x=\"162\" y=\"79\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#c07070\">R=1</text>\n  <text x=\"130\" y=\"97\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#c9a060\">P(2)=1 (Remainder Theorem check)</text>\n  <text x=\"130\" y=\"110\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">If R=0: (x−2) is a factor of P(x)</text>\n </svg>",
    "caption": "Ruffini: bring down → multiply by a → add. Remainder = P(a). If R=0, (x−a) is a factor.",
    "steps": [
      "Write all polynomial coefficients including zeros for missing powers.",
      "Apply Ruffini's rule: bring first coefficient down, multiply by a, add to next coefficient, repeat.",
      "The last value is the remainder R = P(a); all others are quotient coefficients (degree one less).",
      "Factor Theorem: if P(a)=0 then (x−a) is a factor — use to find rational roots.",
      "For algebraic fractions: factor numerator and denominator fully, cancel common factors, then simplify."
    ],
    "example": "Is (x+2) a factor of P(x)=x³+3x²−4? Test P(−2): (−2)³+3(−2)²−4=−8+12−4=0. Yes! So (x+2) is a factor. Divide to get x²+x−2=(x+2)(x−1). Roots: x=−2, x=1."
  },
  {
    "cat": "Algebra",
    "tags": [
      "algebra",
      "math"
    ],
    "title": "Irrational, Logarithmic & Exponential Equations",
    "theory": "",
    "reality": "The Richter scale uses logarithms — a magnitude 7 earthquake is 10 times stronger than a 6, not just one step higher. Sound is measured in decibels, also a log scale. Your phone uses exponential math to compress photos and stream video without wasting storage.",
    "formula": "Irrational: isolate radical → raise both sides to power → check\nLogarithmic: log_b(x)=y ↔ bʸ=x\nlog(A)+log(B)=log(AB)\nlog(A)−log(B)=log(A/B)\nn·log(A)=log(Aⁿ)\nExponential same base: aᵐ=aⁿ → m=n\nExponential diff base: take log of both sides",
    "method": "For irrational equations: isolate the radical, square both sides (squaring can introduce extraneous solutions), solve the resulting polynomial, and verify ALL solutions in the ORIGINAL equation.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"4\" y=\"6\" width=\"120\" height=\"106\" rx=\"7\" fill=\"rgba(122,171,207,.07)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <text x=\"64\" y=\"20\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7aabcf\" font-weight=\"700\">Irrational</text>\n  <text x=\"64\" y=\"34\" text-anchor=\"middle\" font-size=\"9\" fill=\"#9ecef0\">√(7x+42) = x+3</text>\n  <text x=\"14\" y=\"48\" font-size=\"8\" fill=\"#9ecef0\">Square: 7x+42=(x+3)²</text>\n  <text x=\"14\" y=\"60\" font-size=\"8\" fill=\"#9ecef0\">x²−x−30=0</text>\n  <text x=\"14\" y=\"72\" font-size=\"8\" fill=\"#9ecef0\">(x−6)(x+5)=0</text>\n  <text x=\"14\" y=\"84\" font-size=\"8\" fill=\"#7ab060\">x=6 ✓  check!</text>\n  <text x=\"14\" y=\"96\" font-size=\"8\" fill=\"#c07070\">x=−5 ✗ extraneous</text>\n  <text x=\"14\" y=\"108\" font-size=\"7.5\" fill=\"#888\">always verify in original</text>\n  <rect x=\"136\" y=\"6\" width=\"120\" height=\"106\" rx=\"7\" fill=\"rgba(201,160,96,.07)\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <text x=\"196\" y=\"20\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#c9a060\" font-weight=\"700\">Exponential</text>\n  <text x=\"196\" y=\"34\" text-anchor=\"middle\" font-size=\"9\" fill=\"#d4b87a\">3ˣ = 9  same base</text>\n  <text x=\"196\" y=\"46\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#d4b87a\">3ˣ = 3² → x=2</text>\n  <line x1=\"144\" y1=\"54\" x2=\"248\" y2=\"54\" stroke=\"#c9a060\" stroke-width=\"1\" stroke-dasharray=\"3,2\"/>\n  <text x=\"196\" y=\"66\" text-anchor=\"middle\" font-size=\"9\" fill=\"#d4b87a\">2ˣ = 5  diff base</text>\n  <text x=\"196\" y=\"78\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#d4b87a\">x·ln2 = ln5</text>\n  <text x=\"196\" y=\"90\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#c9a060\">x = ln5/ln2 ≈ 2.32</text>\n  <text x=\"196\" y=\"108\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#888\">injective property</text>\n </svg>",
    "caption": "Irrational: isolate radical, square, check. Exponential: match bases or take logarithm.",
    "steps": [
      "Irrational: isolate the radical on one side, square both sides, solve, then CHECK every solution in the original — squaring can create false solutions.",
      "Logarithmic: use log properties to consolidate to a single log, convert to exponential form, solve, then check that all arguments are positive.",
      "Exponential (same base): if bˣ=bⁿ then x=n (injective property).",
      "Exponential (different bases): take ln of both sides, use ln(aˣ)=x·ln(a), isolate x.",
      "For equations with both exponential and logarithmic terms: substitute t=bˣ to reduce to a polynomial."
    ],
    "example": "log₂(x+3)+log₂(x−1)=5: combine → log₂((x+3)(x−1))=5 → (x+3)(x−1)=32 → x²+2x−35=0 → x=5 or x=−7. Check: x=−7 gives log₂(−4) undefined. Answer: x=5 only."
  },
  {
    "cat": "Algebra",
    "tags": [
      "algebra",
      "math",
      "calculus"
    ],
    "title": "Polynomial & Rational Inequalities — Sign Chart Method",
    "theory": "",
    "reality": "A phone plan is only worth buying if you use more than 50 texts per month — that is an inequality. Engineers set safe operating ranges for machines. Inequalities define the conditions where something works, is affordable, or is safe. They are the math of real constraints.",
    "formula": "Steps: Factor → Find zeros/excluded pts → Sign chart → Read intervals\nPolynomial: (x−a)ⁿ factor: odd n = sign change; even n = no sign change\nRational: include zeros of numerator AND excluded values of denominator\nFlip inequality when multiplying/dividing by negative",
    "method": "Sign chart (tableau des signes): list all critical values in order on a number line, test one point in each interval, record + or − for the whole expression. Read off the solution intervals directly. This is the method used in French/Spanish baccalauréat and AP Calculus.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"130\" y=\"13\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">Solve (x−1)(x+3) > 0</text>\n  <line x1=\"10\" y1=\"30\" x2=\"250\" y2=\"30\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <line x1=\"10\" y1=\"50\" x2=\"250\" y2=\"50\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <line x1=\"10\" y1=\"70\" x2=\"250\" y2=\"70\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <line x1=\"10\" y1=\"90\" x2=\"250\" y2=\"90\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <line x1=\"80\" y1=\"18\" x2=\"80\" y2=\"100\" stroke=\"#c9a060\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <line x1=\"160\" y1=\"18\" x2=\"160\" y2=\"100\" stroke=\"#c9a060\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <text x=\"45\"  y=\"26\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">x→</text>\n  <text x=\"80\"  y=\"26\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">−3</text>\n  <text x=\"120\" y=\"26\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">−3&lt;x&lt;1</text>\n  <text x=\"160\" y=\"26\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">1</text>\n  <text x=\"210\" y=\"26\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">x&gt;1</text>\n  <text x=\"16\"  y=\"44\" font-size=\"8\" fill=\"#7aabcf\">(x+3)</text>\n  <text x=\"45\"  y=\"44\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c07070\">−</text>\n  <text x=\"80\"  y=\"44\" text-anchor=\"middle\" font-size=\"9\" fill=\"#888\">0</text>\n  <text x=\"120\" y=\"44\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\">+</text>\n  <text x=\"160\" y=\"44\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\">+</text>\n  <text x=\"210\" y=\"44\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\">+</text>\n  <text x=\"16\"  y=\"64\" font-size=\"8\" fill=\"#7aabcf\">(x−1)</text>\n  <text x=\"45\"  y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c07070\">−</text>\n  <text x=\"80\"  y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c07070\">−</text>\n  <text x=\"120\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c07070\">−</text>\n  <text x=\"160\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#888\">0</text>\n  <text x=\"210\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\">+</text>\n  <text x=\"16\"  y=\"84\" font-size=\"8.5\" fill=\"#c9a060\" font-weight=\"700\">Product</text>\n  <text x=\"45\"  y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">+</text>\n  <text x=\"120\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c07070\" font-weight=\"700\">−</text>\n  <text x=\"210\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">+</text>\n  <text x=\"130\" y=\"110\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">Solution: x∈(−∞,−3) ∪ (1,+∞)</text>\n </svg>",
    "caption": "Sign chart: list critical values, test sign of each factor in each interval, multiply signs for the product.",
    "steps": [
      "Move everything to one side so the other side is 0.",
      "Factor completely; for rational expressions, factor numerator and denominator separately.",
      "Find all zeros (where numerator=0) and excluded values (where denominator=0).",
      "Place these values in order on a number line; they divide ℝ into intervals.",
      "Test any one point in each interval, determine the sign of the whole expression, then read off which intervals satisfy the inequality."
    ],
    "example": "Solve (x²−4)/(x+1)≥0: factor → (x−2)(x+2)/(x+1)≥0. Critical values: x=−2,−1,2. Sign chart gives + on (−2,−1) and [2,+∞). Since ≥0, include zeros x=−2 and x=2 but not x=−1 (excluded). Solution: [−2,−1)∪[2,+∞)."
  },
  {
    "cat": "Complex Numbers",
    "tags": [
      "algebra",
      "math",
      "engineering"
    ],
    "title": "Complex Numbers: Cartesian, Polar & Operations",
    "theory": "",
    "reality": "Electrical engineers use complex numbers to describe AC electricity — the kind coming out of your wall outlet. Without them, modern circuit design, wireless signals, and audio processing would be impossible. They are the hidden math inside your speakers and Wi-Fi router.",
    "formula": "z = a+bi   a=Re(z),  b=Im(z)\n|z| = √(a²+b²)  (modulus)\nconjugate: z̄ = a−bi\nz·z̄ = |z|²\nPolar: z = |z|(cosθ + i sinθ) = |z|eⁱᶿ\narg(z) = θ = arctan(b/a) (check quadrant)\nMoivre: zⁿ = |z|ⁿ(cos nθ + i sin nθ)\nDivision: z₁/z₂ → multiply by conjugate of z₂",
    "method": "Moivre's Theorem: raise polar form to nth power by raising |z| to the nth power and multiplying the argument by n. Finding nth roots: divide argument by n and add 2πk/n for k=0,1,...,n−1 — gives n equally spaced roots on a circle of radius |z|^(1/n).",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"130\" y1=\"10\" x2=\"130\" y2=\"108\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"10\" y1=\"64\" x2=\"250\" y2=\"64\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"130\" y1=\"64\" x2=\"200\" y2=\"30\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <circle cx=\"200\" cy=\"30\" r=\"4\" fill=\"#7aabcf\"/>\n  <line x1=\"200\" y1=\"30\" x2=\"200\" y2=\"64\" stroke=\"#c9a060\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <line x1=\"130\" y1=\"64\" x2=\"200\" y2=\"64\" stroke=\"#c07070\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <path d=\"M152 64 A22 22 0 0 0 144 46\" fill=\"none\" stroke=\"#7ab060\" stroke-width=\"1.5\"/>\n  <text x=\"204\" y=\"28\" font-size=\"8.5\" fill=\"#7aabcf\">z=a+bi</text>\n  <text x=\"204\" y=\"50\" font-size=\"8\" fill=\"#c9a060\">b=Im</text>\n  <text x=\"162\" y=\"76\" font-size=\"8\" fill=\"#c07070\">a=Re</text>\n  <text x=\"145\" y=\"54\" font-size=\"8\" fill=\"#7ab060\">θ</text>\n  <text x=\"130\" y=\"106\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7aabcf\">|z|=√(a²+b²)</text>\n  <text x=\"42\" y=\"30\" font-size=\"8\" fill=\"#9ecef0\">Imaginary</text>\n  <text x=\"220\" y=\"76\" font-size=\"8\" fill=\"#9ecef0\">Real</text>\n  <text x=\"34\" y=\"90\" font-size=\"7.5\" fill=\"#888\">z̄=a−bi (reflect over real axis)</text>\n </svg>",
    "caption": "Argand plane: real axis horizontal, imaginary axis vertical. |z| is distance from origin; θ is angle from positive real axis.",
    "steps": [
      "Write z=a+bi; compute modulus |z|=√(a²+b²) and argument θ=arctan(b/a) (adjust for correct quadrant).",
      "Convert to polar: z=|z|(cosθ+i sinθ). Useful for multiplication and powers.",
      "Multiply: multiply moduli, add arguments. Divide: divide moduli, subtract arguments.",
      "To divide in Cartesian form: multiply numerator and denominator by the conjugate of the denominator.",
      "Moivre for powers: |z|ⁿ∠nθ. For nth roots: n solutions at angles θ/n + 2πk/n for k=0…n−1."
    ],
    "example": "z=1+i: |z|=√2, θ=π/4. Polar: √2·(cos45°+i sin45°). z⁴ by Moivre: (√2)⁴∠4·45°=4∠180°=4(cos180°+i sin180°)=−4. Check: (1+i)⁴=((1+i)²)²=(2i)²=−4 ✓"
  },
  {
    "cat": "Matrices & Vectors",
    "tags": [
      "linear algebra",
      "physics",
      "engineering"
    ],
    "title": "Vectors in Space: Dot Product, Cross Product & Applications",
    "theory": "",
    "reality": "A pilot calculates actual flight path when wind pushes the plane sideways — that is vector addition. A 3D video game checks whether your character is facing a wall using dot products. Robots use 3D vectors to plan every movement through physical space.",
    "formula": "→u = (u₁,u₂,u₃)\n|→u| = √(u₁²+u₂²+u₃²)\nDot: →u·→v = u₁v₁+u₂v₂+u₃v₃ = |u||v|cosθ\nCross: →u×→v = |i  j  k |\n              |u₁ u₂ u₃|\n              |v₁ v₂ v₃|\n|→u×→v| = |u||v|sinθ  (area of parallelogram)\n→u⊥→v ↔ →u·→v=0\n→u∥→v ↔ →u×→v=→0",
    "method": "Cross product via the 3×3 determinant expansion: cofactor of i = (u₂v₃−u₃v₂), cofactor of j = −(u₁v₃−u₃v₁), cofactor of k = (u₁v₂−u₂v₁). The resulting vector is perpendicular to both u and v — the right-hand rule gives the direction.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs><marker id=\"va\" markerWidth=\"6\" markerHeight=\"6\" refX=\"5\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7aabcf\"/></marker>\n  <marker id=\"vb\" markerWidth=\"6\" markerHeight=\"6\" refX=\"5\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#c9a060\"/></marker>\n  <marker id=\"vc\" markerWidth=\"6\" markerHeight=\"6\" refX=\"5\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#7ab060\"/></marker></defs>\n  <line x1=\"80\" y1=\"80\" x2=\"160\" y2=\"40\" stroke=\"#7aabcf\" stroke-width=\"2\" marker-end=\"url(#va)\"/>\n  <line x1=\"80\" y1=\"80\" x2=\"180\" y2=\"70\" stroke=\"#c9a060\" stroke-width=\"2\" marker-end=\"url(#vb)\"/>\n  <line x1=\"80\" y1=\"80\" x2=\"80\" y2=\"18\" stroke=\"#7ab060\" stroke-width=\"2\" marker-end=\"url(#vc)\"/>\n  <text x=\"163\" y=\"36\" font-size=\"8.5\" fill=\"#7aabcf\" font-weight=\"700\">→u</text>\n  <text x=\"183\" y=\"70\" font-size=\"8.5\" fill=\"#c9a060\" font-weight=\"700\">→v</text>\n  <text x=\"68\" y=\"14\" font-size=\"8.5\" fill=\"#7ab060\" font-weight=\"700\">→u×→v</text>\n  <path d=\"M100 70 A22 22 0 0 0 105 60\" fill=\"none\" stroke=\"#888\" stroke-width=\"1.2\"/>\n  <text x=\"108\" y=\"67\" font-size=\"8\" fill=\"#888\">θ</text>\n  <text x=\"185\" y=\"35\" font-size=\"8\" fill=\"#7aabcf\">u·v=|u||v|cosθ</text>\n  <text x=\"185\" y=\"48\" font-size=\"8\" fill=\"#c9a060\">|u×v|=|u||v|sinθ</text>\n  <text x=\"185\" y=\"61\" font-size=\"8\" fill=\"#7ab060\">⊥ to both u and v</text>\n  <text x=\"130\" y=\"105\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">Area of parallelogram = |u×v|  ·  Area of triangle = ½|u×v|</text>\n </svg>",
    "caption": "Dot product: scalar, measures angle. Cross product: vector, perpendicular to both, magnitude = parallelogram area.",
    "steps": [
      "Compute dot product: multiply matching components and sum — result is a scalar.",
      "Test perpendicularity: if u·v=0, vectors are perpendicular.",
      "Compute cross product using the determinant: i(u₂v₃−u₃v₂) − j(u₁v₃−u₃v₁) + k(u₁v₂−u₂v₁).",
      "Test parallelism: if u×v=0⃗, vectors are parallel (one is a scalar multiple of the other).",
      "Applications: area of parallelogram=|u×v|; torque τ=r×F; normal vector to a plane containing two vectors."
    ],
    "example": "u=(1,2,3), v=(4,5,6). Dot: 1·4+2·5+3·6=4+10+18=32. Cross: i(2·6−3·5)−j(1·6−3·4)+k(1·5−2·4) = i(−3)−j(−6)+k(−3) = (−3,6,−3). Check: (−3,6,−3)·(1,2,3)=−3+12−9=0 ✓"
  },
  {
    "cat": "Derivatives & Limits",
    "tags": [
      "calculus",
      "math",
      "engineering"
    ],
    "title": "Complete Function Analysis — Curve Sketching",
    "theory": "",
    "reality": "Before building a roller coaster, engineers sketch the exact path — where it climbs, peaks, and drops. Businesses graph profit curves to find when they earn the most money. Curve sketching helps us visualize and understand any system that changes over time.",
    "formula": "Domain: where f is defined\nAsymptotes: vertical (denom=0), horizontal (lim x→±∞), oblique (degree num = degree den +1)\nf′(x)=0 → critical points → max/min (sign change)\nf″(x)=0 → inflection point candidates\nf″>0 → concave up; f″<0 → concave down\nMonotonicity: f′>0 → increasing; f′<0 → decreasing",
    "method": "Seven-step scheme: (1) Domain, (2) Intercepts, (3) Symmetry, (4) Asymptotes, (5) First derivative → monotonicity + extrema, (6) Second derivative → concavity + inflection, (7) Sketch. Never skip steps — each informs the next.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"14\" y1=\"100\" x2=\"246\" y2=\"100\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"130\" y1=\"8\" x2=\"130\" y2=\"104\" stroke=\"#444\" stroke-width=\"1\"/>\n  <path d=\"M20 95 Q50 92 80 60 Q110 28 130 30 Q150 32 170 55 Q195 80 220 85 Q235 86 244 84\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"2.5\"/>\n  <circle cx=\"80\" cy=\"60\" r=\"4\" fill=\"#c9a060\"/>\n  <circle cx=\"130\" cy=\"30\" r=\"4\" fill=\"#7ab060\"/>\n  <circle cx=\"180\" cy=\"55\" r=\"4\" fill=\"#c9a060\"/>\n  <circle cx=\"105\" cy=\"44\" r=\"3.5\" fill=\"#c07070\"/>\n  <circle cx=\"155\" cy=\"44\" r=\"3.5\" fill=\"#c07070\"/>\n  <text x=\"78\" y=\"56\" font-size=\"7.5\" fill=\"#c9a060\">local min</text>\n  <text x=\"132\" y=\"28\" font-size=\"7.5\" fill=\"#7ab060\">local max</text>\n  <text x=\"182\" y=\"53\" font-size=\"7.5\" fill=\"#c9a060\">local min</text>\n  <text x=\"92\" y=\"40\" font-size=\"7.5\" fill=\"#c07070\">infl</text>\n  <text x=\"157\" y=\"40\" font-size=\"7.5\" fill=\"#c07070\">infl</text>\n  <text x=\"130\" y=\"114\" text-anchor=\"middle\" font-size=\"8\" fill=\"#8a8a8a\">f′=0 at extrema · f″=0 at inflection · f″ sign gives concavity</text>\n </svg>",
    "caption": "Extrema: f′=0 with sign change. Inflection: f″=0 with concavity change. Full curve requires both derivatives.",
    "steps": [
      "Domain: exclude values where denominator=0, log argument ≤0, or even root of negative.",
      "Intercepts: set x=0 for y-intercept; set f(x)=0 for x-intercepts.",
      "Asymptotes: vertical where denominator→0; horizontal via limit x→±∞; oblique if degree(num)=degree(den)+1 via polynomial division.",
      "f′(x): find critical points (f′=0 or undefined), use sign chart to determine increasing/decreasing intervals and identify local max/min.",
      "f″(x): find inflection point candidates (f″=0), confirm sign change of f″, determine concave up (f″>0) and concave down (f″<0) intervals."
    ],
    "example": "f(x)=x³−3x: f′=3x²−3=3(x−1)(x+1)=0 → x=±1. Sign chart: f′>0 on (−∞,−1)∪(1,∞) [increasing], f′<0 on (−1,1) [decreasing]. f″=6x=0 at x=0 → inflection. f(−1)=2 local max; f(1)=−2 local min."
  },
  {
    "cat": "Matrices & Vectors",
    "tags": [
      "linear algebra",
      "engineering",
      "physics"
    ],
    "title": "Matrices: Operations, Determinants & Inverse",
    "theory": "",
    "reality": "Netflix recommends movies by running your viewing history through giant matrix calculations. Google ranks web pages using matrix math. Photo apps rotate and resize images using matrix transformations. Matrices are the backbone of artificial intelligence and data science.",
    "formula": "A+B: add matching elements\nkA: multiply every element by k\nAB: row i of A · column j of B  (requires inner dims match)\nAB ≠ BA  (not commutative)\ndet 2×2: |a b|=ad−bc\n         |c d|\ndet 3×3: Sarrus rule or cofactor expansion\nA⁻¹ exists iff det(A)≠0\nA⁻¹=(1/det)·adj(A)",
    "method": "Gauss-Jordan for inverse: write augmented matrix [A|I], row-reduce until the left side becomes I — the right side is then A⁻¹. Faster than adjoint method for 3×3 and larger matrices.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"4\" y=\"8\" width=\"120\" height=\"100\" rx=\"7\" fill=\"rgba(122,171,207,.07)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <text x=\"64\" y=\"22\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7aabcf\" font-weight=\"700\">2×2 Determinant</text>\n  <text x=\"64\" y=\"40\" text-anchor=\"middle\" font-size=\"14\" fill=\"#9ecef0\" font-family=\"monospace\">|a  b|</text>\n  <text x=\"64\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" fill=\"#9ecef0\" font-family=\"monospace\">|c  d|</text>\n  <line x1=\"20\" y1=\"65\" x2=\"108\" y2=\"65\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <text x=\"64\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7ab060\" font-weight=\"700\">= ad − bc</text>\n  <path d=\"M38 40 L90 57\" stroke=\"#7ab060\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <path d=\"M90 40 L38 57\" stroke=\"#c07070\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <text x=\"38\" y=\"100\" font-size=\"7.5\" fill=\"#7ab060\">ad (+)</text>\n  <text x=\"74\" y=\"100\" font-size=\"7.5\" fill=\"#c07070\">bc (−)</text>\n  <rect x=\"136\" y=\"8\" width=\"120\" height=\"100\" rx=\"7\" fill=\"rgba(201,160,96,.07)\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <text x=\"196\" y=\"22\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#c9a060\" font-weight=\"700\">Matrix Multiply</text>\n  <text x=\"196\" y=\"36\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">(m×n)·(n×p) → (m×p)</text>\n  <text x=\"196\" y=\"52\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#d4b87a\">C[i,j] = row i of A</text>\n  <text x=\"196\" y=\"64\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#d4b87a\">      · col j of B</text>\n  <text x=\"196\" y=\"78\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">dot product</text>\n  <text x=\"196\" y=\"94\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c07070\">AB ≠ BA  (order matters)</text>\n </svg>",
    "caption": "2×2 determinant = ad−bc (main diagonal minus off-diagonal). Matrix product: row × column dot products.",
    "steps": [
      "Matrix addition: only defined for same-size matrices — add element by element.",
      "Matrix multiplication: (m×n)·(n×p) → (m×p). Element C[i,j] = dot product of row i of A with column j of B.",
      "Determinant 2×2: ad−bc. Determinant 3×3: cofactor expansion along any row or column, or Sarrus rule.",
      "If det(A)=0, the matrix is singular (no inverse, system has no unique solution).",
      "Inverse: Gauss-Jordan — augment [A|I] and row-reduce to [I|A⁻¹]. Or 2×2 formula: A⁻¹=(1/(ad−bc))·[d −b; −c a]."
    ],
    "example": "A=[2 1; 3 4]. det=2·4−1·3=5≠0. A⁻¹=(1/5)[4 −1; −3 2]. Check: A·A⁻¹=(1/5)[2·4+1·(−3) 2·(−1)+1·2; 3·4+4·(−3) 3·(−1)+4·2]=(1/5)[5 0; 0 5]=I ✓"
  },
  {
    "cat": "Statistics",
    "tags": [
      "data",
      "math",
      "daily"
    ],
    "title": "Combinatorics: Permutations, Combinations & Probability",
    "theory": "",
    "reality": "How many different 3-topping pizzas can you make from 10 toppings? That is combinations! A password with 8 characters has trillions of permutations — making it very hard to guess. Lotteries, card games, and cybersecurity all depend on this counting math.",
    "formula": "Permutations (order matters): P(n,r) = n!/(n−r)!\nCombinations (order doesn't matter): C(n,r) = n!/(r!(n−r)!)\nC(n,r) = C(n,n−r)  (symmetry)\nBinomial: (a+b)ⁿ = Σ C(n,k)·aⁿ⁻ᵏ·bᵏ\nP(A∪B)=P(A)+P(B)−P(A∩B)\nP(A|B)=P(A∩B)/P(B)  (conditional)\nBinomial dist: P(X=k)=C(n,k)pᵏ(1−p)ⁿ⁻ᵏ",
    "method": "Decision tree for counting: (1) Does ORDER matter? Yes → permutation. No → combination. (2) Is REPETITION allowed? Adjust formula accordingly. (3) Are there RESTRICTIONS? Multiply restricted cases or subtract forbidden cases from total.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"4\" y=\"6\" width=\"252\" height=\"36\" rx=\"6\" fill=\"rgba(122,171,207,.08)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <text x=\"130\" y=\"19\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7aabcf\" font-weight=\"700\">Does ORDER matter?</text>\n  <text x=\"70\" y=\"34\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7ab060\">YES → Permutation</text>\n  <text x=\"195\" y=\"34\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#c9a060\">NO → Combination</text>\n  <rect x=\"4\" y=\"52\" width=\"120\" height=\"58\" rx=\"6\" fill=\"rgba(122,176,96,.08)\" stroke=\"#7ab060\" stroke-width=\"1.5\"/>\n  <text x=\"64\" y=\"66\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7ab060\" font-weight=\"700\">P(n,r) = n!/(n−r)!</text>\n  <text x=\"64\" y=\"80\" text-anchor=\"middle\" font-size=\"8\" fill=\"#a0c888\">5 runners, top 3 places</text>\n  <text x=\"64\" y=\"92\" text-anchor=\"middle\" font-size=\"8\" fill=\"#a0c888\">P(5,3)=5·4·3=60</text>\n  <text x=\"64\" y=\"104\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#888\">arrangements counted</text>\n  <rect x=\"136\" y=\"52\" width=\"120\" height=\"58\" rx=\"6\" fill=\"rgba(201,160,96,.08)\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <text x=\"196\" y=\"66\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#c9a060\" font-weight=\"700\">C(n,r) = n!/(r!(n−r)!)</text>\n  <text x=\"196\" y=\"80\" text-anchor=\"middle\" font-size=\"8\" fill=\"#d4b87a\">5 people, choose 3</text>\n  <text x=\"196\" y=\"92\" text-anchor=\"middle\" font-size=\"8\" fill=\"#d4b87a\">C(5,3)=10</text>\n  <text x=\"196\" y=\"104\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#888\">groups, not orders</text>\n </svg>",
    "caption": "Order matters → permutation. Order does not matter → combination. C(n,r) is always smaller than P(n,r).",
    "steps": [
      "Determine if order matters: selecting a president/VP (order matters, P); selecting a committee (order doesn't, C).",
      "Permutation: P(n,r)=n!/(n−r)! — number of ways to arrange r items from n.",
      "Combination: C(n,r)=n!/(r!(n−r)!) — number of ways to choose r items from n regardless of order.",
      "Probability: define sample space S, identify favorable event E, P(E)=|E|/|S| for equally likely outcomes.",
      "For conditional probability: P(A|B)=P(A∩B)/P(B). For independent events: P(A∩B)=P(A)·P(B)."
    ],
    "example": "Lottery: 6 numbers from 1–49, no order. C(49,6)=49!/(6!·43!)=13,983,816. P(win)=1/13,983,816. Committee of 3 from 10: C(10,3)=120. P(specific 3 chosen)=1/120."
  },
  {
    "cat": "Engineering & Statics",
    "tags": [
      "engineering",
      "finance",
      "math"
    ],
    "title": "Linear Programming — Graphical & Simplex",
    "theory": "",
    "reality": "An airline has 50 planes, limited fuel, and thousands of possible routes. Linear programming finds the best schedule to earn the most money. Airlines, hospitals scheduling nurses, and factories planning production all use this to make the smartest decisions possible.",
    "formula": "Objective: maximise/minimise Z = ax + by\nSubject to: linear inequality constraints\nFeasible region: intersection of all constraint half-planes\nFundamental Theorem: optimal Z occurs at a vertex\nVertex test: evaluate Z at every corner point → pick max or min\nSimplex (algebraic): pivot operations on augmented tableau",
    "method": "Graphical method (2 variables): (1) Graph each constraint as a line, shade the feasible side, (2) identify the feasible region as the intersection, (3) list every vertex (corner point) by solving pairs of boundary equations, (4) evaluate Z at each vertex, (5) report the optimal vertex.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"20\" y1=\"100\" x2=\"240\" y2=\"100\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"20\" y1=\"100\" x2=\"20\" y2=\"10\" stroke=\"#444\" stroke-width=\"1\"/>\n  <polygon points=\"20,100 160,100 100,40 20,70\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <circle cx=\"20\"  cy=\"100\" r=\"5\" fill=\"#c07070\"/>\n  <circle cx=\"160\" cy=\"100\" r=\"5\" fill=\"#c07070\"/>\n  <circle cx=\"100\" cy=\"40\"  r=\"5\" fill=\"#7ab060\"/>\n  <circle cx=\"20\"  cy=\"70\"  r=\"5\" fill=\"#c07070\"/>\n  <text x=\"22\"  cy=\"96\" x=\"22\" y=\"96\" font-size=\"8\" fill=\"#c07070\">(0,0)</text>\n  <text x=\"148\" y=\"96\" font-size=\"8\" fill=\"#c07070\">(x₂,0)</text>\n  <text x=\"103\" y=\"37\" font-size=\"8.5\" fill=\"#7ab060\" font-weight=\"700\">OPTIMAL</text>\n  <text x=\"22\"  y=\"66\" font-size=\"8\" fill=\"#c07070\">(0,y₁)</text>\n  <text x=\"60\" y=\"78\" font-size=\"8.5\" fill=\"#7aabcf\">Feasible</text>\n  <text x=\"60\" y=\"88\" font-size=\"8.5\" fill=\"#7aabcf\">Region</text>\n  <text x=\"130\" y=\"114\" text-anchor=\"middle\" font-size=\"8\" fill=\"#8a8a8a\">Evaluate Z = ax+by at each vertex → optimal is max or min</text>\n </svg>",
    "caption": "Feasible region (shaded polygon). Optimal solution is always at a vertex — evaluate Z at every corner point.",
    "steps": [
      "Write the objective function Z=ax+by and list all constraints as linear inequalities.",
      "Graph each constraint: convert to equation (=), draw the line, shade the feasible side (inequality direction).",
      "Identify the feasible region as the intersection of all shaded half-planes.",
      "Find every vertex: solve each pair of boundary lines as a 2×2 system to get exact corner coordinates.",
      "Evaluate Z at every vertex; the maximum or minimum value is the answer. State the optimal point and optimal value."
    ],
    "example": "Maximise Z=3x+5y subject to x≤4, y≤6, x+y≤8, x≥0, y≥0. Vertices: (0,0)→0, (4,0)→12, (4,4)→32, (2,6)→36★, (0,6)→30. Maximum Z=36 at (2,6)."
  },
  {
    "cat": "Trigonometry",
    "tags": [
      "geometry",
      "calculus",
      "physics",
      "engineering"
    ],
    "title": "Trig Identities: Sum, Difference, Double & Half Angle",
    "theory": "",
    "reality": "Sound engineers combine audio signals using trig identities so the result sounds clean. GPS satellites use them to calculate your position with centimeter accuracy. Architects use them when designing curved roofs and spiral staircases. These identities simplify complex wave calculations instantly.",
    "formula": "sin(A±B) = sinA cosB ± cosA sinB\ncos(A±B) = cosA cosB ∓ sinA sinB\ntan(A±B) = (tanA ± tanB)/(1 ∓ tanA tanB)\n\nDouble angle:\nsin 2A = 2 sinA cosA\ncos 2A = cos²A−sin²A = 2cos²A−1 = 1−2sin²A\ntan 2A = 2tanA/(1−tan²A)\n\nHalf angle:\nsin(A/2) = ±√((1−cosA)/2)\ncos(A/2) = ±√((1+cosA)/2)\ntan(A/2) = sinA/(1+cosA) = (1−cosA)/sinA",
    "method": "Power-reduction (from double angle): cos²A=(1+cos2A)/2 and sin²A=(1−cos2A)/2. These are the key substitutions for integrating even powers of sin and cos in AP Calculus BC.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"4\" y=\"6\" width=\"252\" height=\"106\" rx=\"8\" fill=\"rgba(122,171,207,.06)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <circle cx=\"130\" cy=\"62\" r=\"44\" fill=\"none\" stroke=\"rgba(122,171,207,.3)\" stroke-width=\"1.2\"/>\n  <line x1=\"130\" y1=\"10\" x2=\"130\" y2=\"108\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"82\" y1=\"62\" x2=\"178\" y2=\"62\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"130\" y1=\"62\" x2=\"165\" y2=\"26\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <line x1=\"130\" y1=\"62\" x2=\"174\" y2=\"62\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <line x1=\"174\" y1=\"62\" x2=\"165\" y2=\"26\" stroke=\"#c07070\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <path d=\"M150 62 A20 20 0 0 0 143 46\" fill=\"none\" stroke=\"#7ab060\" stroke-width=\"1.5\"/>\n  <text x=\"152\" y=\"58\" font-size=\"8\" fill=\"#7ab060\">A</text>\n  <text x=\"167\" y=\"22\" font-size=\"8\" fill=\"#7aabcf\">(cosA,sinA)</text>\n  <text x=\"165\" y=\"74\" font-size=\"8\" fill=\"#c9a060\">cosA</text>\n  <text x=\"170\" y=\"46\" font-size=\"8\" fill=\"#c07070\">sinA</text>\n  <text x=\"8\" y=\"22\" font-size=\"8.5\" fill=\"#7aabcf\">sin(A+B)=sinAcosB+cosAsinB</text>\n  <text x=\"8\" y=\"34\" font-size=\"8.5\" fill=\"#c9a060\">cos(A+B)=cosAcosB−sinAsinB</text>\n  <text x=\"8\" y=\"46\" font-size=\"8.5\" fill=\"#7ab060\">sin2A=2sinAcosA</text>\n  <text x=\"8\" y=\"58\" font-size=\"8.5\" fill=\"#c07070\">cos2A=1−2sin²A</text>\n  <text x=\"8\" y=\"108\" font-size=\"8\" fill=\"#888\">Power reduction: cos²A=(1+cos2A)/2  sin²A=(1−cos2A)/2</text>\n </svg>",
    "caption": "All compound angle identities derive from the unit circle. Double angle = apply sum formula with B=A.",
    "steps": [
      "Derive double angle: set B=A in the sum formula — sin(A+A)=sinAcosA+cosAsinA=2sinAcosA.",
      "Three forms of cos2A: use the Pythagorean identity to substitute cos²A=1−sin²A or sin²A=1−cos²A as needed.",
      "Power reduction: rearrange cos2A=2cos²A−1 → cos²A=(1+cos2A)/2 — essential for integrating cos²x.",
      "For half-angle: replace A with A/2 in power-reduction formulas; sign depends on the quadrant of A/2.",
      "To verify an identity: work one side only; substitute known identities; simplify to match the other side."
    ],
    "example": "Integrate ∫cos²x dx: use power reduction → ∫(1+cos2x)/2 dx = x/2 + sin2x/4 + C. Without this identity the integral would require integration by parts twice."
  },
  {
    "cat": "Algebra",
    "tags": [
      "algebra",
      "math",
      "calculus"
    ],
    "title": "Non-Linear Systems of Equations",
    "theory": "",
    "reality": "Where does a thrown ball (a parabola) land on a hillside (a line)? That is solving a non-linear system — and it is how NASA calculates where a spacecraft will touch down. Finding where supply meets demand in economics uses this exact technique.",
    "formula": "Common types:\n• Line + parabola: y=mx+b and y=ax²+bx+c\n• Line + circle: y=mx+b and x²+y²=r²\n• Two conics: substitute one into the other\n\nSubstitution: isolate y (or x) from the simpler\nequation → substitute into the other\n→ polynomial equation → solve → back-substitute\n\nSolution = (x,y) pair satisfying BOTH equations",
    "method": "Substitution is the standard method for non-linear systems. Elimination works only when both equations have matching quadratic terms (e.g. x²+y²). Always verify each solution satisfies BOTH original equations — extra solutions can appear after squaring.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"14\" y1=\"100\" x2=\"246\" y2=\"100\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"130\" y1=\"10\" x2=\"130\" y2=\"104\" stroke=\"#444\" stroke-width=\"1\"/>\n  <path d=\"M30 95 Q80 90 120 65 Q150 45 185 30 Q205 22 240 18\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"2.2\"/>\n  <line x1=\"30\" y1=\"80\" x2=\"220\" y2=\"30\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <circle cx=\"90\" cy=\"74\" r=\"4.5\" fill=\"#7ab060\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n  <circle cx=\"185\" cy=\"30\" r=\"4.5\" fill=\"#7ab060\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n  <text x=\"93\" y=\"70\" font-size=\"8\" fill=\"#7ab060\" font-weight=\"700\">(x₁,y₁)</text>\n  <text x=\"188\" y=\"28\" font-size=\"8\" fill=\"#7ab060\" font-weight=\"700\">(x₂,y₂)</text>\n  <text x=\"20\" y=\"20\" font-size=\"8\" fill=\"#7aabcf\">y = ax²+bx+c</text>\n  <text x=\"186\" y=\"94\" font-size=\"8\" fill=\"#c9a060\">y = mx+b</text>\n  <text x=\"130\" y=\"114\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">Solutions = intersection points — 0, 1, or 2 for line+parabola</text>\n </svg>",
    "caption": "Line meets parabola: substitute y=mx+b into y=ax²+bx+c → solve quadratic → up to 2 intersection points.",
    "steps": [
      "Identify which equation is simpler to isolate a variable from (prefer the linear equation if one exists).",
      "Substitute the expression into the other equation to get a single-variable polynomial equation.",
      "Solve the polynomial — may give 0, 1, or 2 real solutions for quadratic systems.",
      "For each x-value found, back-substitute into the simpler equation to find the corresponding y.",
      "Verify each solution pair in BOTH original equations — substitution can introduce extraneous solutions."
    ],
    "example": "Solve: y=x²−2x and y=x+4. Substitute: x²−2x=x+4 → x²−3x−4=0 → (x−4)(x+1)=0 → x=4 or x=−1. Then y=4+4=8 and y=−1+4=3. Solutions: (4,8) and (−1,3). Verify in original: 4²−2(4)=8 ✓ and (−1)²−2(−1)=3 ✓"
  },
  {
    "cat": "Statistics",
    "tags": [
      "data",
      "math",
      "science",
      "engineering"
    ],
    "title": "1D Descriptive Statistics: Central Tendency, Dispersion & Quartiles",
    "theory": "",
    "reality": "A teacher looks at test scores and sees the average is 75 — but a box plot reveals a few very low scores pulling it down. Doctors use quartiles to define healthy ranges for blood pressure and cholesterol. Sports analysts compare player stats using these measures every season.",
    "formula": "Mean: x̄ = Σxᵢ/n  (ungrouped)\nx̄ = Σfᵢxᵢ/N  (grouped, N=Σfᵢ)\nVariance: σ² = Σ(xᵢ−x̄)²/n = Σxᵢ²/n − x̄²\nStd dev: σ = √σ²\nCoeff of variation: CV = σ/x̄ × 100%\nMedian: middle value (odd n) or avg of middle 2 (even n)\nQ1=P25, Q2=P50 (median), Q3=P75\nIQR = Q3−Q1\nOutlier: x < Q1−1.5·IQR  or  x > Q3+1.5·IQR",
    "method": "Grouped data shortcut: use the midpoint of each class interval as xᵢ. Variance computing formula Σxᵢ²/n − x̄² avoids computing each (xᵢ−x̄)² individually — much faster on a calculator.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Box plot -->\n  <text x=\"130\" y=\"13\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">Five-Number Summary + Box Plot</text>\n  <line x1=\"30\" y1=\"60\" x2=\"230\" y2=\"60\" stroke=\"#444\" stroke-width=\"1.5\"/>\n  <!-- whiskers -->\n  <line x1=\"50\" y1=\"50\" x2=\"50\" y2=\"70\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <line x1=\"50\" y1=\"60\" x2=\"90\" y2=\"60\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <line x1=\"200\" y1=\"50\" x2=\"200\" y2=\"70\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <line x1=\"200\" y1=\"60\" x2=\"165\" y2=\"60\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <!-- box Q1 to Q3 -->\n  <rect x=\"90\" y=\"44\" width=\"75\" height=\"32\" rx=\"4\" fill=\"rgba(122,171,207,.2)\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <!-- median line -->\n  <line x1=\"140\" y1=\"44\" x2=\"140\" y2=\"76\" stroke=\"#c9a060\" stroke-width=\"2.5\"/>\n  <text x=\"50\"  y=\"84\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\">Min</text>\n  <text x=\"90\"  y=\"84\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\">Q1</text>\n  <text x=\"140\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">Med</text>\n  <text x=\"165\" y=\"84\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\">Q3</text>\n  <text x=\"200\" y=\"84\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\">Max</text>\n  <line x1=\"15\" y1=\"60\" x2=\"50\" y2=\"60\" stroke=\"#888\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <line x1=\"200\" y1=\"60\" x2=\"245\" y2=\"60\" stroke=\"#888\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <circle cx=\"12\" cy=\"60\" r=\"4\" fill=\"#c07070\"/>\n  <circle cx=\"248\" cy=\"60\" r=\"4\" fill=\"#c07070\"/>\n  <text x=\"12\" y=\"50\" font-size=\"7.5\" fill=\"#c07070\">outlier</text>\n  <text x=\"235\" y=\"50\" font-size=\"7.5\" fill=\"#c07070\">outlier</text>\n  <text x=\"130\" y=\"106\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">IQR = Q3−Q1 · Outlier fence: Q1−1.5·IQR and Q3+1.5·IQR</text>\n </svg>",
    "caption": "Box plot: box spans Q1 to Q3, median line inside, whiskers to min/max. Points beyond fences are outliers.",
    "steps": [
      "Sort data ascending. Find Q2 (median) by splitting dataset at the middle value.",
      "Q1 = median of the lower half; Q3 = median of the upper half (do not include Q2 itself in either half for odd n).",
      "Compute IQR = Q3−Q1. Outlier fences: lower = Q1−1.5·IQR, upper = Q3+1.5·IQR.",
      "Variance: use the computing formula σ² = (Σxᵢ²)/n − x̄² — compute Σxᵢ² and x̄ separately, then subtract.",
      "CV = σ/x̄ × 100% allows comparison of spread across datasets with different units or scales."
    ],
    "example": "Data: 2,4,5,7,8,10,12. n=7. Median=7. Lower half: 2,4,5 → Q1=4. Upper half: 8,10,12 → Q3=10. IQR=6. Fences: 4−9=−5 and 10+9=19 — no outliers. Mean=48/7≈6.86. Σxᵢ²=4+16+25+49+64+100+144=402. σ²=402/7−6.86²=57.43−47.06=10.37. σ≈3.22."
  },
  {
    "cat": "Statistics",
    "tags": [
      "data",
      "math",
      "science",
      "engineering"
    ],
    "title": "2D Statistics: Covariance, Correlation & Regression Lines",
    "theory": "",
    "reality": "Do students who study more hours get better grades? Correlation measures exactly how strongly two things are linked. Businesses track whether more advertising leads to more sales. Scientists test if a higher drug dose leads to better patient outcomes.",
    "formula": "Covariance: σₓᵧ = Σxᵢyᵢ/n − x̄·ȳ\nCorrelation: r = σₓᵧ/(σₓ·σᵧ)   −1 ≤ r ≤ 1\nRegression y on x:  ŷ = ȳ + r(σᵧ/σₓ)(x − x̄)\n  slope: b = σₓᵧ/σₓ²  intercept: a = ȳ − b·x̄\nRegression x on y:  x̂ = x̄ + r(σₓ/σᵧ)(y − ȳ)\nBoth lines pass through (x̄, ȳ)\nr=+1 or −1: perfect linear fit\nr=0: no linear relationship",
    "method": "Regression y on x minimises the sum of squared vertical residuals (least squares). Use this line to predict y from a known x. The regression x on y minimises horizontal residuals — use it to predict x from a known y. They are different lines unless r=±1.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"20\" y1=\"100\" x2=\"240\" y2=\"100\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"20\" y1=\"10\" x2=\"20\" y2=\"104\" stroke=\"#444\" stroke-width=\"1\"/>\n  <circle cx=\"50\"  cy=\"85\" r=\"3\" fill=\"#7aabcf\"/><circle cx=\"68\" cy=\"78\" r=\"3\" fill=\"#7aabcf\"/>\n  <circle cx=\"88\"  cy=\"68\" r=\"3\" fill=\"#7aabcf\"/><circle cx=\"110\" cy=\"60\" r=\"3\" fill=\"#7aabcf\"/>\n  <circle cx=\"128\" cy=\"52\" r=\"3\" fill=\"#7aabcf\"/><circle cx=\"150\" cy=\"44\" r=\"3\" fill=\"#7aabcf\"/>\n  <circle cx=\"170\" cy=\"36\" r=\"3\" fill=\"#7aabcf\"/><circle cx=\"195\" cy=\"28\" r=\"3\" fill=\"#7aabcf\"/>\n  <!-- regression line y on x -->\n  <line x1=\"38\" y1=\"92\" x2=\"210\" y2=\"22\" stroke=\"#c9a060\" stroke-width=\"2.2\"/>\n  <!-- mean point -->\n  <circle cx=\"123\" cy=\"55\" r=\"5\" fill=\"#7ab060\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n  <text x=\"128\" y=\"50\" font-size=\"8\" fill=\"#7ab060\" font-weight=\"700\">(x̄,ȳ)</text>\n  <!-- residual line example -->\n  <line x1=\"150\" y1=\"44\" x2=\"150\" y2=\"37\" stroke=\"#c07070\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n  <text x=\"155\" y=\"36\" font-size=\"7.5\" fill=\"#c07070\">residual</text>\n  <text x=\"192\" y=\"18\" font-size=\"8\" fill=\"#c9a060\">ŷ=a+bx</text>\n  <text x=\"22\" y=\"17\" font-size=\"8\" fill=\"#7aabcf\">r≈0.98</text>\n  <text x=\"130\" y=\"114\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">Least squares: minimise Σ(yᵢ−ŷᵢ)². Both lines cross (x̄,ȳ).</text>\n </svg>",
    "caption": "Regression line minimises squared residuals. Green dot = centroid (x̄,ȳ): both regression lines always pass through it.",
    "steps": [
      "Compute summary statistics: x̄, ȳ, σₓ, σᵧ, and covariance σₓᵧ = (Σxᵢyᵢ)/n − x̄ȳ.",
      "Correlation: r = σₓᵧ/(σₓ·σᵧ). Interpret: |r|>0.9 strong, 0.5–0.9 moderate, <0.5 weak.",
      "Slope of regression y on x: b = σₓᵧ/σₓ². Intercept: a = ȳ − b·x̄.",
      "Use ŷ=a+bx to predict y for a given x. Only interpolate (within the data range) — extrapolation is unreliable.",
      "R² = r² = coefficient of determination — percentage of variance in y explained by x."
    ],
    "example": "n=5 pairs: Σx=15, Σy=25, Σxy=83, Σx²=55, Σy²=135. x̄=3, ȳ=5. σₓᵧ=83/5−15=1.6. σₓ²=55/5−9=2. b=1.6/2=0.8. a=5−0.8(3)=2.6. Regression: ŷ=2.6+0.8x. At x=4: ŷ=5.8."
  },
  {
    "cat": "Statistics",
    "tags": [
      "data",
      "science",
      "engineering"
    ],
    "title": "Normal Distribution, z-Scores & Confidence Intervals",
    "theory": "",
    "reality": "Heights, test scores, and factory measurements all form a bell curve. A z-score tells you how unusual a measurement is. Factories use this to catch defective products before they ship. Doctors use it to decide whether a lab result is normal or a warning sign.",
    "formula": "Z = (X−μ)/σ  (standardise)\nN(0,1): 68% within 1σ, 95% within 2σ, 99.7% within 3σ\nCI for mean: x̄ ± z*(σ/√n)\nCI for proportion: p̂ ± z*(√(p̂(1−p̂)/n))\nz* values: 90%→1.645, 95%→1.96, 99%→2.576\nMargin of error: E = z*·σ/√n\nMin sample size: n ≥ (z*·σ/E)²",
    "method": "Standardisation procedure: convert any normal X~N(μ,σ²) to standard normal Z~N(0,1) using Z=(X−μ)/σ, then use the standard normal table (z-table) to find probabilities. For sample means, replace σ with σ/√n (standard error of the mean).",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M14 100 Q65 100 130 18 Q195 100 246 100\" fill=\"rgba(122,171,207,.10)\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <line x1=\"14\" y1=\"100\" x2=\"246\" y2=\"100\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"130\" y1=\"14\" x2=\"130\" y2=\"104\" stroke=\"#c9a060\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <!-- 1 sigma -->\n  <line x1=\"91\"  y1=\"68\" x2=\"91\"  y2=\"100\" stroke=\"#7ab060\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n  <line x1=\"169\" y1=\"68\" x2=\"169\" y2=\"100\" stroke=\"#7ab060\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n  <!-- 2 sigma -->\n  <line x1=\"52\"  y1=\"94\" x2=\"52\"  y2=\"100\" stroke=\"#c07070\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n  <line x1=\"208\" y1=\"94\" x2=\"208\" y2=\"100\" stroke=\"#c07070\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n  <text x=\"130\" y=\"108\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">μ</text>\n  <text x=\"91\"  y=\"108\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7ab060\">μ−σ</text>\n  <text x=\"169\" y=\"108\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7ab060\">μ+σ</text>\n  <text x=\"52\"  y=\"108\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c07070\">μ−2σ</text>\n  <text x=\"208\" y=\"108\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c07070\">μ+2σ</text>\n  <text x=\"130\" y=\"60\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7ab060\">68%</text>\n  <text x=\"130\" y=\"78\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c07070\">95%</text>\n  <text x=\"22\"  y=\"18\" font-size=\"8\" fill=\"#7aabcf\">Z=(X−μ)/σ</text>\n  <text x=\"168\" y=\"18\" font-size=\"8\" fill=\"#c9a060\">SE=σ/√n</text>\n  <text x=\"22\"  y=\"32\" font-size=\"7.5\" fill=\"#9ecef0\">99.7% within 3σ</text>\n </svg>",
    "caption": "68-95-99.7 rule. Standardise with Z=(X−μ)/σ to use z-table. For sample means, use σ/√n (standard error).",
    "steps": [
      "Standardise: compute z=(x−μ)/σ. Use the z-table to find P(Z<z) (cumulative probability from the left).",
      "For P(a<X<b): find P(Z<z_b)−P(Z<z_a). For P(X>a): find 1−P(Z<z_a).",
      "For sample means: replace σ with SE=σ/√n before standardising.",
      "Confidence interval: x̄ ± z*(σ/√n). Wider CI → more confidence but less precision.",
      "To find minimum n for a given margin of error E: n≥(z*σ/E)² — always round UP."
    ],
    "example": "IQ ~ N(100,15²). P(X>115): z=(115−100)/15=1.0. P(Z>1.0)=1−0.8413=0.1587 ≈ 15.87%. 95% CI for mean of n=100: x̄±1.96·15/√100 = x̄±2.94. If x̄=102: CI=(99.06, 104.94)."
  },
  {
    "cat": "Geometry",
    "tags": [
      "geometry",
      "engineering",
      "daily",
      "physics"
    ],
    "title": "Complete Areas & Volumes Reference",
    "theory": "",
    "reality": "A pool company needs to know how many gallons a custom-shaped pool holds. A baker needs the area of an oddly shaped pan. A civil engineer calculates the volume of concrete for a highway overpass. Every construction and manufacturing job starts with these calculations.",
    "formula": "FLAT AREAS:\nTriangle: A=bh/2   Equilateral: A=√3L²/4\nTrapezoid: A=(B+b)h/2   Circle: A=πr²\nSector: A=r²α/2 (α radians)\nRegular polygon: A=perimeter·apothem/2\n\nSOLID VOLUMES:\nCube: V=L³   Box: V=abc\nCylinder: V=πr²h\nCone: V=πr²h/3\nSphere: V=4πr³/3\nPyramid: V=A_base·h/3\nTorus: V=2π²Rr²",
    "method": "Lateral vs total surface area: lateral area (Aₗ) excludes the base(s); total area (Aₜ) includes all faces. For cylinders: Aₗ=2πrh, Aₜ=2πr(h+r). For cones: Aₗ=πrg (slant height g=√(h²+r²)), Aₜ=πr(g+r).",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Triangle -->\n  <polygon points=\"30,90 10,90 20,70\" fill=\"rgba(122,171,207,.15)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <text x=\"20\" y=\"100\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#7aabcf\">½bh</text>\n  <!-- Rectangle -->\n  <rect x=\"38\" y=\"70\" width=\"28\" height=\"20\" rx=\"2\" fill=\"rgba(122,171,207,.15)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <text x=\"52\" y=\"100\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#7aabcf\">bh</text>\n  <!-- Circle -->\n  <circle cx=\"90\" cy=\"80\" r=\"12\" fill=\"rgba(201,160,96,.15)\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <text x=\"90\" y=\"100\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#c9a060\">πr²</text>\n  <!-- Trapezoid -->\n  <polygon points=\"118,90 148,90 143,70 123,70\" fill=\"rgba(201,160,96,.15)\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <text x=\"133\" y=\"100\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#c9a060\">(B+b)h/2</text>\n  <!-- Cylinder -->\n  <ellipse cx=\"178\" cy=\"70\" rx=\"14\" ry=\"5\" fill=\"rgba(122,176,96,.15)\" stroke=\"#7ab060\" stroke-width=\"1.5\"/>\n  <rect x=\"164\" y=\"70\" width=\"28\" height=\"20\" fill=\"rgba(122,176,96,.10)\" stroke=\"none\"/>\n  <ellipse cx=\"178\" cy=\"90\" rx=\"14\" ry=\"5\" fill=\"rgba(122,176,96,.15)\" stroke=\"#7ab060\" stroke-width=\"1.5\"/>\n  <text x=\"178\" y=\"104\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#7ab060\">πr²h</text>\n  <!-- Sphere -->\n  <circle cx=\"222\" cy=\"78\" r=\"14\" fill=\"rgba(192,112,112,.12)\" stroke=\"#c07070\" stroke-width=\"1.5\"/>\n  <text x=\"222\" y=\"104\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#c07070\">4πr³/3</text>\n  <!-- Cone -->\n  <polygon points=\"248,90 232,90 240,68\" fill=\"rgba(192,112,112,.12)\" stroke=\"#c07070\" stroke-width=\"1.5\"/>\n  <text x=\"240\" y=\"104\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#c07070\">πr²h/3</text>\n  <!-- Sector arc -->\n  <path d=\"M30 30 L50 18 A22 22 0 0 1 52 40 Z\" fill=\"rgba(160,96,192,.15)\" stroke=\"#a060c0\" stroke-width=\"1.5\"/>\n  <text x=\"44\" y=\"54\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#a060c0\">r²α/2</text>\n  <!-- Pyramid -->\n  <polygon points=\"92,48 80,60 104,60\" fill=\"rgba(160,96,192,.12)\" stroke=\"#a060c0\" stroke-width=\"1.5\"/>\n  <line x1=\"92\" y1=\"48\" x2=\"86\" y2=\"60\" stroke=\"#a060c0\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n  <text x=\"92\" y=\"66\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#a060c0\">Bh/3</text>\n  <!-- Labels row -->\n  <text x=\"130\" y=\"14\" text-anchor=\"middle\" font-size=\"9\" fill=\"#888\" font-weight=\"700\">2D (top) and 3D (bottom) key formulas</text>\n </svg>",
    "caption": "All shapes decompose into these primitives. Sector uses radians. Cone and pyramid share the ⅓ factor.",
    "steps": [
      "For composite shapes: decompose into recognised primitives, compute each area/volume, then add or subtract.",
      "Slant height of a cone g=√(h²+r²) — required for lateral area Aₗ=πrg.",
      "Sphere surface area SA=4πr² and volume V=4πr³/3 — both involve r only.",
      "For a sector with central angle in degrees: A=πr²·(θ°/360). For radians: A=r²α/2.",
      "Volume of revolution (disk method): V=π∫[f(x)]²dx — connects geometry to integration."
    ],
    "example": "Composite: cylinder (r=3, h=10) capped with hemisphere (r=3). V=πr²h + (2/3)πr³ = 90π + 18π = 108π ≈ 339.3 cm³. SA = lateral cylinder + base circle + hemisphere = 2πrh + πr² + 2πr² = 60π + 9π + 18π = 87π ≈ 273.3 cm²."
  },
  {
    "cat": "Finance & Commerce",
    "tags": [
      "finance",
      "daily",
      "math"
    ],
    "title": "Commercial Arithmetic: Interest, Annuities & APR",
    "theory": "",
    "reality": "When you take out a car loan, the bank calculates your exact monthly payment using an annuity formula. APR lets you compare loan offers fairly. These formulas determine your mortgage payment, plan your retirement savings, and underlie every financial product you will ever use.",
    "formula": "Simple: I = C·r·t;  C_t = C(1 + rt)\nCompound: C_t = C(1 + r/m)^(mt)\nContinuous: C_t = C·eʳᵗ\nAnnuity (future): M = a·((1+r)ⁿ−1)/r\nAnnuity (present value): PV = a·(1−(1+r)^(−n))/r\nInstalment: a = C·r(1+r)ⁿ/((1+r)ⁿ−1)\nAPR/TAE: (1+r/m)^m − 1\nHalf-yearly: m=2  Quarterly: m=4  Monthly: m=12",
    "method": "APR (Tasa Anual Equivalente in Spanish/European context, or Annual Effective Rate): converts any compounding frequency to a single annual rate for fair comparison. Always compare loans using APR, not nominal rate.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"14\" y1=\"100\" x2=\"246\" y2=\"100\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"14\" y1=\"10\" x2=\"14\" y2=\"104\" stroke=\"#444\" stroke-width=\"1\"/>\n  <!-- Simple interest line -->\n  <line x1=\"20\" y1=\"96\" x2=\"220\" y2=\"36\" stroke=\"#7aabcf\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/>\n  <!-- Compound interest curve -->\n  <path d=\"M20 96 Q80 92 130 72 Q180 50 220 20\" fill=\"none\" stroke=\"#c9a060\" stroke-width=\"2.5\"/>\n  <!-- Continuous -->\n  <path d=\"M20 96 Q80 90 130 66 Q180 44 220 14\" fill=\"none\" stroke=\"#7ab060\" stroke-width=\"1.8\"/>\n  <text x=\"225\" y=\"32\" font-size=\"8\" fill=\"#c9a060\" font-weight=\"700\">Compound</text>\n  <text x=\"225\" y=\"44\" font-size=\"8\" fill=\"#7aabcf\">Simple</text>\n  <text x=\"225\" y=\"18\" font-size=\"8\" fill=\"#7ab060\">Continuous</text>\n  <text x=\"16\" y=\"22\" font-size=\"7.5\" fill=\"#888\">C₀</text>\n  <text x=\"130\" y=\"114\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">Same nominal rate, different compounding → different final amounts</text>\n </svg>",
    "caption": "Compound grows faster than simple at the same nominal rate. More frequent compounding → higher effective rate.",
    "steps": [
      "Identify: is interest simple (grows on original principal only) or compound (interest earns interest)?",
      "For compound: identify m (compounding periods per year) and convert nominal rate r to period rate r/m.",
      "APR = (1+r/m)^m − 1 — this is the true annual cost for comparing different loan products.",
      "Annuity future value: if you save $a per period for n periods at rate r per period, total = a·((1+r)ⁿ−1)/r.",
      "Loan instalment formula gives the equal periodic payment a needed to fully repay principal C in n periods."
    ],
    "example": "$10,000 loan at 6% nominal, monthly compounding, 5 years. Period rate r=0.005, n=60. Monthly payment: a=10000·0.005·(1.005)⁶⁰/((1.005)⁶⁰−1)=10000·0.005·1.3489/0.3489=$193.33. APR=(1.005)¹²−1=6.168%."
  },
  {
    "cat": "Physics",
    "tags": [
      "physics",
      "engineering"
    ],
    "title": "Kinematics: UARM, Projectile & Circular Motion",
    "theory": "",
    "reality": "A quarterback throws a football — where will it land? That is projectile motion. A roller coaster going through a loop uses circular motion math to keep riders safely in their seats. Traffic engineers calculate the maximum safe speed for every highway curve.",
    "formula": "UARM (Uniformly Accelerated Rectilinear Motion):\nv = v₀ + at\nx = x₀ + v₀t + ½at²\nv² = v₀² + 2a(x − x₀)\n\nProjectile (launch angle α, v₀):\nvₓ = v₀cosα  (constant)\nvᵧ = v₀sinα − gt\nx = v₀cosα·t\ny = v₀sinα·t − ½gt²\nRange: R = v₀²sin2α/g\nMax height: H = v₀²sin²α/(2g)\n\nCircular Motion:\nω = 2π/T = 2πf   v = ωR\naₙ = v²/R = ω²R  (centripetal)\nT = 2π/ω   f = 1/T",
    "method": "Projectile method: always resolve into x (no acceleration) and y (a=−g) components and treat as two independent 1D problems. Identify unknowns in each axis, match the shared time variable t to link them.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs><marker id=\"ka\" markerWidth=\"5\" markerHeight=\"5\" refX=\"4\" refY=\"2.5\" orient=\"auto\"><path d=\"M0,0 L5,2.5 L0,5 Z\" fill=\"#7aabcf\"/></marker></defs>\n  <line x1=\"10\" y1=\"100\" x2=\"250\" y2=\"100\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"10\" y1=\"100\" x2=\"10\" y2=\"10\" stroke=\"#444\" stroke-width=\"1\"/>\n  <!-- Parabola path -->\n  <path d=\"M10 100 Q100 10 190 100\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"2.5\"/>\n  <!-- launch vector -->\n  <line x1=\"10\" y1=\"100\" x2=\"52\" y2=\"64\" stroke=\"#c9a060\" stroke-width=\"2\" marker-end=\"url(#ka)\"/>\n  <text x=\"30\" y=\"78\" font-size=\"8\" fill=\"#c9a060\">v₀</text>\n  <!-- angle arc -->\n  <path d=\"M30 100 A20 20 0 0 1 26 82\" fill=\"none\" stroke=\"#7ab060\" stroke-width=\"1.5\"/>\n  <text x=\"32\" y=\"96\" font-size=\"8\" fill=\"#7ab060\">α</text>\n  <!-- height label -->\n  <line x1=\"100\" y1=\"10\" x2=\"100\" y2=\"100\" stroke=\"#c07070\" stroke-width=\"1\" stroke-dasharray=\"3,2\"/>\n  <text x=\"103\" y=\"55\" font-size=\"8\" fill=\"#c07070\">H</text>\n  <!-- range label -->\n  <line x1=\"10\" y1=\"106\" x2=\"190\" y2=\"106\" stroke=\"#888\" stroke-width=\"1\"/>\n  <text x=\"100\" y=\"116\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">R = v₀²sin2α/g</text>\n  <!-- Circular inset -->\n  <circle cx=\"230\" cy=\"55\" r=\"30\" fill=\"none\" stroke=\"#7ab060\" stroke-width=\"1.5\"/>\n  <circle cx=\"230\" cy=\"55\" r=\"3\" fill=\"#7ab060\"/>\n  <line x1=\"230\" y1=\"55\" x2=\"252\" y2=\"35\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <text x=\"243\" y=\"43\" font-size=\"7.5\" fill=\"#c9a060\">R</text>\n  <text x=\"213\" y=\"52\" font-size=\"7.5\" fill=\"#7ab060\">aₙ=v²/R</text>\n </svg>",
    "caption": "Projectile: parabolic path from independent x (constant v) and y (constant −g). Circular: centripetal acceleration points inward.",
    "steps": [
      "Resolve initial velocity: vₓ=v₀cosα (stays constant), vᵧ=v₀sinα (decreases at rate g).",
      "For range and flight time: set y=0, solve for t → T=2v₀sinα/g, then R=vₓ·T.",
      "For max height: set vᵧ=0, solve for t → H=v₀²sin²α/(2g).",
      "For circular motion: centripetal acceleration aₙ=v²/R always points toward the centre — it is NOT tangential.",
      "Angular frequency ω=2πf. Linear and angular quantities: v=ωR, aₙ=ω²R."
    ],
    "example": "Ball launched at 30 m/s, 45°. H=900·sin²45°/(2·10)=22.5 m. T=2·30·sin45°/10=4.24 s. R=30·cos45°·4.24=90 m. Circular: car at v=20 m/s, R=50 m. aₙ=400/50=8 m/s²."
  },
  {
    "cat": "Physics",
    "tags": [
      "physics",
      "engineering"
    ],
    "title": "Dynamics: Newton's Laws, Weight, Friction & Torque",
    "theory": "",
    "reality": "A car needs more engine force going uphill than on flat ground — that is Newton's second law. A screwdriver works because torque multiplies your hand force into a stronger twist. Friction keeps your sneakers from sliding. Every vehicle and machine is designed around these laws.",
    "formula": "1st Law: ΣF=0 ↔ a=0 (inertia)\n2nd Law: ΣF=ma  (vector equation)\n3rd Law: F₁₂=−F₂₁\nWeight: W = mg  (g=9.8 m/s²)\nFriction: Fₓ ≤ μₛN (static); Fₖ=μₖN (kinetic)\nNormal N: reaction from surface ⊥ to surface\nTorque: τ = F·d = F·r·sinθ  (N·m)\nEquilibrium: ΣF=0  AND  Στ=0\nHooke's Law: F = −kx  (spring)",
    "method": "FBD protocol for inclined planes: rotate axes so x is along the slope, y is perpendicular. Decompose weight: W∥=mgsinθ (down slope), W⊥=mgcosθ (into surface). Then N=mgcosθ and Ffriction=μmgcosθ.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs><marker id=\"fa\" markerWidth=\"5\" markerHeight=\"5\" refX=\"4\" refY=\"2.5\" orient=\"auto\"><path d=\"M0,0 L5,2.5 L0,5 Z\" fill=\"#c9a060\"/></marker>\n  <marker id=\"fb\" markerWidth=\"5\" markerHeight=\"5\" refX=\"4\" refY=\"2.5\" orient=\"auto\"><path d=\"M0,0 L5,2.5 L0,5 Z\" fill=\"#c07070\"/></marker>\n  <marker id=\"fc\" markerWidth=\"5\" markerHeight=\"5\" refX=\"4\" refY=\"2.5\" orient=\"auto\"><path d=\"M0,0 L5,2.5 L0,5 Z\" fill=\"#7ab060\"/></marker>\n  <marker id=\"fd\" markerWidth=\"5\" markerHeight=\"5\" refX=\"4\" refY=\"2.5\" orient=\"auto\"><path d=\"M0,0 L5,2.5 L0,5 Z\" fill=\"#7aabcf\"/></marker></defs>\n  <!-- Inclined plane -->\n  <polygon points=\"10,100 130,100 130,50\" fill=\"rgba(122,171,207,.08)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <rect x=\"80\" y=\"64\" width=\"28\" height=\"22\" rx=\"3\" fill=\"rgba(201,160,96,.15)\" stroke=\"#c9a060\" stroke-width=\"1.5\" transform=\"rotate(-24,94,75)\"/>\n  <text x=\"88\" y=\"78\" font-size=\"8\" fill=\"#c9a060\" transform=\"rotate(-24,88,78)\">m</text>\n  <!-- weight -->\n  <line x1=\"94\" y1=\"75\" x2=\"94\" y2=\"100\" stroke=\"#c07070\" stroke-width=\"2\" marker-end=\"url(#fb)\"/>\n  <text x=\"97\" y=\"90\" font-size=\"8\" fill=\"#c07070\">W=mg</text>\n  <!-- normal -->\n  <line x1=\"94\" y1=\"75\" x2=\"72\" y2=\"53\" stroke=\"#7ab060\" stroke-width=\"2\" marker-end=\"url(#fc)\"/>\n  <text x=\"60\" y=\"60\" font-size=\"8\" fill=\"#7ab060\">N</text>\n  <!-- friction -->\n  <line x1=\"94\" y1=\"75\" x2=\"120\" y2=\"65\" stroke=\"#7aabcf\" stroke-width=\"2\" marker-end=\"url(#fd)\"/>\n  <text x=\"116\" y=\"62\" font-size=\"8\" fill=\"#7aabcf\">f</text>\n  <!-- angle -->\n  <path d=\"M115 100 A18 18 0 0 1 125 84\" fill=\"none\" stroke=\"#888\" stroke-width=\"1.2\"/>\n  <text x=\"118\" y=\"97\" font-size=\"8\" fill=\"#888\">θ</text>\n  <!-- Torque diagram -->\n  <circle cx=\"210\" cy=\"75\" r=\"25\" fill=\"rgba(122,171,207,.06)\" stroke=\"#7aabcf\" stroke-width=\"1.2\"/>\n  <circle cx=\"210\" cy=\"75\" r=\"3\" fill=\"#7aabcf\"/>\n  <line x1=\"210\" y1=\"75\" x2=\"230\" y2=\"75\" stroke=\"#888\" stroke-width=\"1\"/>\n  <line x1=\"230\" y1=\"55\" x2=\"230\" y2=\"95\" stroke=\"#c9a060\" stroke-width=\"2.5\" marker-end=\"url(#fa)\"/>\n  <text x=\"233\" y=\"76\" font-size=\"8\" fill=\"#c9a060\">F</text>\n  <text x=\"215\" y=\"56\" font-size=\"7.5\" fill=\"#888\">d</text>\n  <text x=\"160\" y=\"110\" font-size=\"7.5\" fill=\"#c9a060\">τ = F·d</text>\n </svg>",
    "caption": "Inclined plane: rotate axes to align with slope. Torque = force × perpendicular distance from pivot.",
    "steps": [
      "Draw the FBD: one dot for each body, every force as a labelled arrow.",
      "For inclined planes: tilt your axes so x is along the slope — this eliminates one unknown from each equation.",
      "Write ΣFₓ=maₓ and ΣFy=may separately. On a flat surface with no vertical motion, N=mg.",
      "Friction force: static friction adjusts to prevent motion up to μₛN; once sliding, kinetic friction = μₖN (always opposing motion).",
      "For torque equilibrium: choose the pivot at an unknown force to eliminate it from the moment equation."
    ],
    "example": "Block m=5 kg on θ=30° slope, μₖ=0.2. N=5·10·cos30°=43.3 N. Friction=0.2·43.3=8.66 N. Net force down slope=5·10·sin30°−8.66=25−8.66=16.34 N. a=16.34/5=3.27 m/s²."
  },
  {
    "cat": "Physics",
    "tags": [
      "physics",
      "engineering"
    ],
    "title": "Work, Energy, Power & Momentum–Collisions",
    "theory": "",
    "reality": "A crash investigator measures skid marks to calculate how fast a car was going before impact — using energy and momentum. Solar panels are rated in watts, which is power. The energy in a bouncing ball follows the same conservation laws as a rocket in flight.",
    "formula": "Work: W = F·d·cosθ  (J)\nKE = ½mv²   PE = mgh (gravitational)\nPE_spring = ½kx²\nWork-Energy Thm: W_net = ΔKE\nConservation: KE₁+PE₁ = KE₂+PE₂ (conservative forces)\nPower: P = W/t = F·v  (W = J/s)\nMomentum: p = mv\nImpulse: J = FΔt = Δp\nConservation of p: Σpᵢ = Σpf\nElastic: KE conserved, p conserved\nInelastic: only p conserved\nPerfectly inelastic: bodies stick → v_f=(m₁v₁+m₂v₂)/(m₁+m₂)",
    "method": "Energy method vs Newton method: use energy when you want speed at a point without knowing time or intermediate forces. Use Newton when you need forces, time, or acceleration. They give the same answer — choose whichever gives fewer unknowns.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"14\" y1=\"108\" x2=\"246\" y2=\"108\" stroke=\"#444\" stroke-width=\"1\"/>\n  <!-- incline energy -->\n  <polygon points=\"14,108 130,108 130,40\" fill=\"rgba(122,171,207,.06)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <circle cx=\"30\" cy=\"105\" r=\"7\" fill=\"rgba(201,160,96,.3)\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <circle cx=\"120\" cy=\"44\" r=\"7\" fill=\"rgba(122,176,96,.3)\" stroke=\"#7ab060\" stroke-width=\"1.5\"/>\n  <text x=\"22\" y=\"98\" font-size=\"7.5\" fill=\"#c9a060\">KE₁=½mv²</text>\n  <text x=\"88\" y=\"38\" font-size=\"7.5\" fill=\"#7ab060\">PE₂=mgh</text>\n  <path d=\"M37 100 Q80 60 112 50\" fill=\"none\" stroke=\"#888\" stroke-width=\"1.5\" stroke-dasharray=\"4,2\"/>\n  <text x=\"65\" y=\"78\" font-size=\"8\" fill=\"#888\">KE₁→PE₂</text>\n  <!-- collision -->\n  <rect x=\"148\" y=\"82\" width=\"36\" height=\"22\" rx=\"4\" fill=\"rgba(122,171,207,.2)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <text x=\"166\" y=\"97\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7aabcf\" font-weight=\"700\">m₁</text>\n  <rect x=\"192\" y=\"82\" width=\"36\" height=\"22\" rx=\"4\" fill=\"rgba(201,160,96,.2)\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <text x=\"210\" y=\"97\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#c9a060\" font-weight=\"700\">m₂</text>\n  <line x1=\"186\" y1=\"93\" x2=\"196\" y2=\"93\" stroke=\"#c07070\" stroke-width=\"2\"/>\n  <text x=\"190\" y=\"88\" font-size=\"7.5\" fill=\"#c07070\">→</text>\n  <text x=\"166\" y=\"78\" font-size=\"7.5\" fill=\"#7aabcf\">v₁→</text>\n  <text x=\"204\" y=\"78\" font-size=\"7.5\" fill=\"#c9a060\">←v₂</text>\n  <text x=\"190\" y=\"116\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">m₁v₁+m₂v₂=const</text>\n </svg>",
    "caption": "Energy conserved along frictionless path: KE at bottom = PE at top. Collision: momentum always conserved regardless of type.",
    "steps": [
      "Identify all forces — label conservative (gravity, spring) and non-conservative (friction, applied).",
      "If only conservative forces act: KE₁+PE₁=KE₂+PE₂. If friction acts: KE₁+PE₁=KE₂+PE₂+W_friction.",
      "For collisions: always write momentum conservation p_before=p_after.",
      "For elastic collisions: also write KE conservation or use elastic collision formulas.",
      "Perfectly inelastic: bodies stick together after collision. Use momentum conservation to find v_f."
    ],
    "example": "Ball m=0.5 kg dropped from h=5 m: v=√(2gh)=√100=10 m/s on impact. Elastic collision m₁=2 kg, v₁=4 m/s hits m₂=2 kg at rest: v₁_f=0, v₂_f=4 m/s (equal masses exchange velocities). ✓ KE: ½(2)(16)=½(2)(16)."
  },
  {
    "cat": "Physics",
    "tags": [
      "physics",
      "chemistry",
      "engineering"
    ],
    "title": "Heat, Thermodynamics & Thermal Machines",
    "theory": "",
    "reality": "A refrigerator pumps heat from inside to outside — that is the second law of thermodynamics. Car engines convert fuel heat into wheel motion. Your home insulation rating describes how well it resists heat flow. Thermodynamics explains every engine and air conditioner ever built.",
    "formula": "Temperature: K = °C + 273.15\nHeat: Q = mcΔT  (specific heat)\nLatent heat: Q = m·L\nFirst Law: ΔU = Q − W\nW (gas expanding): W = pΔV (isobaric)\nProcesses:\n  Isothermal (T=const): ΔU=0, Q=W\n  Adiabatic (Q=0): ΔU=−W\n  Isochoric (V=const): W=0, ΔU=Q\n  Isobaric (p=const): W=pΔV\nCarnot efficiency: η=1−T_cold/T_hot\nCOP (heat pump): COP=Q_hot/W = T_hot/(T_hot−T_cold)",
    "method": "Thermal equilibrium problem: set Qgained=Qlost (heat gained by cooler body = heat lost by warmer body). Q=mcΔT for each component. The final temperature is found by solving the equation — it must lie between the initial temperatures.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Carnot engine diagram -->\n  <rect x=\"90\" y=\"10\" width=\"80\" height=\"28\" rx=\"6\" fill=\"rgba(192,112,112,.15)\" stroke=\"#c07070\" stroke-width=\"1.5\"/>\n  <text x=\"130\" y=\"28\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c07070\" font-weight=\"700\">T_hot (source)</text>\n  <rect x=\"90\" y=\"80\" width=\"80\" height=\"28\" rx=\"6\" fill=\"rgba(122,171,207,.15)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <text x=\"130\" y=\"98\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7aabcf\" font-weight=\"700\">T_cold (sink)</text>\n  <rect x=\"106\" y=\"44\" width=\"48\" height=\"30\" rx=\"6\" fill=\"rgba(122,176,96,.15)\" stroke=\"#7ab060\" stroke-width=\"2\"/>\n  <text x=\"130\" y=\"62\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7ab060\" font-weight=\"700\">ENGINE</text>\n  <line x1=\"130\" y1=\"38\" x2=\"130\" y2=\"44\" stroke=\"#c07070\" stroke-width=\"2\"/>\n  <line x1=\"130\" y1=\"74\" x2=\"130\" y2=\"80\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <line x1=\"154\" y1=\"59\" x2=\"190\" y2=\"59\" stroke=\"#c9a060\" stroke-width=\"2.5\"/>\n  <text x=\"196\" y=\"63\" font-size=\"10\" fill=\"#c9a060\" font-weight=\"700\">W</text>\n  <text x=\"112\" y=\"40\" font-size=\"8\" fill=\"#c07070\">Q_hot</text>\n  <text x=\"112\" y=\"78\" font-size=\"8\" fill=\"#7aabcf\">Q_cold</text>\n  <text x=\"10\" y=\"30\" font-size=\"8\" fill=\"#888\">η=1−T_c/T_h</text>\n  <text x=\"10\" y=\"44\" font-size=\"8\" fill=\"#888\">W=Q_hot−Q_cold</text>\n  <text x=\"10\" y=\"58\" font-size=\"8\" fill=\"#888\">ΔU=Q−W</text>\n  <text x=\"10\" y=\"72\" font-size=\"8\" fill=\"#7aabcf\">Isothermal: T=const</text>\n  <text x=\"10\" y=\"86\" font-size=\"8\" fill=\"#c9a060\">Adiabatic: Q=0</text>\n  <text x=\"10\" y=\"100\" font-size=\"8\" fill=\"#7ab060\">Isochoric: V=const</text>\n </svg>",
    "caption": "Carnot engine: takes Q_hot from hot source, outputs W, dumps Q_cold to cold sink. η=1−T_c/T_h is the theoretical maximum.",
    "steps": [
      "Convert all temperatures to Kelvin before using gas law or efficiency formulas.",
      "For Q=mcΔT: m in kg, c in J/(kg·K), ΔT=T_final−T_initial (sign gives heat direction).",
      "For phase changes: Q=mL (no temperature change during the phase transition).",
      "First Law: ΔU=Q−W. For an ideal gas: ΔU=(n·Cv·ΔT) and depends only on temperature.",
      "Carnot efficiency is the upper bound — real engines are always less efficient due to irreversible processes."
    ],
    "example": "Carnot engine between 500 K and 300 K: η=1−300/500=40%. For every 100 J from hot source, maximum 40 J can become work; 60 J goes to the cold sink. Thermal equilibrium: 0.5 kg water at 20°C + 2 kg at 80°C: 0.5·4200·(T−20)=2·4200·(80−T) → T=68°C."
  },
  {
    "cat": "Physics",
    "tags": [
      "physics",
      "engineering"
    ],
    "title": "Fluid Mechanics: Pascal, Archimedes & Bernoulli",
    "theory": "",
    "reality": "A steel ship floats because of buoyancy — water pushes up with a force equal to the weight of water displaced (Archimedes). A car lift uses Pascal's law to multiply force with hydraulic pressure. An airplane wing creates lift because faster air above it means lower pressure below.",
    "formula": "Hydrostatic pressure: P = P₀ + ρgh\nPascal: ΔP transmitted uniformly → F₁/A₁ = F₂/A₂\nArchimedes: E = ρ_fluid·V_submerged·g\nFloating: ρ_object/ρ_fluid = V_submerged/V_total\nContinuity: S₁v₁ = S₂v₂  (A·v = Q)\nBernoulli: p + ½ρv² + ρgh = constant\nToricelli: v_exit = √(2gh)\nReynolds: Re = ρvL/η",
    "method": "Bernoulli application: identify two points along a streamline, write p₁+½ρv₁²+ρgh₁=p₂+½ρv₂²+ρgh₂. If the pipe is horizontal, ρgh terms cancel. Combine with continuity S₁v₁=S₂v₂ to eliminate one unknown.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Venturi tube / Bernoulli -->\n  <path d=\"M10 45 L70 45 Q90 45 95 55 L165 55 Q170 45 190 45 L250 45\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <path d=\"M10 75 L70 75 Q90 75 95 65 L165 65 Q170 75 190 75 L250 75\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <text x=\"40\" y=\"63\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\">S₁,v₁,p₁</text>\n  <text x=\"130\" y=\"62\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">S₂,v₂,p₂</text>\n  <text x=\"220\" y=\"63\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\">S₁,v₁</text>\n  <!-- pressure gauges -->\n  <line x1=\"40\" y1=\"45\" x2=\"40\" y2=\"20\" stroke=\"#888\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n  <text x=\"40\" y=\"16\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">p₁ high</text>\n  <line x1=\"130\" y1=\"55\" x2=\"130\" y2=\"30\" stroke=\"#888\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n  <text x=\"130\" y=\"26\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c07070\">p₂ low</text>\n  <!-- Archimedes inset -->\n  <rect x=\"176\" y=\"80\" width=\"70\" height=\"36\" rx=\"4\" fill=\"rgba(122,171,207,.12)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <rect x=\"195\" y=\"88\" width=\"30\" height=\"20\" rx=\"3\" fill=\"rgba(201,160,96,.2)\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <line x1=\"210\" y1=\"88\" x2=\"210\" y2=\"76\" stroke=\"#7ab060\" stroke-width=\"2\"/>\n  <text x=\"200\" y=\"73\" font-size=\"7.5\" fill=\"#7ab060\">E=ρ_f·V·g</text>\n  <text x=\"130\" y=\"108\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">Bernoulli: p+½ρv²+ρgh=const · Narrow→fast→low pressure</text>\n </svg>",
    "caption": "Venturi effect: narrowing increases v, decreases p. Archimedes buoyancy = weight of displaced fluid.",
    "steps": [
      "For hydrostatic problems: P=P₀+ρgh — pressure increases linearly with depth.",
      "Pascal's principle: F₁/A₁=F₂/A₂ — a hydraulic press multiplies force by area ratio.",
      "Archimedes: buoyant force = weight of fluid displaced. Object floats if ρ_object < ρ_fluid.",
      "Continuity equation: in an incompressible fluid, volume flow rate Q=Av is constant — narrower means faster.",
      "Bernoulli: apply at two points on the same streamline. Combine with continuity when both v and A are given."
    ],
    "example": "Water flows through pipe: A₁=0.04 m², v₁=2 m/s. Narrows to A₂=0.01 m². Continuity: v₂=v₁A₁/A₂=8 m/s. Bernoulli (horizontal): p₁+½ρv₁²=p₂+½ρv₂². Δp=½·1000·(64−4)=30,000 Pa."
  },
  {
    "cat": "Physics",
    "tags": [
      "physics",
      "engineering"
    ],
    "title": "SHM, Waves, Sound & Doppler Effect",
    "theory": "",
    "reality": "A fire truck siren sounds higher as it rushes toward you and lower as it drives away — that is the Doppler effect. Doctors use ultrasound waves to see babies before birth. Your speaker vibrates in simple harmonic motion to produce every sound you hear from music to speech.",
    "formula": "SHM: x(t) = A·cos(ωt+φ₀)\nω = 2πf = 2π/T\nSpring: ω=√(k/m), T=2π√(m/k)\nPendulum: T=2π√(L/g)\nWave: v=λf,  y(x,t)=A·sin(kx−ωt)\nWave number: k=2π/λ\nSound intensity: β=10·log(I/I₀)  dB\nDoppler: f'=f·(v±v_observer)/(v∓v_source)\nStanding waves (string, fixed both ends):\nλₙ=2L/n,  fₙ=nv/(2L)",
    "method": "Doppler sign rule: numerator +v_observer when observer moves toward source; denominator −v_source when source moves toward observer. Invert these signs for moving away. Remember: a stationary reference = denominator v±0.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- SHM sinusoid -->\n  <line x1=\"10\" y1=\"60\" x2=\"160\" y2=\"60\" stroke=\"#444\" stroke-width=\"1\"/>\n  <path d=\"M10 60 Q32 20 55 60 Q78 100 100 60 Q122 20 145 60\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"2.5\"/>\n  <line x1=\"10\"  y1=\"20\" x2=\"10\"  y2=\"100\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"55\"  y1=\"20\" x2=\"55\"  y2=\"60\"  stroke=\"#c9a060\" stroke-width=\"1\" stroke-dasharray=\"3,2\"/>\n  <line x1=\"145\" y1=\"20\" x2=\"145\" y2=\"60\"  stroke=\"#c9a060\" stroke-width=\"1\" stroke-dasharray=\"3,2\"/>\n  <line x1=\"55\"  y1=\"18\" x2=\"145\" y2=\"18\"  stroke=\"#c9a060\" stroke-width=\"1.2\"/>\n  <text x=\"100\" y=\"15\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">T = period</text>\n  <line x1=\"10\"  y1=\"22\" x2=\"55\"  y2=\"22\"  stroke=\"#7ab060\" stroke-width=\"1.2\"/>\n  <text x=\"32\"   y=\"18\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7ab060\">A</text>\n  <text x=\"90\"   y=\"50\" font-size=\"8\" fill=\"#7aabcf\">x=Acos(ωt)</text>\n  <!-- Standing wave inset -->\n  <rect x=\"168\" y=\"8\" width=\"88\" height=\"102\" rx=\"6\" fill=\"rgba(122,171,207,.06)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <text x=\"212\" y=\"20\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\" font-weight=\"700\">Standing Waves</text>\n  <line x1=\"176\" y1=\"50\" x2=\"248\" y2=\"50\" stroke=\"#888\" stroke-width=\"1\"/>\n  <path d=\"M176 50 Q212 25 248 50\" fill=\"none\" stroke=\"#7ab060\" stroke-width=\"2\"/>\n  <text x=\"212\" y=\"40\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7ab060\">n=1, λ=2L</text>\n  <line x1=\"176\" y1=\"80\" x2=\"248\" y2=\"80\" stroke=\"#888\" stroke-width=\"1\"/>\n  <path d=\"M176 80 Q194 64 212 80 Q230 96 248 80\" fill=\"none\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <text x=\"212\" y=\"97\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">n=2, λ=L</text>\n </svg>",
    "caption": "SHM: amplitude A, period T. Standing wave: n=1 has half-wavelength = L (one loop). Harmonics at multiples of f₁.",
    "steps": [
      "SHM: identify k (spring constant) or L (pendulum length) and compute ω=√(k/m) or ω=√(g/L), then T=2π/ω.",
      "Wave speed: v=λf. In a medium, v is fixed — if f increases, λ decreases proportionally.",
      "For standing waves on a string of length L fixed at both ends: allowed wavelengths λₙ=2L/n, so f_n=nf₁.",
      "Sound intensity level in dB: β=10·log(I/I₀) where I₀=10⁻¹² W/m². Every 10 dB = 10× intensity.",
      "Doppler: observer moving toward source → higher f. Source moving toward observer → higher f. Both increase f_observed."
    ],
    "example": "Spring m=0.2 kg, k=80 N/m: ω=√(80/0.2)=20 rad/s, T=2π/20=0.314 s. Sound source f=400 Hz, v_sound=340 m/s, source approaches at 34 m/s: f'=400·340/(340−34)=400·340/306≈444 Hz."
  },
  {
    "cat": "Physics",
    "tags": [
      "physics",
      "engineering"
    ],
    "title": "Geometric Optics: Reflection, Refraction & Lenses",
    "theory": "",
    "reality": "Your glasses or contacts refract light to correct your vision. A telescope uses curved mirrors to collect light from stars billions of miles away. Security cameras use wide-angle lenses. A rainbow forms because raindrops refract sunlight and split it into colors.",
    "formula": "Reflection: θᵢ = θᵣ  (angle of incidence = angle of reflection)\nSnell's Law: n₁sinθ₁ = n₂sinθ₂\nRefractive index: n = c/v\nCritical angle: sinθ_c = n₂/n₁  (n₁ > n₂)\nMirror/Lens: 1/f = 1/s + 1/s'\nMagnification: m = −s'/s = y'/y\nLens power: P = 1/f  (dioptres, f in metres)\nConvex lens/concave mirror: f > 0\nConcave lens/convex mirror: f < 0",
    "method": "Sign convention: distances measured from the optical centre. Object distance s > 0 (always). Image distance s' > 0 → real image (same side as outgoing light for lenses, same side as incoming for mirrors). s' < 0 → virtual image. Magnification m < 0 → inverted image.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Convex lens -->\n  <line x1=\"130\" y1=\"8\" x2=\"130\" y2=\"110\" stroke=\"#7aabcf\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n  <line x1=\"10\"  y1=\"60\" x2=\"250\" y2=\"60\" stroke=\"#444\" stroke-width=\"1\"/>\n  <!-- Lens shape -->\n  <path d=\"M126 20 Q118 60 126 100\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <path d=\"M134 20 Q142 60 134 100\" fill=\"rgba(122,171,207,.18)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <!-- Object -->\n  <line x1=\"60\" y1=\"60\" x2=\"60\" y2=\"30\" stroke=\"#c9a060\" stroke-width=\"2.5\"/>\n  <text x=\"50\" y=\"28\" font-size=\"8\" fill=\"#c9a060\">obj</text>\n  <!-- Rays -->\n  <line x1=\"60\" y1=\"30\" x2=\"130\" y2=\"30\" stroke=\"#c07070\" stroke-width=\"1.2\"/>\n  <line x1=\"130\" y1=\"30\" x2=\"200\" y2=\"90\" stroke=\"#c07070\" stroke-width=\"1.2\"/>\n  <line x1=\"60\" y1=\"30\" x2=\"130\" y2=\"60\" stroke=\"#7ab060\" stroke-width=\"1.2\"/>\n  <line x1=\"130\" y1=\"60\" x2=\"200\" y2=\"90\" stroke=\"#7ab060\" stroke-width=\"1.2\"/>\n  <!-- Image -->\n  <line x1=\"200\" y1=\"60\" x2=\"200\" y2=\"90\" stroke=\"#c07070\" stroke-width=\"2\" stroke-dasharray=\"3,2\"/>\n  <text x=\"204\" y=\"88\" font-size=\"8\" fill=\"#c07070\">img</text>\n  <!-- focal points -->\n  <circle cx=\"172\" cy=\"60\" r=\"3\" fill=\"#888\"/>\n  <text x=\"172\" y=\"56\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">F</text>\n  <circle cx=\"88\"  cy=\"60\" r=\"3\" fill=\"#888\"/>\n  <text x=\"88\"  y=\"56\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">F</text>\n  <text x=\"20\" y=\"108\" font-size=\"8\" fill=\"#888\">1/f = 1/s + 1/s'  ·  m = −s'/s</text>\n </svg>",
    "caption": "Convex lens: rays parallel to axis converge at focal point F. Real inverted image forms on far side. 1/f=1/s+1/s'.",
    "steps": [
      "Apply Snell's law at every interface: n₁sinθ₁=n₂sinθ₂. Angles are measured from the normal, not the surface.",
      "Total internal reflection occurs when light goes from dense to less-dense medium and θ > θ_critical = arcsin(n₂/n₁).",
      "Mirror/lens equation: 1/f=1/s+1/s'. Rearrange for the unknown. A positive s' means real image (inverted, m<0).",
      "For diverging lenses (f<0) or convex mirrors: the equation still works — just use negative f.",
      "Magnification |m|>1 → image is enlarged; |m|<1 → reduced. m<0 → inverted; m>0 → upright."
    ],
    "example": "Convex lens f=20 cm, object at s=30 cm: 1/s'=1/20−1/30=3/60−2/60=1/60. s'=60 cm (real). m=−60/30=−2 (inverted, twice as tall). Snell: light enters glass (n=1.5) at 30°: sinθ₂=sin30°/1.5=0.333 → θ₂=19.5°."
  },
  {
    "cat": "Physics",
    "tags": [
      "physics",
      "engineering"
    ],
    "title": "Electricity: Coulomb, Electric Field, Capacitors & Circuits",
    "theory": "",
    "reality": "Every electronic device is a circuit. An electrician uses Ohm's law every day to safely wire a house. Your phone touchscreen detects your finger using tiny capacitors that sense changes when you touch the glass. Circuits power literally everything around you.",
    "formula": "Coulomb: F = kq₁q₂/r²  (k=9×10⁹ N·m²/C²)\nElectric field: E = kQ/r²  (from point charge)\nGauss: ∮E·dA = Q_enclosed/ε₀\nPotential: V = kQ/r  (J/C = V)\nCapacitor: Q = CV,  U = Q²/(2C) = ½CV²\nParallel plates: C = ε₀A/d\nOhm: V = IR\nPower: P = IV = I²R = V²/R\nSeries R: R_total = ΣRᵢ\nParallel R: 1/R = Σ(1/Rᵢ)\nKVL: Σ voltages around loop = 0\nKCL: Σ currents into node = 0",
    "method": "Gauss's law shortcut: for high-symmetry charge distributions (sphere, cylinder, plane) the flux integral reduces to E·(surface area) = Q_enclosed/ε₀. This gives E directly without integration.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Field lines around positive charge -->\n  <circle cx=\"70\" cy=\"60\" r=\"8\" fill=\"rgba(201,160,96,.3)\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <text x=\"70\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c9a060\" font-weight=\"700\">+Q</text>\n  <line x1=\"80\" y1=\"54\" x2=\"102\" y2=\"38\" stroke=\"#c9a060\" stroke-width=\"1.2\"/>\n  <line x1=\"78\" y1=\"60\" x2=\"104\" y2=\"60\" stroke=\"#c9a060\" stroke-width=\"1.2\"/>\n  <line x1=\"80\" y1=\"66\" x2=\"102\" y2=\"80\" stroke=\"#c9a060\" stroke-width=\"1.2\"/>\n  <line x1=\"70\" y1=\"52\" x2=\"70\" y2=\"28\" stroke=\"#c9a060\" stroke-width=\"1.2\"/>\n  <line x1=\"60\" y1=\"54\" x2=\"38\" y2=\"38\" stroke=\"#c9a060\" stroke-width=\"1.2\"/>\n  <line x1=\"62\" y1=\"60\" x2=\"36\" y2=\"60\" stroke=\"#c9a060\" stroke-width=\"1.2\"/>\n  <text x=\"70\" y=\"108\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">E=kQ/r²  radially outward</text>\n  <!-- Capacitor -->\n  <line x1=\"150\" y1=\"30\" x2=\"150\" y2=\"90\" stroke=\"#7aabcf\" stroke-width=\"3\"/>\n  <line x1=\"170\" y1=\"30\" x2=\"170\" y2=\"90\" stroke=\"#7aabcf\" stroke-width=\"3\"/>\n  <line x1=\"130\" y1=\"60\" x2=\"150\" y2=\"60\" stroke=\"#888\" stroke-width=\"1.5\"/>\n  <line x1=\"170\" y1=\"60\" x2=\"190\" y2=\"60\" stroke=\"#888\" stroke-width=\"1.5\"/>\n  <text x=\"160\" y=\"110\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7aabcf\">C=ε₀A/d  Q=CV</text>\n  <!-- Series-parallel -->\n  <rect x=\"198\" y=\"30\" width=\"25\" height=\"15\" rx=\"3\" fill=\"none\" stroke=\"#7ab060\" stroke-width=\"1.5\"/>\n  <text x=\"210\" y=\"42\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7ab060\">R₁</text>\n  <rect x=\"198\" y=\"55\" width=\"25\" height=\"15\" rx=\"3\" fill=\"none\" stroke=\"#7ab060\" stroke-width=\"1.5\"/>\n  <text x=\"210\" y=\"67\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7ab060\">R₂</text>\n  <line x1=\"210\" y1=\"30\" x2=\"210\" y2=\"20\" stroke=\"#7ab060\" stroke-width=\"1.2\"/>\n  <line x1=\"210\" y1=\"70\" x2=\"210\" y2=\"80\" stroke=\"#7ab060\" stroke-width=\"1.2\"/>\n  <text x=\"210\" y=\"95\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7ab060\">parallel</text>\n </svg>",
    "caption": "Electric field lines point outward from positive charges. Parallel plate capacitor: E=σ/ε₀ between plates, uniform field.",
    "steps": [
      "Coulomb's law gives force between two point charges; electric field E=F/q is the force per unit charge.",
      "For multiple charges: E fields add as vectors (superposition) — compute x and y components separately.",
      "Circuit analysis: identify series (same current) vs parallel (same voltage) connections.",
      "KVL: sum of all voltage drops and rises around any closed loop = 0.",
      "KCL: current into a node = current out. Use these to write equations for unknown currents."
    ],
    "example": "Two charges q₁=+2μC, q₂=−3μC, 0.3 m apart: F=9×10⁹·2×10⁻⁶·3×10⁻⁶/0.09=0.6 N (attractive). Capacitor C=10 μF, V=12 V: Q=120 μC, U=½·10⁻⁵·144=7.2×10⁻⁴ J."
  },
  {
    "cat": "Physics",
    "tags": [
      "physics",
      "engineering"
    ],
    "title": "Magnetism: Lorentz Force, Biot-Savart & Induction",
    "theory": "",
    "reality": "Electric motors spin because magnetic fields push on moving electrons — that is the Lorentz force. Every generator in a power plant, wind turbine, or car alternator works through electromagnetic induction. MRI machines use powerful magnetic fields to photograph the inside of your body without any cutting.",
    "formula": "Lorentz force: F = qv×B  |F|=qvBsinθ\nBiot-Savart (long wire): B = μ₀I/(2πr)\nSolenoid: B = μ₀nI  (n=turns/length)\nMagnetic flux: Φ = B·A·cosθ\nFaraday: ε = −dΦ/dt = −N·dΦ/dt (N turns)\nLenz: induced current opposes the change in flux\nForce on wire: F = BIL·sinθ\nTransformer: V₁/V₂ = N₁/N₂  (ideal)",
    "method": "Lenz's law right-hand rule: point thumb in direction of increasing flux — induced current flows in the direction your curled fingers resist that change (always opposes the change). For the force on a moving charge: use F=qv×B with the right-hand rule.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Solenoid -->\n  <rect x=\"8\" y=\"38\" width=\"120\" height=\"40\" rx=\"5\" fill=\"rgba(122,171,207,.08)\" stroke=\"#7aabcf\" stroke-width=\"1.5\" stroke-dasharray=\"4,2\"/>\n  <line x1=\"8\"  y1=\"38\" x2=\"8\"  y2=\"78\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <line x1=\"128\" y1=\"38\" x2=\"128\" y2=\"78\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <text x=\"68\" y=\"62\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7aabcf\">B = μ₀nI →</text>\n  <line x1=\"24\" y1=\"58\" x2=\"104\" y2=\"58\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <text x=\"68\" y=\"88\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">Solenoid: uniform B inside</text>\n  <!-- Moving charge Lorentz -->\n  <line x1=\"148\" y1=\"60\" x2=\"210\" y2=\"60\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <text x=\"215\" y=\"64\" font-size=\"8.5\" fill=\"#c9a060\" font-weight=\"700\">v→</text>\n  <text x=\"190\" y=\"44\" font-size=\"8.5\" fill=\"#7aabcf\">⊗ B (into page)</text>\n  <line x1=\"183\" y1=\"60\" x2=\"183\" y2=\"28\" stroke=\"#c07070\" stroke-width=\"2\"/>\n  <text x=\"186\" y=\"25\" font-size=\"8\" fill=\"#c07070\">F=qvB ↑</text>\n  <circle cx=\"183\" cy=\"60\" r=\"5\" fill=\"rgba(201,160,96,.3)\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <text x=\"183\" y=\"64\" text-anchor=\"middle\" font-size=\"7\" fill=\"#c9a060\">q</text>\n  <!-- Faraday loop -->\n  <rect x=\"148\" y=\"80\" width=\"70\" height=\"30\" rx=\"4\" fill=\"rgba(122,176,96,.10)\" stroke=\"#7ab060\" stroke-width=\"1.5\"/>\n  <text x=\"183\" y=\"93\" text-anchor=\"middle\" font-size=\"8\" fill=\"#7ab060\">ε = −dΦ/dt</text>\n  <text x=\"183\" y=\"106\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#7ab060\">Lenz opposes ΔΦ</text>\n </svg>",
    "caption": "Solenoid: uniform field inside B=μ₀nI. Lorentz force F=qvB⊥v and ⊥B. Faraday: changing flux induces EMF opposing the change.",
    "steps": [
      "Lorentz force direction: use right-hand rule for positive charges (F=qv×B). For negative charges, reverse direction.",
      "Magnetic force on a current-carrying wire: F=BIL·sinθ. Two parallel wires carrying current attract if in same direction, repel if opposite.",
      "Magnetic flux Φ=BAcosθ — only the component of B perpendicular to the area matters.",
      "Faraday's law: EMF=−dΦ/dt. A changing B, changing area, or rotation all change flux.",
      "Transformer: ideal → V₁/V₂=N₁/N₂ and I₁/I₂=N₂/N₁ (power conserved: V₁I₁=V₂I₂)."
    ],
    "example": "Solenoid n=1000 turns/m, I=2 A: B=4π×10⁻⁷·1000·2≈2.51×10⁻³ T. Loop area=0.05 m², B changes from 0.2 to 0.5 T in 0.1 s: ε=−(0.5−0.2)·0.05/0.1=−0.15 V. Transformer 220 V/110 V: N₁/N₂=2. If I₁=1 A, then I₂=2 A."
  },
  {
    "cat": "Physics",
    "tags": [
      "physics",
      "science"
    ],
    "title": "Special Relativity, Quantum Physics & Nuclear Basics",
    "theory": "",
    "reality": "GPS satellites must correct for time running slightly differently in orbit due to relativity — otherwise your maps would be off by miles every day. Nuclear power plants split uranium atoms to generate electricity for millions of homes. Solar panels work because light knocks electrons loose — pure quantum physics.",
    "formula": "Lorentz factor: γ = 1/√(1−v²/c²)\nTime dilation: Δt = γΔt₀\nLength contraction: L = L₀/γ\nMass-energy: E = mc²  (rest energy)\nRelativistic KE: K = (γ−1)mc²\nPhotoelectric: E = hf − W  (h=6.63×10⁻³⁴ J·s)\nDe Broglie: λ = h/mv = h/p\nHeisenberg: Δx·Δp ≥ h/(4π)\nBohr hydrogen: Eₙ = −13.6/n²  eV\nRadioactive decay: N = N₀e^(−λt)\nHalf-life: T½ = ln2/λ",
    "method": "Radioactive decay: activity A=λN. After n half-lives, N=N₀/2ⁿ. For carbon dating or half-life problems, identify initial amount, current amount, and solve for t using N=N₀e^(−λt) with λ=ln2/T½.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Photoelectric -->\n  <rect x=\"4\" y=\"8\" width=\"118\" height=\"106\" rx=\"7\" fill=\"rgba(122,171,207,.06)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <text x=\"63\" y=\"22\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#7aabcf\" font-weight=\"700\">Photoelectric Effect</text>\n  <rect x=\"16\" y=\"60\" width=\"88\" height=\"40\" rx=\"4\" fill=\"rgba(122,171,207,.12)\" stroke=\"#7aabcf\" stroke-width=\"1\"/>\n  <text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#9ecef0\">Metal surface</text>\n  <line x1=\"34\" y1=\"32\" x2=\"34\" y2=\"60\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <line x1=\"50\" y1=\"32\" x2=\"50\" y2=\"60\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <text x=\"60\" y=\"30\" text-anchor=\"middle\" font-size=\"8\" fill=\"#c9a060\">hf photons</text>\n  <line x1=\"60\" y1=\"60\" x2=\"80\" y2=\"40\" stroke=\"#7ab060\" stroke-width=\"2\"/>\n  <text x=\"84\" y=\"38\" font-size=\"8\" fill=\"#7ab060\">e⁻</text>\n  <text x=\"14\" y=\"106\" font-size=\"8\" fill=\"#888\">KE=hf−W</text>\n  <!-- Decay curve -->\n  <rect x=\"138\" y=\"8\" width=\"118\" height=\"106\" rx=\"7\" fill=\"rgba(201,160,96,.06)\" stroke=\"#c9a060\" stroke-width=\"1.5\"/>\n  <text x=\"197\" y=\"22\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#c9a060\" font-weight=\"700\">Radioactive Decay</text>\n  <line x1=\"148\" y1=\"100\" x2=\"248\" y2=\"100\" stroke=\"#444\" stroke-width=\"1\"/>\n  <line x1=\"148\" y1=\"28\" x2=\"148\" y2=\"104\" stroke=\"#444\" stroke-width=\"1\"/>\n  <path d=\"M148 32 Q168 32 178 52 Q188 72 198 80 Q218 88 248 94\" fill=\"none\" stroke=\"#c9a060\" stroke-width=\"2.5\"/>\n  <line x1=\"148\" y1=\"62\" x2=\"178\" y2=\"62\" stroke=\"#c07070\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n  <line x1=\"178\" y1=\"62\" x2=\"178\" y2=\"100\" stroke=\"#c07070\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n  <text x=\"163\" y=\"58\" font-size=\"8\" fill=\"#c07070\">T½</text>\n  <text x=\"163\" y=\"96\" font-size=\"8\" fill=\"#c07070\">N₀/2</text>\n  <text x=\"148\" y=\"116\" font-size=\"7.5\" fill=\"#888\">N=N₀e^(−λt), T½=ln2/λ</text>\n </svg>",
    "caption": "Photoelectric: photon energy hf must exceed work function W to eject electron. Decay: exponential decrease, halving every T½.",
    "steps": [
      "Lorentz factor γ≥1; at v=0, γ=1 (no relativistic effects). At v=0.99c, γ≈7.",
      "Time dilation: moving clocks run slow. Δt=γΔt₀ — proper time Δt₀ is measured in the rest frame.",
      "Photoelectric: incident photon must have f>f_threshold. Extra energy goes into kinetic energy of ejected electron.",
      "De Broglie: all matter has wave properties. λ=h/p — significant only for very small masses (electrons, not baseballs).",
      "Radioactive decay: identify T½ from problem, compute λ=ln2/T½, then apply N=N₀e^(−λt) or use N₀/2ⁿ for integer n half-lives."
    ],
    "example": "Carbon-14 T½=5730 years. Fossil has 25% of original C-14: N/N₀=0.25=e^(−λt). ln(0.25)=−λt → t=2·T½=11,460 years (since 0.25=(1/2)²). Photoelectric: hf=6.63×10⁻³⁴·8×10¹⁴=5.3×10⁻¹⁹ J. W=2 eV=3.2×10⁻¹⁹ J. KE=5.3−3.2=2.1×10⁻¹⁹ J."
  },
  {
    "cat": "Physics",
    "tags": [
      "physics",
      "engineering"
    ],
    "title": "Gravitational Field, Kepler's Laws & Orbital Mechanics",
    "theory": "",
    "reality": "Planets orbit the Sun in precise oval paths that Kepler described centuries before space travel existed. GPS satellites orbit at a precise altitude to stay in sync with Earth's rotation. SpaceX engineers use these same equations to launch rockets and land them back on the pad.",
    "formula": "Newton: F = Gm₁m₂/r²  (G=6.67×10⁻¹¹ N·m²/kg²)\nGravitational field: g = GM/r²\nGravitational PE: U = −GMm/r\nOrbital speed: v = √(GM/r)\nEscape velocity: v_e = √(2GM/r)\nKepler 1st: elliptical orbits, Sun at focus\nKepler 2nd: equal areas in equal times (L conserved)\nKepler 3rd: T² ∝ r³  →  T²=4π²r³/(GM)",
    "method": "For satellite orbit problems: set gravitational force equal to centripetal force. GMm/r²=mv²/r → v=√(GM/r). This gives orbital speed at any radius. Total orbital energy = KE+PE = −GMm/(2r) — always negative for a bound orbit.",
    "svg": "<svg viewBox=\"0 0 260 118\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Elliptical orbit -->\n  <ellipse cx=\"120\" cy=\"62\" rx=\"95\" ry=\"50\" fill=\"none\" stroke=\"#7aabcf\" stroke-width=\"2\"/>\n  <!-- Sun at focus -->\n  <circle cx=\"82\" cy=\"62\" r=\"8\" fill=\"rgba(201,160,96,.5)\" stroke=\"#c9a060\" stroke-width=\"2\"/>\n  <text x=\"82\" y=\"66\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"#c9a060\">☉</text>\n  <!-- Satellite positions -->\n  <circle cx=\"215\" cy=\"62\" r=\"5\" fill=\"rgba(122,171,207,.5)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <circle cx=\"25\"  cy=\"62\" r=\"5\" fill=\"rgba(122,171,207,.5)\" stroke=\"#7aabcf\" stroke-width=\"1.5\"/>\n  <!-- Kepler 2nd law areas -->\n  <path d=\"M82 62 L215 62 A95 50 0 0 0 200 25 Z\" fill=\"rgba(122,176,96,.15)\" stroke=\"none\"/>\n  <path d=\"M82 62 L25  62 A95 50 0 0 1 60  25 Z\" fill=\"rgba(192,112,112,.15)\" stroke=\"none\"/>\n  <text x=\"182\" y=\"52\" font-size=\"7.5\" fill=\"#7ab060\">equal</text>\n  <text x=\"38\"  y=\"48\" font-size=\"7.5\" fill=\"#c07070\">areas</text>\n  <text x=\"120\" y=\"118\" text-anchor=\"middle\" font-size=\"8\" fill=\"#888\">T²∝r³  ·  v=√(GM/r)  ·  v_e=√(2GM/r)</text>\n </svg>",
    "caption": "Kepler 2nd law: equal shaded areas swept in equal times (same orbit). Perihelion (close) → fast; aphelion (far) → slow.",
    "steps": [
      "Gravitational force follows inverse-square law: doubling the distance → ¼ the force.",
      "Orbital speed: set F_grav = F_centripetal → GMm/r²=mv²/r → v=√(GM/r). Speed decreases with larger orbit.",
      "Kepler's 3rd law: T²/r³=4π²/(GM) — same constant for all satellites orbiting the same central body.",
      "Escape velocity: v_e=√(2GM/r) — set total energy to zero (KE+PE=0). At Earth's surface ≈11.2 km/s.",
      "Gravitational PE is negative: U=−GMm/r. As r→∞, U→0. Binding energy = |U|−KE = GMm/(2r)."
    ],
    "example": "Geostationary orbit (T=24 h=86400 s): r³=GMT²/(4π²)=6.67×10⁻¹¹·6×10²⁴·(86400)²/(4π²). r≈4.2×10⁷ m ≈ 42,000 km. Orbital speed: v=√(6.67×10⁻¹¹·6×10²⁴/4.2×10⁷)≈3.07 km/s."
  }
];


// Expanded subject cards. Pushed after export so original STEM cards remain available.
STEM_TOPICS.push(...[
  {
    "cat": "College English Composition",
    "title": "Analysis, Argumentation, and Synthesis",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP/AP content area for College English Composition covering Analysis, Argumentation, and Synthesis.",
    "examples": [
      {
        "l": "Item 1",
        "r": "analysis"
      },
      {
        "l": "Item 2",
        "r": "argumentation"
      },
      {
        "l": "Item 3",
        "r": "synthesis"
      },
      {
        "l": "Item 4",
        "r": "ability to recognize logical development"
      },
      {
        "l": "Item 5",
        "r": "research"
      }
    ]
  },
  {
    "cat": "College English Composition",
    "title": "Syntax",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP/AP content area for College English Composition covering Syntax.",
    "examples": [
      {
        "l": "Item 1",
        "r": "parallelism"
      },
      {
        "l": "Item 2",
        "r": "coordination"
      },
      {
        "l": "Item 3",
        "r": "subordination"
      }
    ]
  },
  {
    "cat": "College English Composition",
    "title": "Sentence Boundaries",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP/AP content area for College English Composition covering Sentence Boundaries.",
    "examples": [
      {
        "l": "Item 1",
        "r": "comma splices"
      },
      {
        "l": "Item 2",
        "r": "run-ons"
      },
      {
        "l": "Item 3",
        "r": "sentence fragments"
      }
    ]
  },
  {
    "cat": "College English Composition",
    "title": "Sentence Correctness",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP/AP content area for College English Composition covering Sentence Correctness.",
    "examples": [
      {
        "l": "Item 1",
        "r": "recognition of correct sentences"
      }
    ]
  },
  {
    "cat": "College English Composition",
    "title": "Agreement and Concord",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP/AP content area for College English Composition covering Agreement and Concord.",
    "examples": [
      {
        "l": "Item 1",
        "r": "pronoun reference"
      },
      {
        "l": "Item 2",
        "r": "case shift"
      },
      {
        "l": "Item 3",
        "r": "pronoun number"
      },
      {
        "l": "Item 4",
        "r": "subject-verb agreement"
      },
      {
        "l": "Item 5",
        "r": "verb tense"
      }
    ]
  },
  {
    "cat": "College English Composition",
    "title": "Style and Usage",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP/AP content area for College English Composition covering Style and Usage.",
    "examples": [
      {
        "l": "Item 1",
        "r": "diction"
      },
      {
        "l": "Item 2",
        "r": "modifiers"
      },
      {
        "l": "Item 3",
        "r": "idiom"
      },
      {
        "l": "Item 4",
        "r": "active/passive voice"
      },
      {
        "l": "Item 5",
        "r": "lack of subject in modifying word group"
      },
      {
        "l": "Item 6",
        "r": "logical comparison"
      },
      {
        "l": "Item 7",
        "r": "logical agreement"
      },
      {
        "l": "Item 8",
        "r": "punctuation"
      },
      {
        "l": "Item 9",
        "r": "sentence-level errors in Standard Written English"
      },
      {
        "l": "Item 10",
        "r": "use of language"
      },
      {
        "l": "Item 11",
        "r": "sentence variety and structure"
      }
    ]
  },
  {
    "cat": "College English Composition",
    "title": "Organization and Development",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP/AP content area for College English Composition covering Organization and Development.",
    "examples": [
      {
        "l": "Item 1",
        "r": "organization"
      },
      {
        "l": "Item 2",
        "r": "coherence between sentences and paragraphs"
      },
      {
        "l": "Item 3",
        "r": "main idea"
      },
      {
        "l": "Item 4",
        "r": "thesis statements"
      },
      {
        "l": "Item 5",
        "r": "topic sentences"
      },
      {
        "l": "Item 6",
        "r": "transitions"
      },
      {
        "l": "Item 7",
        "r": "level of detail"
      },
      {
        "l": "Item 8",
        "r": "organization/structure"
      }
    ]
  },
  {
    "cat": "College English Composition",
    "title": "Audience, Tone, and Purpose",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP/AP content area for College English Composition covering Audience, Tone, and Purpose.",
    "examples": [
      {
        "l": "Item 1",
        "r": "awareness of audience"
      },
      {
        "l": "Item 2",
        "r": "tone"
      },
      {
        "l": "Item 3",
        "r": "purpose"
      },
      {
        "l": "Item 4",
        "r": "appeals"
      },
      {
        "l": "Item 5",
        "r": "consistency of point of view"
      }
    ]
  },
  {
    "cat": "College English Composition",
    "title": "Evidence and Sources",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP/AP content area for College English Composition covering Evidence and Sources.",
    "examples": [
      {
        "l": "Item 1",
        "r": "evaluation of evidence"
      },
      {
        "l": "Item 2",
        "r": "evaluation of author's authority and appeal"
      },
      {
        "l": "Item 3",
        "r": "evaluation of reasoning"
      },
      {
        "l": "Item 4",
        "r": "use of reference materials"
      },
      {
        "l": "Item 5",
        "r": "evaluation of sources"
      },
      {
        "l": "Item 6",
        "r": "integration of resource material"
      },
      {
        "l": "Item 7",
        "r": "documentation of sources"
      },
      {
        "l": "Item 8",
        "r": "MLA"
      },
      {
        "l": "Item 9",
        "r": "APA"
      },
      {
        "l": "Item 10",
        "r": "Chicago manuals of style"
      }
    ]
  },
  {
    "cat": "College English Composition",
    "title": "Rhetorical Effects",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP/AP content area for College English Composition covering Rhetorical Effects.",
    "examples": [
      {
        "l": "Item 1",
        "r": "rhetorical effects"
      },
      {
        "l": "Item 2",
        "r": "emphasis"
      },
      {
        "l": "Item 3",
        "r": "rhetorical effects in organization"
      }
    ]
  },
  {
    "cat": "Biology",
    "title": "Chemical Composition of Organisms",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Biology covering Chemical Composition of Organisms.",
    "examples": [
      {
        "l": "Item 1",
        "r": "simple chemical reactions and bonds"
      },
      {
        "l": "Item 2",
        "r": "properties of water"
      },
      {
        "l": "Item 3",
        "r": "chemical structure of carbohydrates"
      },
      {
        "l": "Item 4",
        "r": "chemical structure of lipids"
      },
      {
        "l": "Item 5",
        "r": "chemical structure of proteins"
      },
      {
        "l": "Item 6",
        "r": "chemical structure of nucleic acids"
      },
      {
        "l": "Item 7",
        "r": "origin of life"
      }
    ]
  },
  {
    "cat": "Biology",
    "title": "Cells",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Biology covering Cells.",
    "examples": [
      {
        "l": "Item 1",
        "r": "structure and function of cell organelles"
      },
      {
        "l": "Item 2",
        "r": "properties of cell membranes"
      },
      {
        "l": "Item 3",
        "r": "comparison of prokaryotic and eukaryotic cells"
      }
    ]
  },
  {
    "cat": "Biology",
    "title": "Enzymes",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Biology covering Enzymes.",
    "examples": [
      {
        "l": "Item 1",
        "r": "enzyme-substrate complex"
      },
      {
        "l": "Item 2",
        "r": "roles of coenzymes"
      },
      {
        "l": "Item 3",
        "r": "inorganic cofactors"
      },
      {
        "l": "Item 4",
        "r": "inhibition and regulation"
      }
    ]
  },
  {
    "cat": "Biology",
    "title": "Energy Transformations",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Biology covering Energy Transformations.",
    "examples": [
      {
        "l": "Item 1",
        "r": "glycolysis"
      },
      {
        "l": "Item 2",
        "r": "cellular respiration"
      },
      {
        "l": "Item 3",
        "r": "aerobic pathways"
      },
      {
        "l": "Item 4",
        "r": "anaerobic pathways"
      },
      {
        "l": "Item 5",
        "r": "photosynthesis"
      }
    ]
  },
  {
    "cat": "Biology",
    "title": "Cell Division",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Biology covering Cell Division.",
    "examples": [
      {
        "l": "Item 1",
        "r": "structure of chromosomes"
      },
      {
        "l": "Item 2",
        "r": "mitosis"
      },
      {
        "l": "Item 3",
        "r": "meiosis"
      },
      {
        "l": "Item 4",
        "r": "cytokinesis in plants"
      },
      {
        "l": "Item 5",
        "r": "cytokinesis in animals"
      }
    ]
  },
  {
    "cat": "Biology",
    "title": "Chemical Nature of the Gene",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Biology covering Chemical Nature of the Gene.",
    "examples": [
      {
        "l": "Item 1",
        "r": "Watson-Crick model of nucleic acids"
      },
      {
        "l": "Item 2",
        "r": "DNA replication"
      },
      {
        "l": "Item 3",
        "r": "mutations"
      },
      {
        "l": "Item 4",
        "r": "transcription"
      },
      {
        "l": "Item 5",
        "r": "translation"
      },
      {
        "l": "Item 6",
        "r": "post-transcriptional processing"
      },
      {
        "l": "Item 7",
        "r": "structural genes"
      },
      {
        "l": "Item 8",
        "r": "regulatory genes"
      },
      {
        "l": "Item 9",
        "r": "transformation"
      },
      {
        "l": "Item 10",
        "r": "viruses"
      }
    ]
  },
  {
    "cat": "Biology",
    "title": "Plant Structure and Function",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Biology covering Plant Structure and Function.",
    "examples": [
      {
        "l": "Item 1",
        "r": "root"
      },
      {
        "l": "Item 2",
        "r": "stem"
      },
      {
        "l": "Item 3",
        "r": "leaf"
      },
      {
        "l": "Item 4",
        "r": "flower"
      },
      {
        "l": "Item 5",
        "r": "seed"
      },
      {
        "l": "Item 6",
        "r": "fruit"
      },
      {
        "l": "Item 7",
        "r": "water absorption and transport"
      },
      {
        "l": "Item 8",
        "r": "mineral absorption and transport"
      },
      {
        "l": "Item 9",
        "r": "food translocation and storage"
      }
    ]
  },
  {
    "cat": "Biology",
    "title": "Plant Reproduction and Development",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Biology covering Plant Reproduction and Development.",
    "examples": [
      {
        "l": "Item 1",
        "r": "alternation of generations in ferns"
      },
      {
        "l": "Item 2",
        "r": "alternation of generations in conifers"
      },
      {
        "l": "Item 3",
        "r": "alternation of generations in flowering plants"
      },
      {
        "l": "Item 4",
        "r": "gamete formation"
      },
      {
        "l": "Item 5",
        "r": "fertilization"
      },
      {
        "l": "Item 6",
        "r": "growth and development"
      },
      {
        "l": "Item 7",
        "r": "hormonal control"
      },
      {
        "l": "Item 8",
        "r": "tropisms"
      },
      {
        "l": "Item 9",
        "r": "photoperiodicity"
      }
    ]
  },
  {
    "cat": "Biology",
    "title": "Animal Structure and Function",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Biology covering Animal Structure and Function.",
    "examples": [
      {
        "l": "Item 1",
        "r": "digestive system"
      },
      {
        "l": "Item 2",
        "r": "gas exchange system"
      },
      {
        "l": "Item 3",
        "r": "skeletal system"
      },
      {
        "l": "Item 4",
        "r": "nervous system"
      },
      {
        "l": "Item 5",
        "r": "circulatory system"
      },
      {
        "l": "Item 6",
        "r": "excretory system"
      },
      {
        "l": "Item 7",
        "r": "immune system"
      },
      {
        "l": "Item 8",
        "r": "homeostatic mechanisms"
      },
      {
        "l": "Item 9",
        "r": "hormonal control in homeostasis"
      },
      {
        "l": "Item 10",
        "r": "hormonal control in reproduction"
      }
    ]
  },
  {
    "cat": "Biology",
    "title": "Animal Reproduction and Development",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Biology covering Animal Reproduction and Development.",
    "examples": [
      {
        "l": "Item 1",
        "r": "gamete formation"
      },
      {
        "l": "Item 2",
        "r": "fertilization"
      },
      {
        "l": "Item 3",
        "r": "cleavage"
      },
      {
        "l": "Item 4",
        "r": "gastrulation"
      },
      {
        "l": "Item 5",
        "r": "germ layer formation"
      },
      {
        "l": "Item 6",
        "r": "differentiation of organ systems"
      },
      {
        "l": "Item 7",
        "r": "experimental analysis of vertebrate development"
      },
      {
        "l": "Item 8",
        "r": "extraembryonic membranes of vertebrates"
      },
      {
        "l": "Item 9",
        "r": "mammalian placenta"
      },
      {
        "l": "Item 10",
        "r": "blood circulation in the human embryo"
      }
    ]
  },
  {
    "cat": "Biology",
    "title": "Principles of Heredity",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Biology covering Principles of Heredity.",
    "examples": [
      {
        "l": "Item 1",
        "r": "Mendelian dominance"
      },
      {
        "l": "Item 2",
        "r": "segregation"
      },
      {
        "l": "Item 3",
        "r": "independent assortment"
      },
      {
        "l": "Item 4",
        "r": "chromosomal basis of inheritance"
      },
      {
        "l": "Item 5",
        "r": "linkage"
      },
      {
        "l": "Item 6",
        "r": "sex-linked inheritance"
      },
      {
        "l": "Item 7",
        "r": "polygenic inheritance"
      },
      {
        "l": "Item 8",
        "r": "multiple alleles"
      },
      {
        "l": "Item 9",
        "r": "human blood groups"
      }
    ]
  },
  {
    "cat": "Biology",
    "title": "Principles of Ecology",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Biology covering Principles of Ecology.",
    "examples": [
      {
        "l": "Item 1",
        "r": "energy flow and productivity in ecosystems"
      },
      {
        "l": "Item 2",
        "r": "biogeochemical cycles"
      },
      {
        "l": "Item 3",
        "r": "population growth and regulation"
      },
      {
        "l": "Item 4",
        "r": "natality"
      },
      {
        "l": "Item 5",
        "r": "mortality"
      },
      {
        "l": "Item 6",
        "r": "competition"
      },
      {
        "l": "Item 7",
        "r": "migration"
      },
      {
        "l": "Item 8",
        "r": "density"
      },
      {
        "l": "Item 9",
        "r": "r-selection"
      },
      {
        "l": "Item 10",
        "r": "K-selection"
      },
      {
        "l": "Item 11",
        "r": "community structure"
      },
      {
        "l": "Item 12",
        "r": "major biomes"
      },
      {
        "l": "Item 13",
        "r": "succession"
      },
      {
        "l": "Item 14",
        "r": "habitat"
      },
      {
        "l": "Item 15",
        "r": "biotic factors"
      },
      {
        "l": "Item 16",
        "r": "abiotic factors"
      },
      {
        "l": "Item 17",
        "r": "concept of niche"
      },
      {
        "l": "Item 18",
        "r": "island biogeography"
      }
    ]
  },
  {
    "cat": "Biology",
    "title": "Principles of Evolution",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Biology covering Principles of Evolution.",
    "examples": [
      {
        "l": "Item 1",
        "r": "history of evolutionary concepts"
      },
      {
        "l": "Item 2",
        "r": "natural selection"
      },
      {
        "l": "Item 3",
        "r": "differential reproduction"
      },
      {
        "l": "Item 4",
        "r": "mutation"
      },
      {
        "l": "Item 5",
        "r": "Hardy-Weinberg equilibrium"
      },
      {
        "l": "Item 6",
        "r": "speciation"
      },
      {
        "l": "Item 7",
        "r": "punctuated equilibrium"
      },
      {
        "l": "Item 8",
        "r": "adaptive radiation"
      },
      {
        "l": "Item 9",
        "r": "plant evolution"
      },
      {
        "l": "Item 10",
        "r": "animal evolution"
      },
      {
        "l": "Item 11",
        "r": "homology"
      },
      {
        "l": "Item 12",
        "r": "analogy"
      },
      {
        "l": "Item 13",
        "r": "convergence"
      },
      {
        "l": "Item 14",
        "r": "extinction"
      },
      {
        "l": "Item 15",
        "r": "balanced polymorphism"
      },
      {
        "l": "Item 16",
        "r": "genetic drift"
      },
      {
        "l": "Item 17",
        "r": "classification of living organisms"
      },
      {
        "l": "Item 18",
        "r": "evolutionary history of humans"
      }
    ]
  },
  {
    "cat": "Biology",
    "title": "Principles of Behavior",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Biology covering Principles of Behavior.",
    "examples": [
      {
        "l": "Item 1",
        "r": "stereotyped behavior"
      },
      {
        "l": "Item 2",
        "r": "learned social behavior"
      },
      {
        "l": "Item 3",
        "r": "insect societies"
      },
      {
        "l": "Item 4",
        "r": "bird societies"
      },
      {
        "l": "Item 5",
        "r": "primate societies"
      }
    ]
  },
  {
    "cat": "Biology",
    "title": "Social Biology",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Biology covering Social Biology.",
    "examples": [
      {
        "l": "Item 1",
        "r": "human population growth"
      },
      {
        "l": "Item 2",
        "r": "age composition"
      },
      {
        "l": "Item 3",
        "r": "birth rates"
      },
      {
        "l": "Item 4",
        "r": "fertility rates"
      },
      {
        "l": "Item 5",
        "r": "demographic transition"
      },
      {
        "l": "Item 6",
        "r": "resource management"
      },
      {
        "l": "Item 7",
        "r": "environmental pollution"
      },
      {
        "l": "Item 8",
        "r": "control of human reproduction"
      },
      {
        "l": "Item 9",
        "r": "genetic engineering"
      }
    ]
  },
  {
    "cat": "Calculus",
    "title": "Limits (10%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Calculus covering Limits (10%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "limit of a constant"
      },
      {
        "l": "Item 2",
        "r": "limit of a sum"
      },
      {
        "l": "Item 3",
        "r": "limit of a product"
      },
      {
        "l": "Item 4",
        "r": "limit of a quotient"
      },
      {
        "l": "Item 5",
        "r": "limit calculations"
      },
      {
        "l": "Item 6",
        "r": "limits involving infinity"
      },
      {
        "l": "Item 7",
        "r": "continuity"
      }
    ]
  },
  {
    "cat": "Calculus",
    "title": "The Derivative",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Calculus covering The Derivative.",
    "examples": [
      {
        "l": "Item 1",
        "r": "definitions of the derivative"
      },
      {
        "l": "Item 2",
        "r": "derivatives of elementary functions"
      },
      {
        "l": "Item 3",
        "r": "derivatives of sums"
      },
      {
        "l": "Item 4",
        "r": "derivatives of products"
      },
      {
        "l": "Item 5",
        "r": "derivatives of quotients"
      },
      {
        "l": "Item 6",
        "r": "chain rule"
      },
      {
        "l": "Item 7",
        "r": "implicit differentiation"
      },
      {
        "l": "Item 8",
        "r": "derivative of the inverse of a function"
      },
      {
        "l": "Item 9",
        "r": "higher order derivatives"
      },
      {
        "l": "Item 10",
        "r": "characteristics of graphs of f"
      },
      {
        "l": "Item 11",
        "r": "characteristics of graphs of f prime"
      },
      {
        "l": "Item 12",
        "r": "characteristics of graphs of f double prime"
      },
      {
        "l": "Item 13",
        "r": "Mean Value Theorem"
      },
      {
        "l": "Item 14",
        "r": "applications of the Mean Value Theorem"
      },
      {
        "l": "Item 15",
        "r": "graphical illustrations of the Mean Value Theorem"
      },
      {
        "l": "Item 16",
        "r": "differentiability and continuity"
      },
      {
        "l": "Item 17",
        "r": "L'Hospital's Rule"
      },
      {
        "l": "Item 18",
        "r": "quotient indeterminate forms"
      }
    ]
  },
  {
    "cat": "Calculus",
    "title": "Applications of the Derivative",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Calculus covering Applications of the Derivative.",
    "examples": [
      {
        "l": "Item 1",
        "r": "slope of a curve at a point"
      },
      {
        "l": "Item 2",
        "r": "tangent lines"
      },
      {
        "l": "Item 3",
        "r": "linear approximation"
      },
      {
        "l": "Item 4",
        "r": "increasing and decreasing functions"
      },
      {
        "l": "Item 5",
        "r": "relative maximum and minimum"
      },
      {
        "l": "Item 6",
        "r": "absolute maximum and minimum"
      },
      {
        "l": "Item 7",
        "r": "concavity"
      },
      {
        "l": "Item 8",
        "r": "points of inflection"
      },
      {
        "l": "Item 9",
        "r": "extreme value problems"
      },
      {
        "l": "Item 10",
        "r": "velocity of a particle"
      },
      {
        "l": "Item 11",
        "r": "acceleration of a particle"
      },
      {
        "l": "Item 12",
        "r": "average rates of change"
      },
      {
        "l": "Item 13",
        "r": "instantaneous rates of change"
      },
      {
        "l": "Item 14",
        "r": "related rates of change"
      }
    ]
  },
  {
    "cat": "Calculus",
    "title": "Antiderivatives and Techniques of Integration",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Calculus covering Antiderivatives and Techniques of Integration.",
    "examples": [
      {
        "l": "Item 1",
        "r": "concept of antiderivatives"
      },
      {
        "l": "Item 2",
        "r": "basic integration formulas"
      },
      {
        "l": "Item 3",
        "r": "integration by substitution"
      },
      {
        "l": "Item 4",
        "r": "use of identities"
      },
      {
        "l": "Item 5",
        "r": "change of variable"
      }
    ]
  },
  {
    "cat": "Calculus",
    "title": "Applications of Antiderivatives",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Calculus covering Applications of Antiderivatives.",
    "examples": [
      {
        "l": "Item 1",
        "r": "distance from acceleration with initial conditions"
      },
      {
        "l": "Item 2",
        "r": "velocity from acceleration with initial conditions"
      },
      {
        "l": "Item 3",
        "r": "solutions of differential equations"
      },
      {
        "l": "Item 4",
        "r": "growth and decay applications"
      }
    ]
  },
  {
    "cat": "Calculus",
    "title": "The Definite Integral",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Calculus covering The Definite Integral.",
    "examples": [
      {
        "l": "Item 1",
        "r": "definition as limit of Riemann sums"
      },
      {
        "l": "Item 2",
        "r": "approximations using rectangles"
      },
      {
        "l": "Item 3",
        "r": "properties of the definite integral"
      },
      {
        "l": "Item 4",
        "r": "Fundamental Theorem of Calculus"
      }
    ]
  },
  {
    "cat": "Calculus",
    "title": "Applications of the Definite Integral",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Calculus covering Applications of the Definite Integral.",
    "examples": [
      {
        "l": "Item 1",
        "r": "average value of a function"
      },
      {
        "l": "Item 2",
        "r": "area"
      },
      {
        "l": "Item 3",
        "r": "area between curves"
      },
      {
        "l": "Item 4",
        "r": "accumulated change from a rate of change"
      }
    ]
  },
  {
    "cat": "Chemistry",
    "title": "Atomic Theory and Atomic Structure",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Chemistry covering Atomic Theory and Atomic Structure.",
    "examples": [
      {
        "l": "Item 1",
        "r": "evidence for atomic theory"
      },
      {
        "l": "Item 2",
        "r": "atomic masses"
      },
      {
        "l": "Item 3",
        "r": "determination of atomic masses"
      },
      {
        "l": "Item 4",
        "r": "atomic number"
      },
      {
        "l": "Item 5",
        "r": "mass number"
      },
      {
        "l": "Item 6",
        "r": "isotopes"
      },
      {
        "l": "Item 7",
        "r": "mass spectroscopy"
      },
      {
        "l": "Item 8",
        "r": "electron energy levels"
      },
      {
        "l": "Item 9",
        "r": "atomic spectra"
      },
      {
        "l": "Item 10",
        "r": "atomic orbitals"
      },
      {
        "l": "Item 11",
        "r": "atomic radii"
      },
      {
        "l": "Item 12",
        "r": "ionization energies"
      },
      {
        "l": "Item 13",
        "r": "electron affinities"
      },
      {
        "l": "Item 14",
        "r": "oxidation states"
      },
      {
        "l": "Item 15",
        "r": "nuclear equations"
      },
      {
        "l": "Item 16",
        "r": "half-lives"
      },
      {
        "l": "Item 17",
        "r": "radioactivity"
      },
      {
        "l": "Item 18",
        "r": "chemical applications of nuclear chemistry"
      }
    ]
  },
  {
    "cat": "Chemistry",
    "title": "Chemical Bonding",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Chemistry covering Chemical Bonding.",
    "examples": [
      {
        "l": "Item 1",
        "r": "covalent bonding"
      },
      {
        "l": "Item 2",
        "r": "ionic bonding"
      },
      {
        "l": "Item 3",
        "r": "metallic bonding"
      },
      {
        "l": "Item 4",
        "r": "network bonding"
      },
      {
        "l": "Item 5",
        "r": "dispersion forces"
      },
      {
        "l": "Item 6",
        "r": "hydrogen bonding"
      },
      {
        "l": "Item 7",
        "r": "structure-property relationships"
      },
      {
        "l": "Item 8",
        "r": "bond polarity"
      },
      {
        "l": "Item 9",
        "r": "electronegativity"
      },
      {
        "l": "Item 10",
        "r": "VSEPR theory"
      },
      {
        "l": "Item 11",
        "r": "Lewis electron-dot diagrams"
      },
      {
        "l": "Item 12",
        "r": "hybridization"
      },
      {
        "l": "Item 13",
        "r": "molecular geometry"
      },
      {
        "l": "Item 14",
        "r": "geometry of ions"
      },
      {
        "l": "Item 15",
        "r": "coordination complexes"
      },
      {
        "l": "Item 16",
        "r": "structural isomerism"
      },
      {
        "l": "Item 17",
        "r": "resonance"
      },
      {
        "l": "Item 18",
        "r": "sigma bonds"
      }
    ]
  },
  {
    "cat": "Chemistry",
    "title": "Gases",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Chemistry covering Gases.",
    "examples": [
      {
        "l": "Item 1",
        "r": "ideal gas laws"
      },
      {
        "l": "Item 2",
        "r": "equations of state"
      },
      {
        "l": "Item 3",
        "r": "mole concept"
      },
      {
        "l": "Item 4",
        "r": "Avogadro's number"
      },
      {
        "l": "Item 5",
        "r": "kinetic-molecular theory"
      },
      {
        "l": "Item 6",
        "r": "interpretation of ideal gas laws"
      },
      {
        "l": "Item 7",
        "r": "temperature and kinetic energy"
      },
      {
        "l": "Item 8",
        "r": "Boltzmann distribution"
      },
      {
        "l": "Item 9",
        "r": "deviations from ideal gas laws"
      }
    ]
  },
  {
    "cat": "Chemistry",
    "title": "Liquids and Solids",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Chemistry covering Liquids and Solids.",
    "examples": [
      {
        "l": "Item 1",
        "r": "kinetic-molecular viewpoint"
      },
      {
        "l": "Item 2",
        "r": "phase diagrams"
      },
      {
        "l": "Item 3",
        "r": "changes of state"
      },
      {
        "l": "Item 4",
        "r": "critical phenomena"
      }
    ]
  },
  {
    "cat": "Chemistry",
    "title": "Solutions",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Chemistry covering Solutions.",
    "examples": [
      {
        "l": "Item 1",
        "r": "types of solutions"
      },
      {
        "l": "Item 2",
        "r": "factors affecting solubility"
      },
      {
        "l": "Item 3",
        "r": "methods of expressing concentration"
      },
      {
        "l": "Item 4",
        "r": "colligative properties"
      },
      {
        "l": "Item 5",
        "r": "Raoult's law"
      },
      {
        "l": "Item 6",
        "r": "interionic attraction"
      },
      {
        "l": "Item 7",
        "r": "solubility"
      }
    ]
  },
  {
    "cat": "Chemistry",
    "title": "Reaction Types",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Chemistry covering Reaction Types.",
    "examples": [
      {
        "l": "Item 1",
        "r": "Arrhenius acids and bases"
      },
      {
        "l": "Item 2",
        "r": "Bronsted-Lowry acids and bases"
      },
      {
        "l": "Item 3",
        "r": "Lewis acids and bases"
      },
      {
        "l": "Item 4",
        "r": "amphoterism"
      },
      {
        "l": "Item 5",
        "r": "coordination complex reactions"
      },
      {
        "l": "Item 6",
        "r": "precipitation reactions"
      },
      {
        "l": "Item 7",
        "r": "oxidation-reduction reactions"
      },
      {
        "l": "Item 8",
        "r": "oxidation number"
      },
      {
        "l": "Item 9",
        "r": "electron role in redox"
      },
      {
        "l": "Item 10",
        "r": "electrochemistry"
      },
      {
        "l": "Item 11",
        "r": "electrolytic cells"
      },
      {
        "l": "Item 12",
        "r": "standard half-cell potentials"
      },
      {
        "l": "Item 13",
        "r": "predicting redox direction"
      },
      {
        "l": "Item 14",
        "r": "concentration effects in redox"
      }
    ]
  },
  {
    "cat": "Chemistry",
    "title": "Equations and Stoichiometry",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Chemistry covering Equations and Stoichiometry.",
    "examples": [
      {
        "l": "Item 1",
        "r": "ionic species"
      },
      {
        "l": "Item 2",
        "r": "molecular species"
      },
      {
        "l": "Item 3",
        "r": "net-ionic equations"
      },
      {
        "l": "Item 4",
        "r": "mass relations"
      },
      {
        "l": "Item 5",
        "r": "volume relations"
      },
      {
        "l": "Item 6",
        "r": "mole concept"
      },
      {
        "l": "Item 7",
        "r": "balancing equations"
      },
      {
        "l": "Item 8",
        "r": "balancing redox equations"
      }
    ]
  },
  {
    "cat": "Chemistry",
    "title": "Equilibrium",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Chemistry covering Equilibrium.",
    "examples": [
      {
        "l": "Item 1",
        "r": "dynamic equilibrium"
      },
      {
        "l": "Item 2",
        "r": "Le Chatelier's principle"
      },
      {
        "l": "Item 3",
        "r": "equilibrium constants"
      },
      {
        "l": "Item 4",
        "r": "Kc"
      },
      {
        "l": "Item 5",
        "r": "Kp"
      },
      {
        "l": "Item 6",
        "r": "solution equilibrium constants"
      },
      {
        "l": "Item 7",
        "r": "acid constants"
      },
      {
        "l": "Item 8",
        "r": "base constants"
      },
      {
        "l": "Item 9",
        "r": "pK"
      },
      {
        "l": "Item 10",
        "r": "pH"
      },
      {
        "l": "Item 11",
        "r": "solubility product constants"
      },
      {
        "l": "Item 12",
        "r": "precipitation applications"
      },
      {
        "l": "Item 13",
        "r": "dissolution of slightly soluble compounds"
      },
      {
        "l": "Item 14",
        "r": "complex ion constants"
      },
      {
        "l": "Item 15",
        "r": "common ion effect"
      },
      {
        "l": "Item 16",
        "r": "buffers"
      }
    ]
  },
  {
    "cat": "Chemistry",
    "title": "Kinetics",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Chemistry covering Kinetics.",
    "examples": [
      {
        "l": "Item 1",
        "r": "rate of reaction"
      },
      {
        "l": "Item 2",
        "r": "order of reaction"
      },
      {
        "l": "Item 3",
        "r": "rate constant"
      },
      {
        "l": "Item 4",
        "r": "experimental determination of order"
      },
      {
        "l": "Item 5",
        "r": "temperature effects on rates"
      },
      {
        "l": "Item 6",
        "r": "activation energy"
      },
      {
        "l": "Item 7",
        "r": "catalysts"
      },
      {
        "l": "Item 8",
        "r": "rate-determining step"
      },
      {
        "l": "Item 9",
        "r": "reaction mechanism"
      }
    ]
  },
  {
    "cat": "Chemistry",
    "title": "Thermodynamics",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Chemistry covering Thermodynamics.",
    "examples": [
      {
        "l": "Item 1",
        "r": "state functions"
      },
      {
        "l": "Item 2",
        "r": "first law"
      },
      {
        "l": "Item 3",
        "r": "heat of formation"
      },
      {
        "l": "Item 4",
        "r": "heat of reaction"
      },
      {
        "l": "Item 5",
        "r": "enthalpy change"
      },
      {
        "l": "Item 6",
        "r": "Hess's law"
      },
      {
        "l": "Item 7",
        "r": "heat capacity"
      },
      {
        "l": "Item 8",
        "r": "heats of vaporization"
      },
      {
        "l": "Item 9",
        "r": "heats of fusion"
      },
      {
        "l": "Item 10",
        "r": "second law"
      },
      {
        "l": "Item 11",
        "r": "free energy of formation"
      },
      {
        "l": "Item 12",
        "r": "free energy of reaction"
      },
      {
        "l": "Item 13",
        "r": "free energy dependence on enthalpy and entropy"
      },
      {
        "l": "Item 14",
        "r": "free energy and equilibrium constants"
      },
      {
        "l": "Item 15",
        "r": "free energy and electrode potentials"
      }
    ]
  },
  {
    "cat": "Chemistry",
    "title": "Descriptive Chemistry",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Chemistry covering Descriptive Chemistry.",
    "examples": [
      {
        "l": "Item 1",
        "r": "chemical reactivity"
      },
      {
        "l": "Item 2",
        "r": "products of chemical reactions"
      },
      {
        "l": "Item 3",
        "r": "periodic table relationships"
      },
      {
        "l": "Item 4",
        "r": "main group chemistry"
      },
      {
        "l": "Item 5",
        "r": "transition element chemistry"
      },
      {
        "l": "Item 6",
        "r": "systematic nomenclature"
      },
      {
        "l": "Item 7",
        "r": "organic functional groups"
      },
      {
        "l": "Item 8",
        "r": "organic isomerism"
      }
    ]
  },
  {
    "cat": "Chemistry",
    "title": "Experimental Chemistry",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "AP/CLEP content area for Chemistry covering Experimental Chemistry.",
    "examples": [
      {
        "l": "Item 1",
        "r": "laboratory equipment"
      },
      {
        "l": "Item 2",
        "r": "laboratory observations"
      },
      {
        "l": "Item 3",
        "r": "laboratory calculations"
      },
      {
        "l": "Item 4",
        "r": "interpretation of experimental results"
      },
      {
        "l": "Item 5",
        "r": "basic tools of chemistry"
      }
    ]
  },
  {
    "cat": "College Algebra",
    "title": "Algebraic Operations (25%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for College Algebra covering Algebraic Operations (25%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "operations with exponents"
      },
      {
        "l": "Item 2",
        "r": "factoring polynomials"
      },
      {
        "l": "Item 3",
        "r": "expanding polynomials"
      },
      {
        "l": "Item 4",
        "r": "operations with algebraic expressions"
      },
      {
        "l": "Item 5",
        "r": "absolute value"
      },
      {
        "l": "Item 6",
        "r": "properties of logarithms"
      }
    ]
  },
  {
    "cat": "College Algebra",
    "title": "Equations and Inequalities (25%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for College Algebra covering Equations and Inequalities (25%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "linear equations"
      },
      {
        "l": "Item 2",
        "r": "linear inequalities"
      },
      {
        "l": "Item 3",
        "r": "quadratic equations"
      },
      {
        "l": "Item 4",
        "r": "quadratic inequalities"
      },
      {
        "l": "Item 5",
        "r": "absolute value equations"
      },
      {
        "l": "Item 6",
        "r": "absolute value inequalities"
      },
      {
        "l": "Item 7",
        "r": "systems of equations"
      },
      {
        "l": "Item 8",
        "r": "systems of inequalities"
      },
      {
        "l": "Item 9",
        "r": "exponential equations"
      },
      {
        "l": "Item 10",
        "r": "logarithmic equations"
      }
    ]
  },
  {
    "cat": "College Algebra",
    "title": "Functions and Their Properties (30%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for College Algebra covering Functions and Their Properties (30%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "definition of functions"
      },
      {
        "l": "Item 2",
        "r": "interpretation of functions"
      },
      {
        "l": "Item 3",
        "r": "representation of functions"
      },
      {
        "l": "Item 4",
        "r": "modeling with functions"
      },
      {
        "l": "Item 5",
        "r": "domain"
      },
      {
        "l": "Item 6",
        "r": "range"
      },
      {
        "l": "Item 7",
        "r": "evaluation of functions"
      },
      {
        "l": "Item 8",
        "r": "algebra of functions"
      },
      {
        "l": "Item 9",
        "r": "graphs and intercepts"
      },
      {
        "l": "Item 10",
        "r": "symmetry"
      },
      {
        "l": "Item 11",
        "r": "transformations"
      },
      {
        "l": "Item 12",
        "r": "inverse functions"
      }
    ]
  },
  {
    "cat": "College Algebra",
    "title": "Number Systems and Operations (20%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for College Algebra covering Number Systems and Operations (20%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "real numbers"
      },
      {
        "l": "Item 2",
        "r": "complex numbers"
      },
      {
        "l": "Item 3",
        "r": "factorials"
      },
      {
        "l": "Item 4",
        "r": "binomial theorem"
      }
    ]
  },
  {
    "cat": "College Mathematics",
    "title": "Algebra and Functions (20%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for College Mathematics covering Algebra and Functions (20%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "solving equations"
      },
      {
        "l": "Item 2",
        "r": "linear inequalities"
      },
      {
        "l": "Item 3",
        "r": "systems of linear equations analytically"
      },
      {
        "l": "Item 4",
        "r": "systems of linear equations graphically"
      },
      {
        "l": "Item 5",
        "r": "function interpretation"
      },
      {
        "l": "Item 6",
        "r": "function representation"
      },
      {
        "l": "Item 7",
        "r": "function evaluation"
      },
      {
        "l": "Item 8",
        "r": "function graphs"
      },
      {
        "l": "Item 9",
        "r": "translations"
      },
      {
        "l": "Item 10",
        "r": "reflections"
      },
      {
        "l": "Item 11",
        "r": "symmetry"
      },
      {
        "l": "Item 12",
        "r": "linear growth"
      },
      {
        "l": "Item 13",
        "r": "exponential growth"
      },
      {
        "l": "Item 14",
        "r": "applications"
      }
    ]
  },
  {
    "cat": "College Mathematics",
    "title": "Counting and Probability (10%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for College Mathematics covering Counting and Probability (10%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "multiplication rule"
      },
      {
        "l": "Item 2",
        "r": "combinations"
      },
      {
        "l": "Item 3",
        "r": "permutations"
      },
      {
        "l": "Item 4",
        "r": "union"
      },
      {
        "l": "Item 5",
        "r": "intersection"
      },
      {
        "l": "Item 6",
        "r": "independent events"
      },
      {
        "l": "Item 7",
        "r": "mutually exclusive events"
      },
      {
        "l": "Item 8",
        "r": "complementary events"
      },
      {
        "l": "Item 9",
        "r": "conditional probabilities"
      },
      {
        "l": "Item 10",
        "r": "expected value"
      },
      {
        "l": "Item 11",
        "r": "applications"
      }
    ]
  },
  {
    "cat": "College Mathematics",
    "title": "Data Analysis and Statistics (15%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for College Mathematics covering Data Analysis and Statistics (15%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "tables"
      },
      {
        "l": "Item 2",
        "r": "bar graphs"
      },
      {
        "l": "Item 3",
        "r": "line graphs"
      },
      {
        "l": "Item 4",
        "r": "circle graphs"
      },
      {
        "l": "Item 5",
        "r": "pie charts"
      },
      {
        "l": "Item 6",
        "r": "scatterplots"
      },
      {
        "l": "Item 7",
        "r": "histograms"
      },
      {
        "l": "Item 8",
        "r": "mean"
      },
      {
        "l": "Item 9",
        "r": "median"
      },
      {
        "l": "Item 10",
        "r": "mode"
      },
      {
        "l": "Item 11",
        "r": "range"
      },
      {
        "l": "Item 12",
        "r": "standard deviation"
      },
      {
        "l": "Item 13",
        "r": "normal distribution"
      },
      {
        "l": "Item 14",
        "r": "applications"
      }
    ]
  },
  {
    "cat": "College Mathematics",
    "title": "Financial Mathematics (20%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for College Mathematics covering Financial Mathematics (20%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "percents"
      },
      {
        "l": "Item 2",
        "r": "percent change"
      },
      {
        "l": "Item 3",
        "r": "markups"
      },
      {
        "l": "Item 4",
        "r": "discounts"
      },
      {
        "l": "Item 5",
        "r": "taxes"
      },
      {
        "l": "Item 6",
        "r": "profit"
      },
      {
        "l": "Item 7",
        "r": "loss"
      },
      {
        "l": "Item 8",
        "r": "simple interest"
      },
      {
        "l": "Item 9",
        "r": "compound interest"
      },
      {
        "l": "Item 10",
        "r": "continuous interest"
      },
      {
        "l": "Item 11",
        "r": "effective interest rate"
      },
      {
        "l": "Item 12",
        "r": "annual percentage rate"
      },
      {
        "l": "Item 13",
        "r": "present value"
      },
      {
        "l": "Item 14",
        "r": "future value"
      },
      {
        "l": "Item 15",
        "r": "applications"
      }
    ]
  },
  {
    "cat": "College Mathematics",
    "title": "Geometry (10%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for College Mathematics covering Geometry (10%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "triangles"
      },
      {
        "l": "Item 2",
        "r": "quadrilaterals"
      },
      {
        "l": "Item 3",
        "r": "perimeter"
      },
      {
        "l": "Item 4",
        "r": "area"
      },
      {
        "l": "Item 5",
        "r": "similarity"
      },
      {
        "l": "Item 6",
        "r": "Pythagorean theorem"
      },
      {
        "l": "Item 7",
        "r": "parallel lines"
      },
      {
        "l": "Item 8",
        "r": "perpendicular lines"
      },
      {
        "l": "Item 9",
        "r": "circles"
      },
      {
        "l": "Item 10",
        "r": "circumference"
      },
      {
        "l": "Item 11",
        "r": "central angles"
      },
      {
        "l": "Item 12",
        "r": "inscribed angles"
      },
      {
        "l": "Item 13",
        "r": "sectors"
      },
      {
        "l": "Item 14",
        "r": "applications"
      }
    ]
  },
  {
    "cat": "College Mathematics",
    "title": "Logic and Sets (15%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for College Mathematics covering Logic and Sets (15%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "conditional statements"
      },
      {
        "l": "Item 2",
        "r": "conjunctions"
      },
      {
        "l": "Item 3",
        "r": "disjunctions"
      },
      {
        "l": "Item 4",
        "r": "negations"
      },
      {
        "l": "Item 5",
        "r": "hypotheses"
      },
      {
        "l": "Item 6",
        "r": "logical conclusions"
      },
      {
        "l": "Item 7",
        "r": "converses"
      },
      {
        "l": "Item 8",
        "r": "inverses"
      },
      {
        "l": "Item 9",
        "r": "counterexamples"
      },
      {
        "l": "Item 10",
        "r": "contrapositives"
      },
      {
        "l": "Item 11",
        "r": "logical equivalence"
      },
      {
        "l": "Item 12",
        "r": "set relationships"
      },
      {
        "l": "Item 13",
        "r": "subsets"
      },
      {
        "l": "Item 14",
        "r": "disjoint sets"
      },
      {
        "l": "Item 15",
        "r": "equality of sets"
      },
      {
        "l": "Item 16",
        "r": "Venn diagrams"
      },
      {
        "l": "Item 17",
        "r": "union of sets"
      },
      {
        "l": "Item 18",
        "r": "intersection of sets"
      }
    ]
  },
  {
    "cat": "College Mathematics",
    "title": "Numbers (10%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for College Mathematics covering Numbers (10%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "integers"
      },
      {
        "l": "Item 2",
        "r": "rational numbers"
      },
      {
        "l": "Item 3",
        "r": "irrational numbers"
      },
      {
        "l": "Item 4",
        "r": "real numbers"
      },
      {
        "l": "Item 5",
        "r": "rational vs irrational recognition"
      },
      {
        "l": "Item 6",
        "r": "factors"
      },
      {
        "l": "Item 7",
        "r": "divisibility"
      },
      {
        "l": "Item 8",
        "r": "primes"
      },
      {
        "l": "Item 9",
        "r": "composites"
      },
      {
        "l": "Item 10",
        "r": "odd integers"
      },
      {
        "l": "Item 11",
        "r": "even integers"
      },
      {
        "l": "Item 12",
        "r": "fundamental theorem of arithmetic"
      },
      {
        "l": "Item 13",
        "r": "unit conversion"
      },
      {
        "l": "Item 14",
        "r": "scientific notation"
      },
      {
        "l": "Item 15",
        "r": "numerical precision"
      },
      {
        "l": "Item 16",
        "r": "absolute value"
      },
      {
        "l": "Item 17",
        "r": "applications"
      }
    ]
  },
  {
    "cat": "Natural Sciences",
    "title": "Biological Science (50%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Natural Sciences covering Biological Science (50%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "origin and evolution of life"
      },
      {
        "l": "Item 2",
        "r": "classification of organisms"
      },
      {
        "l": "Item 3",
        "r": "cell organization"
      },
      {
        "l": "Item 4",
        "r": "cell division"
      },
      {
        "l": "Item 5",
        "r": "chemical nature of the gene"
      },
      {
        "l": "Item 6",
        "r": "bioenergetics"
      },
      {
        "l": "Item 7",
        "r": "biosynthesis"
      },
      {
        "l": "Item 8",
        "r": "structure in organisms"
      },
      {
        "l": "Item 9",
        "r": "function in organisms"
      },
      {
        "l": "Item 10",
        "r": "development in organisms"
      },
      {
        "l": "Item 11",
        "r": "patterns of heredity"
      },
      {
        "l": "Item 12",
        "r": "population biology"
      },
      {
        "l": "Item 13",
        "r": "ecology"
      }
    ]
  },
  {
    "cat": "Natural Sciences",
    "title": "Physical Science (50%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Natural Sciences covering Physical Science (50%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "atomic structure"
      },
      {
        "l": "Item 2",
        "r": "nuclear structure"
      },
      {
        "l": "Item 3",
        "r": "elementary particles"
      },
      {
        "l": "Item 4",
        "r": "nuclear reactions"
      },
      {
        "l": "Item 5",
        "r": "chemical elements"
      },
      {
        "l": "Item 6",
        "r": "chemical compounds"
      },
      {
        "l": "Item 7",
        "r": "chemical reactions"
      },
      {
        "l": "Item 8",
        "r": "molecular structure"
      },
      {
        "l": "Item 9",
        "r": "bonding"
      },
      {
        "l": "Item 10",
        "r": "heat"
      },
      {
        "l": "Item 11",
        "r": "thermodynamics"
      },
      {
        "l": "Item 12",
        "r": "states of matter"
      },
      {
        "l": "Item 13",
        "r": "classical mechanics"
      },
      {
        "l": "Item 14",
        "r": "relativity"
      },
      {
        "l": "Item 15",
        "r": "electricity"
      },
      {
        "l": "Item 16",
        "r": "magnetism"
      },
      {
        "l": "Item 17",
        "r": "waves"
      },
      {
        "l": "Item 18",
        "r": "light"
      }
    ]
  },
  {
    "cat": "Precalculus",
    "title": "Algebraic Expressions, Equations, and Inequalities (20%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Precalculus covering Algebraic Expressions, Equations, and Inequalities (20%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "operations on algebraic expressions"
      },
      {
        "l": "Item 2",
        "r": "linear equations"
      },
      {
        "l": "Item 3",
        "r": "quadratic equations"
      },
      {
        "l": "Item 4",
        "r": "absolute value equations"
      },
      {
        "l": "Item 5",
        "r": "polynomial equations"
      },
      {
        "l": "Item 6",
        "r": "rational equations"
      },
      {
        "l": "Item 7",
        "r": "radical equations"
      },
      {
        "l": "Item 8",
        "r": "exponential equations"
      },
      {
        "l": "Item 9",
        "r": "logarithmic equations"
      },
      {
        "l": "Item 10",
        "r": "trigonometric equations"
      },
      {
        "l": "Item 11",
        "r": "linear inequalities"
      },
      {
        "l": "Item 12",
        "r": "quadratic inequalities"
      },
      {
        "l": "Item 13",
        "r": "absolute value inequalities"
      },
      {
        "l": "Item 14",
        "r": "polynomial inequalities"
      },
      {
        "l": "Item 15",
        "r": "rational inequalities"
      },
      {
        "l": "Item 16",
        "r": "systems of linear equations"
      },
      {
        "l": "Item 17",
        "r": "systems of nonlinear equations"
      }
    ]
  },
  {
    "cat": "Precalculus",
    "title": "Functions: Concept, Properties, and Operations (15%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Precalculus covering Functions: Concept, Properties, and Operations (15%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "concept of a function"
      },
      {
        "l": "Item 2",
        "r": "domain"
      },
      {
        "l": "Item 3",
        "r": "range"
      },
      {
        "l": "Item 4",
        "r": "function notation"
      },
      {
        "l": "Item 5",
        "r": "evaluation of functions"
      },
      {
        "l": "Item 6",
        "r": "inverse functions"
      },
      {
        "l": "Item 7",
        "r": "symbolic operations with functions"
      }
    ]
  },
  {
    "cat": "Precalculus",
    "title": "Representations of Functions (30%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Precalculus covering Representations of Functions (30%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "symbolic representations"
      },
      {
        "l": "Item 2",
        "r": "graphical representations"
      },
      {
        "l": "Item 3",
        "r": "tabular representations"
      },
      {
        "l": "Item 4",
        "r": "function transformations"
      },
      {
        "l": "Item 5",
        "r": "linear functions"
      },
      {
        "l": "Item 6",
        "r": "quadratic functions"
      },
      {
        "l": "Item 7",
        "r": "absolute value functions"
      },
      {
        "l": "Item 8",
        "r": "square root functions"
      },
      {
        "l": "Item 9",
        "r": "polynomial functions"
      },
      {
        "l": "Item 10",
        "r": "rational functions"
      },
      {
        "l": "Item 11",
        "r": "exponential functions"
      },
      {
        "l": "Item 12",
        "r": "logarithmic functions"
      },
      {
        "l": "Item 13",
        "r": "trigonometric functions"
      },
      {
        "l": "Item 14",
        "r": "inverse trigonometric functions"
      },
      {
        "l": "Item 15",
        "r": "piecewise-defined functions"
      }
    ]
  },
  {
    "cat": "Precalculus",
    "title": "Analytic Geometry (10%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Precalculus covering Analytic Geometry (10%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "lines"
      },
      {
        "l": "Item 2",
        "r": "circles"
      },
      {
        "l": "Item 3",
        "r": "parabolas"
      },
      {
        "l": "Item 4",
        "r": "ellipses"
      },
      {
        "l": "Item 5",
        "r": "hyperbolas"
      }
    ]
  },
  {
    "cat": "Precalculus",
    "title": "Trigonometry and Applications (15%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Precalculus covering Trigonometry and Applications (15%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "basic trigonometric functions"
      },
      {
        "l": "Item 2",
        "r": "inverse trigonometric functions"
      },
      {
        "l": "Item 3",
        "r": "right triangle ratios"
      },
      {
        "l": "Item 4",
        "r": "unit circle"
      },
      {
        "l": "Item 5",
        "r": "trigonometric identities"
      },
      {
        "l": "Item 6",
        "r": "trigonometric problem solving"
      }
    ]
  },
  {
    "cat": "Precalculus",
    "title": "Functions as Models (10%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Precalculus covering Functions as Models (10%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "interpreting functions as models"
      },
      {
        "l": "Item 2",
        "r": "constructing functions as models"
      },
      {
        "l": "Item 3",
        "r": "symbolic translation"
      },
      {
        "l": "Item 4",
        "r": "graphical translation"
      },
      {
        "l": "Item 5",
        "r": "tabular translation"
      },
      {
        "l": "Item 6",
        "r": "verbal translation"
      }
    ]
  },
  {
    "cat": "Financial Accounting",
    "title": "General Topics (20%-30%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Financial Accounting covering General Topics (20%-30%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "generally accepted accounting principles"
      },
      {
        "l": "Item 2",
        "r": "double-entry accounting"
      },
      {
        "l": "Item 3",
        "r": "transaction analysis"
      },
      {
        "l": "Item 4",
        "r": "accounting equation"
      },
      {
        "l": "Item 5",
        "r": "accounting cycle"
      },
      {
        "l": "Item 6",
        "r": "business ethics"
      },
      {
        "l": "Item 7",
        "r": "financial statement purpose"
      },
      {
        "l": "Item 8",
        "r": "financial statement presentation"
      },
      {
        "l": "Item 9",
        "r": "relationships between financial statements"
      },
      {
        "l": "Item 10",
        "r": "forms of business"
      }
    ]
  },
  {
    "cat": "Financial Accounting",
    "title": "Income Statement (20%-30%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Financial Accounting covering Income Statement (20%-30%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "single-step format"
      },
      {
        "l": "Item 2",
        "r": "multi-step format"
      },
      {
        "l": "Item 3",
        "r": "revenue recognition"
      },
      {
        "l": "Item 4",
        "r": "expense recognition"
      },
      {
        "l": "Item 5",
        "r": "cost of goods sold"
      },
      {
        "l": "Item 6",
        "r": "nonoperational gains"
      },
      {
        "l": "Item 7",
        "r": "nonoperational losses"
      },
      {
        "l": "Item 8",
        "r": "profitability analysis"
      }
    ]
  },
  {
    "cat": "Financial Accounting",
    "title": "Balance Sheet (30%-40%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Financial Accounting covering Balance Sheet (30%-40%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "cash"
      },
      {
        "l": "Item 2",
        "r": "internal controls"
      },
      {
        "l": "Item 3",
        "r": "accounts receivable valuation"
      },
      {
        "l": "Item 4",
        "r": "notes receivable valuation"
      },
      {
        "l": "Item 5",
        "r": "bad debts"
      },
      {
        "l": "Item 6",
        "r": "inventory valuation"
      },
      {
        "l": "Item 7",
        "r": "long-term asset acquisition"
      },
      {
        "l": "Item 8",
        "r": "long-term asset disposal"
      },
      {
        "l": "Item 9",
        "r": "depreciation"
      },
      {
        "l": "Item 10",
        "r": "amortization"
      },
      {
        "l": "Item 11",
        "r": "depletion"
      },
      {
        "l": "Item 12",
        "r": "intangible assets"
      },
      {
        "l": "Item 13",
        "r": "patents"
      },
      {
        "l": "Item 14",
        "r": "goodwill"
      },
      {
        "l": "Item 15",
        "r": "accounts payable"
      },
      {
        "l": "Item 16",
        "r": "notes payable"
      },
      {
        "l": "Item 17",
        "r": "long-term liabilities"
      },
      {
        "l": "Item 18",
        "r": "bonds payable"
      }
    ]
  },
  {
    "cat": "Financial Accounting",
    "title": "Statement of Cash Flows (5%-10%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Financial Accounting covering Statement of Cash Flows (5%-10%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "indirect method"
      },
      {
        "l": "Item 2",
        "r": "cash flow analysis"
      },
      {
        "l": "Item 3",
        "r": "operating activities"
      },
      {
        "l": "Item 4",
        "r": "financing activities"
      },
      {
        "l": "Item 5",
        "r": "investing activities"
      },
      {
        "l": "Item 6",
        "r": "noncash financing activities"
      },
      {
        "l": "Item 7",
        "r": "noncash investing activities"
      }
    ]
  },
  {
    "cat": "Financial Accounting",
    "title": "Miscellaneous (Less than 5%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Financial Accounting covering Miscellaneous (Less than 5%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "investments"
      },
      {
        "l": "Item 2",
        "r": "contingent liabilities"
      }
    ]
  },
  {
    "cat": "Information Systems",
    "title": "Office and Technology Applications (20%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Information Systems covering Office and Technology Applications (20%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "word processing"
      },
      {
        "l": "Item 2",
        "r": "spreadsheet software"
      },
      {
        "l": "Item 3",
        "r": "presentation software"
      },
      {
        "l": "Item 4",
        "r": "database package"
      },
      {
        "l": "Item 5",
        "r": "software suites"
      },
      {
        "l": "Item 6",
        "r": "email systems"
      },
      {
        "l": "Item 7",
        "r": "conferencing"
      },
      {
        "l": "Item 8",
        "r": "collaborative work"
      },
      {
        "l": "Item 9",
        "r": "document imaging"
      },
      {
        "l": "Item 10",
        "r": "OCR"
      },
      {
        "l": "Item 11",
        "r": "system resources"
      },
      {
        "l": "Item 12",
        "r": "voice recognition systems"
      },
      {
        "l": "Item 13",
        "r": "knowledge management"
      },
      {
        "l": "Item 14",
        "r": "expert systems"
      },
      {
        "l": "Item 15",
        "r": "TPS"
      },
      {
        "l": "Item 16",
        "r": "OLTP"
      },
      {
        "l": "Item 17",
        "r": "DSS"
      },
      {
        "l": "Item 18",
        "r": "GIS"
      }
    ]
  },
  {
    "cat": "Information Systems",
    "title": "Internet and World Wide Web (15%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Information Systems covering Internet and World Wide Web (15%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "intranet"
      },
      {
        "l": "Item 2",
        "r": "extranet"
      },
      {
        "l": "Item 3",
        "r": "governance"
      },
      {
        "l": "Item 4",
        "r": "internet content"
      },
      {
        "l": "Item 5",
        "r": "search engines"
      },
      {
        "l": "Item 6",
        "r": "cloud storage"
      },
      {
        "l": "Item 7",
        "r": "content streaming"
      },
      {
        "l": "Item 8",
        "r": "protocols"
      },
      {
        "l": "Item 9",
        "r": "push communication"
      },
      {
        "l": "Item 10",
        "r": "pull communication"
      },
      {
        "l": "Item 11",
        "r": "web 2.0"
      },
      {
        "l": "Item 12",
        "r": "web browsers"
      },
      {
        "l": "Item 13",
        "r": "URLs"
      },
      {
        "l": "Item 14",
        "r": "web standards"
      },
      {
        "l": "Item 15",
        "r": "browser history"
      },
      {
        "l": "Item 16",
        "r": "cookies"
      },
      {
        "l": "Item 17",
        "r": "resource allocation"
      },
      {
        "l": "Item 18",
        "r": "browser functionality"
      }
    ]
  },
  {
    "cat": "Information Systems",
    "title": "Security (10%-15%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Information Systems covering Security (10%-15%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "viruses"
      },
      {
        "l": "Item 2",
        "r": "worms"
      },
      {
        "l": "Item 3",
        "r": "Trojan horses"
      },
      {
        "l": "Item 4",
        "r": "ransomware"
      },
      {
        "l": "Item 5",
        "r": "adware"
      },
      {
        "l": "Item 6",
        "r": "spyware"
      },
      {
        "l": "Item 7",
        "r": "scareware"
      },
      {
        "l": "Item 8",
        "r": "denial of service"
      },
      {
        "l": "Item 9",
        "r": "privacy concerns"
      },
      {
        "l": "Item 10",
        "r": "identity theft"
      },
      {
        "l": "Item 11",
        "r": "authorization"
      },
      {
        "l": "Item 12",
        "r": "authentication"
      },
      {
        "l": "Item 13",
        "r": "system access"
      },
      {
        "l": "Item 14",
        "r": "database security"
      },
      {
        "l": "Item 15",
        "r": "secure transactions"
      },
      {
        "l": "Item 16",
        "r": "remote data access"
      },
      {
        "l": "Item 17",
        "r": "device security"
      },
      {
        "l": "Item 18",
        "r": "application security"
      }
    ]
  },
  {
    "cat": "Information Systems",
    "title": "Hardware and Systems Technology (15%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Information Systems covering Hardware and Systems Technology (15%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "processing devices"
      },
      {
        "l": "Item 2",
        "r": "storage devices"
      },
      {
        "l": "Item 3",
        "r": "input devices"
      },
      {
        "l": "Item 4",
        "r": "output devices"
      },
      {
        "l": "Item 5",
        "r": "telecommunications devices"
      },
      {
        "l": "Item 6",
        "r": "networking devices"
      },
      {
        "l": "Item 7",
        "r": "Internet of Things"
      },
      {
        "l": "Item 8",
        "r": "computer functions"
      },
      {
        "l": "Item 9",
        "r": "operating systems"
      },
      {
        "l": "Item 10",
        "r": "telecommunications functions"
      },
      {
        "l": "Item 11",
        "r": "network hardware"
      },
      {
        "l": "Item 12",
        "r": "LAN"
      },
      {
        "l": "Item 13",
        "r": "WAN"
      },
      {
        "l": "Item 14",
        "r": "PAN"
      },
      {
        "l": "Item 15",
        "r": "VPN"
      },
      {
        "l": "Item 16",
        "r": "enterprise networks"
      },
      {
        "l": "Item 17",
        "r": "mainframe"
      },
      {
        "l": "Item 18",
        "r": "personal computer"
      }
    ]
  },
  {
    "cat": "Information Systems",
    "title": "Software Development (10%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Information Systems covering Software Development (10%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "prototyping"
      },
      {
        "l": "Item 2",
        "r": "SDLC"
      },
      {
        "l": "Item 3",
        "r": "RAD"
      },
      {
        "l": "Item 4",
        "r": "CASE"
      },
      {
        "l": "Item 5",
        "r": "JAD"
      },
      {
        "l": "Item 6",
        "r": "agile"
      },
      {
        "l": "Item 7",
        "r": "spiral"
      },
      {
        "l": "Item 8",
        "r": "feasibility"
      },
      {
        "l": "Item 9",
        "r": "systems analysis"
      },
      {
        "l": "Item 10",
        "r": "systems design"
      },
      {
        "l": "Item 11",
        "r": "end-user development"
      },
      {
        "l": "Item 12",
        "r": "testing"
      },
      {
        "l": "Item 13",
        "r": "training"
      },
      {
        "l": "Item 14",
        "r": "data conversion"
      },
      {
        "l": "Item 15",
        "r": "system conversion"
      },
      {
        "l": "Item 16",
        "r": "system maintenance"
      },
      {
        "l": "Item 17",
        "r": "post-implementation activities"
      },
      {
        "l": "Item 18",
        "r": "documentation"
      }
    ]
  },
  {
    "cat": "Information Systems",
    "title": "Data Management and Programming Concepts (15%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Information Systems covering Data Management and Programming Concepts (15%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "data warehousing"
      },
      {
        "l": "Item 2",
        "r": "data mining"
      },
      {
        "l": "Item 3",
        "r": "big data"
      },
      {
        "l": "Item 4",
        "r": "validation"
      },
      {
        "l": "Item 5",
        "r": "migration"
      },
      {
        "l": "Item 6",
        "r": "storage"
      },
      {
        "l": "Item 7",
        "r": "obsolescence"
      },
      {
        "l": "Item 8",
        "r": "data concepts"
      },
      {
        "l": "Item 9",
        "r": "data types"
      },
      {
        "l": "Item 10",
        "r": "data structures"
      },
      {
        "l": "Item 11",
        "r": "digital representation of data"
      },
      {
        "l": "Item 12",
        "r": "data transfer"
      },
      {
        "l": "Item 13",
        "r": "file organization"
      },
      {
        "l": "Item 14",
        "r": "memory management"
      },
      {
        "l": "Item 15",
        "r": "file management"
      },
      {
        "l": "Item 16",
        "r": "relational DBMS"
      },
      {
        "l": "Item 17",
        "r": "hierarchical DBMS"
      },
      {
        "l": "Item 18",
        "r": "network DBMS"
      }
    ]
  },
  {
    "cat": "Information Systems",
    "title": "Social and Ethical Implications (10%-15%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Information Systems covering Social and Ethical Implications (10%-15%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "outsourcing"
      },
      {
        "l": "Item 2",
        "r": "insourcing"
      },
      {
        "l": "Item 3",
        "r": "offshoring"
      },
      {
        "l": "Item 4",
        "r": "green computing"
      },
      {
        "l": "Item 5",
        "r": "technology investment"
      },
      {
        "l": "Item 6",
        "r": "intellectual property rights"
      },
      {
        "l": "Item 7",
        "r": "legal property rights"
      },
      {
        "l": "Item 8",
        "r": "ownership of materials"
      },
      {
        "l": "Item 9",
        "r": "open-source software"
      },
      {
        "l": "Item 10",
        "r": "open-source hardware"
      },
      {
        "l": "Item 11",
        "r": "effects on jobs"
      },
      {
        "l": "Item 12",
        "r": "telecommuting"
      },
      {
        "l": "Item 13",
        "r": "virtual teams"
      },
      {
        "l": "Item 14",
        "r": "job design"
      },
      {
        "l": "Item 15",
        "r": "staffing"
      },
      {
        "l": "Item 16",
        "r": "ergonomics"
      },
      {
        "l": "Item 17",
        "r": "IS careers"
      },
      {
        "l": "Item 18",
        "r": "responsibilities"
      }
    ]
  },
  {
    "cat": "Introductory Business Law",
    "title": "History and Sources of American Law/Constitutional Law (5%-10%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Introductory Business Law covering History and Sources of American Law/Constitutional Law (5%-10%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "history of American law"
      },
      {
        "l": "Item 2",
        "r": "sources of American law"
      },
      {
        "l": "Item 3",
        "r": "constitutional law"
      }
    ]
  },
  {
    "cat": "Introductory Business Law",
    "title": "American Legal Systems and Procedures (5%-10%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Introductory Business Law covering American Legal Systems and Procedures (5%-10%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "American legal systems"
      },
      {
        "l": "Item 2",
        "r": "legal procedures"
      }
    ]
  },
  {
    "cat": "Introductory Business Law",
    "title": "Contracts (30%-40%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Introductory Business Law covering Contracts (30%-40%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "meanings of terms"
      },
      {
        "l": "Item 2",
        "r": "formation of contracts"
      },
      {
        "l": "Item 3",
        "r": "capacity"
      },
      {
        "l": "Item 4",
        "r": "consideration"
      },
      {
        "l": "Item 5",
        "r": "joint obligations"
      },
      {
        "l": "Item 6",
        "r": "third-party beneficiary contracts"
      },
      {
        "l": "Item 7",
        "r": "assignment"
      },
      {
        "l": "Item 8",
        "r": "delegation"
      },
      {
        "l": "Item 9",
        "r": "statute of frauds"
      },
      {
        "l": "Item 10",
        "r": "scope of contracts"
      },
      {
        "l": "Item 11",
        "r": "meaning of contracts"
      },
      {
        "l": "Item 12",
        "r": "breach of contract"
      },
      {
        "l": "Item 13",
        "r": "remedies"
      },
      {
        "l": "Item 14",
        "r": "bar to remedies"
      },
      {
        "l": "Item 15",
        "r": "discharge of contracts"
      },
      {
        "l": "Item 16",
        "r": "illegal contracts"
      }
    ]
  },
  {
    "cat": "Introductory Business Law",
    "title": "Legal Environment (20%-25%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Introductory Business Law covering Legal Environment (20%-25%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "ethics"
      },
      {
        "l": "Item 2",
        "r": "corporate social responsibility"
      },
      {
        "l": "Item 3",
        "r": "government regulation"
      },
      {
        "l": "Item 4",
        "r": "administrative agencies"
      },
      {
        "l": "Item 5",
        "r": "antitrust law"
      },
      {
        "l": "Item 6",
        "r": "employment law"
      },
      {
        "l": "Item 7",
        "r": "product liability"
      },
      {
        "l": "Item 8",
        "r": "consumer protection"
      },
      {
        "l": "Item 9",
        "r": "international business law"
      }
    ]
  },
  {
    "cat": "Introductory Business Law",
    "title": "Torts (10%-15%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Introductory Business Law covering Torts (10%-15%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "torts"
      }
    ]
  },
  {
    "cat": "Introductory Business Law",
    "title": "Miscellaneous (5%-10%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Introductory Business Law covering Miscellaneous (5%-10%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "agency"
      },
      {
        "l": "Item 2",
        "r": "partnerships"
      },
      {
        "l": "Item 3",
        "r": "corporations"
      },
      {
        "l": "Item 4",
        "r": "sales"
      }
    ]
  },
  {
    "cat": "Principles of Management",
    "title": "Organization and Human Resources (15%-25%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Principles of Management covering Organization and Human Resources (15%-25%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "personnel administration"
      },
      {
        "l": "Item 2",
        "r": "human relations"
      },
      {
        "l": "Item 3",
        "r": "motivation"
      },
      {
        "l": "Item 4",
        "r": "training and development"
      },
      {
        "l": "Item 5",
        "r": "performance appraisal"
      },
      {
        "l": "Item 6",
        "r": "organizational development"
      },
      {
        "l": "Item 7",
        "r": "legal concerns"
      },
      {
        "l": "Item 8",
        "r": "workforce diversity"
      },
      {
        "l": "Item 9",
        "r": "recruiting"
      },
      {
        "l": "Item 10",
        "r": "selecting"
      },
      {
        "l": "Item 11",
        "r": "compensation"
      },
      {
        "l": "Item 12",
        "r": "benefits"
      },
      {
        "l": "Item 13",
        "r": "collective bargaining"
      }
    ]
  },
  {
    "cat": "Principles of Management",
    "title": "Operational Aspects of Management (10%-20%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Principles of Management covering Operational Aspects of Management (10%-20%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "operations planning"
      },
      {
        "l": "Item 2",
        "r": "operations control"
      },
      {
        "l": "Item 3",
        "r": "work scheduling"
      },
      {
        "l": "Item 4",
        "r": "quality management"
      },
      {
        "l": "Item 5",
        "r": "TQM"
      },
      {
        "l": "Item 6",
        "r": "information processing"
      },
      {
        "l": "Item 7",
        "r": "information management"
      },
      {
        "l": "Item 8",
        "r": "strategic planning"
      },
      {
        "l": "Item 9",
        "r": "strategic analysis"
      },
      {
        "l": "Item 10",
        "r": "productivity"
      }
    ]
  },
  {
    "cat": "Principles of Management",
    "title": "Functional Aspects of Management (45%-55%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Principles of Management covering Functional Aspects of Management (45%-55%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "planning"
      },
      {
        "l": "Item 2",
        "r": "organizing"
      },
      {
        "l": "Item 3",
        "r": "leading"
      },
      {
        "l": "Item 4",
        "r": "controlling"
      },
      {
        "l": "Item 5",
        "r": "authority"
      },
      {
        "l": "Item 6",
        "r": "decision-making"
      },
      {
        "l": "Item 7",
        "r": "organization charts"
      },
      {
        "l": "Item 8",
        "r": "leadership"
      },
      {
        "l": "Item 9",
        "r": "organizational structure"
      },
      {
        "l": "Item 10",
        "r": "budgeting"
      },
      {
        "l": "Item 11",
        "r": "problem-solving"
      },
      {
        "l": "Item 12",
        "r": "group dynamics"
      },
      {
        "l": "Item 13",
        "r": "team functions"
      },
      {
        "l": "Item 14",
        "r": "conflict resolution"
      },
      {
        "l": "Item 15",
        "r": "communication"
      },
      {
        "l": "Item 16",
        "r": "change"
      },
      {
        "l": "Item 17",
        "r": "organizational theory"
      },
      {
        "l": "Item 18",
        "r": "historical aspects"
      }
    ]
  },
  {
    "cat": "Principles of Management",
    "title": "International Management and Contemporary Issues (10%-20%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Principles of Management covering International Management and Contemporary Issues (10%-20%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "value dimensions"
      },
      {
        "l": "Item 2",
        "r": "regional economic integration"
      },
      {
        "l": "Item 3",
        "r": "trading alliances"
      },
      {
        "l": "Item 4",
        "r": "global environment"
      },
      {
        "l": "Item 5",
        "r": "social responsibilities of business"
      },
      {
        "l": "Item 6",
        "r": "ethics"
      },
      {
        "l": "Item 7",
        "r": "systems"
      },
      {
        "l": "Item 8",
        "r": "environment"
      },
      {
        "l": "Item 9",
        "r": "government regulation"
      },
      {
        "l": "Item 10",
        "r": "management theories"
      },
      {
        "l": "Item 11",
        "r": "management theorists"
      },
      {
        "l": "Item 12",
        "r": "e-business"
      },
      {
        "l": "Item 13",
        "r": "creativity"
      },
      {
        "l": "Item 14",
        "r": "innovation"
      }
    ]
  },
  {
    "cat": "Principles of Marketing",
    "title": "Role of Marketing in Society (8%-13%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Principles of Marketing covering Role of Marketing in Society (8%-13%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "ethics"
      },
      {
        "l": "Item 2",
        "r": "nonprofit marketing"
      },
      {
        "l": "Item 3",
        "r": "international marketing"
      }
    ]
  },
  {
    "cat": "Principles of Marketing",
    "title": "Role of Marketing in an Organization (17%-24%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Principles of Marketing covering Role of Marketing in an Organization (17%-24%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "marketing concept"
      },
      {
        "l": "Item 2",
        "r": "marketing strategy"
      },
      {
        "l": "Item 3",
        "r": "marketing environment"
      },
      {
        "l": "Item 4",
        "r": "marketing decision system"
      },
      {
        "l": "Item 5",
        "r": "marketing research"
      },
      {
        "l": "Item 6",
        "r": "marketing information system"
      }
    ]
  },
  {
    "cat": "Principles of Marketing",
    "title": "Target Marketing (22%-27%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Principles of Marketing covering Target Marketing (22%-27%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "consumer behavior"
      },
      {
        "l": "Item 2",
        "r": "segmentation"
      },
      {
        "l": "Item 3",
        "r": "positioning"
      },
      {
        "l": "Item 4",
        "r": "business-to-business markets"
      }
    ]
  },
  {
    "cat": "Principles of Marketing",
    "title": "Marketing Mix (40%-50%)",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Principles of Marketing covering Marketing Mix (40%-50%).",
    "examples": [
      {
        "l": "Item 1",
        "r": "product and service management"
      },
      {
        "l": "Item 2",
        "r": "branding"
      },
      {
        "l": "Item 3",
        "r": "pricing policies"
      },
      {
        "l": "Item 4",
        "r": "distribution channels"
      },
      {
        "l": "Item 5",
        "r": "logistics"
      },
      {
        "l": "Item 6",
        "r": "integrated marketing communications"
      },
      {
        "l": "Item 7",
        "r": "promotion"
      },
      {
        "l": "Item 8",
        "r": "marketing in e-commerce"
      }
    ]
  },
  {
    "cat": "Analyzing and Interpreting Literature",
    "title": "Core Literary Abilities",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Analyzing and Interpreting Literature covering Core Literary Abilities.",
    "examples": [
      {
        "l": "Item 1",
        "r": "reading prose with understanding"
      },
      {
        "l": "Item 2",
        "r": "reading poetry with understanding"
      },
      {
        "l": "Item 3",
        "r": "reading drama with understanding"
      },
      {
        "l": "Item 4",
        "r": "analyzing elements of a literary passage"
      },
      {
        "l": "Item 5",
        "r": "nuances of meaning"
      },
      {
        "l": "Item 6",
        "r": "tone"
      },
      {
        "l": "Item 7",
        "r": "imagery"
      },
      {
        "l": "Item 8",
        "r": "style"
      },
      {
        "l": "Item 9",
        "r": "interpreting metaphors"
      },
      {
        "l": "Item 10",
        "r": "rhetorical devices"
      },
      {
        "l": "Item 11",
        "r": "stylistic devices"
      },
      {
        "l": "Item 12",
        "r": "parts and wholes relationships"
      },
      {
        "l": "Item 13",
        "r": "speaker attitudes"
      },
      {
        "l": "Item 14",
        "r": "author attitudes"
      },
      {
        "l": "Item 15",
        "r": "means of literary effects"
      },
      {
        "l": "Item 16",
        "r": "basic literary terminology"
      }
    ]
  },
  {
    "cat": "Analyzing and Interpreting Literature",
    "title": "Genre",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Analyzing and Interpreting Literature covering Genre.",
    "examples": [
      {
        "l": "Item 1",
        "r": "poetry"
      },
      {
        "l": "Item 2",
        "r": "prose fiction"
      },
      {
        "l": "Item 3",
        "r": "prose nonfiction"
      },
      {
        "l": "Item 4",
        "r": "drama"
      }
    ]
  },
  {
    "cat": "Analyzing and Interpreting Literature",
    "title": "National Tradition",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Analyzing and Interpreting Literature covering National Tradition.",
    "examples": [
      {
        "l": "Item 1",
        "r": "British literature"
      },
      {
        "l": "Item 2",
        "r": "Postcolonial literature"
      },
      {
        "l": "Item 3",
        "r": "American literature"
      },
      {
        "l": "Item 4",
        "r": "works in translation"
      }
    ]
  },
  {
    "cat": "Analyzing and Interpreting Literature",
    "title": "Period",
    "emoji": "",
    "formula": "Topic → subtopic → practice explanation",
    "desc": "CLEP content area for Analyzing and Interpreting Literature covering Period.",
    "examples": [
      {
        "l": "Item 1",
        "r": "Classical and pre-Renaissance"
      },
      {
        "l": "Item 2",
        "r": "Renaissance and 17th Century"
      },
      {
        "l": "Item 3",
        "r": "18th and 19th Centuries"
      },
      {
        "l": "Item 4",
        "r": "20th and 21st Centuries"
      }
    ]
  }
]);
