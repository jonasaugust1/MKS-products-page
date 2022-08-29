import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import {store} from '../src/redux/store'
import Layout from '../components/Layout'
import Cart from '../components/cart/cart'

export default function MyApp({ Component, pageProps }: AppProps) {
  return(
      <Provider store={store}>
        <Layout>
          <Cart/>
          <Component {...pageProps} />
        </Layout>
      </Provider>  
     )
}

