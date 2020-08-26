import {getTokenFromServer} from './authHandler';

const signUp = async ({name, email, photo, phone, position_id}) => {
  const token = await getTokenFromServer().then((res) => res.data.token);

  var formData = new FormData();
  formData.append('position_id', position_id);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('photo', photo);
 return await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
    method: 'POST',
    body: formData,
    headers: {Token: token},
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if(data.success){
        return data.success
      }
    })
    .catch(err=>console.log(err))
};


export default signUp;
