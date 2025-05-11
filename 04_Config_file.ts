// // 🧩 1. How to generate config file**

// // 🔹 Deutsch: Wie man eine TypeScript-Konfigurationsdatei erstellt.
// // 👉 **Befehl im Terminal:**

// // ```bash
// // npx tsc --init
// // ```

// // Das erzeugt eine Datei namens `tsconfig.json`.

// // 📦 Beispiel im Alltag:
// // Du möchtest alle `.ts`-Dateien in einem Ordner automatisch in `.js` umwandeln. Dafür brauchst du diese Datei.



// 🛠️ 2. Use of config file

// 🔹 Deutsch: Wofür man die `tsconfig.json` nutzt.
// ✅ Sie legt fest, wie TypeScript arbeiten soll: z. B. welche Version, wo Dateien gespeichert werden usw.

// 📦 **Beispiel:


// > "Bitte speichere die fertigen JS-Dateien im Ordner `dist`."
// json
// {
//   "compilerOptions": {
//     "outDir": "./dist",
//     "rootDir": "./src"
//   }
// }


// 🔁 **3. Convert All TS file to JS together**

// 🔹 Deutsch: Alle `.ts`-Dateien auf einmal in `.js` umwandeln.
// 👉 Befehl:

// ```bash
// npx tsc
// ```

// Alle Dateien im Projekt (laut `tsconfig.json`) werden kompiliert.

// 📦 **Beispiel:**
// Du hast 10 `.ts`-Dateien – mit diesem Befehl machst du aus allen `.js`-Dateien auf einen Schlag.



// 🧹 4. Fix errors after config file**

// 🔹 **Deutsch:** Fehler beheben, die nach dem Erstellen der Konfigurationsdatei auftreten.
// ✅ Manchmal zeigt TypeScript Fehler, weil du jetzt mit strengeren Regeln arbeitest (z. B. `strict: true`).

// 📦 Beispiel:
// TypeScript sagt:

// `"Variable 'x' is possibly undefined"`
// > Dann musst du deinen Code verbessern:

// ```ts
// let name: string | undefined;
// if (name) {
//   console.log(name);
// }
// ```


// ### 🔄 **5. Common use of config**

// 🔹 **Deutsch:** Häufige Einstellungen in `tsconfig.json`:

// * `"target": "ES6"` → moderne JS-Version
// * `"outDir": "dist"` → Ausgabeverzeichnis
// * `"strict": true` → strenge Typüberprüfung

// 📦 **Beispiel:**
// Du willst, dass alle kompilierten Dateien in den Ordner `build/` kommen:

// ```json
// "outDir": "./build"
// ```


// ❓ **6. Interview Questions**

// 🔹 **Deutsch:** Typische Fragen in Vorstellungsgesprächen:

// * Warum braucht man `tsconfig.json`?
// * Was bedeutet `"strict": true`?
// * Wie kann man Quell- und Ausgabeordner trennen?

