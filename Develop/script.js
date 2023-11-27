// Assignment code here
var nums = [0,1,2,3,4,5,6,7,8,9];

var sc = ['!', '@', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '^', '-', '.', '/', ':', ';', '<', '=', '>', '?', '[', ']', '_', '`', '{', '~', '}', '|'];

var lc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uc =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var allTheThings = nums.concat(sc,lc,uc);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var charLimit = getCharNums();
  if (charLimit === undefined) {
    return;
  }
  var upperCase = getUpperCase();
  if (upperCase === undefined) {
    return;
  }
  var lowerCase = getLowerCase();
  if (lowerCase === undefined) {
    return;
  }
  var specialChar = getSpecialChar();
  if (specialChar === undefined) {
    return;
  }
  var numbers = getNumbers();
  if (numbers === undefined) {
    return;
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
    console.log(validSymbols[randomNum]);
  }



  //var password = generatePassword();
var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);



//generateBtn.addEventListener("click", function() {
//   var charLimit = getCharaterLimit();prompt("How long would you like your password? It can be between 8 and 128 characters.");
//   var upperCase = prompt("Would you like upper case letters? Y/N.");
//   var lowerCase = prompt("Would you like lower case letters? Y/N.");
//   var specialChar = prompt("Would you like special characters? Y/N.");
//   var numbers = prompt("Would you like numbers? Y/N.");
// });

//parseInt changes string to int
function getCharNums() {
  var charLimit = parseInt(prompt("How long would you like your password? It can be between 8 and 128 characters."));
  if (charLimit >=8 && charLimit <=128) {
    return charLimit;
  }
  else {
      window.alert("Try again! Invalid response. Please click Generate Password and start over.");
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
    window.alert("Try again! Invalid response. Please click Generate Password and start over.")
    
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
    window.alert("Try again! Invalid response. Please click Generate Password and start over.")
    
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
    window.alert("Try again! Invalid response. Please click Generate Password and start over.")
    
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
    window.alert("Try again! Invalid response. Please click Generate Password and start over.")
    
  }
};





//var randomNum = Math.floor(Math.random() * nums.length);







