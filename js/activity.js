let exerciseTimeData;
let exerciseDateData;
let exerciseTypeData;
let sameDate =[];
let averageTime;
let sumTime = 0;
let value;

const monthsWith31days = [1,3,5,7,8,10,12];
const monthsWith30days = [4,6,9,11];

let sumKcal = 0;

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


function getDate (num) {

    this.num = num;

    this.Date = function(){

        let getDay;
        let getMonth;
        let getYear;

        if(day > num){
            getDay = day - num;
            getMonth = month;
            getYear = year;
        }

        else if(day <= num && month != 1){
            getMonth = month - 1;
            getYear = year;
            for(let i in monthsWith31days){
                if(getMonth === monthsWith31days[i]){
                    getDay = 31 - (num - day);
                }
            }

            for(let j in monthsWith30days){
                if(getMonth === monthsWith30days[i]){
                    getDay =  30 - (num - day);
                }
            }
        }

        else if(day <= num && month === 1){
            getMonth = 12;
            getYear = year -1 ;
            for(let i in monthsWith31days){
                if(getMonth === monthsWith31days[i]){
                    getDay = 31 - (num - day);
                }
            }

            for(let j in monthsWith30days){
                if(getMonth === monthsWith30days[i]){
                    getDay =  30 - (num - day);
                }
            }           
        }

        if(getMonth < 10 && getDay < 10){
            return getYear + "-" + "0" + getMonth + "-"+ "0" + getDay;
        }

        else if(getMonth < 10 && getDay >= 10){
            return getYear + "-" + "0" + getMonth + "-"+ getDay;
        }

        else if(getMonth >= 10 && getDay < 10){
            return getYear + "-"+ getMonth + "-" + "0" + getDay;
        }

        else if(getMonth >= 10 && getDay >=  10){
            return getYear + "-" + getMonth + "-" + getDay;
        }
    }
}

let today = new getDate(0);
let todayDate = today.Date();
let yesterday = new getDate(1);
let yesterdayDate = yesterday.Date();
let theDateBeforeYesterday = new getDate(2);
let theDateBeforeYeseterdayDate = theDateBeforeYesterday.Date();
let dateArray = [theDateBeforeYeseterdayDate, yesterdayDate, todayDate];
let valueArray = ["1", "2", "3"];


if(localStorage.getItem(exerciseTimeKey) != null){
    exerciseTimeData = JSON.parse(localStorage.getItem(exerciseTimeKey));
}

if(localStorage.getItem(exerciseDateKey) != null){
    exerciseDateData = JSON.parse(localStorage.getItem(exerciseDateKey));   
}


