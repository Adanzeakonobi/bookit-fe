import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  TiSocialTwitterCircular,
  TiSocialInstagramCircular,
  TiSocialFacebookCircular,
} from 'react-icons/ti';
import Carousel from 'react-bootstrap/Carousel';
import { loadVehicles } from '../redux/vehicles/vehicles';
import '../styles/Vehicles.scss';

function Vehicles() {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicles.visible);
  useEffect(() => {
    dispatch(loadVehicles());
  }, []);
  return (
    <Carousel>
      <Carousel.Item className="vehicles-list-cont">
        <div className="text-center header-det">
          <h1>List of Vehicles</h1>
        </div>
        <div className="text-center subTitle">
          <h6>Our vintage machine</h6>
        </div>
        <div className="list-wrapper">
          <ul className="d-flex list-con">
            {vehicles.map((vehicle) => (
              <li className="list-group-item" key={vehicle.id}>
                <Link to={`/vehicles/${vehicle.id}/details`} className="vehiLink-button">
                  <div className="vehi-card">
                    <img className="viewCard-img-top" src={vehicle.image} alt="Card cap" />
                    <div className="viewCard-body">
                      <h5 className="viewCard-title">{vehicle.name}</h5>
                      <p className="viewCard-text">
                        $
                        {vehicle.price}
                      </p>
                    </div>
                    <div>
                      <ul className="item-icons d-flex">
                        <li className="socialImg">
                          <TiSocialFacebookCircular />
                        </li>
                        <li className="socialImg">
                          <TiSocialTwitterCircular />
                        </li>
                        <li className="socialImg">
                          <TiSocialInstagramCircular />
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Vehicles;
