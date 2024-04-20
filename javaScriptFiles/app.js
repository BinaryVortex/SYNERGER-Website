

// Adding scroll event listener to window
window.addEventListener('scroll', () => {
    // Getting the vertical scroll position
    let value = window.scrollY;

    // Applying the calculated margin top to the 'maintext' element
    text.style.marginTop = value * 2.5 + 'px';
});


