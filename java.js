// Array of main images for navigation
const images = [
    'imagenes/imagen 1.png',
    'imagenes/imagen 2.png',
    'imagenes/imagen 3.png',
    
];
let currentIndex = 0;

// Function to display the current image
function showImage() {
    const imageElement = document.getElementById('myImage');
    if (imageElement) {
        imageElement.src = images[currentIndex];
    } else {
        console.error("Element with id 'myImage' not found.");
    }
}

// Function to show the next image in the array
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

// Function to show the previous image in the array
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

// Array of clickable images for separate section
const clickableImages = [
    '1.jfif',
    '2.jfif',
    '3.jfif'
];
let currentClickableIndex = 0;

// Function to cycle through clickable images
function changeClickableImage() {
    const clickableImageElement = document.getElementById('clickableImage');
    if (clickableImageElement) {
        currentClickableIndex = (currentClickableIndex + 1) % clickableImages.length;
        clickableImageElement.src = clickableImages[currentClickableIndex];
    } else {
        console.error("Element with id 'clickableImage' not found.");
    }
}

// Additional function to change text content
function miFuncion() {
    const demoElement = document.getElementById("demo3");
    if (demoElement) {
        demoElement.innerHTML = "Párrafo CAMBIÓ con función";
    } else {
        console.error("Element with id 'demo3' not found.");
    }
}
