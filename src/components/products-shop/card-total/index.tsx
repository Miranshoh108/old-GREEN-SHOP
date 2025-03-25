import { Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useReduxSelector } from "../../../hooks/useRedux";
import { useRef } from "react";
import { notificationApi } from "../../../generic/notification";
import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";
import PricesTotal from "./prices";
import { useGetCoupon } from "../../../hooks/useQuery/useQueryActions";

const CardTotal = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const notify = notificationApi();
  const navigate = useNavigate();
  const { shop } = useReduxSelector((state) => state.shopSlice);
  const { isLaoding, coupon } = useReduxSelector((state) => state.couponSlice);

  const { mutate } = useGetCoupon();

  const getCoupon = () => {
    const coupon_code: string = inputRef.current?.value as string;
    if (coupon_code.trim() === "") {
      return notify("coupon");
    }
    const newDataCoupon = { coupon_code };
    mutate(newDataCoupon);
  };

  return (
    <div>
      <h3 className="pb-5 text-[#3D3D3D] border-b border-[#46A358] font-bold text-[18px]">
        Card Total
      </h3>
      <Form onFinish={getCoupon} className="flex h-[40px] mt-[35px]">
        <input
          disabled={coupon ? true : false}
          ref={inputRef}
          name="coupon"
          placeholder="Enter coupon code here..."
          className="border w-4/5  border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg rounded-r-none outline-none text-[18px] text-black font-normal"
        />
        <button
          disabled={coupon ? true : false}
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-1/5 rounded-l-none "
        >
          {isLaoding ? (
            <LoadingOutlined />
          ) : coupon ? (
            <CheckOutlined />
          ) : (
            <span>Apply</span>
          )}
        </button>
      </Form>
      <PricesTotal />

      <button
        onClick={() =>
          shop.length ? navigate("/product-checkout") : notify("shop_not")
        }
        className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[40px] mt-[30px]"
      >
        Proceed To Checkout
      </button>
      <Link to={"/"} className="flex justify-center">
        <button className="mt-[14px] text-[#46A358] cursor-pointer">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default CardTotal;
