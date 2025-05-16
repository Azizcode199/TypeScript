//  Was ist der `Symbol`-Datentyp?

// Ein `Symbol` ist ein einzigartiger und unveränderlicher Wert, der oft als **Schlüssel in Objekten** 
// verwendet wird, damit es keine Namenskonflikte gibt.
//  Wie benutzt man `Symbol`?

// var  id = Symbol('1234');
// var id1 = Symbol('1234');

// console.log(id == id1)
// console.log(id); // Symbol(userID)


//  Alltagsbeispiel
//  Beispiel-Situation:

// Stell dir vor, du hast zwei Benutzerobjekte, die beide die Eigenschaft `id` verwenden. 
// Du willst sichergehen, dass sich diese `id`s nicht gegenseitig stören.

var  id = Symbol('1234');
const benutzer1 = {
  name: "Ali",
  [id]: 1
};

const benutzer2 = {
  name: "Sara",
  [id]: 1
};

console.log(benutzer1)
console.log(benutzer2)

// console.log(benutzer1); // Symbol(id) ist einzigartig!
// console.log(benutzer2);
// ```

// Obwohl beide `id = 1` haben, sind die Symbole **nicht gleich** – sie sind **einzigartig**!

// ---

//  Wo kann man `Symbol` verwenden?

// * Als geheime Eigenschaftsschlüssel in Objekten (z. B. für private Felder)
// * In **Bibliotheken** oder **Frameworks**, um sicherzustellen, dass interne Eigenschaften nicht überschrieben werden
// * Bei der Erstellung von **Enums oder Konstanten**, die garantiert eindeutig sein müssen

//  Interview-Frage:

// > **Frage:** Warum sollte man `Symbol` statt `string` als Schlüsselnamen verwenden?
// > **Antwort:** Damit man sich sicher sein kann, dass der Schlüssel **einzigartig** ist und nicht durch Zufall doppelt verwendet wird.
//  Zusammenfassung in Alltagssprache:

// Symbol ist wie ein geheimer, eindeutiger Name, den du keinem anderen gibst – perfekt, wenn du in deinem Code **Kollisionen vermeiden willst.**


