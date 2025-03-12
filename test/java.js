var typed = new Typed(".typing", {
    strings: ["a Web Developer", "a UI/UX Designer", "a Freelancer", "a Tech Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01XHACKER";
const matrix = letters.split("");

const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "green";  // កំណត់ពណ៌អក្សរ
      // ប្រើ backticks សម្រាប់ font size

    for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

const textElement = document.getElementById("typing-text");
const text = "I'm a Web Developer.";
let index = 0;

function type() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

document.addEventListener("DOMContentLoaded", type);