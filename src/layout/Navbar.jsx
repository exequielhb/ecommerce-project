import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext"; 

import { logoutUser } from "../firebase/firebase";

import {BsCart} from 'react-icons/bs';

import { useCartContext } from "../context/authContext/cartContext";
import {Cart} from '../Components/cart/Cart';

export const Navbar = () => {
  
  const { currentUser } = useContext(AuthContext)

  const { showCart, setshowCart, totalQuantity } = useCartContext()
  

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
              <BsCart style={{fontSize: "2em"}} onClick={setshowCart(true)} />
              <span style={{background: "red", borderRadius: "7px"}} className="cart-count">{totalQuantity}</span>
            </Link>
          </li>
          { !currentUser && (<li><Link to="/login">Login</Link></li>)}
          { !currentUser && (<li><Link to="/signup">Signup</Link></li>)}
          
        </ul>

        {currentUser && <button style={{backgroundColor: "red"}} onClick={logoutUser}>Logout</button>}

        {/* {showCart && <Cart />} */}
        
      </nav>
    </div>
  );
};
