import React from 'react';
import { useTimer } from './hooks';


const Timer = () => {
    const timer = useTimer()
    return (
        <div>
            {<p>Timer is {timer}</p>}
        </div>
    )
}

export default Timer;