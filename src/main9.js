const showBtn = document.querySelector('.btn-1');
const hideBtn = document.querySelector('.btn-2');
const toggleBtn = document.querySelector('.btn-3');

const par = document.querySelector('p');

const showPar = () => {
    par.classList.remove('hide');
    par.classList.add('show');
}

const hidePar = () => {
    par.classList.remove('show');
    par.classList.add('hide');
}

const togglePar = () => {
    par.classList.toggle('show');
    par.classList.toggle('hide');

}

showBtn.addEventListener('click', showPar);
hideBtn.addEventListener('click', hidePar);
toggleBtn.addEventListener('click', togglePar);
