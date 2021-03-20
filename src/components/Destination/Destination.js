import React, { useEffect, useState } from 'react';
import './Destination.css';
import map from '../../images/Map.png'
import { useParams } from 'react-router';
import data from '../data/data.json'
import SearchResult from '../SearchResult/SearchResult';

const Destination = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  let { vehicleName } = useParams();
  if(!vehicleName){
    vehicleName = 'CAR';
  }
  const [vehicleData, setVehicleData] = useState([]);
  const [path,setPath] = useState({
    pickFrom:'',
    pickTo:''
  })
  useEffect(() => {
    setVehicleData(data);
  }, [])
  const vehicle = vehicleData.find(vehicle => vehicle.name === vehicleName);


  const handleBlur = (e) => {
    console.log(e.target.name,e.target.value);
    let newPath = {...path};
    newPath[e.target.name] = e.target.value;
    setPath(newPath);
  }
  return (
    <div className='destination mt-4'>
      <div className="container">
        <div className="row">
          <div className="col-4">
            {!isFormSubmitted && <form onSubmit={() => setIsFormSubmitted(true)} className='form-group'>
              <div className="mb-3">
                <label htmlFor="pickFrom" className='form-label'>Pick From</label>
                <input type="text" className='form-control' onBlur={handleBlur} name='pickFrom' required />
              </div>
              <div className="mb-3">
                <label htmlFor="pickTo" className='form-label'>Pick To</label>
                <input type="text" className='form-control' onBlur={handleBlur} name='pickTo' required />
              </div>
              <div className="mb-3">
                <label htmlFor="pickDate" className='form-label'>Pick Date</label>
                <input type="date" className='form-control' name='pickDate' />
              </div>
              <div className="mb-3">
                <input type="submit" className='btn-danger form-control' value="Search" />
              </div>
            </form> }
            {isFormSubmitted && <SearchResult path={path} vehicle={vehicle}></SearchResult>}
          </div>
          <div className="col-8 ">
            <img src={map} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;