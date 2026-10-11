const skill = (code, title, type, options = {}) => ({ code, title, type, ...options });

export const curriculum = [
  {
    id: "nombres",
    name: "Nombres",
    icon: "🔢",
    color: "green",
    skills: [
      skill("A.1", "Compter en avant et en arrière jusqu'à 100", "sequence", { limit: 100 }),
      skill("A.2", "Lire une droite graduée jusqu'à 100", "number-line", { limit: 100 }),
      skill("A.3", "Compter en avant et en arrière jusqu'à 1 000", "sequence", { limit: 1000 }),
      skill("A.4", "Lire une droite graduée jusqu'à 1 000", "number-line", { limit: 1000 }),
      skill("A.5", "Reconnaître les nombres pairs et impairs", "parity"),
      skill("A.6", "Découvrir les nombres premiers et composés", "prime"),
    ],
  },
  {
    id: "decomposer",
    name: "Décomposer les nombres",
    icon: "🧩",
    color: "pink",
    skills: [
      skill("B.1", "Recomposer des nombres jusqu'à 99", "recompose", { limit: 99 }),
      skill("B.2", "Recomposer des nombres jusqu'à 9 999", "recompose", { limit: 9999 }),
      skill("B.3", "Trouver la valeur d'un chiffre dans un nombre", "place-value", { limit: 9999 }),
      skill("B.4", "Décomposer des nombres jusqu'à 9 999", "decompose", { limit: 9999 }),
    ],
  },
  {
    id: "comparer",
    name: "Comparer et ordonner",
    icon: "⚖️",
    color: "blue",
    skills: [
      skill("C.1", "Comparer des nombres jusqu'à 100", "compare", { limit: 100 }),
      skill("C.2", "Ranger des nombres jusqu'à 100", "order", { limit: 100 }),
      skill("C.3", "Comparer des nombres jusqu'à 1 000", "compare", { limit: 1000 }),
      skill("C.4", "Ranger des nombres jusqu'à 1 000", "order", { limit: 1000 }),
      skill("C.5", "Comparer des nombres jusqu'à 10 000", "compare", { limit: 9999 }),
      skill("C.6", "Ranger des nombres jusqu'à 10 000", "order", { limit: 9999 }),
    ],
  },
  {
    id: "suites",
    name: "Suites de nombres",
    icon: "🪜",
    color: "yellow",
    skills: [
      skill("D.1", "Compter des collections d'objets", "collection"),
      skill("D.2", "Compléter des suites jusqu'à 1 000", "sequence", { limit: 1000 }),
      skill("D.3", "Continuer une suite croissante", "sequence", { limit: 1000, direction: 1 }),
      skill("D.4", "Continuer une suite décroissante", "sequence", { limit: 1000, direction: -1 }),
    ],
  },
  {
    id: "addition",
    name: "Addition",
    icon: "➕",
    color: "green",
    skills: [
      skill("E.1", "Additionner des nombres jusqu'à 100", "addition", { limit: 100 }),
      skill("E.2", "Additionner avec une retenue", "addition-carry", { limit: 100 }),
      skill("E.3", "Poser une addition de nombres à trois chiffres", "addition", { limit: 999 }),
      skill("E.4", "Trouver le nombre manquant dans une addition", "addition-hole", { limit: 100 }),
    ],
  },
  {
    id: "soustractions",
    name: "Soustraction",
    icon: "➖",
    color: "pink",
    skills: [
      skill("G.1", "Soustraire des nombres jusqu'à 10", "subtract", { limit: 10 }),
      skill("G.2", "Compléter une soustraction jusqu'à 10", "subtract-hole", { limit: 10 }),
      skill("G.3", "Soustraire des nombres jusqu'à 18", "subtract", { limit: 18 }),
      skill("G.4", "Compléter une soustraction jusqu'à 18", "subtract-hole", { limit: 18 }),
      skill("G.5", "Trouver la moitié d'un nombre pair", "half"),
      skill("G.6", "Soustraire des dizaines entières", "subtract-tens"),
      skill("G.7", "Soustraire des centaines entières", "subtract-hundreds"),
    ],
  },
  {
    id: "soustractions-posees",
    name: "Soustractions posées",
    icon: "📝",
    color: "blue",
    skills: [
      skill("H.1", "Soustraire un chiffre à un nombre à deux chiffres, sans retenue", "vertical-subtract", { digits: 2, borrow: false }),
      skill("H.2", "Soustraire un chiffre à un nombre à deux chiffres, avec retenue", "vertical-subtract", { digits: 2, borrow: true }),
      skill("H.3", "Soustraire deux nombres à deux chiffres, sans retenue", "vertical-subtract", { digits: 2, borrow: false, twoDigits: true }),
      skill("H.4", "Soustraire deux nombres à deux chiffres, avec retenue", "vertical-subtract", { digits: 2, borrow: true, twoDigits: true }),
      skill("H.5", "Trouver le nombre manquant d'une soustraction posée", "vertical-hole"),
      skill("H.6", "Soustraire des nombres à trois chiffres", "vertical-subtract", { digits: 3, borrow: true }),
      skill("H.7", "Soustraire des nombres à quatre chiffres (défi)", "vertical-subtract", { digits: 4, borrow: true }),
    ],
  },
  {
    id: "multiplication-sens",
    name: "Comprendre la multiplication",
    icon: "🍎",
    color: "yellow",
    skills: [
      skill("I.1", "Comprendre l'addition répétée", "repeated-addition"),
      skill("I.2", "Écrire une multiplication pour des groupes égaux", "write-multiplication"),
      skill("I.3", "Former des groupes égaux et calculer leur total", "equal-groups"),
    ],
  },
  {
    id: "tables-multiplication",
    name: "Tables de multiplication",
    icon: "✖️",
    color: "green",
    skills: [
      skill("J.1", "Découvrir la table de 0", "multiply-table", { table: 0 }),
      skill("J.2", "Découvrir la table de 1", "multiply-table", { table: 1 }),
    ],
  },
  {
    id: "multiplication-posee",
    name: "Multiplication posée",
    icon: "🧮",
    color: "pink",
    skills: [
      skill("L.1", "Multiplier un nombre à deux chiffres par un chiffre", "multiply-written", { digits: 2 }),
      skill("L.2", "Multiplier un nombre à trois chiffres par un chiffre (défi)", "multiply-written", { digits: 3 }),
    ],
  },
  {
    id: "division-sens",
    name: "Comprendre la division",
    icon: "🍪",
    color: "blue",
    skills: [
      skill("M.1", "Partager en groupes égaux", "share-equal"),
      skill("M.2", "Relier multiplication et division", "multiplication-division"),
      skill("M.3", "Comprendre la division par partage", "share-equal"),
      skill("M.4", "Comprendre la division par groupement", "group-equal"),
      skill("M.5", "Vérifier une division avec une multiplication", "division-check"),
    ],
  },
  {
    id: "tables-division",
    name: "Tables de division",
    icon: "🔟",
    color: "yellow",
    skills: [
      skill("N.1", "Diviser par 1", "divide-by", { divisor: 1 }),
      skill("N.2", "Diviser par 2", "divide-by", { divisor: 2 }),
      skill("N.3", "Diviser par 3", "divide-by", { divisor: 3 }),
      skill("N.4", "Diviser par 4", "divide-by", { divisor: 4 }),
      skill("N.5", "Diviser par 5", "divide-by", { divisor: 5 }),
      skill("N.6", "Diviser par 6", "divide-by", { divisor: 6 }),
      skill("N.7", "Diviser par 7", "divide-by", { divisor: 7 }),
      skill("N.8", "Diviser par 8", "divide-by", { divisor: 8 }),
      skill("N.9", "Diviser par 9", "divide-by", { divisor: 9 }),
      skill("N.10", "Diviser par 10", "divide-by", { divisor: 10 }),
    ],
  },
  {
    id: "division",
    name: "Division",
    icon: "➗",
    color: "green",
    skills: [
      skill("O.1", "Diviser par 1, 2, 3, 4 et 5", "divide-range", { minDivisor: 1, maxDivisor: 5 }),
      skill("O.2", "Compléter une division avec un diviseur jusqu'à 5", "division-hole", { maxDivisor: 5 }),
      skill("O.3", "Diviser par 6, 7, 8 et 9", "divide-range", { minDivisor: 6, maxDivisor: 9 }),
      skill("O.4", "Diviser avec un diviseur jusqu'à 10", "divide-range", { minDivisor: 1, maxDivisor: 10 }),
      skill("O.5", "Compléter une division avec un diviseur jusqu'à 10", "division-hole", { maxDivisor: 10 }),
    ],
  },
];

