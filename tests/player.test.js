// tests/player.test.js
import Player from "../src/player.js";
import Gameboard from "../src/gameboard.js";
import Ship from "../src/ship.js";

describe("Player", () => {
  test("human player attacks a coordinate successfully", () => {
    const player = Player("Human");
    const enemyBoard = Gameboard();
    const ship = Ship(2);
    enemyBoard.placeShip(ship, [[0, 0], [0, 1]]);
    const result = player.attack(enemyBoard, [0, 1]);
    expect(result).toBe("hit");
  });

  test("prevents repeated attacks on the same coordinate", () => {
    const player = Player("Human");
    const enemyBoard = Gameboard();
    const ship = Ship(2);
    enemyBoard.placeShip(ship, [[0, 0], [0, 1]]);
    player.attack(enemyBoard, [0, 0]);
    const result = player.attack(enemyBoard, [0, 0]);
    expect(result).toBe("repeat");
  });

  test("computer player performs random unique attacks", () => {
    const computer = Player("AI", true);
    const enemyBoard = Gameboard();
    const ship = Ship(1);
    enemyBoard.placeShip(ship, [[2, 2]]);

    const firstAttack = computer.attack(enemyBoard);
    const secondAttack = computer.attack(enemyBoard);
    expect(firstAttack).not.toEqual(secondAttack);
  });

  test("attack history stores all previous attacks", () => {
    const player = Player("Human");
    const enemyBoard = Gameboard();
    const ship = Ship(2);
    enemyBoard.placeShip(ship, [[0, 0], [0, 1]]);

    player.attack(enemyBoard, [0, 0]);
    player.attack(enemyBoard, [1, 1]);
    expect(player.getAttackHistory()).toContain("0,0");
    expect(player.getAttackHistory()).toContain("1,1");
  });
});
