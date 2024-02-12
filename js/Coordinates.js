const Coordinates = {
  tileSize: 96,
  x_transform: {x: 1, y: .5},
  y_transform: {x: 0, y: -2.08},
  z_transform: {x: -1, y: .5},
  offset: window.innerWidth/2,

  toIsometric: function(x, y, z){
    const left = x * this.x_transform.x * this.tileSize/2 + z * this.z_transform.x * this.tileSize/2 + this.offset;
    const top = x * this.x_transform.y * this.tileSize/2 + z * this.z_transform.y * this.tileSize/2 + y * this.y_transform.y * this.tileSize/2;
    const zIndex = x * y * z;
    return {left, top, zIndex}
  }
}
export default Coordinates;