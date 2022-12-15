//Playground, player and shot selector
var playground = document.querySelector(".playground");
var player = document.querySelector(".player");
var shot = document.querySelector(".shot");

//Sounds
var theme = new Audio("assets/sounds/theme.ogg");
var dash = new Audio("assets/sounds/dash.wav");
var shuriken = new Audio("assets/sounds/shuriken.wav");
var gameOver = new Audio("assets/sounds/gameover.wav");

//Timers for enemy spawn
var enemytimer1 = new Timer(400);
var enemytimer2 = new Timer(480);
var enemytimer3 = new Timer(526);
var enemytimer4 = new Timer(460);
var enemytimer5 = new Timer(420);

//Timer for shot delay
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
    player.style.top = parseInt(player.style.top) + 3 + "px";
  }
  if (keyboard(87)) {
    player.style.top = parseInt(player.style.top) - 3 + "px";
  }
  if (keyboard(16)) {
    if (keyboard(83)) {
      player.style.top = parseInt(player.style.top) + 6 + "px";
      dash.play();
    }
    if (keyboard(87)) {
      player.style.top = parseInt(player.style.top) - 6 + "px";
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

//Enemy functions
function enemy1() {
  if (enemytimer1.ready()) {
    var random = Math.floor(Math.random() * (124 - 40) + 40);
    var h = document.createElement("div");
    h.classList.add("enemy1");
    h.style.top = random + "px";
    h.style.right = "40px";
    playground.appendChild(h);
  }

  var enemies = document.querySelectorAll(".enemy1");

  for (var enemy of enemies) {
    enemy.style.right = parseInt(enemy.style.right) + 1 + "px";
    if (parseInt(enemy.style.right) > 720) {
      enemy.parentNode.removeChild(enemy);
    }
  }
}

function enemy2() {
  if (enemytimer2.ready()) {
    var random = Math.floor(Math.random() * (268 - 164) + 164);
    var h = document.createElement("div");
    h.classList.add("enemy2");
    h.style.top = random + "px";
    h.style.right = "40px";
    playground.appendChild(h);
  }

  var enemies = document.querySelectorAll(".enemy2");

  for (var enemy of enemies) {
    enemy.style.right = parseInt(enemy.style.right) + 1 + "px";
    if (parseInt(enemy.style.right) > 720) {
      enemy.parentNode.removeChild(enemy);
    }
  }
}

function enemy3() {
  if (enemytimer3.ready()) {
    var random = Math.floor(Math.random() * (412 - 308) + 308);
    var h = document.createElement("div");
    h.classList.add("enemy3");
    h.style.top = random + "px";
    h.style.right = "40px";
    playground.appendChild(h);
  }

  var enemies = document.querySelectorAll(".enemy3");

  for (var enemy of enemies) {
    enemy.style.right = parseInt(enemy.style.right) + 1 + "px";
    if (parseInt(enemy.style.right) > 720) {
      enemy.parentNode.removeChild(enemy);
    }
  }
}

function enemy4() {
  if (enemytimer4.ready()) {
    var random = Math.floor(Math.random() * (556 - 452) + 452);
    var h = document.createElement("div");
    h.classList.add("enemy4");
    h.style.top = random + "px";
    h.style.right = "40px";
    playground.appendChild(h);
  }

  var enemies = document.querySelectorAll(".enemy4");

  for (var enemy of enemies) {
    enemy.style.right = parseInt(enemy.style.right) + 1 + "px";
    if (parseInt(enemy.style.right) > 720) {
      enemy.parentNode.removeChild(enemy);
    }
  }
}

function enemy5() {
  if (enemytimer5.ready()) {
    var random = Math.floor(Math.random() * (720 - 596) + 596);
    var h = document.createElement("div");
    h.classList.add("enemy5");
    h.style.top = random + "px";
    h.style.right = "40px";
    playground.appendChild(h);
  }

  var enemies = document.querySelectorAll(".enemy5");

  for (var enemy of enemies) {
    enemy.style.right = parseInt(enemy.style.right) + 1 + "px";
    if (parseInt(enemy.style.right) > 720) {
      enemy.parentNode.removeChild(enemy);
    }
  }
}

//Loop function
function loop() {
  // Movement
  movement();

  //Enemy spawn functions
  enemy1();
  enemy2();
  enemy3();
  enemy4();
  enemy5();

  //Shot
  bullet();

  //Theme music
  theme.play();

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);