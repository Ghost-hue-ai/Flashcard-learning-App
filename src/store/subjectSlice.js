import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subjectId:''

};

const subSlice = createSlice({
  name: "flashcard",
  initialState,
  reducers: {
    getSubjectId : (state,action)=>{
      state.subjectId = action.payload
        
    }
   
  },
});
export const { getSubjectId } = subSlice.actions;
export default subSlice.reducer;
