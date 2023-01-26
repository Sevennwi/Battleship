import { useState } from "react";

export default function Ship() {
  const ships = [
    {
      name: "Destroyer",
      length: 2,
      hit: 0,
      sunk: false,
    },
    {
      name: "Submarine",
      length: 3,
      hit: 0,
      sunk: false,
    },
    {
      name: "Cruiser",
      length: 3,
      hit: 0,
      sunk: false,
    },
    {
      name: "Battleship",
      length: 3,
      hit: 0,
      sunk: false,
    },
    {
      name: "Carrier",
      length: 3,
      hit: 0,
      sunk: false,
    },
  ];

  console.log(ships);
  console.log(ships[2].hit)

  function hit() {
    if (this.hit < this.length) {
      this.hit++;
    } else {
      isSunk();
    }
  }

  function isSunk() {
    this.sunk = true;
  }

  return (
    <div>
      <p>Ship</p>
    </div>
  );
}
