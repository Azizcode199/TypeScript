// 1. What is Intersection Types?
// Ein Intersection Type (&) kombiniert mehrere Typen zu einem einzigen. 
// Ein Objekt vom Intersection Type muss alle Eigenschaften der kombinierten Typen haben.
// 1. What is Intersection Type?

// 1. What is Intersection Type?
type A = { name: string };
type B = { age: number };
type PersonBasic = A & B;

const person1: PersonBasic = {
    name: "Hanna",
    age: 23
};

// 2. How to use it with interface
interface Info1 {
    name: string;
    age: number;
    uni: string; // optional möglich mit uni?: string
}

interface Address1 {
    city: string;
    street: string;
}

type User200 = Info1 & Address1;

const user2: User200 = {
    name: "Max",
    age: 28,
    uni: "Hamburg", 
    city: "Hamburg",
    street: "Moorstraße"
};

// 3. Real-world example
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: string;
    department: string;
};

type EmployeeProfile = Person & Employee;

const profile: EmployeeProfile = {
    name: "Emma",
    age: 30,
    employeeId: "A123",
    department: "IT"
};
