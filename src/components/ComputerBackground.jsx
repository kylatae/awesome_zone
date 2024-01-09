// import React, { useRef } from 'react';
// import Diskette from './Diskette'
// import './ComputerBackground.css';

// function ComputerBackground({ children }) {
//   const diskDriveRef = useRef(null);

//   // ... state and event handlers

//   const handleDragStart = (event) => {
//     event.dataTransfer.setData('pageToLoad', event.target.dataset.pageToLoad);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const pageToLoad = event.dataTransfer.getData('pageToLoad');
//     window.location.href =`${pageToLoad}`
//   };

//   return (
//     <div className="computer-background">
//       <div className="monitor-area">
//         {/* Game pages will be rendered here */}
//         {children}
//       </div>
//       {/* Disk drive element */}
//       <div className="disk-drive" ref={diskDriveRef} onDragOver={handleDragOver} onDrop={handleDrop}>
//         {/* <img src="./images/computer/disk-slot.png" alt="Disk Slot" onDragOver={handleDragOver} onDrop={handleDrop}/> */}
//       </div>

//       {/* Diskette elements (multiple for different pages) */}
//       <Diskette src="./images/computer/diskette-connect-four.png" pageToLoad="./ConnectFour" onDragStart={handleDragStart} />
//       <Diskette src="./images/computer/diskette-dice-game.png" pageToLoad="./DiceGame" onDragStart={handleDragStart} />
//     </div>
//   );
// }

// export default ComputerBackground;


//~~~~~~~~~~~~~~~~~~~~~~~~MODEL A~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// import React, { useRef } from 'react';
// import Diskette from './Diskette'
// import './ComputerBackground.css';

// function ComputerBackground({ children }) {
//   const diskDriveRef = useRef(null);

//   // ... state and event handlers

//   const handleDragStart = (event) => {
//     event.dataTransfer.setData('pageToLoad', event.target.dataset.pageToLoad);
//   };

//   function handleDragOver(event) {
//     const driveRect = diskDriveRef.current.getBoundingClientRect();
//     const isOverDrive = event.clientX >= driveRect.left &&
//       event.clientX <= driveRect.right &&
//       event.clientY >= driveRect.top &&
//       event.clientY <= driveRect.bottom;
  
//     if (isOverDrive) {
//       event.preventDefault();
//     }
//   }

//   function handleDrop(event) {
//     event.preventDefault();
  
//     // Check if the drop is within the disk drive area
//     const driveRect = diskDriveRef.current.getBoundingClientRect();
//     const isOverDrive = event.clientX >= driveRect.left &&
//       event.clientX <= driveRect.right &&
//       event.clientY >= driveRect.top &&
//       event.clientY <= driveRect.bottom;
  
//     if (isOverDrive) {
//       const pageToLoad = event.dataTransfer.getData('pageToLoad');
//       window.location.href = `${pageToLoad}`;
//     }
//   }

//   return (
//     <div className="computer-background">
//       <div className="monitor-area">
//         {/* Game pages will be rendered here */}
//         {children}
//       </div>
//       {/* Disk drive element */}
//       <div className="disk-drive" ref={diskDriveRef} onDragOver={handleDragOver} onDrop={handleDrop}>
//         {/* <img src="./images/computer/disk-slot.png" alt="Disk Slot" onDragOver={handleDragOver} onDrop={handleDrop}/> */}
//       </div>

//       {/* Diskette elements (multiple for different pages) */}
//       <Diskette src="./images/computer/diskette-connect-four.png" pageToLoad="./ConnectFour" onDragStart={handleDragStart} />
//       <Diskette src="./images/computer/diskette-dice-game.png" pageToLoad="./DiceGame" onDragStart={handleDragStart} />
//     </div>
//   );
// }

// export default ComputerBackground;


//~~~~~~~~~~~~~~~~~~~~~~~~MODEL B~~~~~~~~~~~~~~~~~~~~~~
import React, { useRef } from 'react';
import Diskette from './Diskette'
import './ComputerBackground.css';

function ComputerBackground({ children }) {
  const computerScreenRef = useRef(null); // Reference the combined image

  // ... state and event handlers

  const handleDragStart = (event) => {
    event.dataTransfer.setData('pageToLoad', event.target.dataset.pageToLoad);
  };

  const handleDragOver = (event) => {
    event.preventDefault();

    // Get coordinates of the combined image
    const imageRect = computerScreenRef.current.getBoundingClientRect();

    // Calculate acceptable drop zone coordinates (adjust based on your image)
    const dropZoneLeft = imageRect.left + .58*imageRect.width; // Example
    const dropZoneTop = imageRect.top + .68*imageRect.height; // Example
    const dropZoneWidth = .20*imageRect.width; // Example
    const dropZoneHeight = .05*imageRect.height; // Example

    // Check if dragged element is within drop zone area
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if (mouseX >= dropZoneLeft && mouseX <= dropZoneLeft + dropZoneWidth &&
        mouseY >= dropZoneTop && mouseY <= dropZoneTop + dropZoneHeight) {
      // Allow drop
    } else {
      // Prevent drop
      event.dataTransfer.dropEffect = "none";
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const pageToLoad = event.dataTransfer.getData('pageToLoad');
    window.location.href =`${pageToLoad}`
  };

  return (
    <>
      <div className="computer-container" ref={computerScreenRef}>
        {/* Use the combined image as the background */}
        <img src="./images/computer/computer-screen.png" alt="Computer Screen" onDragOver={handleDragOver} onDrop={handleDrop} />
        {/* Diskette elements (multiple for different pages) */}
        <Diskette src="./images/computer/diskette-connect-four.png" pageToLoad="./ConnectFour" onDragStart={handleDragStart} />
        <Diskette src="./images/computer/diskette-dice-game.png" pageToLoad="./DiceGame" onDragStart={handleDragStart} />
      </div>
      <div className="monitor-area">
        {/* Game pages will be rendered here */}
        {children}
      </div>
    </>
  );
}

export default ComputerBackground;