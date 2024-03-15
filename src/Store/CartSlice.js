import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: "cart",
    initialState : [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
                     
        },
        remove(state, action){
            return state.filter((item) =>
                item.id !== action.payload
                )
        },
        // TotalAmount(state) {
        //     let sum = 0;
        //     for (let i = 0; i < state.length; i++) {
        //         sum += parseFloat(state[i].price);   //parse to float because the price comes as a string from API
        //     }
        //     return sum.toFixed(2);//round up to two decimal places
        // }
        
    },
})
export const { addToCart, remove } = cartSlice.actions

export  default cartSlice.reducer;