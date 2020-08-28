import React from 'react';

import './position.scss'

const Position = ({nameAndId, selectedPosition, selectedPositionId , radioHandler}) => {

    return (
    <div className='position'>
      <input
        type="radio"
        name={nameAndId.name}
        value={JSON.stringify(nameAndId)}
        onClick={e=>radioHandler(e)}
        checked={selectedPosition === nameAndId.name}
      />{' '}
      {nameAndId.name}
    </div>
  );
};

export default Position;
