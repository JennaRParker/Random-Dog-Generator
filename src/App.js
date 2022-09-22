import React from "react";
import './App.css';
import GiphDisplay from "./Components/GiphDisplay";
import Button from "./Components/Button";


function App() {
  const [dog, setDog] = React.useState(null);
  
  const getDog = async () => {
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random"
    );
    const data = await response.json();
    setDog(data);
  };

  return (
    <div className="App">
      <h1>Random Doggo</h1>
      <Button go={getDog}/>
      <h2>Make Your Day</h2>
      <GiphDisplay dog={dog}/>
    </div>
  )
}

export default App;
