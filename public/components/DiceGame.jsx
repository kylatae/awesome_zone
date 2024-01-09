// import React, { useState } from 'react';

// function DiceGame() {
//   const [diceRolls, setDiceRolls] = useState([]);
//   const [totalPoints, setTotalPoints] = useState(0);
//   const [isGameOver, setIsGameOver] = useState(false);

//   const rollDice = () => {
//     const newRolls = Array(5)
//       .fill()
//       .map(() => Math.floor(Math.random() * 20) + 1); // Roll 5 dice
//     setDiceRolls(newRolls);

//     const newPoints = newRolls.reduce((sum, roll) => sum + roll, 0);
//     setTotalPoints((prevPoints) => prevPoints + newPoints);

//     if (totalPoints >= 301) {
//       setIsGameOver(true);
//     }
//   };

//   return (
//     <div className="dice-game">
//       <h1>Dice Roller Challenge</h1>
//       <p>Roll 5 dice and try to stay under 301 points!</p>

//       {diceRolls.length > 0 && (
//         <div className="rolls">
//           <p>Your rolls: {diceRolls.join(', ')}</p>
//           <p>Total points: {totalPoints}</p>
//         </div>
//       )}

//       {isGameOver && (
//         <p>Game Over! Your final score: {totalPoints - 301}</p>
//       )}

//       {!isGameOver && (
//         <button onClick={rollDice}>Roll Dice</button>
//       )}
//     </div>
//   );
// }

// export default DiceGame;


import React, { useState, useEffect } from 'react';

function DiceGame() {
  const [dice, setDice] = useState([0, 0, 0, 0, 0]); // Store dice values
  const [score, setScore] = useState(0);

  const rollDice = () => {
    const newDice = [];
    for (let i = 0; i < 5; i++) {
      newDice.push(Math.floor(Math.random() * 20) + 1); // Random roll 1-20
    }
    setDice(newDice);

    // Calculate and update score
    const diceSum = newDice.reduce((total, num) => total + num, 0);
    setScore((prevScore) => prevScore + diceSum);
  };

  useEffect(() => {
    if (score > 301) {
      const finalScore = score - 301;
      alert(`Game Over! Your final score: ${finalScore}`);
    }
  }, [score]);

  return (
    <div>
      <h1>Dice Game</h1>
      <p>Current Score: {score}</p>
      <div className="dice-container">
        {dice.map((dieValue, index) => (
          <div className="die" key={index}>
            {dieValue}
          </div>
        ))}
      </div>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default DiceGame;