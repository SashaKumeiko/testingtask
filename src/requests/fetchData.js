import axios from 'axios';
 
 export const getUsers = (count)  => {
    return axios.get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`
      ).then(res=>res.data.users)
    
}
export const getPositions = async () => {
   return axios.get(
        'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
      ).then(res=>res.data.positions)
}

