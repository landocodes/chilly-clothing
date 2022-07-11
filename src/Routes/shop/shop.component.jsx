import { useContext } from 'react';

import ProductCard from '../../components/products_card/products-card.component';

import { ProductsContext } from '../../context/products.context';

import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};


export default Shop;