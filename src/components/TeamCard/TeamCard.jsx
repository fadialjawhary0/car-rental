import React from 'react';

import './TeamCardStyles.scss';

const TeamCard = ({ id, img, name, position }) => {
  return (
    <div className='team-card-container'>
      <img src={img} alt={`${name}`} />
      <div className='team-card_text'>
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
