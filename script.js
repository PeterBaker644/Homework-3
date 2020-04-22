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
    var passwordFeatures = {};
   
    // Query length and features of password.

    alert("Please select from the following criteria to generate your password:");
    
    do {
        passwordFeatures.length = prompt("Provide a password length between 8 and 128.");
        if (!passwordFeatures.length) {
            alert ("Using default length.");
            passwordFeatures.length = 20;
        }
        else if (isNaN(passwordFeatures.length)) {
            alert(`Sorry, ${passwordFeatures.length} is not a number.`);
        } 
        else if (passwordFeatures.length < 8) {
            alert("Password must be at least 8 characters long.");
        }
        else if (passwordFeatures.length > 128) {
            alert("Password cannot exceed 128 characters.");
        }
    } while (passwordFeatures.length < 8 || passwordFeatures.length > 128 || isNaN(passwordFeatures.length));

    passwordFeatures.length = Number(passwordFeatures.length)

    passwordFeatures.specChars = confirm("Click OK to confirm including special characters");
    passwordFeatures.numeric = confirm("Click OK to confirm including numeric characters");
    passwordFeatures.lowercase =  confirm("Click OK to confirm including lowercase characters");
    passwordFeatures.uppercase = confirm("Click OK to confirm including uppercase characters");

    if (!Object.values(passwordFeatures).includes(true)) {
        alert("No characters chosen, using default settings");
        passwordFeatures.numeric = true, passwordFeatures.lowercase = true;
    } else {    
        alert("You have chosen valid entries")
    }

    // Generate a string of characters according to the user selection.
    
    var password = "";
    var selectedFeatures = [];
    var keyString = "";
    var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
    var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numerals = "0123456789";
    var specChars = "~!@#$%^&*_-+=`|(){}[]:;\"'<>,.?/\\";

    console.log(selectedFeatures);

    if (passwordFeatures.specChars) {
        selectedFeatures.push("specChars");
    }
    if (passwordFeatures.numeric) {
        selectedFeatures.push("numerals");
    }
    if (passwordFeatures.lowercase) {
        selectedFeatures.push("alphabetLower");
    }
    if (passwordFeatures.uppercase) {
        selectedFeatures.push("alphabetUpper");
    }

    function genKey() {
        keyString = "";
        while (keyString.length < passwordFeatures.length) {
            keyString += (Math.floor(Math.random() * selectedFeatures.length + 1)).toString();
        }
        console.log(keyString);
    }   

    genKey();
    var i = 1

    // The keyString interator. This will run until the generated meets the criteria provided. Probably not infinite.
    while (i <= selectedFeatures.length) {
        console.log('Initial i = ' + i)
        if (keyString.IndexOf(i) != s.LastIndexOf(i)) {
            console.log("Success. keyString includes " + i);
            i++;
        } else {
            // r = confirm("The key has not generated properly.");
            // if (r == true) {
                i = 1;
                console.log('Reset i = ' + 1);
                genKey();
            // } else {
            //     break;
            // }
        }        
    }

    console.log(keyString);

    // For Example: selectedFeatures = ["specChars","numerals","alphabetLower"]

    function randomNumber(index) {
        if (selectedFeatures[(index - 1)] == "specChars") {
            random = specChars.charAt(Math.floor(Math.random() * specChars.length));
        } else if (selectedFeatures[(index - 1)] == "numerals") {
            random = numerals.charAt(Math.floor(Math.random() * numerals.length));
        } else if (selectedFeatures[(index - 1)] == "alphabetLower") {
            random = alphabetLower.charAt(Math.floor(Math.random() * alphabetLower.length));
        } else if (selectedFeatures[(index - 1)] == "alphabetUpper") {
            random = alphabetUpper.charAt(Math.floor(Math.random() * alphabetUpper.length));
        }
        return random;
    }

    for (j = 0; j < passwordFeatures.length; j++) {
            var keyNumber = keyString.charAt(j); 
            password += randomNumber(keyNumber);
    }

    return password;

    //Given the keyNumber, the function must generate a random value of all features in the array passwordFeatures. Random number uses the string equal to passwordFeatures[keyNumber] (whatever.charAt(Math.floor(Math.random() * whatever.length)).

}

   

    // Generate random characters for the length of passwordFeature.length with all the characters of selectorString.

//     console.log(selectorString)

//     while (password.length < passwordFeatures.length) {
//         password += selectorString.charAt(Math.floor(Math.random() * selectorString.length));
//     }

//     return password;        


// Create a key string of random numbers 1 through (number of features) the length of passwordFeature.length. Recreate this string until it contains all numbers. Create an array of 4 randomizer functions, or create a function I can pass strings to. Choose a randomizer from the array to execute based on the key string value, and write result to new string for every value in the string. 

// Consider using cryptographically secure randomizers?