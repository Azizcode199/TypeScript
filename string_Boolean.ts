let name1: string = "Baktash khan";
console.log(name1)

//  2. Ways to define string
// Erklärung: Es gibt mehrere Arten, einen String zu schreiben

let text1: string = "Hallo";     // mit doppelten Anführungszeichen
let text2: string = 'Welt';      // mit einfachen Anführungszeichen
let text3: string = `Hallo ${name1}`; // mit Template-String

// 3. Convert in string data type
// Erklärung: Eine Zahl oder boolean in Text umwandeln

let zahl: number = 100;
let textVonZahl: string = zahl.toString(); // "100"

let wahr: boolean = true;
let textVonBool: string = String(wahr);    // "true"

// 4. Apply boolean data type
// Erklärung: Wahr/Falsch-Wert mit Typ boolean
let istAktiv: boolean = true;

// 5. Possible boolean values
// Erklärung: Es gibt nur zwei gültige Werte für boolean
let status1: boolean = true;
let status2: boolean = false;

// 6. Inference and declaration issues
// Erklärung: TypeScript erkennt Typ automatisch, aber Achtung bei falscher Zuweisung

let preis = 19.99;       // TypeScript erkennt: number
// preis = "zwanzig";    // Fehler: string ist nicht erlaubt

let flag: boolean;
flag = true;
// flag = "ja";          //  Fehler: string ist kein boolean

// 7. Run with HTML file
// Erklärung: TypeScript wird zu JavaScript kompiliert und im HTML verwendet

// <!-- user.html -->
// <script src="app.js"></script>
console.log(name1, text1, textVonZahl, istAktiv, status1);

