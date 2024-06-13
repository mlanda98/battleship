/* eslint-disable no-plusplus */
class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits++;
  }
}

function isSunk(ship) {
  return ship.hits >= ship.length;
}

module.exports = {
  Ship,
  isSunk,
};
