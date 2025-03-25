import { ArrowRightOutlined } from "@ant-design/icons";
import type { FC } from "react";
import type { InfoMockItemType } from "../../../../@types";
const InfoItem: FC<InfoMockItemType> = (props) => {
  return (
    <div className="mt-10 bg-[#FBFBFB] flex items-center justify-between h-[250px] p-[25px] relative mb-5 max-[477px]:flex-col max-[477px]:h-auto ">
      <div className="h-[300px] max-[609px]:h-auto ">
        <img
          className="-translate-y-5 max-[609px]:-translate-y-0"
          src={props.img}
          alt=""
        />
      </div>
      <div className="text-end  w-[55%] max-[477px]:w-full max-[477px]:text-center">
        <h2 className="text-[#3D3D3D] font-black text-[18px] uppercase leading-6">
          {props.title}
        </h2>
        <p className="text-[#727272] text-[14px] leading-6 font-normal">
          {props.description}
        </p>
        <div className="flex items-center justify-end mt-4 max-[477px]:justify-center">
          <div className="group cursor-pointer w-[143px] h-[40px] flex items-center gap-1 justify-center bg-[#46a358] text-white rounded-md">
            <span>Find More</span>
            <ArrowRightOutlined className="group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
      <img className="absolute bottom-0 left-0" src={props.vektor} alt="" />
    </div>
  );
};

export default InfoItem;
