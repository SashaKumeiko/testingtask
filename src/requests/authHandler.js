import axios from 'axios';
import setToken from '../utils/setToken';

const authHandler = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return new Promise((res,rej)=>{res()})
  } else {
     return handleNewToken()
  }
};

const handleNewToken=()=>{
   return getTokenFromServer().then((res) => {
        console.log(res.data.token);
        setToken(res.data.token)
      });
}

const getTokenFromServer = async () => {
  return await axios.get(
    'https://frontend-test-assignment-api.abz.agency/api/v1/token'
  );
};




export default authHandler;
