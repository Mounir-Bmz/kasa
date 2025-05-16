import { Link } from 'react-router-dom';
import '../styles/Error.scss';

function Error() {
    return (
        <div className="error">
            <h1 className="error-title">404</h1>
            <p className="error-message">Oups! La page que vous cherchez n’existe pas.</p>
            <Link to="/" className="error-link">Retour à la page d'accueil</Link>
        </div>
    );
}

export default Error;