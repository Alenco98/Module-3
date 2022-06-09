// Assignment code here
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCaseNumbers = "1234567890"
var upperCaseNumbers = "~!@#$%^&*()+?"
var upperLetterCheck;
var lowerNumberCheck;
var upperNumberCheck;
var passLength;

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

function makeLength() {
  passLength = prompt("How many characters do you want your password to have? Must be a number between 8 and 128:");

  if (passLength < 8) {
    alert("Do you even know how to read? Please make it between 8 and 128 characters please, its not long enough.");
    makeLength();
  } else if (passLength > 128) {
    alert("Do you even know how to read? Please make it between 8 and 128 characters please, its too big now.");
    makeLength();
  } else if (isNaN(passLength)) {
    alert("Are you even paying attention? Its a number not a letter, I bet you did it on purpose to annoy me" );
    makeLength();
  } else {
    alert("Ok, now check what type of characters's you'd like in your password, not too hard right?");
  }
  return passLength;
}

function decideUpper() {
  upperLetterCheck = prompt("So, do you want upper-case letters or not? (yes or no)");
    upperLetterCheck = upperLetterCheck.toLowerCase();
    
    if (upperLetterCheck === null || upperLetterCheck === "") {
      alert("Come on don't do this right now, yes or no, Its simple");
      decideUpper();
    
    } else if (upperLetterCheck === "yes" || upperLetterCheck ==="y") {
      upperLetterCheck = true;
      return upperLetterCheck;

    } else if (upperLetterCheck === "no" || upperLetterCheck ==="n") {
      upperLetterCheck = false;
      return upperLetterCheck
    
    } else {
      alert("Come on dude, yes or no");
      decideUpper();
    }
    return upperLetterCheck
}

function decideLowerNumber() {
  lowerNumberCheck = prompt("So, do you want numbers? (yes or no)");
    lowerNumberCheck = lowerNumberCheck.toLowerCase();
    
    if (lowerNumberCheck === null || lowerNumberCheck === "") {
      alert("Are you @#$%ing kidding me, yes or no, Its simple");
      decideLowerNumber();
    
    } else if (lowerNumberCheck === "yes" || lowerNumberCheck ==="y") {
      lowerNumberCheck = true;
      return lowerNumberCheck;

    } else if (lowerNumberCheck === "no" || lowerNumberCheck ==="n") {
      lowerNumberCheck = false;
      return lowerNumberCheck
    
    } else {
      alert("Come on dude, yes or no");
      decideLowerNumber();
    }
    return lowerNumberCheck
}

function decideUpperNumbers() {
  upperNumberCheck = prompt("So, do you want special characters? (yes or no)");
    upperNumberCheck = upperNumberCheck.toLowerCase();
    
    if (upperNumberCheck === null || upperNumberCheck === "") {
      alert("Come on dude, yes or no, we're so close to ending this and I want to eat, Its simple");
      decideUpperNumbers();
    
    } else if (upperNumberCheck === "yes" || upperNumberCheck ==="y") {
      upperNumberCheck = true;
      return upperNumberCheck;

    } else if (upperNumberCheck === "no" || upperNumberCheck ==="n") {
      upperNumberCheck = false;
      return upperNumberCheck
    
    } else {
      alert("Come on dude, yes or no");
      decideUpperNumbers();
    }
    return upperNumberCheck
}

function generatePassword() {
  makeLength();
  console.log(passLength);
  decideUpper();
  console.log(upperLetterCheck);
  decideLowerNumber();
  console.log(lowerNumberCheck);
  decideUpperNumbers();
  console.log(upperNumberCheck);
  
  var chars = lowerCaseLetters;
  var passcode = "";
  if (upperLetterCheck && lowerNumberCheck && upperNumberCheck)  {
    
    chars += upperCaseLetters + lowerCaseNumbers + upperCaseNumbers;

  } else if (upperLetterCheck && lowerNumberCheck) {
    
    chars += upperCaseLetters + lowerCaseNumbers;

  } else if (lowerNumberCheck && upperNumberCheck) {
    
    chars += lowerCaseNumbers + upperCaseNumbers;

  } else if (upperLetterCheck && upperNumberCheck) {

    chars += upperCaseLetters && upperCaseNumbers;
  
  } else if (upperLetterCheck) {
    
    chars += upperCaseLetters;
  
  } else if (lowerNumberCheck) {
    
    chars += lowerCaseNumbers;
  
  } else if (upperNumberCheck) {

    chars += upperCaseNumbers;
  
  } else {
    chars === lowerCaseLetters;
  
  }


  for(var i = 0; i < passLength; i++) {
    passcode += chars.charAt(Math.floor(Math.random() * chars.length));
  
  }


  return passcode;

}

// special thanks to my baby brother Brandon for helping me corrected my code.

