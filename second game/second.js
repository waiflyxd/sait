let table= document.querySelectorAll(".main__stolb-el");
let btn=document.querySelector(".main_button-btn");
let img=document.getElementById("#yes");
btn.addEventListener('click', ()=>{
    let slots = [];






    const uniqueNumbers = [];
while (uniqueNumbers.length < count && numbers.length > 0) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const randomNumber = numbers[randomIndex];

        uniqueNumbers.push(randomNumber);
        // Удаляем число из массива, чтобы избежать повторений
        numbers.splice(randomIndex, 1);





    for (let i = 0; i < 10; i++) {
        slots.push(Math.floor(Math.random() * table.length));
        btn.textContent="Перезапустить";
        btn.style.backgroundColor="red";
    };
    btn.addEventListener('click', ()=>{
        location.reload();
    });
    for(let e of table){
        e.addEventListener('click', (event)=>{
            console.log("!", parseInt(e.id));
            if (slots.includes(parseInt(e.id))){
                e.innerHTML = "<img src=\"../photo/yes.png\"/>";
                e.width="10.25px";
                e.height="10.25px";
            }else{
                e.innerHTML = "<img src=\"../photo/no.png\"/>";
                e.width="1px";
                e.height="1px";
            };
        });
    };
});