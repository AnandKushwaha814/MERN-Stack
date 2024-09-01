import { useState } from "react";


const Bmi = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [status, setStatus] = useState(null)
    const submit = (e) => {
        e.preventDefault();

        if (height === "" || height <= 0 || isNaN(height)) {
            setStatus("Please Enter Valid Height");
            // setColor("red")
            return;
        } else if(weight ==='' || weight<=0 || isNaN(weight)){
            setStatus("Please Enter Valid Weight");
            return;
        }
        const calculateBmi =(weight / ((height * height) / 10000)).toFixed(2);
        let bmiCategory=''
        if(calculateBmi<18.6){
            bmiCategory = `Underweight &#128530`;
        } else if(calculateBmi>=18.6 && calculateBmi<=24.9){
            bmiCategory = `Normal weight `;
        }else if(calculateBmi>=24.9 && calculateBmi<29.9){
            bmiCategory = `Overweight `;   
        }else{
            bmiCategory = `Obese`;
        }
        setStatus(`Your Bmi Is: ${calculateBmi} ${bmiCategory}`);

    }

    return (
        <>
            <div className='flex bg-black items-center justify-center h-20 w-full'>
                <h1 className='text-center text-[20px] text-red-600 font-bold'>BMI Calculator</h1>
            </div>
            <form onSubmit={submit}>
                <div className='flex flex-col justify-center items-center w-[400px] border-solid border-2 border-red-600 p-4'>
                    <div className='flex flex-col justify-center w-full mb-4'>
                        <label className='mb-2' htmlFor="height">Height In CM:</label>
                        <input id="height" value={height} onChange={(e) => setHeight(e.target.value)} className='p-2 border-black border-2 rounded' type="text" placeholder="Height In CM" />
                    </div>
                    <div className='flex flex-col w-full mb-4'>
                        <label className='mb-2' htmlFor="weight">Weight In KG:</label>
                        <input id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} className='p-2 border-black border-2 rounded' type="text" placeholder="Weight In KG" />
                    </div>
                    <div className='mb-4'>
                        <button id="button" type="submit" className="p-[10px] bg-cyan-400 rounded text-center font-serif font-bold border-red-500 border-2">Calculate BMI</button>
                        <div className="text-blue-600-500 p-[10px] bg-slate-400 mt-2 rounded text-white font-bold"  id="results">
                            { status && <p>{status} </p>}
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
export default Bmi;