import React from 'react'
import   {createSlice} from '@reduxjs/toolkit';
export const  taskListe=createSlice({
 name:'task',
 initialState:{value:[{id:"1",description:"work",isDone:"done"}]},
 reducers:{
    addListe:(state,action)=>{state.value=[...state.value,action.payload]},
 },
 
});
export default taskListe.reducer;
export const{addListe}=taskListe.actions;