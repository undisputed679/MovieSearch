import React from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";
import "./Style.css"

export const Movies = () => {
    const {movie,isLoading} = useGlobalContext();
    if (isLoading) {
        return (
          <div className="movie-section ">
            <div className="loading">Loading....</div>;
          </div>
        );
      }

  return <>

         <section className="movie-page">
        <div className="grid grid-4-col">
          {movie
            ? movie.map((curMovieElem) => {
                const { imdbID, Title, Poster } = curMovieElem;
                const movieName = Title.substring(0, 15);

                return (
                  <NavLink to={`movie/${imdbID}`} key={imdbID}>
                    <div className="card">
                      <div className="card-info">
                        <h2>
                          {movieName.length > 13
                            ? `${movieName}...`
                            : movieName}
                        </h2>
                        <img src={Poster} alt="name" />
                        {/* <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" /> */}
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </section>
  </>;
};
