// import { useAuthUser, useSignIn } from "react-auth-kit";
// import { useAxios } from "../../hooks/useAxios";
// import { AuthUser } from "../../@types";
// import { notificationApi } from "../notification";

// interface LikeHandlerType {
//   isLiked: boolean;
//   data: {
//     route_path: string;
//     flower_id: string;
//   };
// }
// const useHandler = () => {
//   const axios = useAxios();
//   const auth: AuthUser = useAuthUser()() ?? {};
//   const signIn = useSignIn();
//   const notify = notificationApi();
//   const likeHandler = ({ data, isLiked }: LikeHandlerType) => {
//     const like = async () => {
//       signIn({
//         token: localStorage.getItem("token") as string,
//         tokenType: "Bearer",
//         expiresIn: 3600,
//         authState: {
//           ...auth,
//           wishlist: [...(auth.wishlist ?? []), data],
//         },
//       });
//       notify("like");
//       await axios({
//         url: "/user/create-wishlist",
//         method: "POST",
//         body: data,
//       });
//     };
//     const disLike = async () => {
//       signIn({
//         token: localStorage.getItem("token") as string,
//         tokenType: "Bearer",
//         expiresIn: 3600,
//         authState: {
//           ...auth,
//           wishlist: auth.wishlist?.filter(
//             (value) => value.flower_id !== data.flower_id
//           ),
//         },
//       });
//       notify("disLike");
//       await axios({
//         url: "/user/delete-wishlist",
//         method: "DELETE",
//         body: { _id: data.flower_id },
//       });
//       console.log(auth);
//     };
//     if (isLiked) {
//       return disLike;
//     }

//     return like;
//   };

//   return { likeHandler };
// };

// export { useHandler };

import { useAuthUser, useSignIn } from "react-auth-kit";
import { useAxios } from "../../hooks/useAxios";
import { AuthUser } from "../../@types";
import { notificationApi } from "../notification";

interface LikeHandlerType {
  isLiked: boolean;
  data: {
    route_path: string;
    flower_id: string;
  };
}
const useHandler = () => {
  const axios = useAxios();
  const auth: AuthUser = useAuthUser()() ?? {};
  const signIn = useSignIn();
  const notify = notificationApi();

  const updaterUser = (sholdUser: object) => {
    signIn({
      token: localStorage.getItem("token") as string,
      tokenType: "Bearer",
      expiresIn: 3600,
      authState: {
        ...auth,
        ...sholdUser,
      },
    });
  };
  const likeHandler = ({ data, isLiked }: LikeHandlerType) => {
    const like = async () => {
      signIn({
        token: localStorage.getItem("token") as string,
        tokenType: "Bearer",
        expiresIn: 3600,
        authState: {
          ...auth,
          wishlist: [...(auth.wishlist ?? []), data],
        },
      });
      notify("like");
      await axios({
        url: "/user/create-wishlist",
        method: "POST",
        body: data,
      });
    };
    const disLike = async () => {
      signIn({
        token: localStorage.getItem("token") as string,
        tokenType: "Bearer",
        expiresIn: 3600,
        authState: {
          ...auth,
          wishlist: auth.wishlist?.filter(
            (value) => value.flower_id !== data.flower_id
          ),
        },
      });
      notify("disLike");
      await axios({
        url: "/user/delete-wishlist",
        method: "DELETE",
        body: { _id: data.flower_id },
      });
    };
    if (isLiked) {
      return disLike;
    }

    return like;
  };
  const updeterUserDetails = async (data: object) => {
    try {
      updaterUser(data);
      await axios({
        url: "/user/account-details",
        method: "POST",
        body: data,
      }).then(() => notify("edit"));
    } catch (error) {
      console.log(error);
    }
  };

  const upadeterUserAdress = async ({
    data,
    e,
  }: {
    data: object;
    e: object;
  }) => {
    try {
      updaterUser(data);
      await axios({
        url: "/user/address",
        method: "POST",
        body: e,
      }).then(() => notify("edit_adress"));
    } catch (error) {
      console.log(error);
    }
  };

  const useUpdateFollowerCashe = (follower_id: string) => {
    return updaterUser({ followers: [...(auth.followers ?? []), follower_id] });
  };
  const useUpdateUnFollowerCashe = (follower_id: string) => {
    return updaterUser({
      followers: auth.followers?.filter((value) => value !== follower_id),
    });
  };
  return {
    likeHandler,
    updeterUserDetails,
    upadeterUserAdress,
    useUpdateUnFollowerCashe,
    useUpdateFollowerCashe,
  };
};

export { useHandler };
