import { useReducer , useState } from "react";
const intialState = 0;
const reducer = (state, action) => {
    switch (action.type){
        case "add":
            return state + action.value;
        case "decrement":
            return state - action.value;
        case "reset":
            return intialState;
        default:
            return state;
    }
};

const CounterReducerTwo = () => {
    // 1. useState = > state managment
    // 2. reduce

    // steps: 
    // 1. import usrReducer()
    // 2. useReducer(reducer,initialState);
    // 3. return : [count,dispatch]
    // 4. reducer(state,action)
   
    const [count, dispatch] = useReducer(reducer, intialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, intialState);

    return ( 
        <div>
            <h2>count one is : {count}</h2>
            <h2>count two is : {countTwo}</h2>
            <div>
                <button onClick={() => dispatch({ type: "add" , value:1 })}>add one</button>
                <button onClick={() => dispatch({ type: "add" , value:5 })}>add five</button>
                <button onClick={() => dispatch({ type: "decrement" , value:1 })}>decrement one</button>
                <button onClick={() => dispatch({ type: "reset" })}>reset</button>
            </div>
            <div>
                <button onClick={() => dispatchTwo({ type: "add" , value:1 })}>add one</button>
                <button onClick={() => dispatchTwo({ type: "add" , value:5 })}>add five</button>
                <button onClick={() => dispatchTwo({ type: "decrement" , value:1 })}>decrement one</button>
                <button onClick={() => dispatchTwo({ type: "reset" })}>reset</button>
            </div>
            
        </div>
    );
}
 
export default CounterReducerTwo;