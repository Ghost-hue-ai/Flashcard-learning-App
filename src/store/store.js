import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import subjectReducer from './subjectSlice'
import completedCardReducer from "./CompletedCard";

const loadState = () => {
  try {
    const serialized = localStorage.getItem("reduxState");
    return serialized ? JSON.parse(serialized) : undefined;
  } catch {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("reduxState", JSON.stringify(state));
  } catch(error) {
    console.log(error)}
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    subject :subjectReducer,
    card : completedCardReducer
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState({
    card: store.getState().card,
  });
});
export default store
