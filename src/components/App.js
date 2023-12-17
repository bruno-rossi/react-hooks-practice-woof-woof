// root
// └── App
//     ├── DogBar
//     |   └── DogCard        
//     └── DogDetails
//         └── Button

import React, { useState, useEffect } from "react";
import DogBar from "./DogBar";
import DogDetails from "./DogDetails";

function App() {
  
  const [ filter, setFilter ] = useState(false);
  const [ dogs, setDogs ] = useState([]);
  const [ selectedDog, setSelectedDog ] = useState({});

  function handleFilterClick() {
    setFilter(() => !filter);
    setSelectedDog({});
  }

  const dogsToDisplay = filter ? dogs.filter(dog => dog.isGoodDog) : dogs;

  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then(response => response.json())
    .then(dogs => {
        setDogs(() => dogs);
    })
  }, [])

  function handleButtonClick() {
    const updatedDog = {...selectedDog, isGoodDog: !selectedDog.isGoodDog}
    setSelectedDog(() => updatedDog)

    const updatedDogsArray = dogs.map(dog => {
      return dog.id === updatedDog.id ? updatedDog : dog;
    });
    setDogs(() => updatedDogsArray);

  }

  console.log(selectedDog);

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={() => handleFilterClick()}>Filter good dogs: {filter ? "ON" : "OFF"}</button>
      </div>
      <DogBar dogs={dogsToDisplay} setSelectedDog={setSelectedDog} />
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        { Object.keys(selectedDog).length === 0 ? <div></div> : <DogDetails selectedDog={selectedDog} handleButtonClick={() => handleButtonClick()}/> }
      </div>
    </div>
  );
}

export default App;
