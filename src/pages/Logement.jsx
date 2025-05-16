import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import Gallery from '../components/Gallery';
import Error from './Error'; // On importe Error directement
import '../styles/Logement.scss';

function Logement() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    if (!logement) {
        return <Error />;
    }

    return (
        <div className="logement">
            <Gallery pictures={logement.pictures} />
            <div className="logement-header">
                <div className="logement-info">
                    <h1 className="logement-title">{logement.title}</h1>
                    <p className="logement-location">{logement.location}</p>
                    <div className="logement-tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="logement-host-rating">
                    <div className="logement-host">
                        <span className="host-name">{logement.host.name}</span>
                        <img
                            src={logement.host.picture}
                            alt={logement.host.name}
                            className="host-picture"
                        />
                    </div>
                    <div className="logement-rating">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                className={`star ${
                                    index < parseInt(logement.rating) ? 'filled' : ''
                                }`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="logement-details">
                <div className="logement-description">
                    <h2>Description</h2>
                    <p>{logement.description}</p>
                </div>
                <div className="logement-equipments">
                    <h2>Équipements</h2>
                    <ul>
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Logement;