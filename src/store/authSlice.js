import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'authState',
    initialState : {name:  "", pswrd : "", isAuthenticated: false},
    reducers : {
        login(state,action) {
            state.name = action.payload.name;
            state.pswrd = action.payload.password;
            state.isAuthenticated = true;
        },
        logout(state,action) {
            state.name = action.payload.name;
            state.pswrd = action.payload.password;
            state.isAuthenticated = false;
        }
    }
});


export const authActions = authSlice.actions;
export default authSlice.reducer;