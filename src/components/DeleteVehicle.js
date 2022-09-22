import React, { useState } from 'react';

function DeleteVehicle() {
  const [vehicles, setvehicles] = useState([
    {
      id: 1,
      name: 'vehicle 1',
      description: 'This is a description for vehicle 1',
      price: '$100',
      visible: true,
    },
    {
      id: 2,
      name: 'vehicle 2',
      description: 'This is a description for vehicle 2',
      price: '$200',
      visible: true,
    },
    {
      id: 3,
      name: 'vehicle 3',
      description: 'This is a description for vehicle 3',
      price: '$300',
      visible: true,
    },
    {
      id: 4,
      name: 'vehicle 4',
      description: 'This is a description for vehicle 4',
      price: '$400',
      visible: true,
    },
  ]);

  const handleDelete = (id) => {
    const newVehicle = vehicles.map(
      (vehicle) => {
        const temVehicle = vehicle;
        if (vehicle.id === id) { temVehicle.visible = false; }
        return temVehicle;
      },
    );
    setvehicles(newVehicle);
  };

  return (
    <div>
      <div className="text-center p-3 header-det">
        <h1>Vehicle List</h1>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
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
                {vehicle.price}

              </td>
              <td>
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
      </table>
    </div>
  );
}

export default DeleteVehicle;
