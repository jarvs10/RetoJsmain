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

      <ul className='text-center flex flex-col items-center mb-36'>
        <li className='text-2xl font-bold'>{movies.nombre}</li>
        <li className='mb-2'>{movies.year}</li>
        <li> <img src={movies.img} alt="imagen" width='500' /></li>
        <li className='font-bold mt-2 mb-4 text-2xl'>Genero: <span className='font-normal'>{movies.genre}</span></li>
        <li className='text-justify'>{movies.description}</li>
      </ul>
    </div>
  )
}

export default InfoId