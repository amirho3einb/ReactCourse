import ProductList from "./components/ProductList/ProductList";
import HookCounter from "./components/updateStateByCallback/HookCounter";
import ClassCounter from "./components/updateStateByCallback/ClassCounter";
import HookObject from "./components/updateStateByCallback/HookObject";
import HookArray from "./components/updateStateByCallback/HookArray";
import {Component, useState} from 'react';
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CounterProvider from "./components/Context/CounterProvider";
import CounterOne from "./components/Context/CounterOne";
import CounterReducer from "./components/Reducer/CounterReducer";
import CounterReducerTwo from "./components/Reducer/CounterReducerTwo";

class App extends Component {
    state = {
        Products: [
            {id: "1", name: "book 1", price: "390 $", quantity: 1},
            {id: "2", name: "poco m3 64gig", price: "1000 $",quantity: 3},
            {id: "3", name: "Hailo GT1 XR", price: "200 $", quantity: 9},
            {id: "4", name: "Samsung S20 Ultra", price: "150 $", quantity: 4}
        ],  
    }
    removeHandler = (id) => {
        console.log("click",id);
        const filterdProducts = this.state.Products.filter((p)=>p.id !== id);
        this.setState({Products : filterdProducts})
    }
    incHandler = (id) => {
        /*
        const products = [...this.state.Products];
        const selectedItem = products.find((p) => p.id === id);
        selectedItem.quantity++;
        console.log(selectedItem);
        this.setState({Products: products});*/
        // 1. id => ok
        // 2. index
        const index = this.state.Products.findIndex((item) => item.id === id);
        console.log(index);
        // 3. clone the selected index and update the qty
        const product = { ...this.state.Products[index] };
        product.quantity++; 
        // 4. update products
        const products = [...this.state.Products];
        products[index] = product;
        console.log(products[index]);
        this.setState({ Products : products });
    }
    decHandler = (id) => {
        /*const products = [...this.state.Products];
        const selectedItem = products.find((p) => p.id === id);
        if(selectedItem.quantity<=1){
            const filterdProducts = this.state.Products.filter((p)=>p.id !== id);
            this.setState({Products : filterdProducts})
        }
        else{
            selectedItem.quantity--;
            console.log(selectedItem);
            this.setState({Products: products});
        }*/
        const index = this.state.Products.findIndex((item) => item.id === id);
        const product = { ...this.state.Products[index] };
        if(product.quantity<=1){
            const filterdProducts = this.state.Products.filter((p)=>p.id !== id);
            this.setState({Products : filterdProducts})
        }
        else{
            product.quantity--;
            const products = [...this.state.Products];
            products[index] = product;
            this.setState({Products : products});
        }

    }
    changeHandler = (event,id) => {
        const index = this.state.Products.findIndex((item)=>item.id = id);
        const product = { ...this.state.Products[index] };
        product.name = event.target.value;
        const products = [...this.state.Products];
        products[index] = product;
        this.setState({Products: products}); 
        /*
        const products = [...this.state.Products];
        const selectedItem = products.find((p) => p.id === id);
        selectedItem.name = event.target.value;
        this.setState({Products: products}); 
        */
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("app.js", prevState);
    }
    

    render(){
        return(
            <>
            {/* <CounterReducerTwo /> */}
            {/* <CounterReducer /> */}
            <CounterProvider>
                <p>welocome to my App</p>
                <CounterOne />
            </CounterProvider>
            </>
            // <div className="container" id="title">
            //     <NavBar totalItems={this.state.Products.filter((p) => p.quantity > 0).length}/>
            //     <ProductList products={this.state.Products}
            //     onRemove = {this.removeHandler}
            //     onIncreament = {this.incHandler}
            //     onChange = {this.changeHandler}
            //     onDecreament = {this.decHandler}
            //     />
             
            // </div>
        )
    }
}



 
export default App;
 