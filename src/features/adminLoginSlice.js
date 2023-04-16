import { createSlice } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";
// const {isFetching}=useSelector((state)=>state.adminLogin)
// import axios from "axios";

const initialState= {
    isFetching:false,
    currUser:null,
    error:false
}

const adminLoginSlice = createSlice({
    name:'adminLogin',
    initialState,
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false;
            state.currUser=action.payload
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.error=true
        },
        logout:(state)=>{
          state.isFetching=false;
          state.currUser=null
        }
    }
})

export const {loginStart,loginSuccess,loginFailure,logout} = adminLoginSlice.actions
export default adminLoginSlice.reducer
