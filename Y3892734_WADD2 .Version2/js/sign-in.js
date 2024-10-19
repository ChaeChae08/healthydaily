const IDfeedback = document.getElementById("ID-feedback");
const PasswordFeedback = document.getElementById("password-feedback");

let IDfound,passwordFound,locationMatch;
let IDlocation = null;
let passwordLocation = null;
let boolSignIn = false;

function getIDfeedback () {
    if(document.getElementById("ID.text").value === ""){
         IDfeedback.innerHTML = "ID has not been typed! please type ID"
    }
}

function getPasswordFeedback(){
    if(document.getElementById("password.text").value === ""){
        PasswordFeedback.innerHTML = "password has not been typed! please type Password"
    }
}

function clearFeedback ()  {
    for (let items of document.getElementsByClassName("feedback")) {
        items.innerHTML = '';
    }
}

function matchInfo(){

    const storedID = JSON.parse(localStorage.getItem("userID")); 
    const storedPassword = JSON.parse(localStorage.getItem("userPassword"));
    
    if(storedID != null){
        for(let i of storedID){
            //if users type ID that matches with one in stored Id array
            if(i === document.getElementById("ID.text").value){
                //index of stored ID that matches with typed ID
                IDlocation = storedID.indexOf(i);
                IDfound = true;
            }

            else if(document.getElementById("ID.text").value === ""){
                IDlocation = null;
                IDfound = false;
            }
        }
    }
    
    if(storedPassword != null){
        for(let i of storedPassword){
            //if users type password that matches with one in stored password array
            if(i === document.getElementById("password.text").value){
                //index of stored password that matches with typed password
                passwordLocation = storedPassword.indexOf(i);
                passwordFound = true;
            }

            else if(document.getElementById("password.text").value === ""){
                passwordLocation = null;
                passwordFound = false;
            }
        }
    }

    //if index of stored ID array that matches with typed ID and the index of stored passoword array are the same, but boths' values are not null 
    if(IDlocation === passwordLocation && IDlocation != null && passwordLocation != null){
        locationMatch = true;
    }

    else{
        locationMatch = false;
    }

    //index of users who sign in
    localStorage.setItem("IDindex", JSON.stringify(IDlocation));

}

const signIn = () => {

    matchInfo();

    if(IDfound === true && passwordFound === true && locationMatch === true){
        location.href = "index.html";
        boolSignIn = true;
    }

    else if(document.getElementById("ID.text").value === "" || document.getElementById("password.text").value === ""){
        document.getElementById("notMatch").innerHTML = "";
    }

    else{
        notMatch.innerHTML = "cannot find your account. please check ID or password again";      
    } 
}


const feedback = event =>{
    event.preventDefault();   
    clearFeedback();
    getIDfeedback();   
    getPasswordFeedback();
    matchInfo();
    signIn();

    //if users successfuly sign in, signInBoolean will be true
    localStorage.setItem("signInBoolean", JSON.stringify(boolSignIn));    
}

const submit = document.getElementById("sign-in-Button");
submit.addEventListener("click",feedback);

