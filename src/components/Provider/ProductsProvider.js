import React, { useState , useContext } from 'react';

const productContext = React.createContext();
const productContextDispatcher = React.createContext();



const ProductsProvider = ({children}) => {
    // const[count,setCount] = useState(4);
    const [products, setProducts] = useState([
        {id: "1", name: "book 1", price: "390 $", quantity: 1},
        {id: "2", name: "poco m3 64gig", price: "1000 $",quantity: 3},
        {id: "3", name: "Hailo GT1 XR", price: "200 $", quantity: 9},
        {id: "4", name: "Samsung S20 Ultra", price: "150 $", quantity: 4}
    ]);
    return ( 
        <productContext.Provider value={products}>
            <productContextDispatcher.Provider value={setProducts}>
            {children}
            </productContextDispatcher.Provider>
        </productContext.Provider>
    );

}
 
export default ProductsProvider;

export const useProducts = () => useContext(productContext);
export const useProductsAction = () => {
    const setProducts = useContext(productContextDispatcher);
    const products = useContext(productContext);
    const removeHandler = (id) => {
        console.log("click",id);
        const filterdProducts = products.filter((p)=>p.id !== id);
        setProducts(filterdProducts);
    };
    const incHandler = (id) => {
        /*
        const products = [...Products];
        const selectedItem = Products.find((p) => p.id === id);
        selectedItem.quantity++;
        console.log(selectedItem);
        setState({Products: products});*/
        // 1. id => ok
        // 2. index
        const index = products.findIndex((item) => item.id === id);
        // 3. clone the selected index and update the qty
        const product = { ...products[index] };
        product.quantity++; 
        // 4. update products
        const updatedProducts = [...products];
        updatedProducts[index] = product;
        setProducts(updatedProducts);
    };
    const decHandler = (id) => {
        const index = products.findIndex((item) => item.id === id);
        const product = { ...products[index] };
        if(product.quantity<=1){
            const filterdProducts = products.filter((p)=>p.id !== id);
            setProducts(filterdProducts)
        }
        else{
            product.quantity--;
            const updatedProducts = [...products];
            updatedProducts[index] = product;
            setProducts(updatedProducts);
        }

    };
    const changeHandler = (event,id) => {
        const index = products.findIndex((item) => item.id === id);
        console.log(index);
        const product = { ...products[index] };
        console.log(product);
        product.name = event.target.value;
        console.log(product.name);
        const updatedProducts = [...products];
        console.log(updatedProducts);
        updatedProducts[index] = product;
        console.log(updatedProducts[index]);
        console.log(updatedProducts);
        setProducts(updatedProducts); 
        
    };
    return {removeHandler , incHandler, decHandler, changeHandler}
}