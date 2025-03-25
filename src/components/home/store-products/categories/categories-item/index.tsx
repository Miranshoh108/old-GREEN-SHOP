import type { FC } from "react";
import { CategoryType } from "../../../../../@types";
import { searchParam } from "../../../../../generic/searchParam";

const CategoriesItem: FC<CategoryType> = (props) => {
  const { setParam, getParam } = searchParam();
  const typeParam: string = getParam("type") || "all-plants";
  const typePrice: string = getParam("sort") || "default-sorting";
  const range_min: number = Number(getParam("range_min")) || 0;
  const range_max: number = Number(getParam("range_max")) || 1000;

  const setCatogry = () => {
    setParam({
      category: props.route_path,
      type: typeParam,
      sort: typePrice,
      range_min,
      range_max,
    });
  };

  return (
    <div
      onClick={setCatogry}
      className={`flex items-center justify-between pt-2 cursor-pointer ${
        getParam("category") === props.route_path &&
        "text-[#46A358]  font-semibold"
      }  hover:text-[#46A358] transition-all`}
    >
      <h2>{props.title}</h2>
      <h3>({Math.abs(props.count)})</h3>
    </div>
  );
};

export default CategoriesItem;
