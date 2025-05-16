import { useState } from 'react';
import '../styles/Gallery.scss';

function Gallery({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!pictures || pictures.length === 0) {
        return null;
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="gallery">
            {pictures.length > 1 && (
                <>
                    <button className="gallery-arrow gallery-arrow-prev" onClick={handlePrev}>
                        &lt;
                    </button>
                    <button className="gallery-arrow gallery-arrow-next" onClick={handleNext}>
                        &gt;
                    </button>
                    <div className="gallery-counter">
                        {currentIndex + 1}/{pictures.length}
                    </div>
                </>
            )}
            <img
                src={pictures[currentIndex]}
                alt={`Photo ${currentIndex + 1}`}
                className="gallery-image"
            />
        </div>
    );
}

export default Gallery;