//~~~~~~~~~~~~~~~~DEFAULT LOAD~~~~~~~~~~~~~~~~~~~

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
//~~~~~~~~~~~~~~~~~~MODEL B~~~~~~~~~~~~~~~~~~~~~~~~~
// import React from 'react';
// import Navbar from './components/navbar'; // Import Navbar component

// function App() {
//   return (
//     <div>
//       <Navbar />
//       {/* Other content of your homepage */}
//     </div>
//   );
// }

// export default App;



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MODEL A Attempt at Drag and Drop~~~~~~~~~~~~~~~~~~~~~~~

import React, { useRef } from 'react';
import Diskette from './components/Diskette'

function App() {
  const computerScreenRef = useRef(null);
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
    <div>

    </div>
  );
}




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MODEL B~~~~~~~~~~~~~~~~~~~~

// import React, { useState } from 'react';
// // ... other imports (e.g., for images, routing)

// const App = () => {
//   const [currentPageUrl, setCurrentPageUrl] = useState(null);
//   const [isDragging, setIsDragging] = useState(false);

//   const handleDragStart = (url) => {
//     setCurrentPageUrl(url); 
//     setIsDragging(true);
//   };

//   const handleDragEnd = () => {
//     setIsDragging(false);
//   };

//   const handleDrop = (url) => {
//     // Check for collision using getBoundingClientRect()
//     // ... collision detection logic

//     if (isDiskInDrive) {
//       setCurrentPageUrl(url);
//     }
//   };

//   return (
//     <div className="computer-screen-container">
//       {/* ... Load page content based on currentPageUrl using your routing logic */}
//       <Diskette 
//         url="/home" // Replace with actual URL
//         onDragStart={handleDragStart}
//         onDragEnd={handleDragEnd}
//         isDragging={isDragging}
//       />
//       <DiskDrive onDrop={handleDrop} />
//     </div>
//   );
// };

// ... Diskette and DiskDrive component implementation


export default App;