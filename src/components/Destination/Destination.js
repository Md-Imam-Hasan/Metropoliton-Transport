import React from 'react';
import './Destination.css';
import map from '../../images/Map.png'
import people from '../../images/peopleicon.png';
import vehicle from '../../images/Group.png'
const Destination = () => {
  return (
    <div className='destination mt-4'>
      <div className="container">
        <div className="row">
          <div className="col-4 d-none">
            <form className='form-group'>
              <div className="mb-3">
                <label htmlFor="pickFrom" className='form-label'>Pick From</label>
                <input type="text" className='form-control' name='pickFrom' required />
              </div>
              <div className="mb-3">
                <label htmlFor="pickTo" className='form-label'>Pick To</label>
                <input type="text" className='form-control' name='pickTo' required />
              </div>
              <div className="mb-3">
                <label htmlFor="pickDate" className='form-label'>Pick Date</label>
                <input type="date" className='form-control' name='pickDate' />
              </div>
              <div className="mb-3">
                <input type="submit" className='btn-danger form-control' value="Search" />
              </div>
            </form>
          </div>
          <div className="col-4">
            <div className="card search-result p-4">
              <div className="card mb-4 p-3 bg-danger text-white">
                <div className='d-flex'>
                  <div className='mr-3 d-flex flex-column justify-content-center align-items-center'>
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>
                  </div>
                  <div>
                    <h4 className='mt-1'>Mirpur 1</h4>
                    <h4 className='mt-4'>Dhanmondi</h4>
                  </div>
                </div>
              </div>
              <div className="card mb-4 p-2 bg-white">
                <div className="container d-flex justify-content-around align-items-center">
                  <img src={vehicle} className='vehicle'  alt="" />
                  <div>
                    <span>Car</span>
                    <img src={people} className='icon mx-2' alt="" />
                    <span>4</span>
                  </div>
                  <p className='m-0'>$67</p>
                </div>
              </div>
              <div className="card search-result mb-4 p-2 bg-white">
                <div className="container d-flex justify-content-around align-items-center">
                  <img src={vehicle} className='vehicle'  alt="" />
                  <div>
                    <span>Car</span>
                    <img src={people} className='icon mx-2' alt="" />
                    <span>4</span>
                  </div>
                  <p className='m-0'>$67</p>
                </div>
              </div>
              <div className="card search-result mb-4 p-2 bg-white">
                <div className="container d-flex justify-content-around align-items-center">
                  <img src={vehicle} className='vehicle'  alt="" />
                  <div>
                    <span>Car</span>
                    <img src={people} className='icon mx-2' alt="" />
                    <span>4</span>
                  </div>
                  <p className='m-0'>$67</p>
                </div>
              </div>
            </div>
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