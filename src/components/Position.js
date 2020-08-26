import React from 'react';

const Position = ({name, defaultChecked, selected, radioHandler}) => {
  return (
    <div>
      <input
        type="radio"
        name={name}
        value={name}
        onClick={(e)=>radioHandler(e)}
        checked={selected === name}
      />{' '}
      {name}
    </div>
  );
};

export default Position;
