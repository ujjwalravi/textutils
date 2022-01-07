import { useState } from 'react/cjs/react.development';
import About from './About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
    {/* <router>*/}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 


<div className="container">
  
      
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<TextForm/>} />
          {/* <TextForm heading="Enter the text below"/> */}
          
        </Routes>
        
            
  
 
  </div>
  {/* </router> */}

</>
  );
}


export default App;
