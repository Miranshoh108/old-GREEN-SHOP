// import { useParams } from "react-router-dom";
// import type { BlogTypeApiItem, UserTypeApi } from "../../../@types";
// import { Avatar } from "antd";
// import { useLoader } from "../../../generic/loading";
// import {
//   EyeOutlined,
//   HeartOutlined,
//   MessageOutlined,
//   ShareAltOutlined,
// } from "@ant-design/icons";
// import { useQuerHandler } from "../../../hooks/useQuery";

// const Rendering = () => {
//   const { id, user_id } = useParams();
//   const {
//     data: user,
//     isLoading: isLoadingUser,
//     isError: isErrorUser,
//   }: UserTypeApi = useQuerHandler({
//     pathname: "user",
//     url: `/user/by_id/${user_id}`,
//   });
//   const { data, isLoading, isError }: BlogTypeApiItem = useQuerHandler({
//     pathname: `blog/${id}`,
//     url: `/user/blog/${id}`,
//   });
//   const handleShare = async () => {
//     const shareData = {
//       title: data?.title,
//       text: data?.short_description,
//       url: window.location.href,
//     };

//     if (navigator.share) {
//       try {
//         await navigator.share(shareData);
//         alert("Muvaffaqiyatli ulashildi!");
//       } catch (err) {
//         console.error("Ulashish bekor qilindi yoki xatolik yuz berdi:", err);
//       }
//     }
//   };

//   const { blog_id_loading } = useLoader();
//   const loading = isLoading || isError || isErrorUser || isLoadingUser;
//   return (
//     <section className="w-[70%] m-auto py-10">
//       {loading ? (
//         blog_id_loading()
//       ) : (
//         <div>
//           <div className="flex item-end justify-between">
//             <div className="flex items-center gap-4">
//               <Avatar className="w-[50px] h-[50px]" src={user?.profile_photo} />
//               <div>
//                 <h2 className="font-bold text-[18px]">
//                   {user?.name} {user?.surname}
//                 </h2>
//                 <p className="text-[12px]">
//                   Followers {user?.followers?.length}
//                 </p>
//               </div>
//             </div>
//             <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white px-[20px] py-[8px]">
//               Follow
//             </button>
//           </div>
//           <div>
//             <h2 className="py-[20px] font-bold text-[24px]">{data?.title}</h2>
//             <div
//               dangerouslySetInnerHTML={{ __html: data?.content as string }}
//             ></div>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-1">
//               <EyeOutlined /> <p>{data?.views}</p>
//             </div>
//             <div className="flex items-center gap-1">
//               <HeartOutlined /> <p>0</p>
//             </div>
//             <div className="flex items-center gap-1">
//               <MessageOutlined /> <p>0</p>
//             </div>
//             <div
//               onClick={handleShare}
//               className="flex items-center gap-1 cursor-pointer"
//             >
//               <ShareAltOutlined /> <p>0</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Rendering;

import { useNavigate, useParams } from "react-router-dom";
import type { BlogTypeApiItem, UserTypeApi } from "../../../@types";
import { Avatar, Tooltip } from "antd";
import { useLoader } from "../../../generic/loading";
import {
  EyeOutlined,
  HeartOutlined,
  MessageOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useIsAuthenticated } from "react-auth-kit";
import { useDispatch } from "react-redux";
import { useQuerHandler } from "../../../hooks/useQuery";
import { setAuthorizationModalVisibility } from "../../../redux/modal-slice";

const Rendering = () => {
  const { id, user_id } = useParams();
  const dispatch = useDispatch();
  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  }: UserTypeApi = useQuerHandler({
    pathname: `user/${user_id}`,
    url: `/user/by_id/${user_id}`,
  });
  const { data, isLoading, isError }: BlogTypeApiItem = useQuerHandler({
    pathname: `blog/${id}`,
    url: `/user/blog/${id}`,
  });
  const handleShare = async () => {
    const shareData = {
      title: data?.title,
      text: data?.short_description,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        alert("Muvaffaqiyatli ulashildi!");
      } catch (err) {
        console.error("Ulashish bekor qilindi yoki xatolik yuz berdi:", err);
      }
    }
  };
  const navigate = useNavigate();
  const isAuth: boolean = useIsAuthenticated()();

  const { blog_id_loading } = useLoader();
  const loading = isLoading || isError || isErrorUser || isLoadingUser;
  return (
    <section className="w-[70%] m-auto py-10">
      {loading ? (
        blog_id_loading()
      ) : (
        <div>
          <div className="flex item-end justify-between">
            <div className="flex items-center gap-4">
              <div
                className="cursor-pointer"
                onClick={() => {
                  if (isAuth) {
                    navigate(`/user/${user_id}`);
                  } else {
                    dispatch(
                      setAuthorizationModalVisibility({
                        open: true,
                        isLoading: false,
                      })
                    );
                  }
                }}
              >
                <Tooltip
                  placement="top"
                  title={`${user?.name || ""} ${user?.surname || ""}`}
                >
                  <Avatar
                    className="w-[50px] h-[50px]"
                    src={user?.profile_photo}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
              </div>
              <div>
                <h2 className="font-bold text-[18px]">
                  {user?.name} {user?.surname}
                </h2>
                <p className="text-[12px]">
                  Followers {user?.followers?.length}
                </p>
              </div>
            </div>
            <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white px-[20px] py-[8px]">
              Follow
            </button>
          </div>
          <div>
            <h2 className="py-[20px] font-bold text-[24px]">{data?.title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: data?.content as string }}
            ></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <EyeOutlined /> <p>{data?.views}</p>
            </div>
            <div className="flex items-center gap-1">
              <HeartOutlined /> <p>0</p>
            </div>
            <div className="flex items-center gap-1">
              <MessageOutlined /> <p>0</p>
            </div>
            <div
              onClick={handleShare}
              className="flex items-center gap-1 cursor-pointer"
            >
              <ShareAltOutlined /> <p>0</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Rendering;
