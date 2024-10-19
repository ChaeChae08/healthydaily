let nameUser = JSON.parse(localStorage.getItem("username"));
let sumTime = 0;
let averageTime;
let sameDate = [];
let exerciseDateData;
let exerciseTimeData;
let weightArray;

//"let exerciseTimeKey = exerciseTime.newKey();" in 'main.js'
if(localStorage.getItem(exerciseTimeKey) != null){
    exerciseTimeData = JSON.parse(localStorage.getItem(exerciseTimeKey));
}

//"let exerciseDateKey = exerciseDate.newKey();" in 'main.js'
if(localStorage.getItem(exerciseDateKey) != null){
    exerciseDateData = JSON.parse(localStorage.getItem(exerciseDateKey));   
}

//if user sign up, the last value of nameUser array will be displayed in the cheerup section
if(signUpbool === true){
    document.getElementById("username").innerHTML = nameUser[nameUser.length -1];
}

//if user sign in, the user's name that matches with userIndex will be displayed in the cheer up section
else if(signInbool === true){
    document.getElementById("username").innerHTML = nameUser[userIndex];
    
}

//if users sign out, the users' name will not be shown
else if(signUpbool === false && signInbool === false){
    document.getElementById("username").innerHTML = "You can do it!";
}

else{
    document.getElementById("username").innerHTML = "You can do it!";
}


if(localStorage.getItem(weightKey) != null){
    weightArray = JSON.parse(localStorage.getItem(weightKey));

    //if users sign in or sign up, the latest stored users' weight will be shown
    if(signInbool === true || signUpbool === true){
        if(weightArray != null){
            document.getElementById("userWeight").innerHTML = weightArray [weightArray.length -1] + "kg";
        }

        //if users have not typed their weight data yet
        else{
            document.getElementById("userWeight").innerHTML = "...kg";
        }
    }
    
    //if users sign out
    else{
        document.getElementById("userWeight").innerHTML = "...kg";
    }
    
}

//a function for getting average exercise time of a user : a sum of exercise time/(the number of duplicated dates + the number of not duplicated dates)

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
}


if(localStorage.getItem(exerciseTimeKey) != null && localStorage.getItem(exerciseDateKey) != null){

    getAverageTime();

    //if users sign in or sign up
    if(signInbool === true || signUpbool === true){
        //if only one exercise time of a user has been stored, the exercise time will be shown
        if(exerciseTimeData.length === 1){
            document.getElementById("time_average").innerHTML = "average " + exerciseTimeData + " mins in a day";
        }

        //if the number of exercise time data is more than one, the average of exercise time will be shown
        else if(exerciseTimeData.length > 1){
            const averageExerciseTime = Math.round(averageTime);
            document.getElementById("time_average").innerHTML = "around " + averageExerciseTime + " mins in a day";
        }
    }
    
    //if users sign out or do not have account yet
    else {
        document.getElementById("time_average").innerHTML = "...";
    }
}
