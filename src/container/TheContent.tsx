import { Routes, Route } from 'react-router-dom';
import ProductList from '../views/products/components/ProductList';
import ProductDetail from '../views/products/components/ProductDetail';
import AddProduct from '../views/products/components/AddProduct';

const TheContent = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/add-product" element={<AddProduct />} />
            </Routes>

        </div>
    )
}

export default TheContent