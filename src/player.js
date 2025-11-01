export default function Player(name, isComputer = false) {
  const previousMoves = new Set();

  function attack(enemyBoard, coord) {
    return enemyBoard.receiveAttack(coord);
  }

  function getRandomAttack(enemyBoard) {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (previousMoves.has(`${x},${y}`) || enemyBoard.isAlreadyHit([x, y]));

    previousMoves.add(`${x},${y}`);
    return [x, y];
  }

  return { name, isComputer, attack, getRandomAttack };
}
