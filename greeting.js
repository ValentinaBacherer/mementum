const form = document.querySelector(".js-nameForm"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

// Global values - local storage
const USER_LS = "currentUser",
    SHOWING_ON = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
} 

function handleSubmit(event){
    event.preventDefault(); 
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue); 
}

function askForName(){ 
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(userArriving){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${userArriving}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askForName();   // not user logged in 
    } else {
       // user logged already, then say hello
        paintGreeting(currentUser);
    }  
}


function init(){
    loadName();
}

init();