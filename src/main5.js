// stałe z index.html
const input = document.querySelector("input");
const lis = document.querySelectorAll("li");

function search() {
  const text = input.value.toLowerCase();

  //porównanie wpisanego kodu z tym w li-kach
  lis.forEach((item) => {
    const litery = item.textContent.toLowerCase();

    if (litery.indexOf(text) !== -1) {
      item.hidden = false;
    } else {
      item.hidden = true;
    }
  });
}

input.onkeyup = search;
