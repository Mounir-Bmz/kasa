import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';

function Header() {
    return (
        <header className="header">
            <h1>Kasa</h1>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;