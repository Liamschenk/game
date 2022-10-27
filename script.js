var player = document.querySelector('.player')
var displayPoints = document.querySelector('.punkte')
var enemy1 = document.querySelector('.enemy1')
var enemy2 = document.querySelector('.enemy2')
var music = new Audio('sounds/theme.mp3')
var augh = new Audio('sounds/augh.mp3')
var score = 0

player.style.left = '0px'
player.style.top = '0px'

function loop() {
  music.play(loop)

  if(keyboard(68)) {
    player.style.left = parseInt(player.style.left) + 5 + 'px'
  }
  if(keyboard(65)) {
    player.style.left = parseInt(player.style.left) - 5 + 'px'
  }
  if(keyboard(83)) {
    player.style.top = parseInt(player.style.top) + 5 + 'px'
  }
  if(keyboard(87)) {
    player.style.top = parseInt(player.style.top) - 5 + 'px'
  }

  // Kommentar: sobald der Spieler mit Gegner3 oder 4 kollidiert, werden diese gelöscht
  var collisions = allCollisions(player, [enemy1, enemy2])
  // Kommentar: wir gehen durch alle Kollisionsobjekte durch und löschen sie
  for(var collision of collisions) {
    collision.parentNode.removeChild(collision)
    augh.play()
    score = score + 1
    displayPoints.textContent = score
  }

  window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)
