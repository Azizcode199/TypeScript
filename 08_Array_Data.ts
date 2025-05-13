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

const name4: string[] = Array.of("Anna", "Hanna","Emma")
console.log(name4)


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