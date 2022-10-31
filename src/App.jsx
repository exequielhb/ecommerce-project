import {Route, Routes } from 'react-router-dom';
import {Navbar} from './layout/Navbar';
import {Cart} from './Components/cart/Cart';
// import { Footer } from './layout/Footer';
import { ItemListContainer } from './Components/shopComponents/ItemListContainer';
import { CreateProduct } from './Components/shopComponents/CreateProduct';
import { UpdateProducts } from './Components/shopComponents/UpdateProducts';
import { ItemDetailContainer } from './Components/shopComponents/ItemDetailContainer';
import { ItemDetail } from './Components/shopComponents/ItemDetail';




function App() {
  
  return <>
    <Navbar />

    <Routes>
      <Route path="/" element={ <ItemListContainer /> }/>
      <Route path="/create" element={ <CreateProduct /> }/>
      <Route path="/update/:id" element={ <UpdateProducts /> }/>

      <Route path="/products/:id" element={ <ItemDetailContainer /> }/>
      


      <Route path="/contact" element={ <h1>Soy el contact</h1> }/>
      <Route path="/cart" element={ <Cart /> }/>
      <Route path="*" element={ <h1>404</h1> }/>
    </Routes>

    {/* <Footer /> */}
    
  </>
}

export default App
