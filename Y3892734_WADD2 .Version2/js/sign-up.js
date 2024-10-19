const nameFeedback = document.getElementById("name-feedback");
const IDfeedback = document.getElementById("ID-feedback");
const PasswordFeedback = document.getElementById("password-feedback");
const birthFeedback = document.getElementById("birth-feedback");

let nameTyped = false;
let IDTyped = false;
let passwordTyped = false;
let birthTyped = false;
let boolSignUp = false;

let names,ID,password,birth;


function getNameFeedback (){

    if(document.getElementById("name").value === ""){
         nameFeedback.innerHTML = "please type your name!"
         nameTyped = false;
    }
    
    else{
        nameTyped = true;
    }
}

function getIDfeedback (){

    if(document.getElementById("ID").value === ""){
         IDfeedback.innerHTML = "please type ID!"
         IDTyped = false;
    }

    else{
        IDTyped = true;
    }

}

function getPasswordFeedback(){
    if(document.getElementById("password").value === ""){
        PasswordFeedback.innerHTML = "please type Password!"
        passwordTyped = false;
    }

    else{
        passwordTyped = true;
    }

}

function getBirthFeedback () {
    if(document.getElementById("dateOfBirth").value === ""){
        birthFeedback.innerHTML = "please put your date of birth!"
        birthTyped = false;
    }

    else{
        birthTyped = true;
    }
}

function clearFeedback ()  {
    for (let i of document.getElementsByClassName("feedback")) {
        i.innerHTML = "";
    }
}

function signUp(){

    if(nameTyped === true && IDTyped === true && passwordTyped === true && birthTyped === true){      

        location.href = "index.html";        
    }
}

const storeData = (data,keyName,IDname) => {
    if(localStorage.getItem(keyName) === null ){
        data = [];
    }

    else{
        data = JSON.parse(localStorage.getItem(keyName));               
    }
    data.push(document.getElementById(IDname).value);
    localStorage.setItem(keyName, JSON.stringify(data)); 
}

const storeName = () => {
    storeData(names,"username","name");
}

const storeID = () =>{
    storeData(ID,"userID","ID");
}

const storePassword = () => {
    storeData(password,"userPassword","password");
}

const storeBirth = () => {
    storeData(birth,"userBirthday","dateOfBirth");
}


const feedbackevent = event =>{
    event.preventDefault();   
    clearFeedback();
    getNameFeedback();
    getIDfeedback();   
    getBirthFeedback();
    getPasswordFeedback();

    if(nameTyped === true && IDTyped === true && passwordTyped === true && birthTyped === true){
        signUp();
        storeName();
        storePassword();
        storeBirth();
        storeID();
        boolSignUp = true;
    }
    localStorage.setItem("signUpBoolean", JSON.stringify(boolSignUp)); 
}


const submit = document.getElementById("sign-up-button");
submit.addEventListener("click",feedbackevent);






