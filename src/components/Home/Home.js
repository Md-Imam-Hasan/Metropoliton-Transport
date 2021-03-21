import React, { useEffect, useState } from 'react';
import './Home.css';
import data from '../data/data.json';
import VehicleCard from '../VehicleCard/VehicleCard'

const Home = () => {
  const [vehicleData, setVehicleData] = useState([]);
  useEffect(()=>{
    setVehicleData(data);
  },[])
  return (
    <div className='home d-sm-flex flex-sm-row d-flex flex-column justify-content-around align-items-sm-start align-items-center'>
      {
        vehicleData.map(vehicle => <VehicleCard className='vehicle-card' key={vehicle.id} vehicle={vehicle}></VehicleCard>)
      }
    </div>
  );
};

export default Home;