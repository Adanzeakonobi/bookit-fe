import React from 'react';
import { useParams } from 'react-router-dom';

const VehicleDetails = () => {
  const { vehicleId } = useParams();

  return (
    <div className="VehicleDetails">
      {vehicleId}
    </div>
  );
};

export default VehicleDetails;
