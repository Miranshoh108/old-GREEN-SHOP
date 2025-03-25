import { useReduxSelector } from "../../../../hooks/useRedux";

const PricesTotal = () => {
  const { shop } = useReduxSelector((state) => state.shopSlice);
  const { coupon } = useReduxSelector((state) => state.couponSlice);
  const total_price = shop.reduce(
    (acc, value) => (acc += Number(value.userPrice)),
    0
  );
  const cupon_title_style = "text-[#3D3D3D] text-[15px] font-normal";
  const discount_price: number = (total_price * coupon) / 100;
  return (
    <div>
      <div className="mt-[20px]">
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Subtotal</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">
            ${total_price.toFixed(2)}
          </h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Coupon Discount</h3>
          <h2 className="text-[#3D3D3D] text-[15px]">
            {" "}
            {discount_price.toFixed(2)}$
          </h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Shiping</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">$16.00</h2>
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-[20px]">
          <h2 className="text-[#3D3D3D] text-[16px] font-bold">Total:</h2>
          <div>
            <h1
              className={`text-[#46A358] text-[18px] font-bold ${
                coupon && "line-through"
              }`}
            >
              ${total_price.toFixed(2)}
            </h1>
            {Boolean(coupon) && (
              <h1
                className={`text-[#46A358] text-[18px] font-bold
            `}
              >
                ${(total_price - discount_price).toFixed(2)}
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricesTotal;
