/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable radix */

import Ship from './ship';
import Player from './player';
import computerTurn from './computerTurn';

let player;
let computer;
let messagesElement;
let currentPlayer;

function endGame(message) {
  messagesElement.textContent = message;
}

function gameLoop() {
  console.log('Start game loop');
  renderBoard('computerBoard', computer.gameboard, true);
  renderBoard('playerBoard', player.gameboard, false);

  if (player.gameboard.allShipsSunk()) {
    console.log('player has sunk all ships');
    endGame('Game Over! Computer wins!');
    return;
  }
  if (computer.gameboard.allShipsSunk()) {
    console.log('computer has sunk all ships');
    endGame('Game Over! You win!');
    return;
  }

  if (currentPlayer === computer) {
    setTimeout(() => {
      computerTurn(player, renderBoard, endGame);
      switchTurn();
      gameLoop();
    }, 1000);
  }
}

function switchTurn() {
  currentPlayer = currentPlayer === player ? computer : player;
}

function renderBoard(boardId, gameboard, clickable) {
  const boardElement = document.getElementById(boardId);
  boardElement.innerHTML = '';

  for (let y = 0; y < gameboard.size; y++) {
    for (let x = 0; x < gameboard.size; x++) {
      const cell = document.createElement('div');
      cell.dataset.x = x;
      cell.dataset.y = y;
      cell.classList.add('cell');

      if (gameboard.board[x][y] instanceof Ship) {
        cell.classList.add('ship');
      } else if (gameboard.board[x][y] === 'hit') {
        cell.classList.add('hit');
      } else if (gameboard.board[x][y] === 'miss') {
        cell.classList.add('miss');
      }

      if (clickable && currentPlayer === player) {
        cell.classList.add('clickable');
        cell.addEventListener('click', () => {
          if (currentPlayer === player && gameboard.isValidAttack(x, y)) {
            const attackResult = gameboard.receiveAttack(x, y);
            if (attackResult.hit) {
              cell.classList.add('hit');
              if (gameboard.allShipsSunk()) {
                endGame('You win! All computer ships are sunk');
              } else {
                switchTurn();
                setTimeout(() => {
                  gameLoop();
                }, 1000);
              }
            } else {
              cell.classList.add('miss');
              cell.classList.remove('clickable');
              switchTurn();
              setTimeout(() => {
                gameLoop();
              }, 1000);
            }
          }
        });
      }

      boardElement.appendChild(cell);
    }
  }

  if (currentPlayer === player) {
    messagesElement.textContent = "Your turn! Click on oppenent's board to attack";
  } else {
    messagesElement.textContent = "Computer's turn";
  }
}

function placeShipsRandomly(gameboard) {
  const shipLengths = [5, 4, 3, 4, 2];
  for (const length of shipLengths) {
    let x = Math.floor(Math.random() * gameboard.size);
    let y = Math.floor(Math.random() * gameboard.size);
    let orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';

    while (!gameboard.placeShip(new Ship(length), x, y, orientation)) {
      x = Math.floor(Math.random() * gameboard.size);
      y = Math.floor(Math.random() * gameboard.size);
      orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    }
  }
}

function startGame() {
  player = new Player(true, 10);
  computer = new Player(false, 10);

  messagesElement = document.getElementById('messages');

  currentPlayer = player;

  placeShipsRandomly(player.gameboard);
  placeShipsRandomly(computer.gameboard);

  renderBoard('playerBoard', player.gameboard, false);
  renderBoard('computerBoard', computer.gameboard, true);

  gameLoop();
}
document.getElementById('start-button').addEventListener('click', startGame);
