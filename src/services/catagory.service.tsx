import { API_BASE_URL } from '../../src/utils/envVariables';
export const allProductCatagory = {
    getProductCatagory: () => {
        return fetch(`${API_BASE_URL}categories/`).then(res => res.json())
    },
    getSpecificProductCatagory: (id: any) => {
        return fetch(`${API_BASE_URL}categories/${id}`).then(res => res.json())
    }
}

