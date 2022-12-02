import React from 'react'
import { useNavigate } from 'react-router-dom';

const Movies = ({ movie }) => {

  const navigate = useNavigate();

  const { nombre, year, img, genre, description, id } = movie;

  return (
    <div className='mt-10 p-5'>
      <ul className='text-center flex flex-col items-center mb-7'>
        <li className='text-2xl font-bold'>{nombre}</li>
        <li>{year}</li>
        <li> <img src={img} alt="imagen" width='500' /></li>
        <li className='font-bold mt-2 mb-2'>Genero: <span className='font-normal'>{genre}</span></li>
        <li className='text-justify'>{description}</li>
        <button 
          onClick={() => navigate(`/movies/${id}/editar`)}
          className='bg-slate-700 text-white uppercase font-bold mt-2 py-2 px-3 rounded-md hover:bg-slate-900'>Leer mas
        </button>
      </ul>
    </div>
  )
}

export default Movies