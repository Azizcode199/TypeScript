/**
 * Repräsentiert eine Person mit Vorname, Nachname und Alter.
 */
class Person_1 {
  // === Statische Variable ===
  static anzahlPersonen: number = 0;

  // === Instanzvariablen ===
  private vorname: string;
  private nachname: string;
  private alter: number;


  constructor(vorname: string, nachname: string, alter: number) {
    this.vorname = vorname;
    this.nachname = nachname;
    this.alter = alter;
    Person_1.anzahlPersonen++; // zählt, wie viele Personen erstellt wurden
  }

  /**
   * Gibt den vollständigen Namen zurück.
   */
  public getVollerName(): string {
    return `${this.vorname} ${this.nachname}`;
  }

  /**
   * Gibt das Alter zurück.
   */
  public getAlter(): number {
    return this.alter;
  }

  /**
   * Setzt ein neues Alter, wenn gültig.
   */
  public setAlter(alter: number): void {
    if (alter >= 0) {
      this.alter = alter;
    } else {
      throw new Error("Alter darf nicht negativ sein.");
    }
  }

  /**
   * Gibt eine Vorstellung der Person in der Konsole aus.
   */
  public vorstellen(): void {
    console.log(`Hallo, mein Name ist ${this.getVollerName()} und ich bin ${this.alter} Jahre alt.`);
  }

  // === Statische Methode ===
  /**
   * Gibt die Anzahl der erstellten Personen zurück.
   */
  static gibAnzahlPersonen(): number {
    return Person_1.anzahlPersonen;
  }

  // === Statischer Initialisierungsblock (seit TypeScript 4.4) ===
  static {
    console.log("Die Klasse Person wurde geladen.");
  }
}

// === Beispielverwendung === Objekte (Instanzen) 
const p1 = new Person_1("Anna", "Schmidt", 25);
const p2 = new Person_1("Tom", "Meier", 40);

p1.vorstellen();
p2.vorstellen();

console.log(`Es wurden ${Person_1.gibAnzahlPersonen()} Personen erstellt.`);
