import {useEffect} from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { openCart } from '../../src/features/cartSlice'
import CartItems from '../cartItems/cartItems'
import styles from './cart.module.css'

export default function Cart(){

  const dispatch = useAppDispatch()
  const handleClose = () => dispatch(openCart(false))
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen)

  const productsInCart = useAppSelector((state) => state.cart.productsInCart)
  const total = useAppSelector((state) => state.cart.cartTotalAmount)
  
  return (
      <aside className={styles.cart} style={isCartOpen ? {visibility: "visible"} : {visibility: "hidden"}}>
          <div className={styles.cartHeader}>
              <h2>Carrinho de Compras</h2>
              <div>
                  <button className={styles.close} onClick={handleClose}>X</button>
              </div>
          </div>

          <CartItems/>
        
          {productsInCart.length > 0 ? (
                <>
                    <div className={styles.total}>
                      <span>Total:</span>
                      <span>R${total}</span>
                    </div>
    
                    <button className={styles.buyBtn}>Finalizar Compra</button>
                </>
                ) : (
                <div></div>
            )}
          
      </aside>
  )
}
