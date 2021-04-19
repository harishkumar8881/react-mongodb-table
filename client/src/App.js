import { useEffect, useState } from 'react';
import './App.css';
import CreateProductForm from './components/create_product_form';
import ProductTable from './components/product_table';
import { getAllProducts } from './utilities';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setProducts(await getAllProducts());
  }

  return (
    <div className="App">
      <ProductTable products={products} /> 
      <CreateProductForm updateProductsCallBack={fetchProducts} /> 
    </div>
  );
}

export default App;
