import Info from "../home/info/info";
import Posts from "../home/posts/posts";
import Hero from "./hero";
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
