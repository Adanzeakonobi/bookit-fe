import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { loadVehicles, deleteVehicle } from '../redux/vehicles/vehicles';
import '../styles/DeleteVehicle.scss';

function DeleteVehicle() {
  const vehicles = useSelector((state) => state.vehicles.all);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadVehicles());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteVehicle(id));
  };

  return (
    <div className="DeleteVehicle">
      <div className="text-center p-3 header-det">
        <h1>Vehicle List</h1>
      </div>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>
                {vehicle.id}

              </td>
              <td>
                {vehicle.name}

              </td>
              <td>
                $
                {vehicle.price}

              </td>
              <td>
                {vehicle.action}
                { vehicle.visible ? (
                  <button
                    type="submit"
                    className="btn btn-primary add-btn"
                    onClick={() => handleDelete(vehicle.id)}
                  >
                    Delete
                  </button>
                ) : 'This vehicle has been marked' }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {vehicles && vehicles.length === 0 && <div>There are no vehicles available</div> }
    </div>
  );
}

export default DeleteVehicle;
