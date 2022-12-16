//Playground, player and shot selector
var playground = document.querySelector(".playground");
var player = document.querySelector(".player");
var shot = document.querySelector(".shot");

//Sounds
var theme = new Audio("assets/sounds/theme.ogg");
var dash = new Audio("assets/sounds/dash.wav");
var shuriken = new Audio("assets/sounds/shuriken.wav");
var kill = new Audio("assets/sounds/kill.wav");
var gameOver = new Audio("assets/sounds/gameover.wav");

//Timer for shot delay
var shottimer = new Timer(40);
var enemytimer = new Timer(140);

//Points display
var displayPoints = document.querySelector(".score");
var score = 0;

//Player position
player.style.top = "370px";
player.style.left = "40px";

//Movement function
function movement() {
  if (keyboard(83)) {
    player.style.top = parseInt(player.style.top) + 6 + "px";
  }
  if (keyboard(87)) {
    player.style.top = parseInt(player.style.top) - 6 + "px";
  }
  if (keyboard(16)) {
    if (keyboard(83)) {
      player.style.top = parseInt(player.style.top) + 8 + "px";
      dash.play();
    }
    if (keyboard(87)) {
      player.style.top = parseInt(player.style.top) - 8 + "px";
      dash.play();
    }
  }
}

//Bullet function
function bullet() {
  if (shottimer.ready() && keyboard(32)) {
    var h = document.createElement("div");
    h.classList.add("shot");
    h.style.top = player.style.top;
    h.style.left = 64 + "px";
    playground.appendChild(h);
    shuriken.play();
  }

  var shots = document.querySelectorAll(".shot");
  for (var shot of shots) {
    shot.style.left = parseInt(shot.style.left) + 10 + "px";
    if (parseInt(shot.style.left) > 720) {
      shot.parentNode.removeChild(shot);
    }
  }
}

//Enemy functions
function enemy() {
  if (enemytimer.ready()) {
    var random = Math.floor(Math.random() * (720 - 40) + 40);
    var h = document.createElement("div");
    h.classList.add("enemy");
    h.style.top = random + "px";
    h.style.right = "40px";
    playground.appendChild(h);
  }

  var enemies = document.querySelectorAll(".enemy");

  for (var enemy of enemies) {
    enemy.style.right = parseInt(enemy.style.right) + 2 + "px";
    if (parseInt(enemy.style.right) > 720) {
      enemy.parentNode.removeChild(enemy);
    }
  }
}

function collisions() {
  // Kommentar: sobald der Spieler mit Gegner3 oder 4 kollidiert, werden diese gelöscht
  var collisions = allCollisions(shot, [testenemy1, testenemy2])
  // Kommentar: wir gehen durch alle Kollisionsobjekte durch und löschen sie
  for(var collision of collisions) {
    collision.parentNode.removeChild(collision)
  }
}

//Loop function
function loop() {
  // Movement
  movement();

  //Enemy spawn functions
  enemy();

  //Shot
  bullet();

  //Collisions
  // collisions();

  //Theme music
  theme.play();

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);