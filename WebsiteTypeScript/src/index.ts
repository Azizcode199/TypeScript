// tsc --watch
// DOM-Elemente
const eingabeBenutzername = document.querySelector('#user') as HTMLInputElement;
const formular = document.querySelector("#form") as HTMLFormElement;

const hauptContainer = document.querySelector(".main-container") as HTMLElement;

// Benutzerdaten-Interface
interface Benutzerdaten {
  id: number;
  login: string;
  avatar_url: string;
  location: string;
  url: string;
}

// Wiederverwendbare Fetch-Funktion
async function datenHolen<T>(url: string, optionen?: RequestInit): Promise<T> {
  const antwort = await fetch(url, optionen);
  if (!antwort.ok) {
    throw new Error(`Netzwerkfehler: Status ${antwort.status}`);
  }
  const daten: T = await antwort.json();
  return daten;
}

// Benutzerkarte anzeigen
const ergebnisAnzeigen = (benutzer: Benutzerdaten) => {
  const { avatar_url, login, url } = benutzer;
  hauptContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <img class="avatar" src="${avatar_url}" alt="${login}" />
      <div class="card-body">
        <h3>${login}</h3>
        <hr />
        <div class="card-footer">
          <img class="small-avatar" src="${avatar_url}" alt="${login}" />
          <a href="${url}" target="_blank">GitHub</a>
        </div>
      </div>
    </div>`
  );
};


// Benutzer anzeigen
function benutzerAnzeigen(url: string): void {
  // Vorherige Ergebnisse löschen
  hauptContainer.innerHTML = "";

  datenHolen<Benutzerdaten[] | Benutzerdaten>(url)
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

