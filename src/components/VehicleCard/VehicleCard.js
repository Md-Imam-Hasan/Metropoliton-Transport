import React from 'react';
import { Link } from 'react-router-dom';
import './VehicleCard.css';

const VehicleCard = (props) => {
  const { name, img, id } = props.vehicle;
  return (
    <div className='vehicle'>
      <Link to={'/destination/vehicle/' + name}>
        <div className="card text-dark text-center p-5">
          <img src={img} alt="" />
          <h2 className='mt-3'>{name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default VehicleCard;