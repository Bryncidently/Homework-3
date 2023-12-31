
var nums = [0,1,2,3,4,5,6,7,8,9];

var sc = ['!', '@', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '^', '-', '.', '/', ':', ';', '<', '=', '>', '?', '[', ']', '_', '`', '{', '~', '}', '|'];

var lc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uc =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var charLimit = getCharNums();
  if (charLimit === null) {
    charLimit = getCharNums();
  }

  var upperCase = getUpperCase();
  if (upperCase === null) {
    getUpperCase();
  }

  var lowerCase = getLowerCase();
  if (lowerCase === null) {
    getLowerCase();
  }

  var specialChar = getSpecialChar();
  if (specialChar === null) {
    getSpecialChar();
  }

  var numbers = getNumbers();
  if (numbers === null) {
    getNumbers();
  }

  var validSymbols = []

  if (upperCase === true) {
    validSymbols = validSymbols.concat(uc);
  }

  if (lowerCase === true) {
    validSymbols = validSymbols.concat(lc);
  }

  if (specialChar === true) {
    validSymbols = validSymbols.concat(sc);
  }

  if (numbers === true) {
    validSymbols = validSymbols.concat(nums);
  }
 
  var password = "";

  for(var i=0; i < charLimit; i++) {
    var randomNum = Math.floor(Math.random() * validSymbols.length);
    password += validSymbols[randomNum];
    
    
  }

var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);


//parseInt changes string to int
function getCharNums() {
  var charLimit = parseInt(prompt("How long would you like your password? It can be between 8 and 128 characters."));
  if (charLimit >=8 && charLimit <=128) {
    return charLimit;
  }
  else {
      alert("Invalid response. Please enter a number between 8 and 128.");
      return null;
    }
}


function getUpperCase() {
  var upperCase = prompt("Would you like upper case letters? Y/N.");
  if (upperCase.toUpperCase() === "Y") {
    return true;
  }
  else if (upperCase.toUpperCase() === "N") {
    return false;
  }
  else {
    alert("Invalid response. Please enter Y or N.");
    return null;
  }
};

function getLowerCase() {
  var lowerCase = prompt("Would you like lower case letters? Y/N.");
  if (lowerCase.toUpperCase() === "Y") {
    return true;
  }
  else if (lowerCase.toUpperCase() === "N") {
    return false;
  }
  else {
    alert("Invalid response. Please enter Y or N.")
    return null;
  }
};

function getSpecialChar() {
  var specialChar = prompt("Would you like special characters? Y/N.");
  if (specialChar.toUpperCase() === "Y") {
    return true;
  }
  else if (specialChar.toUpperCase() === "N") {
    return false;
  }
  else {
    alert("Invalid response. Please enter Y or N.")
    return null;
  }
};

function getNumbers() {
  var numbers = prompt("Would you like numbers? Y/N.");
  if (numbers.toUpperCase() === "Y") {
    return true;
  }
  else if (numbers.toUpperCase() === "N") {
    return false;
  }
  else {
    alert("Invalid response. Please enter Y or N.")
    return null;
  }
};














