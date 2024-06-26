/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = Array(length).fill(false);
  }

  hit() {
    const index = this.hits.findIndex((hit) => !hit);
    if (index !== -1) {
      this.hits[index] = true;
    }
  }

  isSunk() {
    return this.hits.every((hit) => hit);
  }
}
