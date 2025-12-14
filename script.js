// Function to create a heart
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💕";
    heart.classList.add("heart");

    // Random position
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";

    // Add to page
    document.body.appendChild(heart);

    // Remove after animation ends
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Create a new heart every 300ms
setInterval(createHeart, 300);


