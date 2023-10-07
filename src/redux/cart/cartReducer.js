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
              if(state.products.includes(action.payload)){
                console.log('item hai')
              }else{
                state.products.push(action.payload)
                state.quantity += 1;
                state.total += action.payload.price; 
              }
               
           
        },
        removeProducts:(state,action) => {
           state.products.pop()
            state.total -= action.payload.price; 
        },
        setQuentity:(state,action) => {
          
            console.log(state)  
        },
        increaseQuentity:(state,action)=>{
            console.log(action.payload)
        //    const product =  state.products.filter((item)=> item.productID ==  action.payload.productID )
        //    product.quantity = action.payload.count;
        },
        decreaseQuentity:(state,action)=>{
            console.log(action.payload)
        }
    }

})

export const {addProducts,removeProducts,setQuentity,increaseQuentity,decreaseQuentity} = cartSlice.actions;
export default cartSlice.reducer;