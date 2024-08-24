let fullNameInput = document.getElementById("fullname")
let emailInput = document.getElementById("email")
let phoneNumberInput = document.getElementById("phonenumber")
let fullNameAlert = document.getElementById("fullname-alert")
let emailAlert = document.getElementById("email-alert")
let phoneAlert = document.getElementById("phonenumber-alert")
let button = document.getElementById("button")

fullNameInput.addEventListener("keyup", function(){
    validateFullNameInput()
})

function validateFullNameInput(){
    let userFullName = fullNameInput.value
    if(userFullName.length == 0){
        fullNameAlert.innerText = `Enter Full Name`
        fullNameInput.style.border = `1px solid red`
    }else if(!userFullName.match(/^[^\d]+$/)){
         fullNameAlert.innerText = `You can not enter numbers in this field`
    }else{
        fullNameAlert.innerText = ` `
        fullNameInput.style.border = `2px solid green`
    }
}


emailInput.addEventListener("keyup", function(){
    validateEmailInput()
})

function validateEmailInput(){
     let userEmail = emailInput.value
     if(userEmail.length == 0){
       emailAlert.innerText = `Enter Your Email Address`
       emailInput.style.border = `1px solid red`
     }else if(!userEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailAlert.innerText = `Enter a Valid Email Address`
     }else{
        emailAlert.innerText = ` `
        emailInput.style.border = `2px solid green`
     }
}


phoneNumberInput.addEventListener("keyup", function(){
    validatePhoneNumber()
})

function validatePhoneNumber(){
    let userPhoneNumber = phoneNumberInput.value
    if(userPhoneNumber.length !== 11){
        phoneAlert.innerText = `Phone Number must be 11 digits`
        phoneNumberInput.style.border = `1px solid red`
    }else{
        phoneAlert.innerText = ` `
        phoneNumberInput.style.border = `2px solid green`
    }
}