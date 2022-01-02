// Import
import image from "../Assets/product-image.png";

// Function
const ProductItem = (props) => {

    // Price & color
    let price = props.primaryPrice;
    let color = props.primaryColor;
    let fontColor = "black";
    let fontWeight = "normal";

    // Sale & sold
    if (props.soldOut) {
        price = props.soldOutPrice;
        color = props.soldOutColor;
    } else if(props.onSale) {
        price = props.onSalePrice;
        color = props.onSaleColor;
        fontColor = props.primaryColor;
        fontWeight = "bold"
    } else {
        price = props.primaryPrice;
        color = props.primaryColor;
    };

    // Return
    return (
        <section key={props.id} className={props.class}>
            <div className="Product-item__background" style={{backgroundColor: color}}></div>
            <a className="Product-item__container" href={props.url}>
                <figure className="Product-item__figure">
                    <img className="Product-item__img" src={image} alt="Product image" />
                    <h2 className="Product-item__title uppercase" style={{backgroundColor: color}}>
                        {props.name}
                    </h2>
                </figure>
                <article className="Product-item__article">
                    <p className="Product-item__info">
                        {props.description}
                    </p>
                </article>
                <p className="Product-item__price" style={{color: fontColor, fontWeight: fontWeight}}>
                    {price}
                </p>
            </a>
        </section>
    );
}

// Function
export default ProductItem;