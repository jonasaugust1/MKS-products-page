export const getProducts = async () => {

    try{
        const response = await fetch('https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC')
        if(response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        }
    } catch(error: any){
        return error
    }
}
