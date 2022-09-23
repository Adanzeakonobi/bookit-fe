import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadVehicles } from '../redux/vehicles/vehicles';

function Vehicles() {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicles.visible);
  useEffect(() => {
    dispatch(loadVehicles());
  }, []);
  return (
    <div className="vehicles-list-cont">
      <div>
        <h1>List of Vehicles</h1>
      </div>
      <div className="list-wrapper">
        <ul className="list-con">
          {vehicles.map((vehicle) => (
            <li className="list-group-item" key={vehicle.id}>
              <Link to={`/vehicles/${vehicle.id}/details`}>
                <div className="vehi-card">
                  <img className="card-img-top" src={vehicle.image} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">{vehicle.name}</h5>
                    <p className="card-text">{vehicle.price}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Vehicles;
