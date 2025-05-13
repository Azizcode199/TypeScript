// Boolean-Werte
let isLogin: boolean = true;
let isDone: boolean = true;
let hasUpload: boolean = false;
console.log(`Upload abgeschlossen: ${hasUpload}`);

// Übung: Prüfen, ob eine Zahl gerade ist
function isEven(num: number): boolean {
  if(num % 2 === 0){
    return true
  }else{
    return false
  }
}

// Testaufruf
console.log(`Ist 6 eine gerade Zahl: ${isEven(6)}`); // true
console.log(`Ist 7 eine gerade Zahl: ${isEven(7)}`); // false


function isDivisibleBy4And8(num: number): boolean {
  if (num % 4 === 0 && num % 8 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisibleBy4And8(32)); // true
console.log(isDivisibleBy4And8(16)); // true
console.log(isDivisibleBy4And8(12)); // false
console.log(isDivisibleBy4And8(9));  // false


// Übung 1: Ist eine Zahl negativ?
// Aufgabe:
// Schreibe eine Funktion isNegative, die prüft, ob eine Zahl kleiner als 0 ist.
function isNegative(num: number): boolean {
  return num < 0;
}

// Test:
console.log(isNegative(-5)); // true
console.log(isNegative(10)); // false

// Übung 2: Hat ein Wort mehr als 5 Buchstaben?
// Aufgabe:
// Schreibe eine Funktion isLongWord, die true zurückgibt, 
// wenn das Wort länger als 5 Zeichen ist.
function isLongWord(word: string): boolean {
  return word.length > 5;
}

// Test:
console.log(isLongWord("Hallo"));      // false
console.log(isLongWord("TypeScript")); // true


console.log('------------------Bigint------------------')
// 1. Was ist bigint?
// → Für extrem große Ganzzahlen, z. B. größer als Number.MAX_SAFE_INTEGER (9007199254740991)

let großeZahl: bigint = 9007199254740993n;
console.log(großeZahl); //  korrekt


// 2. Rechnen mit bigint
let a1: bigint = 1n;
let b1: bigint = 2n;
console.log(großeZahl + a1 + b1); // 9007199254740996n

// 3. Alltagsbeispiel
// let blockchainID: bigint = 987654321987654321987654321n;

// 4. Wichtig: bigint ≠ number (nicht mischbar!)
// ❌ let summe = 10n + 5; → Fehler

// ✅ Nur bigint + bigint:
// let summe: bigint = 10n + 5n;
// console.log(summe); // 15n
