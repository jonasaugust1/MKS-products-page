import Image from 'next/image'
import styles from './inventory.module.css'
import {GetProductResults} from '../../utils/types'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { addItemToCart, openCart} from '../../src/features/cartSlice'

export default function Inventory({products}: GetProductResults) {
    
    const dispatch = useAppDispatch()

    const productsInCart = useAppSelector((state) =>
        state.cart.productsInCart.filter((product) => product.id === product.id)
    )

    const isCartOpen = useAppSelector((state) => state.cart.isCartOpen)

    return (
        <div className={styles.productsContainer}>
            {products.map(product => (
                <div key={product.id} className={styles.productCard}>
                    <div className={styles.imageContainer}>
                        <Image
                            loader={() => product.photo}
                            src={product.photo}
                            alt={product.name}
                            width={150}
                            height={150}
                        />
                    </div>

                <div className={styles.infoContainer}>

                    <div className={styles.nameContainer}>
                        <h5>{product.name}</h5>
                    </div>

                    <div className={styles.priceContainer}>
                        <span>R${product.price}</span>
                    </div>

                </div>
                    

                <p>{product.description}</p>
                    
                <button className={styles.buyBtn} onClick={() => {
                    dispatch(addItemToCart(product))
                    dispatch(openCart(!isCartOpen))
                }}>

                    <div>
                        <Image
                            src='/images/shopping-bag.svg'
                            alt='buy'
                            width={20}
                            height={20}
                        />
                    </div>

                Comprar
                </button>

                </div>
        ))}
        </div>
    )
}