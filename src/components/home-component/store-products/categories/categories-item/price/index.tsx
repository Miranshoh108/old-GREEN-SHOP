import { Slider } from "antd";
import { useState } from "react";
import { searchParam } from "../../../../../../generic/searchParam";

const PriceParam = () => {
  const {setParam , getParam} = searchParam()
  let range_min:number = Number(getParam("range_min")) || 0
  let range_max:number = Number(getParam("range_max")) || 1000


  const typeParam:string = getParam("type") || "all-plants"
  const categoryPath:string = getParam("category") || "house-plants"
  const typePrice:string = getParam("sort") || "default-sorting"


  const [price, setPrice] = useState<number[]>([range_min, range_max]);
  const setPriceParam = ()=>{
      setParam({
        category:categoryPath,
        type:typeParam,
        sort:typePrice,
        range_min:price[0],
        range_max:price[1]
      })
  }

  return (
    <div className="mt-[3.6rem]">
      <h3 className="font-bold text-[1.8rem] text-[#3D3D3D]">Price Range</h3>
      <div className="px-[1.8rem] flex flex-col gap-[1.1rem]">
        <Slider
          range
          min={0}
          max={1000}
          value={price}
          onChange={(e) => setPrice(e)}
        />
        <h5 className="font-[500] text-[1.5rem] text-[#3D3D3D]">
          Price:{" "}
          <span className="font-bold text-[1.5rem] text-[#46A358]">
            ${price[0]} - ${price[1]}
          </span>
        </h5>
        <button onClick={setPriceParam} className="w-[9rem] h-[3.5rem]  text-[1.6rem] font-bold text-[#ffff] bg-[#46A358] flex items-center justify-center rounded-[0.6rem]">
          Filter
        </button>
      </div>
    </div>
  );
};

export default PriceParam;
