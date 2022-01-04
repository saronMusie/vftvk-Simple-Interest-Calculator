function compute()
{
    //This function calculates the simple Interest
    var principal = document.getElementById("principal").value;
    if(principal <=0){
        alert("Enter a positive number");
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML ="If you deposit "+principal+",\<br\>at an Interest rate of "+rate+"%\<br\>You will recieve an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
}
function updateRate(){
    //This function updates the input type range 
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        