/*the 4-lines codes are based upon an example of W3Schools
  Author: W3Schools
  Location: https://www.w3schools.com/jsref/jsref_getfullyear.asp
  Accessed : 01/04/2023*/
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = (currentDate.getMonth()) + 1;
let day = currentDate.getDate();

let userDay;
let userBirthday;
let userBirth;
let userMonth;
let userYear;
let ageUser;
let genderUser;
let heightUser;
let averageWeightUser;
let userWeightDate;
let weightArray;
let BMIuser;
let goalData;
let weightAverage;
let BMI;
let BMIresult;
let exerciseBasedONBMI;


if(localStorage.getItem(weightKey) != null){
    weightArray = JSON.parse(localStorage.getItem(weightKey));
}

if(localStorage.getItem(goalKey)!= null){
    goalData = JSON.parse(localStorage.getItem(goalKey));
}

if(localStorage.getItem(genderKey) != null){
    genderUser = JSON.parse(localStorage.getItem(genderKey));
} 

if(localStorage.getItem(heightKey) != null){
    heightUser = JSON.parse(localStorage.getItem(heightKey));
}

if(localStorage.getItem(weightKey) != null){
     
     if(signInbool === true || signUpbool === true){
        if(weightArray != null){
            document.getElementById("currentWeight").innerHTML = weightArray [weightArray.length -1];
        }

        else{
            document.getElementById("currentWeight").innerHTML = "...";
        }
    }
    
    else{
        document.getElementById("currentWeight").innerHTML = "...";
    }       
}

if(localStorage.getItem(goalKey)!= null){
    
    if(signInbool === true || signUpbool === true){
        if(goalData != null){
        document.getElementById("goalWeight").innerHTML = goalData + "kg";
        }

        else if(goalData === null){
            document.getElementById("goalWeight").innerHTML = "...";
        }
    }
    
    else{
        document.getElementById("goalWeight").innerHTML = "..."
    }
}


const getUserAge = () => {

    if(localStorage.getItem("userBirthday")!= null){

        userBirthday = JSON.parse(localStorage.getItem("userBirthday"));

        if(signInbool === true){
            userBirth = userBirthday[userIndex];
        }

        else if(signUpbool == true){
            userBirth = userBirthday[userBirthday.length -1];
        }
    }
    
    userDay = new Date(userBirth).getDate();
    userMonth = (new Date(userBirth).getMonth()) + 1;
    userYear = new Date(userBirth).getFullYear();
    
    if(month < userMonth){
        ageUser = year - userYear - 1;
    }
    
    else if(month = userMonth && day < userDay){
        ageUser = year - userYear - 1;
    }

    else if(month = userMonth && day >= userDay){
        ageUser = year - userYear;
    }
    
    else if(month > userMonth){
        ageUser = year - userYear;
    }
}


const getAverageWeightUser = () => {

        
        if(genderUser[genderUser.length -1] === "male"){
            averageWeightUser = (heightUser * 0.01) * (heightUser * 0.01) * 22;
        }

        else if(genderUser[genderUser.length - 1] === "female"){
            averageWeightUser = (heightUser * 0.01) * (heightUser * 0.01) * 21;
        }

        else if(genderUser[genderUser.length - 1] === "others"){
            averageWeightUser = (heightUser * 0.01) * (heightUser * 0.01) * 21;            
        }

        weightAverage = Math.round(averageWeightUser);

    } 



const getBMI = () => {

    if(localStorage.getItem(weightKey)!= null && localStorage.getItem(heightKey)!= null){

        if(heightUser != null){
        BMIuser = (weightArray[weightArray.length -1]/((heightUser * 0.01)*(heightUser *0.01)));
        BMI = BMIuser.toFixed(2);

    if(BMI < 18.5){
        BMIresult = "under weight";
    }

    else if(BMI >= 18.5 && BMI < 25){
        BMIresult = "normal weight";
    }

    else if(BMI >= 25 && BMI < 30){
        BMIresult = "over weight";
    }

    else if(BMI >= 30 && BMI <35){
        BMIresult = "obese";
    }

    else if(BMI >= 35){
        BMIresult = "extremely obese"
    }
}
}

if(BMIresult === "under weight"){
    exerciseBasedONBMI = "weight training";
}

else if(BMIresult === "normal weight" || BMIresult === "over weight"){
    exerciseBasedONBMI = "weight training and cardio exercise";
}

else if(BMIresult === "obese" || BMIresult === "extremely obese"){
    exerciseBasedONBMI = "cardio exercise";
}
}



