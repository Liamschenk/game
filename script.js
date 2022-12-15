//Playground, player and shot selector
var playground = document.querySelector(".playground");
var player = document.querySelector(".player");
var shot = document.querySelector(".shot");

//Sounds
var theme = new Audio("assets/sounds/theme.ogg");
var dash = new Audio("assets/sounds/dash.wav");
var shuriken = new Audio("assets/sounds/shuriken.wav");
var gameOver = new Audio("assets/sounds/gameover.wav");

var enemytimer1 = new Timer(198);
var enemytimer2 = new Timer(276);
var enemytimer3 = new Timer(312);
var enemytimer4 = new Timer(293);
var enemytimer5 = new Timer(201);

var shottimer = new Timer(40);

//Points display
var displayPoints = document.querySelector(".score");
var score = 0;

//Player position
player.style.top = "370px";
player.style.left = "40px";

//Movement function
function movementfunction() {
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

//Enemy function
function enemy1() {
  if (enemytimer1.ready()) {
    var random = Math.floor(Math.random() * (720 - 40) + 40);
    var h = document.createElement("div");
    h.classList.add("enemy1");
    h.style.top = random + "px";
    h.style.right = "40px";
    playground.appendChild(h);
  }

  var enemies = document.querySelectorAll(".enemy1");

  for (var enemy of enemies) {
    enemy.style.right = parseInt(enemy.style.right) + 2 + "px";
    if (parseInt(enemy.style.right) > 720) {
      enemy.parentNode.removeChild(enemy);
    }
  }
}

function enemy2() {
  if (enemytimer2.ready()) {
    var random = Math.floor(Math.random() * (720 - 40) + 40);
    var h = document.createElement("div");
    h.classList.add("enemy2");
    h.style.top = random + "px";
    h.style.right = "40px";
    playground.appendChild(h);
  }

  var enemies = document.querySelectorAll(".enemy2");

  for (var enemy of enemies) {
    enemy.style.right = parseInt(enemy.style.right) + 2 + "px";
    if (parseInt(enemy.style.right) > 720) {
      enemy.parentNode.removeChild(enemy);
    }
  }
}

function enemy3() {
  if (enemytimer3.ready()) {
    var random = Math.floor(Math.random() * (720 - 40) + 40);
    var h = document.createElement("div");
    h.classList.add("enemy3");
    h.style.top = random + "px";
    h.style.right = "40px";
    playground.appendChild(h);
  }

  var enemies = document.querySelectorAll(".enemy3");

  for (var enemy of enemies) {
    enemy.style.right = parseInt(enemy.style.right) + 2 + "px";
    if (parseInt(enemy.style.right) > 720) {
      enemy.parentNode.removeChild(enemy);
    }
  }
}

function enemy4() {
  if (enemytimer4.ready()) {
    var random = Math.floor(Math.random() * (720 - 40) + 40);
    var h = document.createElement("div");
    h.classList.add("enemy4");
    h.style.top = random + "px";
    h.style.right = "40px";
    playground.appendChild(h);
  }

  var enemies = document.querySelectorAll(".enemy4");

  for (var enemy of enemies) {
    enemy.style.right = parseInt(enemy.style.right) + 2 + "px";
    if (parseInt(enemy.style.right) > 720) {
      enemy.parentNode.removeChild(enemy);
    }
  }
}

function enemy5() {
  if (enemytimer5.ready()) {
    var random = Math.floor(Math.random() * (720 - 40) + 40);
    var h = document.createElement("div");
    h.classList.add("enemy5");
    h.style.top = random + "px";
    h.style.right = "40px";
    playground.appendChild(h);
  }

  var enemies = document.querySelectorAll(".enemy5");

  for (var enemy of enemies) {
    enemy.style.right = parseInt(enemy.style.right) + 2 + "px";
    if (parseInt(enemy.style.right) > 720) {
      enemy.parentNode.removeChild(enemy);
    }
  }
}

//Loop function
function loop() {
  // Movement with dash on shift
  movementfunction();

  //Enemy spawn function
  enemy1();
  enemy2();
  enemy3();
  enemy4();
  enemy5();

  //Shot on space press
  shotfunction();

  //Theme music
  theme.play();

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
