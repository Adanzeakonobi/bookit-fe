import Table from 'react-bootstrap/Table';
import '../styles/MyReservations.scss';

function MyReservations() {
  const reservations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => ({
    id: x, vehicle: { name: `vehicle ${x}` }, date: new Date().toISOString().substring(0, 10), city: 'Millan',
  }));
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
              <td>{reservation.vehicle.name}</td>
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
