import Ship from "./ship.js";

export default function Gameboard(size = 10) {
  const ships = [];
  const missedShots = [];
  const hits = [];

  const coordKey = ([x, y]) => `${x},${y}`;

  function inBounds([x, y]) {
    return x >= 0 && x < size && y >= 0 && y < size;
  }

  function canPlaceShip(length, coordinates) {
    if (!Array.isArray(coordinates) || coordinates.length !== length) return false;
    for (const c of coordinates) {
      if (!inBounds(c)) return false;
      if (
        ships.some(({ coordinates: coords }) =>
          coords.some(([sx, sy]) => sx === c[0] && sy === c[1])
        )
      ) {
        return false;
      }
    }
    return true;
  }

  function placeShip(ship, coordinates) {
    if (!canPlaceShip(ship.length, coordinates)) return false;
    ships.push({ ship, coordinates: coordinates.map(c => [c[0], c[1]]) });
    return true;
  }

  function receiveAttack(coord) {
    const key = coordKey(coord);
    if (hits.includes(key) || missedShots.some(c => coordKey(c) === key)) return "repeat";

    for (const entry of ships) {
      const { ship, coordinates } = entry;
      if (coordinates.some(([sx, sy]) => sx === coord[0] && sy === coord[1])) {
        ship.hit();
        hits.push(key);
        return "hit";
      }
    }

    missedShots.push(coord);
    return "miss";
  }

  function allSunk() {
    return ships.length > 0 && ships.every(({ ship }) => ship.isSunk());
  }

  function isAlreadyHit(coord) {
    const key = coordKey(coord);
    return hits.includes(key) || missedShots.some(c => coordKey(c) === key);
  }

  function clear() {
    ships.length = 0;
    missedShots.length = 0;
    hits.length = 0;
  }

  function genCoords([x, y], length, orientation) {
    return Array.from({ length }, (_, i) =>
      orientation === "H" ? [x + i, y] : [x, y + i]
    );
  }

  function randomizeShips(fleet = [5, 4, 3, 3, 2]) {
    clear();
    const MAX_ATTEMPTS = 200;
    for (const len of fleet) {
      let placed = false;
      let attempts = 0;
      while (!placed && attempts < MAX_ATTEMPTS) {
        attempts++;
        const orientation = Math.random() < 0.5 ? "H" : "V";
        const x = Math.floor(Math.random() * (size - (orientation === "H" ? len : 1)));
        const y = Math.floor(Math.random() * (size - (orientation === "V" ? len : 1)));
        const coords = genCoords([x, y], len, orientation);
        if (canPlaceShip(len, coords)) {
          placeShip(Ship(len), coords);
          placed = true;
        }
      }
    }
  }

  return { placeShip, receiveAttack, allSunk, ships, missedShots, randomizeShips, isAlreadyHit };
}
