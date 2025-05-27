//  Basisklasse
class Person_2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  begruessung(): void {
    console.log(`Hallo, ich heiße ${this.name}.`);
  }
}

// Abgeleitete Klasse
class Student_3 extends Person_2 {
  matrikelnummer: number;

  constructor(name: string, matrikelnummer: number) {
    super(name); // ruft den Konstruktor der Basisklasse auf
    this.matrikelnummer = matrikelnummer;
  }

  // Methode überschreiben
  override begruessung(): void {
    super.begruessung(); // ruft die Methode der Basisklasse auf
    console.log(`Meine Matrikelnummer ist ${this.matrikelnummer}.`);
  }
}

// Test
const s1 = new Student_3("Anna", 123456);
s1.begruessung();
