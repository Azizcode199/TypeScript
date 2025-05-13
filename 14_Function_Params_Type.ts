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


console.log("Verstehen von Optionalen und Standardparametern in TypeScript-Funktionen");
console.log("*****************************************************************************")

const pruefungsTag = (name: string, tag: string,id: number = 2): string => {
  return `Willkommen, Herr/Frau ${name}. Bitte erscheine am ${tag}.📝 Deine Prüfungs-ID ist ${id}. `;
};

// Aufruf der Funktion
console.log(pruefungsTag("Anna", "Montag"));
console.log("--------------************-----------------")
const bestanden = (name: string, tag: string, id?: number): string => {
  let nachricht = `🎉 Herzlichen Glückwunsch, Herr/Frau ${name}! Sie haben die Prüfung bestanden.\n`;
  nachricht += `Bitte erscheinen Sie am ${tag}, um Ihr Zeugnis abzuholen.\n`;

  if (id) {
    nachricht += `📝 Ihre Prüfungs-ID lautet: ${id}.`;
  }

  return nachricht.trim();
};

// Aufrufe
console.log(bestanden("Anna", "Montag"));
console.log(bestanden("Hann", "Montag", 3));

