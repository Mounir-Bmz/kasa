import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import aboutData from '../data/about.json';
import '../styles/About.scss';

function About() {
    return (
        <div className="about">
            <Banner
                image="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
            />
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