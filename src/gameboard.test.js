/* eslint-disable no-undef */
const { Gameboard } = require('./gameboard');
const { Ship } = require('./ship');

test('placing a ship horizontal', () => {
  const ship = new Ship(3);
  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 2, 3, 'horizontal');
  expect(gameboard.ships.length).toBe(1);
});

test('placing a ship vertically', () => {
  const ship = new Ship(2);
  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 5, 5, 'vertical');
  expect(gameboard.ships.length).toBe(1);
});

test('receiving an attack and hitting a ship', () => {
  const ship = new Ship(3);
  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 2, 3, 'horizontal');
  const result = gameboard.receiveAttack(2, 3);
  expect(result).toBe(true);
  expect(ship.hits).toBe(1);
});

test('receiving an attack and missing a ship', () => {
  const ship = new Ship(3);
  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 2, 3, 'horizontal');
  const result = gameboard.receiveAttack(5, 5);
  expect(result).toBe(false);
});

test('receiving multiple attacks and sinking a ship', () => {
  const ship = new Ship(3);
  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 2, 3, 'horizontal');
  gameboard.receiveAttack(2, 3);
  gameboard.receiveAttack(3, 3);
  gameboard.receiveAttack(4, 3);
  expect(ship.sunk).toBe(true);
});
