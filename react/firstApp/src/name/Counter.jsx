import "./Counter.css"
import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
        if (count <= 0) {
            setCount(0);
        }
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <div className='flex'> 
            <h1>Count: {count}</h1>
            <button onClick={increase}>
                increase
            </button>
            <button onClick={decrease}>
                decrease
            </button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter
