import { Link } from 'react-router-dom';
import '../styles/Card.scss';

function Card({ id, cover, title }) {
    return (
        <Link to={`/logement/${id}`} className="card">
            <img src={cover} alt={title} className="card-image" />
            <h2 className="card-title">{title}</h2>
        </Link>
    );
}

export default Card;