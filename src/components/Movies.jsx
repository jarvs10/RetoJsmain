import { Link } from "react-router-dom";

const Movies = ({Title, Year, Poster, imdbID, setSaveLink}) => {

    const handleLink = (id) => {
        if(id === 'tt0096895'){
            <Link to='/batman1'>Leer mas</Link>
        }
        console.log(id);
        //setSaveLink(imdbID);

    }

    return (
        <>
            <div className='flex justify-center items-center'>
                
                <ul className='mt-4 p-2 mb-10 text-center'>
                    <li className='text-2xl font-black'>{Title}</li>
                    <li className='text-1xl font-bold mb-2'>{Year}</li>
                    <li>
                        <img
                            className='mx-auto'
                            width='400'
                            src={Poster} 
                        />
                    </li>
                    <input 
                        className='mt-2 font-bold uppercase py-2 px-5 bg-indigo-600 hover:bg-indigo-800 text-white cursor-pointer'
                        type="button"
                        value= 'Leer mas' 
                        onClick={() => handleLink(imdbID)}
                    />
                </ul>
            </div>
        </>
        
    )
}

export default Movies