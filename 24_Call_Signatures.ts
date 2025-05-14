// Call Signatures in TypeScript beschreiben, wie eine Funktion aussehen muss (Parameter & Rückgabewert).
// Sie helfen dir, Funktionstypen sauber zu definieren, z. B.:
type Rechner = (a: number, b: number) => number;

type Student_Hamburg = {
  name: string;
  alter: number;
  gender?: string;
  wohnt?: () => string; // Call Signature ist optional
};

const std_1: Student_Hamburg = {
  name: "Hana",
  alter: 24,
  wohnt: (): string => `Ich wohne in Hamburg.`,
};
const std_2: Student_Hamburg = { name: "Anna", alter: 23, gender: "Frau", wohnt:() :string => `Ich wohne in Berlin.` };

const vorsteller: (student: Student_Hamburg) => string = (student) => {
  const { name, alter, gender, wohnt } = student;

  let begruessung = `👋 Willkommen! Mein Name ist ${name}, ich bin ${alter} Jahre alt.`;
  if (gender) {
    begruessung += ` Ich bin ein/e ${gender}.`;
  }
  if (wohnt) {
    begruessung += ` ${wohnt()}`;
  }

  return begruessung;
};

console.log(vorsteller(std_1));
console.log(vorsteller(std_2));
