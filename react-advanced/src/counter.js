import React from 'react';
import { useNumber, useTimer } from './hooks';

const Counter = () => {
    const [counter, { increase, decrease }] = useNumber(0)

    return <div>
        <button type="button" onClick={increase}>increase</button>
        <p>{`You clicked ${counter} times`}</p>
        <button type="button" onClick={decrease}>decrease</button>
    </div>
}

const Timer = () => {
    const timer = useTimer()
    return (
        <div>
            {<p>Timer is {timer}</p>}
        </div>
    )
}

export default Counter;