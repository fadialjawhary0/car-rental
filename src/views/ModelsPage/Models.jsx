import React from 'react';

import SharedHero from '../../components/SharedHero/SharedHero';
import { ModelService } from '../../components/ModelCard/services/ModelService';
import ModelCard from '../../components/ModelCard/ModelCard';
import ContactBanner from '../../components/ContactBanner/ContactBanner';

import './ModelsStyles.scss';

const Models = () => {
  return (
    <div className='models-container'>
      <SharedHero pageName='Vehicle Models' />
      <div className='container'>
        <div className='models-content'>
          {ModelService.map(model => (
            <ModelCard
              key={model?.id}
              img={model?.image}
              model={model?.model}
              price={model?.price_per_day}
              brand={model?.brand}
              category={model?.category}
              transmission={model?.transmission}
              fuel={model?.fuel}
            />
          ))}
        </div>
      </div>
      <ContactBanner />
    </div>
  );
};

export default Models;
