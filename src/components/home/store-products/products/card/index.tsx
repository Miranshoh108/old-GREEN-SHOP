import type { FC } from "react";
import type { AuthUser, CartType } from "../../../../../@types";
import {
  HeartFilled,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useReduxDispatch } from "../../../../../hooks/useRedux";
import { getProductShop } from "../../../../../redux/shop-slice";
import { notificationApi } from "../../../../../generic/notification";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { useHandler } from "../../../../../generic/hendler/inde";
import { setAuthorizationModalVisibility } from "../../../../../redux/modal-slice";

const Card: FC<CartType> = (props) => {
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
  const checkIsAuth = useIsAuthenticated();
  const isAuth = checkIsAuth();
  const auth: AuthUser = useAuthUser()() ?? {};
  const { likeHandler } = useHandler();
  const findLikeData = auth.wishlist?.filter(
    (value) => value.flower_id === String(props._id)
  )[0];
  const isLiked = Boolean(findLikeData);
  const style_icons: string =
    "bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]";
  return (
    <div>
      <div className="group h-[300px] bg-[#f5f5f5] flex justify-center items-center relative">
        <img
          src={props.main_image}
          alt="flower"
          className="w-4/5 h-[80%] max-sm:h-[100%]"
        />
        <div className="hidden items-center absolute bottom-4 gap-5  group-hover:flex">
          <div
            onClick={() => {
              dispatch(getProductShop(props));
              notify("add");
            }}
            className={style_icons}
          >
            <ShoppingCartOutlined className="text-[22px]" />
          </div>
          <div
            onClick={() => {
              if (isAuth) {
                likeHandler({
                  isLiked,
                  data: {
                    route_path: props.category,
                    flower_id: props._id,
                  },
                })();
              } else {
                dispatch(
                  setAuthorizationModalVisibility({
                    open: true,
                    loading: false,
                  })
                );
              }
            }}
            className={style_icons}
          >
            {isLiked ? (
              <HeartFilled className="text-[22px] text-[red]" />
            ) : (
              <HeartOutlined className="text-[22px]" />
            )}
          </div>
          <div
            onClick={() => navigate(`/shop/${props.category}/${props._id}`)}
            className={style_icons}
          >
            <SearchOutlined className="text-[22px]" />
          </div>
        </div>
      </div>
      <h3 className="text-[#3D3D3D] text-[16px] font-[500] pt-[10px] pb-[2px]">
        {props.title}
      </h3>
      <div className="flex items-center gap-3">
        <h3 className="text-[#46A358] text-[18px] font-bold">
          {props.price} $
        </h3>
        <h3 className="font-[300] text-[#A5A5A5] line-through">
          {props.discount_price} $
        </h3>
      </div>
    </div>
  );
};

export default Card;
