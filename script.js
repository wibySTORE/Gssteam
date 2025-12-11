/* ============================ */
/* ANIMASI PARTIKEL */
/* ============================ */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = "rgba(119, 0, 255, 0.7)";
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particlesArray = [];
    for (let i = 0; i < 90; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

/* ============================ */
/* PROTEKSI KONTEN */
/* ============================ */

document.addEventListener("contextmenu", e => e.preventDefault());

// Disable drag gambar
document.addEventListener("dragstart", e => {
    if (e.target.tagName === "IMG") e.preventDefault();
});

// Disable inspect tools
document.onkeydown = function (e) {
    if (e.keyCode === 123) return false;
    if (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key.toUpperCase())) return false;
    if (e.ctrlKey && ["U", "S"].includes(e.key.toUpperCase())) return false;
};

