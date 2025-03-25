import { type FC } from "react";
import type { DataType } from "../../../@types";
import { Rate, Skeleton } from "antd";
import AvatarItem from "../avatar";
import { HeartOutlined } from "@ant-design/icons";

const ShopInfo: FC<DataType> = ({ data, isLoading, isError }) => {
  const loader = isLoading || isError;
  const size_Style =
    "w-[28px] h-[28px] border border-[#EAEAEA] rounded-full hover:border-[#46A358] tarnsition-colors font-medium";
  return (
    <section>
      <div className="border-b-2 pb-5  border-[#A6D1Ac] flex items-end justify-between">
        {isLoading || isError ? (
          ""
        ) : (
          <div className="flex items-center gap-5">
            <AvatarItem created_by={data?.created_by as string} />
            <div>
              <h2 className="text-[#3D3D3D] text-[28px] font-bold">
                {data?.title}
              </h2>
              <p className="font-bold text-[#46A358] text-[22px]">
                ${data?.price}
              </p>
            </div>
          </div>
        )}
        <div>
          <Rate />
          <p>{data?.comments.length}Customer Rewiev</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-4">
        <div>
          <h3>Short description</h3>
          <p
          //   dangerouslySetInnerHTML={{ __html: data?.description as string }}
          >
            {data?.short_description}
          </p>
        </div>

        <h2 className="text-[#3D3D3D] text-[22px] pt-3 font-[500]">Size:</h2>
        <div className="flex gap-2">
          <button className={`${size_Style}`}>S</button>
          <button className={`${size_Style}`}>M</button>
          <button className={`${size_Style}`}>L</button>
          <button className={`${size_Style}`}>XL</button>
        </div>

        <div className="flex items-center gap-3 mt-5">
          <button className="bg-[#46A358] flex rounded-md  items-center justify-center gap-1 text-base text-white w-[130px] h-[40px]">
            BUY NOW
          </button>{" "}
          <button className="bg-transparent border border-[#46A358] flex rounded-md  items-center justify-center gap-1 text-base text-[#46A358] w-[130px] h-[40px]">
            Add To Card
          </button>
          <button className="bg-transparent border border-[#46A358] flex rounded-md  items-center justify-center gap-1 text-base text-[#46A358] w-[40px] h-[40px]">
            <HeartOutlined />
          </button>
        </div>

        <div className="text-[#727272] text-[15px] font-normal my-3">
          <span className="text-[#A5A5A5] pr-2">SKU:</span>
          {loader ? <Skeleton.Input active={true} /> : data?._id}
        </div>

        <div className="text-[#727272] text-[15px] font-normal my-3">
          <span className="text-[#A5A5A5] pr-2"> Categories:</span>
          {loader ? (
            <Skeleton.Input active={true} />
          ) : (
            data?.category.toUpperCase()
          )}
        </div>

        <div className="text-[#727272] text-[15px] font-normal my-3">
          <span className="text-[#A5A5A5] pr-2">Tags:</span>
          {loader ? <Skeleton.Input active={true} /> : "Home, Garden PLants"}
        </div>
      </div>
    </section>
  );
};

export default ShopInfo;
