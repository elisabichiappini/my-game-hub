//importazione css
import { useState } from 'react';
import './GameCard.css';


function GameCard({ videogame }) {
    const [showDetails, setShowDetails] = useState(false);
    const handleToggle = () => setShowDetails(v => !v);

    return (
        <div className="card-style">
            <img src={videogame.coverUrl} alt={videogame.titolo} />
            <div className="content-style">
                <h3>{videogame.titolo}</h3>
                <h5>{videogame.genere}</h5>
                <h6 className={videogame.stato}>{videogame.stato}</h6>
                <p className={getVoteClass(videogame.voto)}>{videogame.voto}</p>
        
                {
                    showDetails && (
                        <div className="details-style">
                            <span>{videogame.piattaforma}</span>
                            <span>{videogame.annoUscita}</span>
                            <div>{videogame.prezzo}€</div>
                            <span>{videogame.oreGiocate} ore giocate</span>
                            <span>{videogame.difficolta}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const getVoteClass = (voto) => {
    if (voto > 8) return 'green';
    if (voto > 5 && 8 >= voto) return 'yellow';
    return 'red';
}



export default GameCard;