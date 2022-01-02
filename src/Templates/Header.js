// Import
import MenuItem from "../Components/MenuItem";
import Data from "../Json/menu.json"

// Function
const Header = () => {

    const menuItem = Data.map(item => <MenuItem class="Nav__item" {...item} />);

    return (
        <header className="Header">
            <nav className="Nav">
                <ul className="Nav__list">
                    {menuItem}
                </ul>
            </nav>
        </header>
    );
}

// Export
export default Header;