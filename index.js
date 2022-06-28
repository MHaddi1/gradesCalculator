
function Answer(){
    var x = "😭";
    var val1 = document.getElementById("Subject1").value;

    val1 = parseInt(val1);

    var val2 = document.getElementById("Subject2").value;

    val2 = parseInt(val2);
    
    var val3 = document.getElementById("Subject3").value;
    
    val3 = parseInt(val3);
    
    var val4 = document.getElementById("Subject4").value;
    
    val4 = parseInt(val4);
    
    var result = val1+val2+val3+val4;
    
    result=parseInt(result);
    
    document.querySelector("h2").innerHTML=result;
    
    if(val1>100&&val2>100&&val3>100&&val4>100){
        document.querySelector("h2").innerHTML="Please Enter The Number less then or Equal to 100 for calculate your grades";
    }
    
    else{
        var percentage = (result*100)/400;
        console.log(percentage);
    
        if(percentage>=85){
            document.querySelector("h2").innerHTML="A+ Grade"+" and Your Percenage is: " +percentage+"% 🎉";

        }
    
        else if(percentage>=84){
            document.querySelector("h2").innerHTML="A Grade"+" and Your Percenage is: " +percentage+"% 🎉";
        }
    
        else if(percentage>=80){
            document.querySelector("h2").innerHTML="B+ Grade"+" and Your Percenage is: " +percentage+"% 😊";
        }
    
        else if(percentage>=75){
            document.querySelector("h2").innerHTML="B Grade"+" and Your Percenage is: " +percentage+"% 😊";
        }
    
        else if(percentage>=70){
            document.querySelector("h2").innerHTML="C+ Grade"+" and Your Percenage is: " +percentage+"% 😊";
        }
    
        else if(percentage>=69){
            document.querySelector("h2").innerHTML="C Grade"+" and Your Percenage is: " +percentage+"% 😊";
        }
    
        else if(percentage>=65){
            document.querySelector("h2").innerHTML="D+ Grade"+" and Your Percenage is: " +percentage+"% 😊";
        }
        else if(percentage>=51){
            document.querySelector("h2").innerHTML="D Grade"+" and Your Percenage is: " +percentage+"% 😊";
        }
    
        else if(percentage<=50){
            document.querySelector("h2").innerHTML="Fail 😭";

            
        }
    }
}

function effect(){
document.querySelector(".card-body").classList.add("body1")
}