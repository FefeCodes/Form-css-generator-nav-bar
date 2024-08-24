const hexadecimalNumberSystem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let button = document.getElementById("button")
let firstColorBox = document.getElementById("first-color-box")
let firstHexCode = document.getElementById("first-hex-code")
let secondColorBox = document.getElementById("second-color-box")
let secondHexCode = document.getElementById("second-hex-code")
let thirdColorBox = document.getElementById("third-color-box")
let thirdHexCode = document.getElementById("third-hex-code")


function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * hexadecimalNumberSystem.length)
    return randomNumber
}

button.addEventListener("click", function(){
    let hexCodeForFirstBox = '#'
    for(let myFirstLoop = 0; myFirstLoop < 6; myFirstLoop++){
        hexCodeForFirstBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    firstColorBox.style.backgroundColor = hexCodeForFirstBox
    firstHexCode.textContent = hexCodeForFirstBox



    let hexCodeForSecondBox = '#'
    for(let mySecondLoop = 0; mySecondLoop < 6; mySecondLoop++){
        hexCodeForSecondBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    secondColorBox.style.backgroundColor = hexCodeForSecondBox
    secondHexCode.textContent = hexCodeForSecondBox


    

    let hexCodeForThirdBox = '#'
    for(let myThirdLoop = 0; myThirdLoop < 6; myThirdLoop++){
        hexCodeForThirdBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    thirdColorBox.style.backgroundColor = hexCodeForThirdBox
    thirdHexCode.textContent = hexCodeForThirdBox
})