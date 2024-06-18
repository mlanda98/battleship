/* eslint-disable no-plusplus */
/* eslint-disable radix */

const { Ship } = require('./ship');
const { Player } = require('./player');
const { Gameboard } = require('./gameboard');

const playerGameboardElement = document.getElementById('player-gameboard');
const computerGameboardElement = document.getElementById('computer-gameboard');
const startButton = document.getElementById('start-button');

const player = new Player();
const computer = new Player();

const playerGameboardCells = [];

function computerMakeRandomAttack() {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);

  const result = player.receiveAttack(x, y);
  const cellIndex = y * 10 + x;
  const playerCell = playerGameboardElement.children[cellIndex];
  if (result) {
    playerCell.style.backgroundColor = 'red';
  } else {
    playerCell.style.backgroundColor = 'grey';
  }
}

function computerTurn() {
  setTimeout(() => {
    computerMakeRandomAttack();
  }, 1000);
}
function handleComputerGameboardClick(event) {
  const cell = event.target;
  const x = parseInt(cell.dataset.x);
  const y = parseInt(cell.dataset.y);

  if (cell.classList.contains('clicked')) {
    return;
  }

  cell.classList.add('clicked');
  const result = computer.receiveAttack(x, y);
  if (result) {
    cell.style.backgroundColor = 'red';
  } else {
    cell.style.backgroundColor = 'grey';
  }

  computerTurn();
}



function createGrid(gameboardElement, isPlayerBoard = false) {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.x = i % 10;
    cell.dataset.y = Math.floor(i / 10);

    if (!isPlayerBoard) {
      cell.addEventListener('click', handleComputerGameboardClick);
    }

    gameboardElement.appendChild(cell);
  }
}

function placeShipsRandomly(gameboardElement) {
  const shipPositions = new Set();
  while (shipPositions.size < 5) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const position = `${x}, ${y}`;
    if (!shipPositions.has(position)) {
      shipPositions.add(position);
      const cellIndex = y * 10 + x;
      const cell = gameboardElement.children[cellIndex];
      cell.classList.add('ship');
    }
  }
}

startButton.addEventListener('click', () => {
  computerGameboardElement.innerHTML = '';
  playerGameboardElement.innerHTML = '';

  createGrid(computerGameboardElement);
  createGrid(playerGameboardElement, true);

  placeShipsRandomly(computerGameboardElement);
  placeShipsRandomly(playerGameboardElement);

  computerTurn();
});
