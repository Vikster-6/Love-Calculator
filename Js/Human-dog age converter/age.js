const humanBtn = document.querySelector("#humanbtn"),
     dogBtn = document.querySelector("#dogbtn"),
     humanAge = document.querySelector("#humanage"),
     dogAge = document.querySelector("#dogage");


humanBtn.onclick = function(){
    humanAgeInput = prompt ("Enter Your Age");
    humanAge.innerHTML = humanAgeInput;
    dogAge.innerHTML = (humanAgeInput - 13)/4;
    if(humanAgeInput === 0 || humanAgeInput === ""){
        alert("enter a valid age")
        dogAge.innerHTML = "";
        
    }
    else if(dogAge.innerHTML <= 0){
        alert("Dog doesn't exist");
        dogAge.innerHTML = "";
    }
}
dogBtn.onclick = function(){
    dogAgeInput = prompt ("Enter dog's Age");
    humanAge.innerHTML = (dogAgeInput - 2)*4 + 21;
    dogAge.innerHTML = dogAgeInput;
    if(dogAgeInput === 0 || dogAgeInput === ""){
        alert("enter a valid age")
        humanAge.innerHTML = ""
    }
   
}