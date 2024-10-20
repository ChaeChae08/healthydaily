let timeTyped = false;
let dateTyped = false;
const timeFeedback = document.getElementById("time-feedback");
const dateFeedback = document.getElementById("date-feedback");
let signInbool = JSON.parse(localStorage.getItem("signInBoolean"));
let signUpbool = JSON.parse(localStorage.getItem("signUpBoolean"));
let userIndex = JSON.parse(localStorage.getItem("IDindex"));
let userID = JSON.parse(localStorage.getItem("userID"));

/*the 4-lines codes are based upon an example of W3Schools
  Author: W3Schools
  Location: https://www.w3schools.com/jsref/jsref_getfullyear.asp
  Accessed : 01/04/2023*/
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = (currentDate.getMonth()) + 1;
let day = currentDate.getDate();

class keyName {

    dataType;


    constructor(dataType){
        this.dataType = dataType;

    }

    newKey(){
        
        if(signUpbool === true){
            return this.dataType + (userID.length - 1);
        }

        else if(signInbool === true){
            return this.dataType + userIndex;
        }
    }
}

const exerciseTime = new keyName("exerciseTimeUser");
let exerciseTimeKey = exerciseTime.newKey();
const exerciseDate = new keyName("exerciseDateUser");
let exerciseDateKey = exerciseDate.newKey();
const exerciseType = new keyName("exerciseTypeUser");
let exerciseTypeKey = exerciseType.newKey();


function getTimeFeedback (){

    if(document.getElementById("exerciseTime").value === ""){
         timeFeedback.innerHTML = "please type exercise time!"
         timeTyped = false;
    }
    
    else{
        timeTyped = true;
    }
}

function getDateFeedback (){

    if(document.getElementById("dateOfExercise").value === ""){
         dateFeedback.innerHTML = "please type your exercise date!"
         dateTyped = false;
    }
    
    else{
        dateTyped = true;

    }
}

function clearFeedback ()  {
    for (let items of document.getElementsByClassName("feedback")) {
        items.innerHTML = '';
    }
}

function change(){

    if(dateTyped === true && timeTyped === true){      

        location.href = "activity.html";
    }
}

function storeArray(key,IDname){

    let array;

    if(localStorage.getItem(key) === null){
        array = [];
    }

    else{
        array = JSON.parse(localStorage.getItem(key));
    }


    array.push(document.getElementById(IDname).value);
    localStorage.setItem(key, JSON.stringify(array));
}

function storeTimeArray (){
    storeArray(exerciseTimeKey,"exerciseTime");
}

function storeDateArray(){
    storeArray(exerciseDateKey,"dateOfExercise");
}

function storeTypeArray(){
    let array;

    if(localStorage.getItem(exerciseTypeKey) === null){
        array = [];
    }

    else{
        array = JSON.parse(localStorage.getItem(exerciseTypeKey));
        }


    array.push(document.getElementById("dateOfExercise").value, document.getElementById("exerciseType").value, document.getElementById("exerciseTime").value);
    localStorage.setItem(exerciseTypeKey, JSON.stringify(array));   
}


const feedbackevent = event =>{
    event.preventDefault();   
    clearFeedback();
    getTimeFeedback();
    getDateFeedback();
    change();

    if(timeTyped === true && dateTyped === true){

            storeDateArray();
            storeTimeArray();
            storeTypeArray();
    }
}

const submit = document.getElementById("change-button");
submit.addEventListener("click",feedbackevent);