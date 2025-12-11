import { useEffect, useState, type FunctionComponent } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircularProgressProps {

}

const CircularProgress: FunctionComponent<CircularProgressProps> = () => {
    const [percentage, setPercentage] = useState(0);
    const endPercentage = 46;

    useEffect(() => {
        if (percentage >= endPercentage) return setPercentage(endPercentage)

        setPercentage((prev) => prev += 1)
    }, [percentage])

    return <CircularProgressbar
        strokeWidth={13}
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
            rotation: 0,
            strokeLinecap: 'round',
            textColor: 'var(--primary)',
            textSize: '16px',
            pathTransitionDuration: 0.5,
            pathColor: 'var(--primary)',
            trailColor: '#d6d6d6',
            backgroundColor: '#c56131',
        })}
    />
}

export default CircularProgress;