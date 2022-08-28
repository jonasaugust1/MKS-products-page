import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/header'
import Inventory from '../components/inventory/inventory'
import Footer from '../components/footer/footer'
import Cart from '../components/cart/cart'
import {getProducts} from '../utils/getProducts'
import {GetProductResults, Product} from '../types'


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
        <Inventory products={products}/>
        <Cart/>      
      </main>
      <Footer/>
   </div>
  )
}

export default Home;
