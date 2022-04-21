import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Category, Product } from '../../../models/interface';
import { allProductsApis } from '../../../services/product.services';
import ProductCatagory from '../../catagories/components/ProductCatagory';
import ProductSearch from './ProductSearch';
import ProductTile from './ProductTile';

const ProductList = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const [searchValue, setSearchValue] = useState("");
    const [category, setCategory] = useState<Category | null>(null);
    const [itemsToDisplay, setItemsToDisplay] = useState<Product[]>([])

    const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const getProductsByCatagory = async () => {
        console.log(category?.id)
        const catagory_id = category?.id;
        const catagory_name = category?.name;
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
        });

    }, [])
    useEffect(() => {
        if (category) {
            getProductsByCatagory();
        }
        else{
            setItemsToDisplay(products)
        }
    }, [category])

    return (
        <>
            <div className="flex-row  mb-8 px-5 relative" >

                <div className="mr-15 ml-15 flex flex-wrap justify-between mt-8">
                    <div className="md:w-1/2 w-full mt-3 md:mt-0 flex justify-end">
                        <ProductSearch searchHandle={searchHandle} searchValue={searchValue} />

                    </div>
                    <div className="md:w-1/2 w-full mt-3 md:mt-0 flex justify-end">
                        <div className="md:w-64 w-full">
                            <ProductCatagory setCatagory={setCategory} />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="border-2 w-10 h-10 rounded-full flex justify-center bg-black align-center right-0 mr-3 fixed bottom-4 z-10">
                <button className="text-white flex items-center justify-center text-4xl mb-2" onClick={() => navigate('/add-product')}>+</button>
            </div>
            <div className="flex flex-wrap md:w-4/5 w-full md:mx-auto px-2">
                {
                    itemsToDisplay.length > 0 ? itemsToDisplay.filter((product: Product) => {
                        console.log(searchValue);
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





































