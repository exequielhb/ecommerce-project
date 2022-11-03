import {Route, Routes } from 'react-router-dom';
import {Navbar} from './layout/Navbar';
import {Cart} from './Components/cart/Cart';
// import { Footer } from './layout/Footer';
import { ItemListContainer } from './Components/shopComponents/ItemListContainer';
import { CreateProduct } from './Components/shopComponents/CreateProduct';
import { UpdateProducts } from './Components/shopComponents/UpdateProducts';
import { ItemDetailContainer } from './Components/shopComponents/ItemDetailContainer';

import { Login } from './views/login/Login';
import { Register } from './views/register/Register';
import { AuthProvider } from './context/authContext';
import { PrivateRoutes } from './Components/privateRoutes/PrivateRoutes';
import { CartContext } from './context/authContext/cartContext';
import { Checkout } from './Components/cart/Checkout';
import {PurchaseForm} from './Components/cart/PurchaseForm';
import { Success } from './Components/cart/Success';
import { Profile } from './Components/Profile';






function App() {
  
  return <>

  <AuthProvider>
    <CartContext>
      <Navbar />
        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          {/* <Route path="/create" element={ <CreateProduct /> }/> */}
          <Route path="/update/:id" element={ <UpdateProducts /> }/>
          <Route path="/products/:id" element={ <ItemDetailContainer /> }/>


          {/* login/register section */}
          <Route path="/login" element={ <Login /> }/>
          <Route path="/register" element={ <Register /> }/>
          

          {/* private routes */}
          <Route path="/cart" element={ <PrivateRoutes> <Cart /> </PrivateRoutes>}/>
          <Route path="/create" element={<PrivateRoutes> <CreateProduct /> </PrivateRoutes> }/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/purchaseForm" element={<PurchaseForm />} />
          <Route path="/success" element={<Success /> } />
          <Route path="/user" element={ <Profile />} />


          <Route path="/contact" element={ <h1>Soy el contact</h1> }/>
          <Route path="*" element={ <h1>404</h1> }/>
        </Routes>
    </CartContext>
  </AuthProvider>

  

    {/* <Footer /> */}
    
  </>
}

export default App
