import { store } from '../../src/redux/store';
import { addItemToCart, 
        deleteItemFromCart, 
        deleteProductFromCart, 
        openCart } from '../../src/features/cartProducts/cartSlice';

test('Add item to the cart', () => {
    let state = store.getState().cart;
    const initialProductCount = state.productsInCart.length;

  store.dispatch(addItemToCart({ id: 6, 
                                 name: 'ipad', 
                                 brand: 'Apple',  
                                 description: 'iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.',
                                 photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp',
                                 price:  4200.00,
                                 quantity:  1
                                }));

  state = store.getState().cart;
  const newlyAddedProduct = state.productsInCart.find((product) => product.id === 6);
  expect(newlyAddedProduct?.name).toBe('ipad');
  expect(newlyAddedProduct?.brand).toBe('Apple');
  expect(newlyAddedProduct?.description).toBe('iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.');
  expect(newlyAddedProduct?.photo).toBe('https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp');
  expect(newlyAddedProduct?.price).toBe(4200.00);
  expect(newlyAddedProduct?.price).toBe(1);
  expect(state.productsInCart.length).toBeGreaterThan(initialProductCount); 
});

