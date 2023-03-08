import { configureStore } from '@reduxjs/toolkit'
import  adminLoginSlice  from '../features/adminLoginSlice'
import { bookMaintainSlice } from '../features/bookMaintainSlice'

export default configureStore({
  reducer: {
    adminLogin:adminLoginSlice,
    bookMaintain:bookMaintainSlice,
  },
})

