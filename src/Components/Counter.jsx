import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByValue, increment, incrementByValue } from "../Redux/feature/counter/Couterslice";


const Counter = () => {
    const {count }= useSelector((state) => state.counter);
    console.log(count);
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(incrementByValue(5))}>Increment 5</button> <br />
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <h1>Count: {count}</h1>
            <button onClick={()=> dispatch(decrement())}>Decrement</button> <br />
            <button onClick={() => dispatch(decrementByValue(5))}>Decrement 5</button>
        </div>
    );
};

export default Counter;