const { Ship } = require('./ship');
const { Player } = require('./player');
const { Gameboard } = require('./gameboard');

const playerGameboardElement = document.getElementById('player-gameboard');
const playerGameboardCells = playerGameboardElement.querySelectorAll('cell');
const computerGameboardElement = document.getElementById('computer-gameboard');
const computerGameboardCells = computerGameboardElement.querySelector('cell');
const startButton = document.getElementById('start-button');

const player = {
  receiveAttack(x, y) {
    console.log(`player received attack at (${x}, ${y})`);
    return false;
  },
  placeShipsRandomly() {
    console.log('player is placing ships randomly');

    const shipPositions = new Set();
    while (shipPositions.size < 5) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      shipPositions.add(`${x}, ${y}`);
    }

    console.log(Array.from(shipPositions));
    return shipPositions;
  },
};
const computer = {
  receiveAttack(x, y) {
    console.log(`computer received attack at (${x}, ${y})`);
    return false;
  },
  placeShipsRandomly() {
    console.log('computer is placing ships randomly');

    const shipPositions = new Set();
    while (shipPositions.size < 5) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      shipPositions.add(`${x}, ${y}`);
    }

    console.log(Array.from(shipPositions));
    return shipPositions;
  },
};
function computerMakeRandomAttack() {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);

  const result = player.receiveAttack(x, y);

  const cellIndex = y * 10 + x;
  const playerCell = playerGameboardCells[cellIndex];
  if (result) {
    playerCell.style.backgroundColor = 'grey';
  }
}

function handlePlayerGameboardClick(event) {
  const cell = event.target;
  const { x } = cell.dataset;
  const { y } = cell.dataset;

  if (cell.classList.contains('clicked')) {
    return;
  }

  cell.classList.add('clicked');

  const result = computer.receiveAttack(x, y);

  if (result) {
    cell.style.backgroundColor = 'red';
  } else {
    cell.style.backgroundColor = 'gray';
  }

  setTimeout(computerMakeRandomAttack, 1000);
}

function createGrid(gameboardElement, isPlayerBoard = false) {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    if (isPlayerBoard) {
      cell.dataset.x = i % 10;
      cell.dataset.y = Math.floor(i / 10);
      cell.addEventListener('click', handlePlayerGameboardClick);
    }

    gameboardElement.appendChild(cell);
  }
}

startButton.addEventListener('click', () => {
  computerGameboardElement.innerHTML = '';
  playerGameboardElement.innerHTML = '';
  createGrid(computerGameboardElement);
  createGrid(playerGameboardElement, true);

  const shipPositionsC = computer.placeShipsRandomly();
  const shipPositionsP = computer.placeShipsRandomly();
});
