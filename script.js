var myVariable = 20
var number2 = 20
var myWord = "Snow"


var showDog = false

//This is my function
function saySomething() {

 var result = myVariable + number2
    console.log("This is Holly typing:" + myVariable)
}

function toggleDoge(){

    var img = document.getElementById("dogPic")
    
    if (showDog == false){
        // Hiding
        img.style.visibility = "hidden"
        showDog = true

       
    }else if (showDog == true){
        // Reveal
        img.style.visibility = "visible"
        showDog = false

    }
}