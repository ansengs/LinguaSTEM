import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { QUICK_STEM_METHODS } from '../data/quickStemMethods';
import { STEM_TOPICS } from '../data/stemTopics';
import { Card, Chip, SectionTitle, SoftCard } from '../components/Primitives';
import { colors, sharedStyles } from '../theme/theme';

const CHEMISTRY_HANDBOOK_CARDS = [
  {
    subject: 'Periodic Trends: Radius, Ionization Energy & Electronegativity',
    area: 'Chemistry · Inorganic Foundations',
    caption: 'Periodic trends explain why atoms change size, hold electrons differently, and form predictable ions across the periodic table.',
    reality: 'These trends help predict reactivity, bond polarity, and why metals on the left behave very differently from nonmetals on the right.',
    steps: [
      'Atomic radius generally increases down a group because new electron shells are added.',
      'Atomic radius generally decreases across a period because nuclear charge increases while shielding changes little.',
      'Ionization energy and electronegativity usually increase across a period and decrease down a group.',
      'Metals tend to lose electrons; nonmetals tend to gain or share electrons.'
    ],
    example: 'Fluorine is very electronegative and forms polar bonds easily; cesium has a large radius and loses its valence electron readily.',
    formula: 'Across a period: radius ↓, IE ↑, EN ↑\nDown a group: radius ↑, IE ↓, EN ↓'
  },
  {
    subject: 'Common Ions, Oxidation Numbers & Nomenclature',
    area: 'Chemistry · Inorganic Foundations',
    caption: 'Ionic formulas are built by balancing total positive and negative charge to make a neutral compound.',
    reality: 'Naming salts, acids, and transition-metal compounds is the language used on reagent bottles and lab reports.',
    steps: [
      'Write the cation and anion with their charges.',
      'Choose subscripts so total positive charge equals total negative charge.',
      'Use parentheses when more than one polyatomic ion is needed.',
      'For transition metals, include a Roman numeral for the metal charge when required.'
    ],
    example: 'Al³⁺ and SO₄²⁻ combine as Al₂(SO₄)₃ because 2(+3) + 3(-2) = 0.',
    formula: 'Σ oxidation numbers = compound charge\nNeutral compound: total charge = 0'
  },
  {
    subject: 'Electrolysis & Faraday’s Laws',
    area: 'Chemistry · Electrochemistry',
    caption: 'Electrolysis uses electrical energy to drive a non-spontaneous redox reaction.',
    reality: 'Electrolysis is used for electroplating, metal extraction, and producing chemicals such as chlorine, hydrogen, and sodium hydroxide.',
    steps: [
      'Identify oxidation at the anode and reduction at the cathode.',
      'Find the number of electrons transferred in the half-reaction.',
      'Convert current and time into charge.',
      'Use Faraday’s constant to convert charge into moles of electrons, then product.'
    ],
    example: 'Passing 2 mol e⁻ through molten CuCl₂ produces 1 mol Cu at the cathode.',
    formula: 'Q = It\nn(e⁻) = Q / F\nF ≈ 96500 C mol⁻¹'
  },
  {
    subject: 'Galvanic Cells & Electrode Potentials',
    area: 'Chemistry · Electrochemistry',
    caption: 'A galvanic cell converts a spontaneous redox reaction into electrical energy.',
    reality: 'Batteries work by separating oxidation and reduction into two half-cells connected by a wire and salt bridge.',
    steps: [
      'Write oxidation and reduction half-equations.',
      'Use standard reduction potentials to choose cathode and anode.',
      'Electrons flow from anode to cathode through the external circuit.',
      'Calculate the standard cell potential from cathode minus anode.'
    ],
    example: 'In a zinc-copper cell, Zn is oxidized and Cu²⁺ is reduced, so electrons flow from Zn to Cu.',
    formula: 'E°cell = E°cathode − E°anode\nΔG° = −nFE°cell'
  },
  {
    subject: 'Organic Functional Groups',
    area: 'Chemistry · Organic Foundations',
    caption: 'Functional groups are the reactive parts of organic molecules and determine the family name and key reactions.',
    reality: 'Alcohols, carboxylic acids, esters, amines, and amides appear in fuels, fragrances, medicines, proteins, and plastics.',
    steps: [
      'Find the longest carbon chain or main ring.',
      'Identify the highest-priority functional group.',
      'Number the chain to give the functional group the lowest possible number.',
      'Name substituents alphabetically and add the correct suffix or prefix.'
    ],
    example: 'CH₃CH₂OH is ethanol; CH₃COOH is ethanoic acid; CH₃COOCH₃ is methyl ethanoate.',
    formula: 'Alcohol: R–OH\nAldehyde: R–CHO\nKetone: R–CO–R\nCarboxylic acid: R–COOH\nEster: R–COO–R'
  },
  {
    subject: 'Structural, Geometric & Optical Isomerism',
    area: 'Chemistry · Organic Foundations',
    caption: 'Isomers have the same molecular formula but different arrangements of atoms or different 3D orientations.',
    reality: 'Different isomers can smell different, react differently, or have very different biological effects.',
    steps: [
      'Check whether connectivity changes; if yes, it is structural isomerism.',
      'Look for restricted rotation around C=C or rings for geometric isomerism.',
      'Look for a chiral carbon bonded to four different groups for optical isomerism.',
      'Name enantiomers or cis/trans forms when needed.'
    ],
    example: 'Butane and methylpropane are structural isomers; cis-but-2-ene and trans-but-2-ene are geometric isomers.',
    formula: 'Same molecular formula ≠ same structure\nChiral center: C attached to 4 different groups'
  },
  {
    subject: 'Mole Concept & Stoichiometry',
    area: 'Chemistry · Calculations',
    caption: 'Stoichiometry connects balanced equations to masses, particles, gas volumes, and solution concentrations.',
    reality: 'Every quantitative lab calculation, from titration to yield, begins with mole ratios from the balanced equation.',
    steps: [
      'Balance the chemical equation first.',
      'Convert the known amount into moles.',
      'Use the equation coefficients as mole ratios.',
      'Convert moles of the target substance into the requested unit.'
    ],
    example: 'For 2H₂ + O₂ → 2H₂O, 2 mol H₂ reacts with 1 mol O₂ to form 2 mol H₂O.',
    formula: 'n = m / M\nN = nNA\nC = n / V\nGas at r.t.p.: V ≈ 24 dm³ mol⁻¹'
  },
  {
    subject: 'Chemical Equilibrium & Le Châtelier’s Principle',
    area: 'Chemistry · Equilibrium',
    caption: 'At equilibrium, forward and reverse reaction rates are equal, so concentrations stay constant even though reactions continue.',
    reality: 'Industrial processes such as the Haber process balance yield, rate, temperature, pressure, and cost.',
    steps: [
      'Write the equilibrium expression using products over reactants.',
      'Include only gases and aqueous species in K expressions.',
      'Predict shifts by asking how the system opposes a change.',
      'Catalysts reach equilibrium faster but do not change K or equilibrium position.'
    ],
    example: 'Increasing pressure favors the side with fewer gas moles; increasing temperature favors the endothermic direction.',
    formula: 'Kc = [products]^coeff / [reactants]^coeff\nQc compared with K predicts direction'
  },
  {
    subject: 'Acids, Bases, pH & Buffers',
    area: 'Chemistry · Equilibrium',
    caption: 'pH measures hydrogen ion concentration, while buffers resist pH change using a weak acid/base pair.',
    reality: 'Blood, shampoos, lakes, food systems, and medicines all depend on controlled acidity.',
    steps: [
      'Classify acids as H⁺ donors and bases as H⁺ acceptors.',
      'Convert between [H⁺], [OH⁻], pH, and pOH.',
      'For buffers, identify the weak acid and conjugate base pair.',
      'At half-neutralization in a weak acid titration, pH = pKa.'
    ],
    example: 'A mixture of CH₃COOH and CH₃COO⁻ resists pH change because it can remove added base or acid.',
    formula: 'pH = −log[H⁺]\npOH = −log[OH⁻]\npH + pOH = 14 at 25 °C\nKa = [H⁺][A⁻]/[HA]'
  },
  {
    subject: 'Solubility Product & Precipitation',
    area: 'Chemistry · Equilibrium',
    caption: 'Ksp measures the equilibrium between a sparingly soluble ionic solid and its dissolved ions.',
    reality: 'Precipitation reactions are used in water treatment, qualitative analysis, and removing unwanted ions.',
    steps: [
      'Write the dissolution equation for the salt.',
      'Build the Ksp expression from dissolved ion concentrations.',
      'Compare the ionic product Qsp with Ksp.',
      'If Qsp > Ksp, a precipitate forms; if Qsp < Ksp, more solid can dissolve.'
    ],
    example: 'For AgCl(s) ⇌ Ag⁺ + Cl⁻, Ksp = [Ag⁺][Cl⁻].',
    formula: 'Ksp = Π[ions]^coeff\nQsp > Ksp → precipitation'
  },
  {
    subject: 'Gas Laws & Ideal Gas Equation',
    area: 'Chemistry · Physical Chemistry',
    caption: 'Gas variables are linked by pressure, volume, temperature, and amount of substance.',
    reality: 'Gas laws explain syringes, balloons, scuba tanks, airbags, and pressure changes in sealed containers.',
    steps: [
      'Convert temperature to kelvin before using gas equations.',
      'Hold constant variables fixed to choose Boyle, Charles, or Avogadro relationships.',
      'Use PV = nRT when pressure, volume, moles, and temperature are all involved.',
      'Track units carefully so R matches the pressure and volume units.'
    ],
    example: 'At constant temperature, doubling pressure halves the volume of a gas sample.',
    formula: 'PV = nRT\nP₁V₁/T₁ = P₂V₂/T₂\nT(K) = °C + 273.15'
  },
  {
    subject: 'Thermochemistry: Enthalpy & Calorimetry',
    area: 'Chemistry · Energetics',
    caption: 'Enthalpy changes describe heat absorbed or released during chemical reactions at constant pressure.',
    reality: 'Fuel values, hand warmers, cold packs, and combustion reactions are all thermochemistry in action.',
    steps: [
      'Use the sign convention: exothermic ΔH is negative and endothermic ΔH is positive.',
      'Use calorimetry data to calculate heat transferred.',
      'Scale ΔH values according to the balanced equation.',
      'Apply Hess’s law by adding reactions and their enthalpy changes.'
    ],
    example: 'If water warms during a reaction, the reaction released heat to the surroundings.',
    formula: 'q = mcΔT\nΔHreaction = ΣΔHf(products) − ΣΔHf(reactants)'
  },
  {
    subject: 'Entropy, Gibbs Free Energy & Spontaneity',
    area: 'Chemistry · Energetics',
    caption: 'Gibbs free energy combines enthalpy, entropy, and temperature to predict whether a process is spontaneous.',
    reality: 'Free-energy calculations explain why some reactions need heating, coupling, electricity, or catalysts to be useful.',
    steps: [
      'Find whether the reaction absorbs or releases heat from ΔH.',
      'Estimate disorder change from gas moles, phase changes, and molecular complexity.',
      'Calculate ΔG at the given temperature.',
      'A negative ΔG indicates a thermodynamically spontaneous process.'
    ],
    example: 'Melting ice is favored at higher temperature because the entropy term becomes more important.',
    formula: 'ΔG = ΔH − TΔS\nΔG < 0 → spontaneous\nΔG = 0 → equilibrium'
  },
  {
    subject: 'Atomic Structure & Electron Configuration',
    area: 'Chemistry · Atomic Structure',
    caption: 'Electron configuration shows how electrons fill shells and subshells around the nucleus.',
    reality: 'Electron arrangements explain ion formation, spectra, magnetic behavior, and periodic-table blocks.',
    steps: [
      'Use atomic number to find the number of electrons in a neutral atom.',
      'Fill orbitals in increasing energy order using the Aufbau principle.',
      'Apply Pauli exclusion: each orbital holds at most two opposite-spin electrons.',
      'Apply Hund’s rule: singly occupy equal-energy orbitals before pairing.'
    ],
    example: 'Carbon has 6 electrons: 1s² 2s² 2p².',
    formula: 's holds 2, p holds 6, d holds 10, f holds 14\nOrder: 1s 2s 2p 3s 3p 4s 3d 4p'
  },
  {
    subject: 'Quantum Numbers & Orbitals',
    area: 'Chemistry · Atomic Structure',
    caption: 'Quantum numbers describe the shell, subshell, orbital orientation, and spin of an electron.',
    reality: 'Orbital shapes and energies explain bonding, molecular geometry, spectra, and transition-metal behavior.',
    steps: [
      'Use n for the principal energy level.',
      'Use l for subshell type: 0 = s, 1 = p, 2 = d, 3 = f.',
      'Use ml for orbital orientation within a subshell.',
      'Use ms for spin, either +1/2 or −1/2.'
    ],
    example: 'A 3p electron has n = 3 and l = 1.',
    formula: 'n = 1,2,3...\nl = 0 to n−1\nml = −l to +l\nms = ±1/2'
  },
  {
    subject: 'Chemical Bonding & Molecular Geometry',
    area: 'Chemistry · Bonding',
    caption: 'Bonding and shape come from electron sharing, electron-pair repulsion, and orbital overlap.',
    reality: 'Molecular shape controls boiling point, solubility, polarity, smell, toxicity, and biological activity.',
    steps: [
      'Draw the Lewis structure with correct valence electrons.',
      'Count electron domains around the central atom.',
      'Use VSEPR to predict electron-pair geometry and molecular shape.',
      'Decide polarity from bond polarity and molecular symmetry.'
    ],
    example: 'Water has two bonding pairs and two lone pairs, giving a bent shape and a polar molecule.',
    formula: '2 domains: linear\n3: trigonal planar\n4: tetrahedral\n5: trigonal bipyramidal\n6: octahedral'
  },
  {
    subject: 'Hybridization & Sigma/Pi Bonds',
    area: 'Chemistry · Bonding',
    caption: 'Hybridization links electron-domain geometry to orbital mixing and bond types.',
    reality: 'Hybridization explains why methane is tetrahedral, ethene is planar, and ethyne is linear.',
    steps: [
      'Count electron domains on the atom of interest.',
      'Assign hybridization from the number of domains.',
      'Single bonds are sigma bonds.',
      'Double and triple bonds contain one sigma bond plus pi bonds.'
    ],
    example: 'Ethene contains a C=C double bond: one σ bond and one π bond between the carbons.',
    formula: '2 domains → sp\n3 domains → sp²\n4 domains → sp³\nDouble bond = 1σ + 1π\nTriple bond = 1σ + 2π'
  },
  {
    subject: 'Reaction Rates & Rate Laws',
    area: 'Chemistry · Kinetics',
    caption: 'Kinetics studies how fast reactions happen and how concentration affects rate.',
    reality: 'Rate laws guide catalyst design, shelf-life predictions, industrial reactors, and safety controls.',
    steps: [
      'Use experimental data to determine reaction order with respect to each reactant.',
      'Add individual orders to get the overall order.',
      'Use the rate constant k with the correct units for the overall order.',
      'Remember that a catalyst changes the pathway and lowers activation energy.'
    ],
    example: 'If doubling [A] doubles the rate, the reaction is first order in A.',
    formula: 'rate = k[A]^m[B]^n\noverall order = m + n'
  },
  {
    subject: 'Arrhenius Equation & Activation Energy',
    area: 'Chemistry · Kinetics',
    caption: 'The Arrhenius equation connects temperature, activation energy, and the rate constant.',
    reality: 'Food spoils faster when warm because more molecules have enough energy to react.',
    steps: [
      'Identify activation energy as the energy barrier for reaction.',
      'Increasing temperature increases the fraction of particles above Ea.',
      'Catalysts lower Ea without being consumed.',
      'Use Arrhenius plots to find Ea from the slope.'
    ],
    example: 'A reaction generally speeds up when temperature rises because k increases.',
    formula: 'k = Ae^(−Ea/RT)\nln k = −Ea/R · 1/T + ln A'
  },
  {
    subject: 'Redox Reactions & Balancing Half-Equations',
    area: 'Chemistry · Redox',
    caption: 'Redox reactions involve electron transfer: oxidation loses electrons and reduction gains electrons.',
    reality: 'Combustion, corrosion, batteries, bleaching, respiration, and metallurgy are redox processes.',
    steps: [
      'Assign oxidation numbers to identify what is oxidized and reduced.',
      'Split the reaction into oxidation and reduction half-equations.',
      'Balance atoms, then charge using electrons.',
      'Multiply half-equations so electrons cancel, then add.'
    ],
    example: 'Zn + Cu²⁺ → Zn²⁺ + Cu: zinc is oxidized and copper(II) is reduced.',
    formula: 'Oxidation: loss of e⁻\nReduction: gain of e⁻\nOIL RIG'
  },
  {
    subject: 'Organic Substitution, Addition & Elimination',
    area: 'Chemistry · Organic Reactions',
    caption: 'Organic reaction families describe how bonds break and form around carbon skeletons.',
    reality: 'These patterns are used to make solvents, polymers, fuels, medicines, dyes, and fragrances.',
    steps: [
      'Addition reactions add atoms across multiple bonds such as C=C.',
      'Substitution reactions replace one atom or group with another.',
      'Elimination reactions remove atoms or groups to form a multiple bond.',
      'Match reagents and conditions to the functional group present.'
    ],
    example: 'Ethene reacts with Br₂ by addition to form 1,2-dibromoethane.',
    formula: 'Addition: C=C → C–C\nSubstitution: R–X + Nu⁻ → R–Nu\nElimination: C–C → C=C'
  },
  {
    subject: 'Oxidation & Reduction of Organic Compounds',
    area: 'Chemistry · Organic Reactions',
    caption: 'Organic oxidation usually increases C–O bonds or decreases C–H bonds; reduction does the reverse.',
    reality: 'Alcohol oxidation, aldehyde reduction, and hydrogenation are core steps in synthesis and metabolism.',
    steps: [
      'Primary alcohols can oxidize to aldehydes and then carboxylic acids.',
      'Secondary alcohols oxidize to ketones.',
      'Alkenes can be oxidized or hydrogenated depending on reagents.',
      'Use mild or strong oxidants to control the product.'
    ],
    example: 'Ethanol can be oxidized to ethanal and then ethanoic acid.',
    formula: '1° alcohol → aldehyde → carboxylic acid\n2° alcohol → ketone\nAlkene + H₂ → alkane'
  },
  {
    subject: 'Esterification, Hydrolysis & Saponification',
    area: 'Chemistry · Organic Reactions',
    caption: 'Esters form from carboxylic acids and alcohols, and can be hydrolyzed back to their starting materials.',
    reality: 'Esters are common in fragrances and flavors; saponification is the base hydrolysis used to make soap.',
    steps: [
      'Combine a carboxylic acid and alcohol under acid catalysis for esterification.',
      'Remove water or use excess reactant to improve ester yield.',
      'Hydrolyze esters with acid or base.',
      'In base hydrolysis, the carboxylate salt forms and the reaction is effectively irreversible.'
    ],
    example: 'Ethanoic acid + ethanol ⇌ ethyl ethanoate + water.',
    formula: 'RCOOH + R′OH ⇌ RCOOR′ + H₂O\nRCOOR′ + OH⁻ → RCOO⁻ + R′OH'
  },
  {
    subject: 'Polymers & Macromolecules',
    area: 'Chemistry · Organic Reactions',
    caption: 'Polymers are large molecules made by joining many repeating monomer units.',
    reality: 'Plastics, nylon, proteins, DNA, starch, and synthetic fibers are all polymer or macromolecule systems.',
    steps: [
      'Identify the repeating unit in the polymer chain.',
      'Addition polymerization opens C=C bonds in alkene monomers.',
      'Condensation polymerization joins monomers while eliminating small molecules such as water.',
      'Relate properties to chain length, branching, cross-linking, and intermolecular forces.'
    ],
    example: 'Ethene monomers form poly(ethene) by addition polymerization.',
    formula: 'nCH₂=CH₂ → –(CH₂–CH₂)ₙ–\nCondensation: monomers → polymer + small molecule'
  },
  {
    subject: 'Spectroscopy: IR, NMR & Mass Spectrometry',
    area: 'Chemistry · Analysis',
    caption: 'Spectroscopy identifies molecules by measuring how they absorb energy or fragment.',
    reality: 'Forensic labs, pharmaceutical quality control, and environmental testing use spectra to identify unknown compounds.',
    steps: [
      'Use IR absorptions to identify key functional groups.',
      'Use NMR chemical shifts and splitting to infer hydrogen or carbon environments.',
      'Use mass spectra to find molecular mass and useful fragments.',
      'Combine evidence from multiple spectra instead of relying on a single signal.'
    ],
    example: 'A broad IR absorption near the O–H region suggests an alcohol or carboxylic acid, depending on the full spectrum.',
    formula: 'IR: functional groups\nNMR: atom environments\nMS: molecular ion and fragments'
  }
];


