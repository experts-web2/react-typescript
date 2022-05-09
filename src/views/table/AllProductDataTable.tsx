import React from 'react'
import MaterialTable from '@material-table/core'
import { ProductPageProps} from '../../models/interface'


const AllProductDataTable = (props: ProductPageProps) => {
    const data = [
        {
            p_name: `${props.products.name}`,
            p_price: `<img src=${props.products.price} width="200px" />}`,
            p_description: `${props.products.description}`,
            p_category: `${props.products.category}`,
            p_avatar: `${props.products.avatar}`,
        }
    ]
    const col = [
        { title: 'Product Name', field: 'p_name' },
        { title: 'Price', field: 'p_price' },
        { title: 'Image', field: 'p_image' },
        { title: 'Category', field: 'p_category' },
        { title: 'Description', field: 'p_Description' }
    ]

    const opt =
    {
        search: true,
        actionsColumnIndex: -1,
        pageSize: 7,
        pageSizeOptions: [10, 20, 30, 40, 50],
        showTitle: false,
        headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF'
        },
        rowStyle: {
            backgroundColor: '#EEE'
        }
    }


    return (
        <div>

            <MaterialTable
                title="Products"
                columns={
                    col
                }
                data={
                    data
                }
                options={
                    opt
                }

            />

        </div>
    )
}

export default AllProductDataTable


