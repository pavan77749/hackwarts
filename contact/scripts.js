// Add interactive features here

document.querySelector('button').addEventListener('click', function() {
    const audio = document.getElementById('background-music');
    audio.play();
});

// Cursor effect
document.body.addEventListener('mousemove', (event) => {
    const cursor = document.createElement('div');
    cursor.className = 'magic-cursor';
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    document.body.appendChild(cursor);
    setTimeout(() => cursor.remove(), 500);
});


// Ensure the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Function to apply magic cursor class
    function applyMagicCursor(event) {
        document.body.classList.add('magic-cursor');
    }

    // Function to remove magic cursor class
    function removeMagicCursor(event) {
        document.body.classList.remove('magic-cursor');
    }

    // Target elements for magic cursor
    const contactElements = document.querySelectorAll('#contact-form, #contact-info, #map');

    contactElements.forEach(element => {
        element.addEventListener('mouseover', applyMagicCursor);
        element.addEventListener('mouseout', removeMagicCursor);
    });
});


// Ensure the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');

    // Function to play background music
    function playBackgroundMusic() {
        // Check if audio is already playing
        if (audio.paused) {
            audio.play().catch(error => {
                console.log("Autoplay prevented:", error);
            });
        }
    }

    // Add event listener for user interaction
    document.body.addEventListener('click', playBackgroundMusic);
});
