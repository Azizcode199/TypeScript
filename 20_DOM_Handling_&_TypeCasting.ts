const headingElement = document.querySelector('h1');


console.log(headingElement?.classList);


if (headingElement instanceof HTMLHeadingElement) {
  headingElement.style.color = "Red"; // Beispiel: Stil ändern
}
