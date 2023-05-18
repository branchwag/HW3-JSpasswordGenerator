var passwordLength = 8;
var includeLowercase = true;
var includeUppercase = true;
var includeNumeric = false;
var includeSpecial = false;

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
    console.log(generatedPass.join(''))
}

//#2 if the user wants lowercase and numeric
if (includeLowercase && includeUppercase === false && includeNumeric === true & includeSpecial === false) {
    for(var i = 0; i < passwordLength; i++) {
        //add the arrays we need
      newArray = numbersArray.concat(lowercaseArray);
      //use a random number to select from arrays/strings up to the length
      generatedPass.push(newArray[Math.floor(Math.random() * newArray.length)]);
    }
    console.log(generatedPass.join(''))
}

//#3 if the user wants lowercase, uppercase, and numeric
if (includeLowercase && includeUppercase === true && includeNumeric === true & includeSpecial === false) {
    for(var i = 0; i < passwordLength; i++) {
        //add the arrays we need
      newArray = numbersArray.concat(lowercaseArray, uppercaseArray);
      //use a random number to select from arrays/strings up to the length
      generatedPass.push(newArray[Math.floor(Math.random() * newArray.length)]);
    }
    console.log(generatedPass.join(''))
}

//#4 if user wants lowercase, uppercase, numeric, and specialchars
if (includeLowercase && includeUppercase === true && includeNumeric === true & includeSpecial === true) {
    for(var i = 0; i < passwordLength; i++) {
        //add the arrays we need
      newArray = numbersArray.concat(lowercaseArray, uppercaseArray, specialCharArray);
      //use a random number to select from arrays/strings up to the length
      generatedPass.push(newArray[Math.floor(Math.random() * newArray.length)]);
    }
    console.log(generatedPass.join(''))
}

//#5 if we have lowercase and uppercase
if (includeLowercase && includeUppercase === true && includeNumeric === false & includeSpecial === false) {
    for(var i = 0; i < passwordLength; i++) {
        //add the arrays we need
      newArray = lowercaseArray.concat(uppercaseArray);
      //use a random number to select from arrays/strings up to the length
      generatedPass.push(newArray[Math.floor(Math.random() * newArray.length)]);
    }
    console.log(generatedPass.join(''))
}

//#6 if we have lowercase and special...
//this is going to be 16 functions....