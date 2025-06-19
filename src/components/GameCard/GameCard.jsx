//importazione css
import { useState } from 'react';
import './GameCard.css';

const getVoteClass = (voto) => {
    if (voto > 8) return 'green';
    if (voto > 5 && 8 >= voto) return 'yellow';
    return 'red';
}

function GameCard({ videogame }) {
    const [showDetails, setShowDetails] = useState(false);
    const handleToggle = () => setShowDetails(v => !v);

    return (
        <div className="card-style" onClick={handleToggle} title="Mostra dettagli" >
            <img src={videogame.coverUrl} alt={videogame.titolo} />
            <div className="content-style">
                <h3>{videogame.titolo}</h3>
                <h5>{videogame.genere}</h5>
                <h6 className={videogame.stato}>{videogame.stato}</h6>
                <p className={getVoteClass(videogame.voto)}>{videogame.voto}</p>
        
                {
                    showDetails && (
                        <div className="details-style">
                            <h6>{videogame.piattaforma}</h6>
                            <h6>{videogame.annoUscita}</h6>
                            <div>{videogame.prezzo}€</div>
                            <h6>{videogame.oreGiocate} ore giocate</h6>
                            <h6>{videogame.difficolta}</h6>
                        </div>
                    )
                }
            </div>
        </div>
    )
}




export default GameCard;