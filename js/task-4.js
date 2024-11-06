const form = document.querySelector(".login-form");
const obj = {};

form.addEventListener("submit", handleForm);

function handleForm(event){
    event.preventDefault();
    const email = event.target.elements.email;
    const password = event.target.elements.password;
    if(email.value === '' || password.value === ''){
        alert('All form fields must be filled in');
    }else{
        obj.email = email.value;
        obj.password = password.value;
        console.log(obj);
        
        }
        event.target.reset();
}