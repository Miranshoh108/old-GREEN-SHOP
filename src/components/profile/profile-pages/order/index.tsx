import { Empty } from "antd";
import type { OrderType } from "../../../../@types";
import OrderItem from "./order-item";
import { useQuerHandler } from "../../../../hooks/useQuery";
import { useLoader } from "../../../../generic/loading";

const Order = () => {
  const {
    data,
    isLoading,
    isError,
  }: { data?: OrderType[]; isLoading: boolean; isError: boolean } =
    useQuerHandler({
      pathname: "order",
      url: "/order/get-order",
    });
  const { user_order_loader } = useLoader();
  return (
    <div>
      <h1 className="font-bold text-2xl">Track your Orders</h1>
      {isLoading || isError ? (
        user_order_loader()
      ) : !data?.slice(62).length ? (
        <Empty description={<p>No order</p>} />
      ) : (
        data
          ?.slice(62)
          .map((value: OrderType) => <OrderItem key={value._id} {...value} />)
      )}
    </div>
  );
};

export default Order;
