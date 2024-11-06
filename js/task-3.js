const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handleInput);


function handleInput(event){
output.textContent = input.value !== "" ? event.currentTarget.value
: 'Anonymous';
}