import { Formik, Form, Field, ErrorMessage } from 'formik';
import { productValidation } from '../../../models/productValidation';
import React, { useState, useEffect } from 'react'
import { allProductCatagory } from '../../../services/catagory.service'
import { useNavigate } from 'react-router-dom';
import { allProductsApis } from '../../../services/product.services';
import { GetCategoriesMap } from '../../../models/interface';

const AddProduct = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const initialState = {
        name: '', price: '', avatar: '', description: '', category: '', email: ''
    }

    useEffect(() => {
        allProductCatagory.getProductCatagory().then((res: any) => {
            setCategories(res)
        })
    }, [])

    const addProductData = async (values: any) => {
        console.log(values)
        const addProduct = await allProductsApis.addProductInDatabase(values);
        if (addProduct) {
            navigate('/');
        }
    }
    return (
        <>
            <Formik
                initialValues={initialState}
                onSubmit={(values) => {
                    addProductData(values)
                }}
                validationSchema={productValidation}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="w-4/5 m-auto text-center" >
                            <h2 className="mt-16 pt-1 capitalize text-xl font-bold">create product</h2>
                            <div className="mt-1 mb-2   max-w-xs mx-auto" >
                                <Field name="name" type="text" placeholder="product name"
                                    className="outline-0 p-1 m-1 w-full bg-white drop-shadow rounded"
                                />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-left" />
                            </div>

                            <div className="max-w-xs mx-auto">
                                <Field name="description" component="textarea" placeholder="description" rows={5}
                                    className="outline-0 p-1 m-1 w-full bg-white drop-shadow rounded"
                                />
                                <ErrorMessage name="description" component="div" className="text-red-500 text-left" />
                            </div>

                            <div className="mt-2 mb-2 max-w-xs mx-auto ">
                                <Field type="text" placeholder="imageUrl" name="avatar"
                                    className="outline-0 p-1 m-1 w-full bg-white drop-shadow rounded"
                                />
                                <ErrorMessage name="avatar" component="div" className="text-red-500 text-left" />
                            </div>

                            <div className="mt-2 mb-2 max-w-xs mx-auto">
                                <Field
                                    className="outline-0 p-1 m-1 w-full bg-white drop-shadow rounded"
                                    component="select"
                                    id="category"
                                    name="category"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <option value="none" className=" text-grey ">Select Catagory</option>
                                    {categories.map((catagory: any) => {
                                        return (
                                            <option value={catagory.name} key={catagory.id} >{catagory.name}</option>
                                        )
                                    })}
                                </Field>
                                <ErrorMessage name="category" component="div" className="text-red-500 text-left" />
                            </div>

                            <div className="mt-2 mb-2 max-w-xs mx-auto">
                                <Field name="price" type="number" placeholder="price"
                                    className="outline-0 p-1 m-1 w-full bg-white drop-shadow rounded"
                                />
                                <ErrorMessage name="price" component="div" className="text-red-500 text-left" />
                            </div>
                            <div className="mt-2 mb-2 max-w-xs mx-auto">
                                <Field name="email" type="email" placeholder="email"
                                    className="outline-0 p-1 m-1 w-full bg-white drop-shadow rounded"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-left" />
                            </div>
                            <button type="submit"
                                className="mt-2 mb-2 rounded-full text-xl font-bold  w-80 bg-white drop-shadow rounded">Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>

            )
        </>
    )
}

export default AddProduct









































