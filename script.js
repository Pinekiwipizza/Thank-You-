// Floating hearts at random positions
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";

    // Random pink shades
    const colors = ["#ff8fb1", "#ffb6c1", "#ffc0cb", "#ff69b4"];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 3000);
}

// Create hearts automatically
setInterval(createHeart, 300);

// Click anywhere to create a heart
document.addEventListener("click", (e) => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    const colors = ["#ff8fb1", "#ffb6c1", "#ffc0cb", "#ff69b4"];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.classList.add("heart");
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 3000);
});

// Music controls
const music = document.getElementById("bg-music");
music.volume = 0.2;

const btn = document.getElementById("music-btn");
btn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

// Auto-play music on first click anywhere (browser allows only after user interaction)
document.addEventListener("click", () => {
    if (music.paused) {
        music.play();
    }
}, { once: true });
