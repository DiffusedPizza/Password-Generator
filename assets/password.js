const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12
const passwordOne = document.getElementById("password-one")
const passwordTwo = document.getElementById("password-two")
let finalPass = "";
let btn = document.getElementById("pass-btn")



function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
   
    return finalPass = randomPassword 
}

const generatedPasswordOne = generateRandomPassword()
const generatedPasswordTwo = generateRandomPassword()

function displayPasswords() {
	getPassOne()
    getPassTwo()
}


function getPassOne() {
	generateRandomPassword()
    passwordOne.textContent = finalPass;
    
}

function getPassTwo() {
generateRandomPassword()
passwordTwo.textContent = finalPass;
}








console.log("Here is a random password: ", generatedPasswordOne + " " + generatedPasswordTwo)

