/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import Gameboard from './gameboard';
import Ship from './ship';

test('placing a ship on the board', () => {
  const board = new Gameboard(10);
  const ship = new Ship(3);
  const placed = board.placeShip(ship, 0, 0, 'horizontal');
  expect(placed).toBe(true);

  const placedShip = board.board[0][0];
  expect(placedShip).toBeDefined();
  expect(placedShip.hits).toBe(0);
  expect(placedShip.length).toBe(3);
});

test('receiving an attack and check hit/miss', () => {
  const ship = new Ship(3);
  const board = new Gameboard(10);

  board.placeShip(ship, 0, 0, 'horizontal');
  const attackResult1 = board.receiveAttack(0, 0);
  expect(attackResult1.hit).toBe(true);
  const attackResult2 = board.receiveAttack(0, 1);
  expect(attackResult2.hit).toBe(false);
});

test('check if all ship are sunk', () => {
  const size = 10;
  const gameboard = new Gameboard(size);
  const shipLength = 3;
  const x = 2;
  const y = 3;
  const orientation = 'horizontal';

  gameboard.placeShip({ length: shipLength }, x, y, orientation);

  for (let i = 0; i < shipLength; i++) {
    gameboard.receiveAttack(x + i, y);
  }

  expect(gameboard.allShipsSunk()).toBe(true);
});
