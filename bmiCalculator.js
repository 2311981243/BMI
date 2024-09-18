function calculateBmi() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    
    if (height > 0 && weight > 0) { 
        height = height / 100;
        var bmi = weight / (height * height);
        bmi=bmi.toFixed(2);
        document.getElementById("ans").value = bmi;
    } else {
        alert("Please enter valid height and weight values.");
    }
    if(bmi>18.5&&bmi<24.9)
    document.getElementById("li3").style.color="red";
    else
    if(bmi<16.0)
    document.getElementById("li1").style.color="red";
    else
    if(bmi>16.4&&bmi<18.4)
    document.getElementById("li2").style.color="red";
    else
    if(bmi>25.0&&bmi<29.9)
    document.getElementById("li4").style.color="red";
    else
    if(bmi>30.0&&bmi<34.9)
    document.getElementById("li5").style.color="red";
    else
    if(bmi>35.0&&bmi<39.9)
    document.getElementById("li6").style.color="red";
    else
    if(bmi>40.0)
    document.getElementById("li7").style.color="red";
}
function colorChange()
{
    document.getElementById("li1").style.color="white";
    document.getElementById("li2").style.color="white";
    document.getElementById("li3").style.color="white";
    document.getElementById("li4").style.color="white";
    document.getElementById("li5").style.color="white";
    document.getElementById("li6").style.color="white";
    document.getElementById("li7").style.color="white";
}