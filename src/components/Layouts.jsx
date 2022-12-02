import React from 'react'
import { Outlet } from 'react-router-dom'

const Layouts = () => {

  return (
    <>
      <div className='flex justify-between items-center p-5 bg-black md:w-6/6'>
        <h1 className='text-5xl font-black text-white'>IMBD-MOVIES</h1>
        <img className='' src='https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg' width='250' alt="logo batman" />


      </div>

      <main>
        <Outlet />
      </main>

      <footer className='bg-black py-5'>
        <h2 className='text-white text-center uppercase font-bold'>Todos los derechos reservados</h2>
      </footer>
    </>

  )
}

export default Layouts