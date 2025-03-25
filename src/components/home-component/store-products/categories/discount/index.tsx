import { DiscounType } from "../../../../../@types";
import { useQuerHandler } from "../../../../../hooks/useQuery";
import saleImg from '../../../.././../assets//imgs/discount-top-img.svg'
import bigCircle from '../../../.././../assets//imgs/big-sicrcle.png'
import littleCircle from '../../../.././../assets//imgs/little-circle.png'
import square from '../../../.././../assets//imgs/square.png'

const Discount = () => {
  const { data} : {data? : DiscounType} = useQuerHandler({
    pathname: "discount",
    url: "/features/discount/",
  });

  return <div className="w-full bg-custom-gradient relative  flex items-center flex-col" >
        <img src={square} alt="" className=" absolute bottom-[10rem] left-[2rem]" />
        <img src={bigCircle} alt="" className="absolute bottom-[3rem] right-[2rem]" />
        <img src={littleCircle} alt="" className="absolute top-[10rem] left-[2rem]" />
        <img src={saleImg} alt="" className=" self-center w-[90%]" />
        <div className="p-[1.4rem] text-center flex flex-col gap-[1rem]">
            <h3 className="text-[#46A358] text-[3rem] font-normal leading-[4rem]">{data?.title}</h3>
            <h4 className="font-bold text-[2.3rem] text-[#3D3D3D]">UP TO {data?.discoount_up_to}% OFF</h4>

            <img src={data?.poster_image_url} alt="" />
        </div>
  </div>;
};

export default Discount;
