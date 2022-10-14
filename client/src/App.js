import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Home, Login, Register, ProductList, Product, Cart } from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:id' element={<Product />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
