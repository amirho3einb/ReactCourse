import React, { useState , useContext } from 'react';

const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();

const CounterProvider = ({children}) => {
    const[count,setCount] = useState(4);
    console.log("CounterProvider" + count);
    return ( 
        <CounterContext.Provider value={count}>
            <CounterContextDispatcher.Provider value={setCount}>
            {children}
            </CounterContextDispatcher.Provider>
        </CounterContext.Provider>
    );
}
 
export default CounterProvider;

export const useCount = () => useContext(CounterContext);
export const useCountAction = () => useContext(CounterContextDispatcher);