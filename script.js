const passwordBox = document.getElementById("password"); // Use the correct ID as a string
const length = 8;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "/.!@#$%^&*(){]{]<>";

// Combine all character types
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";

    // Ensure at least one character from each category
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Fill the rest with random characters from allChars
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the password to make it more random
    password = password.split("").sort(() => Math.random() - 0.5).join("");

    // Display the password in the input box
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select(); // Select the text in the input box
    document.execCommand("copy"); // Copy to clipboard
    alert("Password copied to clipboard!"); // Alert the user
}
