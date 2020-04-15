import React from 'react';
import { useMeasureWindow } from './hooks';

const WindowsMeasures = () => {
    const {width, height} = useMeasureWindow()

    return (
        <div>
            <p>{`The width is ${width}`}</p>
            <p>{`The height is ${height}`}</p>
        </div>
    );
}

export default WindowsMeasures;