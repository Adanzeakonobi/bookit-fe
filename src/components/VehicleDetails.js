import { useParams } from 'react-router';

function VehicleDetails() {
  const { vehicleId } = useParams();
  return (
    <div className="VehicleDetails">
      {vehicleId}
    </div>
  );
}

export default VehicleDetails;
