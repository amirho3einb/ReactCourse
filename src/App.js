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
import ProductsProvider from "./components/Provider/ProductsProvider";




const App = () => {
    return ( 
         <>
         <ProductsProvider>
            <div className="container" id="title">
                <NavBar /> 
                <ProductList
                />
            </div>
         </ProductsProvider>
         </>
    );
}
 
export default App;
 