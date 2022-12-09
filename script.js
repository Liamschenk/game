var playground = document.querySelector(".playground");
var player = document.querySelector(".player");
var enemies = document.querySelectorAll(".enemy");
var shot = document.querySelector(".shot");

var timer = new Timer(80);
var shottimer = new Timer(25);

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

function shotgoofy() {
  if (shottimer.ready() && keyboard(32)) {
    var h = document.createElement("div");
    h.classList.add("shot");
    h.style.top = player.style.top;
    h.style.left = player.style.left;
    playground.appendChild(h);
  }

  var shots = document.querySelectorAll(".shot");
  for (var shot of shots) {
    shot.style.left = parseInt(shot.style.left) + 10 + "px";
    if (parseInt(shot.style.left) > 1080) {
      shot.parentNode.removeChild(shot);
    }
  }
}

function enemygoofy() {
  if (timer.ready()) {
    var random = Math.floor(Math.random() * (800 - 0) + 0);
    var h = document.createElement("div");
    h.classList.add("enemy");
    h.style.top = random + "px";
    h.style.right = "40px";
    playground.appendChild(h);
  }

  var enemies = document.querySelectorAll(".enemy");

  for (var enemy of enemies) {
    enemy.style.right = parseInt(enemy.style.right) + 2 + "px";
    if (parseInt(enemy.style.right) > 800//get div width
  ) {
      enemy.parentNode.removeChild(enemy);
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
  shotgoofy();
  enemygoofy();
  //Score
  // scoreDisplay();

  //Shot on space press

  //Collisions shot/enemy

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
