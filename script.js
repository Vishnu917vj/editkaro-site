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
