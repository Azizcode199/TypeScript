//* 1: Declare a variable `userAge` and initialize it with the value 25.
//*    Let TypeScript infer the type of `userAge`.

// Aufgabe 1
let userAge = 25; // TypeScript erkennt: number
console.log(userAge)

//* 2: Write a function `greetUser` that takes a name of type `string`
//*    and returns a greeting message. Use type inference for the return type.

// Aufgabe 2
function greetUser(name: string) {
  return `Hello, ${name}!`;
}

console.log(greetUser("Hanna"))
