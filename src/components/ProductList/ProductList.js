import React, { Component } from 'react';
import Product from "../product/Product";
class ProductList extends Component {
    
    renderHandler = () => {
        if(this.props.products.length === 0)
            return <div>your shopping bsket is empty!!!</div>
        return this.props.products.map((product) => {
                    return <Product
                        product={product}
                        onChange={(e)=> this.props.onChange(e,product.id)} 
                        onDelete={() => this.props.onRemove(product.id)} 
                        onInc={() => this.props.onIncreament(product.id)} 
                        onDec={() => this.props.onDecreament(product.id)}
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