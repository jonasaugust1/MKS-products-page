import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import {getProducts} from '../utils/products'
import {GetProductResults, Product} from '../types'
import utilStyles from '../styles/utils.module.css'




export const getStaticProps: GetStaticProps = async (context) => {
  const {products}: GetProductResults = await getProducts()
  return {
    props: {
      products,
    },
  }
}


const Home: NextPage<{products: Product[]}> = ({products}) => {
  return (
   <div>
      <Header home/>
      <main>
        <div className={utilStyles.productsContainer}>
            {products.map(product => (
                <div key={product.id} className={utilStyles.productCard}>
                  <div className={utilStyles.imageContainer}>
                  <Image
                    loader={() => product.photo}
                    src={product.photo}
                    alt={product.name}
                    width={150}
                    height={150}
                  />
                  </div>
                  
                  <div className={utilStyles.infoContainer}>
                    <div className={utilStyles.nameContainer}>
                      <h5>{product.name}</h5>
                    </div>
                    <div className={utilStyles.priceContainer}>
                      <span>R${product.price}</span>
                    </div>
                  </div>
                  

                  <p>{product.description}</p>
                 
                  <button className={utilStyles.buyBtn}>
                      <Image
                        src='/images/shopping-bag.svg'
                        alt='buy'
                        width={20}
                        height={20}
                      />
                      Comprar
                    </button>
                </div>
            ))}
        </div>
      </main>
      <Footer/>
   </div>
  )
}

export default Home;
