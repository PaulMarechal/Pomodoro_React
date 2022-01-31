import Timer from './Timer';
import Cog from './Cog';
import OptionsContext from './OptionsContext';
import {useState} from "react";

import './App.css';



function App() {

  const [showCog, setShowCog] = useState(true);
  return (
    <main>
      <OptionsContext.Provider value={{
        workTime: 45, 
        breakTime: 15,
      }}>
        {showCog ? <Cog /> : <Timer />}  
      </OptionsContext.Provider>
    </main>
  );
}

export default App;
