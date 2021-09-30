import { useContext } from "react";
import { useCount , useCountAction } from "./CounterProvider";
const CounterOne = () => {
    const count = useCount();
    const {addOneHandler, addFiveHandler} = useCountAction();

    
    return ( 
        <div>
            <h2>count is : {count}</h2>
            <button onClick={addOneHandler}>add one</button>
            <button onClick={addFiveHandler}>add Five</button>
        </div>
    );
}
 
export default CounterOne;