import { useState } from 'react';
import rightChevron from '../assets/images/right-chevron.png';
import '../styles/Collapse.scss';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggleCollapse}>
                <h2 className="collapse-title">{title}</h2>
                <img
                    src={rightChevron}
                    alt="Toggle dropdown"
                    className={`collapse-arrow ${isOpen ? 'open' : ''}`}
                />
            </div>
            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                {typeof content === 'string' ? (
                    <p>{content}</p>
                ) : (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Collapse;