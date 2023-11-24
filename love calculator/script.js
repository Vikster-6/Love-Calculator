const input1 = document.querySelector("#input1"),
        input2 = document.querySelector("#input2"),
        calcBtn = document.querySelector("#Calculate"),
        message = document.querySelector("#message"),
        output = document.querySelector("#output");
    
calcBtn.onclick = function(){
    function generateRandomNumber(){
        let num = (Math.random()*100) + 1;
        let roundedNum = num.toFixed(2);
        return roundedNum;
    }
    
    let randomNum = generateRandomNumber();
    console.log(randomNum);

    if(input1.value === "" && input2.value === "" ){
        alert("please enter a name in the form")
    }
    else if(input1.value === ""){
        alert("Please enter your name")
    }
    else if(input2.value === ""){
        alert("Please enter your crush's name")
    }
    else {
        let count = 0;

        const percent = setInterval(counter , 10);
        function counter(){
                output.innerText = (count+= 0.1).toFixed(2)+"%"  ;
                if(count >= randomNum){
                    clearInterval(percent);
                }   
            }
        
    }

}