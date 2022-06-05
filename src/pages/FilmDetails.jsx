import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/Navbar";

function FilmDetails() {
  const idFilms = useParams();

  const [movies, setMovies] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://ghibliapi.herokuapp.com/films/${idFilms.key}`
      );
      const data = await response.json();
      setMovies(data);
    } 
    )();
  });




  return (
    <>
      <NavBar />
      <br></br>
        <div className="FilmDetailPage">
          <div className="FilmDetailCard">
            <div className="FilmBanner">
              <img
                src={movies.movie_banner}
                alt={`${movies.name} banner`}
                className="FilmImage"
              />
            </div>
            <div className="InfoContainer">
              <div className="FilmInfo">
                <p className="keyBold">Film Title:</p>
                <p>{movies.title}</p>
              </div>
              <div className="FilmInfo">
                <p className="keyBold">Original Title:</p>
                <p>{movies.original_title}</p>
              </div>
              <div className="FilmInfo">
                <p className="keyBold">Romanised Title:</p>
                <p>{movies.original_title_romanised}</p>
              </div>
              <div className="FilmInfo">
                <p className="keyBold">Director:</p>
                <p>{movies.director}</p>
              </div>
              <div className="FilmInfo">
                <p className="keyBold">Producer:</p>
                <p>{movies.producer}</p>
              </div>
              <div className="FilmInfo">
                <p className="keyBold">Release Year:</p>
                <p>{movies.release_date}</p>
              </div>
              <div className="FilmInfo">
                <p className="keyBold">Running Time:</p>
                <p>{`${movies.running_time} minutes`}</p>
              </div>
              <div className="FilmInfo">
                <p className="keyBold">Rotten Tomatoe Score:</p>
                <p>{movies.rt_score}%</p>
              </div>
              <div className="FilmInfo Synopsis">
                <p><strong>Synopsis:</strong>    {movies.description}</p>
              </div>
            </div>

          </div>
        </div>
    </>
  );
}

export default FilmDetails;
