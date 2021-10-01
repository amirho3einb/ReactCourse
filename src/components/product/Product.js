import styles from './product.module.css';
import { BiTrash } from "react-icons/bi";

const Product = ({product,onDec,onInc,onChange,onDelete,onClick,children}) => {
    return(
        <div className={styles.product}>
            <p>product #{product.id} : {product.name}</p>
            <p>{product.price}</p>
            <button 
                onClick={onDec}
                className={`${styles.button} ${
                    product.quantity === 1 && styles.remove
                }`} 
            >
                {product.quantity > 1 ? "-" : <BiTrash/> }
            </button>
            <span className={styles.value}>{product.quantity}</span>
            <button className={`${styles.button}`} onClick={onInc}>+</button>
            {children}
            <input value={product.name} onChange={onChange}/>
            <button className={`${styles.button} ${styles.delBtn}`} onClick={onDelete}>Delete</button>
        </div>
    )
};

export default Product;