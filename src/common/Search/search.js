import { useState } from "react/cjs/react.development";
import { useProductsAction } from "../../components/Provider/ProductsProvider";
import styles from "./search.module.css";
const SearchBar = () => {
    const dispatch = useProductsAction();
    const [value, setValue] = useState("");
    const changeHandler = (e) => {
        console.log(e.target.value);
        dispatch({type: "search", event: e});
        setValue(e.target.value);
    };
    return ( 
        <div className={styles.formControl}>
            <div> search for : </div>
            <input 
                type="text"
                placeholder="search for ..."
                onChange={changeHandler}
                value={value}
            />
        </div>
    );
}
 
export default SearchBar;