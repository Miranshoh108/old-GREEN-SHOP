import { CategoryType } from "../../../../@types";
import { useLoader } from "../../../../generic/loading";
import { useQuerHandler } from "../../../../hooks/useQuery";
import CategoriesItem from "./categories-item";
import PriceParam from "./categories-item/price";
import Discount from "./discount";

const Categories = () => {
  const {
    data,
    isLoading,
    isError,
  }: { isLoading: boolean; isError: boolean; data?: CategoryType[] } =
    useQuerHandler({
      pathname: "categories",
      url: "/flower/category",
    });

    const {category_loader} = useLoader()

  return (
    <div className="w-[33rem]  bg-[#FBFBFB]">
      <div className="p-[1.4rem]">
        <h3 className="font-bold text-[1.8rem] text-[#3D3D3D]">Categories</h3>
        <div className="category-bottom p-[1.8rem] flex flex-col gap-[1.5rem]">
          {isLoading || isError
            ? category_loader()
            : data?.map((value: CategoryType) => (
                <CategoriesItem key={value._id} {...value} />
              ))}
        </div>

        <PriceParam />
      </div>
      <Discount />
    </div>
  );
};

export default Categories;

// font-thin - 100
// font-extralight - 200
// font-light - 300
// font-normal - 400
// font-medium - 500
// font-semibold - 600
// font-bold - 700
// font-extrabold - 800
// font-black - 900
