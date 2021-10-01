import React, { Component } from 'react';
import Product from "../product/Product";
import { useProducts, useProductsAction } from '../Provider/ProductsProvider';

const ProductList = (props) => {
    const products = useProducts();
    const {removeHandler , incHandler, decHandler, changeHandler} = useProductsAction();
    const renderHandler = () => {
        if(products.length === 0)
            return <div>your shopping bsket is empty!!!</div>
        return products.map((product) => {
                    return <Product
                        product={product}
                        onChange={(e)=> changeHandler(e,product.id)} 
                        onDelete={() => removeHandler(product.id)} 
                        onInc={() => incHandler(product.id)} 
                        onDec={() => decHandler(product.id)}
                        />
            })
                
    }
    return ( 
        <div>{renderHandler()}</div>
    );
}
 
export default ProductList;