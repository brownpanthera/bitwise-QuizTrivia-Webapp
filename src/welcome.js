const closeRules = document.getElementById("close-btn");
const rules = document.getElementById("rules");
const showRules = document.getElementById("rules-btn");

closeRules.addEventListener("click", () => {
    rules.classList.remove("show");
  });
  showRules.addEventListener("click", () => {
    rules.classList.add("show");
  });

// MUSIC

function PlayMusic(){
  let music = new Audio("/assets/audio/backg_music.mp3");
  music.play();
}
PlayMusic();