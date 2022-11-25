var playground = document.querySelector(".playground");
var player = document.querySelector(".player");
var enemies = document.querySelectorAll(".enemy");
var shots = document.querySelectorAll(".shot");

var displayPoints = document.querySelector(".score");
var score = 0;

player.style.top = "0px";
player.style.left = "0px";

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
    } else {
    }
  }
}

function scoreDisplay() {
  if () {
    score = score + 1;
    displayPoints.textContent = score;
  } else {
  }
}

function loop() {
  if (keyboard(32)) {
    var h = document.createElement('div')
    h.classList.add('stone')
    h.style.top = '0px'
    h.style.left = '100px'
    playground.appendChild(h)
  }

  var stonee = document.querySelectorAll('.stone')
  for(var stone of stonee) {
    stone.style.top = parseInt(stone.style.top) + 5 + 'px'
    if(parseInt(stone.style.top) > 400) {
      stone.parentNode.removeChild(stone)
    }
  }

  // Movement with dash on shift
  movement();
  //Score
  // scoreDisplay();
  //Shot on space press

  //Collisions shot/enemy

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
