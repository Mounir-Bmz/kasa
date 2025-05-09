import '../styles/Banner.scss';

function Banner({ image, text }) {
    return (
        <div className="banner">
            <img src={image} alt="Bannière" className="banner-image" />
            {text && <h1 className="banner-text">{text}</h1>}
        </div>
    );
}

export default Banner;