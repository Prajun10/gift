const CONFIG = {
  anniversaryNumber: 8,
  partnerName: "My Love",
  musicFile: "assets/music/our-song.mp3"
};

document.title = `${CONFIG.anniversaryNumber} Months With You ♡`;

const intro = document.getElementById("intro");
const main = document.getElementById("main");

function enterSite(){
  intro.style.transition = "opacity 1s ease, transform 1s ease";
  intro.style.opacity = "0";
  intro.style.transform = "scale(1.04)";
  setTimeout(() => {
    intro.style.display = "none";
    main.style.display = "block";
    window.scrollTo({top:0,behavior:"instant"});
  }, 950);
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("introNumber").animate(
      [{transform:"scale(.8)",opacity:.2},{transform:"scale(1)",opacity:1}],
      {duration:1200,easing:"cubic-bezier(.2,.8,.2,1)",fill:"forwards"}
    );
  }, 150);
});

/* Mouse parallax for the floating-memory scene */
const space = document.getElementById("photoSpace");
window.addEventListener("mousemove", e => {
  if(!space) return;
  const x = (e.clientX / innerWidth - .5) * 2;
  const y = (e.clientY / innerHeight - .5) * 2;
  space.style.transform = `rotateY(${x*4}deg) rotateX(${-y*4}deg)`;
});

/* Music */
const music = document.getElementById("music");
const musicToggle = document.getElementById("musicToggle");
let playing = false;

musicToggle.addEventListener("click", async () => {
  if(!playing){
    try{
      await music.play();
      playing = true;
      musicToggle.textContent = "Ⅱ";
    }catch(e){
      alert("Add your song as assets/music/our-song.mp3");
    }
  }else{
    music.pause();
    playing = false;
    musicToggle.textContent = "♫";
  }
});

/* Final surprise */
const heartButton = document.getElementById("heartButton");
const finalMessage = document.getElementById("finalMessage");

heartButton.addEventListener("click", () => {
  finalMessage.classList.toggle("show");
  heartButton.textContent = finalMessage.classList.contains("show")
    ? "forever with you ♡"
    : "one more surprise ♡";

  if(finalMessage.classList.contains("show")) confetti(100);
});

function confetti(amount){
  const box = document.getElementById("confetti");
  const colors = ["#a94843","#d79da2","#c59a50","#171513","#8aa697"];

  for(let i=0;i<amount;i++){
    const p = document.createElement("i");
    p.className = "confetti-piece";
    p.style.left = Math.random()*100+"%";
    p.style.background = colors[Math.floor(Math.random()*colors.length)];
    p.style.animationDelay = Math.random()*1.2+"s";
    p.style.transform = `rotate(${Math.random()*360}deg)`;
    box.appendChild(p);
    setTimeout(()=>p.remove(),4200);
  }
}

/* Subtle reveal */
const reveal = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.animate(
        [{opacity:0,transform:"translateY(35px)"},{opacity:1,transform:"translateY(0)"}],
        {duration:900,easing:"cubic-bezier(.2,.8,.2,1)",fill:"forwards"}
      );
      reveal.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll(".hero-left,.hero-photo-wrap,.paper-copy,.single-memory,.chapter-heading,.scrapbook,.wall-head,.wall-photo,.floating-copy,.letter-card,.final-content")
.forEach(el=>reveal.observe(el));
