import { useState } from "react";
import { useProductsAction } from "../Provider/ProductsProvider";
import Select from 'react-select';
import styles from "./Filter.module.css";
import SelectComponent from "../../common/Select/Select";


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
    const sortOptions = [
        { value: 'highest', label: 'highest' },
        { value: 'lowest', label: 'lowest' },
    ];

    const dispatch = useProductsAction();
    const [value, setValue] = useState("");
    const [sort, setSort] = useState("");
    const changeHandler = (selectedOption) => {
        console.log(selectedOption);
        dispatch({type: "filter", selectedOption});
        dispatch({type: "sort", selectedOption : sort});
        setValue(selectedOption);
    };
    const sortHandler = (selectedOption) => {
        console.log(selectedOption);
        dispatch({type: "sort", selectedOption});
        setSort(selectedOption);
    };
    
    return ( 
        <div className={styles.mainRowFilters}>
            <p>filter produts based on:</p>
            <SelectComponent 
                title = "filter by size"
                value={value}
                onChange={changeHandler}
                options={options}
            />
            {/* <div className={styles.filterSelect}>
                order by
                <Select
                    value={value}
                    onChange={changeHandler}
                    options={options}
                />
            </div> */}
            <SelectComponent
                title= "filter by price"
                value={sort}
                onChange={sortHandler}
                options={sortOptions}
            />
            {/* <div className={styles.filterSelect}>
                Sort by Price
                <Select
                    value={sort}
                    onChange={sortHandler}
                    options={sortOptions}
                />
            </div> */}
        </div>
     );
}
 
export default Filter;