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
    <div className='home d-flex justify-content-around'>
      {
        vehicleData.map(vehicle => <VehicleCard key={vehicle.id} className='vehicle-card' key={vehicle.id} vehicle={vehicle}></VehicleCard>)
      }
    </div>
  );
};

export default Home;