import React from 'react'
import { useState, useEffect } from 'react';
import "./square.css"

function Square() {
    const [grid, setGrid] = useState([]);
    const [totalSum, setTotalSum] = useState(0);
  
    // Function to generate the grid and calculate the sum
    const generateGrid = (rows, cols) => {
      let tempGrid = [];
      let sum = 0;
  
      // Loop through rows and columns to fill the grid with random numbers
      for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
          // Generate a random number between 0 and 9
          let randomNumber = Math.floor(Math.random() * 10);
          row.push(randomNumber);
          sum += randomNumber;
        }
        tempGrid.push(row);
      }
  
      // Set the grid and total sum in state
      setGrid(tempGrid);
      setTotalSum(sum);
    };
  
    // Generate grid on component mount
    useEffect(() => {
      generateGrid(20, 40); // 20 rows and 40 columns as per the image
    }, []);
  
    return (
      <div className="App">
        <h1>Number Grid</h1>
        <div className="grid-container">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="grid-row">
              {row.map((num, colIndex) => (
                <span key={colIndex} className="grid-item">
                  {num}
                </span>
              ))}
            </div>
          ))}
        </div>
        <h2>Total Sum: {totalSum}</h2>
    </div>
    );
}

export default Square