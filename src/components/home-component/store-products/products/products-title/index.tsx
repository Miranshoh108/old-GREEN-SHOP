import { Select } from "antd";
import { title_category } from "../../../../../utils";
import { searchParam } from "../../../../../generic/searchParam";

const ProductsTitle = () => {
  const { setParam, getParam } = searchParam();
  const typeParam: string = getParam("type") || "all-plants";
  const categoryPath: string = getParam("category") || "house-plants";
  const typePrice: string = getParam("sort") || "default-sorting";

  let range_min: number = Number(getParam("range_min")) || 0;
  let range_max: number = Number(getParam("range_max")) || 1000;

  const setSelectValueParam = (e: string) => {
    const minRange = range_min ?? 0;
    const maxRange = range_max ?? 1000;

    setParam({
      category: categoryPath,
      type: typeParam,
      sort: e,
      range_min: String(minRange),
      range_max: String(maxRange),
    });
  };

  const setTitle = (type: string) => {
    setParam({
      category: categoryPath,
      type,
    });
  };
  return (
    <div className="flex items-center justify-between ">
      <div className="products-titile-left  flex items-center gap-[3.7rem] text-[#3D3D3D] font-normal text-[1.5rem] ">
        {title_category.map((value) => (
          <h3
            key={value.id}
            onClick={() => setTitle(value.label)}
            className={`${
              value.label === typeParam && "text-[#46A358] underline"
            }  font-[400] text-[1.5rem] cursor-pointer hover:underline hover:text-[#46A358]`}
          >
            {value.title}
          </h3>
        ))}
      </div>

      <div className="products-titile-right flex items-center gap-[0.8rem]">
        <p className="text-[1.5rem] font-normal text-[#3D3D3D]">Sort by:</p>
        <Select
          className="w-[15rem]"
          onChange={(e) => setSelectValueParam(e)}
          defaultValue={typePrice}
          options={[
            { value: "default-sorting", label: "Default sorting" },
            { value: "the-cheapest", label: "The cheapest" },
            { value: "most-expensive", label: "Most Expensive" },
          ]}
        />
      </div>
    </div>
  );
};

export default ProductsTitle;
