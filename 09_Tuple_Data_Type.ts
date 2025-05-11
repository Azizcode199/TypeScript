var mitarbeiter: string[] = ['Anna', 'Lea', 'Lena', 'Marie', 'Emma']
var mitarbeiter1: [string, number, boolean, number] = ['Anna', 25,true, 3500]
console.log(mitarbeiter1)

mitarbeiter1.push('Hamburg'); // ❗ Kein Fehler zur Compile-Zeit

console.log(mitarbeiter1)

const mitarbeiter2: readonly [string, number, boolean, number] = ['Anna', 25, true, 3500];

// mitarbeiter2.push('Hamburg'); // ❌ Jetzt gibt es einen Fehler!

