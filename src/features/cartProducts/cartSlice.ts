import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../utils/types';

export interface CartState {
    productsInCart: Product[],
    isCartOpen: boolean,
    cartTotalAmount: number
}

const initialState: CartState = {
    productsInCart: [],
    isCartOpen: false,
    cartTotalAmount: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<Product>) => {
            const productInCart = state.productsInCart.find(product => product.id === action.payload.id)
            if(!productInCart){
                state.productsInCart.push({...action.payload, quantity: 1})

                state.cartTotalAmount = state.productsInCart.reduce(
                    (previous, current) => previous += current.price * current.quantity, 0)

            } else {
                productInCart.quantity++
                state.cartTotalAmount = state.cartTotalAmount = state.productsInCart.reduce(
                    (previous, current) => previous += current.price * current.quantity, 0)
            }
        },
        deleteItemFromCart: (state, action: PayloadAction<Product>) => {
            const productInCartIndex = state.productsInCart.findIndex(product => product.id === action.payload.id)

            if(state.productsInCart[productInCartIndex].quantity === 1) {
                state.productsInCart.splice(productInCartIndex, 1)

                state.cartTotalAmount = state.productsInCart
                .reduce((previous, current) => previous += current.price * current.quantity, 0)
            } else {
                state.productsInCart[productInCartIndex].quantity--

                state.cartTotalAmount = state.productsInCart
                .reduce((previous, current) => previous += current.price * current.quantity, 0)
            }
        },
        deleteProductFromCart: (state, action: PayloadAction<Product>) => {

            state.productsInCart = state.productsInCart.filter(product => product.id !== action.payload.id)

            state.cartTotalAmount = state.productsInCart
                .reduce((previous, current) => previous += current.price * current.quantity, 0)

        },
        openCart: (state, action: PayloadAction<boolean>) => {
            state.isCartOpen = action.payload
        }
    }
})

export const {addItemToCart, deleteItemFromCart, deleteProductFromCart, openCart} = cartSlice.actions

export default cartSlice.reducer