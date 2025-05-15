class Sport {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  spielen() {
    console.log(`${this.name} ist ein Sport.`);
  }
}

class Fussball extends Sport {
  spielerAnzahl: number;

  constructor(name: string, spielerAnzahl: number) {
    super(name); // ruft den Konstruktor der Elternklasse auf
    this.spielerAnzahl = spielerAnzahl;
  }

  info() {
    console.log(`${this.name} wird mit ${this.spielerAnzahl} Spielern gespielt.`);
  }
}

class Basketball extends Sport {
  punkteSystem: string;

  constructor(name: string, punkteSystem: string) {
    super(name);
    this.punkteSystem = punkteSystem;
  }

  info() {
    console.log(`${this.name} hat ein Punktesystem: ${this.punkteSystem}`);
  }
}
const fussball = new Fussball("Fußball", 11);
fussball.spielen(); // von der Elternklasse
fussball.info();    // eigene Methode

const basketball = new Basketball("Basketball", "3er, 2er, Freiwurf");
basketball.spielen();
basketball.info();
