import Hero from "./hero";
import Info from "./info/info";
import Posts from "./posts/posts";
import StoreProducts from "./store-products";

const HomeComponent = () => {
  return (
    <div className="w-[90%] m-auto">
      <Hero />
      <StoreProducts />
      <Info />
      <Posts />
    </div>
  );
};

export default HomeComponent;
