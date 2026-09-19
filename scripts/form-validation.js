/* Anthony Thomas 9/19/26 */

"use strict"

/* fuction to identify all missing required field */

function checkMissing(inForm) {
    let warnArr = document.getElementById("checkMissing");

    if (inForm.checkValidity() == false) {
        let elementsArr = inForm.querySelectorAll(':invalid');
        let errCount = elementsArr.length-1;

            warnArr.innerHTML = "You are missing data in " + errCount + " fields in this form.";
            warnArr.classList.add("required");

            return false;
        
    }
    else {
            warnArr.innerHTML = "";
            warnArr.classList.remove("required");
            return true;
        }
    
}

/* function to require email to have at least 8 charcters before submitting */

function validateEmail() {
    let email = document.getElementById("email");
    let warnArr = document.getElementById("checkMissing");

    if (email.length < 8) {
        email.classList.add("invalidEmail");
        warnArr.innerHTML = "Email must be at least 8 characters.";

        return false;
    }

    else {
        email.classList.remove("invalidEmail");

        return true;
    }

}

/* Function to combine previous two functions and add an alert message */

function validateForm(inForm) {
    let missingValid = checkMissing(inForm);
    let emailValid = validateEmail();

    if (missingValid == false || emailValid == false) {
        alert("Please fill the incorrect or invalid fields before submitting.");
        return false;
    }

    return true;

}