import { createSlice } from '@reduxjs/toolkit'

const initialState={
    thali:[]
  
  }

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
        addtothali: (state, action) => {
        
        state.thali.push(action.payload) 
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtothali } = counterSlice.actions

export default counterSlice.reducer