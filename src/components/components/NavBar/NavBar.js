import { useProducts } from '../Provider/ProductsProvider';
import styles from './navBar.module.css'
const NavBar = () => {
    const products = useProducts();
    const totalItems = products.filter((p) => p.quantity > 0).length;
    return ( 
        <header className={styles.navBar}>
            <h2>AmirHosseinBalagar.com Shopping</h2>
            <span>{totalItems}</span>
        </header>
    );
}
 
export default NavBar;