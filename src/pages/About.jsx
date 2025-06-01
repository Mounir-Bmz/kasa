import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import aboutData from '../data/about.json';
import aboutImage from '../assets/images/about_img.png';
import '../styles/About.scss';

function About() {
    return (
        <div className="about">
            <Banner image={aboutImage} />
            <div className="about-collapses">
                {aboutData.map((item, index) => (
                    <Collapse
                        key={index}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
        </div>
    );
}

export default About;