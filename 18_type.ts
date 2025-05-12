// 1. What is type?
// In TypeScript ist type ein Alias (also ein Name), den du einem beliebigen Datentyp geben kannst. 
// Es ist eine Möglichkeit, komplexe Strukturen zu benennen.

type UserID = string;
type Age = number;

// 2. Define type

type User = {
  name: string;
  age: number;
};

type Admin3 = User & { role: string };

// 3. How to use type

const user1: User = {
  name: "Hanna",
  age: 23
};

function greet(user: User): string {
  return `Hello, ${user.name}`;
}


type Status = "online" | "offline" | "idle";
type ID = string | number;
