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
import { GlobalStyle } from './styles/GlobalStyle';
// import { Header } from './layout/Header';




function App() {
  
  return <>

  <AuthProvider>
    <CartContext>
      <Navbar />
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/products/:id" element={ <ItemDetailContainer /> }/>


          {/* login/register section */}
          <Route path="/login" element={ <Login /> }/>
          <Route path="/register" element={ <Register /> }/>
          

          {/* private routes */}
          <Route path="/cart" element={ <PrivateRoutes> <Cart /> </PrivateRoutes>}/>
          <Route path="/create" element={<PrivateRoutes> <CreateProduct /> </PrivateRoutes> }/>
          <Route path="/checkout" element={<PrivateRoutes> <Checkout /> </PrivateRoutes>} />
          <Route path="/purchaseForm" element={<PrivateRoutes> <PurchaseForm /> </PrivateRoutes>} />
          <Route path="/success" element={<PrivateRoutes> <Success /> </PrivateRoutes> } />
          <Route path="/user" element={ <PrivateRoutes> <Profile /> </PrivateRoutes> } />
          <Route path="/update/:id" element={ <PrivateRoutes> <UpdateProducts /> </PrivateRoutes> }/>


          <Route path="/contact" element={ <h1>Soy el contact</h1> }/>
          <Route path="*" element={ <h1>404</h1> }/>
        </Routes>
      <GlobalStyle />
    </CartContext>
  </AuthProvider>

  
    {/* <Footer /> */}
    
  </>
}

export default App
