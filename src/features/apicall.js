import { publicRequest } from '../components/requestMethod'
import {loginFailure,loginStart,loginSuccess } from '../features/adminLoginSlice'




export const LoginUser = async (dispatch,user)=>{
        try{
        dispatch(loginStart())
        const res = await publicRequest.get(`user/login?username=${user.username}&password=${user.password}`)
        dispatch(loginSuccess(res.data))
        localStorage.setItem("user",res.data.username)
        }
        catch(err){
            dispatch(loginFailure())
        }
}
