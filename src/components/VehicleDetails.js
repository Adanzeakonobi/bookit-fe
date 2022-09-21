import { Link } from 'react-router-dom';
import React from 'react';

function VehicleDetails() {
  const vehicles = [
    {
      id: 1,
      name: 'vehicle 1',
      description: 'This is a description for vehicle 1',
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      price: '$100',
    },
    {
      id: 2,
      name: 'vehicle 2',
      description: 'This is a description for vehicle 2',
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      price: '$200',
    },
    {
      id: 3,
      name: 'vehicle 3',
      description: 'This is a description for vehicle 3',
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      price: '$300',
    },
    {
      id: 4,
      name: 'vehicle 4',
      description: 'This is a description for vehicle 4',
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      price: '$400',
    },
  ];
  const vehicle = vehicles[1];
  return (
    <div>
      <div>
        <h1>Vehicle Details</h1>
      </div>
      <div>
        <div className="details-card">
          <img className="card-img-det" src={vehicle.image} alt="Card cap" />
          <div className="card-body d-flex justify-content-between img-text">
            <h5 className="card-title">{vehicle.name}</h5>
            <p className="card-text">{vehicle.price}</p>
          </div>
        </div>
        <div>
          <p>About this vehicle</p>
          <p>{vehicle.description}</p>
        </div>
      </div>
      <Link to={`/vehicles/${vehicle.id}/reservation`}>
        <button type="submit" className="btn btn-primary add-btn mx-auto">Add to reservation</button>
      </Link>
    </div>
  );
}

export default VehicleDetails;