if(localStorage.getItem("userBirthday")!= null && localStorage.getItem(genderKey)!= null && localStorage.getItem(heightKey)!= null){
    getUserAge();
    getAverageWeightUser();

    if(signInbool === true || signUpbool === true){
        if(genderUser != null && heightUser != null){
        document.getElementById("userAge").innerHTML = "for  " + ageUser + "-year-old  ";
        document.getElementById("userGender").innerHTML = genderUser[genderUser.length - 1];
        document.getElementById("userHeight").innerHTML = "  with  " +  heightUser+"cm";
        document.getElementById("averageWeight").innerHTML = weightAverage + "kg";
        }

        else{
            document.getElementById("userAge").innerHTML = "...";
            document.getElementById("userGender").innerHTML = "...";
            document.getElementById("userHeight").innerHTML = "...";
            document.getElementById("averageWeight").innerHTML = "...";            
        }
    }

    else{
        document.getElementById("userAge").innerHTML = "...";
        document.getElementById("userGender").innerHTML = "...";
        document.getElementById("userHeight").innerHTML = "...";
        document.getElementById("averageWeight").innerHTML = "...";    
    }
}

if(localStorage.getItem(weightKey) != null && localStorage.getItem(heightKey) != null){
    getBMI();

    if(signInbool === true || signUpbool === true){
       document.getElementById("BMIindex").innerHTML = BMI;
       document.getElementById("resultBMI").innerHTML = BMIresult;
       document.getElementById("resultOfBMI").innerHTML = "with  " + BMIresult;
       document.getElementById("exercisetype").innerHTML = exerciseBasedONBMI + "can be helpful for people with  " + BMIresult;
        

        if(heightUser === null || weightArray === null){
            document.getElementById("BMIindex").innerHTML = "";
            document.getElementById("resultBMI").innerHTML = "";
            document.getElementById("resultOfBMI").innerHTML = "";
            document.getElementById("exercisetype").innerHTML = "these exercise can be helpful for you";  
            document.getElementById("exercise_type_1").innerHTML = "weight training";
            document.getElementById("exercise_type_2").innerHTML = "walking";
            document.getElementById("exercise_type_3").innerHTML = "swimming";                 
        }
    }

    else{
        document.getElementById("BMIindex").innerHTML = "...";
        document.getElementById("resultBMI").innerHTML = "...";
        document.getElementById("resultOfBMI").innerHTML = "...";
    }

    if(exerciseBasedONBMI === "weight training"){
        document.getElementById("exercise1").src = "images/dumbbell.png";
        document.getElementById("exercise_type_1").innerHTML = "weight training";
        document.getElementById("exercise2").src = "images/pushup.png"; 
        document.getElementById("exercise_type_2").innerHTML = "push up" ; 
        document.getElementById("exercise3").src="images/sprinting.png";
        document.getElementById("exercise_type_3").innerHTML = "sprinting";   
    }

    else if(exerciseBasedONBMI === "cardio exercise"){
        document.getElementById("exercise1").src = "images/volleyball.png"
        document.getElementById("exercise_type_1").innerHTML = "volleyball";
        document.getElementById("exercise2").src = "images/swimming.png"
        document.getElementById("exercise_type_2").innerHTML = "swimming"; 
        document.getElementById("exercise3").src = "images/walk.png"
        document.getElementById("exercise_type_3").innerHTML = "walk";
    }

    else if(exerciseBasedONBMI === "weight training and cardio exercise"){
        document.getElementById("exercise1").src = "images/dumbbell.png"
        document.getElementById("exercise_type_1").innerHTML = "weight training";
        document.getElementById("exercise2").src = "images/sprinting.png"
        document.getElementById("exercise_type_2").innerHTML = "sprinting"; 
        document.getElementById("exercise3").src = "images/walk.png"
        document.getElementById("exercise_type_3").innerHTML = "walk";        
    }
}

if(localStorage.getItem(weightKey) === null && localStorage.getItem(heightKey) === null){
    document.getElementById("exercise_type_1").innerHTML = "weight training";
    document.getElementById("exercise_type_2").innerHTML = "walking";
    document.getElementById("exercise_type_3").innerHTML = "swimming";
}

else if(signInbool === false && signUpbool === false){
    document.getElementById("exercise_type_1").innerHTML = "weight training";
    document.getElementById("exercise_type_2").innerHTML = "walking";
    document.getElementById("exercise_type_3").innerHTML = "swimming"; 
}

const weightData = () => {

    if(signInbool === true || signUpbool === true){
        location.href = "weightData.html";       
    }

    else if(signInbool === false && signUpbool === false){
        document.getElementById("clickFeedback").innerHTML = "Please sign in!"
    }

    else{
        document.getElementById("clickFeedback").innerHTML = "Please sign in!"    
    }
}










