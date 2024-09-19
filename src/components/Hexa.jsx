import React from 'react'
import { useState, useEffect } from 'react';
import "./hexa.css"

function Hexa() {
  const generateGrid = () => {
    const grid = [];
    for (let i = 0; i < 10; i++) {
      grid[i] = [];
      for (let j = 0; j < 10; j++) {
        grid[i][j] = Math.floor(Math.random() * 10) + 1;
      }
    }
    return grid;
  };
  const [grid, setGrid] = useState(generateGrid());


  const calculateHexagonSum = (i, j) => {
    let sum = grid[i][j];
    // Calculate sum for adjacent hexagons
    if (i > 0) {
      sum += grid[i - 1][j];
      if (j > 0) {
        sum += grid[i - 1][j - 1];
      }
      if (j < 9) {
        sum += grid[i - 1][j + 1];
      }
    }
    if (i < 9) {
      sum += grid[i + 1][j];
      if (j > 0) {
        sum += grid[i + 1][j - 1];
      }
      if (j < 9) {
        sum += grid[i + 1][j + 1];
      }
    }
    if (j > 0) {
      sum += grid[i][j - 1];
    }
    if (j < 9) {
      sum += grid[i][j + 1];
    }
    return sum;
  };

  return (
    <div>
      <h1>Hexagon Grid</h1>
      <table className="hexagon-grid">
        <tbody>
          {grid.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>
                  <div className="hexagon">
                    <span>{cell}</span>
                  </div>
                  <div className="hexagon-sum">
                    {calculateHexagonSum(i, j)}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setGrid(generateGrid())}>
        Generate New Grid
      </button>
    </div>
  );

}

export default Hexa