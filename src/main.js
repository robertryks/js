let $todoInput;
let $alertInfo;
let $addBtn;
let $ulList;
let $newTask;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};

//pobieramy elementy
const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('.alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul');
};

const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
};


const addNewTask = () => {
    if ($todoInput.value !== '') {
        $newTask = document.createElement('li');
        $newTask.innerText = $todoInput.value;
        $ulList.appendChild($newTask);
        $alertInfo.innerText = '';
        $todoInput.value = '';
        createToolsArea();
    } else {
        $alertInfo.innerText = 'Wpisz treść zadania!';
    }
};

const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i i class = "fas fa-check" ></i>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerText = 'EDIT';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class = "fas fa-trash" > </i>';

    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(editBtn);
    toolsPanel.appendChild(deleteBtn);

    $newTask.appendChild(toolsPanel);

};



document.addEventListener("DOMContentLoaded", main);
