import { useState } from "react";
import { useProductsAction } from "../Provider/ProductsProvider";


const Filter = () => {
    const dispatch = useProductsAction();
    const [value, setValue] = useState("");
    const changeHandler = (e) => {
        dispatch({type: "filter", event: e});
        setValue(e.target.value);
    };
    return ( 
        <div>
            <p>filter produts based on:</p>
            <div>
                order by
                <select onChange={changeHandler} value={value}>
                    <option value="">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
     );
}
 
export default Filter;