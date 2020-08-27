import React from 'react';
import { Users } from './components/Users/Users';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';

import './app.scss'


function App() {
 
  return (
    
    <div className="app">
     <Header/>
     <Banner/>
     <Users/>
    </div>
   
  );
}

export default App;
