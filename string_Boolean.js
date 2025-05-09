var name1 = "Baktash khan";
console.log(name1);
//  2. Ways to define string
// Erklärung: Es gibt mehrere Arten, einen String zu schreiben
var text1 = "Hallo"; // mit doppelten Anführungszeichen
var text2 = 'Welt'; // mit einfachen Anführungszeichen
var text3 = "Hallo ".concat(name1); // mit Template-String
// 3. Convert in string data type
// Erklärung: Eine Zahl oder boolean in Text umwandeln
var zahl = 100;
var textVonZahl = zahl.toString(); // "100"
var wahr = true;
var textVonBool = String(wahr); // "true"
// 4. Apply boolean data type
// Erklärung: Wahr/Falsch-Wert mit Typ boolean
var istAktiv = true;
// 5. Possible boolean values
// Erklärung: Es gibt nur zwei gültige Werte für boolean
var status1 = true;
var status2 = false;
// 6. Inference and declaration issues
// Erklärung: TypeScript erkennt Typ automatisch, aber Achtung bei falscher Zuweisung
var preis = 19.99; // TypeScript erkennt: number
// preis = "zwanzig";    // Fehler: string ist nicht erlaubt
var flag;
flag = true;
// flag = "ja";          //  Fehler: string ist kein boolean
// 7. Run with HTML file
// Erklärung: TypeScript wird zu JavaScript kompiliert und im HTML verwendet
// <!-- user.html -->
// <script src="app.js"></script>
console.log(name1, text1, textVonZahl, istAktiv, status1);
