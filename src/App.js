import Timer from './Timer';
import Cog from './Cog';
import OptionsContext from './OptionsContext';
import {useState} from "react";

import './App.css';



function App() {

  const [showCog, setShowCog] = useState(false);
  const [workTime, setWorkTime] = useState(45);
  const [breakTime, setBreakTime] = useState(15);
  return (
    <main>
      <OptionsContext.Provider value={{
        showCog: showCog,
        setShowCog: setShowCog,
        workTime: workTime, 
        breakTime: breakTime,
        setWorkTime: setWorkTime, 
        setBreakTime: setBreakTime,
      }}>
        {showCog ? <Cog /> : <Timer />}  
      </OptionsContext.Provider>
    </main>
  );
}

export default App;
