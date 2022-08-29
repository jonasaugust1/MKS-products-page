import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Inventory from '../components/inventory/inventory'
import {getProducts} from '../utils/getProducts'
import {GetProductResults, Product} from '../utils/types'


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
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MKS Sistemas</title>
      </Head>
      <main>
          <Inventory products={products} />
      </main>
    </>
   
  )
}

export default Home;
