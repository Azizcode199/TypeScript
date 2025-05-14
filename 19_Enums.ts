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


console.log("--------Real life Example ------------")

enum Rolle {
  Admin = "ADMIN",
  User = "USER",
  Gast = "GUEST"
}

type Benutzer_Rolle = {
  benutzername: string;
  passwort: string;
  rolle: Rolle;
};

const adminBenutzer: Benutzer_Rolle = {
  benutzername: "admin1",
  passwort: "1234",
  rolle: Rolle.Admin,
};

const normalerBenutzer: Benutzer_Rolle = {
  benutzername: "Anna",
  passwort: "pass123",
  rolle: Rolle.User,
};

const GastBenutzer: Benutzer_Rolle = {
  benutzername: "Anna",
  passwort: "pass123",
  rolle: Rolle.Gast,
};

const login_Benutzer = (benutzer: Benutzer_Rolle): string => {
  switch (benutzer.rolle) {
    case Rolle.Admin:
      return `Willkommen Admin ${benutzer.benutzername}! Du hast volle Rechte.`;
    case Rolle.User:
      return `Willkommen ${benutzer.benutzername}. Du hast eingeschränkten Zugriff.`;
    case Rolle.Gast:
      return `Hallo Gast. Bitte logge dich ein.`;
    default:
      return `Unbekannte Rolle.`;
  }
};

//Test:
console.log(login_Benutzer(adminBenutzer));
console.log(login_Benutzer(normalerBenutzer));
console.log(login_Benutzer(GastBenutzer));


