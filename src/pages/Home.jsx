import Banner from '../components/Banner';
import Card from '../components/Card';
import logements from '../data/logements.json';
import bannerImage from '../assets/images/banner_img.png';
import '../styles/Home.scss';

function Home() {
    return (
        <div className="home">
            <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
            <div className="cards-container">
                {logements.map((logement) => (
                    <Card
                        key={logement.id}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;