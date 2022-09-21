import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';

import ProductCard from '../../components/products_card/products-card.component';

import { CategoriesContext } from '../../context/categories.context';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <Fragment>
      <Link to='/shop/{category}'><h2 className='category-title'>{category.toUpperCase()}</h2></Link>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;