/* eslint-disable no-undef */
const { Player } = require('./player');

test('placing a ship', () => {
  const player = new Player(true);
  player.placeShip(3, 2, 3, 'horizontal');
  expect(player.gameboard.ships.length).toBe(1);
});

test('placing a ship', () => {
  const computer = new Player(false);
  computer.placeShip(3, 2, 3, 'horizontal');
  expect(computer.gameboard.ships.length).toBe(1);
});

test('receiving an attack and hitting a ship', () => {
  const player = new Player(true);
  player.placeShip(3, 2, 3, 'horizontal');
  const result = player.receiveAttack(2, 3);
  expect(result).toBe(true);
});

test('receiving an attack and missing a ship', () => {
  const player = new Player(true);
  player.placeShip(3, 2, 3, 'horizontal');
  const result = player.receiveAttack(5, 5);
  expect(result).toBe(false);
});
