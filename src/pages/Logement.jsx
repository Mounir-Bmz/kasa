import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import Gallery from '../components/Gallery';
import Collapse from '../components/Collapse';
import Error from './Error';
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
                <Collapse title="Description" content={logement.description} />
                <Collapse title="Équipements" content={logement.equipments} />
            </div>
        </div>
    );
}

export default Logement;