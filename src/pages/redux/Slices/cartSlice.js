import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const existingItem=state?.find(item=>item.id==action.payload.id)
            if(existingItem){
                existingItem.quantity +=1
                existingItem.totalPrice=existingItem.quantity*existingItem.totalPrice
                const remainingItems=state?.filter(item=>item.id!=existingItem.id)
                state=[...remainingItems,existingItem]
            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        removeCartItem:(state,action)=>{
            return state.filter(item=>item?.id!=action.payload)
        },
         incrementItem:(state,action)=>{
            const existingProduct=state.find(item=>item?.id==action.payload)
            const remainingProducts=state.filter(item=>item?.id!=action.payload)
            existingProduct.quantity+=1
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
            state=[...remainingItems,existingItem]

        },
         decrementItem:(state,action)=>{
            const existingProduct=state.find(item=>item?.id==action.payload)
            const remainingProducts=state.filter(item=>item?.id!=action.payload)
            existingProduct.quantity-=1
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
            state=[...remainingItems,existingItem]

        },
        emptyCart:(state)=>{
            return[]
        }
    }
})
export const {addToCart,removeCartItem,incrementItem,decrementItem,emptyCart}= cartSlice.actions
export default cartSlice.reducer