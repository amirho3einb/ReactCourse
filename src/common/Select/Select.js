import Select from "react-select";
import styles from "./select.module.css";
const SelectComponent = ({title , ...rest}) => {
    return ( 
        <div className={styles.filterSelect}>
            <span>{title}</span>
            <Select
                {...rest}
            />
        </div>
    );
}
 
export default SelectComponent;