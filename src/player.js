const { Gameboard } = require('./gameboard');
const { Ship } = require('./ship');

class Player {
  constructor(isHuman) {
    this.isHuman = isHuman;
    this.gameboard = new Gameboard();
    this.ships = [];
  }

  placeShip(length, x, y, orientation) {
    const ship = new Ship(length);
    this.gameboard.placeShip(ship, x, y, orientation);
  }

  receiveAttack(x, y) {
    return this.gameboard.receiveAttack(x, y);
  }
}

module.exports = {
  Player,
};
