import { Modal } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import CheckData from "../../product-checkout/orders-product/card";
import { setOrderModalVisiblty } from "../../../redux/modal-slice";
import { useNavigate } from "react-router-dom";

const OrderModal = () => {
  const { orderModalVisiblty } = useReduxSelector((state) => state.modalSlice);
  const { shop } = useReduxSelector((state) => state.shopSlice);
  const total_price = shop.reduce(
    (acc, value) => (acc += Number(value.userPrice)),
    16
  );
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const closeModal = () => {
    dispatch(setOrderModalVisiblty({ open: false, isLoading: false }));
    navigate("/profile/track-order");
  };

  return (
    <Modal
      className="!w-[650px]"
      title={"Order Confirmation"}
      footer={false}
      onCancel={closeModal}
      open={orderModalVisiblty.open}
    >
      <div className="flex items-start justify-between mt-5">
        <div className="border-r pr-4">
          <p>Order Number</p>
          <h2 className="font-bold">{Date.now()}</h2>
        </div>
        <div className="border-r pr-4">
          <p>Date</p>
          <h2 className="font-bold">{String(new Date()).slice(0, 15)}</h2>
        </div>
        <div className="border-r pr-4">
          <p>Total</p>
          <h2 className="font-bold">$ {total_price.toFixed(2)}</h2>
        </div>
        <div className="border-r pr-4">
          <p>Payment Method</p>
          <h2 className="font-bold">Cash on delivery</h2>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="font-bold text-xl border-b border-[#46A35880]">
          Order Details
        </h1>

        {shop.map((value) => (
          <CheckData key={value._id} {...value} />
        ))}
      </div>
      <div className="flex items-center justify-between py-4">
        <h2>Shipping</h2>
        <p className="font-bold text-[#46A358]">$ 16.00</p>
      </div>
      <div className="flex items-center justify-between  border-b border-[#46A35880]">
        <h2>Total</h2>
        <p className="font-bold text-[#46A358]">$ {total_price.toFixed(2)}</p>
      </div>
      <p className="text-center pt-4">
        Your order is currently being processed. You will receive an order
        <br />
        confirmation email shortly with the expected delivery date for your
        <br />
        items.
      </p>
      <button
        onClick={() => navigate("/profile/track-order")}
        className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white m-auto mt-[50px] w-[145px] h-[45px]"
      >
        Track your order
      </button>
    </Modal>
  );
};

export default OrderModal;
