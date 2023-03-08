import { createSlice} from "@reduxjs/toolkit";

const initialState ={
    bookData:[],
}

export const bookMaintainSlice = createSlice({
    name:"bookMaintain",
    initialState,
    reducers:{
       addBook:(state,action)=>{

       },
       editBook:(state,action)=>{

       },
       returnBook:(state,action)=>{

       },
       issueBook:(state,action)=>{

       },
       issusedBook:(state,action)=>{

       }

    }
})