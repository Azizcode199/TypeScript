// was ist Array
// „Collection of same Data type“
// → Ein Array ist eine Sammlung von Werten, alle mit dem gleichen Datentyp (z. B. nur Zahlen, nur Strings).
// „Pre-defined“ heißt:
// ➡️ Du sagst vorher, welcher Typ im Array erlaubt ist.


// normal array
let arr: number[] = [10, 20, 30, 40, 50];    
for(let i =0; i< arr.length;i++){
    console.log(arr[i])
}   

// Array mit Konstruktor
const arr1: number[] = new Array(10, 20, 30, 40, 50);

// Variante 1: mit for...in (gibt die Indizes zurück)
for (const index in arr1) {
  console.log(`Index ${index}: Wert ${arr1[index]}`);
}

// Variante 2: mit for...of (gibt die Werte direkt zurück)
for (const value of arr1) {
  console.log(`Wert: ${value}`);
}

// Was macht Array.of()?
// Array.of() erstellt ein neues Array aus den übergebenen 
// Werten – jeder Wert wird ein eigenes Element.
// Ein Array mit bestimmten Werten erstellen
const zahlen: number[] = Array.of(10, 20, 30, 40, 50);

// Ausgabe
console.log(zahlen); //  [10, 20, 30, 40, 50]

const name4: string[] = Array.of("Anna", "Hanna", "Emma");
console.log(name4);



console.log("--------string Data Type -----")   

let names: string[] = ["Alice", "Tom", "Anna"]; 
for(let i =0; i < names.length;i++){
    console.log(names[i])
}

console.log("------------Array <string> --------")

let students : Array<string>=['bruce', 'Aliya', 'Alina']
for(let i=0; i< students.length; i++){
    console.log(students[i])
    
}
students.push("baktash")
console.log(students)
console.log("--------------Number <number>------------------")

let marks : Array<number>=[10, 20, 30, 40, 50]
for(let i=0; i< marks.length; i++){
    console.log(marks[i])
}

marks.push(6555)
console.log(marks)

console.log("----------college Student ---------------------------")

// 🔐 Merksatz:
// ReadonlyArray = Nur anschauen, nicht anfassen. 


let colleageName  : ReadonlyArray<string> = ['IT School', "Tafale School", "uni Hamburg"]
// colleageName.push("Harburg uni"); //  Fehler! Array ist readonly   Das hier ist nicht erlaubt:

console.log(colleageName)

// TypeScript Arrays – Methoden und Iterationen einfach erklärt (mit Beispielen)
// ---------------------------------------------------------------------------------------------------------------
// | Methode      | Beschreibung                                     | Beispiel                                   |
// | ------------ | ------------------------------------------------ | ------------------------------------------ |
// | `push()`     | Wert **hinten** hinzufügen                       | `zahlen.push(50)` → `[10, 20, 30, 40, 50]` |
// | `pop()`      | Letztes Element entfernen                        | `zahlen.pop()` → `[10, 20, 30]`            |
// | `shift()`    | Erstes Element entfernen                         | `zahlen.shift()` → `[20, 30, 40]`          |
// | `unshift()`  | Wert **vorn** hinzufügen                         | `zahlen.unshift(5)` → `[5, 10, 20]`        |
// | `includes()` | Prüft, ob ein Wert enthalten ist                 | `zahlen.includes(20)` → `true`             |
// | `indexOf()`  | Gibt die Position eines Werts zurück             | `zahlen.indexOf(30)` → `2`                 |
// | `slice()`    | Teilstück kopieren                               | `zahlen.slice(1, 3)` → `[20, 30]`          |
// | `splice()`   | Werte einfügen oder löschen (verändert Original) | `zahlen.splice(1, 2)` → entfernt 2 Werte   |
// ---------------------------------------------------------------------------------------------------------------


// Was macht push()?
// push() fügt einen oder mehrere Werte am Ende eines Arrays hinzu.
console.log("-----------Push()---------")
const namen: string[] = ["Anna", "Ben"];

namen.push("Clara");             // ein Wert hinzufügen
namen.push("David", "Emma");     // mehrere Werte hinzufügen

console.log(namen); // ["Anna", "Ben", "Clara", "David", "Emma"]
let lastData = namen.pop()
console.log(lastData) //pop() entfernt das letzte Element
console.log(namen)
console.log("-----------For loop ----------")
for(let i = 0; i < namen.length; i++){
    console.log(namen[i])
}
console.log("+++++++++++For of ++++++++++++++")
for(let n of namen){
    console.log(n)
}
console.log("-------ForEach--------")

namen.forEach((n: string) => {
  console.log(n);
});
console.log("---------------------------------------")
// ----------------------------------------------------------------------------
// | Methode    | Was sie macht                     | Gibt neues Array zurück? |
// | ---------- | --------------------------------- | ------------------------ |
// | `map()`    | Wandelt **jedes Element** um      | ✅ ja                    |
// | `filter()` | Behalte nur **passende Elemente** | ✅ ja                    |
// -----------------------------------------------------------------------------
// TypeScript Array: map() und filter() einfach erklärt
// 🔁 map() – Jedes Element umwandeln
// map() erstellt ein neues Array, indem jedes Element verändert wird.
console.log("---Map method---")
const zahlen2: number[] = [1, 2, 3];
const verdoppelt:number[] = zahlen2.map((x:number) => x * 2);

console.log(verdoppelt); // [2, 4, 6]

console.log("---Konvert auf To.String()")
const numbertoString = zahlen2.map((s:number) => s.toString())
console.log(numbertoString)

// filter() – Elemente herausfiltern
// filter() erstellt ein neues Array, das nur die Elemente enthält, 
// die eine Bedingung erfüllen.

console.log("---Filter ---")
const zahlen3: number[] = [1, 2, 3, 4, 5];
const gerade:number[] = zahlen3.filter((x:number) => x % 2 === 0);

console.log(gerade); // [2, 4]

console.log("noch Beispiel ")

// Was ist startsWith()?
// Die Methode startsWith() prüft, ob ein String mit einem bestimmten 
// Text beginnt.
const namen1: string[] = ["Anna", "Ben", "Alina", "Tom"];

const mitA: string[] = namen1.filter((name) => name.startsWith("A"));

console.log(mitA); // ["Anna", "Alina"]

