import React from "react";

function Button({ isGoodDog, handleButtonClick }) {
    return (<button onClick={() => handleButtonClick()}>{isGoodDog ? "Bad dog!" : "Good dog!"}</button>)
}

export default Button;