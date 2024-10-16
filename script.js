function filterVideos(category) {
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // Update the active class in navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.innerText.toLowerCase() === category || category === 'all') {
            link.classList.add('active');
        }
    });
}
// Add a loading class to the body when the page is loading
document.body.classList.add('loading');

// Wait until the page has fully loaded
window.addEventListener('load', function() {
    // Hide the loading screen after the content is fully loaded
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';

    // Remove the loading class to show the content
    document.body.classList.remove('loading');
});
