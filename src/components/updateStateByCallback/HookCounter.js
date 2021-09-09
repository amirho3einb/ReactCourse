import { useState } from "react";

const HookCounter = () => {
    const [count,setCount] = useState(0);
    const addOneHandler = () =>{
        setCount( prevCount => prevCount+1);
    }
    const addTwoHandler = () =>{
        setCount(prevCount => prevCount + 2);
    }
    const addFiveHandler = () =>{
        for(let i=0; i<5; i++){
            setCount((prevCount)=>{
                return prevCount + 1;
            });
        }
    }
    // update state based on previous state => callback function !!!!!!!!
    return ( 
        <div>
            <h2>count - {count}</h2>
            <button onClick={addOneHandler}>add one</button>
            <button onClick={addTwoHandler}>add two</button>
            <button onClick={addFiveHandler}>add five</button>
        </div>
    );
}
 
export default HookCounter;