import { useContext } from "react";
import { useCount , useCountAction } from "./CounterProvider";
const CounterOne = () => {
    const count = useCount();
    const setCount = useCountAction();
    console.log("CounterOne" + count);
    return ( 
        <div>
            <h2>count is : {count}</h2>
            <button onClick={() => setCount(count+1)}>add one</button>
        </div>
    );
}
 
export default CounterOne;