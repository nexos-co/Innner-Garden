import type { FunctionComponent } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircularProgressProps {

}

const CircularProgress: FunctionComponent<CircularProgressProps> = () => {
    const percentage = 66;

     return <CircularProgressbar
        value={percentage}
        text={`LV:34`}
        styles={buildStyles({
            rotation: 0.1,
            strokeLinecap: 'round',
            textColor: '#c56131',
            
            textSize: '13px',
            pathTransitionDuration: 0.5,
            pathColor: `#c56131`,
            trailColor: '#d6d6d6',
            backgroundColor: '#c56131',
        })}
    />
}

export default CircularProgress;