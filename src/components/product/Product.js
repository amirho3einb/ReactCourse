import styles from './product.module.css';
import { BiTrash } from "react-icons/bi";

const Product = (props) => {
    console.log(props);
    return(
        <div className={styles.product} onClick={props.click}>
            <p>product #{props.product.id} : {props.product.name}</p>
            <p>{props.product.price}</p>
            <button className={`${styles.button} ${styles.incBtn}`} onClick={props.onDec}>{props.product.quantity > 1 ? "-" : <BiTrash/> }</button>
            <span className={styles.value}>{props.product.quantity}</span>
            <button className={`${styles.button} ${styles.incBtn}`} onClick={props.onInc}>+</button>
            {props.children}
            <input value={props.product.name} onChange={props.onChange}/>
            <button className={`${styles.button} ${styles.delBtn}`} onClick={props.onDelete}>Delete</button>
        </div>
    )
};
export default Product;