import React, {useState} from 'react';
import Position from './Position';
import {useEffect} from 'react';

const Registration = ({positions}) => {
  console.log(positions);
  const [selected, setSelected] = useState('');

    useEffect(() => {
        if(positions.length) setSelected(positions[0].name)
    }, [positions]);

  const radioHandler = (e) => {
    console.log('handler', e);
    setSelected(e.target.value);
  };

  return (
    <div>
      <form>
        {positions.map(({id, name, defaultChecked}) => (
          <Position
            key={id}
            name={name}
            selected={selected}
            defaultChecked={defaultChecked}
            radioHandler={radioHandler}
          />
        ))}
      </form>
    </div>
  );
};

export default Registration;
