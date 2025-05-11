// Funktion: Berechnet den Preis für Artikel
function berechneArtikelPreis(anzahl: number, preisProStück: number, text?: string) {
  const gesamt = preisProStück * anzahl;
  if (text) {
    console.log(text + gesamt);
  } else {
    console.log(gesamt);
  }
}

// Aufrufe:
berechneArtikelPreis(50, 12, "Gesamtpreis ist: ");
berechneArtikelPreis(50, 52);

// Funktion: Gibt einen normalen Wert aus (mit genauem Typ)
function zeigeDaten(daten: string | number | boolean) {
  console.log(daten);
}

zeigeDaten("Hanna");

// Funktion: Gibt einen beliebigen Wert aus (unsicherer Typ)
function zeigeBeliebig(daten: any) {
  console.log("Empfangene Daten:", daten);
}

// Zahl
zeigeBeliebig(150);

// Text
zeigeBeliebig("Hallo!");

// Array
zeigeBeliebig(["Apfel", "Banane"]);

// Objekt
zeigeBeliebig({ name: "Anna", alter: 30 });

// Boolean
zeigeBeliebig(true);

