import Coordinates from './Coordinates.js';

const Tile = {
  create: (x, y, z, imageSrc, id = "tile") => {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.id = id;

    const {left, top, zIndex} = Coordinates.toIsometric(x, y, z);

    tile.style.left = left + 'px';
    tile.style.top = top + 'px';

    tile.style.backgroundImage = `url('${imageSrc}')`;

    tile.style.zIndex = zIndex;

    document.getElementById('game-container').appendChild(tile);
  },

  move: (x, y, z, id) => {
    const tile = document.getElementById(id);
    const {left, top, zIndex} = Coordinates.toIsometric(x, y, z);
    tile.style.left = left + "px";
    tile.style.top = top + "px";
    tile.style.zIndex = zIndex;
  }
};

export default Tile;