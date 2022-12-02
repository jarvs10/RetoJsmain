import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { editMovies } from '../data/Request'

export const loader = async ({ params }) => {
  const movie = await editMovies(params.movieId);

  return movie;
}

const InfoId = () => {
  const movies = useLoaderData();

  const navigate = useNavigate();

  return (
    <div className='mt-10 p-5'>
      <div className='flex justify-end'>
        <button
          onClick={() => navigate('/')}
          className='bg-black px-3 py-1 font-bold uppercase text-white'> ‹‹Atras
        </button>
      </div>

      <ul className='text-center flex flex-col items-center mb-20'>
        <li className='text-2xl font-bold'>{movies.nombre}</li>
        <li>{movies.year}</li>
        <li> <img src={movies.img} alt="imagen" width='500' /></li>
        <li className='font-bold mt-2 mb-2'>Genero: <span className='font-normal'>{movies.genre}</span></li>
        <li className='text-justify'>{movies.description}</li>
        <button
          onClick={() => navigate(`/movies/${id}/editar`)}
          className='bg-slate-700 text-white uppercase font-bold mt-2 py-2 px-3 rounded-md hover:bg-slate-900'>Leer mas
        </button>
      </ul>
    </div>
  )
}

export default InfoId