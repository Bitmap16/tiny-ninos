// Function to simulate entering the world
function enterWorld() {
    // Add fly-in class to the hero section
    const hero = document.getElementById('hero');
    const mainContent = document.getElementById('mainContent');
    hero.classList.add('fly-in');
    
    // Show the main content after the animation completes
    setTimeout(() => {
        hero.style.display = 'none';
        mainContent.style.display = 'block';
    }, 1500); // Match the duration of the transition
}
