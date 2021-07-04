let slt = document.getElementById('slt');
let box = document.getElementById('box');
let marq = document.querySelector('h1');

let btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    let inp = document.getElementById('show').value;
    box.style.background = inp;
    marq.style.color = inp;
});

const heandle = ()=>{
    box.style.background = slt.value;
    marq.style.color = slt.value;
}