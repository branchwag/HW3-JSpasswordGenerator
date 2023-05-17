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
  var generatedPass = "JustTesting";

  //just logging to confirm result of confirm is bool....
  //console.log(includeLowercase);

  // make function to make the actual password and call it only if tests check out
  function makePass() {
    var generatedPass = [];
    var specialCharsString = "!@#$%^&*(){}[]=<>/,.";
    //var specialChars = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    //how to use ALL special chars in string since everything you would need to escape them is in the string? ;/
    var lowercaseCharsString = "abcdefghijklmnopqrstuvwxyz";
    var numbersString = "0123456789";

    //convert all of the strings of stuff into arrays
    var specialChars = specialCharsString.split('');
    var lowercaseChars = lowercaseCharsString.split('');
    var numbersString = numbersString.split('');

    for(var i = 0; i < passwordLength; i++) {
      //use a random number to select from arrays/strings
      //if
      //place result in generatedPass array
    }
    //then join the array to make a string!
    generatedPass.join()
   
    return generatedPass;
  }

  //check inputs
  // the password needs to be a valid length 
  if (passwordLength < 8 || passwordLength > 128) {
    newpasswordLength = prompt("Password length invalid. Please enter number between 8 and 128.");
    return makePass(newpasswordLength);
  } else {
  return makePass();
  }
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
