import { useState } from "react";
import Wrapper from "./Wrapper";

const WithCounter = (WrapperedComponent,increamentValue) => {
    const UpdatedComponent = (props) =>{
        const [count,setCount] = useState(0);
        const increamentCount = () => {
            setCount(count+increamentValue);
        }
        return <WrapperedComponent countProp={count} increamentCountProp={increamentCount} {...props}/>;
    };
    return UpdatedComponent;
};

 
export default WithCounter;