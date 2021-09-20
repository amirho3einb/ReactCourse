import styles from './navBar.module.css'
const NavBar = (props) => {
    return ( 
        <header className={styles.navBar}>
            <h2>AmirHosseinBalagar.com Shopping</h2>
            <span>{props.totalItems}</span>
        </header>
    );
}
 
export default NavBar;