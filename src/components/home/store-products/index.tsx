import Categories from "./categories";
import Products from "./products";

const StoreProducts = () => {
  return (
    <div className="mt-5 flex items-start gap-20">
      <Categories />
      <Products />
    </div>
  );
};

export default StoreProducts;
