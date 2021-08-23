// ABCDEFGHIJKLMNOPQRSTUVWXWZ
// abcdefghijklmnopqrstuvwxwz
// !\"$%&/()=?@~'\\.\';:+=^*_-"
// 0123456789

//Slider bar and updater
var slider = document.getElementById("length");
var sliderOutput = document.getElementById("lengthValue");
sliderOutput.innerHTML = slider.value;
slider.oninput = function() {
    sliderOutput.innerHTML = this.value;
}

var random
var random1
var random2
var random3
 

var output = document.getElementById("password")

var loCase = document.getElementById("loCase")
    loCase = "abcdefghijklmnopqrstuvwxwz"

var upCase = document.querySelector("upCase")
    upCase = "ABCDEFGHIJKLMNOPQRSTUVWXWZ"

var numbers = document.getElementById("numbers")
    numbers = "0123456789"

var symbols = document.getElementById("symbols")
    symbols = `!\"$%&/()=?@~'\\.\';:+=^*_-"'` 

var characterList = [loCase, upCase, numbers, symbols]

var checkedEl


    //pulls all chekbox variables to see if true or false and updates when checkbox updates. Originally did an event listenr
    // on the first try of this but it would keep erroring out after 3 password generations. 
function validate() {
    var lCheck = document.getElementById("loCase")
        if (lCheck.checked){
            console.log("lowercase letter checked",lCheck.checked)
            lCheck = loCase
        }else 
            console.log("lowercase letter checked",lCheck.checked)

    var uCheck = document.getElementById("upCase")
        if (uCheck.checked){
            console.log("uppercase letter checked",uCheck.checked)
            uCheck = upCase
        }else 
            console.log("uppercase letter checked",uCheck.checked)

    var nCheck = document.getElementById("numbers")
        if (nCheck.checked){
           console.log("numbers checked",nCheck.checked)
           nCheck = numbers
        }else 
            console.log("numbers checked",nCheck.checked)

    var sCheck = document.getElementById("symbols")
        if (sCheck.checked) { 
            console.log("symbol checked",sCheck.checked)
            sCheck = symbols
        }else 
            console.log("symbol checked",sCheck.checked)

    checkedEl = [lCheck, uCheck, nCheck, sCheck]   
    return;
}
// Takes above information and then loops through the values of what is true and not true and generates characters.
function randomValue() { 
// console.log(checkedEl)
    for (let i = 0; i < checkedEl.length; i++) {
        // console.log(checkedEl[i].checked)
        // console.log(checker.checked)
        if  (checkedEl[0] === loCase) {
                return loCase.charAt(Math.floor(Math.random()*checkedEl[0].length));
                console.log(loCase.charAt(Math.floor(Math.random()*checkedEl[0].length)))
                // console.log("I got this far lets go A")
                // console.log(checkedEl[0].length) 
         }
    }     
}
function randomValue1() {
    for (let i = 0; i < checkedEl.length; i++){
       if  (checkedEl[1] === upCase) {
                return upCase.charAt(Math.floor(Math.random()*checkedEl[1].length));
                console.log(upCase.charAt(Math.floor(Math.random()*checkedEl[1].length)))
                // console.log("I got this far lets go B")
                // console.log(checkedEl[1].length)
        }        
    }
}
function randomValue2() {
    for (let i = 0; i < checkedEl.length; i++){
        if  (checkedEl[2] === numbers) {
                return numbers.charAt(Math.floor(Math.random()*checkedEl[2].length));
                console.log(numbers.charAt(Math.floor(Math.random()*checkedEl[2].length)))
                // console.log("I got this far lets go C")
                // console.log(checkedEl[2].length)    
        }
    }
}
function randomValue3() {
    for (let i = 0; i < checkedEl.length; i++){
        if  (checkedEl[3] === symbols) {
                return symbols.charAt(Math.floor(Math.random()*checkedEl[3].length)); 
                console.log(symbols.charAt(Math.floor(Math.random()*checkedEl[3].length)))
                // console.log("I got this far lets go D")
                // console.log(checkedEl[3].length) 
        }
    }
}    
var finalPasswordArray = ""



function genpwd() {
    var length = document.getElementById("length").value;
    var finalPassword = ""
    for(i = 0; i < length; i++) {
        random = randomValue(length)
        random1 = randomValue1(length)
        random2 = randomValue2(length)
        random3 = randomValue3(length)
//  Somewhere in here there needs to be a way to remove the "," out of the eqauasion
// and i need to divide the outcome/password that gets pushed to the screen by the length or somthing to make it actaully read the slider
// Need to learn more on how arrays for loops and objects work cause i obvisouly dont understand how they work. 
// Also need to add a randomizer to the final output. itteration 1 of this did it for me but now the way its setup it sort of has a structure to it I dont like it.         
        randomArray = [randomValue(), randomValue1(), randomValue2(), randomValue3()]

        finalPassword += randomArray
        console.log (finalPassword)
        output.value = finalPassword
   
}  
}        

validate()
