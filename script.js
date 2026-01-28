/* ================= AUTO BACKGROUND MUSIC ================= */

// Try to play music when page loads
window.addEventListener("load", () => {
  const music = document.getElementById("bgm");
  music.volume = 0.4;
  music.loop = true;

  // Try autoplay
  music.play().catch(() => {
    console.log("Autoplay blocked. Waiting for user interaction...");
  });
});

// Force play after first user interaction
document.addEventListener("click", () => {
  const music = document.getElementById("bgm");
  music.volume = 0.4;
  music.play();
}, { once: true });



/* ================= UPSIDE DOWN MODE ================= */

// Background images
let normalBg = "ST001.jpg";
let upsideBg = "ST002.jpg";
// Set default background
document.body.style.backgroundImage = `url('${normalBg}')`;

let upsideActive = false;

function toggleUpsideDown() {
  upsideActive = !upsideActive;
  document.body.classList.toggle("upside");

  // Change Background
  if (upsideActive) {
    document.body.style.backgroundImage = `url('${upsideBg}')`;
    loadParticles();
  } else {
    document.body.style.backgroundImage = `url('${normalBg}')`;
    removeParticles();
  }

  // SCREEN SHAKE EFFECT
  document.body.classList.add("shake");
  setTimeout(() => {
    document.body.classList.remove("shake");
  }, 600);
}




/* ================= OPTIONAL LIGHTNING EFFECT ================= */

function lightningFlash() {
  const lightning = document.querySelector(".lightning");
  if (!lightning) return;

  lightning.style.opacity = "0.8";
  setTimeout(() => {
    lightning.style.opacity = "0";
  }, 200);
}

// Random lightning every 10–25 seconds
setInterval(() => {
  lightningFlash();
}, Math.random() * (25000 - 10000) + 10000);


/* ================= DEBUG ================= */

console.log("Stranger Things website script loaded!");
let particlesLoaded = false;
let particlesScriptLoaded = false;



// Load particles ONLY when upside down is activated
function loadParticles() {

  if (!particlesScriptLoaded) {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js";
    script.onload = () => {
      particlesScriptLoaded = true;
      startParticles();
    };
    document.body.appendChild(script);
  } 
  else {
    startParticles();
  }
}

// Start white particles
function startParticles() {
  particlesJS("particles-js", {
    particles: {
      number: { value: 150 },
      color: { value: "#ffffff" }, // WHITE PARTICLES
      shape: { type: "circle" },
      opacity: { value: 0.6 },
      size: { value: 2 },
      move: { 
        enable: true,
        speed: 1,
        direction: "bottom",
        random: true
      },
      line_linked: { enable: false }
    }
  });
}

// Remove particles completely
function removeParticles() {
  const container = document.getElementById("particles-js");
  container.innerHTML = ""; // stop particles
}





