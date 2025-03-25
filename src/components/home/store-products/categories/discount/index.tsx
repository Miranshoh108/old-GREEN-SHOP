import { DiscounType } from "../../../../../@types";
import { useQuerHandler } from "../../../../../hooks/useQuery";

const Discount = () => {
  const { data }: { data?: DiscounType } = useQuerHandler({
    pathname: "discount",
    url: "/features/discount",
  });
  return (
    <div className="w-full bg-[#eef7f1] text-center px-4 py-[20px]">
      <h2 className="text-[#46A358] text-[30px] font-normal leading-[40px]">
        {data?.title}
      </h2>
      <h3 className="text-[#3D3D3D] font-bold text-[20px] pt-[17px]">
        UP TO {data?.discoount_up_to}% OFF
      </h3>
      <img src={data?.poster_image_url} alt="" />
    </div>
  );
};

export default Discount;
