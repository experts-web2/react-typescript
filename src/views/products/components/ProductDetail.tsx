import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { allProductsApis } from '../../../services/product.services';

const ProductDetail = () => {
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        avatar: '',
        description: '',
        developerEmail: '',
        category: '',
        createdAt: '',
        id: 0
    })
    const { id } = useParams();
    useEffect(() => {
        allProductsApis.getproductDetail(id).then((res: any) => {
            setProduct(res)
        })
    }, [id])

    return (
        <>

            <div className="w-full h-screen" >
                <div className='w-4/5 m-auto pt-5'>

                    <div className="flex " key={product.id}>
                        <img src={product.avatar} alt={product.name} className="w-80 h-80" />
                        <div className="flex-col ml-3 mt-1 mb-1 justify-between flex">
                            <div className="text-4xl pl-10 text-center font-bold ">{product.name}</div>
                            <div className="text-3xl pl-10 font-bold">$ {product.price}</div>
                        </div>
                    </div>
                    <div className="border-slate-500 border-b-4 mt-2 mb-2 pt-5 "></div>
                    <h2 className="text-2xl font-bold mt-3 mb-1">Description</h2>
                    <p className='text-sm text-black pb-2 mt-5 mb-3 text-justify'>{product.description}</p>
                </div>
            </div>
        </>
    )
}

export default ProductDetail