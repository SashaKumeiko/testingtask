import React, {useEffect, useState} from 'react';
import authHandler from '../../requests/authHandler';
import {getUsers, getPositions} from '../../requests/fetchData';
import User from './User';
import RegisterForm from '../RegisterForm/RegisterForm';
import { useStateValue } from '../../contexts/stateProvider';
import { INCREASE_QUANTITY } from '../../contexts/reducer';

import './users.scss'
import  Button  from '../../components/Buttons/Button';

export const Users = () => {
const [{counter}, dispatch] = useStateValue()
console.log(counter)
  const [users, setUsers] = useState([]);
  const [positions, setPositions] = useState([])
  const [showMoreVisible, toggleShowMore] = useState(true)
  useEffect(() => {
    async function fetchData() {
      await authHandler();
      let users =  await getUsers(counter);
      if(users.length<counter ) toggleShowMore(false)
      // eslint-disable-next-line no-restricted-globals
      if(screen.width<576 ) {
        users=users.slice(0,counter-counter/2)
      }
      console.log(users)
      users.sort((a,b)=>{return b.registration_timestamp-a.registration_timestamp})
      setUsers(users);
      console.log('sorted users',users);

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
    <div className='users'>
    <h1 className='users__title'>Our cheerful users</h1>
    <h6 className='users__attention'>Attention! Sorting users by registration date</h6>
    
    <div className='users__container'>
      {users.map(({id, name, position, phone, email,photo}) => (
        <User
          photo={photo}
          key={id}
          name={name}
          phone={phone}
          position={position}
          email={email}
        ></User>
      ))}
      </div>
      {showMoreVisible ? <Button text='Show more' additionalClass="button--margin" onClick={getMoreUsers}></Button>:<div></div>}
      </div>
      <RegisterForm positions={positions} setUsers/>
      </div>
    
  );
};
