let signInbool = JSON.parse(localStorage.getItem("signInBoolean"));
let signUpbool = JSON.parse(localStorage.getItem("signUpBoolean"));
let userID = JSON.parse(localStorage.getItem("userID"));
let userIndex = JSON.parse(localStorage.getItem("IDindex"));

class keyName {

    dataType;

    constructor(dataType){
        this.dataType = dataType;
    }

    newKey(){
        
        /*if user signed up, the last index of the userID array will be shown*/
        if(signUpbool === true){
            return this.dataType + (userID.length - 1); 
        }
        
        /*if users signed in, the userIndex that matches with the users will be shown*/
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
const exerciseTime = new keyName("exerciseTimeUser");
let exerciseTimeKey = exerciseTime.newKey();
const exerciseDate = new keyName("exerciseDateUser");
let exerciseDateKey = exerciseDate.newKey();
const exerciseType = new keyName("exerciseTypeUser");
let exerciseTypeKey = exerciseType.newKey();

//if users sign in or sign up, "Sign out" text will be displayed
if(signInbool === true || signUpbool ===true){
    document.getElementById("logInstate").innerHTML = "Sign Out";
}

//if user sign out, "sign In" text will be displayed
else if (signInbool === false && signUpbool === false){
    document.getElementById("logInstate").innerHTML = "Sign In";
} 

else if (signInbool === null || signUpbool  === null){
    document.getElementById("logInstate").innerHTML = "Sign In"
}

/*if users click the "sign in"/ "sign out" text*/
const account = () => {

    //if users click "Sign out" text, the page will be reloaded
    if(signInbool === true || signUpbool ===true){
        location.reload();       
    }
    
    else{
        location.href = "sign-in.html";      
    }   
}

/*if users click "sign out" text */
const accountState = event =>{
    if(signInbool != null || signUpbool != null){
        if(signInbool === true || signUpbool ===true){

            //users sign out
            signInbool = false;
            signUpbool = false;
            
            localStorage.setItem("signUpBoolean", JSON.stringify(signUpbool));
            localStorage.setItem("signInBoolean", JSON.stringify(signInbool));
        } 
    }
    
    else{
        location.href = "sign-in.html";
    } 
    
    
}

const submit = document.getElementById("account");
submit.addEventListener("click",accountState);
