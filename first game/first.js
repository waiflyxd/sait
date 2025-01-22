"use strict"
let num;
let hidnum = document.querySelector('.hiddennum');
let btn=document.querySelector('.main__game-btn');
let txt1=document.querySelector("#one");
let txt2=document.querySelector("#two");
let txt3=document.querySelector("#three");
let input = document.querySelector('.main__input');

btn.addEventListener('click', ()=>{
    num=Math.floor(Math.random () * 99+1)
    txt1.textContent=''
    txt2.textContent='Корова загадала число от 1 до 100'
    txt3.textContent='Получится ли у тебя угадать его?'
    hidnum.textContent='?'
    input.value=''
});
input.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D+/g, "", "qwertyuiopasdfghjklzxcvbnm");
    if(input.value > 100) {
        e.target.value = e.target.value.slice(0, -1);
    }
});
input.addEventListener('keydown', (event)=>{
    if(event.code === 'Enter'){
        if(Number(input.value == num)){
            hidnum.textContent=num + ' Ты угадал';
        }else if (Number(input.value>num)){
            hidnum.textContent='Напиши меньше'
        }else if (Number(input.value<num)){
            hidnum.textContent='Напиши больше'
        }
}});