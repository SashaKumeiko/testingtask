import React,{useEffect} from 'react';
import authHandler from './requests/authHandler'

function App() {
  useEffect(()=>{
      authHandler()
  },[])
  return (
    <div className="App">
   
     start
    </div>
  );
}

export default App;
