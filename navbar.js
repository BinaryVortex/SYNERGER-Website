window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("scroll", window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Loaded');
    const cursor = document.querySelector('.cursor');

    // Function to scale the cursor
    function scaleCursor() {
        cursor.style.transform = 'scale(6)';
    }

    // Function to reset the cursor scale
    function resetCursor() {
        cursor.style.transform = 'scale(1)';
    }

    // Add mouseover event listeners to all <a> elements
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', scaleCursor);
        link.addEventListener('mouseout', resetCursor);
    });

    // Apply mix-blend-mode: difference;
    cursor.style.mixBlendMode = 'difference';

    // Move the cursor according to mouse movement
    document.addEventListener('mousemove', (e) => {
        const scrollX = window.pageXOffset; // Current horizontal scroll position
        const scrollY = window.pageYOffset; // Current vertical scroll position
        
        cursor.style.left = (e.pageX - scrollX) + 'px';
        cursor.style.top = (e.pageY - scrollY) + 'px';
    });
});

