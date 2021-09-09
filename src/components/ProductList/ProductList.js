import React, { Component } from 'react';
import Product from "../product/Product";
class ProductList extends Component {
    state = {
        Products: [
            {id: "1", name: "book 1", price: "390 $", quantity: "1"},
            {id: "2", name: "poco m3 64gig", price: "1000 $",quantity: "3"},
            {id: "3", name: "Hailo GT1 XR", price: "200 $", quantity: "9"},
            {id: "4", name: "Samsung S20 Ultra", price: "150 $", quantity: "4"}
        ],  
    }
    removeHandler = (id) => {
        console.log("click",id);
        const filterdProducts = this.state.Products.filter((p)=>p.id !== id);
        this.setState({Products : filterdProducts})
    }
    incHandler = (id) => {
        const products = [...this.state.Products];
        const selectedItem = products.find((p) => p.id === id);
        selectedItem.quantity++;
        console.log(selectedItem);
        this.setState({Products: products});
    }
    decHandler = (id) => {
        const products = [...this.state.Products];
        const selectedItem = products.find((p) => p.id === id);
        if(selectedItem.quantity<=1){
            const filterdProducts = this.state.Products.filter((p)=>p.id !== id);
            this.setState({Products : filterdProducts})
        }
        else{
            selectedItem.quantity--;
            console.log(selectedItem);
            this.setState({Products: products});
        }
    }
    changeHandler = (event,id) => {
        const products = [...this.state.Products];
        const selectedItem = products.find((p) => p.id === id);
        selectedItem.name = event.target.value;
        this.setState({Product: products}); 
    }

    renderHandler = () => {
        if(this.state.Products.length === 0)
            return <div>your shopping bsket is empty!!!</div>
        return this.state.Products.map((product) => {
                    return <Product
                        product={product}
                        onChange={(e)=> this.changeHandler(e,product.id)} 
                        onDelete={() => this.removeHandler(product.id)} 
                        onInc={() => this.incHandler(product.id)} 
                        onDec={() => this.decHandler(product.id)}
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