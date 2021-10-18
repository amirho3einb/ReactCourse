import Select from "react-select";
import styles from "./select.module.css";
const SelectComponent = ({value, onChange, options, title}) => {
    return ( 
        <div className={styles.filterSelect}>
            <span>{title}</span>
            <Select
                value={value}
                onChange={onChange}
                options={options}
            />
        </div>
    );
}
 
export default SelectComponent;