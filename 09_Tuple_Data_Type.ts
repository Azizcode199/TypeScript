var mitarbeiter: string[] = ['Anna', 'Lea', 'Lena', 'Marie', 'Emma']
var mitarbeiter1: [string, number, boolean, number] = ['Anna', 25,true, 3500]
console.log(mitarbeiter1)

mitarbeiter1.push('Hamburg'); //  Kein Fehler zur Compile-Zeit

console.log(mitarbeiter1)

const mitarbeiter2: readonly [string, number, boolean, number] = ['Anna', 25, true, 3500];

// mitarbeiter2.push('Hamburg'); //  Jetzt gibt es einen Fehler!
console.log("-------------------Tuple---------------------------")
type EntwicklerDaten = readonly[ 
  string,   // Name
  number,   // Alter
  string,   // Beruf
  number,   // Gehalt
  string,   // Handy
  boolean   // Führungsverantwortung
];

const zeigeInfo = (entwickler: EntwicklerDaten): void => {
  const [name, alter, beruf, gehalt, handy, istFuehrung] = entwickler;

  const grundinfo = ` Name: ${name} | Alter: ${alter} | Beruf: ${beruf} Handy: ${handy} |  Gehalt: ${gehalt} €`;

  const fuehrungInfo = istFuehrung ? " Führungsverantwortung: Ja" : " Führungsverantwortung: Nein";

  console.log(`${grundinfo}\n${fuehrungInfo}\n`);
};

//  Entwickler 1
const entwickler1: EntwicklerDaten = [
  "Baktash",
  28,
  "Software Engineer",
  5500,
  "+49 172 1234567",
  true
];

// entwickler1.push("coding")
// console.log(entwickler1)// kein Fehler, obwohl unerwünscht

//  Entwickler 2
const entwickler2: EntwicklerDaten = [
  "Anna",
  25,
  "Frontend Developer",
  5000,
  "+49 172 3216567",
  false
];

//  Entwickler 3
const entwickler3: EntwicklerDaten = [
  "Emma",
  25,
  "Frontend Developer",
  5000,
  "+49 172 3216567",
  false
];

// Aufrufe
zeigeInfo(entwickler1);
zeigeInfo(entwickler2);
zeigeInfo(entwickler3);
