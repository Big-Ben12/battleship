import "./style.css";
import Gameboard from "./gameboard.js";
import Player from "./player.js";
import DOMController from "./dom.js";

const player = Player("You");
const computer = Player("Computer", true);
const playerBoard = Gameboard();
const computerBoard = Gameboard();

// Place ships
playerBoard.randomizeShips();
computerBoard.randomizeShips();

// Render
DOMController.renderBoards(playerBoard, computerBoard);
DOMController.updateMessage("Your turn!");

// Handle click on computer board
document.getElementById("computer-board").addEventListener("click", (e) => {
  const cell = e.target;
  if (!cell.classList.contains("cell")) return;

  const coord = cell.dataset.coord.split(",").map(Number);
  if (computerBoard.isAlreadyHit(coord)) return;

  player.attack(computerBoard, coord);
  DOMController.renderBoards(playerBoard, computerBoard);

  if (computerBoard.allSunk()) {
    DOMController.updateMessage("🎉 You win!");
    disableBoard();
    return;
  }

  DOMController.updateMessage("🤖 Computer's turn...");
  setTimeout(computerTurn, 700);
});

function computerTurn() {
  const coord = computer.getRandomAttack(playerBoard);
  playerBoard.receiveAttack(coord);
  DOMController.renderBoards(playerBoard, computerBoard);

  if (playerBoard.allSunk()) {
    DOMController.updateMessage("💀 Computer wins!");
    disableBoard();
    return;
  }

  DOMController.updateMessage("Your turn!");
}

function disableBoard() {
  document.getElementById("computer-board").style.pointerEvents = "none";
}
