import { useProductsAction } from "../Provider/ProductsProvider";


const Filter = () => {
    const dispatch = useProductsAction();
    return ( 
        <div>
            <p>filter produts based on:</p>
            <div>
                order by
                <select onChange={(e)=> dispatch({type: "filter", event: e})}>
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