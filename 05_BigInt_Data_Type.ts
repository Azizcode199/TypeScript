// Gerne! Hier kommt eine einfache Erklärung auf **Deutsch** zu **`BigInt` in TypeScript**, mit **Alltagsbeispielen** zu jedem Punkt aus dem Bild:

// 🔢 1. What is bigint
// 🔹 Deutsch: `bigint` ist ein spezieller Datentyp in TypeScript/JavaScript, 
// mit dem man **sehr große Zahlen** speichern kann – größer als `Number.MAX_SAFE_INTEGER`.
// ➡️ Zahlen mit `n` am Ende** gehören zum Typ `bigint`.

// 📦 Beispiel:

var bignumber: bigint= 9007199254740993n;
var x =1n
var y =2n
console.log(bignumber+x+y)
console.log(bignumber+y)

// Gerne! Hier ist die Erklärung aus dem Bild auf **Deutsch** – mit **Alltagsbeispielen** – speziell für **TypeScript und `BigInt`**:



// ❓ Warum `BigInt`?

// 🧠 Erklärung:

// In JavaScript und TypeScript gibt es eine Grenze für normale Zahlen (`number`):

// Number.MAX_SAFE_INTEGER = 2^53 - 1 = 9007199254740991

// 🔹 Das ist die **größte Zahl**, die **genau** dargestellt werden kann.
// 🔸 Wenn du darüber gehst, entstehen **Rundungs- und Genauigkeitsfehler**.



// 🧪 Beispiel mit `number` (Fehler!):

 let großeZahl1 = 107199254740993;
// console.log(großeZahl1); // Ausgabe: 9007199254740992 ❌ falsch!



// ✅ Lösung mit `BigInt`:

// let großeZahl2: bigint = 9007199254740993n;
// console.log(großeZahl); // Ausgabe: 9007199254740993 ✅ korrekt!
// ```

// ---

// 📦 Alltagsbeispiel:

// Stell dir vor, du arbeitest mit:

// * Bankkonten in Billionenhöhe
// * Blockchain-Transaktionen
// * Datenbank-IDs mit vielen Ziffern

// Dann reicht `number` nicht mehr – du brauchst `bigint`.



//🚫 Wichtig:

// Du kannst **`number` und `bigint` nicht direkt kombinieren**:


// let a2: bigint = 10n;
// let b3: number = 5;
// // console.log(a + b); ❌ Fehler!


// Verwende `bigint`, wenn du **große Ganzzahlen ohne Genauigkeitsverlust** brauchst.



// Möchtest du eine fertige Übungsdatei mit allen `bigint`-Beispielen zum Ausprobieren?


// ---

// ⏱️ **2. When we should use it**

// 🔹 **Deutsch:** Verwende `bigint`, wenn du mit **sehr großen Zahlen** arbeitest, z. B.:

// * Kontostände mit Milliarden
// * Blockchain-IDs
// * große Zeitstempel

// 📦 **Beispiel:**

// ```ts
// let blockchainID: bigint = 987654321987654321987654321n;
// ```

// ---

// ### 🧪 **3. Example**

// 🔹 **Deutsch:** So benutzt du `bigint` in einer Rechnung.

// 📦 **Beispiel:**

// ```ts
// let a: bigint = 1000000000000000000000n;
// let b: bigint = 2000000000000000000000n;
// let summe = a + b;
// console.log(summe); // 3000000000000000000000n
// ```

// ---

// ### ⚠️ **4. Mixing issue**

// 🔹 **Deutsch:** Du **kannst `number` und `bigint` nicht mischen** – TypeScript zeigt einen Fehler.

// ❌ **Falsch:**

// ```ts
// let a: bigint = 10n;
// let b: number = 5;
// let sum = a + b; // ❌ Fehler: Kann nicht bigint + number
// ```

// ✅ **Richtig:**

// ```ts
// let a: bigint = 10n;
// let b: bigint = 5n;
// let sum = a + b;
// ```


// ❓5. Interview Questions

// 🔹 Typische Fragen im Bewerbungsgespräch:

// * Was ist `bigint`?
// * Warum braucht man es?
// * Kann man `bigint` und `number` mischen?

// 🧠 Kurze Antwort:

// > "`bigint` ist für extrem große Ganzzahlen. Es ist **nicht kombinierbar** mit normalen `number`-Werten."

// ✅ Zusammenfassung in Alltagssprache:**

// Stell dir vor, du musst mit **Bankbeträgen in Milliardenhöhe** oder **großen Identifikationsnummern** arbeiten – dann ist `bigint` deine sichere Lösung.

