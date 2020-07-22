import React, { useEffect, useState } from 'react';

import './App.css';

const App = () => {

  const APP_ID = "3f8a762b";
  const APP_KEY = "e44e743e953d239bd0a366e3d7515337	";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    console.log('Effect has been run');
  });

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button"  type="submit">
        </button>
  <h1 onClick = {() => setCounter(counter + 1)}>{counter}</h1>
      </form>
    </div>
  )
}
export default App;
