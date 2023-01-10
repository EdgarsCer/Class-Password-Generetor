// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let lengthOfPassword = parseInt(prompt("How many Characters you want your password to be ? 10-64 "))
  // get the length of password
  if (lengthOfPassword < 10 || lengthOfPassword > 64) {
    window.alert("Try again")
    return null

  }
  // each of these collets true or false on characters needed
  let lowerCase = confirm("Do you wish to include lower case characters?")
  let upperCase = confirm("Do you wish to include upper lower case characters?")
  let numericsQ = confirm("Do you wish to include Numbers?")
  let specialsQ = confirm("Do you wish to include Special characters?")
  if (lowerCase === false && upperCase === false && numericsQ === false && specialsQ === false) {
    window.alert("Try again")
    return null
  }
  // makes possibleCharacters object
  let possibleCharacters = {
    lengthOfPassword: lengthOfPassword,
    lowerCase: lowerCase,
    upperCase: upperCase,
    numericsQ: numericsQ,
    specialsQ: specialsQ
  };
  // makes possibleCharacters global
  return possibleCharacters
}

// Function for getting a random element from an array
function getRandom(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Function to generate password with user input
function generatePassword() {
  // saving some arrays to be used latter 
  // having userChoice will ensure that we get AT LEAST one of characters selected 
  let bigArray = [];
  let results = [];
  let userChoice = [];
  // pushing one random elements from selections into a usersChoice array 
  let options = getPasswordOptions()
  if (options.specialsQ) {
    bigArray = bigArray.concat(specialCharacters)
    userChoice.push(getRandom(specialCharacters))
  }
  if (options.numericsQ) {
    bigArray = bigArray.concat(numericCharacters)
    userChoice.push(getRandom(numericCharacters))
  }
  if (options.upperCase) {
    bigArray = bigArray.concat(upperCasedCharacters)
    userChoice.push(getRandom(upperCasedCharacters))
  }
  if (options.lowerCase) {
    bigArray = bigArray.concat(lowerCasedCharacters)
    userChoice.push(getRandom(lowerCasedCharacters))
  }

  for (let i = 0; i < options.lengthOfPassword; i++) {
    let newBigArray = getRandom(bigArray);
    results.push(newBigArray)
  }
  for (let i = 0; i < userChoice.length; i++) {
    results[i] = userChoice[i];
  }
  return results.join("")
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)