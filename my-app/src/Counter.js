import React, { useState } from 'react';

function Counter() {
    const hStyle = {
        fontSize: '25px',
        margin: '20px',
    };

    const bStyle = {
        margin: '10px',
    };

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber((prevNumber) => prevNumber + 1);
    };
    const onDecrease = () => {
        setNumber((prevNumber) => prevNumber - 1);
    };

    return (
        <div>
            <div style={hStyle}>{number}</div>
            <button onClick={onIncrease}>+1</button>
            <button style={bStyle} onClick={onDecrease}>
                -1
            </button>
        </div>
    );
}

export default Counter;
