import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "./counterSlice";
import React, { useState } from "react"; // Import useState

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0); // Define incrementAmount and setIncrementAmount
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h2>{count}</h2>
      <Button label="Increment" onClick={() => dispatch(increment())} />
      <Button label="Decrement" onClick={() => dispatch(decrement())} />
      <input
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
      />
      <Button
        label="Increment by Amount"
        onClick={() => dispatch(incrementByAmount(incrementAmount))}
      />
      <Button
        label="Increment Async"
        onClick={() => dispatch(incrementAsync(incrementAmount))}
      />
    </>
  );
};

export default Counter;