export const competencyCount = curriculum.reduce((count, group) => count + group.skills.length, 0);

const formatNumber = (value) => String(value).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

function numberChoices(correct, seed, distance = 2) {
  const value = Number(correct);
  return [formatNumber(value + distance), formatNumber(Math.max(0, value - distance - 1))];
}

function makeQuestion(prompt, correct, distractors, seed) {
  const answer = String(correct);
  const uniqueDistractors = [...new Set(distractors.map(String).filter((item) => item !== answer))];
  while (uniqueDistractors.length < 2) uniqueDistractors.push(`${answer} `);
  const answers = [answer, ...uniqueDistractors.slice(0, 2)];
  for (let index = answers.length - 1; index > 0; index -= 1) {
    const swapIndex = (seed * 17 + index * 13) % (index + 1);
    [answers[index], answers[swapIndex]] = [answers[swapIndex], answers[index]];
  }
  return { prompt, correct: answer, answers };
}

function numericQuestion(prompt, answer, seed, distance = 2) {
  return makeQuestion(prompt, formatNumber(answer), numberChoices(answer, seed, distance), seed);
}

function numberInRange(seed, limit, offset = 0) {
  const max = Math.max(2, limit - offset);
  return 1 + ((seed * 37 + 11) % max);
}

function decompose(value) {
  const parts = [];
  let remaining = value;
  for (let place = 1000; place >= 1; place /= 10) {
    const digit = Math.floor(remaining / place);
    if (digit) parts.push(formatNumber(digit * place));
    remaining %= place;
  }
  return parts.length ? parts.join(" + ") : "0";
}

