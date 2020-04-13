// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
    var passwordFeatures = {
        "length": 8,
        "special": false,
        "numeric": true,
        "lowercase": true,
        "uppercase": false,
    }
    alert("Please select from the following criteria to generate your password:");
    passwordFeatures.length = prompt("Please provide a password length between 8 and 128.");
    if (isNaN(passwordFeatures.length)) {
        alert(`Sorry, ${passwordFeatures.length} is not a number. Using 20 instead`);
        passwordFeatures.length = 25;
    } 
    else if (passwordFeatures.length < 8) {
        alert("Password must be at least 8 characters long. Using 8 instead");
    }
    else if (passwordFeatures.length > 128) {
        alert("Password cannot exceed 128 characters. Using 128 instead");
        passwordFeatures.length = 128;
    }
    //Maybe revisit this to use while loops instead.

    passwordFeature.special = confirm("Click OK to confirm including special characters");
    passwordNumeric.numeric = confirm("Click OK to confirm including numeric characters");
    passwordNumeric.lowercase =  confirm("Click OK to confirm including lowercase characters");
    passwordNumeric.uppercase = confirm("Click OK to confirm including uppercase characters");
    
    if (passwordFeatures.includes("true",0) = false) {
        alert("Using default settings");
        passwordFeatures.numeric, passwordFeatures.lowercase = true;
    }

    console.log(passwordFeatures)

    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    // WHEN the password is generated
    // THEN the password is either displayed in an alert or written to the page

    // Figure out what to do if no options are selected.

}
