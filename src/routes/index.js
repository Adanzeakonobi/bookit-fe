import { Redirect } from 'react-router-dom';

import Login from '../components/Login';
import Logout from '../components/Logout';
import SignUp from '../components/SignUp';
import Vehicles from '../components/Vehicles';
import DeleteVehicle from '../components/DeleteVehicle';
import VehicleDetails from '../components/VehicleDetails';
import Reserve from '../components/Reserve';
import MyReservations from '../components/MyReservations';
import AddVehicle from '../components/AddVehicle';

const authProtectedRoutes = [
  {
    path: '/main',
    component: Vehicles,
  },
  {
    path: '/vehicles',
    component: DeleteVehicle,
  },
  {
    path: '/vehicle',
    component: AddVehicle,
  },
  {
    path: '/vehicles/:vehicleId/details',
    component: VehicleDetails,
  },
  {
    path: '/vehicles/:vehicleId/reservation',
    component: Reserve,
  },
  {
    path: '/reservation',
    component: Reserve,
  },
  {
    path: '/user/reservations',
    component: MyReservations,
  },
  {
    path: '*',
    component: () => <Redirect to="/main" />,
  },
];

const publicRoutes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/logout',
    component: Logout,
  },
  {
    path: '/signup',
    component: SignUp,
  },
];

export { authProtectedRoutes, publicRoutes };
