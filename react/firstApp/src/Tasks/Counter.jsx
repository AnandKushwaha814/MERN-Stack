// import "./Counter.css"
import { useState,useEffect } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);

        // useEffect
    useEffect(()=>{
        console.log('first time call');
    },[])

    useEffect(()=>{
        console.log('when state is change')
    },[count])

    useEffect(()=>{
        console.log('count is unmunted',count)
        return()=>{
            console.log('unmounting')
        }
    },[])

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
        <div className=' items-center justify-center mt-3 text-center'> 
            <h1 className='p-[10px] text-xl text-red-500'>Count: {count}</h1>
            <button className='p-[10px] bg-slate-400 m-[10px] rounded hover:bg-green-500' onClick={increase}>
                increase
            </button>
            <button className='p-[10px] bg-slate-400 m-[10px] rounded hover:bg-green-500' onClick={decrease}>
                decrease
            </button>
            <button className='p-[10px] bg-slate-400 m-[10px] rounded hover:bg-green-500' onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter
