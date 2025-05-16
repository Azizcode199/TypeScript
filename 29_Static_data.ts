class MatheRechner {
  // Statische Variable – gehört zur Klasse, nicht zu einem Objekt
  static version: string = "MatheRechner v1.0 – Kurz, klar und static";

  // Statische Methoden – direkt über die Klasse aufrufbar
  static addiere(x: number, y: number): number {
    return x + y;
  }

  static subtrahiere(x: number, y: number): number {
    return x - y;
  }

  static multipliziere(x: number, y: number): number {
    return x * y;
  }

  static dividiere(x: number, y: number): number {
    if (y === 0) {
      console.log("Division durch 0 ist nicht erlaubt.");
      return NaN;
    }
    return x / y;
  }
}

console.log("Version:", MatheRechner.version);

console.log("5 + 7 =", MatheRechner.addiere(5, 7));
console.log("10 - 3 =", MatheRechner.subtrahiere(10, 3));
console.log("4 × 6 =", MatheRechner.multipliziere(4, 6));
console.log("20 ÷ 4 =", MatheRechner.dividiere(20, 4));
console.log("10 ÷ 0 =", MatheRechner.dividiere(10, 0)); 
