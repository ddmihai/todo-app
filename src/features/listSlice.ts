import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface ListState {
    value: string[]
}


const initialState: ListState = {
    value: []
}


export const listSlice = createSlice({
    name: 'list',
    initialState,

    reducers: {
        
        // Create list 
        addItem: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload) 
        },

        // Remove item
        removeItem: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1);
        }
    }
});     


export const { addItem, removeItem } = listSlice.actions;


export default listSlice.reducer;