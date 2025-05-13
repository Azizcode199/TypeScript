// 1. What is type?
// In TypeScript ist type ein Alias (also ein Name), den du einem beliebigen Datentyp geben kannst. 
// Es ist eine Möglichkeit, komplexe Strukturen zu benennen.

type UserID = string;
type Age = number;

// 2. Define type

type User = {
  name: string;
  age: number;
};

type Admin3 = User & { role: string };

// 3. How to use type

const user1: User = {
  name: "Hanna",
  age: 23
};

function greet(user: User): string {
  return `Hello, ${user.name}`;
}


type Status = "online" | "offline" | "idle";
type ID = string | number;


console.log("----------------------------------------")
type Lehrer = {
  name: string;
  fach: string;
  istVollzeit: boolean;
  adresse: {
    stadt: string;
    straße: string;
    plz: number;
  };
};

const lehrer1: Lehrer = {
  name: "Frau Schneider",
  fach: "Deutsch",
  istVollzeit: true,
  adresse: {
    stadt: "Berlin",
    straße: "Schulweg 7",
    plz: 10115,
  },
};

const lehrer2: Lehrer = {
  name: "Herr Wagner",
  fach: "Physik",
  istVollzeit: false,
  adresse: {
    stadt: "Hamburg",
    straße: "Wissenschaftsstraße 12",
    plz: 20095,
  },
};

const lehrerListe: Lehrer[] = [lehrer1, lehrer2];

lehrerListe.forEach((lehrer) => {
  console.log(`${lehrer.name} unterrichtet ${lehrer.fach} in ${lehrer.adresse.stadt}.`);
});


console.log("--------nächte Beispiele ----------")
type Auto = {
  marke: string;
  modell: string;
  baujahr: number;
  eigentuemer: {
    name: string;
    wohnort: string;
  };
};

const auto1: Auto = {
  marke: "Volkswagen",
  modell: "Golf",
  baujahr: 2020,
  eigentuemer: {
    name: "Anna Müller",
    wohnort: "München",
  },
};

console.log(`${auto1.eigentuemer.name} besitzt einen ${auto1.marke} ${auto1.modell} aus dem Jahr ${auto1.baujahr}.`);


console.log("------------ Nächstes Beispiel: Kleidung und Gesamtkosten ------------");

type Kleidung = {
  artikel: string;
  preis: number;
  menge: number;
};

const käufer1: Kleidung = {
  artikel: "Hose",
  preis: 350,
  menge: 10,
};

const berechneGesamtkosten = (kunde: Kleidung): string => {
  const gesamt = kunde.preis * kunde.menge;
  return `🧾 Artikel: ${kunde.artikel} | Stückpreis: ${kunde.preis}€ | Menge: ${kunde.menge} → Gesamtkosten: ${gesamt}€`;
};

console.log(berechneGesamtkosten(käufer1));
