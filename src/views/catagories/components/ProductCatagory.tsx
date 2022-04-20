import React, { useState, useEffect } from 'react'
import { allProductCatagory } from '../../../services/catagory.service'
import { ProductCatagoryProps } from '../../../models/interface'

const ProductCatagory = (props: ProductCatagoryProps) => {
    const [catagories, setCatagories] = useState([]);

    const catagoryHandle = (e: any) => {
        const catagory_values = e.target.value;
        const catagory_values_split = catagory_values.split(",")
        const catagory_id = catagory_values_split[0]
        const catagory_name = catagory_values_split[1]
        if(catagory_id == "none"){
            props.setCatagory(null);
        }else{
            props.setCatagory({
                id: catagory_id,
                name: catagory_name
            })
        }

        
    }
    useEffect(() => {
        allProductCatagory.getProductCatagory().then((res: any) => {
            setCatagories(res)
        })
    }, [])

    return (
        <>
            <select className='border-solid border-gray-300 rounded-md p-2 border-2 w-64 text-slate-500'
                name="Search" onChange={catagoryHandle}>
                <option value="none" className=" text-grey ">Select Catagory</option>
                {catagories.map((catagory: any) => {
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