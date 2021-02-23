const btn1 = document.querySelector(".one");
const btn2 = document.querySelector(".two");
const span1 = document.querySelector(".original");
const span2 = document.querySelector(".new");

let $score;

const add = (a, b) => {
  $score = a + b;
  span1.innerHTML = $score;
};

const multiply = () => {
  span2.innerHTML = $score * 2;
};
const divide = () => {
  span2.innerHTML = $score / 2;
};

btn1.addEventListener("click", multiply);
btn2.addEventListener("click", divide);

add(8, 13);

if ($score >= 0) {
  console.log("Odpalone Fira Code");
}
