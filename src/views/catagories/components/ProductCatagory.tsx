import {useNavigate} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { allProductCatagory } from '../../../services/catagory.service'
import { ProductCatagoryProps } from '../../../models/interface'

const ProductCatagory = (props: ProductCatagoryProps) => {
const navigate=useNavigate();
    const [categories, setCategories] = useState([]);

    const categoryHandle = (e: any) => {
        const catagory_values = e.target.value;
        const catagory_values_split = catagory_values.split(",")
        const catagory_id = catagory_values_split[0]
        const catagory_name = catagory_values_split[1]
        if (catagory_id === "none" || catagory_name === "none") {
            props.setCatagory(null);
        } else {
            props.setCatagory({
                id: catagory_id,
                name: catagory_name
            })
        }
    }
    useEffect(() => {
        allProductCatagory.getProductCatagory().then((res: any) => {
            setCategories(res)
        })

    }, [])

    return (
        <>
        <button className='ml-4 text-lg cursor-pointer text-uppercase'
        // style={{fontSize:'20px'}}
         onClick={()=>navigate('/table')}>Table Page |</button>
            <select className='border-solid border-gray-300 w-full rounded-md p-2 border-2  text-slate-500'
                name="category" onChange={categoryHandle}>
                <option value="none" className=" text-grey ">Select Catagory</option>
                {categories.map((catagory: any) => {
                    return (
                        <>
                            <option value={[catagory.id, catagory.name]} key={catagory.id} >{catagory.name}</option>
                        </>
                    )
                })}
            </select>
        </>
    )
}

export default ProductCatagory


































