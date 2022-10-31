import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext"; 

import { logoutUser } from "../firebase/firebase";

export const Navbar = () => {
  
  const { currentUser } = useContext(AuthContext)
  

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {currentUser && (<li><Link to="/create">Add Products</Link></li>)}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>

        {currentUser && <button onClick={logoutUser}>Logout</button>}
        
      </nav>
    </div>
  );
};
