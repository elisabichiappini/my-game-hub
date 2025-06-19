

const getUniqueValues = (videogames, key) => [...new Set(videogames.map(videogame => videogame[key]))].sort();

function GameFilters({
    videogames,
    
}) {
    const generi = getUniqueValues(videogames, "genere");
      const piattaforme = getUniqueValues(videogames, "piattaforma");

    return (
        <div className="filters-container">
            <div className="filter-section">
                <label>Genere</label>
                <select 
                    value={filtroGenere} 
                    onChange={(e) => setFiltroGenere(e.target.value)}
                    className="filter"
                >
                    <option value="">Tutti</option>
                    {generi.map(genere => <option key={genere} value={genere}>{genere}</option>)}
                </select>
            </div>
            <div className="filter-section">
                <label>Piattaforma</label>
                <select 
                    value={filtroPiattaforma} 
                    onChange={(e) => setFiltroPiattaforma(e.target.value)}
                    className="filter"
                >
                    <option value="">Tutte</option>
                    {piattaforme.map(
                        piattaforma => <option key={piattaforma} value={piattaforma}>{piattaforma}</option>
                    )}
                </select>
            </div>
        </div>
    );
}

export default GameFilters;