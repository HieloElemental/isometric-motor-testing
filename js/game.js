import Player from './Player.js';
import Tile from './Tile.js';

const gameContainer = document.getElementById('game-container');
gameContainer.style.width = '100%';
gameContainer.style.height = '100%';

const createGroundTiles = () => {
  const rows = 12;
  const cols = 12;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const groundBlockImageSrc = 'assets/images/ground_block.png';
      Tile.create(col, 0, row, groundBlockImageSrc);
    }
  }
};

Player.draw('assets/images/stone_tile.png');

window.addEventListener('keydown', (event) => {
  if(!Player.canMove) return;
  let dx = 0, dy = 0, dz = 0;
  switch(event.key) {
    case 'ArrowLeft':
      dx = -Player.speed;
      break;
    case 'ArrowRight':
      dx = Player.speed;
      break;
    case 'ArrowUp':
      dz = -Player.speed;
      break;
    case 'ArrowDown':
      dz = Player.speed;
      break;
    case 'PageUp':
      dz = -Player.speed;
      break;
    case 'PageDown':
      dz = Player.speed;
      break;
  }
  Player.move(dx, dy, dz);
  
  Player.canMove = false;
  setTimeout(() => {
    Player.canMove = true;
  }, 200);
})
createGroundTiles();