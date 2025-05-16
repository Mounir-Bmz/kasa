import { NavLink } from 'react-router-dom';
import logoDesktop from '../assets/images/LOGO_D.png';
import logoMobile from '../assets/images/LOGO_M.png';
import '../styles/Header.scss';

function Header() {
    return (
        <header className="header">
            <img src={logoDesktop} alt="Kasa Logo" className="header-logo" />
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;