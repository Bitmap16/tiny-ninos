document.addEventListener('DOMContentLoaded', () => {
    makeDraggable('imageContainer');
    makeDraggable('discordContainer');
});

function makeDraggable(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const dragBar = element.querySelector('.drag-bar');
    if (!dragBar) return;

    let offsetX = 0, offsetY = 0, mouseX = 0, mouseY = 0;

    dragBar.onmousedown = function (e) {
        e.preventDefault();
        mouseX = e.clientX;
        mouseY = e.clientY;

        document.onmousemove = function (e) {
            e.preventDefault();
            offsetX = mouseX - e.clientX;
            offsetY = mouseY - e.clientY;
            mouseX = e.clientX;
            mouseY = e.clientY;

            element.style.top = `${element.offsetTop - offsetY}px`;
            element.style.left = `${element.offsetLeft - offsetX}px`;
        };

        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}

function enterWorld() {
    const hero = document.getElementById('hero');
    const mainContent = document.getElementById('mainContent');

    // Animate and hide the hero section
    hero.classList.add('fly-in');

    setTimeout(() => {
        hero.style.display = 'none'; // Hide the hero section
        mainContent.classList.add('visible'); // Show main content
    }, 1500); // Match the duration of the transition
}


function openImageViewer(image) {
    const imageViewer = document.getElementById('imageViewer');
    const viewerImage = document.getElementById('viewerImage');
    if (!imageViewer || !viewerImage) return;

    viewerImage.src = image.src;
    imageViewer.classList.add('active');
    imageViewer.setAttribute('aria-hidden', 'false');

    const closeBtn = imageViewer.querySelector('.close-btn');
    if (closeBtn) closeBtn.focus();
}

function closeImageViewer() {
    const imageViewer = document.getElementById('imageViewer');
    if (!imageViewer) return;

    imageViewer.classList.remove('active');
    imageViewer.setAttribute('aria-hidden', 'true');
}

function typeWriterEffect(elementId, text, speed = 100) {
    const element = document.getElementById(elementId);
    if (!element) return;
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}
