/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = new Array(length).fill(false);
  }

  hit(index) {
    this.hits[index] = true;
  }

  isSunk() {
    return this.hits.every((hit) => hit) === true;
  }
}
