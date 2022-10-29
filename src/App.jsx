import {Route, Routes, Link } from 'react-router-dom';
import {Navbar} from './layout/Navbar';
import {Cart} from './Components/cart/Cart';
import { Footer } from './layout/Footer';
import { Item } from './Components/shopComponents/Item';
import { ItemListContainer } from './Components/shopComponents/ItemListContainer';

function App() {
  
  return <>
    <Navbar />

    <Routes>
      <Route path="/" element={ <ItemListContainer /> }/>
      <Route path="/dashboard" element={ <h1>Soy el dashboard</h1> }/>
      <Route path="/contact" element={ <h1>Soy el contact</h1> }/>
      <Route path="/cart" element={ <Cart /> }/>
      <Route path="*" element={ <h1>404</h1> }/>
    </Routes>

    <Footer />
    
  </>
}

export default App
