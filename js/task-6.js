function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }



const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const box = document.querySelector("#boxes");

let sizes = 30;

createBtn.addEventListener("click", createMarkup);

function createMarkup(){
    if(Number(input.value) < 0 || Number(input.value) > 100){
        console.log("error");
    return;
}

makeBoxes(+input.value);
}

function makeBoxes(amount){
    const arr = [];

for(let i = 0; i < amount; i++){
    const boxEl = document.createElement("div");
    boxEl.style.width = `${sizes}px`;
    boxEl.style.height = `${sizes}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
   
    arr.push(boxEl);


    sizes += 10;
}
box.innerHTML = "";
sizes = 30;
box.append(...arr);

}

destroyBtn.addEventListener("click", destroyMarkup);

function destroyMarkup(){
    box.innerHTML = "";
    input.value = "";
    sizes = 30;
}
