class Werkzeug {
  // public name: string;
  // public material: string;
  // public einsatzbereiche: string[]; // Array

  // constructor(name: string, material: string, einsatzbereiche: string[]) {
  //   this.name = name;
  //   this.material = material;
  //   this.einsatzbereiche = einsatzbereiche;
  // }
  
  /// diese line ist Shorthand properties 
  constructor(public name: string,public material: string,public einsatzbereiche: string[]) {}
  
  public info() {
    console.log(`${this.name} besteht aus ${this.material}.`);
    console.log(`Einsatzbereiche: ${this.einsatzbereiche.join(", ")}`);
  }
}

class Hammer extends Werkzeug {
  constructor(name: string, material: string, einsatzbereiche: string[]) {
    super(name, material, einsatzbereiche);
  }

  verwendung() {
    console.log(`${this.name} wird zum Einschlagen von Nägeln benutzt.`);
  }
}

class Schraubenzieher extends Werkzeug {
  constructor(name: string, material: string, einsatzbereiche: string[]) {
    super(name, material, einsatzbereiche);
  }

  verwendung() {
    console.log(`${this.name} wird zum Drehen von Schrauben verwendet.`);
  }
}

class Zange extends Werkzeug {
  constructor(name: string, material: string, einsatzbereiche: string[]) {
    super(name, material, einsatzbereiche);
  }

  verwendung() {
    console.log(`${this.name} wird zum Greifen oder Schneiden verwendet.`);
  }
}

const werkzeugKiste = [
  new Hammer("Vorschlaghammer", "Stahl", ["Bau", "Abriss"]),
  new Schraubenzieher("Kreuzschlitz", "Chrom", ["Elektrik", "Möbelbau"]),
  new Zange("Seitenschneider", "Edelstahl", ["Kabel", "Draht", "Feinarbeit"]),
];


for (const werkzeug of werkzeugKiste) {
  werkzeug.info();        // kommt von Elternklasse (inkl. Array!)
  werkzeug.verwendung();  // eigene Methode
}

// Objekt 1: Hammer
const hammer1 = new Hammer("Maurerhammer", "Stahl", ["Ziegel", "Nägel\n"]);
hammer1.info();         // kommt von Elternklasse Werkzeug
hammer1.verwendung();   // eigene Methode der Kindklasse Hammer

// Objekt 2: Zange
const zange1 = new Zange("Kombizange", "Edelstahl", ["Draht", "Kabel\n"]);
zange1.info();          // kommt von Elternklasse
zange1.verwendung();    // eigene Methode der Kindklasse Zange
