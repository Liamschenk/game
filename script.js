//Playground, player and shot selector
const playground = document.querySelector(".playground");
const player = document.querySelector(".player");
const shot = document.querySelectorAll(".shot");
const enemy = document.querySelectorAll(".enemy");

//Sounds
const theme = new Audio("assets/sounds/theme.ogg");
const dash = new Audio("assets/sounds/dash.wav");
const shuriken = new Audio("assets/sounds/shuriken.wav");
const kill = new Audio("assets/sounds/kill.wav");
const gameOver = new Audio("assets/sounds/gameover.wav");

//Timer for shot delay
let shottimer = new Timer(40);
let enemytimer = new Timer(60);

//Points display
let scoreDisplay = document.querySelector(".score");
let score = 0;

//Player position
player.style.top = "370px";
player.style.left = "40px";

//Movement function
function movement() {
  //Move down with s key
  if (keyboard(83)) {
    player.style.top = parseInt(player.style.top) + 6 + "px";
  }

  //Move up with w key
  if (keyboard(87)) {
    player.style.top = parseInt(player.style.top) - 6 + "px";
  }

  //Check if shift is pressed
  if (keyboard(16)) {
    //Dash down with s key
    if (keyboard(83)) {
      player.style.top = parseInt(player.style.top) + 8 + "px";
      dash.play();
    }
    //Dash up with s key
    if (keyboard(87)) {
      player.style.top = parseInt(player.style.top) - 8 + "px";
      dash.play();
    }
  }
}

//Bullet function
function bullet() {
  //Create shot when space is pressed
  if (shottimer.ready() && keyboard(32)) {
    let h = document.createElement("div");
    h.classList.add("shot");
    h.style.top = player.style.top;
    h.style.left = 64 + "px";
    playground.appendChild(h);
    shuriken.play();
  }

  let shots = document.querySelectorAll(".shot");

  //Move and delete shot
  for (let shot of shots) {
    shot.style.left = parseInt(shot.style.left) + 10 + "px";
    if (parseInt(shot.style.left) > 720) {
      shot.parentNode.removeChild(shot);
    }
  }
}

//Enemy functions
function blaze() {
  //Create enemies when timer is ready
  if (enemytimer.ready()) {
    let random = Math.floor(Math.random() * (720 - 40) + 40);
    let h = document.createElement("div");
    h.classList.add("enemy");
    h.style.top = random + "px";
    h.style.right = "40px";
    playground.appendChild(h);
  }

  let enemies = document.querySelectorAll(".enemy");

  //Move and delete enemies
  for (let enemy of enemies) {
    enemy.style.right = parseInt(enemy.style.right) + 3 + "px";
    if (parseInt(enemy.style.right) > 720) {
      enemy.parentNode.removeChild(enemy);
    }
  }
}

function colshot() {
  let shots = document.querySelectorAll(".shot");
  let enemies = document.querySelectorAll(".enemy");
  //If shot and enemy are colliding remove enemy
  for(let shot of shots) {
    let collisions = allCollisions(shot, enemies)
      //Remove enemy and play sound
      for(let collision of collisions) {
        collision.parentNode.removeChild(collision)
        kill.play();
        score = score + 1;
        scoreDisplay.textContent = score
      }
  }
}

function colplayer() {
  let player = document.querySelector(".player");
  let enemies = document.querySelectorAll(".enemy");

  //If player and enemy collide game is over
  if(anyCollision(player, enemies)) {
    alert("Game over!")
    gameOver.play();
    return true;
  }
}

//Loop function
function loop() {
  // Movement
  movement();

  //Enemy spawn functions
  blaze();

  //Shot
  bullet();

  //Collision between shot and enemy
  colshot();

  //Collision between player and enemy
  if (colplayer()) {
    return;
  }

  //Music
  theme.play();

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);