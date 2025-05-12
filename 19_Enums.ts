// 1. What is Enum Type?
// Ein enum (kurz für enumeration) ist ein benannter Satz von fest definierten Werten. 
// Es wird verwendet, wenn du nur eine bestimmte Auswahl von Werten zulassen 
// willst – z. B. Wochentage, Rollen, Stati etc.

// 2. How to define enums
enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

// 3. How to use enums
let userRole: Role = Role.Admin;

function checkAccess(role: Role) {
  if (role === Role.Admin) {
    console.log("Vollzugriff");
  }
}


enum Ampel {
  Rot,
  Gelb,
  Grün
}


let zu1: Ampel = Ampel.Grün

if(zu1 === Ampel.Grün){
    console.log("Du darfst fahren 🚗");
}

enum werType{
    chef="Baktash jan",
    mitarbeiter="Anna",
    IT="Software Engineer Alina"
}


for (let key in werType) {
  console.log(`${key} → ${werType[key as keyof typeof werType]}`);
}
