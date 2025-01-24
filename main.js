"use strict"
let btn = document.querySelector('.header_keyboard-btn')
const keys = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M',
    ' ', 'Backspace'
];

const keyboard = document.querySelector('.keyboard');
btn.addEventListener('click', () => {
    keys.forEach(key => {
        const button = document.createElement('button');
        button.textContent = key;
        button.classList.add('key');
        keyboard.appendChild(button);
        
        button.addEventListener('click', () => {
            console.log(`Нажата клавиша: ${key}`);
        });
    });
})
