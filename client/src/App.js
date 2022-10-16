import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CategoryItem } from './components';

import {
  Home,
  Login,
  Register,
  ProductList,
  Product,
  Cart,
  NotFound,
} from './pages';
import { Navigate } from 'react-router-dom';

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* home route */}
          <Route path='/' exact element={<Home />} />

          {/* cart route */}
          <Route
            path='/cart'
            element={currentUser ? <Cart /> : <Navigate to='/login' replace />}
          />

          {/* product list route */}
          <Route path='/products/:category' element={<ProductList />} />

          {/* single product route */}
          <Route path='/product/:id' element={<Product />} />

          {/* login route */}
          <Route
            path='/login'
            element={!currentUser ? <Login /> : <Navigate to='/' replace />}
          />

          {/* register route */}
          <Route
            path='/register'
            element={!currentUser ? <Register /> : <Navigate to='/' replace />}
          />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
