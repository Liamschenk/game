var playground = document.querySelector('.playground')
var player = document.querySelector('.player')
var enemies = document.querySelectorAll('.enemy')
var shots = document.querySelectorAll('.shot')
// var timer = new Timer(5)
// var enemy = document.querySelector('.enemy')

player.style.top = '0px'

function loop() {
  if(keyboard(83)) {
    player.style.top = parseInt(player.style.top) + 5 + 'px'
  }
  if(keyboard(87)) {
    player.style.top = parseInt(player.style.top) - 5 + 'px'
  }
  if(keyboard(16)) {
    if(keyboard(83)) {
      player.style.top = parseInt(player.style.top) + 8 + 'px'
    }
    if(keyboard(87)) {
      player.style.top = parseInt(player.style.top) - 8 + 'px'
    }
    else{

    }
  }

  // if(timer.ready()) {
  //   var h = document.createElement('div')
  //   h.classList.add('enemy')
  //   h.style.top = '0px'
  //   h.style.left = '100px'
  //   playground.appendChild(h)
  // }

  for(var enemy of enemies) {
    enemy.style.top = parseInt(enemy.style.top) + 5 + 'px'
    if(parseInt(enemy.style.top) > 1000) {
      enemy.parentNode.removeChild(enemy)
    }
  }

  if(mouseClick()) {
    var playerX = parseInt(player.style.left)
    var playerY = parseInt(player.style.top)
    var a = angle(playerX, playerY, mousePositionX(playground), mousePositionY(playground))

    var shot = document.createElement('div')
    shot.classList.add('shot')
    shot.style.left = player.style.left
    shot.style.top = player.style.top
    shot.setAttribute('data-angle', (180 - a) * Math.PI / 180)
    playground.appendChild(shot)
  }

  for(var shot of shots) {
  	var xPos = parseFloat(shot.style.left)
    var yPos = parseFloat(shot.style.top)
    var rotation = shot.getAttribute('data-angle')
    shot.style.left = 3 * Math.sin(rotation) + xPos + 'px'
    shot.style.top = 3 * Math.cos(rotation) + yPos + 'px'
    if(parseInt(shot.style.left) < 0 || parseInt(shot.style.left) > 400 ||
        parseInt(shot.style.top) < 0 || parseInt(shot.style.top) > 400) {
    	shot.parentNode.removeChild(shot)
    }
  }

  // if(anyCollision(player, [enemy])) {
  //   alert("Game over!")
  //   return
  // }
  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
