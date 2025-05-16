import logoDesktop from '../assets/images/LOGO_D.png';
import '../styles/Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <img src={logoDesktop} alt="Kasa Logo" className="footer-logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;