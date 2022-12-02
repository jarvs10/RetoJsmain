import React from 'react'
import { Outlet } from 'react-router-dom'

const Layouts = () => {

  return (
    <>
      <div className='flex justify-between items-center p-3 bg-black'>
        <h1 className='text-5xl font-black text-white'>IMBD-MOVIES</h1>
        <img className='' src='https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg' width='250' alt="logo batman" />


      </div>

      <main>
        <Outlet />
      </main>
    </>

  )
}

export default Layouts