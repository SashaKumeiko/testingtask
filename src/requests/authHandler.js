import axios from 'axios';
import setToken from '../utils/setToken';

const authHandler = () => {
  const token = localStorage.getItem('token');
  if (token) {
    getUsers().catch(err=>receiveNewToken())
  } else {
      receiveNewToken()
  }
};

const receiveNewToken=()=>{
    getTokenFromServer().then((res) => {
        console.log(res.data.token);
        setToken(res.data.token)
        getUsers()
      });
}

const getTokenFromServer = async () => {
  return await axios.get(
    'https://frontend-test-assignment-api.abz.agency/api/v1/token'
  );
};

const getUsers = async () => {
    axios.get(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5'
      ).then(res=>console.log(res.data))
}

export default authHandler;
