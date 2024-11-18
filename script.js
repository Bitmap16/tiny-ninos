// Function to simulate entering the world
function enterWorld() {
    const hero = document.getElementById('hero');
    const mainContent = document.getElementById('mainContent');
    hero.classList.add('fly-in');
    
    setTimeout(() => {
        hero.style.display = 'none';
        mainContent.style.display = 'block';
    }, 1500); // Match the duration of the transition
}

// Function to open the image viewer
function openImageViewer(image) {
    const imageViewer = document.getElementById('imageViewer');
    const viewerImage = document.getElementById('viewerImage');
    viewerImage.src = image.src;
    imageViewer.classList.add('active');
}

// Function to close the image viewer
function closeImageViewer() {
    const imageViewer = document.getElementById('imageViewer');
    imageViewer.classList.remove('active');
}

// Close the image viewer when clicking on empty space
document.getElementById('imageViewer').addEventListener('click', function (event) {
    if (event.target === this) {
        closeImageViewer();
    }
});
