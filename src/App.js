import ProductList from "./components/ProductList/ProductList";
import HookCounter from "./components/updateStateByCallback/HookCounter";
import ClassCounter from "./components/updateStateByCallback/ClassCounter";
import HookObject from "./components/updateStateByCallback/HookObject";
import HookArray from "./components/updateStateByCallback/HookArray";
import {Component, useState} from 'react';
import "./App.css";
class App extends Component {
    state = {
        count : 0,
    };
    /*clickHandler = () => {
         setState() => to update state
        this.setState({
            Products: [
                {id: "1", name: "book 1", price: "3900 $"},
                {id: "2", name: "poco m3 64gig", price: "10000 $"},
                {id: "3", name: "Hailo GT1 XR", price: "2000 $"},
                {id: "4", name: "Samsung S20 Ultra", price: "1500 $"}
            ],
        })
    }*/
    /*constructor(props){
        super(props);
        this.countHandler = this.countHandler.bind(this);
    }
    countHandler(id){
        console.log("clicked Id: ",id);
        this.setState({count: this.state.count + 1});
    }*/
    render(){
        return(
            <div className="container" id="title">
                <h1>Shopping App</h1>
                <ProductList/>
                {/*<button onClick={this.clickHandler}>change price</button>
                <button onClick={() => this.countHandler(2)}>{this.state.count}</button>*/}
            </div>
        )
    }
}
/*const App = () => {
    return(
        <div className="container" id="title">
            <h1>Shopping App</h1>
            <Product id="1" name="book 1"/>
            <Product id="2" name="poco m3 64gig"/>
            <Product id="3" name="Hailo GT1 XR"/>
            <Product id="4" name="Samsung S21 Ultra"/>
        </div>
    )
  };*/
/*const App = () => {
    const [products, setProducts] = useState([
        {id: "1", name: "book 1", price: "390 $"},
        {id: "2", name: "poco m3 64gig", price: "1000 $"},
        {id: "3", name: "Hailo GT1 XR", price: "200 $"},
        {id: "4", name: "Samsung S20 Ultra", price: "150 $"}
    ]);
    const clickHandler = () =>{
        setProducts([
            {id: "1", name: "book 1", price: "3900 $"},
            {id: "2", name: "poco m3 64gig", price: "10000 $"},
            {id: "3", name: "Hailo GT1 XR", price: "2000 $"},
            {id: "4", name: "Samsung S20 Ultra", price: "1500 $"},
        ]);
    };
    return(
        <div className="container" id="title">
            <h1>Shopping App</h1>
            {products.map((product) => {
                return <Product id={product.id} name={product.name} price={product.price}/>
            })}
            <button onClick={clickHandler}>change price</button>
        </div>
    )
}*/
/*const App = () => {
    return ( 
        <div className="App">
            {<HookCounter />}
            {<ClassCounter />}
            {<HookObject />}
            <HookArray />
        </div>
    );
}*/
 
export default App;
 