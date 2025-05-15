"use strict";
// tsc --watch
// DOM-Elemente
const eingabeBenutzername = document.querySelector('#user');
const formular = document.querySelector("#form");
const hauptContainer = document.querySelector(".main-container");
// Wiederverwendbare Fetch-Funktion
async function datenHolen(url, optionen) {
    const antwort = await fetch(url, optionen);
    if (!antwort.ok) {
        throw new Error(`Netzwerkfehler: Status ${antwort.status}`);
    }
    const daten = await antwort.json();
    return daten;
}
// Benutzerkarte anzeigen
const ergebnisAnzeigen = (benutzer) => {
    const { avatar_url, login, url } = benutzer;
    hauptContainer.insertAdjacentHTML("beforeend", `<div class="card">
      <img class="avatar" src="${avatar_url}" alt="${login}" />
      <div class="card-body">
        <h3>${login}</h3>
        <hr />
        <div class="card-footer">
          <img class="small-avatar" src="${avatar_url}" alt="${login}" />
          <a href="${url}" target="_blank">GitHub</a>
        </div>
      </div>
    </div>`);
};
// Benutzer anzeigen
function benutzerAnzeigen(url) {
    // Vorherige Ergebnisse löschen
    hauptContainer.innerHTML = "";
    datenHolen(url)
        .then((daten) => {
        // Wenn einzelner Benutzer
        if (!Array.isArray(daten)) {
            ergebnisAnzeigen(daten);
            return;
        }
        // Wenn Liste von Benutzern (z. B. bei Start)
        for (const benutzer of daten) {
            ergebnisAnzeigen(benutzer);
        }
    })
        .catch((fehler) => {
        console.error("Fehler beim Laden:", fehler);
        hauptContainer.innerHTML = `<p style="color:red;">❌ Benutzer nicht gefunden</p>`;
    });
}
// Standarddaten beim Start laden
benutzerAnzeigen("https://api.github.com/users");
// Formularverarbeitung zur Benutzersuche
formular.addEventListener("submit", (ereignis) => {
    ereignis.preventDefault();
    const benutzername = eingabeBenutzername.value.trim();
    if (benutzername) {
        benutzerAnzeigen(`https://api.github.com/users/${benutzername}`);
    }
});
