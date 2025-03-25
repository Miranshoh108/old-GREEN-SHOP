import { useState } from "react";
import { useSearchParamsHandler } from "../../../../../generic/searchParams";
import { Slider } from "antd";

const PriceParam = () => {
  const { getParam, setParam } = useSearchParamsHandler();
  const range_min: number = Number(getParam("range_min")) || 0;
  const range_max: number = Number(getParam("range_max")) || 1000;
  const typeParam: string = getParam("type") || "all-plants";
  const categoryPath: string = getParam("category") || "house-plants";
  const typePrice: string = getParam("sort") || "default-sorting";
  const [price, setPrice] = useState<number[]>([range_min, range_max]);

  const setPriceParam = () => {
    setParam({
      category: categoryPath,
      type: typeParam,
      sort: typePrice,
      range_min: price[0],
      range_max: price[1],
    });
  };

  return (
    <div className="mt-10">
      <Slider
        range
        max={1000}
        min={0}
        value={price}
        onChange={(e) => setPrice(e)}
      />
      <div className="text-[#3D3D3D] text-[16px] font-[500] flex items-center gap-2">
        Price
        <span className="text-[#46A358] text-[15px] font-bold">
          {price[0]}$ - ${price[1]}$
        </span>
      </div>
      <button
        onClick={setPriceParam}
        className="w-[90px] h-[40px] bg-[#46A358] text-white rounded-md my-3 max-lg:hidden"
      >
        Filter
      </button>
    </div>
  );
};

export default PriceParam;
