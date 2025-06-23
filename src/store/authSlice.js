import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData : {}
}

const authSlice = createSlice(
    {
        name:'flashcard',
        initialState,
        reducers:{
             login: (state,action)=>{
                state.status= true;
                state.userData = action.payload
             },
            updateData : (state,action)=> {
                state.userData = action.payload

            },

             logout:(state)=>{
                state.status = false;
                state.userData = {}
             }

        }

    }
)
export const {login , logout,updateData} = authSlice.actions
export default authSlice.reducer
