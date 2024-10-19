const weightFeedback = document.getElementById("weight-feedback");
const dateFeedback = document.getElementById("date-feedback");
let signInbool = JSON.parse(localStorage.getItem("signInBoolean"));
let signUpbool = JSON.parse(localStorage.getItem("signUpBoolean"));
let userIndex = JSON.parse(localStorage.getItem("IDindex"));
let userWeight = JSON.parse(localStorage.getItem("userWeight"));
let userID = JSON.parse(localStorage.getItem("userID"));

let weightTyped = false;
let dateTyped = false;
let userGoal = null;
let arrayIndex;

function keyName (dataType) {
    this.dataType = dataType;

    this.newKey = function(){
        if(signUpbool === true ){

           return this.dataType + (userID.length -1);
        }

        else if(signInbool === true){
          return this.dataType + userIndex;
        }
    }
}

const weight= new keyName("weightUser");
let weightKey = weight.newKey();
const date = new keyName("weightDateUser");
let dateKey = date.newKey();
const goal = new keyName("goalWeightUser");
let goalKey = goal.newKey();
const height = new keyName("heightser");
let heightKey = height.newKey();
const gender = new keyName("genderUser");
let genderKey = gender.newKey();


function getWeightFeedback (){

    if(document.getElementById("currentWeight").value === ""){
         weightFeedback.innerHTML = "please type your current weight!"
         weightTyped = false;
    }
    
    else{
        weightTyped = true;
    }
}



function clearFeedback ()  {
    for (let items of document.getElementsByClassName("feedback")) {
        items.innerHTML = '';
    }
}

function change(){

    if(weightTyped === true){      

        location.href = "weight.html";
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

function storeWeightArray (){
    storeArray(weightKey,"currentWeight");
}



function storeData(key,IDname){

    let value = null;
    let dataValue;

    if(document.getElementById(IDname).value != ""){
        value = document.getElementById(IDname).value;
    }

    else{
     if(localStorage.getItem(key) != null){
        dataValue = JSON.parse(localStorage.getItem(key));  
        value = dataValue;

     }     
    }

    localStorage.setItem(key,JSON.stringify(value));
}

function storeGoalData(){
    storeData(goalKey,"goalWeight");
}

function storeHeightData(){
    storeData(heightKey,"height");
}


function storeGenderData (){
    let array;
    const genders = ["female", "male", "others"];

    if(localStorage.getItem(genderKey) === null){
        array = [];
    }

    else{
        array = JSON.parse(localStorage.getItem(genderKey));
    }

    for(let letter of genders)
    if(document.getElementById(letter).checked){
        array.push(document.getElementById(letter).value);
    }
    localStorage.setItem(genderKey, JSON.stringify(array));    
}


const feedbackevent = event =>{
    event.preventDefault();   
    clearFeedback();
    getWeightFeedback();
    change();

    if(weightTyped === true){     
    storeWeightArray();
    storeGoalData();
    storeHeightData();
    storeGenderData();
    }
}

const submit = document.getElementById("change-button");
submit.addEventListener("click",feedbackevent);
