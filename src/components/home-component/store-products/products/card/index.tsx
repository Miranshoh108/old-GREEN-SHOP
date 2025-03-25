import type { FC } from "react";
import type { AuthUser, CartType } from "../../../../../@types";
import { useNavigate } from "react-router-dom";
import {
  HeartFilled,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useReduxDispatch } from "../../../../../hooks/useRedux";
import { getProductShop } from "../../../../../redux/shop-slice";
import { notificationApi } from "../../../../../generic/notification";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { setAuthorizationModalVisibility } from "../../../../../redux/modal-slice";
import { useHandler } from "../../../../../generic/hendler/inde";

const Card: FC<CartType> = (props) => {
  const style_icons: string =
    "bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]";
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  const notifiy = notificationApi();

  const isAuth = useIsAuthenticated()();

  const auth: AuthUser = useAuthUser()() ?? {};
  const { likeHandler } = useHandler();
  let findLikeData = auth.wishlist?.filter(
    (value) => value.flower_id === String(props._id)
  )[0];

  let isLiked = Boolean(findLikeData);
  console.log(isLiked);
  return (
    <div className="flex flex-col gap-[0.6rem]">
      <div className="h-[30rem] bg-[#f5f5f5] flex justify-center items-center transition-all duration-700  relative group">
        <img className="w-4/5 h-[80%]" src={props.main_image} alt="" />
        <div className="hidden group-hover:flex transition-all duration-700 items-center gap-[1rem] absolute bottom-[1.7rem]">
          <button
            onClick={() => {
              dispatch(getProductShop(props));
              notifiy("add");
            }}
            className="text-[1.8rem] text-[#3D3D3D] hover:text-[#46A358] w-[3.5rem] h-[3.5rem] bg-[#ffff] rounded-[0.4rem] flex items-center justify-center"
          >
            <ShoppingCartOutlined />
          </button>
          <div
            onClick={() => {
              isAuth
                ? likeHandler({
                    isLiked,
                    data: {
                      route_path: props.category,
                      flower_id: props._id,
                    },
                  })()
                : dispatch(
                    setAuthorizationModalVisibility({
                      open: true,
                      loading: false,
                    })
                  );
            }}
            className={style_icons}
          >
            {isLiked ? (
              <HeartFilled className="text-[22px] text-[red]" />
            ) : (
              <HeartOutlined className="text-[22px]" />
            )}
          </div>
          <button
            onClick={() => navigate(`/shop/${props.category}/${props._id}`)}
            className="text-[1.8rem] text-[#3D3D3D] hover:text-[#46A358] w-[3.5rem] h-[3.5rem] bg-[#ffff] rounded-[0.4rem] flex items-center justify-center"
          >
            <SearchOutlined />
          </button>
        </div>
      </div>
      <h4 className="font-[500] text-[1.6rem] text-[#3D3D3D] ">
        {props.title}
      </h4>
      <div className="price flex items-center gap-[1.7rem]">
        <h5 className="text-[#46A358] font-[700] text-[1.8rem]">
          {props.price} $
        </h5>
        <h6 className="text-[#A5A5A5] font-[400] text-[1.5rem] line-through">
          {props.discount_price} $
        </h6>
      </div>
    </div>
  );
};

export default Card;
