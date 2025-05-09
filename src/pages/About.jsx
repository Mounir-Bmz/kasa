import Banner from '../components/Banner';
import '../styles/About.scss';

function About() {
    return (
        <div className="about">
            <Banner
                image="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
            />
            <h1>À propos</h1>
            <p>En savoir plus sur Kasa.</p>
        </div>
    );
}

export default About;