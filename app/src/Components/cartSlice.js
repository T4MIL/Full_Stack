import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0,
        totalQUantity: 0,
    },
    reducers: {
        addItem: (state,action) => {
            const exist = (state.items).findIndex(x => x._id === action.payload._id)
            if (exist >= 0) {
                state.items[exist].quantity += 1
            }
            else {
                const product = action.payload
                state.items.push({
                    ...product,
                    quantity: 1,
                });
            }
            // const abc=state.items.push(action.payload)
            // console.log(abc)
            state.totalPrice += action.payload.price
            state.totalQUantity++
        },
        removeItem: (state,action) => {
            const exist = (state.items).findIndex(x => x.id === action.payload.id)
            // console.log(exist)
            if (exist >= 0) {
                state.items = state.items.toSpliced(exist, 1)
            }
            state.totalQUantity -= action.payload.quantity
            state.totalPrice -= (action.payload.price * action.payload.quantity)
        },
        clearItem: (state) => {
            state.items = []
        }
    }
})
export const { addItem, removeItem, clearCart, reduceItem } = cartSlice.actions
export default cartSlice.reducer