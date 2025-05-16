import { NavLink, Link } from 'react-router-dom';
import logoDesktop from '../assets/images/LOGO_D.png';
import logoMobile from '../assets/images/LOGO_M.png';
import '../styles/Header.scss';

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img src={logoDesktop} alt="Kasa Logo" className="header-logo" />
            </Link>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;