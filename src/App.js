import { Route, Routes } from 'react-router';
import NavigationPanel from './components/NavigationPanel';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Vehicles from './components/Vehicles';
import DeleteVehicle from './components/DeleteVehicle';
import VehicleDetails from './components/VehicleDetails';
import Reserve from './components/Reserve';
import MyReservations from './components/MyReservations';
import AddVehicle from './components/AddVehicle';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavigationPanel />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/main" element={<Vehicles />} />
        <Route path="/vehicles" element={<DeleteVehicle />} />
        <Route path="/vehicle" element={<AddVehicle />} />
        <Route path="/vehicles/:vehicleId/details" element={<VehicleDetails />} />
        <Route path="/vehicles/:vehicleId/reservation" element={<Reserve />} />
        <Route path="/reservation" element={<Reserve />} />
        <Route path="/user/reservations" element={<MyReservations />} />
        <Route path="*" element={<div> Error: 404 undefined route</div>} />
      </Routes>
    </div>
  );
}

export default App;