function makeSequence(skill, seed, line = false) {
  const steps = skill.limit > 1000 ? [10, 100, 500] : skill.limit > 100 ? [2, 5, 10, 20] : [1, 2, 5, 10];
  const step = steps[seed % steps.length];
  const direction = skill.direction || (seed % 2 === 0 ? 1 : -1);
  const start = direction > 0
    ? numberInRange(seed + 1, skill.limit - step * 4)
    : step * 4 + numberInRange(seed + 1, skill.limit - step * 4);
  const missingIndex = 2 + (seed % 2);
  const values = Array.from({ length: 5 }, (_, index) => start + direction * step * index);
  const answer = values[missingIndex];
  const prompt = line
    ? `Sur une droite graduée de ${formatNumber(start)} en ${formatNumber(step)}, quelle est la graduation n° ${missingIndex + 1} ?`
    : `Complète la suite : ${values.map((value, index) => index === missingIndex ? "?" : formatNumber(value)).join(" · ")}`;
  return numericQuestion(prompt, answer, seed, step);
}

function randomDivisor(seed, min, max) {
  return min + ((seed * 7 + 3) % (max - min + 1));
}

function generateOne(skill, seed) {
  const n = (min, max, shift = 0) => min + ((seed * 37 + shift * 19 + 11) % (max - min + 1));
  const limit = skill.limit || 100;

  switch (skill.type) {
    case "sequence":
      return makeSequence(skill, seed);
    case "number-line":
      return makeSequence(skill, seed, true);
    case "parity": {
      const correct = n(2, 40) * 2;
      const odd = correct + 1;
      const otherEven = correct + 4;
      return makeQuestion("Quel nombre est pair ?", formatNumber(correct), [formatNumber(odd), formatNumber(otherEven)], seed);
    }
    case "prime": {
      const values = [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 15, 17, 18, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37];
      const value = values[seed % values.length];
      const isPrime = value > 1 && Array.from({ length: value - 2 }, (_, index) => index + 2).every((divisor) => value % divisor !== 0);
      return makeQuestion(`Le nombre ${value} est-il premier ou composé ?`, isPrime ? "Premier" : "Composé", ["Premier", "Composé"].filter((item) => item !== (isPrime ? "Premier" : "Composé")).concat("Pair"), seed);
    }
    case "recompose": {
      const digits = limit < 100 ? 2 : n(2, 4);
      const lower = 10 ** (digits - 1);
      const value = n(lower, Math.min(limit, 10 ** digits - 1));
      const parts = decompose(value);
      const partsArray = parts.split(" + ");
      const wrongParts = [...partsArray];
      if (wrongParts.length > 1) [wrongParts[0], wrongParts[1]] = [wrongParts[1], wrongParts[0]];
      return makeQuestion(`Quel nombre obtient-on avec ${partsArray.join(" + ")} ?`, formatNumber(value), [formatNumber(value + 10), formatNumber(Math.max(0, value - 10))], seed);
    }
    case "place-value": {
      const value = n(100, limit);
      const places = [1, 10, 100, 1000].filter((place) => place <= limit);
      const place = places[seed % places.length];
      const placeName = { 1: "unités", 10: "dizaines", 100: "centaines", 1000: "milliers" }[place];
      const answer = Math.floor(value / place) % 10;
      return numericQuestion(`Dans ${formatNumber(value)}, quel est le chiffre des ${placeName} ?`, answer, seed);
    }
    case "decompose": {
      const value = n(100, limit);
      const answer = decompose(value);
      const parts = answer.split(" + ");
      const wrong = [...parts].reverse().join(" + ");
      const wrongNumber = decompose(value + 10);
      return makeQuestion(`Quelle est la décomposition de ${formatNumber(value)} ?`, answer, [wrong, wrongNumber], seed);
    }
    case "compare": {
      const first = n(1, limit);
      const second = first === limit ? first - 1 : first + n(1, Math.min(20, limit - first));
      const larger = Math.max(first, second);
      return numericQuestion(`Quel nombre est le plus grand : ${formatNumber(first)} ou ${formatNumber(second)} ?`, larger, seed);
    }
    case "order": {
      const values = [n(1, limit), n(1, limit), n(1, limit)];
      if (new Set(values).size < 3) values[2] += 1;
      const ordered = [...values].sort((a, b) => a - b);
      if (seed % 2) ordered.reverse();
      const wrongReverse = [...ordered].reverse();
      const wrongRotate = [ordered[1], ordered[2], ordered[0]];
      const direction = seed % 2 ? "décroissant" : "croissant";
      const correct = ordered.map(formatNumber).join(" · ");
      return makeQuestion(`Range ces nombres dans l'ordre ${direction} : ${values.map(formatNumber).join(", ")}.`, correct, [wrongReverse.map(formatNumber).join(" · "), wrongRotate.map(formatNumber).join(" · ")], seed);
    }
    case "collection": {
      const groups = n(2, 9);
      const each = n(2, 8, 1);
      const total = groups * each;
      return numericQuestion(`Il y a ${groups} petits paniers avec ${each} pommes dans chacun. Combien y a-t-il de pommes en tout ?`, total, seed, each);
    }
    case "addition":
    case "addition-carry": {
      const max = skill.limit || 999;
      let first = n(10, Math.floor(max / 2));
      let second = n(2, Math.floor(max / 2));
      if (skill.type === "addition-carry") {
        first = Math.floor(first / 10) * 10 + n(6, 9);
        second = Math.floor(second / 10) * 10 + n(4, 9, 1);
      }
      const total = first + second;
      return numericQuestion(`Combien font ${formatNumber(first)} + ${formatNumber(second)} ?`, total, seed, 3);
    }
    case "addition-hole": {
      const first = n(5, Math.floor(limit / 2));
      const missing = n(2, Math.floor(limit / 2));
      return numericQuestion(`${formatNumber(first)} + □ = ${formatNumber(first + missing)}. Quel nombre manque ?`, missing, seed);
    }
    case "subtract":
    case "subtract-hole": {
      const total = n(2, limit);
      const result = n(0, total - 1);
      const missing = total - result;
      return skill.type === "subtract-hole"
        ? numericQuestion(`${total} − □ = ${result}. Quel nombre manque ?`, missing, seed)
        : numericQuestion(`Combien font ${total} − ${missing} ?`, result, seed);
    }
    case "half": {
      const even = n(2, 40) * 2;
      return numericQuestion(`Quelle est la moitié de ${even} ?`, even / 2, seed);
    }
    case "subtract-tens": {
      const tens = n(2, 9);
      const subtracted = n(1, tens - 1);
      return numericQuestion(`Combien font ${tens * 10} − ${subtracted * 10} ?`, (tens - subtracted) * 10, seed, 10);
    }
    case "subtract-hundreds": {
      const hundreds = n(2, 9);
      const subtracted = n(1, hundreds - 1);
      return numericQuestion(`Combien font ${hundreds * 100} − ${subtracted * 100} ?`, (hundreds - subtracted) * 100, seed, 100);
    }
    case "vertical-subtract": {
      const digits = skill.digits || 2;
      const max = 10 ** digits - 1;
      const min = 10 ** (digits - 1);
      let first = n(min, max);
      let second = n(2, skill.twoDigits ? 80 : 9);
      if (skill.twoDigits) {
        second = n(11, 89);
        if (first < second) [first, second] = [second + 10, first];
      }
      if (skill.borrow) {
        const firstOnes = first % 10;
        const secondOnes = second % 10;
        if (firstOnes >= secondOnes) second += firstOnes - secondOnes + 1;
        if (second >= first) second = Math.max(1, first - 1);
      } else {
        second = Math.min(second, first % 10);
      }
      return numericQuestion(`Calcule ${formatNumber(first)} − ${formatNumber(second)}.`, first - second, seed, 3);
    }
    case "vertical-hole": {
      const first = n(30, 99);
      const missing = n(2, Math.min(29, first - 1));
      return numericQuestion(`${first} − □ = ${first - missing}. Quel nombre manque ?`, missing, seed);
    }
    case "repeated-addition": {
      const groups = n(2, 8);
      const each = n(2, 9, 1);
      const addition = Array.from({ length: groups }, () => each).join(" + ");
      return numericQuestion(`${addition} : combien cela fait-il ?`, groups * each, seed, each);
    }
    case "write-multiplication":
    case "equal-groups": {
      const groups = n(2, 8);
      const each = n(2, 9, 1);
      const correct = `${groups} × ${each}`;
      return skill.type === "equal-groups"
        ? numericQuestion(`Combien font ${groups} groupes de ${each} noisettes ?`, groups * each, seed, each)
        : makeQuestion(`Il y a ${groups} groupes de ${each} fleurs. Quelle multiplication les représente ?`, correct, [`${each} + ${groups}`, `${groups} + ${each}`], seed);
    }
    case "multiply-table": {
      const factor = n(0, 10);
      return numericQuestion(`${skill.table} × ${factor} = ?`, skill.table * factor, seed);
    }
    case "multiply-written": {
      const digits = skill.digits || 2;
      const value = n(10 ** (digits - 1), 10 ** digits - 1);
      const factor = n(2, 5);
      return numericQuestion(`${formatNumber(value)} × ${factor} = ?`, value * factor, seed, factor);
    }
    case "share-equal":
    case "group-equal": {
      const groups = n(2, 8);
      const each = n(2, 9, 1);
      const total = groups * each;
      return skill.type === "group-equal"
        ? numericQuestion(`On range ${total} coquillages par paquets de ${each}. Combien de paquets peut-on faire ?`, groups, seed)
        : numericQuestion(`On partage ${total} biscuits entre ${groups} enfants. Combien chacun en reçoit-il ?`, each, seed);
    }
    case "multiplication-division": {
      const groups = n(2, 8);
      const each = n(2, 9, 1);
      return makeQuestion(`4 groupes de ${each} donnent ${groups * each}. Quelle division permet de retrouver le nombre de groupes ?`, `${groups * each} ÷ ${each} = ${groups}`, [`${groups * each} + ${each}`, `${groups} ÷ ${each} = ${groups * each}`], seed);
    }
    case "division-check": {
      const divisor = n(2, 9);
      const quotient = n(2, 10, 1);
      const dividend = divisor * quotient;
      return numericQuestion(`Pour vérifier ${dividend} ÷ ${divisor} = ${quotient}, quelle multiplication fait-on ?`, dividend, seed, divisor);
    }
    case "divide-by":
    case "divide-range": {
      const divisor = skill.type === "divide-by" ? skill.divisor : randomDivisor(seed, skill.minDivisor, skill.maxDivisor);
      const quotient = n(2, 10, 1);
      return numericQuestion(`${divisor * quotient} ÷ ${divisor} = ?`, quotient, seed);
    }
    case "division-hole": {
      const divisor = randomDivisor(seed, 2, skill.maxDivisor);
      const quotient = n(2, 10, 1);
      const dividend = divisor * quotient;
      return numericQuestion(`□ ÷ ${divisor} = ${quotient}. Quel nombre manque ?`, dividend, seed, divisor);
    }
    default:
      return numericQuestion("Combien font 8 + 4 ?", 12, seed);
  }
}

export function generateQuestions(item, count = 5, seed = Date.now()) {
  return Array.from({ length: count }, (_, index) => generateOne(item, seed + index * 13));
}
