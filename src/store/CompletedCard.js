import {createSlice} from "@reduxjs/toolkit";
const initialState= {
    completedCards :{},
    completedSpanishCard: {},
    spanishCompleted: 0,
    englishCompleted: 0,
    recentLogs:[]
}

const cardSlice = createSlice({
    name : "card",
    initialState,
    reducers:{
        updateCard: (state, action) => {
            const { id, selectedChoice, correctAnswer } = action.payload;
            state.completedCards[id] = { selectedChoice, correctAnswer };
        },
        updateSpanishCardData : (state,action)=>{
            const { id, question, answer } = action.payload;

            state.spanishCompleted +=1
            state.completedSpanishCard[id] = {question,answer}
        },
        updateEnglishCardData : (state)=>{
            state.englishCompleted +=1
        },
        updateRecentLogs: (state, action) => {
            if (!state.recentLogs) {
                state.recentLogs = [];
            }
            state.recentLogs.unshift(action.payload);
        },




        resetCards: (state)=>{

            state.completedCards ={},
            state.completedSpanishCard= {},
            state.spanishCompleted= 0,
                state.englishCompleted= 0,
                state.recentLogs=[]
        }
    }
})



export const {updateCard,resetCards,updateRecentLogs,updateSpanishCardData,updateEnglishCardData} = cardSlice.actions
export default cardSlice.reducer