/* ================= AUTO BACKGROUND MUSIC ================= */

// Try to play music when page loads
window.onload = function () {
  const music = document.getElementById("bgm");
  if (!music) return;

  music.volume = 0.4;   // Volume (0.0 to 1.0)
  music.loop = true;

  // Try autoplay (may be blocked by browser)
  music.play().catch(() => {
    console.log("Autoplay blocked. Waiting for user interaction...");
  });
};

// Play music automatically when user clicks anywhere (browser policy trick)
document.addEventListener("click", function () {
  const music = document.getElementById("bgm");
  if (music) {
    music.volume = 0.4;
    music.play();
  }
}, { once: true });


/* ================= UPSIDE DOWN MODE ================= */

// Background images
let normalBg = "https://i.pinimg.com/736x/ad/fa/90/adfa9038637d682605387725a6fa94df.jpg";
let upsideBg = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc8a3e51-68fd-4e99-89c6-1857948d8544/diotf5j-41356b08-0013-47a2-b6e7-3c415a68c4ca.png/v1/fill/w_1194,h_669,q_70,strp/the_upside_down__stranger_things_unveiled_by_inkimagine_diotf5j-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzE4IiwicGF0aCI6IlwvZlwvYmM4YTNlNTEtNjhmZC00ZTk5LTg5YzYtMTg1Nzk0OGQ4NTQ0XC9kaW90ZjVqLTQxMzU2YjA4LTAwMTMtNDdhMi1iNmU3LTNjNDE1YTY4YzRjYS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.3JfnsmhHYfrvrn1XJZeEysRrNSxgFf78Z-OJUAuU21g";

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


