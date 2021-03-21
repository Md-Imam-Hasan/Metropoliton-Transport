import React, { useEffect, useState } from 'react';
import './Destination.css';
import { useParams } from 'react-router';
import data from '../data/data.json'
import SearchResult from '../SearchResult/SearchResult';

const Destination = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  let { vehicleName } = useParams();
  if (!vehicleName) {
    vehicleName = 'CAR';
  }
  const [vehicleData, setVehicleData] = useState([]);
  const [path, setPath] = useState({
    pickFrom: '',
    pickTo: ''
  })
  useEffect(() => {
    setVehicleData(data);
  }, [])
  const vehicle = vehicleData.find(vehicle => vehicle.name === vehicleName);

  const handleBlur = (e) => {
    let newPath = { ...path };
    newPath[e.target.name] = e.target.value;
    setPath(newPath);
  }
  let mapURL='https://www.google.com/maps/embed/v1/view?zoom=11&center=23.8103%2C90.4125&key=AIzaSyCcJQ-mBUbB4O_VvmZBw09at2ORu_32joI';
  return (
    <div className='destination mt-4'>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-12">
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
            </form>}
            {isFormSubmitted && <SearchResult path={path} vehicle={vehicle}></SearchResult>}
          </div>
          <div className="col-sm-8 col-12">
          <iframe title='map'  style={{border:'0',width:'100%',minHeight:"500px"}} src={mapURL}></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;

