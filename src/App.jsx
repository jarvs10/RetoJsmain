import { useState, useEffect } from 'react';
import Listar from './components/Listar'
import { Link, Outlet } from 'react-router-dom'

function App() {

    const url = `https://fake-movie-database-api.herokuapp.com/api?s=Batman`

    const [infoBatman, setInfoBatman] = useState([]);

    //const [saveLink, setSaveLink] = useState('');

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJson = await response.json()
        setInfoBatman(responseJson.Search);
    }

    // useEffect(() => {
    //     if (saveLink === 'tt0096895') {
    //         <Link to='/batman1' />
            
    //     } else if (saveLink === 'tt0468569') {
    //     }
    // }, [saveLink])

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <>
            <div className='flex justify-between items-center p-3 bg-black'>
                <h1 className='text-5xl font-black text-white'>RetoReactJs-BATMAN</h1>
                <img src='https://p4.wallpaperbetter.com/wallpaper/452/930/411/batman-dc-comics-logo-wallpaper-preview.jpg' width='200' alt="logo batman" />

                <Outlet />

            </div>
            <Listar
                infoBatman={infoBatman}
                //setSaveLink={setSaveLink}
            />
        </>
    )
}

export default App
