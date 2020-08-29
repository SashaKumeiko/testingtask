import React from 'react';
import { Users } from './components/Users/Users';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Section from './components/Section/Section';

import './app.scss'
import Footer from './components/Footer/Footer';


function App() {
 
  return (
    
    <div className="app">
     <Header/>
     <Banner/>
     <Section/>
     <Users/>
    <Footer/>
    </div>
   
  );
}

export default App;
