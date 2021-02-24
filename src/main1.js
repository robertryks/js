const tekstInput = document.querySelector("input");
const dodajBtn = document.querySelector("button");
const listaUl = document.querySelector("ul");

dodajBtn.onclick = function () {
  let tekst = tekstInput.value;
  tekstInput.value = "";

  const newLi = document.createElement("li");
  newLi.classList.add("taskBar");

  const newS = document.createElement("span");
  newS.innerText = tekst;

  const newD = document.createElement("div");
  newD.classList.add("tools");

  const okBtn = document.createElement("button");
  okBtn.classList.add("completedBtn");
  okBtn.textContent = "OK";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.textContent = "Delete";

  newD.appendChild(okBtn);
  newD.appendChild(deleteBtn);

  newLi.appendChild(newS);
  newLi.appendChild(newD);

  listaUl.appendChild(newLi);

  okBtn.onclick = () => {
    if (newS.style.textDecoration === "") {
      newS.style.textDecoration = "line-through";
    } else {
      newS.style.textDecoration = "";
    }
  };

  deleteBtn.onclick = () => {
    listaUl.removeChild(newLi);
  };
};
