import React from 'react';
import './SearchResult.css';
import peopleIcon from '../../images/peopleicon.png';

const SearchResult = (props) => {
  const { name, price, people, img, count } = props.vehicle;
  const { pickFrom, pickTo } = props.path;
  return (
    <div>
      <div className="card search-result p-4">
        <div className="card mb-4 p-3 bg-danger text-white">
          <div className='d-flex'>
            <div className='mr-3 d-flex flex-column justify-content-center align-items-center'>
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
            </div>
            <div>
              <h4 className='mt-1'>{pickFrom}</h4>
              <h4 className='mt-4'>{pickTo}</h4>
            </div>
          </div>
        </div>

        {(() => {
          const result = [];
          for (let i = 1; i <= count; i++) {
            result.push(
              <div className="card search-result mb-4 p-2 bg-white">
                <div className="container d-flex justify-content-around align-items-center">
                  <img src={img} className='vehicle' alt="" />
                  <div>
                    <span>{name}</span>
                    <img src={peopleIcon} className='icon mx-2' alt="" />
                    <span>{people}</span>
                  </div>
                  <p className='m-0'>${price}</p>
                </div>
              </div>
            )
          }
          return result;
        })()}
      </div>
    </div>
  );
};

export default SearchResult;