function FormulaCard({ item }: { item: any }) {
  const keyIdea = item.caption || (item.method ? String(item.method).split(/\.\s+/)[0] : '');
  return <View style={styles.formulaCard}>
    <View style={styles.fcHead}><Text style={styles.fcTitle}>{item.subject || item.title}</Text><Text style={styles.badge}>{item.area || item.cat || item.category}</Text></View>
    {item.svg ? <View style={styles.diagram}><SvgXml xml={item.svg} width="100%" height="100%" /></View> : null}
    {keyIdea ? <View style={styles.tldr}><Text style={styles.tldrTag}>KEY IDEA</Text><Text style={styles.tldrText}>{keyIdea.length > 160 ? `${keyIdea.slice(0, 157)}…` : keyIdea}</Text></View> : null}
    {item.reality ? <View style={styles.real}><Text style={styles.realIcon}>🌎</Text><Text style={styles.realText}><Text style={sharedStyles.smallTitle}>Real world: </Text>{item.reality}</Text></View> : null}
    {item.steps ? <><SectionTitle>Steps</SectionTitle>{item.steps.slice(0, 6).map((s: string, i: number) => <View key={i} style={styles.step}><Text style={styles.stepNum}>{i + 1}</Text><Text style={styles.stepText}>{s}</Text></View>)}</> : null}
    {item.example ? <View style={styles.example}><Text style={styles.exampleTitle}>Example</Text><Text style={styles.exampleText}>{item.example}</Text></View> : null}
    {item.formula ? <Text style={styles.formula}>{item.formula}</Text> : null}
  </View>;
}

