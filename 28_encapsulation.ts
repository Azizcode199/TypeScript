class BankKonto {
  protected kontoinhaber: string;           
  private _kontostand: number = 0;          

  constructor(name: string, anfangsBetrag: number) {
    this.kontoinhaber = name;
    this._kontostand = anfangsBetrag;
  }

  //  Getter für Kontostand (lesen)
  public get kontostand(): number {
    return this._kontostand;
  }

  //  Setter für Kontostand (setzen – mit Kontrolle)
  public set kontostand(betrag: number) {
    if (betrag >= 0) {
      this._kontostand = betrag;
    } else {
      console.log("Negativer Kontostand ist nicht erlaubt.");
    }
  }

  public anzeigen(): void {
    console.log(`${this.kontoinhaber} hat ${this._kontostand}€ auf dem Konto.`);
  }
}

class SparKonto extends BankKonto {
  private zinssatz: number;

  constructor(name: string, anfangsBetrag: number, zinssatz: number) {
    super(name, anfangsBetrag);         // ruft Konstruktor der Elternklasse auf
    this.zinssatz = zinssatz;
  }

  public zinsenBuchen(): void {
    const zinsen = this.kontostand * this.zinssatz;
    this.kontostand = this.kontostand + zinsen;
    console.log(`Zinsen (${this.zinssatz * 100}%) wurden gutgeschrieben.`);
  }
}

const konto1 = new SparKonto("Anna", 1000, 0.05); // 5% Zinsen
konto1.anzeigen();           // Anna hat 1000€ auf dem Konto.
konto1.zinsenBuchen();       // Zinsen (5%) wurden gutgeschrieben.
konto1.anzeigen();           // Anna hat 1050€ auf dem Konto.

konto1.kontostand = -115;    // Negativer Kontostand ist nicht erlaubt.
console.log(konto1.kontostand); // 1050
