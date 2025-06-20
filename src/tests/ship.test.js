/* eslint-disable no-undef */
import Ship from '../modules/ship';

test('should hit the ship and check if it has sunk', () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.hits.length).toBe(3);
  expect(ship.isSunk()).toBe(true);
});
