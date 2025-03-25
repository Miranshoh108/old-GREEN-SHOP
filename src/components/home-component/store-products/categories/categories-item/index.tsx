import type { FC } from "react";
import { CategoryType } from "../../../../../@types";
import { searchParam } from "../../../../../generic/searchParam";

const CategoriesItem: FC<CategoryType> = (props) => {
  const { setParam, getParam } = searchParam();
  const typeParam: string = getParam("type") || "all-plants";
  const typePrice: string = getParam("sort") || "default-sorting";

  let range_min: number = Number(getParam("range_min")) || 0;
  let range_max: number = Number(getParam("range_max")) || 1000;

  const setCategory = () => {
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
      onClick={setCategory}
      className={`flex items-center justify-between cursor-pointer font-bold text-[1.5rem] ${
        getParam("category") === props.route_path && "text-[#46A358]"
      }  transition-all hover:text-[#46A358]`}
    >
      <h4>{props.title}</h4>
      <h6>({Math.abs(props.count)})</h6>
    </div>
  );
};

export default CategoriesItem;
