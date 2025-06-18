import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import GameList from './components/GameList/GameList.jsx';
import { getAllVideoGames } from './data/MockData.js';
import './App.css';

function App() {
  const videogames = getAllVideoGames();

  return (
    <>
    <Header videogames={videogames}></Header>
      <GameList videogames={videogames}/>
    </>
  )
}

export default App;
