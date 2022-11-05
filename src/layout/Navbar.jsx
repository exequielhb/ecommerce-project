import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext"; 

import { logoutUser } from "../firebase/firebase";

import {BsCart} from 'react-icons/bs';

import { useCartContext } from "../context/authContext/cartContext";


export const Navbar = () => {
  
  const { currentUser } = useContext(AuthContext)

  const { setshowCart, totalQuantity } = useCartContext()
  

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
          {currentUser && (<li>
            <Link to="/user">User</Link>
          </li>)}
          {/* <li>
            <Link to="/user">User</Link>
          </li> */}
          <li>
            {currentUser && (<Link to="/cart">
              <BsCart style={{fontSize: "2em"}} />
              <span style={{background: "red", borderRadius: "7px"}} className="cart-count">{totalQuantity}</span>
            </Link>)}
          </li>
          { !currentUser && (<li><Link to="/login">Login</Link></li>)}
          { !currentUser && (<li><Link to="/register">Signup</Link></li>)}
          
        </ul>

        {currentUser && <button style={{backgroundColor: "red"}} onClick={logoutUser}>Logout</button>}
        
      </nav>
    </div>
  );
};
