import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import styles from './header.module.css'
import { openCart } from '../../src/features/cartProducts/cartSlice'

export default function Header(){
    const productsInCart = useAppSelector((state) => state.cart.productsInCart)

    const isCartOpen = useAppSelector((state) => state.cart.isCartOpen)

    const dispatch = useAppDispatch()
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>MKS</h1>
                <span>Sistemas</span>
            </div>

            <div 
                className={styles.cartContainer}
                onClick={() => dispatch(openCart(!isCartOpen))}
            >
                <div 
                    className={styles.cart}
                >   
                    <Image 
                        src='/images/cart.svg'
                        width={18}
                        height={18} 
                        alt='cart'/>
                    <span>
                        {productsInCart.reduce((acumulator, current) => 
                            acumulator + current.quantity, 0
                        )}
                    </span>
                </div>  
            </div>
        </header>
    )
}