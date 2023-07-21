// import React from 'react'; 

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementBy10, reset } from './counterSlice';

const CounterViewing = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => { dispatch(increment()) }}>Increment</button> &nbsp;
            <button onClick={() => { dispatch(decrement()) }}>Decrement</button> &nbsp;
            <button onClick={() => { dispatch(reset()) }}>Reset</button>&nbsp;
            <button onClick={() => { dispatch(incrementBy10(10)) }}>Increment By 10</button>
        </div>
    );
};

export default CounterViewing;
