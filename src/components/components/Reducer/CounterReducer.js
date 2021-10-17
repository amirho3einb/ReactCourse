import { useReducer , useState } from "react";
const intialState = {
    firstCounter : 0,
    secondCounter : 0,
};
const reducer = (state, action) => {
    switch (action.type){
        case "add":
            return {...state, firstCounter : state.firstCounter + action.value};
        case "decrement":
            return {...state, firstCounter : state.firstCounter - action.value};
        case "add2":
            return {...state, secondCounter : state.secondCounter + action.value};
        case "decrement2":
            return {...state, secondCounter : state.secondCounter - action.value};
        case "reset":
            return intialState;
        default:
            return state;
    }
};


const CounterReducer = () => {
    // 1. useState = > state managment
    // 2. reduce

    // steps: 
    // 1. import useReducer()
    // 2. useReducer(reducer,initialState);
    // 3. return : [count,dispatch]
    // 4. reducer(state,action)
   
    const [count, dispatch] = useReducer(reducer, intialState);

    return ( 
        <div>
            <h2>count one is : {count.firstCounter}</h2>
            <h2>count otwo is : {count.secondCounter}</h2>
            <div>
                <button onClick={() => dispatch({ type: "add" , value:1 })}>add one</button>
                <button onClick={() => dispatch({ type: "add" , value:5 })}>add five</button>
                <button onClick={() => dispatch({ type: "decrement" , value:1 })}>decrement one</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: "add2" , value:1 })}>add one</button>
                <button onClick={() => dispatch({ type: "add2" , value:5 })}>add five</button>
                <button onClick={() => dispatch({ type: "decrement2" , value:1 })}>decrement one</button>
            </div>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        </div>
    );
}
 
export default CounterReducer;