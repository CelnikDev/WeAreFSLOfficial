// 1. Canvas Particles
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: (Math.random() - 0.5) * 2,
    dy: (Math.random() - 0.5) * 2,
    r: Math.random() * 2 + 1
  });
}
function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#0ff";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
    p.x += p.dx; p.y += p.dy;
    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;
  });
  requestAnimationFrame(draw);
}
draw();

// 2. Parallax mouse effect
document.addEventListener("mousemove", e => {
  const moveX = (e.clientX - window.innerWidth / 2) / 50;
  const moveY = (e.clientY - window.innerHeight / 2) / 50;
  document.querySelector(".container").style.transform = `translate(${moveX}px,${moveY}px)`;
});

// 3. Button click effect
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  btn.classList.add("clicked");
  setTimeout(() => btn.classList.remove("clicked"), 200);
});

// 4. Resize fix
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// 5. Custom cursor
const cursor = document.createElement("div");
cursor.style.cssText = "position:fixed;top:0;left:0;width:20px;height:20px;border:2px solid #0ff;border-radius:50%;pointer-events:none;z-index:9999;transition:transform 0.1s ease";
document.body.appendChild(cursor);
document.addEventListener("mousemove", e => {
  cursor.style.transform = `translate(${e.clientX-10}px,${e.clientY-10}px)`;
});
