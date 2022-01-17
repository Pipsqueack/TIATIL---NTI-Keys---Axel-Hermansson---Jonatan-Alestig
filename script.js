//kod för UI

const keys = document.querySelectorAll(".key"),
  note = document.querySelector(".nowplaying"),
  hints = document.querySelectorAll(".hints");

  
//kollar vilken not som användaren vill spela och visar det genom UI
function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;

  const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
  note.innerHTML = keyNote;
  }

//byter tillbaka utseendet på noter som inte spelar. Har buggar, såsom att om man håller ner en tangent för länge fastnar den i "playing" och kan inte resetas
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

//när man hover:ar musen över tangentbordet, visas vilka tangenttryck på datorn leder till vilka noterna på hemsidans keyboard
function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 20 + "ms");
}

hints.forEach(hintsOn);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);

