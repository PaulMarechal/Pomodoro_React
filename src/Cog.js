import ReactSlider from 'react-slider';
import {useContext} from 'react';
import OptionsContext from './OptionsContext';

import "./Slider.css" 

function Cog(){
    const optionsMenu = useContext(OptionsContext);
    return (
        <div className="settingsDisplay">
            <label>Temps de travail : {optionsMenu.workTime}:00</label>
            <ReactSlider 
                className={"sliderRed"} 
                thumbClassName={"thumbRed"} 
                trackClassName={"track"} 
                value={optionsMenu.workTime} 
                min={1} 
                max={120}
            />
            <label>Temps de pause : {optionsMenu.breakTime}:00</label>
            <ReactSlider 
                className={"sliderGreen"} 
                thumbClassName={"thumbGreen"} 
                trackClassName={"track"} 
                value={optionsMenu.breakTime} 
                min={1} 
                max={120}
            />
        </div>
    );
}

export default Cog;