// Get the screen width
let screenWidth = window.innerWidth; // Better practice to use window.innerWidth instead of screen.width

// Variable to track the current state of the navigation links (hidden or shown)
let linksState = 'hidden';

// Get the hamburger menu button and the navigation links container
let fabars = document.getElementById('fabars');
let navLinks = document.getElementById('show');

// Check if the screen width is 768px or less (typically for mobile devices)
if (screenWidth <= 768) {
    // Show the hamburger icon on smaller screens
    fabars.style.display = 'block';

    // Add an event listener to toggle the navigation links on click
    fabars.addEventListener('click', () => {
        if (linksState === 'hidden') {
            // Show the navigation links and update the state
            linksState = 'shown';
            navLinks.style.display = 'block'; // Show links
        } else {
            // Hide the navigation links and update the state
            linksState = 'hidden';
            navLinks.style.display = 'none'; // Hide links
        }
    });
} else {
    // On larger screens, hide the hamburger icon and display the navigation links
    fabars.style.display = 'none';
    navLinks.style.display = 'flex'; // Flexbox to show navigation links side by side
}
