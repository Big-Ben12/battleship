const DOMController = (() => {
  function renderBoard(board, boardId, hideShips = false) {
    const container = document.getElementById(boardId);
    container.innerHTML = "";
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.coord = `${x},${y}`;

        const hit = board.hits?.includes?.(`${x},${y}`);
        const miss = board.missedShots.some(([mx, my]) => mx === x && my === y);
        const shipHere = board.ships.some(({ coordinates }) =>
          coordinates.some(([sx, sy]) => sx === x && sy === y)
        );

        if (shipHere && !hideShips) cell.classList.add("ship");
        if (hit) cell.classList.add("hit");
        if (miss) cell.classList.add("miss");

        container.appendChild(cell);
      }
    }
  }

  function updateMessage(msg) {
    document.getElementById("message").textContent = msg;
  }

  function renderBoards(playerBoard, computerBoard) {
    renderBoard(playerBoard, "player-board", false);
    renderBoard(computerBoard, "computer-board", true);
  }

  return { renderBoards, updateMessage };
})();

export default DOMController;
