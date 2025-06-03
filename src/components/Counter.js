import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";
// import {  useStore } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counterReducer);

  // const handleIncrement = (value) => {
  //   dispatch({type : value ? `INCREASE_BY` : 'INCREASE', payload : value})
  // }
  // const handleDecrement = (value) => {
  //   dispatch({type : value ? `DECREASE_BY`: 'DECREASE', payload : value})
  // }

  // const toggleCounterHandler = () => {
  //   dispatch({type: "TOGGLE_COUNTER"})
  // };

  const handleIncrement = (value) => {
    //to pass payload we just need to pass the value
    //edux tookit will autmoatical create an object like below
    // {type : SOME UNIQUE IDENTIFIER CREATED BY TOOLKIT, payload: value}
    dispatch(
      value ? counterActions.increaseBy(value) : counterActions.increase()
    );
  };
  const handleDecrement = (value) => {
    dispatch(
      value ? counterActions.decreaseBy(value) : counterActions.decrease()
    );
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterState.showCounter && (
        <div className={classes.value}>{counterState.counter}</div>
      )}
      <div className={classes.counterBtn}>
        <button
          onClick={() => {
            handleIncrement();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            handleIncrement(5);
          }}
        >
          +5
        </button>
        <button
          onClick={() => {
            handleDecrement(5);
          }}
        >
          -5
        </button>
        <button
          onClick={() => {
            handleDecrement();
          }}
        >
          -
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
