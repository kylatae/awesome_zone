// ~~~~~~~~~~~~~~~~~~~~~~MODEL A~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import React, { useState, useEffect } from 'react';
import './ConnectFour.css';

function ConnectFour() {
  // State variables for the game

  const [board, setBoard] = useState([
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '']
  ]
  );
  const [currentPlayer, setCurrentPlayer] = useState('purple');
  const [winner, setWinner] = useState(null);

  // ... game logic and rendering
  const handleClick = (colIndex) => {
    if (winner || board[0][colIndex]) {
      return;
    }
    var copy = [...board];
    for (let rowIndex = 6; rowIndex >= 0; rowIndex--) {
      if (!copy[rowIndex][colIndex]) {
        copy[rowIndex][colIndex] = currentPlayer;
        setBoard(copy);
        setCurrentPlayer(currentPlayer === 'purple' ? 'green' : 'purple'); // Alternate players
        // checkWinner(); // Use this when checkWinner logic has been established
        const hasWinner = checkWinner(board, currentPlayer);
        if (hasWinner) {
          setWinner(hasWinner);
          alert(`Game Over! ${hasWinner} has won!`)
        }
        return;
      }
    }
  };

  useEffect(() => {
    if (currentPlayer === 'green') {
      setTimeout(() => {
        const randomColumn = Math.floor(Math.random() * 7);
        handleClick(randomColumn);
        // checkWinner();
        const hasWinner = checkWinner(board, currentPlayer);
        if (hasWinner) {
          setWinner(hasWinner);
          alert(`Game Over! ${hasWinner} has won!`)
        }
      }, 10);
    }
  }, [currentPlayer]);

  // const checkWinner = () => {
  //   // ... logic to check for horizontal, vertical, and diagonal wins
  //   if (hasWinner) {
  //     setWinner(currentPlayer);
  //   }
  // };


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~MODEL A~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // const checkWinner = () => {
  //   const winningConditions = [
  //     // Horizontal wins
  //     ...board.map((row, rowIndex) => ([
  //       ...row.slice(0, 4)
  //     ])),
  //     // Vertical wins
  //     ...Array(7).fill(null).map((_, colIndex) => (
  //       board.map((row, rowIndex) => (row[colIndex]))
  //     )),
  //     // Diagonal wins (top-left to bottom-right)
  //     ...board.slice(0, 6).map((row, rowIndex) => (
  //       Array(4)
  //       .fill(null)
  //       .map((_, offset) => (row[offset + rowIndex]))
  //     )),
  //     ...board.slice(1, 7).map((row, rowIndex) => (
  //       Array(4)
  //       .fill(null)
  //       .map((_, offset) => (row[offset + rowIndex - 4]))
  //     )),
  //     // Diagonal wins (top-right to bottom-left)
  //     ...board.slice(0, 6).map((row, rowIndex) => (
  //       Array(4)
  //       .fill(null)
  //       .map((_, offset) => (row[3 - offset + rowIndex]))
  //     )),
  //     ...board.slice(1, 7).map((row, rowIndex) => (
  //       Array(4)
  //       .fill(null)
  //       .map((_, offset) => (row[3 - offset + rowIndex - 4]))
  //     )),
  //   ];
  
  //   for (let condition of winningConditions) {
  //     const [a, b, c, d] = condition;
  //     if (a && a === b && a === c && a === d) {
  //       setWinner(a);
  //       return;
  //     }
  //   }
  //   console.log(winner)

  // };



  const checkWinner = (board, currentPlayer) => {
    // Check for horizontal wins
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          board[row][col] === currentPlayer &&
          board[row][col + 1] === currentPlayer &&
          board[row][col + 2] === currentPlayer &&
          board[row][col + 3] === currentPlayer
        ) {
          return currentPlayer;
        }
      }
    }
  
    // Check for vertical wins
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 7; col++) {
        if (
          board[row][col] === currentPlayer &&
          board[row + 1][col] === currentPlayer &&
          board[row + 2][col] === currentPlayer &&
          board[row + 3][col] === currentPlayer
        ) {
          return currentPlayer;
        }
      }
    }
  
    // Check for diagonal wins (top-left to bottom-right)
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          board[row][col] === currentPlayer &&
          board[row + 1][col + 1] === currentPlayer &&
          board[row + 2][col + 2] === currentPlayer &&
          board[row + 3][col + 3] === currentPlayer
        ) {
          return currentPlayer;
        }
      }
    }
  
    // Check for diagonal wins (bottom-left to top-right)
    for (let row = 3; row < 7; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          board[row][col] === currentPlayer &&
          board[row - 1][col + 1] === currentPlayer &&
          board[row - 2][col + 2] === currentPlayer &&
          board[row - 3][col + 3] === currentPlayer
        ) {
          return currentPlayer;
        }
      }
    }
  
    // No winner yet
    return null;
  };

  // const resetGame = () => {
  //   setBoard([
  //     ['', '', '', '', '', '', ''],
  //     ['', '', '', '', '', '', ''],
  //     ['', '', '', '', '', '', ''],
  //     ['', '', '', '', '', '', ''],
  //     ['', '', '', '', '', '', ''],
  //     ['', '', '', '', '', '', ''],
  //     ['', '', '', '', '', '', '']
  //   ]);
  //   setCurrentPlayer('purple');
  //   setWinner(null);
  // };


  const resetGame = () => {
    // Initialize board to empty array (or your preferred initial state)
    const newBoard = [
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '']
    ];
    setBoard(newBoard);
    setWinner(null); // Clear the winner
    setCurrentPlayer('purple'); // Reset to starting player (if applicable)
  };



  return (
    <>
      <table>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} onClick={() => handleClick(colIndex)}>
                  {cell === 'purple' ? '' : cell === 'green' ? '' : 'O'}{cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* {winner && (
        <div className="winner-message">
          Congratulations, {winner} has won!
        </div>
      )}
      <button onClick={() => resetGame()}>Play Again</button> */}

      {winner && (
        <div className="winner-message">
          <h2>{winner === 'purple' ? 'Purple Wins!' : 'Green Wins!'}</h2>
        </div>
      )}
      <button onClick={resetGame}>Play Again</button>


    </>
  );
}

