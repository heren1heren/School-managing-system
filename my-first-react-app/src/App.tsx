import React, { useState } from 'react';
const App = () => {
    const colors = ['green', 'blue', 'orange', 'red']
    const [colorIndex, setColorIndex] = useState(0)
    const [count, setCount] = useState(5);
    const [textColor, setTextColor] = useState(colors[colorIndex]);

    const incrementCount = () => {
        setCount(count + 1);
    }
    const changeTextColor = () => {
        setColorIndex((colorIndex + 1) % colors.length);
        setTextColor(colors[colorIndex]);
    }
    const onClick = () => {
        changeTextColor();
        incrementCount()
    }
    return (<>
        <h1 style={{ color: textColor }}>{count}</h1>
        <button onClick={onClick}>increase</button >
    </>)
}

export default App;