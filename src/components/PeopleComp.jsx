import React from "react";
import { useState, useEffect } from "react";

function PeopleComp() {
  const [resident, setResident] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://ghibliapi.herokuapp.com/people/`);
      const data = await response.json();
      setResident(data);
      if (searchText == "") {
        setResidents(data);
      } else {
        const array = resident.filter((element) =>
          element.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setResidents(array);
      }
    })();
  }, [searchText]);

  function handleChange(event) {
    event.preventDefault();
    setSearchText(event.target.value);
  }

  return (
    <>
      <form>
        <div className="InputContainer">
          <input
            value={searchText}
            onChange={handleChange}
            type="text"
            placeholder="Search films..."
            className="SearchInput"
          />
        </div>
      </form>
      <div className="PeopleContainer">
        {residents.map((charID) => {
          return (
            <div className="PeopleInfoContainer">
              <p className="keyBold">Name: {charID.name}</p>
              <p className="keyBold">Gender: {charID.gender}</p>
              <p className="keyBold">Age: {charID.age}</p>
              <p className="keyBold">Eye Colour: {charID.eye_color}</p>
              <p className="keyBold">Hair color Colour: {charID.hair_color}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PeopleComp;
