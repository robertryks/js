const kwotaRachunku = document.querySelector("#kwota");
const iloscOsob = document.querySelector("#osob");
const napiwek = document.querySelector("#napiwek");

const przyciskOblicz = document.querySelector("#oblicz");
const error = document.querySelector("#error");
const info = document.querySelector("#info");
const kwotaPodzielona = document.querySelector("#kwotaPodzielona");

const oblicz = (e) => {
  if (
    kwotaRachunku.value == "" ||
    iloscOsob.value == "" ||
    napiwek.value == 0
  ) {
    error.innerText = "Uzupełnij wszystkie pola";
    info.style.display = "none";
  } else {
    error.innerText = "";

    console.log(Number(kwotaRachunku.value) + Number(kwotaRachunku.value) * napiwek.value);
    kwotaPodzielona.innerText = (
      (Number(kwotaRachunku.value) + Number(kwotaRachunku.value) * napiwek.value) /
      iloscOsob.value
    ).toFixed(2);
    info.style.display = "block";
  }
};

przyciskOblicz.addEventListener("click", oblicz);
