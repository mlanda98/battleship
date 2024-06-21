/* eslint-disable no-undef */
import Player from './player';

test('creates a human player with a gameboard', () => {
  const boardSize = 10;
  const player = new Player(true, boardSize);

  expect(player.isHuman).toBe(true);
  expect(player.gameboard.size).toBe(boardSize);
});

test('places a ship for human player', () => {
  const player = new Player(true, 10);
  const shipLength = 3;
  const x = 2;
  const y = 3;
  const orientation = 'horizontal';

  const shipPlaced = player.placeShip(
    { length: shipLength },
    x,
    y,
    orientation
  );

  expect(shipPlaced).toBe(true);

  for (let i = 0; i < shipLength; i++) {
    expect(player.gameboard.board[x + i][y]).not.toBeNull();
  }
});

test('receiving an attack and updates correctly for human player', () => {
  const player = new Player(true, 10);
  const shipLength = 3;
  const x = 2;
  const y = 3;
  const orientation = 'horizontal';

  player.placeShip({ length: shipLength }, x, y, orientation);
  const attackResult = player.receiveAttack(x, y);

  expect(attackResult.hit).toBe(true);
  expect(player.gameboard.board[x][y]).toBe('hit');
});
test('creates a computer player with a gameboard', () => {
  const boardSize = 10;
  const computer = new Player(false, boardSize);

  expect(computer.isHuman).toBe(false);
  expect(computer.gameboard.size).toBe(boardSize);
});

test('places a ship for computer', () => {
  const computer = new Player(false, 10);
  const shipLength = 3;
  const x = 2;
  const y = 3;
  const orientation = 'horizontal';

  const shipPlaced = computer.placeShip(
    { length: shipLength },
    x,
    y,
    orientation
  );

  expect(shipPlaced).toBe(true);

  for (let i = 0; i < shipLength; i++) {
    expect(computer.gameboard.board[x + i][y]).not.toBeNull();
  }
});

test('receiving an attack and updates correctly for human player', () => {
  const computer = new Player(false, 10);
  const shipLength = 3;
  const x = 2;
  const y = 3;
  const orientation = 'horizontal';

  computer.placeShip({ length: shipLength }, x, y, orientation);
  const attackResult = computer.receiveAttack(x, y);

  expect(attackResult.hit).toBe(true);
  expect(computer.gameboard.board[x][y]).toBe('hit');
});
