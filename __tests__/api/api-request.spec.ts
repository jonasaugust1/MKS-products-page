import apiRequest from "../../utils/__mocks__/api-request";
import { getProducts } from "../../utils/getProducts";


jest.mock('../../utils/__mocks__/api-request')

test("correctly fetches a list of products", async () => {

    const resolvedValue = {
        status: 'MOCK',
        data: [
          {
            id: 8,
            name: 'Headset Cloud Stinger',
            brand: 'HyperX',
            description: 'O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.',
            photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
            price: 600.00,
            createdAt: '2022-08-21T19:30:29.567Z',
            updatedAt: '2022-08-21T19:30:29.567Z',
            quantity: 1
          },
        ]
      };

    apiRequest.mockResolvedValueOnce(resolvedValue)
    const products = await getProducts()
    expect(products).toBeDefined()
})