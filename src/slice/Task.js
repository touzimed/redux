import React from 'react'
import   {createSlice} from '@reduxjs/toolkit';
export const  taskListe=createSlice({
 name:'task',
 initialState:{value:[]},
 reducers:{
    addListe:(state,action)=>{state.value=[...state.value,action.payload]},
 },
 
});
export default taskListe.reducer;
export const{addListe}=taskListe.actions;