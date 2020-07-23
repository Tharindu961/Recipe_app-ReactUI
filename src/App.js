import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = "3f8a762b";
  const APP_KEY = "e44e743e953d239bd0a366e3d7515337	";

  const [recipes, setRecipes] = useState([]);

  
  useEffect(() => {
    getRecips();
  }, []);

  const getRecips = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button"  type="submit">Search
        </button>
  
      </form>
    </div>
  )
}
export default App;
