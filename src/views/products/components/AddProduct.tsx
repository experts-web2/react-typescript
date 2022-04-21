import React, { useState, useEffect } from 'react'
import { allProductsApis } from '../../../services/product.services';
import { useNavigate } from 'react-router-dom';
import { Product, Category } from '../../../models/interface';
import ProductCatagory from '../../catagories/components/ProductCatagory';

const AddProduct = () => {
    const navigate = useNavigate();
    const initialState = {
        name: '', price: 0, avatar: '', description: '', category: '', email: "", created_at: '', id: 0, updated_at: ''
    }
    const [selectedProduct, setSelectedProduct] = useState<Product>(initialState);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setSelectedProduct({ ...selectedProduct, [name]: value })

    }
    useEffect(() => {
        if (selectedCategory) {
            setSelectedProduct({ ...selectedProduct, category: selectedCategory.name })
        }
    }, [selectedCategory])




    const addProductData = async (e: any) => {
        const specificSeletedProduct = {
            name: selectedProduct.name,
            price: selectedProduct.price,
            avatar: selectedProduct.avatar,
            description: selectedProduct.description,
            category: selectedProduct.category,
            email: selectedProduct.email,
        }
        await allProductsApis.addProductInDatabase(specificSeletedProduct).then((res: any) => {
            console.log(res)
        });
        navigate('/products')
    }


    return (
        <>

            <div className="w-4/5 m-auto text-center" >
                <h2 className="mt-16 pt-1 capitalize text-xl font-bold">create product</h2>
                <div className="mt-1 mb-2   max-w-xs mx-auto" >

                    <input type="text" placeholder="product name" className="outline-0 p-1 m-1 w-full bg-white drop-shadow rounded"
                        value={selectedProduct.name} onChange={handleChange}
                        name="name"
                        required

                    />
                </div>

                <div className="max-w-xs mx-auto">
                    <textarea id="" cols={40} rows={4} placeholder="Description"
                        name="description"
                        className="outline-0  p-1 m-1  bg-white drop-shadow rounded"

                        value={selectedProduct.description} onChange={handleChange}
                        required

                    ></textarea>
                </div>

                <div className="mt-2 mb-2 max-w-xs mx-auto ">
                    <input type="text" placeholder="imageUrl" value={selectedProduct.avatar}
                        required
                        name='avatar'
                        className="outline-0 p-1 m-1 w-full bg-white drop-shadow rounded"
                        onChange={handleChange} />
                </div>

                <div className="mt-2 mb-2 max-w-xs mx-auto" >


                    <ProductCatagory setCatagory={setSelectedCategory} />

                </div>

                <div className="mt-2 mb-2 max-w-xs mx-auto">
                    <input type="Number" placeholder="price"
                        required

                        name='price'
                        className="outline-0 p-1 m-1 w-full bg-white drop-shadow rounded"
                        value={selectedProduct.price} onChange={handleChange}
                    />
                </div>

                <div className="mt-2 mb-2 max-w-xs mx-auto">
                    <input type="email" placeholder="Email"
                        required
                        name='email'

                        className="outline-0 p-1 m-1 w-full bg-white drop-shadow rounded"
                        value={selectedProduct.email} onChange={handleChange}
                    />
                </div>
                <button onClick={addProductData} className="mt-2 mb-2 rounded-full text-xl font-bold  w-80 bg-white drop-shadow rounded
                ">Submit</button>
            </div>
        </>
    )
}

export default AddProduct
