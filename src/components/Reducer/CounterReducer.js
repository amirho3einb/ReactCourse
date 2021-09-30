import { useReducer , useState } from "react";
const intialState = 0;
const reducer = (state, action) => {
    switch (action){
        case "addOne":
            return state + 1;
        case "addFive":
            return state + 5;
        default:
            return state;
    }
};

const CounterReducer = () => {
    // 1. useState = > state managment
    // 2. reduce

    // steps: 
    // 1. import usrReducer()
    // 2. useReducer(reducer,initialState);
    // 3. return : [count,dispatch]
    // 4. reducer(state,action)
   
    const [count, dispatch] = useReducer(reducer, intialState);

    return ( 
        <div>
            <h2>count is : {count}</h2>
            <button onClick={() => dispatch("addOne")}>add one</button>
            <button onClick={() => dispatch("addFive")}>add Five</button>
        </div>
    );
}
 
export default CounterReducer;