import React, { useState , useContext } from 'react';
import { useReducer } from 'react/cjs/react.development';
import {productData} from "../../db/products";

const productContext = React.createContext();
const productContextDispatcher = React.createContext();

// const initialState = [
//     {id: "1", name: "book 1", price: "390 $", quantity: 1},
//     {id: "2", name: "poco m3 64gig", price: "1000 $",quantity: 3},
//     {id: "3", name: "Hailo GT1 XR", price: "200 $", quantity: 9},
//     {id: "4", name: "Samsung S20 Ultra", price: "150 $", quantity: 4}
// ];
const reducer = (state, action) => {
    switch (action.type){
        case "increament":{
            const index = state.findIndex((item) => item.id === action.id);
            // 3. clone the selected index and update the qty
            const product = { ...state[index] };
            product.quantity++; 
            // 4. update products
            const updatedProducts = [...state];
            updatedProducts[index] = product;
            return updatedProducts;
        }
        case "decrement":{
            const index = state.findIndex((item) => item.id === action.id);
            const product = { ...state[index] };
            if(product.quantity<=1){
                const filterdProducts = state.filter((p)=>p.id !== action.id);
                return filterdProducts;
            }
            else{
                product.quantity--;
                const updatedProducts = [...state];
                updatedProducts[index] = product;
                return updatedProducts;
            }
        }    
        case "edit":{
            const index = state.findIndex((item) => item.id === action.id);
            const product = { ...state[index] };
            product.name = action.event.target.value;
            const updatedProducts = [...state];
            updatedProducts[index] = product;
            return updatedProducts; 
        }   
        case "remove":{
            const filterdProducts = state.filter((p)=>p.id !== action.id);
            return filterdProducts;
        }
        case "filter":{
            //console.log(action.event.target.value);
            const value = action.selectedOption.value;
            if(value === ""){
                return productData;
            }
            else{
                const updatedProducts = productData.filter(
                    (p)=>p.availableSizes.indexOf(value) >= 0
                ); // "L" => ["L", "XS", "M"]
                return updatedProducts;
            }
        }
        case "sort":{
            const value = action.selectedOption.value;
            const products = [...state];
            if(value === "lowest"){
                const sortedProducts = products.sort((a, b) => {
                    if (a.price > b.price) {
                      return 1;
                    }
                    if (a.price < b.price) {
                      return -1;
                    }
                    return 0;
                });
                return sortedProducts;
            }
            else{
                const sortedProducts = products.sort((a, b) => {
                    if (a.price < b.price) {
                      return 1;
                    }
                    if (a.price > b.price) {
                      return -1;
                    }
                    return 0;
                });
                return sortedProducts;
            }
        }
        case "search": {
            const value = action.event.target.value;
            if(value === ""){
                return productData;
            }
            else{
                const filterdProducts = productData.filter((p) => 
                    p.title.toLowerCase().includes(value.toLowerCase())
                );
                return filterdProducts;
            }
        }
        default:
            return state;
    }
};

const ProductsProvider = ({children}) => {
    // const[count,setCount] = useState(4);
    const [products, dispatch] = useReducer(reducer, productData);

    return ( 
        <productContext.Provider value={products}>
            <productContextDispatcher.Provider value={dispatch}>
            {children}
            </productContextDispatcher.Provider>
        </productContext.Provider>
    );

}
 
export default ProductsProvider;

export const useProducts = () => useContext(productContext);
export const useProductsAction = () => useContext(productContextDispatcher);