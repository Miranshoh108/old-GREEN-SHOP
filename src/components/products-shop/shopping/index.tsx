import { Empty } from "antd";
import { CartType } from "../../../@types";
import { useReduxSelector } from "../../../hooks/useRedux";
import ShoppingCard from "./card";
import { useNavigate } from "react-router-dom";

function Shopping() {
  const navigate = useNavigate();
  const { shop } = useReduxSelector((state) => state.shopSlice);
  return (
    <div className="border-b-2  border-[#46A358] ">
      <div className="flex item-center justify-between text-start border-b border-[#46A358] pb-3">
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[28%]">
          Products
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
          Price
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
          Quantity
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
          Total
        </h2>
        <h3 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px]">
          Total
        </h3>
      </div>
      {shop.length ? (
        shop.map((value: CartType) => (
          <ShoppingCard key={value._id} {...value} />
        ))
      ) : (
        <div className="flex items-center justify-center flex-col">
          <Empty />
          <button
            onClick={() => navigate("/")}
            className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white h-[40px] px-[10px] mt-[10px]"
          >
            Lets shop{" "}
          </button>
        </div>
      )}
    </div>
  );
}

export default Shopping;
