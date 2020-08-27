import React, {useEffect, useState} from 'react';
import authHandler from '../../requests/authHandler';

import {getUsers, getPositions} from '../../requests/fetchData';
import User from './User';
import RegisterForm from '../RegisterForm/RegisterForm';
import { useStateValue } from '../../contexts/stateProvider';
import { INCREASE_QUANTITY } from '../../contexts/reducer';

export const Users = () => {
const [{counter}, dispatch] = useStateValue()
console.log(counter)
  const [users, setUsers] = useState([]);
  const [positions, setPositions] = useState([])
  // const [countOfUsersToDisplay, setCount] = useState(6);
  const [showMoreVisible, toggleShowMore] = useState(true)
  useEffect(() => {
    async function fetchData() {
      await authHandler();
      const users =  await getUsers(counter);
      if(users.length<counter ) toggleShowMore(false)
      setUsers(users);
      console.log(users);

      const positions = await getPositions()
      console.log(positions)
      positions[0].defaultChecked = true
      setPositions(positions)

    }
    fetchData();
  }, [counter]);

  const getMoreUsers=async ()=>{
    dispatch({type:INCREASE_QUANTITY})
  }
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
      {showMoreVisible ? <button onClick={getMoreUsers}>Show more</button>:<div></div>}
      
      <RegisterForm positions={positions} setUsers/>
   
    </div>
  );
};
