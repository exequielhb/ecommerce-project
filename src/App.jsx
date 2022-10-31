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
import { SuccesLogin } from './SuccesLogin';




function App() {
  
  return <>
    <Navbar />

    <Routes>
      <Route path="/" element={ <ItemListContainer /> }/>
      <Route path="/create" element={ <CreateProduct /> }/>
      <Route path="/update/:id" element={ <UpdateProducts /> }/>
      <Route path="/products/:id" element={ <ItemDetailContainer /> }/>

      {/* login/register section */}
      <Route path="/login" element={ <Login /> }/>
      <Route path="/register" element={ <Register /> }/>
      <Route path="/loginsc" element={ <SuccesLogin /> }/>
      


      <Route path="/contact" element={ <h1>Soy el contact</h1> }/>
      <Route path="/cart" element={ <Cart /> }/>
      <Route path="*" element={ <h1>404</h1> }/>
    </Routes>

    {/* <Footer /> */}
    
  </>
}

export default App
