import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CategoryItem } from './components';

import { Home, Login, Register, ProductList, Product, Cart } from './pages';
import { Navigate } from 'react-router-dom';

function App() {
  const currentUser = useSelector((state) => state.user);
  const user = currentUser.accessToken;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* home route */}
          <Route
            path='/'
            exact
            element={!user ? <Home /> : <Navigate to='/login' replace />}
          />

          {/* cart route */}
          <Route
            path='/cart'
            element={!user ? <Cart /> : <Navigate to='/login' replace />}
          />

          {/* product list route */}
          <Route
            path='/products/:category'
            element={!user ? <ProductList /> : <Navigate to='/login' replace />}
          />

          {/* single product route */}
          <Route
            path='/product/:id'
            element={!user ? <Product /> : <Navigate to='/login' replace />}
          />

          {/* login route */}
          <Route
            path='/login'
            element={user ? <Login /> : <Navigate to='/' replace />}
          />

          {/* register route */}
          <Route
            path='/register'
            element={user ? <Register /> : <Navigate to='/' replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
