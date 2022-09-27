import { Routes, Route } from 'react-router';
import { publicRoutes, authProtectedRoutes } from './routes';
import AuthMiddleWare from './routes/authMiddleWare';
import AuthLayout from './layout/AuthLayout';
import NoAuthLayout from './layout/NoAuthLayout';

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
    </div>
  );
}

export default App;
