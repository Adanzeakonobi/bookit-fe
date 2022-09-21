import Table from 'react-bootstrap/Table';

function MyReservations() {
  const reservations = [1, 2, 3].map((x) => ({
    id: x, vehicle: { name: `vehicle ${x}` }, date: Date.now(), city: 'Millan',
  }));
  return (
    <div className="MyReservations">
      <h1>My reservations</h1>
      <Table striped bordered hover>
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
