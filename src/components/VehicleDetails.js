import { Link, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showVehicle } from '../redux/vehicles/vehicles';

function VehicleDetails() {
  const dispatch = useDispatch();
  const { vehicleId } = useParams();
  const vehicle = useSelector((state) => state.vehicles.current);
  useEffect(() => {
    dispatch(showVehicle(vehicleId));
  }, [vehicleId]);
  return (
    <div>
      <div>
        <h1>Vehicle Details</h1>
      </div>
      <div>
        <div className="details-card">
          {vehicle && <img className="card-img-det" src={vehicle.image} alt="Card cap" />}
          <div className="card-body d-flex justify-content-between img-text">
            <h5 className="card-title">{vehicle?.name}</h5>
            <p className="card-text">{vehicle?.price}</p>
          </div>
        </div>
        <div>
          <p>About this vehicle</p>
          <p>{vehicle?.description}</p>
        </div>
      </div>
      <Link to={vehicle && `/vehicles/${vehicle.id}/reservation`}>
        <button type="submit" className="btn btn-primary add-btn mx-auto">Add to reservation</button>
      </Link>
    </div>
  );
}

export default VehicleDetails;
