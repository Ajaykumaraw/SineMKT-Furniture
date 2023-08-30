import { createSlice } from '@reduxjs/toolkit'
import * as cartActionType from './cartActions.js'

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducers:{  
        addProducts:(state,action) => {
                state.products.push(action.payload)
                state.quantity += 1;
                state.total += action.payload.price; 
           
        },
        setQuentity: (state,action)=>{
            console.log(action.payload)
            state.products.Quntity = [ state.products.Quntity = action.payload]
        },
        removeProducts:(state,action) => {
            console.log("in reducer"+action.payload)
            const prod = state.products.filter(item => item.productID ===action.payload.productID).indexOf;
            console.log("in reducer"+prod)
            state.products.slice(prod);
            state.total -= action.payload.price; 
        }
    }

})

export const {addProducts,removeProducts,setQuentity} = cartSlice.actions;
export default cartSlice.reducer;