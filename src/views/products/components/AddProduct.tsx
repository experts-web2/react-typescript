import React, { useState } from 'react'
import { allProductsApis } from '../../../services/product.services';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const [prdouctName, setPrdouctName] = useState('')
    const [prdouctPrice, setPrdouctPrice] = useState('')
    const [prdouctAvatar, setPrdouctAvatar] = useState('')
    const [prdouctDescription, setPrdouctDescription] = useState('')
    const [productCatagory, setProductCatagory] = useState('')
    const [email, setEmail] = useState("");

    const addProductData = async () => {
        const data = {
            name: prdouctName,
            email: email,
            price: prdouctPrice,
            avatar: prdouctAvatar,
            description: prdouctDescription,
            category: productCatagory
        }
        if (data.name === '' || data.price === '' || data.avatar === ''
            || data.description === '' || data.category === '' || data.email === '') {
            alert('Please fill all the fields')
        }
        else {
            await allProductsApis.addProductInDatabase(data).then((res: any) => {
                console.log(res)
            })
            navigate('/');
        }
    }

    return (
        <div className="w-4/5 m-auto text-center" >
            <h2 className="mt-16 pt-2 capitalize text-xl font-bold">create product</h2>
            <div className="mt-2 mb-2 " >
                <input type="text" placeholder="product name" className="border-2 p-1 m-1 w-100  border-zinc-800 w-80"
                    value={prdouctName} onChange={(e) => setPrdouctName(e.target.value)}
                    required
                />
            </div>
            <div>
                <textarea name="" id="" cols={40} rows={4} placeholder="Description"
                    className=" border-2 p-1 m-1 border-zinc-800"
                    value={prdouctDescription} onChange={(e) => setPrdouctDescription(e.target.value)}
                    required
                ></textarea>
            </div>
            <div className="mt-2 mb-2">
                <input type="text" placeholder="imageUrl" value={prdouctAvatar} style={{ border: '2px solid black' }}
                    required
                    className="border-2 p-1 m-1 w-100  border-zinc-800 w-80"
                    onChange={(e) => setPrdouctAvatar(e.target.value)} />
            </div>
            <div className="mt-2 mb-2">
                <input type="text" placeholder="catagories"
                    required
                    className="border-2 p-1 m-1 w-100  border-zinc-800 w-80"

                    value={productCatagory} onChange={(e) => setProductCatagory(e.target.value)}
                />
            </div>
            <div className="mt-2 mb-2">
                <input type="Number" placeholder="price"
                    required
                    className="border-2 p-1 m-1 w-100  border-zinc-800 w-80"
                    value={prdouctPrice} onChange={(e) => setPrdouctPrice(e.target.value)}
                />
            </div>
            <div className="mt-2 mb-2">
                <input type="email" placeholder="Email"
                    required
                    className="border-2 p-1 m-1 w-100  border-zinc-800 w-80"

                    value={email} onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button onClick={addProductData} className="mt-2 mb-2 rounded-full text-xl font-bold">Submit</button>
        </div>
    )
}

export default AddProduct
