import './GameList.css';
import GameCard from '../GameCard/GameCard.jsx';

function GameList({ videogames }) {
    return (
        <div class="grid">
            { videogames.map(videogame => <GameCard key={videogame.id} videogame={videogame}/> )}
        </div>
    )
}

export default GameList;