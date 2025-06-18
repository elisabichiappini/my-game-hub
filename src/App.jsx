import './App.css';

import Header from './components/Header/Header.jsx';
import GameList from './components/GameList/GameList.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import { getAllVideoGames } from './data/MockData.js';
import { useState } from 'react';

function App() {
  const videogames = getAllVideoGames();
  const [activeTab, setActiveTab] = useState("tutti");

  return (
    <>
    <Header videogames={videogames}></Header>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <GameList videogames={videogames}/>
    </>
  )
}

export default App;
