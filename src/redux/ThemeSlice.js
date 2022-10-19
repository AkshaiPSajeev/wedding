import {createSlice} from '@reduxjs/toolkit'

export const themeslice=createSlice(
    {
        name:'dark',
        initialState:{
           dark:false
        },
        reducers:{
           
            setDarkTheme:(state)=>{state.dark=true},
            unsetDarkTheme:(state)=>{state.dark=false}
            
        }
    }
);

export const {setDarkTheme,unsetDarkTheme}=themeslice.actions;
export default themeslice.reducer;
