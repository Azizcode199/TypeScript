var userName = "Baktash jan";
var age = 26;
var collegae = "Baktash IT Center";
console.log(userName);
console.log(age);
console.log(collegae);
console.log("-----------add number with data types---------------");
console.log("Number Data Type");
var num1 = 10;
var num2 = 32;
var total = num1 + num2;
console.log(total);
console.log("-----------binary and hexadecimal numbers---------------");
var oct = 32769;
var hexa = 3;
var binary = 0x0001;
console.log(oct + 1);
console.log(hexa + 1);
console.log(binary + 1);
console.log("----------- Convert string to number --------------");
var item = 100;
var item2 = "50";
var itemConverted = Number(item2);
console.log(item + itemConverted);
console.log(item + item2);
console.log("---------------- Type inference with number -------------------");
var preis = 19.99; // TypeScript erkennt automatisch: preis ist eine Zahl (number)
console.log(typeof preis); // Ausgabe: "number"
console.log("---------------- Decimal with number data type -------------------");
var preis1 = 19.99; // Dezimalzahl
var steuer = 0.19;
var gesamt = preis1 + (preis1 * steuer);
console.log("Gesamtpreis:", gesamt); // 👉 23.7881
console.log("---------------	Union  -----------------------");
var data;
data = 42; // ✅ erlaubt
data = "Hallo"; // ✅ auch erlaubt
