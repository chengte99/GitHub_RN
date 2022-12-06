import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        num: 1
    },
    reducers: {
        increment: (state, action) => {
            state.num = state.num + action.payload
        },
        decrement: (state, action) => {
            state.num = state.num - action.payload
        }
    }
})

export const {increment, decrement} = counterSlice.actions;
export const selectNum = state => state.counter.num;
export default counterSlice.reducer;