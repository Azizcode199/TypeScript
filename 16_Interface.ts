interface Benutzer {
  name: string;
  alter: number;
  aktiv: boolean;
}

let user: Benutzer = {
  name: "Anna",
  alter: 30,
  aktiv: true,
};

// Wie definiere ich ein Interface?
interface Produkt {
  titel: string;
  preis: number;
  verfügbar: boolean;
}

// Wie benutzt man ein Interface?
let laptop: Produkt = {
  titel: "MacBook",
  preis: 1500,
  verfügbar: true,
};

// Wie erweitert man ein Interface? (extend)
interface Benutzer {
  name: string;
}

interface Admin extends Benutzer {
  rechte: string[];
}

const admin: Admin = {
    name: "Anna",
    rechte: ["löschen", "bearbeiten"],
    alter: 0,
    aktiv: false
};

console.log("Nächste Beispiele");

interface Info {
    name: string;
    age: number;
    uni: string;
}

interface TeacherUniSubject extends Info {
    subject: string[];
}

interface Address {
    straße: string;
    ort: string;
    PLZ: number;
}

interface StudentUniInfo extends Info {
    address: Address;
}

const studentUni: StudentUniInfo = {
    name: "Hanna",
    age: 23,
    uni: "Hamburg",
    address: {
        straße: "Harburg",
        ort: "MoorStraße",
        PLZ: 21253
    }
};


// subject ist jetzt ein Array mit einem oder mehreren Fächern
const teacherUni: TeacherUniSubject = {
    name: "Anna",
    age: 45,
    uni: "Hamburg",
    subject: ["IT", "Java", "Python", "TypeScript"]
};

const mitarbeiterUni: Info = {
    name: "Emma",
    age: 51,
    uni: "Hamburg"
};

function printPersonInfo(person: Info): void {
    console.log(`Name: ${person.name}`);
    console.log(`Alter: ${person.age}`);
    console.log(`Universität: ${person.uni}`);
}

// Zusatzfunktion für Lehrer:
function printTeacherSubjects(teacher: TeacherUniSubject): void {
    printPersonInfo(teacher);
    console.log(`Fächer: ${teacher.subject.join(", ")}`);
}

// Zusatzfunktion für Studenten:
function printStudentAddress(student: StudentUniInfo): void {
    printPersonInfo(student);
    console.log(`Adresse: ${student.address.straße}, ${student.address.ort} ${student.address.PLZ}`);
}

// Aufrufe:
printTeacherSubjects(teacherUni);
printStudentAddress(studentUni);
printPersonInfo(mitarbeiterUni);


// Einzelteile
interface Engine {
    type: string;
    horsepower: number;
}

interface Wheels {
    count: number;
    size: number;
}

// Auto wird aus Teilen "zusammengesetzt" = Komposition
interface Car {
    brand: string;
    model: string;
    engine: Engine;
    wheels: Wheels;
}


const myCar: Car = {
    brand: "Toyota",
    model: "Corolla",
    engine: {
        type: "Hybrid",
        horsepower: 121
    },
    wheels: {
        count: 4,
        size: 16
    }
};

