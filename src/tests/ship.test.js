/* eslint-disable no-undef */
import Ship from './ship';

test('should hit the ship and check if it has sunk', () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(3);
  expect(ship.isSunk()).toBe(true);
});
