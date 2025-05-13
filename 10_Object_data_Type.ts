var mitarbeiterData = {
    name: 'Baktash',
    age: 25,
    city : 'Silkaburg'
}

console.log(mitarbeiterData)

let mitarbeiterDetail: {
  mitarbeiterName: string;
  age: number;
  city: string;
  company?: string; // optional
  address: {
    hausnummer: string;
    PLZ: string;
    Ort: string;
  };
} = {
  mitarbeiterName: 'Anna',
  age: 27,
  city: 'Hamburg',
  company: 'Mercedes', // kann auch weggelassen werden
  address: {
    hausnummer: 'Rampe 1',
    PLZ: '21245',
    Ort: 'Seevetal'
  }
};

console.log(mitarbeiterDetail);


let kontaktDetails :{[key:string]: string|number|undefined}={
    name: 'Anna',
    age: 27,
    city : 'Hamburg',
}

kontaktDetails.salary = 3500;
kontaktDetails.address='Hamburgstraße 12'
kontaktDetails.country="Deutschland"
kontaktDetails.Nationality = "Deutsch"

console.log(kontaktDetails )
console.log("-----------------mit for in loop ---------------")
// 🔁 So durchläufst du ein Objekt
for (let key in kontaktDetails) {
  console.log(key + ":", kontaktDetails[key]);
}

console.log("-----------------------------Nested Objekt--------------------------------")
let personDetails: {
  [key: string]: any; // erlaubt alle Typen, auch Objekte
} = {
  name: "Baktash",
  age: 27,
  city: "Silkburg",
  address: {
    hausnummer: "12A",
    plz: "21244",
    ort: "Seevetal"
  }
};

personDetails.address.plz = "100000"
personDetails.address.handyNumber = 1000000
console.log(personDetails)

console.log("-------- Beispiel Verschachteltes --------")

// Typdefinition mit verschachteltem Objekt
type Student = {
  name: string;
  alter: number;
  istStudnent:boolean;
  adresse: {
    stadt: string;
    straße: string;
    plz: number;
  };
};

// Objekt nach diesem Typ
const student1: Student = {
  name: "Hanna",
  alter: 22,
  istStudnent: true,
  adresse: {
    stadt: "Berlin",
    straße: "Musterstraße 5",
    plz: 10115,
  },
};

const student2: Student = {
  name: "Ben",
  alter: 24,
  istStudnent:true,
  adresse: {
    stadt: "Hamburg",
    straße: "Elbestraße 12",
    plz: 20095,
  },
};

// Zugriff auf verschachtelte Werte
console.log(student1.name);             // "Hanna"
console.log(student1.adresse.stadt);    // "Berlin"
console.log(student1.adresse.plz);      // 10115

console.log("----------------for Each --------------")
const studenten: Student[] = [student1, student2];

// Alle Namen anzeigen
studenten.forEach((s) => {
  console.log(`${s.name} wohnt in ${s.adresse.stadt}`);
});

