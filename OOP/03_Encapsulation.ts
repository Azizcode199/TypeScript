class Benutzer {
  private _name: string = "";

  get name_2(): string {
    return this._name;
  }

  set name_2(neuerName: string) {
    if (neuerName.length > 0) {
      this._name = neuerName;
    } else {
      console.log("Name darf nicht leer sein!");
    }
  }
}

//  Verwendung
const user_2 = new Benutzer();

user_2.name_2 = "Anna";            // set wird aufgerufen
console.log(user_2.name_2);       // get wird aufgerufen

user_2.name_2 = "";               // Fehler wird angezeigt
