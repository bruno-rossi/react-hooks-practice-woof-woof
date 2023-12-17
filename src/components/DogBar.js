import React, { useEffect } from "react";
import DogCard from "./DogCard";

function DogBar({ dogs, setSelectedDog }) {

    return (
        <div id="dog-bar">
            { dogs.length === 0 ? (<p>Loading...</p>) : (
                dogs.map(dog => {return <DogCard key={dog.id} dogData={dog} setSelectedDog={setSelectedDog} /> }))}
        </div>
    )
}

export default DogBar;