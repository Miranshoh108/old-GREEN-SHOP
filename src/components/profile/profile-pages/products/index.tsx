import { Empty } from "antd";
import { CartType } from "../../../../@types";
import { useLoader } from "../../../../generic/loading";
import { useQuerHandler } from "../../../../hooks/useQuery";
import Card from "../../../home-component/store-products/products/card";

const ProductsProfile = () => {
  const {
    data,
    isLoading,
    isError,
  }: { data?: CartType[]; isLoading: boolean; isError: boolean } =
    useQuerHandler({
      pathname: "my-products",
      url: "/user/products",
    });
  console.log(data);
  const { cart_loading } = useLoader();

  return (
    <div className="grid grid-cols-3 gap-10">
      {isLoading || isError ? (
        cart_loading()
      ) : !data?.length ? (
        <div className="flex justify-center">
          <Empty description={"No data"} />
        </div>
      ) : (
        data?.map((value: CartType) => <Card key={value?._id} {...value} />)
      )}
    </div>
  );
};

export default ProductsProfile;
