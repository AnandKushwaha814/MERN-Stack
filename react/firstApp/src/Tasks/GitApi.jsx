import { useState, useEffect } from 'react'

const GitApi = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('');

    // fetch data
    useEffect(() => {
        fetch('https://api.github.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, [])
    const filteredUsers = users.filter(user =>
        user.login.toLowerCase().includes(search.toLowerCase())
    );

    // Convert first Name into Capitalize
    const capitalizeName=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    return (
        <>
            <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">GitHub User Finder</h1>
            <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-3 rounded w-full border border-red-500 focus:outline-none focus:ring focus:border-blue-300"
            />
            <div className="mt-6 flex items-center justify-between flex-wrap sm:grid-cols-2 md:grid-cols-4 gap-6 bg-slate-500 p-4">
                {filteredUsers.map((user) => (
                    <div
                        key={user.id}
                        className='bg-white shadow-lg rounded-lg h-[300px] w-[200px] m-3'>
                        <h2 className='text-lg font-bold text-center p-2'>{user.id}</h2>

                        <img className='h-[100px] w-[100px] items-center rounded mx-auto' src={user.avatar_url} alt={user.login} />
                        <h2 className='text-center p-3 text-red-600 text-2xl font-bold'>{capitalizeName(user.login)}</h2>



                    {/*  */}
                        <a href={user.html_url} target='_blank' className='block text-center bg-slate-500 p-4 rounded mt-2 ml-5 mr-5 font-bold text-white hover:bg-green-500'>
                            View Profile
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default GitApi
