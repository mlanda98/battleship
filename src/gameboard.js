/* eslint-disable no-plusplus */
import Ship from './ship';

export default class Gameboard {
  constructor(size) {
    this.size = size;
    this.board = this.createBoard();
    this.ships = []; // Array to hold placed ships
  }

  createBoard() {
    const board = [];
    for (let i = 0; i < this.size; i++) {
      board.push(Array(this.size).fill(null));
    }
    return board;
  }

  placeShip(ship, x, y, orientation) {
    const shipCells = [];
    const shipObj = new Ship(ship.length);

    for (let i = 0; i < ship.length; i++) {
      const newX = orientation === 'horizontal' ? x + i : x;
      const newY = orientation === 'vertical' ? y + i : y;

      if (newX >= this.size || newY >= this.size) return false; // out of bounds check
      if (this.board[newX][newY] !== null) return false; // overlap check
      shipCells.push({ x: newX, y: newY });
    }

    shipCells.forEach((cell) => {
      this.board[cell.x][cell.y] = shipObj;
    });

    this.ships.push({ ship: shipObj, cells: shipCells });

    return true;
  }

  receiveAttack(x, y) {
    if (this.board[x][y] !== null) {
      const ship = this.board[x][y];
      ship.hit();
      this.board[x][y] = 'hit';
      return { hit: true, ship };
    }
    return { hit: false };
  }

  allShipsSunk() {
    for (let i = 0; i < this.ships.length; i++) {
      if (!this.ships[i].ship.isSunk()) {
        return false;
      }
    }
    return true;
  }
}
