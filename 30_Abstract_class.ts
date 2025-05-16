//  Abstrakte Elternklasse
abstract class Fahrzeug {
  marke: string;
  color: string;

  constructor(marke: string, color: string) {
    this.marke = marke;
    this.color = color;
  }

  // Abstrakte Methoden – müssen in jeder Kindklasse implementiert werden
  abstract fahren(): void;
  abstract tanken(): void;
}

class Auto1 extends Fahrzeug {
  constructor(marke: string, color: string) {
    super(marke, color);
  }

  fahren(): void {
    console.log(
      `${this.marke} in der Farbe ${this.color} fährt auf der Straße.`
    );
  }

  tanken(): void {
    console.log(`${this.marke} tankt Benzin an der Tankstelle`);
  }
}

class Motorrad extends Fahrzeug {
  constructor(marke: string, color: string) {
    super(marke, color);
  }

  fahren(): void {
    console.log(
      `${this.marke} in der Farbe ${this.color} fährt auf der Straße.`
    );
  }

  tanken(): void {
    console.log(`${this.marke} tankt Super Plus`);
  }
}

const bmw = new Auto1("BMW", "Rot");
bmw.fahren();
bmw.tanken();

const yamaha = new Motorrad("Yamaha", "pink");
yamaha.fahren();
yamaha.tanken();
