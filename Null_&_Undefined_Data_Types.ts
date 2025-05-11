// 🔹 1. What is Null Data Type
// Einfach erklärt: null bedeutet, dass eine Variable absichtlich leer ist.
// 📌 In TypeScript: null ist ein gültiger Typ.

// Beispiel:
let auto: string | null = null;


var userName: null | string = null;
var login = true;

if (login) {
    userName = "Baktash jan";
    console.log(userName);
}



// 🔹 2. How to use it
// Einfach erklärt: Du benutzt null, wenn du sagen willst: "Ich habe keinen Wert, aber vielleicht später."

// Beispiel:

let benutzername: string | null = null;
benutzername = "Ali";

// 🔹 3. What is Undefined Data Type
// Einfach erklärt: undefined bedeutet: Die Variable ist deklariert, aber hat noch keinen Wert bekommen.

// Beispiel:

let preis1: number; // automatisch undefined

// 🔹 4. How to use Undefined
// Einfach erklärt: Wenn du nur die Variable anlegst, ist sie undefined.
// Du kannst auch direkt let x: number | undefined = undefined; schreiben.

// Beispiel:

let farbe: string | undefined;
// farbe ="pink"
console.log(farbe); // undefined



// 🔹 5. Possible Values
// Einfach erklärt:
// null = absichtlich leer
// undefined = noch nichts gesetzt
// Beispiel:
let a: null = null;
let b: undefined = undefined;

// 🔹 6. Run with HTML File
// Einfach erklärt: Du kannst TypeScript in HTML einbinden, aber es muss erst zu JavaScript kompiliert werden.
// HTML + Script Beispiel:

console.log("hello world")
