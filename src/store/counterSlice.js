
import  {createSlice} from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name : 'counterState',
    initialState : { counter: 0, showCounter: true },
    reducers: {
        increase(state) {
            state.counter++;
        },
        increaseBy (state,action) {
            state.counter += action.payload ;
        },
        decrease(state) {
            state.counter--;
        },
        decreaseBy(state, action) {
            if(!isNaN(action.payload)) {
                state.counter -= action.payload ;
            } else {
                return state.counter;
            }
            
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }

    }
});


export const counterActions = counterSlice.actions;
export default counterSlice.reducer;