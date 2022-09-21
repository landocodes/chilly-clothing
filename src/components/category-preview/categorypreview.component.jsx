import ProductCard from "../products_card/products-card.component";
import "./categorypreview.styles.scss";

const CategoryPreview = ({ title, products }) => (
  <div className="category-preview-container">
    <h2>
      <span className="title">{title.toUpperCase()}</span>
    </h2>
    <div className="preview">
      {products
        .filter((n,index) => index < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;
