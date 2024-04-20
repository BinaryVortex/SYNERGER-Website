// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  
  // Select all input elements with class "input"
  const inputs = document.querySelectorAll(".input");

  // Function to add focus class when an input is focused
  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  // Function to remove focus class when an input loses focus and is empty
  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  // Loop through all input elements and add event listeners for focus and blur
  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });
});
