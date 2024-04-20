// Add an event listener to the window object for scroll events
window.addEventListener("scroll", function() {
    // Select the header element using querySelector
    var header = document.querySelector("header");
    
    // Toggle the "scroll" class on the header element based on the condition
    // If the vertical scroll position (window.scrollY) is greater than 0, add the "scroll" class
    // Otherwise, remove the "scroll" class
    header.classList.toggle("scroll", window.scrollY > 0);
});
