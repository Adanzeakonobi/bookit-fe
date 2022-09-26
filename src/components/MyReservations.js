import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { loadReservations } from '../redux/reservations/reservations';
import '../styles/MyReservations.scss';

function MyReservations() {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicles.visible);
  const vehicleMap = {};
  vehicles.forEach((vehicle) => {
    vehicleMap[vehicle.id] = vehicle;
  });
  const reservations = useSelector((state) => state.reservations)
    .map((reservation) => ({ ...reservation, vehicle: vehicleMap[reservation.vehicle_id] }));
  useEffect(() => {
    dispatch(loadReservations());
  }, []);
  useEffect(() => {
    dispatch(loadReservations());
  }, [vehicles]);
  return (
    <div className="MyReservations">
      <h1 className="text-center">My reservations</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Vehicle</th>
            <th>Date</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.vehicle?.name || '[deleted]'}</td>
              <td>{reservation.date}</td>
              <td>{reservation.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MyReservations;
