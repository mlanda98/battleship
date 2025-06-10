import Ship from './ship';
import Player from './player';

export default function computerTurn(player, renderBoard, endGame) {
  let x;
  let y;
  do {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
  } while (!player.gameboard.isValidAttack(x, y));

  player.receiveAttack(x, y);
  renderBoard('playerBoard', player.gameboard, false);

  if (player.allShipsSunk()) {
    endGame('Game over! All your ships are sunk');
  }
}
