function zeigeElement<T>(wert: T): T {
  return wert;
}
console.log(zeigeElement<string>("Hallo"));      // "Hallo"
console.log(zeigeElement<number>(42));           // 42
console.log(zeigeElement<boolean>(true));        // true

console.log("++++++++++++++++++++++++++++++++++++++")

const zeige = <T>(input: T): T => input;
console.log(zeige("Text"));       // "Text"
console.log(zeige([1, 2, 3]));    // [1, 2, 3]

console.log("++++++++++++++++++++++++++++++++++++++")

function zeigeAlle<T>(elemente: T[]): void {
  elemente.forEach((el) => console.log(el));
}
zeigeAlle<string>(["Anna", "Ben", "Clara"]);
zeigeAlle<number>([10, 20, 30]);

console.log("++++++++++++++++++++++++++++++++++++++")

function zeigeInfo1<T>(objekt: T): void {
  console.log("Objektinhalt:", objekt);
}
zeigeInfo1({ name: "Hanna", alter: 25 });

zeigeInfo1({ produkt: "Laptop", preis: 1299, lagernd: true });
