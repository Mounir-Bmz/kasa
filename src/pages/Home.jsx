import Banner from '../components/Banner';
import Card from '../components/Card';
import logements from '../data/logements.json';
import '../styles/Home.scss';

function Home() {
    return (
        <div className="home">
            <Banner
                image="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
                text="Chez vous, partout et ailleurs"
            />
            <div className="cards-container">
                {logements.map((logement) => (
                    <Card
                        key={logement.id}
                        id={logement.id}
                        cover={logement.cover}
                        title={logement.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;