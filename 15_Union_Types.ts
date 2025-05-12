// 🧩 Was ist ein Union Type?
// Ein Union Type bedeutet:
// Eine Variable darf mehr als einen Typ haben.
// Man verwendet das Symbol | (englisch: "oder")

let daten: string | number | [];

daten = "Hallo"; //  erlaubt
daten = 123; //  auch erlaubt
daten = [];
// daten = true;   //  nicht erlaubt – kein boolean erlaubt!

console.log(daten);

// 1. Mit Variablen verwenden:
let preis12: number | string;

preis12 = 1500;
preis12 = "auf Anfrage";

console.log("---------Mit Funktions-Parametern:---------");
// 2. Mit Funktions-Parametern:
function zeigeDaten1(wert: string | number) {
  console.log("Wert ist:", wert);
}

zeigeDaten1("Hallo");
zeigeDaten1(99);

console.log("-------Mit Rückgabewert (return)-------");
// 3. Mit Rückgabewert (return):
function verdopple(x: number | string): number | string {
  if (typeof x === "number") {
    return x * 2; // z. B. 10 → 20
  } else {
    return x + x; // z. B. "Hi" → "HiHi"
  }
}

console.log(verdopple("hi")); // ✅ Rückgabe: "lovelove"
console.log(verdopple(77));
console.log("---------- Mit Type-Check (typeof prüfen) ------------");
// :
function verarbeite(eingabe: string | number) {
  if (typeof eingabe === "string") {
    console.log("Text in Groß:", eingabe.toUpperCase());
  } else {
    console.log("Zahl x 2:", eingabe * 2);
  }
}

verarbeite("Angebot");
verarbeite(555);

console.log("Nächstes Beispiel");

// Funktion: Gibt Produktnamen zurück oder die Artikelanzahl
function gibArtikelOderAnzahl(): number | string[] {
  let artikelAnzahl = 1;

  if (artikelAnzahl < 15) {
    return ["Laptop", "Computer", "Tablet"];
  } else {
    return artikelAnzahl;
  }
}

// Funktion aufrufen und Ergebnis anzeigen
console.log(gibArtikelOderAnzahl());

console.log("Nächstes Beispiel");

function benutzerInfo(
  benutzer: string | number | boolean | string[] | { [key: string]: any }): string {
  if (typeof benutzer === "string") {
    return `Benutzername ist: ${benutzer}`;
  } else if (typeof benutzer === "number") {
    return `Benutzeralter ist: ${benutzer}`;
  } else if (typeof benutzer === "boolean") {
    return `Benutzerstatus ist: ${benutzer ? "aktiv" : "inaktiv"}`;
  } else if (Array.isArray(benutzer)) {
    return `Benutzerliste: ${benutzer.join(", ")}`;
  } else if (typeof benutzer === "object") {
    return `Benutzerdaten: ${JSON.stringify(benutzer)}`;
  } else {
    return "Unbekannter Typ";
  }
}

// Testaufrufe:
console.log(benutzerInfo("Hanna")); // string
console.log(benutzerInfo(30)); // number
console.log(benutzerInfo(true)); // boolean
console.log(benutzerInfo(["Anna", "Lea", "Mia", "Lukas", "Paul", "Jonas"])); // array
console.log(benutzerInfo({ name: "Anna", age: 25, stadt: "Hamburg" })); // object
