import Categories from "./categories"
import Products from "./products"

const StoreProducts = () => {
  return (
    <div className="mt-[2.6rem] flex items-start m-auto w-[90%] gap-[5rem] ">
      <Categories/>
      <Products/>
    </div>
  )
}

export default StoreProducts