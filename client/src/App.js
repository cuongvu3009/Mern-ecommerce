import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CategoryItem } from './components';

import { Home, Login, Register, ProductList, Product, Cart } from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products/:category' element={<ProductList />} />
          <Route path='/product/:id' element={<Product />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
