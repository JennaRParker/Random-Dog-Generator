import React from "react";

const DogDisplay = ({dog}) => {
    const loaded = () => {
    return (
        <img src={dog.message} alt="dog"/>
    )
};

const loading= () => {
    return <h1>Cannot Display Dog</h1>
};

return dog ? loaded() : loading ();
};

export default DogDisplay;