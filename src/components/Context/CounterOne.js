import { useContext } from "react";
import { useCount , useCountAction } from "./CounterProvider";
const CounterOne = () => {
    const count = useCount();
    const dispatch = useCountAction();
    console.log("action:"+dispatch);
    
    return ( 
        <div>
            <h2>count is : {count}</h2>
            <button onClick={()=>dispatch({ type: "add", value: 1 })}>add one</button>
            <button onClick={()=>dispatch({ type: "reset" })}>reset</button>
            <button onClick={()=>dispatch({ type: "decreament", value: 1 })}>dec one</button>
        </div>
    );
}
 
export default CounterOne;