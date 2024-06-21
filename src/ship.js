/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    if (this.hits === this.length) {
      return true;
    }
    return false;
  }
}
