//~~~~~~~~~~~~~~~~~~~~~~~~MODEL A~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './navbar.css';

// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <Link to="/" className="navbar-brand">Home</Link>
//       <ul className="navbar-links">
//         <li className="nav-item">
//           <Link to="/about" className="nav-link">About</Link>
//         </li>
//         <li className="nav-item dropdown">
//           <Link to="#" className="nav-link dropdown-toggle" id="dropdownMenuButton" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown Menu
//           </Link>
//           <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//             <li><Link to="/page1" className="dropdown-item">Page 1</Link></li>
//             <li><Link to="/page2" className="dropdown-item">Page 2</Link></li>
//           </ul>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

//~~~~~~~~~~~~~~~~~~~~~~~MODEL B~~~~~~~~~~~~~~~~~~~~~~
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './sdfavbar.css';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      

      <div className="logo">
        Awesome Zone
      </div>


      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown">
          <button onClick={toggleDropdown}>More Pages</button>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/DiceGame">Dice Game</Link>
              </li>
              <li>
                <Link to="/ConnectFour">Connect Four</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;