import { configureStore } from '@reduxjs/toolkit';

// Import reducers
import listReducer from '../features/listSlice'


export const store = configureStore({
    reducer: {
        list: listReducer
    }
});


export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
