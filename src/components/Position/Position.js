import React from 'react';

import './position.scss';

const Position = ({
  nameAndId,
  selectedPosition,
  selectedPositionId,
  radioHandler,
}) => {
  return (
    <div className="position">
      <label className="container">
        <span>{nameAndId.name}</span>
        <input
          type="radio"
          checked="checked"
          name={nameAndId.name}
          value={JSON.stringify(nameAndId)}
          onClick={(e) => radioHandler(e)}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          checked={selectedPosition === nameAndId.name}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Position;
