import type { FC } from "react";
import type { AdviceMockItemType } from "../../../../@types";
const AdviceItem: FC<AdviceMockItemType> = (props) => {
  const border = `${
    props.border &&
    "border-l-2 pl-4 border-[rgba(70, 163, 88, 0.10)] max-sm:border-none"
  }`;
  return (
    <div
      className={`${border} max-sm:flex items-center justify-center flex-col`}
    >
      <img src={props.img} alt="" />
      <h2 className="py-3 text-[#3D3D3D] font-bold">{props.title}</h2>
      <p className="text-[#727272] text-sm leading-6">{props.description}</p>
    </div>
  );
};

export default AdviceItem;
