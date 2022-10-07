import React from 'react'
import { NavLink, useFetcher, useParams } from 'react-router-dom'
import { useGlobalContext } from './Context';
import { API_URL } from './Context';
import { useState } from 'react'
import { useEffect } from 'react'


    const SingleMovies = () => {
      const { id } = useParams();
      const [isLoading,setIsLoading] = useState(true);
      const [movie,setMovie] = useState("");
    const getMovies = async (url) => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        if(data.Response==="True"){
          setIsLoading(false);
          setMovie(data)
         
        }
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(() => {
      let timeOut = setTimeout(() => {
        getMovies(`${API_URL}&i=${id}`);
      }, 1000);
      // console.log("set");
      return () => {
        clearTimeout(timeOut);
        // console.log("clear");
      };
    }, [id]);
    
      if (isLoading) {
        return (
          <div className="movie-section ">
            <div className="loading">Loading....</div>;
          </div>
        );
      }
  return (
    <>
        <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
          
        </div>
      </div>
    </section>
    </>
  )
}

export default SingleMovies
