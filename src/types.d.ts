import { configureStore, createSlice } from '@reduxjs/toolkit';

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

declare module '@reduxjs/toolkit' {
  export function createSlice<State = any, CaseReducers = any>(
    options: CreateSliceOptions<State, CaseReducers>
  ): Slice<State>;
}

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
  export function useDispatch<TDispatch = AppDispatch>(): TDispatch;
}

const store = configureStore({}); 