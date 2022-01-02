// Import
import Data from "../Json/products.json";
import { AiOutlineSearch } from 'react-icons/ai';
import ProductItem from "../Components/ProductItem";

// Function
const ProductContainer = () => {
    const productItem = Data.map(item => <ProductItem class="Product-item" {...item} />)
    
    return (
        <section className="Product-container" id="Product-container">
            <div className="Anchor" id="Shop-anchor"></div>
            <section className="Search-bar">
                <form className="Search-bar__form">
                    <input className="Search-bar__input" placeholder="Search" />
                    <button className="Search-bar__button">
                        <AiOutlineSearch />
                    </button>
                </form>
            </section>
            <ul className="Product-list">
                {productItem}
            </ul>
        </section>
    );
};

// Export
export default ProductContainer;