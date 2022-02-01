import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import CogButton from './CogButton';
import {useContext} from 'react';
import OptionsContext from './OptionsContext'

const red = "#df2d2d";
const green = "#12da00";

function Timer(){
    const optionsInfos = useContext(OptionsContext);
    return(
        <div>
            <CircularProgressbar value={60} text={`${60}%`} styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',

                // Text size
                textSize: '16px',

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                //pathColor: `rgba(62, 152, 199, ${60 / 100})`,
                pathColor: red, 
                textColor: '#ffff',
                trailColor: 'rgba(260, 260, 260, 0.3)',
                //backgroundColor: '#3e98c7',
            })} />

            <div class="clock">
                <PlayButton />
                <PauseButton />
            </div>

            <div class="cog">
                <CogButton onClick={() => optionsInfos.setShowCog(true)} />
            </div>


        </div>
    );
}

export default Timer;