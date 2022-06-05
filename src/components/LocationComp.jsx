import React from "react";
import { useState, useEffect } from "react";

function LocationComp() {
  const [town, setTown] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [displayTown, setDisplayTown] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://ghibliapi.herokuapp.com/locations/`);
      const data = await response.json();
      setTown
    (data);
    if (searchText == "") {
      setDisplayTown(data)
    } else {
      const array = town.filter((element) => (element.name).toLowerCase().includes(searchText.toLowerCase()))
      setDisplayTown(array)
    }
    })();
  });

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
      {displayTown.map((townID) => {

        return (
            <div className="TownInfoContainer">
              <p className="keyBold">Town name: {townID.name}</p>
              <p className="keyBold">Climate: {townID.climate}</p>
              <p className="keyBold">Terrain type: {townID.terrain}</p>
              <p className="keyBold">Surface Water: {townID.surface_water}%</p>
              {/* <p className="keyBold">Residents:</p>
              <p>{townID.residents}</p>
              <p className="keyBold">Films:</p>
              <p>{townID.films}</p> */}
          </div>
        );
      })}
    </div>
    </>
  );
}

export default LocationComp;