export default ConnectFour;


//~~~~~~~~~~~~~~~~~~~~~MODEL B~~~~~~~~~~~~~~~~~~~~~~~~~~

// import React, { useState, useEffect } from 'react';
// import './connectFour.css';


// function ConnectFour() {
//   // ... game logic ...
//   const [board, setBoard] = useState(new Array(7).fill(null).map(() => new Array(6).fill(null))); // 7x6 grid
//   const [currentPlayer, setCurrentPlayer] = useState('purple'); // Start with purple
//   const [winner, setWinner] = useState(null);

//   const aiMove = () => {
//     // ... AI logic (e.g., random column or more complex strategy) ...
    
//     // Make the AI move (using handleMove function)
//     // handleMove(aiSelectedColumn); 
//   };

//   const checkForWinner = (board, player) => {
//     // Check horizontal, vertical, and diagonals for 4 in a row
//     // ... implementation ...
//   };

  
// useEffect(() => {
//   if (currentPlayer === 'green' && !winner) {
//     setTimeout(() => {
//       aiMove();
//     }, 1000); // 1-second delay for AI move
//   }
// }, [currentPlayer, winner, aiMove]);

// const handleMove = (colIndex) => {
//   // Find the first empty row in the column
//   console.log("click")
//   const newBoard = [...board];
//   for (let i = 5; i >= 0; i--) {
//     if (newBoard[colIndex][i] === null) {
//       newBoard[colIndex][i] = currentPlayer;
//       break;
//     }
//   }

//   // Check for winner, then switch players
//   setBoard(newBoard);
//   if (!checkForWinner(newBoard, currentPlayer)) {
//     setCurrentPlayer(currentPlayer === 'purple' ? 'green' : 'purple');
//   }
// };



//   return (
//     <div className="connect-four-game">
//       {/* Game Board (Table) */}
//       <table>
//         <tbody>
//           {board.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               {row.map((cell, colIndex) => (
//                 <td key={colIndex} onClick={() => handleMove(colIndex)}>
//                   {/* Circle piece with appropriate color */} 
//                   <div className={`circle ${cell}`}>O</div> 
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Game Status (e.g., current player, winner) */}
//       <div className="game-status">
//         {/* ... */}
//       </div>
//     </div>
//   );
// }

// export default ConnectFour;