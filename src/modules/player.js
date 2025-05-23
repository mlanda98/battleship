import Gameboard from './gameboard';

export default class Player {
  constructor(isHuman, boardSize) {
    this.isHuman = isHuman;
    this.gameboard = new Gameboard(boardSize);
  }

  placeShip(ship, x, y, orientation) {
    return this.gameboard.placeShip(ship, x, y, orientation);
  }

  receiveAttack(x, y) {
    return this.gameboard.receiveAttack(x, y);
  }

  allShipsSunk() {
    return this.gameboard.allShipsSunk();
  }
}
