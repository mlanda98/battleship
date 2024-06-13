/* eslint-disable no-undef */
const { Ship, isSunk } = require('./index');

test('should hit the ship and check if it has sunk', () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(3);
  expect(isSunk(ship)).toBe(true);
});

test('should create a ship with length 4 and not sink', () => {
  const ship = new Ship(4);
  expect(isSunk(ship)).toBe(false);
});
