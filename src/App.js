import React from 'react';
import { Users } from './components/Users/Users';
import Header from './components/Header/Header';
import {BrowserRouter} from 'react-router-dom'

import './app.scss'

function App() {
 
  return (
    
    <div className="App">
    <BrowserRouter>
     <Header/>
     <Users/>
     </BrowserRouter>
    </div>
   
  );
}

export default App;
