import { Routes, Route } from 'react-router-dom';
import ProductDetail from "./views/products/components/ProductDetail";
import Product from "./views/products/components/ProductList";
import AddProduct from "./views/products/components/AddProduct";
import UpaymentStore from './views/products/components/UpaymentStore';

function App() {
  return (
    <>
      {/* <UpaymentStore /> */}
      <Routes>
        <Route path="/"  element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;
