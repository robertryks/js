console.log('Hejka');
const btn = document.querySelector("button");
const img = document.querySelector("img");
const bdy = document.querySelector("body");

// const url = "https://cat-fact.herokuapp.com/facts";
const url = "https://foodish-api.herokuapp.com/api/";

// btn.onclick = () => {
//     fetch(url)
//         .then(res => res.json())
//         .then(res => {
//             res.forEach(element => {
//                 const par = document.createElement("p");
//                 par.innerText = element.text;
//                 bdy.appendChild(par);
//             });
//         })
//         //.then(res => img.src = res.message)
//         .catch(err => console.log(err))
// }

btn.onclick = () => {
    fetch(url)
        .then(res => res.json())
        .then(res => img.src = res.image)
        .catch(err => console.log(err))
}
