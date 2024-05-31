import React from 'react';
import { Link } from 'react-router-dom';
import { IconStar, IconCar } from '@tabler/icons-react';

import './ModelCardStyles.scss';

const ModelCard = ({
  img,
  model,
  price,
  brand,
  category,
  transmission,
  fuel,
}) => {
  return (
    <div className='model-card-container'>
      <img src={img} alt={`${model}`} />
      <div className='model-card-text'>
        <div className='model-card-text_name-price'>
          <div className='model-card-text_name-price_name'>
            <p>{model}</p>
            <div className='stars-container'>
              {Array.from({ length: 5 }).map((_, index) => (
                <IconStar key={index} />
              ))}
            </div>
          </div>

          <div className='model-card-text_name-price_price'>
            <h4>${price}</h4>
            <p>per day</p>
          </div>
        </div>

        <div className='model-card-text_details'>
          <span>
            <IconCar /> &nbsp; {brand}
          </span>
          <span>
            {category} &nbsp; <IconCar />
          </span>
          <span>
            <IconCar /> &nbsp; {transmission}
          </span>
          <span>
            {fuel} &nbsp; <IconCar />
          </span>
        </div>

        <Link onClick={() => window.scrollTo(0, 0)} to='/'>
          Book Ride
        </Link>
      </div>
    </div>
  );
};

export default ModelCard;
