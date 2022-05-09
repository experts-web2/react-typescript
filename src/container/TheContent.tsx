import { Routes, Route } from 'react-router-dom';
import ProductList from '../views/products/components/ProductList';
import ProductDetail from '../views/products/components/ProductDetail';
import AddProduct from '../views/products/components/AddProduct';
import ProductDetailTable from '../views/table/ProductsDetailTable';
import AboutUs from '../views/about/AboutUs';


const TheContent = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/table" element={<ProductDetailTable />} />
            </Routes>
        </div>
    )
}

export default TheContent