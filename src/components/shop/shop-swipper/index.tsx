import { Image, Skeleton } from "antd";
import { useState, type FC } from "react";
import { useLoader } from "../../../generic/loading";
import { DataType } from "../../../@types";

const ShopSWipper: FC<DataType> = ({ data, isError, isLoading }) => {
  const [image_src, setImage_src] = useState<string>("");
  const { image_loading } = useLoader();
  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col gap-7 justify-between h-full">
        {isLoading || isError
          ? image_loading()
          : data?.detailed_images.map((value, idx) => (
              <div
                key={idx}
                onClick={() => setImage_src(value)}
                className="w-[120px] h-[120px] bg-[#e5e5e5] cursor-pointer border-2 hover:border-[#46A358] transition-colors"
              >
                <img className="w-full h-full" src={value} alt="" />
              </div>
            ))}
      </div>
      <div className="cursor-pointer flex justify-center items-center  w-full order-1">
        {isError || isLoading ? (
          <Skeleton.Image className="!w-full !h-[500px]" active={true} />
        ) : (
          <Image
            className=""
            src={image_src ? image_src : data?.main_image}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default ShopSWipper;
