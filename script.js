var playground = document.querySelector(".playground");
var player = document.querySelector(".player");
var enemies = document.querySelectorAll(".enemy");
var shot = document.querySelector(".shot");

var theme = new Audio('assets/sounds/theme.ogg')
var dash = new Audio('assets/sounds/dash.wav')
var shuriken = new Audio('assets/sounds/shuriken.wav')
var gameOver = new Audio('assets/sounds/gameover.wav')

var enemytimer = new Timer(140);
var shottimer = new Timer(40);

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

//Shot function
function shotfunction() {
  if (shottimer.ready() && keyboard(32)) {
    var h = document.createElement("div");
    h.classList.add("shot");
    h.style.top = player.style.top;
    h.style.left = 60 + "px";
    playground.appendChild(h);
    shuriken.play();
    shottimer = new Timer(40);
  }

  var shots = document.querySelectorAll(".shot");
  for (var shot of shots) {
    shot.style.left = parseInt(shot.style.left) + 8 + "px";
    if (parseInt(shot.style.left) > 720) {
      shot.parentNode.removeChild(shot);
    }
  }
}

//Enemy function
function enemyfunction() {
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
    if (parseInt(enemy.style.right) > 720
  ) {
      enemy.parentNode.removeChild(enemy);
    }
  }
}

// function collisions(){
//   if(anyCollision(player, [gegner])) {
//     alert("Game over!")
//     return
//   }
//
//   // Kommentar: sobald der Spieler mit Gegner3 oder 4 kollidiert, werden diese gelöscht
//   var collisions = allCollisions(player, [gegner])
//   // Kommentar: wir gehen durch alle Kollisionsobjekte durch und löschen sie
//   for(var collision of collisions) {
//     collision.parentNode.removeChild(collision)
//   }
// }

// function scoreDisplay() {
//   if () {
//     score = score + 1;
//     displayPoints.textContent = score;
//   } else {
//   }
// }

//Loop function
function loop() {
  // Movement with dash on shift
  movement();

  //Shot on space press
  shotfunction();

  //Enemy spawn function
  enemyfunction();

  //Score
  // scoreDisplay();

  //Collisions shot/enemy

  //Theme music
  theme.play();

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
