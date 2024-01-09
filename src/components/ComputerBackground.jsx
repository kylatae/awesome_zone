import React, { useRef } from 'react';
import Diskette from './Diskette'
import './ComputerBackground.css';

function ComputerBackground({ children }) {
  const diskDriveRef = useRef(null);

  // ... state and event handlers

  const handleDragStart = (event) => {
    event.dataTransfer.setData('pageToLoad', event.target.dataset.pageToLoad);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const pageToLoad = event.dataTransfer.getData('pageToLoad');
    window.location.href =`${pageToLoad}`
  };

  return (
    <div className="computer-background">
      <div className="monitor-area">
        {/* Game pages will be rendered here */}
        {children}
      </div>
      {/* Disk drive element */}
      <div className="disk-drive" ref={diskDriveRef}>
        <img src="./images/computer/disk-slot.png" alt="Disk Slot" onDragOver={handleDragOver} onDrop={handleDrop}/>
      </div>

      {/* Diskette elements (multiple for different pages) */}
      <Diskette src="./images/computer/diskette-connect-four.png" pageToLoad="./ConnectFour" onDragStart={handleDragStart} />
      <Diskette src="./images/computer/diskette-dice-game.png" pageToLoad="./DiceGame" onDragStart={handleDragStart} />
    </div>
  );
}

export default ComputerBackground;

