import { useAppSelector } from '../../hooks/hooks'
import { addItemToCart , deleteItemFromCart } from '../../src/features/cartProducts/cartSlice'
import { useAppDispatch } from '../../hooks/hooks'
import Image from 'next/image'
import styles from './cartItems.module.css'

export default function CartItems(){

    const dispatch = useAppDispatch()

    const productsInCart = useAppSelector((state) => state.cart.productsInCart)

    return (
            <div>
              {productsInCart.length > 0 ? (
                  productsInCart.map((product) => (
                    <div key={product.id} className={styles.productContainer}>
                      <div className={styles.imageContainer}>
                        <Image
                          loader={() => product.photo}
                          src={product.photo}
                          alt={product.name}
                          width={80}
                          height={80}
                        />
                      </div>
  
                      <div className={styles.nameContainer}>
                        <p>{product.name}</p>
                      </div>
  
                      <div className={styles.quantityContainer}>
                        
                        <button
                            onClick={() => dispatch(deleteItemFromCart(product))}
                        >
                        -
                        </button>
                        
                        <div>
                          <span>{product.quantity}</span>
                        </div>
  
                        <button  
                            onClick={() => dispatch(addItemToCart(product))}
                        >
                        +
                        </button>
                        
                      </div>
  
                      <div>
                        <span>R$ {product.quantity * product.price}</span>
                      </div>
  
                      <button 
                        className={styles.removeItem}
                        onClick={() => dispatch(deleteItemFromCart(product))}
                      >
                        X
                      </button>
                    </div>
                  ))
                ) : (
                  <div>
                    <p>Nenhum item no carrinho</p>
                  </div>
                )}
            </div>
    )
  }