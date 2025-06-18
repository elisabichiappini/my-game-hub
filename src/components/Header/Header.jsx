import './Header.css';

function Header({ videogames }) {
    return (
        <header className="header-style">
            <h1 className="title-style">Game Hub | Elisa</h1>
            <h3 className="collection-style">
                Giochi in collezione: <b>{ videogames.length }</b>
            </h3>
        </header>
    )
} 

export default Header;