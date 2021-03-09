const ul = document.createElement('ul');


for (let i = 0; i < 3; i++) {
    const liItem = document.createElement('li');
    liItem.innerText = i+1;
    ul.appendChild(liItem);
}

const last = ul.lastChild;
last.style.fontSize = '26px';
last.innerText = "Ostatni element"

document.body.appendChild(ul);
