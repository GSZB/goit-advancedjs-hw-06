/*
  Значення типу `unknown` не можна напряму присвоїти змінній типу `string`.
  Потрібно або звузити тип через перевірку (type guard), або скористатися
  твердженням типу (type assertion), коли ми впевнені у типі значення.
*/

let some: unknown;
some = 'Text';
let str: string;

if (typeof some === 'string') {
  str = some;
}

// Альтернатива через type assertion:
str = some as string;

export {};
