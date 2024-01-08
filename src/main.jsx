//~~~~~~~~~~~~~~~~~~~~~~~~DEFAULT~~~~~~~~~~~~~~~~~~~~~~~~

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


//~~~~~~~~~~~~~~~~~~~~~~~MODEL A~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NavBar from './navbar'; // Import the Navbar component
// // import Home from './Home'; // Import your Home component
// // import About from './About'; // Import other pages (e.g., About)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <NavBar /> {/* Render the Navbar at the top */}
//     <Routes>
//       {/* <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} /> */}
//       {/* Add routes for other pages here */}
//     </Routes>
//   </BrowserRouter>
// );


//~~~~~~~~~~~~~~~~~~~~~~~~~~MODEL B~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// import React from 'react';
// import Navbar from './components/Navbar'; // Import Navbar component

// function App() {
//   return (
//     <div>
//       <Navbar />
//       {/* Other content of your homepage */}
//     </div>
//   );
// }

// export default App;


//~~~~~~~~~~~~~~~~~~~~~~~~~MODEL A + Changes~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar.jsx'; // Import the Navbar component
import App from './App.jsx';
import DiceGame from './components/DiceGame.jsx';
import ConnectFour from './components/ConnectFour.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar /> {/* Render the Navbar at the top */}
    <Routes>
    <Route path="/DiceGame" element={<DiceGame />} />
    <Route path="/ConnectFour" element={<ConnectFour />} />
      {/* Add routes for other pages here */}
    </Routes>
  </BrowserRouter>
);