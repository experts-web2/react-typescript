import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Category, Product } from '../../../models/interface';
import { allProductsApis } from '../../../services/product.services';
import ProductCatagory from '../../catagories/components/ProductCatagory';
import ProductSearch from './ProductSearch';
import ProductTile from './ProductTile';
import UpaymentStore from './UpaymentStore';

const ProductList = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const [searchValue, setSearchValue] = useState("");
    const [catagory, setCatagory] = useState<Category | null>(null);
    const [catagoryproducts, setCatagoryProd] = useState([])
    const [itemsToDisplay, setItemsToDisplay] = useState<Product[]>([])


    const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        itemsToDisplay.filter((product: Product) => {
            return Array.isArray(product.name) ? product.name[0].toLowerCase().includes(searchValue.toLowerCase()) : product.name.toLowerCase().includes(searchValue)
        })
    }

    const getProductsByCatagory = async () => {
        console.log(catagory?.id)
        const catagory_id = catagory && Object.values(catagory)[0];
        const catagory_name = catagory && Object.values(catagory)[1];
        const filterData = await products.filter((product: any) =>
            product.category === catagory_id || product.category === catagory_name);
        if (filterData.length > 0) {
            setItemsToDisplay(filterData);
        }
    }

    useEffect(() => {
        allProductsApis.getProduct().then((res: any) => {
            setProducts(res);
            setItemsToDisplay(res);
            console.log('items', itemsToDisplay, products)
        });

    }, [])
    useEffect(() => {
        console.log("Category Change", catagory);
        if (catagory) {
            getProductsByCatagory();
        }
        else {
            setItemsToDisplay(products);
        }
    }, [catagory])

    return (
        <>
            <div className="flex-row pt-20  mb-8 container" style={{ position: 'relative' }} >

                <div className="mr-15 ml-15 flex flex-wrap justify-between " style={{ width: '80%', margin: '0 auto', padding:'0 12px' }}>
                    <ProductSearch searchHandle={searchHandle} searchValue={searchValue} />
                    <ProductCatagory setCatagory={setCatagory} />
                </div>
            </div>
            <div style={{ position: 'fixed', top: '75%', left: '93%' }}
                className="border-2 w-10 h-10 rounded-full flex justify-center bg-black align-center">
                <button style={{ fontSize: '40px', color: 'white', display: 'flex', alignContent: 'center', alignSelf: 'center', marginBottom: '7px' }} className="justify-center" onClick={() => navigate('/add-product')}>+</button>
            </div>
            <div style={{ display: 'flex', width: '80%', margin: '0 auto', flexWrap: 'wrap' }}>
                {
                    itemsToDisplay.length > 0 ? itemsToDisplay.filter((product: Product) => {
                        return Array.isArray(product.name) ? product.name[0].toLowerCase().includes(searchValue.toLowerCase()) : product.name.toLowerCase().includes(searchValue)
                    }).map((product: any) => {
                        return <ProductTile products={product} key={product.id} />
                    }) : <div className="text-center text-xl font-bold">No Products Found</div>
                }
            </div>
        </>
    )
}

export default ProductList
//                 }
//                 {/* {catagoryproducts.length > 0 ? <ProductTile products={catagoryproducts} searchValue={searchValue} /> :
//                     <ProductTile products={products} searchValue={searchValue} />} */}
//             </div>
//         </>
//     )
// }

// export default Product
// itemsToDisplay.filter((product: any) => {
//     return product.name.toLowerCase().includes(searchValue.toLowerCase())



































