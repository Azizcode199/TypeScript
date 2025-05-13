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
console.log("--------------------------------------------")

const showExamInfo = (id: number, name: string): void => {
  console.log(`📘 Deine Prüfungs-ID ist: ${id}`);
  console.log(`👋 Willkommen, Herr/Frau: ${name}!`);
};

showExamInfo(1, 'Anna');

console.log('-----------isPalindrome--------------')

function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("otto"));       // true
console.log(isPalindrome("Anna"));       // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello"));      // false
