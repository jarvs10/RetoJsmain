import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Movies from '../components/Movies';
import { getMovies } from '../data/Request';

export const loader = () => {

  const movies = getMovies();

  return movies;
}

const Index = () => {

  const movies = useLoaderData();

  return (
    <div>
      {
        movies.map((movie) => {
          return (
            <Movies 
              key={movie.id}
              movie={movie}
            />
          )
        })
      }
    </div>
  )
}

export default Index