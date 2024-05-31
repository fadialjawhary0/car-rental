import React from 'react';

import SharedHero from '../../components/SharedHero/SharedHero';
import TeamCard from '../../components/TeamCard/TeamCard';
import { TeamServices } from '../../components/TeamCard/services/TeamService';
import ContactBanner from '../../components/ContactBanner/ContactBanner';

import './TeamStyles.scss';

const Team = () => {
  return (
    <section className='team-page'>
      <SharedHero pageName='Our Team' />
      <div className='container'>
        <div className='team-content'>
          {TeamServices.map(member => (
            <TeamCard
              key={member?.id}
              img={member?.image}
              name={member?.name}
              position={member?.position}
            />
          ))}
        </div>
      </div>
      <ContactBanner />
    </section>
  );
};

export default Team;
