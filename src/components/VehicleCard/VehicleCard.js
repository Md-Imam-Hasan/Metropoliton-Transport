import React from 'react';
import './VehicleCard.css';

const VehicleCard = (props) => {
  const {name,img,id} = props.vehicle
  return (
    <div className='vehicle'>
      <div className="card text-center p-5">
        <img src={img} alt=""/>
        <h2 className='mt-5'>{name}</h2>
      </div>
    </div>
  );
};

export default VehicleCard;