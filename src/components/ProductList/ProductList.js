import React, { Component } from 'react';
import Product from "../product/Product";
class ProductList extends Component {
    renderHandler = () => {
        const {onChange,onRemove,onIncreament,onDecreament,products}= this.props;
        if(products.length === 0)
            return <div>your shopping bsket is empty!!!</div>
        return products.map((product) => {
                    return <Product
                        product={product}
                        onChange={(e)=> onChange(e,product.id)} 
                        onDelete={() => onRemove(product.id)} 
                        onInc={() => onIncreament(product.id)} 
                        onDec={() => onDecreament(product.id)}
                        />
            })
                
    }
    render() { 
       return(
           <div>{this.renderHandler()}</div>
       ) 
    } 
}
 
export default ProductList;