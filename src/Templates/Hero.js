// Import
import Data from "../Json/imageCarousel.json";
import image from "../Assets/product-image.png";

// Function
const Hero = () => {

    // Map
    const imageItem = Data.map(item => {
        return (
            <a className="Image-carousel__link" href={item.url} style={{backgroundImage: `url(${image})`}}>
                <div className="Image-carousel__overlay">
                    <h2 className="Image-carousel__title">
                        Go to product
                    </h2>
                </div>
            </a>
        );
    });
    //<figure className="Image-carousel__img" style={{backgroundImage: `url(${image})`}}></figure>
    //<img className="Image-carousel__img" src={image} />

    // Return
    return (
        <section className="Hero">
            <div className="Anchor" id="Home-anchor"></div>
            <section className="Banner">
                <section className="Banner__header">
                    <h1 className="Banner__title uppercase">
                        The Vault.
                    </h1>
                    <div className="Banner__divider"></div>
                </section>
            </section>
            <section className="Image-carousel">
                <ul className="Image-carousel__list">
                    {imageItem}
                </ul>
            </section>
        </section>
    );
};

// Export
export default Hero;