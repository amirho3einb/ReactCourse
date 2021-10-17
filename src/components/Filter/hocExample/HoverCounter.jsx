import WithCounter from "../hoc/withCount";
const HoverCounter = ({countProp,increamentCountProp}) => {
    return ( 
        <div>
            <h2 onMouseOver={increamentCountProp}>hoverd {countProp} times</h2>
        </div>
     );
}
 
export default WithCounter(HoverCounter,5);