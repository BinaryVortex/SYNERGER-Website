// Getting a reference to the scroll-to-top button element
const btnScrollToTop = document.getElementById("btnScrollToTop");

// Adding an event listener to the window object to listen for scroll events
window.addEventListener("scroll", () => {
    // Checking if the vertical scroll position is greater than 50 pixels
    if (window.pageYOffset > 50) {
        // If scroll position is greater than 50 pixels, add "active" class to the button
        btnScrollToTop.classList.add("active");
    } else {
        // If scroll position is not greater than 50 pixels, remove "active" class from the button
        btnScrollToTop.classList.remove("active");
    }
});

// Adding an event listener to the scroll-to-top button to listen for click events
btnScrollToTop.addEventListener("click", () => {
    // When button is clicked, scroll to the top of the page with smooth behavior
    window.scrollTo({ top: 0, behavior: "smooth" });
});
