// import { createStore } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSliceReducer from "./counterSlice";
import authSliceReducer from "./authSlice";

// const CounterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   console.log(action);

//   switch (action.type) {
//     case "INCREASE":
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };

//     case "DECREASE":
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };

//     case "INCREASE_BY":
//       return {
//         ...state,
//         counter: state.counter + action.payload,
//       };

//     case "DECREASE_BY":
//       return {
//         ...state,
//         counter: state.counter - action.payload,
//       };

//     case "TOGGLE_COUNTER":
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }

// };

// const reducer = combineReducers({
//     counter: counterSliceReducer,
//   auth: authSliceReducer,
// })
// const store = createStore(reducer);
const store = configureStore({
  // reducer: counterSlice.reducer
  reducer: {
    counterReducer: counterSliceReducer,
    authReducer: authSliceReducer,
  },
});

export default store;
