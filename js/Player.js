import Tile from './Tile.js';

const Player = {
  x: 2,
  y: 1,
  z: 3,
  speed: 1,
  canMove: true,

  draw: function(playerImage) {
    Tile.create(this.x, this.y, this.z, playerImage, 'player')
  },

  move: function(dx, dy, dz) {
    this.x += dx;
    this.y += dy;
    this.z += dz;
    Tile.move(this.x, this.y, this.z, 'player');
  }
}

export default Player