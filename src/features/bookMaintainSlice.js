import { createSlice} from "@reduxjs/toolkit";

const initialState ={
    bookData:[],
}

export const bookMaintainSlice = createSlice({
    name:"bookMaintain",
    initialState,
    reducers:{
        addBooks:(state,action)=>{
            state.bookData = action.payload
        },
        clearBook:(state)=>{
            state.bookData = null
        }
    }
})

export const {addBooks,clearBook} = bookMaintainSlice.actions
export default bookMaintainSlice.reducer