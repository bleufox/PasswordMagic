let password = "";

let generatePassword = function () {

  password = "";


  let lengthPassword = passwordLength();


  let inputLength = newPassword();
  let userInput = inputLength.length;

  for (let index = 0; index < lengthPassword; index++) {
    password += inputLength.charAt(Math.floor(Math.random() * userInput));
  }

  return password;
};


let passwordLength = function () {

  let passwordLengthPrompt = prompt("How many characters long would you like your password to be? (Between 8 - 128 characters.)");

  if (passwordLengthPrompt < 8 || passwordLengthPrompt > 128 || passwordLengthPrompt === "") {
    alert("You did not enter a number between 8 and 128. Please try again.")
    return;
  }

  passwordLengthPrompt = Math.floor(Number(passwordLengthPrompt));

  return passwordLengthPrompt;
}

let newPassword = function () {

  let inputLength = "";

  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '1234567890'
  const specialChars = '`~!@#$%^&*()-_'

  const uppercaseConfirm = confirm("Would you like to include uppercase letters?");
  console.log(uppercaseConfirm);

  const lowercaseConfirm = confirm("Would you like to include lowercase letters?");
  console.log(lowercaseConfirm);

  const numbersConfirm = confirm("Would you like to include numbers?");
  console.log(numbersConfirm);

  const specialCharsConfirm = confirm("Would you like to include special characters?");
  console.log(specialCharsConfirm);

  if (uppercaseConfirm === true) {
    inputLength += uppercaseLetters;
  }

  if (lowercaseConfirm === true) {
    inputLength += lowercaseLetters;
  }

  if (numbersConfirm === true) {
    inputLength += numbers;
  }

  if (specialCharsConfirm === true) {
    inputLength += specialChars;
  }
  console.log("input length: ", inputLength)
  return inputLength;

}

const generateBtn = document.querySelector("#generate");

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);