function GameStats({ videogames }) {

    const stati = ["completato", "in-corso", "wishlist", "abbandonato"];



    return (
        <div className="game-stats">
            
            <div className="games-per-status">
                <b>videogames per stato</b>
                <ul className="status-item">
                {
                    stati.map(
                        stato => (
                            <li key={stato}>
                                {stato}: <span className="light-blue">{videogamesPerStato[stato]}</span>
                            </li>
                        )
                    )
                }
                </ul>
            </div>
            
        </div>
    );    
}

export default GameStats;