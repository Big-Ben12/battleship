import Gameboard from "../src/gameboard.js";
import Ship from "../src/ship.js";

test("registers a hit when ship occupies attacked cell", () => {
  const board = Gameboard();
  const ship = Ship(2);
  board.placeShip(ship, [[0, 0], [0, 1]]);
  expect(board.receiveAttack([0, 1])).toBe("hit");
});

test("registers a miss when no ship occupies cell", () => {
  const board = Gameboard();
  const ship = Ship(2);
  board.placeShip(ship, [[0, 0], [0, 1]]);
  expect(board.receiveAttack([1, 1])).toBe("miss");
});
