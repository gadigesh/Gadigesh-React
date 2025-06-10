import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItmes: (state, action) => {
            //mutating the state
            // venilla(older) => don't mutate state
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop(action.payload);
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        },
    },
});
export const { addItmes, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
