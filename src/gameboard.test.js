/* eslint-disable no-undef */
const { Gameboard } = require('./gameboard');
const { Ship } = require('./ship');

test('gameboard should be able to track the coordinates of all attacks and if a ship has sunk', () => {
  const ship1 = new Ship(2);
  const ship2 = new Ship(3);

  const gameBoard = new Gameboard();
  gameBoard.placeShip(ship1, 0, 0, 'horizontal');
  gameBoard.placeShip(ship2, 2, 3, 'vertical');

  gameBoard.receiveAttack(0, 0);
  expect(ship1.isSunk()).toBe(false);
  gameBoard.receiveAttack(1, 0);
  expect(ship1.isSunk()).toBe(true);
  gameBoard.receiveAttack(2, 3);
  gameBoard.receiveAttack(2, 4);
  gameBoard.receiveAttack(2, 5);
  expect(ship2.isSunk()).toBe(true);
});
