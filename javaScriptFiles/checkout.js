// Function to validate the form before submission
function validateForm() {

    // Getting the input element with the ID "num"
    var inputField = document.getElementById("num");

    // Checking if the length of the input value is less than the maximum length required for a telephone number (10 digits)
    if (inputField.value.length < inputField.maxLength) {
        alert("Telephone Number should be 10 Digits");
        return false;
    }

    // Getting the input element with the ID "cardnumber"
    var inputField = document.getElementById("cardnumber");
    
    // Checking if the length of the input value is less than the maximum length required for a card number (16 digits)
    if (inputField.value.length < inputField.maxLength) {
        alert("Card number needs to be 16 digits");
        return false;
       
    }

    // Getting the input element with the ID "CVV"
    var inputField = document.getElementById("CVV");

     // Checking if the length of the input value is less than the maximum length required for CVV (3 digits)
    if (inputField.value.length < inputField.maxLength) {
        alert("security code (CVV) must be 3 digits");
        return false;
    }

    
    
}

