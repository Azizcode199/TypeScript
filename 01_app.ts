var userName: string = "Baktash jan"
var age : number = 26
var collegae : string = "Baktash IT Center"

console.log(userName)
console.log(age)
console.log(collegae)

console.log("-----------add number with data types---------------")
console.log("Number Data Type")
var num1 : number = 10;

var num2: number = 32;

var total = num1 + num2
console.log(total)

console.log("-----------binary and hexadecimal numbers---------------")

var oct:number =0o100001
var hexa: number = 0b0011
var binary:number = 0x0001;
console.log(oct+1)
console.log(hexa+1)
console.log(binary+1)

console.log("----------- Convert string to number --------------")

var item : number=100
var item2="50"

var itemConverted = Number(item2)
console.log(item+itemConverted)
console.log(item + item2)

console.log("---------------- Type inference with number -------------------")

// let preis = 19.99; // TypeScript erkennt automatisch: preis ist eine Zahl (number)

// console.log(typeof preis); // Ausgabe: "number"

console.log("---------------- Decimal with number data type -------------------")
// let preis1: number = 19.99; // Dezimalzahl
let steuer: number = 0.19;

// let gesamt = preis1 + (preis1 * steuer);

// console.log("Gesamtpreis:", gesamt); // 👉 23.7881

console.log("---------------	Union  -----------------------")
let data: number | string;

data = 42;         // ✅ erlaubt
data = "Hallo";    // ✅ auch erlaubt

// new Lesson 


let num: number = 5;        // Typ "number" → nur Zahlen erlaubt
// num = "code";            //  Fehler: Type '"code"' is not assignable to type 'number'
console.log(num);           // Ausgabe: 5

let value1: any = 5;       // erlaubt alles
value1 = "jetzt Text";     // auch erlaubt
value1 = true;             // immer noch erlaubt

let age1: number = 30;
let username: string = "Baktash";
let isLoggedIn: boolean = true;









