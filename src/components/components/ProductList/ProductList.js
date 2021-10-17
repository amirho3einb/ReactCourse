import React, { Component } from 'react';
import Product from "../product/Product";
import { useProducts, useProductsAction } from '../Provider/ProductsProvider';

const ProductList = (props) => {
    const products = useProducts();
    const dispatch = useProductsAction();
    const renderHandler = () => {
        if(products.length === 0)
            return <div>your shopping bsket is empty!!!</div>
        return products.map((product) => {
                    return <Product
                        product={product}
                        onChange={(e)=> dispatch({type: "edit" , id: product.id, event: e})} 
                        onDelete={() => dispatch({type: "remove" , id: product.id })} 
                        onInc={() => dispatch({type: "increament" , id: product.id })} 
                        onDec={() => dispatch({type: "decrement" , id: product.id })}
                        />
            })
                
    }
    return ( 
        <div>{renderHandler()}</div>
    );
}
 
export default ProductList;