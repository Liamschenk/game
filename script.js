var playground = document.querySelector(".playground");
var player = document.querySelector(".player");
var enemies = document.querySelectorAll(".enemy");
var shot = document.querySelectorAll(".shot");

//Punkte Display
var displayPoints = document.querySelector(".score");
var score = 0;

//Movement Funktion
player.style.top = "40px";
player.style.left = "40px";

//Movement Funktion
function movement() {
  if (keyboard(83)) {
    player.style.top = parseInt(player.style.top) + 5 + "px";
  }
  if (keyboard(87)) {
    player.style.top = parseInt(player.style.top) - 5 + "px";
  }
  if (keyboard(16)) {
    if (keyboard(83)) {
      player.style.top = parseInt(player.style.top) + 8 + "px";
    }
    if (keyboard(87)) {
      player.style.top = parseInt(player.style.top) - 8 + "px";
    }
  }
}

// function scoreDisplay() {
//   if () {
//     score = score + 1;
//     displayPoints.textContent = score;
//   } else {
//   }
// }

function loop() {
  // Movement with dash on shift
  movement();

  //Score
  // scoreDisplay();

  //Shot on space press

  //Collisions shot/enemy

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