const getAverageTime = () =>{

    /*the two-lines codes below are based on an example of flexiple
      Author: flexiple
      Location: https://flexiple.com/javascript/find-duplicates-javascript-array/
      Accessed: 05/04/2023 */   

    const duplicate = exerciseDateData => exerciseDateData.filter((item, index) => exerciseDateData.indexOf(item) !== index);
    const findDuplicate = duplicate(exerciseDateData);

    for(let letter of exerciseTimeData){
        sumTime += Number(letter);
    }

    const findunDuplicate = exerciseDateData.length - findDuplicate.length;
    averageTime = sumTime/(findunDuplicate);
    console.log(averageTime);
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

const getExerciseKcal =  () =>{

if(localStorage.getItem(exerciseTypeKey)!= null){

    exerciseTypeData = JSON.parse(localStorage.getItem(exerciseTypeKey));

    for(let i = 0; i < exerciseTypeData.length ; i += 3){
        for(let j = 0; j < valueArray.length; j ++){
            if(valueArray[j] === value){
                if(exerciseTypeData[i] === dateArray[j]){

                if(exerciseTypeData[i+1] === "walking"){

                    sumKcal += (2.5 * exerciseTypeData[i+2]);
                }

                else if(exerciseTypeData[i+1] === "running"){
                    sumKcal += (9.2 * exerciseTypeData [i +2]);
                }

                else if(exerciseTypeData[i + 1] === "swimming"){
                    sumKcal += (8.6 * exerciseTypeData [i + 2]);
                }

                else if(exerciseTypeData[i + 1] === "boxing"){
                    sumKcal += (9.8 * exerciseTypeData [i + 2]);
                }

                else if(exerciseTypeData[i + 1] === "weight training"){
                    sumKcal += (7.4 * exerciseTypeData [i + 2]);
                }

                else if(exerciseTypeData[i + 1] === "yoga"){
                    sumKcal += (5 * exerciseTypeData [i + 2]);
                }   
                
                else if(exerciseTypeData[i + 1] === "tennis"){
                    sumKcal += (12.1 * exerciseTypeData [i + 2]);
                }

                else if(exerciseTypeData[i + 1] === "cycling"){
                    sumKcal += (9.8 * exerciseTypeData [i + 2]);
                }

                else if(exerciseTypeData[i + 1] === "badminton"){
                    sumKcal += (6.1 * exerciseTypeData [i + 2]);
                }
            }
        }
    }
        }
    }
}


if(localStorage.getItem("userBirthday") != null){
    getUserAge();
    
    if(signInbool === true || signUpbool === true){
        document.getElementById("userAge").innerHTML = "for " + ageUser + " years-old";
        document.getElementById("age").innerHTML = "with " + ageUser + " years-old";

        
        if(ageUser <= 17){
            document.getElementById("averageExerciseTime").innerHTML = "more than 60 mins in a day";
        }
        
        else if(ageUser > 17 && ageUser < 65){
            document.getElementById("averageExerciseTime").innerHTML = "around 75 mins in a day "
        }

        else if(ageUser >= 65){
            document.getElementById("averageExerciseTime").innerHTML = "around 130 mins in a week"
        }

        if(ageUser <= 29){
            document.getElementById("exercise1").src = "images/swimming.png";
            document.getElementById("exercise_type_1").innerHTML = "swimming";
            document.getElementById("exercise2").src ="images/sprinting.png";
            document.getElementById("exercise_type_2").innerHTML = "sprinting";
            document.getElementById("exercise3").src = "images/taekwondo.png"
            document.getElementById("exercise_type_3").innerHTML = "taekwondo";
        }

        else if(ageUser > 29 && ageUser <= 45){
            document.getElementById("exercise1").src = "images/dumbbell.png";
            document.getElementById("exercise_type_1").innerHTML = "weight training";
            document.getElementById("exercise2").src ="images/tennis.png";
            document.getElementById("exercise_type_2").innerHTML = "tennis";
            document.getElementById("exercise3").src = "images/pushup.png"
            document.getElementById("exercise_type_3").innerHTML = "push up";           
        }

        else if(ageUser > 45 && ageUser <= 65){
            document.getElementById("exercise1").src = "images/walk.png";
            document.getElementById("exercise_type_1").innerHTML = "walking";
            document.getElementById("exercise2").src ="images/hiking.png";
            document.getElementById("exercise_type_2").innerHTML = "hiking";
            document.getElementById("exercise3").src = "images/volleyball.png"
            document.getElementById("exercise_type_3").innerHTML = "voellyball";   
        }

        else if(ageUser > 65){

            document.getElementById("exercise1").src = "images/walk.png";
            document.getElementById("exercise_type_1").innerHTML = "walking";
            document.getElementById("exercise2").src ="images/stretching.png";
            document.getElementById("exercise_type_2").innerHTML = "stretching";
            document.getElementById("exercise3").src = "images/swimming.png"
            document.getElementById("exercise_type_3").innerHTML = "swimming";    

        }

    }



    else{
        document.getElementById("userAge").innerHTML = "";
        document.getElementById("averageExerciseTime").innerHTML = "";
        document.getElementById("age").innerHTML = "";
        document.getElementById("exercise1").src = "images/walk.png";
        document.getElementById("exercise_type_1").innerHTML = "walking";
        document.getElementById("exercise2").src ="images/dumbbell.png";
        document.getElementById("exercise_type_2").innerHTML = "weight training";
        document.getElementById("exercise3").src = "images/tennis.png"
        document.getElementById("exercise_type_3").innerHTML = "tennnis";        
    }
}


if(localStorage.getItem(exerciseTimeKey) != null && localStorage.getItem(exerciseDateKey) != null){

    getAverageTime();

    if(signInbool === true || signUpbool === true){

    if(exerciseTimeData.length === 1){
        document.getElementById("exercise_time").innerHTML = exerciseTimeData;
    }

    else if(exerciseTimeData.length > 1){
        const averageExerciseTime = Math.round(averageTime);
        document.getElementById("exercise_time").innerHTML = "around " + averageExerciseTime;
    }
}


else {
document.getElementById("exercise_time").innerHTML = "...";
}
}


    const feedbackevent = event => {
        value = document.getElementById("daySlider").value;
        console.log(value);
        sumKcal = 0;
        getExerciseKcal();
        console.log(sumKcal); 

        if(signInbool === true || signUpbool === true){
        if(sumKcal != 0){
        document.getElementById("exerciseKcal").innerHTML = "you spent " + sumKcal + "kcal" + " on " + dateArray[value - 1];
        }

        else{
            document.getElementById("exerciseKcal").innerHTML ="your exercise data on that day has not been entered!";
        }
    }

    else {
        document.getElementById("exerciseKcal").innerHTML = "you can use this function after you sign in!";
    }
}
    
    const btn = document.getElementById("check");
    btn.addEventListener("click",feedbackevent);   

    const activityData = () => {

        if(signInbool === true || signUpbool === true){
            location.href = "activityData.html";       
        }
    
        else if(signInbool === false && signUpbool === false){
            document.getElementById("clickFeedback").innerHTML = "you can use this function once you sign up or sign in!"
        }

        else{
            document.getElementById("clickFeedback").innerHTML = "you can use this function once you sign up or sign in!"           
        }
    }