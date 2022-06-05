import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FilmComp() {
  const [movie, setMovie] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [displayMovie, setDisplayMovie] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://ghibliapi.herokuapp.com/films/`);
      const data = await response.json();
      setMovie(data);
      if (searchText == "") {
        setDisplayMovie(data)
      } else {
        const array = movie.filter((element) => (element.title).toLowerCase().includes(searchText.toLowerCase()))
        setDisplayMovie(array)
      }
    })();
  }, [searchText]);

function handleChange(event) {
  event.preventDefault();
  setSearchText(event.target.value);
}

  return (
    <>
    <form >
    <div className="InputContainer">
        <input value={searchText} onChange={handleChange} type="text" placeholder="Search films..." className="SearchInput" />
      </div>
      </form>
    <div className="FilmsContainer">
      {displayMovie.map((movieID) => {
        const imageStyle = {
          backgroundImage: `url(${movieID.image})`,
          backgroundSize: "cover",
        };
        return (
          <Link to={`/FilmDetails/${movieID.id}`} key={movieID.id}>
          <div className="FilmCard" style={imageStyle} key={movieID.id}>
          </div>
          </Link>
        );
      })}
    </div>
    </>
  );
}

export default FilmComp;
