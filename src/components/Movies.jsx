import React from 'react'

const Movies = ({ movie }) => {
  const { nombre, year, img, genre, description } = movie;

  return (
    <div className='mt-10'>
      <ul className='text-center flex flex-col items-center mb-20'>
        <li className='text-2xl font-bold'>{nombre}</li>
        <li>{year}</li>
        <li> <img src={img} alt="imagen" width='600' /></li>
        <li className='font-bold mt-2 mb-2'>Genero: <span className='font-normal'>{genre}</span></li>
        <li>{description}</li>
      </ul>
    </div>
  )
}

export default Movies