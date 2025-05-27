// Function to open Gmail compose window
function openGmail(email) {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, '_blank');
}

// Handle image loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.card img');
    
    // Replace broken image URLs with working ones
    const fallbackImages = [
        'https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop'
    ];

    images.forEach((img, index) => {
        img.classList.add('loading');
        
        // Set fallback image if original fails to load
        img.onerror = function() {
            this.src = fallbackImages[index % fallbackImages.length];
        };

        img.onload = function() {
            this.classList.remove('loading');
        };
    });

    // Remove transition on mobile devices to prevent flickering
    function handleResize() {
        const isMobile = window.innerWidth <= 768;
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            if (isMobile) {
                card.style.transition = 'none';
            } else {
                card.style.transition = 'transform 0.2s ease-in-out';
            }
        });

    }
    // Check authentication
document.addEventListener('DOMContentLoaded', function() {
    if (!sessionStorage.getItem('authenticated')) {
        window.location.href = 'index.html';
        return;
    }
});

// Email functionality
function openGmail(email) {
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
}

// Logout functionality
function logout() {
    sessionStorage.removeItem('authenticated');
    window.location.href = 'index.html';
}

});


    // Initial call and event listener for resize
    handleResize();
    window.addEventListener('resize', handleResize);
});
