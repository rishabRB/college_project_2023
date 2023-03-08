import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    username:"",
    password:"",
}

export const adminLoginSlice = createSlice({
    name:'adminLogin',
    initialState,
    reducers:{
        login:(state,action)=>{
        console.log(action.payload)
    },
        logout:(state,action)=>{

        }
    }
})

export const {login,logout} = adminLoginSlice.actions

export default adminLoginSlice.reducer




//connet the database
//make custom url file
//write api's