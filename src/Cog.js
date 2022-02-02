import ReactSlider from 'react-slider';
import {useContext} from 'react';
import OptionsContext from './OptionsContext';
import ReturnButton from './Buttons/ReturnButton';

import "./Style/Slider.css" 

function Cog(){
    const optionsMenu = useContext(OptionsContext);
    return (
        <div className="settingsDisplay">
            <label className="titreSettings">Configuration du pomodoro</label>
            <div className="buttonReturn">
                <ReturnButton onClick={() => optionsMenu.setShowCog(false)}/>
            </div>
            <div className="workTimeSettings">
                <label>📚 Temps de travail : {optionsMenu.workTime}:00</label>
                <ReactSlider 
                    className={"sliderRed"} 
                    thumbClassName={"thumbRed"} 
                    trackClassName={"track"} 
                    value={optionsMenu.workTime} 
                    onChange={newValue => optionsMenu.setWorkTime(newValue)}
                    min={1} 
                    max={120}
                />
                <label>🎉 Temps de pause : {optionsMenu.breakTime}:00</label>
                <ReactSlider 
                    className={"sliderGreen"} 
                    thumbClassName={"thumbGreen"} 
                    trackClassName={"track"} 
                    value={optionsMenu.breakTime} 
                    onChange={newValue => optionsMenu.setBreakTime(newValue)}
                    min={1} 
                    max={120}
                />
            </div>
        </div>
    );
}

export default Cog;