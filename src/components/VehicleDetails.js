import { Link, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showVehicle } from '../redux/vehicles/vehicles';
import '../styles/VehicleDetails.scss';

function VehicleDetails() {
  const dispatch = useDispatch();
  const { vehicleId } = useParams();
  const vehicle = useSelector((state) => state.vehicles.current);
  useEffect(() => {
    dispatch(showVehicle(vehicleId));
  }, [vehicleId]);
  return (
    <div className="vehiDetails">
      <div className="details-container row align-content-center">
        <div className="details-card col-lg-8">
          {vehicle && <img className="card-img-det img-fluid" src={vehicle.image} alt="Card cap" />}
        </div>
        <div className="details-info-container col-lg-4">
          <div className="card-body">
            <h5 className="vehiCard-title">{vehicle?.name}</h5>
            <p className="card-text">
              $
              {vehicle?.price}
            </p>
          </div>
          <div className="aboutVehi">
            <p>About this vehicle</p>
            <p>{vehicle?.description}</p>
          </div>
          <Link to={vehicle && `/vehicles/${vehicle.id}/reservation`} className="link-button">
            <button type="submit" className="btn btn-primary add-btn mx-auto">Add to reservation</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VehicleDetails;
