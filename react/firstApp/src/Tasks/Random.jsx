import { useState, useEffect } from "react"

const Random = () => {
    const [randomJokes, setrandomJokes] = useState([])

    // Fetch data From Link error handling using async await
    const showJokes = async () => {
        try {
            const resopnse = await fetch('https://official-joke-api.appspot.com/jokes/random')
            const data = await resopnse.json()
            setrandomJokes(data)
        } catch (error) {
            console.log('Error Fetch Data', error);
        }
    };
    useEffect(() => {
        showJokes();
    }, [])

    if (!randomJokes) return <h1 className='p-4 m-5 text-red-600 font-bold text-5xl text-center'>Loading...</h1>
    return (
        <>
            <h1 className='p-4 m-5 text-red-600 font-bold text-5xl text-center'>Random Joke</h1>
            {randomJokes && (
                <>
                    <div className="flex justify-center items-center ">
                        <div className='grid grid-flow-row bg-slate-500 rounded shadow-lg p-4'>
                            <h2 className='p-2 m-4 text-2xl text-center font-bold text-white bg-slate-500 rounded'>Jokes😆</h2>
                            <p className='p-4 bg-slate-700 m-4 rounded text-white font-bold'>{randomJokes.setup}</p>
                            <p className='p-4 bg-slate-700 m-4 rounded text-white font-bold'>{randomJokes.punchline}</p>
                            <button className='p-4 m-4 rounded bg-slate-400 hover:bg-green-400 text-white font-bold' onClick={showJokes}>Show Jokes</button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Random
