import React from 'react'
const ProductList=React.lazy(()=>import ('./views/products/components/ProductList'))
const AddProduct=React.lazy(()=>import ('./views/products/components/AddProduct'))
const ProductDetail=React.lazy(()=>import ('./views/products/components/ProductDetail'))
const routes=[
    {
        path: "/",
        exact: true,
        name:"ProductList",
        component: ProductList
    },
    {
        path:'/add-product',
        exact:true,
        name:"Add Product",
       component:AddProduct

    },
    {
        path:'/product-detail/:id',
        exact:true,
        name:"Product Detail",
        component:ProductDetail
    }
]

export default routes;