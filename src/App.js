import { useState } from 'react';
import { AnimatePresence,motion } from 'framer-motion';

import './App.css';


import Home from './components/Home';
import CommunicationAndLinks from './components/CommunicationAndLinks';
import Stack from './components/Stack';
import Cases from './components/Cases';
import StudyMaterials from './components/StudyMaterials';
function App() {
  const[screen,setScreen]=useState('Home');
  
  return (
    <div className={`App relative ${screen === 'Home' ? 'App_home_background' : 'App_other_background'} `} >
          <AnimatePresence initial={false}>
            {screen === 'Home' && <Home setScreen={setScreen} key='Home'/> }
            {screen === 'Stack' && <Stack key='Stack' setScreen={setScreen}/>}      
            {screen === 'CommunicationAndLinks' && <CommunicationAndLinks key='CommunicationAndLinks' setScreen={setScreen}/>}
            {screen === 'Cases' && <Cases setScreen={setScreen} key='Cases'/> }
            {screen === 'StudyMaterials' && <StudyMaterials setScreen={setScreen} key='StudyMaterials'/> }
          </AnimatePresence>          
    </div>
  );
}

export default App;


