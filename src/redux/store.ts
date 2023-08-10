import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './user/sliceUser';


const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;