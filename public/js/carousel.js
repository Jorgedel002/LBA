const slideShowImages = document.querySelectorAll(".img-promocion");

const nextImageDelay = 5000;
let currentImageCounter = 0;

slideShowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
    slideShowImages[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter+1) % slideShowImages.length;
    slideShowImages[currentImageCounter].style.opacity = 1;
}

const slideShowCard = document.querySelectorAll(".pagos");

const nextCardDelay = 8000;
let currentCardCounter = 0;

slideShowCard[currentCardCounter].style.opacity = 1;

setInterval(nextCard, nextCardDelay);

function nextCard() {
    slideShowCard[currentCardCounter].style.opacity = 0;
    currentCardCounter = (currentCardCounter+1) % slideShowCard.length;
    slideShowCard[currentCardCounter].style.opacity = 1;
}