// 1. String-Datentyp anwenden
let name1: string = "Baktash Khan";
console.log(name1);

// 2. Verschiedene String-Schreibweisen
let text1: string = "Hallo";
let text2: string = 'Welt';
let text3: string = `Hallo ${name1}`;

// 3. Umwandlung in String
let zahl: number = 100;
let textVonZahl: string = zahl.toString();

let wahr: boolean = true;
let textVonBool: string = String(wahr);

// 4. Boolean-Datentyp anwenden
let istAktiv: boolean = true;
let status1: boolean = true;
let status2: boolean = false;

// 5. Typinferenz und Typprüfung
let preis = 19.99;       // automatisch: number
// preis = "zwanzig";    // Fehler

let flag: boolean;
flag = true;
// flag = "ja";          //  Fehler

// 6. Ausgabe
console.log(name1, text1, textVonZahl, istAktiv, status1);
