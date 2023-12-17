import React from "react";
import Button from "./Button";

function DogDetails({ selectedDog, handleButtonClick }) {

    return (
        <div id="dog-info">
            <img src={selectedDog.image} alt={selectedDog.name} />
            <h3>{selectedDog.name}</h3>
            <Button isGoodDog={selectedDog.isGoodDog} handleButtonClick={handleButtonClick}/>
        </div>
    )
}

export default DogDetails;