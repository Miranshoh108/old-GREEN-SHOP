import type { OrderType } from "../../../../../@types";
import { useReduxDispatch } from "../../../../../hooks/useRedux";
import { setOrderDetailsVisiblty } from "../../../../../redux/modal-slice";
import { setOrder } from "../../../../../redux/order-slice";

const OrderItem = (data: OrderType) => {
  const dispatch = useReduxDispatch();
  return (
    <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] justify-between mt-5 bg-[#FBFBFB] p-4">
      <div className="border-r pl-4">
        <p>Order Number</p>
        <h2 className="font-bold">{data._id}</h2>
      </div>
      <div className="border-r pl-4">
        <p>Date</p>
        <h2 className="font-bold">{data.created_at.slice(0, 10)}</h2>
      </div>
      <div className="border-r pl-4">
        <p>Total</p>
        <h2 className="font-bold">
          $ {data?.extra_shop_info.total?.toFixed(2)}
        </h2>
      </div>
      <div className="border-r pl-4">
        <p>More</p>
        <button
          onClick={() => {
            dispatch(setOrderDetailsVisiblty());
            dispatch(setOrder(data));
          }}
          className="text-[rgb(69,163,88)]"
        >
          More details
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
