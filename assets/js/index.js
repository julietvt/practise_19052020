'use strict';
const blocks = document.querySelectorAll('.changeColor');
for (let elem of blocks){
    elem.insertAdjacentHTML("afterbegin", '<button class="rem">[x]</button>');
    elem.firstChild.onclick = () => elem.remove();
    elem.addEventListener('click', Color1);
}
function Color1(event){
    event.target.style.backgroundColor = "rgba(255,0,0,0.7)";
    event.target.addEventListener('click', Color2);
}
function Color2(event){
    event.target.style.backgroundColor = "rgba(70,175,70,0.8)";
    event.target.removeEventListener('click', Color2)
    event.target.addEventListener('click', Color1);
}

// https://developer.mozilla.org/ru/docs/Web/API/Element/insertAdjacentHTML