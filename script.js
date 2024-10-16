// Function to filter videos by category
function filterVideos(category) {
    const videoItems = document.querySelectorAll('.video-item');
    
    // Loop through each video item and filter based on category
    videoItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // Update the active class in the navigation menu
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.innerText.toLowerCase() === category || category === 'all') {
            link.classList.add('active');
        }
    });
}

// Loading screen logic
document.body.classList.add('loading');

// Wait until the page has fully loaded
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide the loading screen after a short delay (for smoothness)
    setTimeout(() => {
        loadingScreen.style.opacity = '0'; // Fade out effect
        setTimeout(() => {
            loadingScreen.style.display = 'none'; // Hide after fade out
            document.body.classList.remove('loading'); // Remove the loading class
        }, 500); // Adjust time for fading effect
    }, 500); // Keep loading screen for half a second before fading out
});
