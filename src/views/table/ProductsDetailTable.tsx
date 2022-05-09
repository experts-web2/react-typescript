import ProductCatagory from './../../views/catagories/components/ProductCatagory';
import { Category, TableRangeHandle } from './../../models/interface';
import React, { useState, useEffect } from 'react';
import { Product } from '../../models/interface';
import { allProductsApis } from '../../services/product.services';
import CloseIcon from '@mui/icons-material/Close';
import MaterialTable, { MTableToolbar } from '@material-table/core'
import { options } from '../../models/tableData';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import TableRangeSelect from './../../views/table/TableRangeSelect';
import Delete from '@material-ui/icons/Delete';

const ProductsDetail = () => {
    const [dateRange, setDateRange] = useState<TableRangeHandle | any>([null, null]);
    const [startDate, endDate] = dateRange
    const [category, setCategory] = useState<Category | null>(null);
    const [data, setData] = useState<Product[]>([]);
    const [products, setProducts] = useState<Product[]>([])
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        allProductsApis.getProduct().then((res: any) => {
            setData(res);
            setProducts(res);
        });
    }, [])

    const activeDeactive = () => {
        setActive(!isActive)
    }

    useEffect(() => {
        const start = startDate && Date.parse(startDate);
        const end = endDate && Date.parse(endDate);
        const newData = products.filter((item: Product) => {
            const date = item.createdAt;
            console.log('created date', new Date(item.createdAt))
            console.log('start   date', new Date(start))
            console.log('end     date', new Date(end))
            return date >= start && date <= end;
        }
        )
    }, [startDate, endDate])


    const getProductsByCatagory = async () => {
        const catagory_id = category?.id;
        const catagory_name = category?.name;
        const filterData = await products.filter((product: any) =>
            product.category === catagory_id || product.category === catagory_name);
        if (filterData.length > 0) {
            setData(filterData);
        }
    }

    useEffect(() => {
        console.log('category', category);
        if (category) {
            getProductsByCatagory();
        }
        else {
            setData(products)
        }
    }, [category])


    const removeCategoryFilter = () => {
        setCategory(null)
    }


    const productColData = [
        { title: 'Product_Id', field: 'id', width: '11%', filtering: false },
        {
            title: 'Product Name', field: 'name', width: '20%', filtering: false,
        },
        {
            title: 'Price', field: 'price', width: '12%', filtering: isActive ? true : false,
            render: (rowData: any) => <div style={{ color: rowData.price < 40 ? 'green' : 'red' }}>
                {rowData.price}
            </div>
        },
        {
            title: 'Image', field: 'avatar', emptyValue: () => <em>null</em>,
            render: (rowData: any) => <a href={rowData.avatar}>
                <img src={rowData.avatar} alt="avatar" width="70px"
                    className="border-2 drop-shadow rounded" height="50px" /></a>, filtering: false
        },
        {
            title: 'Category', field: 'category', width: '20%', filtering: isActive ? true : false,
            filterComponent: (props: any) => (
                console.log('props', props),
                <ProductCatagory
                    setCatagory={setCategory}
                    {...props}
                />
            ),
        },
        { title: 'Description', field: 'description', filtering: false, width: '30%' },
        {
            title: 'createdAt', field: 'createdAt', width: '20%', filtering: isActive ? true : false,
            filterComponent: (props: any) => (
                <TableRangeSelect
                    {...props}
                    setDateRange={setDateRange}
                    startDate={startDate}
                    endDate={endDate}
                />
            ),

        },
    ]


    const handleDeleteRow = (event: any, rowData: any) => {
        const id = rowData.id;
        const newData = data.filter((product: Product) => product.id !== id)
        setData(newData);
    }

    return (
        <>
            <div className="ml-4 mr-4">
                <MaterialTable title="Products" columns={productColData} data={data}
                    editable={{
                        onRowUpdate: (newData: any, oldData: any) =>
                            new Promise((resolve: any, reject) => {
                                setTimeout(() => {
                                    console.log(oldData)
                                    const dataUpdate = [...data];
                                    const index = oldData.tableData.id;
                                    dataUpdate[index] = newData;
                                    setData([...dataUpdate]);
                                    resolve();
                                }, 1000)
                            })
                    }}
                    actions={[
                        {
                            icon: Delete,
                            tooltip: 'Delete',
                            onClick: handleDeleteRow,
                        },
                    ]}
                    options={options}
                    components={{
                        Toolbar: props => (
                            <div
                                style={{ border: '2px solid white', height: '100px', display: 'flex', 
                                justifyContent: 'space-between', margin: '0px 30px' }}>
                                <MTableToolbar {...props} />
                                <div onClick={activeDeactive} style={{ marginTop: '30px', marginRight: '60px' }} >
                                    <div style={{ display: 'flex' }}>
                                        <FilterAltIcon
                                            style={{ width: '40px', height: '40px', color: 'grey', cursor: 'pointer' }} />
                                    </div>
                                    <div>
                                        {
                                            isActive ? category ? <CloseIcon onClick={removeCategoryFilter} /> : '' : null

                                        }
                                    </div>
                                </div>
                            </div>
                        ),
                    }}

                />
            </div>
        </>
    )
}

export default ProductsDetail











































































// import "react-datepicker/dist/react-datepicker.css";

{/* {products.map((product: any) => {
                return (
                    
                    <div>
                        <AllProductDataTable products={product} />
                      
                       
                    </div>
                )
            })} */}

// import DatePicker from "react-datepicker";

// const handleDate = (date: any) => {
//     setDateRange(date);
//     const start = date[0] && Date.parse(date[0]);
//     const end = date[1] && Date.parse(date[1]);
//     const newData = products.filter((item: Product) => {
//         const date = item.createdAt;
//         console.log('created', new Date(item.createdAt))
//         console.log('start', new Date(start))
//         console.log('end', new Date(end))
//         console.log(date >= start && date <= end);
//         return date >= start && date <= end;
//     }
//     )
//     console.log(newData);
// }

//     <div className='d-flex justify-end mb-2 justify-items-end content-end items-end'>
//     <DatePicker
//         selectsRange={true}
//         startDate={startDate}
//         endDate={endDate}
//         onChange={handleDate}
//         isClearable={true}
//     />
// </div>

// ;
{/* <TableRangeSelect startDate={startDate} endDate={endDate} setDateRange={setDateRange} /> */ }


function handleBulkDelete(rowData: Product | Product[]): void {
    throw new Error('Function not implemented.');
}
//     <div className="d-flex w-4/5 m-auto">
//     <div >
//         {
//             isActive ? <ProductSearch searchValue={searchValue} setsearchValue={setsearchValue} /> : ''
//         }
//     </div>
//     <div>
//         {
//             isActive ? <ProductCatagory setCatagory={setCategory} /> : ''
//         }
//     </div>
// </div>

   // Container: props => (
                        //     <div>
                        //         <Paper {...props} elevation={0} />
                        //     </div>
                        // )