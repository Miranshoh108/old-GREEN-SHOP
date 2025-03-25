import { ArrowRightOutlined } from "@ant-design/icons";
import { type FC } from "react";
import { PostMockItemType } from "../../../../@types";
const PostItem: FC<PostMockItemType> = (props) => {
  return (
    <div className="bg-[#FBFBFB]">
      <img width={"100%"} src={props.img} alt="" />
      <div className="px-[5px] pb-[15px] ">
        <h3 className="text-[#46A358] text-[14px] font-medium pt-1">
          {props.subTitle}
        </h3>
        <h2 className="text-[#3D3D3D] text-[20px] font-bold max-xl:text-[16px] max-xl:leading-5">
          {props.title}
        </h2>
        <p className="text-[#727272] text-sm font-normal leading-6 py-[8px] max-xl:leading-4">
          {props.description}
        </p>
        <div className="group cursor-pointer flex items-center gap-1 ">
          <p className="text-[#3D3D3D] font-medium text-sm">Read More </p>
          <ArrowRightOutlined className="group-hover:translate-x-1 transition-all " />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
