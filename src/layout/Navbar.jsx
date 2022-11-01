import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext"; 

import { logoutUser } from "../firebase/firebase";

import {BsCart} from 'react-icons/bs';

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
            <Link to="/cart">
              <BsCart style={{fontSize: "2em"}} />
              <span style={{background: "red", borderRadius: "7px"}} className="cart-count">0</span>
            </Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>

        {currentUser && <button style={{backgroundColor: "red"}} onClick={logoutUser}>Logout</button>}
        
      </nav>
    </div>
  );
};
