import { useParams, useNavigate } from 'react-router-dom';
import logements from '../data/logements.json';

function Logement() {
    const { id } = useParams();
    const navigate = useNavigate();
    const logement = logements.find((logement) => logement.id === id);

    if (!logement) {
        navigate('/404', { replace: true });
        return null;
    }

    return (
        <div>
            <h1>Détail du logement</h1>
            <p>Logement avec l'ID : {id}</p>
        </div>
    );
}

export default Logement;