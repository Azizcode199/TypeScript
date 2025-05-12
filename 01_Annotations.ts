// Mastering Type Annotations
// Annotations in TypeScript sind Hinweise, mit denen du sagst, welchen Typ eine Variable, 
// Funktion oder Parameter haben soll.

// Funktion zur Addition von zwei Zahlen mit klarer Typangabe
function sum(a: number, b: number): number {
  return a + b;
}

// Funktionsaufruf mit Beispielwerten
const result: number = sum(5, 4);

// Ausgabe des Ergebnisses
console.log(`Die Summe ist: ${result}`);

// Pfeilfunktion zur Multiplikation von zwei Zahlen
const multiply = (a: number, b: number): number => {
    return a * b;
}
// Ausgabe des Ergebnisses
console.log(`Das Ergebnis ist: ${multiply(5, 4)}`);













