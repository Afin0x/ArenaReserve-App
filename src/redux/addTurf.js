import {createSlice} from '@reduxjs/toolkit'

const initialState={
    turfs:JSON.parse(localStorage.getItem("turfs"))||[],
}
const addTurf = createSlice({
    name:'addTurf',
    initialState,
    reducers:{
        addTurfs:(state,action)=>{
            state.turfs.push(action.payload);
            localStorage.setItem("turfs",JSON.stringify(state.turfs));
        }
    }
})

 export const {addTurfs} =  addTurf.actions;
 export default addTurf.reducer;