/* eslint-disable no-plusplus */
const Ship = require('./ship');

class Gameboard {
  constructor() {
    this.ships = [];
    this.attacks = [];
  }

  placeShip(ship, x, y, orientation) {
    const positions = [];
    for (let i = 0; i < ship.length; i++) {
      if (orientation === 'horizontal') {
        positions.push({ x: x + i, y });
      } else if (orientation === 'vertical') {
        positions.push({ x, y: y + i });
      }
    }
    this.ships.push({ ship, positions });
  }

  receiveAttack(x, y) {
    let hit = false;
    this.ships.forEach(({ ship, positions }) => {
      positions.forEach(({ x: shipX, y: shipY }) => {
        if (x === shipX && y === shipY) {
          ship.hit();
          hit = true;
        }
      });
    });
    if (!hit) {
      this.attacks.push({ x, y });
    }
    return hit;
  }
}

module.exports = {
  Gameboard,
};
