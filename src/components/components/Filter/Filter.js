import { useState } from "react";
import { useProductsAction } from "../Provider/ProductsProvider";
import Select from 'react-select';
import styles from "./Filter.module.css";


const Filter = () => {
    const options = [
        { value: '', label: 'All' },
        { value: 'XS', label: 'XS' },
        { value: 'S', label: 'S' },
        { value: 'M', label: 'M' },
        { value: 'L', label: 'L' },
        { value: 'XL', label: 'XL' },
        { value: 'XXL', label: 'XXL' },
    ];

    const dispatch = useProductsAction();
    const [value, setValue] = useState("");
    const changeHandler = (selectedOption) => {
        console.log(selectedOption);
        dispatch({type: "filter", selectedOption});
        setValue(selectedOption);
    };
    
    return ( 
        <div className={styles.mainRowFilters}>
            <p>filter produts based on:</p>
            <div className={styles.filterSelect}>
                order by
                {/* <select onChange={changeHandler} value={value}>
                    <option value="">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select> */}
                <Select
                    value={value}
                    onChange={changeHandler}
                    options={options}
                />
            </div>
        </div>
     );
}
 
export default Filter;