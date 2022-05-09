import React, { useState, useEffect } from 'react'
import { allProductCatagory } from '../../../src/services/catagory.service'
import { useFormik } from 'formik';
import { GetCategoriesMap } from '../../models/interface'
import { productValidation } from '../../models/productValidation';
const AboutUs = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        allProductCatagory.getProductCatagory().then((res: any) => {
            setCategories(res)
        })
    }, [])

    const addProductData = async (values: any) => {
        console.log(values)
    }


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            description: '',
            price: '',
            category: '',
            avatar: ''
        },
        validationSchema: productValidation,
        onSubmit: values => {
            addProductData(values)
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="w-4/5 m-auto text-center" >
                    <h2 className="mt-16 pt-1 capitalize text-xl font-bold">create product</h2>
                    <div className="mt-1 mb-2   max-w-xs mx-auto" >
                        <input name="name" type="text" placeholder="product name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            className="outline-0 p-1 m-1 w-full bg-white drop-shadow rounded"
                        />
                        <div className="text-red-500 text-left">{formik.touched.name && formik.errors.name ? formik.errors.name : null}</div>
                    </div>

                    <div className="max-w-xs mx-auto">
                        <textarea name="description" placeholder="description" rows={5}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                            className="outline-0 p-1 m-1 w-full bg-white drop-shadow rounded"
                        />
                        <div className="text-red-500 text-left">{formik.touched.description && formik.errors.description ? formik.errors.description : null}</div>
                    </div>

                    <div className="mt-2 mb-2 max-w-xs mx-auto ">
                        <input type="text" placeholder="imageUrl" name="avatar"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.avatar}
                            className="outline-0 p-1 m-1 w-full bg-white drop-shadow rounded"
                        /> <div className="text-red-500 text-left">{formik.touched.avatar && formik.errors.avatar ? formik.errors.avatar : null}</div>
                    </div>

                    <div className="mt-2 mb-2 max-w-xs mx-auto">
                        <select
                            className="outline-0 p-1 m-1 w-full bg-white drop-shadow rounded"

                            name="category"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="none" className=" text-grey ">Select Catagory</option>
                            {categories.map((catagory: GetCategoriesMap) => {
                                return (
                                    <option value={catagory.name} key={catagory.id} >{catagory.name}</option>
                                )
                            })}
                        </select>
                        <div className="text-red-500 text-left">{formik.touched.category && formik.errors.category ? formik.errors.category : null}</div>
                    </div>

                    <div className="mt-2 mb-2 max-w-xs mx-auto">
                        <input name="price" type="number" placeholder="price"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.price}
                            className="outline-0 p-1 m-1 w-full bg-white drop-shadow rounded"
                        />
                        <div className="text-red-500 text-left">{formik.touched.price && formik.errors.price ? formik.errors.price : null}</div>
                    </div>
                    <div className="mt-2 mb-2 max-w-xs mx-auto">
                        <input name="email" type="email" placeholder="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className="outline-0 p-1 m-1 w-full bg-white drop-shadow rounded"
                        />
                        <div className="text-red-500 text-left">{formik.touched.email && formik.errors.email ? formik.errors.email : null}</div>
                    </div>
                    <button type="submit"
                        className="mt-2 mb-2 rounded-full text-xl font-bold  w-80 bg-white drop-shadow rounded">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AboutUs