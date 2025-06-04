import {createSlice} from '@reduxjs/toolkit';

const initialState={
    users:localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [],
}
const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        userRegister:(state,action)=>{
            state.users.push(action.payload)
            localStorage.setItem("users",JSON.stringify(state.users))
        }
    }
})

export const {userRegister} = userSlice.actions;
export default userSlice.reducer;