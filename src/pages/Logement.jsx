import { useParams } from 'react-router-dom';

function Logement() {
    const { id } = useParams();
    return (
        <div>
            <h1>Détail du logement</h1>
            <p>Logement avec l'ID : {id}</p>
        </div>
    );
}

export default Logement;