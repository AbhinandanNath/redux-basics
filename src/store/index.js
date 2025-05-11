// import { createStore } from "redux";
import  {configureStore} from '@reduxjs/toolkit';
import counterSliceReducer from './counterSlice';
import authSliceReducer from './authSlice';






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

// const store = createStore(CounterReducer);
const store  = configureStore({
    // reducer: counterSlice.reducer
    reducer: {counterReducer : counterSliceReducer, authReducer: authSliceReducer}
})



export default store;

function checkLongestWord(sentence) {
    var sentList = sentence.split(" "); console.log(sentList);
    var longWord = [];
    sentList.forEach(function(item) {
        if ( longWord.length > 0 && item.length > longWord[0].length){
            longWord = [];
            longWord.push(item)
        } else {
            longWord.push(item)
        }
       
    }) ;
    console.log(longWord[0])
  }
