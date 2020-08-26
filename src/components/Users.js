import React, {useEffect, useState} from 'react';
import authHandler from '../requests/authHandler';

import {getUsers, getPositions} from '../requests/fetchData';
import User from './User';
import RegisterForm from './RegisterForm';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [positions, setPositions] = useState([])

  useEffect(() => {
    async function fetchData() {
      await authHandler();
      const users =  await getUsers();
      setUsers(users);
      console.log(users);

      const positions = await getPositions()
      console.log(positions)
      positions[0].defaultChecked = true
      setPositions(positions)

    }
    fetchData();
  }, []);
  return (
    <div>
    
    
    <div>
      {users.map(({id, name, position, phone, email}) => (
        <User
          key={id}
          name={name}
          phone={phone}
          position={position}
          email={email}
        ></User>
      ))}
      </div>
      <div>
      <RegisterForm positions={positions}/>
      </div>
    </div>
  );
};
