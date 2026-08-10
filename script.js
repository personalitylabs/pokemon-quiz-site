const startQuiz = document.getElementById("startQuiz");
const analysisBox = document.getElementById("analysisBox");
const openResults = document.getElementById("openResults");
const letterBox = document.getElementById("letterBox");
const yesBtn = document.getElementById("yesBtn");
const thinkBtn = document.getElementById("thinkBtn");
const resultHearts = document.getElementById("resultHearts");
const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");

let musicPlaying = false;

startQuiz.addEventListener("click", () => {
  analysisBox.style.display = "block";
  startQuiz.style.display = "none";

  setTimeout(() => {
    openResults.style.display = "inline-block";
  }, 3000);
});

openResults.addEventListener("click", () => {
  letterBox.style.display = "block";
  yesBtn.style.display = "inline-block";
  thinkBtn.style.display = "inline-block";
  openResults.style.display = "none";
});

yesBtn.addEventListener("click", () => {
  resultHearts.style.display = "block";
  letterBox.textContent = "WAIT, REALLY?! ❤️\nYou just made my entire day.";
});

thinkBtn.addEventListener("click", () => {
  resultHearts.style.display = "none";
  letterBox.textContent = "That's okay ❤️\nI just wanted you to know how I feel.";
});

musicToggle.addEventListener("click", () => {
  if (!bgMusic.src) {
    alert("You can add your own soft background track by setting the audio src in the HTML.");
    return;
  }
  if (!musicPlaying) {
    bgMusic.play().then(() => {
      musicPlaying = true;
      musicToggle.textContent = "⏸ Pause background music";
    });
  } else {
    bgMusic.pause();
    musicPlaying = false;
    musicToggle.textContent = "▶️ Start background music";
  }
});
