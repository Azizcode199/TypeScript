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
    hausnummer: 'Rampe 12',
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

