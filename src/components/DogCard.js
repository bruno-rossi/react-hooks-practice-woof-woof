import React from "react";

function DogCard({ dogData, setSelectedDog }) {

    return <span onClick={() => setSelectedDog(dogData)}>
        <p>{dogData.name}</p>
    </span>
}

export default DogCard;