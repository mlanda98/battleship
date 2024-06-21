/* eslint-disable no-plusplus */
/* eslint-disable radix */
/*
const { Ship } = require('./ship').default.default;
const { Player } = require('./player');
const { Gameboard } = require('./gameboard').default;

const playerGameboardElement = document.getElementById('player-gameboard');
const computerGameboardElement = document.getElementById('computer-gameboard');
const startButton = document.getElementById('start-button');

const humanPlayer = new Player(true);
const computer = new Player(false);

function updateHitsAndMisses(result, x, y, currentPlayer) {
  if (result === 'hit') {
    currentPlayer.hits.push({ x, y });
  } else {
    currentPlayer.misses.push({ x, y });
  }
}

function computerMakeRandomAttack() {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);

  const result = humanPlayer.receiveAttack(x, y);
  const cellIndex = y * 10 + x;
  const cell = playerGameboardElement.children[cellIndex];
  if (result === 'hit') {
    cell.style.backgroundColor = 'red';
  } else {
    cell.style.backgroundColor = 'grey';
  }
  updateHitsAndMisses(result, x, y, humanPlayer);
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

  console.log('clicked cell coordinates', x, y);

  if (cell.classList.contains('clicked')) {
    console.log('cell already clicked');
    return;
  }

  cell.classList.add('clicked');
  const result = computer.receiveAttack(x, y);
  console.log('result of computer.receiveAttack', result);

  if (result === 'hit') {
    console.log('hit at', x, y);
    cell.style.backgroundColor = 'red';
  } else {
    console.log('misses at', x, y);
    cell.style.backgroundColor = 'grey';
  }

  updateHitsAndMisses(result, x, y, computer);
  computerTurn();
}

function createGrid(gameboardElement, isPlayerBoard = false) {
  const hits = isPlayerBoard ? humanPlayer.hits : computer.hits;
  const misses = isPlayerBoard ? humanPlayer.misses : computer.misses;

  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.x = i % 10;
    cell.dataset.y = Math.floor(i / 10);

    const x = parseInt(cell.dataset.x);
    const y = parseInt(cell.dataset.y);

    const isHit = hits.some((hit) => hit.x === x && hit.y === y);
    const isMiss = misses.some((miss) => miss.x === x && miss.y === y);

    if (isHit) {
      cell.style.backgroundColor = 'red';
    } else if (isMiss) {
      cell.style.backgroundColor = 'grey';
    }

    if (!isPlayerBoard) {
      cell.addEventListener('click', handleComputerGameboardClick);
    }

    gameboardElement.appendChild(cell);
  }
}

function placeShipsRandomly(gameboardElement) {
  const shipSizes = [5, 4, 4, 3, 2];
  const shipPositions = new Set();

  function canPlaceShip(x, y, size, orientation) {
    if (orientation === 'horizontal') {
      if (x + size > 10) return false;
      for (let i = x; i < x + size; i++) {
        if (shipPositions.has(`${i},${y}`)) return false;
      }
    } else {
      if (y + size > 10) return false;
      for (let j = y; j < y + size; j++) {
        if (shipPositions.has(`${x},${j}`)) return false;
      }
    }
    return true;
  }

  function placeShip(x, y, size, orientation) {
    const positions = [];
    if (orientation === 'horizontal') {
      for (let i = x; i < x + size; i++) {
        shipPositions.add(`${i},${y}`);
        positions.push(`${i},${y}`);
      }
    } else {
      for (let j = y; j < y + size; j++) {
        shipPositions.add(`${x},${j}`);
        positions.push(`${x},${j}`);
      }
    }
    return positions;
  }

  shipSizes.forEach((size) => {
    let placed = false;
    while (!placed) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';

      if (canPlaceShip(x, y, size, orientation)) {
        const shipPositionsToAdd = placeShip(x, y, size, orientation);
        placed = true;

        shipPositionsToAdd.forEach((position) => {
          const [px, py] = position.split(',').map(Number);
          const cellIndex = py * 10 + px;
          const cell = gameboardElement.children[cellIndex];
          cell.classList.add('ship');
        });
      }
    }
  });
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
*/
