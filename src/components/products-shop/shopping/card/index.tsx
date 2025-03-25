// import type { FC } from "react";
// import { CartType } from "../../../../@types";
// import { DeleteFilled } from "@ant-design/icons";
// import { useReduxDispatch } from "../../../../hooks/useRedux";

// const ShoppingCard: FC<CartType> = ({
//   main_image,
//   title,
//   _id,
//   price,
//   count,
// }) => {
//   const dispatch = useReduxDispatch();
//   return (
//     <div className="my-5 bg-[#eee] flex items-center justify-between">
//       <div className="flex items-center gap-4 p-4">
//         <img className="w-[70px] h-[70px]" src={main_image} alt={title} />
//         <div>
//           <h3 className="text-16px font-medium">{title}</h3>
//           <p className="text-14px font-normal pt-[10px] max-sm:text-[12px]">
//             <span className="text-[#A5A5A5]">SKU :</span> {_id}
//           </p>
//         </div>
//       </div>

//       <div className="text-[#727272] text-[16px] font-medium  w-[20%]">
//         ${price}
//       </div>

//       <div className="flex items-center gap-3  w-[20%]">
//         <button className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white">
//           -
//         </button>
//         <span className="text-[17px]">{count}</span>
//         <button className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white">
//           +
//         </button>
//       </div>
//       <div className="text-[#727272] text-[16px] font-medium   w-[20%]">
//         34567
//       </div>
//       <DeleteFilled className="text-[#727272] text-[20px]" />
//     </div>
//   );
// };

// export default ShoppingCard;

import type { FC } from "react";
import { CartType } from "../../../../@types";
import { DeleteFilled } from "@ant-design/icons";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import {
  decrement,
  deleteShopCard,
  increment,
} from "../../../../redux/shop-slice";
import { notificationApi } from "../../../../generic/notification";

const ShoppingCard: FC<CartType> = ({
  main_image,
  title,
  _id,
  price,
  count,
  userPrice,
}) => {
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
  const disable = Number(count) <= 1 ? true : false;
  return (
    <div className="my-5 bg-[#eee] p-2 flex items-center justify-between rounded-sm">
      <div className="flex items-center gap-4 w-[40%]">
        <img className="w-[70px] h-[70px]" src={main_image} alt="" />
        <div>
          <h3 className="text-[16px] font-medium">{title}</h3>
          <p className="text-[14px] font-normal pt-[10px] max-sm:text-[12px] ">
            <span className="text-[#A5A5A5]">SKU: </span> {_id}
          </p>
        </div>
      </div>
      <div className="text-[#727272] text-[16px] font-medium  w-[20%]">
        ${price}
      </div>
      <div className="flex items-center gap-3  w-[20%]">
        <button
          disabled={disable}
          onClick={() => dispatch(decrement(_id))}
          className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white"
        >
          -
        </button>
        <span className="text-[17px]">{count}</span>
        <button
          onClick={() => dispatch(increment(_id))}
          className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white"
        >
          +
        </button>
      </div>
      <div className="text-[#727272] text-[16px] font-medium   w-[20%]">
        ${Number(userPrice).toFixed(2)}
      </div>
      <DeleteFilled
        onClick={() => {
          dispatch(deleteShopCard(_id));
          notify("delete");
        }}
        className="text-[#727272] text-[20px]"
      />
    </div>
  );
};

export default ShoppingCard;
