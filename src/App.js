import { Routes, Route } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { publicRoutes, authProtectedRoutes } from './routes';
import AuthMiddleWare from './routes/authMiddleWare';
import AuthLayout from './layout/AuthLayout';
import NoAuthLayout from './layout/NoAuthLayout';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AuthMiddleWare layout={AuthLayout} isAuthProtected />}>
          {authProtectedRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
        <Route element={<AuthMiddleWare layout={NoAuthLayout} isAuthProtected={false} />}>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
