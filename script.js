// Assignment code here

function generatePassword() {
  // Make this an object maybe? Nah for now
  //var passparams = {
  var passwordLength = prompt("Please input a password length (at least 8 characters but no more than 128 characters).");
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");
  // };
  // var generatedPass = "JustTesting";

  //just logging to confirm if result of confirm is bool....
  //console.log(includeLowercase);

    //check inputs
  // the password needs to be a valid length 
  // if (passwordLength < 8 || passwordLength > 128) {
  //   passwordLength = prompt("Password length invalid. Please enter number between 8 and 128.");
  // }

  // make function to make the actual password and call it only if tests check out
  var generatedPass = [];
  var specialCharsString = "!@#$%^&*(){}[]=<>/,.";
  //var specialChars = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  //how to use ALL special chars in string since everything you would need to escape them is in the string? Evil! ;/
  var lowercaseCharsString = "abcdefghijklmnopqrstuvwxyz";
  var numbersString = "0123456789";
  var uppercaseCharsString = lowercaseCharsString.toUpperCase()

  //convert all of the strings of stuff into arrays
  var specialCharArray = specialCharsString.split('');
  var lowercaseArray = lowercaseCharsString.split('');
  var numbersArray = numbersString.split('');
  var uppercaseArray = uppercaseCharsString.split('');

      // #1 if the user just wants lowercase letters
  if (includeLowercase && includeUppercase === false && includeNumeric === false & includeSpecial === false) {
    for(var i = 0; i < passwordLength; i++) {
      //use a random number to select from arrays/strings up to the length
      generatedPass.push((lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]));
    }
  }

  //#2 if the user wants lowercase and numeric
  if (includeLowercase && includeUppercase === false && includeNumeric === true & includeSpecial === false) {
    for(var i = 0; i < passwordLength; i++) {
        //add the arrays we need
      newArray = numbersArray.concat(lowercaseArray);
      //use a random number to select from arrays/strings up to the length
      generatedPass.push(newArray[Math.floor(Math.random() * newArray.length)]);
    }
  }

  //#3 if the user wants lowercase, uppercase, and numeric
  if (includeLowercase && includeUppercase === true && includeNumeric === true & includeSpecial === false) {
    for(var i = 0; i < passwordLength; i++) {
        //add the arrays we need
      newArray = numbersArray.concat(lowercaseArray, uppercaseArray);
      //use a random number to select from arrays/strings up to the length
      generatedPass.push(newArray[Math.floor(Math.random() * newArray.length)]);
    }
  }

  //#4 if user wants lowercase, uppercase, numeric, and specialchars
  if (includeLowercase && includeUppercase === true && includeNumeric === true & includeSpecial === true) {
    for(var i = 0; i < passwordLength; i++) {
        //add the arrays we need
      newArray = numbersArray.concat(lowercaseArray, uppercaseArray, specialCharArray);
      //use a random number to select from arrays/strings up to the length
      generatedPass.push(newArray[Math.floor(Math.random() * newArray.length)]);
    }
  }

  //#5 if we have lowercase and uppercase
  if (includeLowercase && includeUppercase === true && includeNumeric === false & includeSpecial === false) {
    for(var i = 0; i < passwordLength; i++) {
        //add the arrays we need
      newArray = lowercaseArray.concat(uppercaseArray);
      //use a random number to select from arrays/strings up to the length
      generatedPass.push(newArray[Math.floor(Math.random() * newArray.length)]);
    }
  }

  //#6 if we have lowercase and special...
  //this is going to be 16 functions....  
  return(generatedPass.join(''));
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
