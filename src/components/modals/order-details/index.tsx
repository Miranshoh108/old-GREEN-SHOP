import { Modal } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { setOrderDetailsVisiblty } from "../../../redux/modal-slice";
import CheckData from "../../product-checkout/orders-product/card";
import { CartType } from "../../../@types";
import { useDeleteOrderMutate } from "../../../hooks/useQuery/useQueryActions";

const OrderDetail = () => {
  const { orderDetailVisiblty } = useReduxSelector((state) => state.modalSlice);
  const { order } = useReduxSelector((state) => state.orderSlice);
  const dispatch = useReduxDispatch();
  const { mutate } = useDeleteOrderMutate();
  return (
    <Modal
      className="!w-[650px]"
      onOk={() => mutate({ _id: order?._id as string })}
      okType="danger"
      okText={"Delete"}
      onCancel={() => dispatch(setOrderDetailsVisiblty())}
      open={orderDetailVisiblty}
      title="Order Confirmation"
    >
      <div className="flex items-start justify-between mt-5">
        <div className="border-r pr-4">
          <p>Order Number</p>
          <h2 className="font-bold">{order?._id}</h2>
        </div>
        <div className="border-r pr-4">
          <p>Date</p>
          <h2 className="font-bold">{order?.created_at.slice(0, 10)}</h2>
        </div>
        <div className="border-r pr-4">
          <p>Total</p>
          <h2 className="font-bold">
            $ {order?.extra_shop_info.total?.toFixed(2) ?? 0}
          </h2>
        </div>
        <div className="border-r pr-4">
          <p>Payment Method</p>
          <h2 className="font-bold">{order?.extra_shop_info.method}</h2>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-xl border-b border-[#46A35880]">
          Order Details
        </h1>
        {order?.shop_list?.map((value: CartType) => (
          <CheckData key={value._id} {...value} />
        ))}
      </div>
      <div className="flex items-center justify-between py-4">
        <h2>Shipping</h2>
        <p className="font-bold text-[#46A358]">$ 16.00</p>
      </div>
      <div className="flex items-center justify-between  border-b border-[#46A35880]">
        <h2>Total</h2>
        <p className="font-bold text-[#46A358]">
          $ {order?.extra_shop_info.total?.toFixed(2) ?? 0}
        </p>
      </div>
    </Modal>
  );
};

export default OrderDetail;
