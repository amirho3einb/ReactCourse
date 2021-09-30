import WithCounter from "../hoc/withCount";

const ClickCounter = ({countProp,increamentCountProp}) => {
    return ( 
        <div>
            <h2 onClick={increamentCountProp}>hoverd {countProp} times</h2>
        </div>
     );
}
 
export default WithCounter(ClickCounter,10);