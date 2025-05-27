/**
 * Repräsentiert eine Person mit Vorname, Nachname und Alter.
 */
var Person_1 = /** @class */ (function () {
    function Person_1(vorname, nachname, alter) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.alter = alter;
        Person_1.anzahlPersonen++; // zählt, wie viele Personen erstellt wurden
    }
    /**
     * Gibt den vollständigen Namen zurück.
     */
    Person_1.prototype.getVollerName = function () {
        return "".concat(this.vorname, " ").concat(this.nachname);
    };
    /**
     * Gibt das Alter zurück.
     */
    Person_1.prototype.getAlter = function () {
        return this.alter;
    };
    /**
     * Setzt ein neues Alter, wenn gültig.
     */
    Person_1.prototype.setAlter = function (alter) {
        if (alter >= 0) {
            this.alter = alter;
        }
        else {
            throw new Error("Alter darf nicht negativ sein.");
        }
    };
    /**
     * Gibt eine Vorstellung der Person in der Konsole aus.
     */
    Person_1.prototype.vorstellen = function () {
        console.log("Hallo, mein Name ist ".concat(this.getVollerName(), " und ich bin ").concat(this.alter, " Jahre alt."));
    };
    // === Statische Methode ===
    /**
     * Gibt die Anzahl der erstellten Personen zurück.
     */
    Person_1.gibAnzahlPersonen = function () {
        return Person_1.anzahlPersonen;
    };
    // === Statische Variable ===
    Person_1.anzahlPersonen = 0;
    // === Statischer Initialisierungsblock (seit TypeScript 4.4) ===
    (function () {
        console.log("Die Klasse Person wurde geladen.");
    })();
    return Person_1;
}());
// === Beispielverwendung === Objekte (Instanzen) 
var p1 = new Person_1("Anna", "Schmidt", 25);
var p2 = new Person_1("Tom", "Meier", 40);
p1.vorstellen();
p2.vorstellen();
console.log("Es wurden ".concat(Person_1.gibAnzahlPersonen(), " Personen erstellt."));
