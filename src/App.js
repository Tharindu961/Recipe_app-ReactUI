import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = "3f8a762b";
  const APP_KEY = "e44e743e953d239bd0a366e3d7515337	";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return(
    <div className="App">
      <h1>Hello React</h1>
    </div>
  )
}
export default App;
