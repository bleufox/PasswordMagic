// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



// Assignment Code

const generateBtn = document.querySelector("#generate");

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '1234567890'
const specialChars = '`~!@#$%^&*()-_'
const passwordChars = ''


// let password = generatePassword()
  
  const passwordLengthPrompt = prompt("How many characters long would you like your password to be? (Between 8 - 128)");
  console.log(passwordLengthPrompt)
  
  const uppercaseConfirm = confirm("Would you like to include uppercase letters?");
  console.log(uppercaseConfirm);
  
  const lowercaseConfirm = confirm("Would you like to include lowercase letters?");
  console.log(lowercaseConfirm);
  
  const numbersConfirm = confirm("Would you like to include numbers?");
  console.log(numbersConfirm);
  
  const specialCharsConfirm = confirm("Would you like to include special charactersrs?");
  console.log(specialCharsConfirm);
  
  
  
  
  // Write password to the #password input
  function writePassword() {
    
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

  
};




// passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//MY OWN CODE

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }