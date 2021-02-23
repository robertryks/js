const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const wybranaInfo = document.querySelector("p");

function Posilek(nazwa, cena) {
  this.nazwa = nazwa;
  this.cena = cena;
}

Posilek.prototype.wybranyPosilek = function () {
  wybranaInfo.innerText = `Wybrany posiłek to ${this.nazwa} w cenie ${this.cena} zł`;
};

const posilek1 = new Posilek('Ser', 12.99);
const posilek2 = new Posilek('Ryba', 6.99);
const posilek3 = new Posilek('Ser', 23.00);

btn1.addEventListener('click', () => {
  posilek1.wybranyPosilek();
})
btn2.addEventListener('click', () => {
  posilek2.wybranyPosilek();
})
btn3.addEventListener('click', () => {
  posilek3.wybranyPosilek();
})
//zmiany
