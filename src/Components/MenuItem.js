// Function
const MenuItem = (props) => {
    return (

        <li className={props.class}>
            <a key={props.id} className="Nav__link uppercase" href={props.url}> 
                {props.title}
            </a>
        </li>
    );
}
 
// Export
export default MenuItem;