export function FormulaLabScreen() {
  const [cat, setCat] = useState('All');
  const allCards = useMemo(() => [...CHEMISTRY_HANDBOOK_CARDS, ...QUICK_STEM_METHODS, ...STEM_TOPICS], []);
  const cats = useMemo(() => ['All', ...Array.from(new Set(allCards.map((x: any) => x.area || x.cat || x.category).filter(Boolean))).slice(0, 28)], [allCards]);
  const cards = useMemo(() => cat === 'All' ? allCards : allCards.filter((x: any) => (x.area || x.cat || x.category) === cat), [allCards, cat]);
  return <ScrollView contentContainerStyle={sharedStyles.content}>
    <Card><Text style={styles.title}>Formula Lab</Text><Text style={sharedStyles.muted}>Beginner-friendly STEM and chemistry handbook formula cards with key ideas, real-world explanations, steps, and examples.</Text>
      <View style={[sharedStyles.row, { marginTop: 8 }]}>{cats.map(c => <Chip key={c} label={c} active={cat === c} onPress={() => setCat(c)} />)}</View>
    </Card>
    {cards.map((item: any, idx: number) => <FormulaCard key={`${item.subject || item.title}-${idx}`} item={item} />)}
  </ScrollView>;
}

const styles = StyleSheet.create({
  title: { color: colors.tx, fontSize: 20, fontWeight: '900', letterSpacing: -0.3 },
  formulaCard: { backgroundColor: colors.c2, borderWidth: StyleSheet.hairlineWidth, borderColor: colors.bd, borderRadius: 14, marginBottom: 10, overflow: 'hidden', paddingBottom: 12 },
  fcHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, padding: 14, paddingBottom: 8 },
  fcTitle: { color: colors.tx, fontSize: 13, fontWeight: '800', flex: 1, lineHeight: 18 },
  badge: { color: colors.tinfo, backgroundColor: 'rgba(122,171,207,.14)', borderColor: 'rgba(122,171,207,.3)', borderWidth: StyleSheet.hairlineWidth, borderRadius: 20, paddingHorizontal: 7, paddingVertical: 2, fontSize: 9.5, overflow: 'hidden' },
  diagram: { marginHorizontal: 14, height: 150, borderRadius: 10, overflow: 'hidden', backgroundColor: 'rgba(0,0,0,.18)', borderWidth: StyleSheet.hairlineWidth, borderColor: 'rgba(122,171,207,.22)' },
  tldr: { flexDirection: 'row', gap: 8, marginHorizontal: 14, marginTop: 8, padding: 9, backgroundColor: 'rgba(122,176,96,.10)', borderLeftColor: colors.tsucc, borderLeftWidth: 3, borderRadius: 8 },
  tldrTag: { color: colors.tsucc, fontSize: 8.5, fontWeight: '900' },
  tldrText: { color: colors.tx, fontSize: 11.5, lineHeight: 16, flex: 1, fontWeight: '600' },
  real: { flexDirection: 'row', gap: 10, marginHorizontal: 14, marginTop: 10, padding: 10, backgroundColor: 'rgba(122,171,207,.10)', borderLeftColor: colors.tinfo, borderLeftWidth: 3, borderRadius: 8 },
  realIcon: { fontSize: 18 },
  realText: { color: colors.tx, fontSize: 11.5, lineHeight: 17, flex: 1 },
  step: { flexDirection: 'row', gap: 9, alignItems: 'flex-start', marginHorizontal: 14, marginBottom: 6, padding: 6, backgroundColor: 'rgba(255,255,255,.02)', borderRadius: 6 },
  stepNum: { color: colors.tinfo, minWidth: 20, height: 20, borderRadius: 10, textAlign: 'center', paddingTop: 2, backgroundColor: 'rgba(122,171,207,.18)', fontSize: 10, fontWeight: '800' },
  stepText: { color: colors.tx, fontSize: 11.5, lineHeight: 17, flex: 1 },
  example: { marginHorizontal: 14, marginTop: 4, backgroundColor: 'rgba(122,176,96,.12)', borderColor: 'rgba(122,176,96,.32)', borderWidth: StyleSheet.hairlineWidth, borderRadius: 8, padding: 10 },
  exampleTitle: { color: colors.tsucc, fontSize: 10, fontWeight: '900', textTransform: 'uppercase', marginBottom: 4 },
  exampleText: { color: colors.tx, fontSize: 11.5, lineHeight: 17 },
  formula: { color: '#9ecef0', backgroundColor: 'rgba(0,0,0,.30)', marginHorizontal: 14, marginTop: 8, borderRadius: 7, padding: 10, fontFamily: 'Menlo', fontSize: 11, lineHeight: 17 },
});
