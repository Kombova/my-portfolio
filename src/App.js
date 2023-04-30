import {  useState } from 'react';
import { AnimatePresence} from 'framer-motion';

import './App.css';

import Home from './components/Home';
import CommunicationAndLinks from './components/CommunicationAndLinks';
import Stack from './components/Stack';
import Cases from './components/Cases';
import StudyMaterials from './components/StudyMaterials';
import ToggleLanguage from './components/sub-component/ToggleLanguage';

function App() {
  const[screen,setScreen]=useState('Home');
  
  return (
    <div className='App relative App_home_background p-[10px]'>
          <ToggleLanguage/>
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


