import { API_BASE_URL } from '../../src/utils/envVariables';
export const allProductsApis = {
    getProduct: () => {
        return fetch(`${API_BASE_URL}products`)
            .then(res => res.json())
    },

    getproductDetail: (id: any) => {
        return fetch(`${API_BASE_URL}products/${id}`).then(res => res.json())
    },

    addProductInDatabase: (data: any) => {
        return fetch(`${API_BASE_URL}products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                price: data.price,
                category: data.catagory,
                description: data.description,
                avatar: data.avatar,
            })
        }).then(res => res.json())

    }



}


