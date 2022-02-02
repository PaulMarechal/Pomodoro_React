import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import CogButton from './CogButton';
import {useContext, useState, useEffect, useRef} from 'react';
import OptionsContext from './OptionsContext'

const red = "#df2d2d";
const green = "#12da00";

function Timer(){
    const optionsInfos = useContext(OptionsContext);
    const [paused, setPaused] = useState(true);
    const [secondes, setSeconds] = useState(0);
    const [colorProgressbar, setColorProgressbar] = useState('Work');
    
    const secondsRef = useRef(secondes);
    const pausedRef = useRef(paused);
    const colorProgressbarRef = useRef(colorProgressbar);

    function switchColor() {
        const changeC = colorProgressbarRef.current == 'Work' ? "Break" : "Work";
        const secondsC = (changeC == 'Work' ? optionsInfos.workTime : optionsInfos.breakTime) * 60;

        setColorProgressbar(changeC);
        colorProgressbarRef.current = changeC;

        setSeconds(secondsC);
        secondsRef.current = secondsC;
    }

    function initTimer(){
        setSeconds(optionsInfos.workTime * 60);
    }

    function tick(){
        secondsRef.current = secondsRef.current - 1; 
        setSeconds(secondsRef.current);
    }

    useEffect(() => {
        initTimer();

        const interval = setInterval(() => {
            if(pausedRef.current){
                return;
            }
            if(secondsRef.current == 0) {
                return switchColor();
            }

            tick();
        }, 1000);

        return () => clearInterval(interval);

    }, [optionsInfos]);

    const totalTime = colorProgressbar == "work" ? optionsInfos.workTime * 60 : optionsInfos.breakTime * 60;
    const percent = Math.round(secondes / totalTime * 100);

    const minutesTimer = Math.floor(secondes / 60);
    var secondesTimer = secondes % 60;
    if (secondesTimer < 10){
        secondesTimer = "0" + secondesTimer; 
    }


    return(
        <div>
            <CircularProgressbar 
                value={percent} 
                text={`${minutesTimer} : ${secondesTimer}`} 
                styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',

                // Text size
                textSize: '16px',

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 4,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                //pathColor: `rgba(62, 152, 199, ${60 / 100})`,
                pathColor: colorProgressbar === 'Work' ? red : green, 
                textColor: '#ffff',
                trailColor: 'rgba(260, 260, 260, 0.3)',
                //backgroundColor: '#3e98c7',
            })} />

            <div class="clock">
                {paused ? <PlayButton />:<PauseButton />}   
            </div>

            <div class="cog">
                <CogButton onClick={() => optionsInfos.setShowCog(true)} />
            </div>


        </div>
    );
}

export default Timer;