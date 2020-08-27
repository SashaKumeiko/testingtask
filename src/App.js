import React from 'react';
import { Users } from './components/Users/Users';
import Header from './components/Header/Header';
import FirstSection from './components/FirstSection/FirstSection';

import './app.scss'

function App() {
 
  return (
    
    <div className="app">
     <Header/>
     <FirstSection/>
     <Users/>
    </div>
   
  );
}

export default App;
