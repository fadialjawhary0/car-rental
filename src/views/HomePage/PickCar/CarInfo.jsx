import { useState } from 'react';
import { Link } from 'react-router-dom';

function CarInfo({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);

  const reserveBtn = () => {
    document
      .querySelector('#booking-section')
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className='box-cars'>
          <div className='pick-car'>
            {carLoad && <span className='loader'></span>}
            <img
              style={{ display: carLoad ? 'none' : 'block' }}
              src={car.img}
              alt='car_img'
              onLoad={() => setCarLoad(false)}
            />
          </div>
          <div className='pick-description'>
            <div className='pick-description__price'>
              <span>${car.price}</span>/ rent per day
            </div>
            <div className='pick-description__table'>
              <div className='pick-description__table__col'>
                <span>Model</span>
                <span>{car.model}</span>
              </div>

              <div className='pick-description__table__col'>
                <span>Mark</span>
                <span>{car.mark}</span>
              </div>

              <div className='pick-description__table__col'>
                <span>Year</span>
                <span>{car.year}</span>
              </div>

              <div className='pick-description__table__col'>
                <span>Doors</span>
                <span>{car.doors}</span>
              </div>

              <div className='pick-description__table__col'>
                <span>AC</span>
                <span>{car.air}</span>
              </div>

              <div className='pick-description__table__col'>
                <span>Transmission</span>
                <span>{car.transmission}</span>
              </div>

              <div className='pick-description__table__col'>
                <span>Fuel</span>
                <span>{car.fuel}</span>
              </div>
            </div>
            <Link className='cta-btn' onClick={reserveBtn}>
              Reserve Now
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarInfo;
