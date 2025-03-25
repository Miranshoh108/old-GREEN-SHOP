import { FC } from "react";
import { HeroSliderType } from "../../../../@types";

const HeroItem: FC<HeroSliderType> = ({
  small_img_url,
  subTitle,
  title,
  description,
  buttonText,
  big_img_url,
}) => {
  return (
    <div className="bg-[#f5f5f5] flex items-center h-[40rem] px-10 w-[90%] m-auto">
      <div className="showcase-left flex flex-col gap-[0.4rem]">
        <h3 className="text-[#3D3D3D] text-[1.4rem] font-medium">{subTitle}</h3>
        <h2 className="font-black w-[76%] leading-[6.5rem] pt-[0.7rem] pb-[0.5rem] text-[#3D3D3D] uppercase text-[7rem]">
          {title} <span className="text-[#46A358]">Planet</span>{" "}
        </h2>
        <p className="w-3/5 text-[#727272] text-[1.4rem] leading-8 mb-5 max-md:w-[100%]  max-sm:text-[1.2rem] max-sm:leading-4">
          {description}
        </p>
        <button className="w-[13.5rem] h-[4rem] rounded-[0.6rem] bg-[#46A358] text-white text-[1.6rem] font-bold uppercase">
          {buttonText}
        </button>
      </div>
      <div className="showcase-right relative">
        <img src={big_img_url} alt="big" />
        <img src={small_img_url} className="absolute bottom-4 " alt="small" />
      </div>
    </div>
  );
};

export default HeroItem;
