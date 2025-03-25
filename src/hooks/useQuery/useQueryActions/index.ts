import { useMutation, useQueryClient } from "react-query";
import { useAxios } from "../../useAxios";
import { useDispatch } from "react-redux";
import { notificationApi } from "../../../generic/notification";
import { signInWithGoogle } from "../../../config";
import { useReduxDispatch } from "../../useRedux";
import { AuthUser, CouponType, OrderType } from "../../../@types";
import { setCoupon, setIsLoading } from "../../../redux/coupon-slice";
import { useSignIn } from "react-auth-kit";
import {
  setAuthorizationModalVisibility,
  setOrderDetailsVisiblty,
  setOrderModalVisiblty,
} from "../../../redux/modal-slice";
import { useHandler } from "../../../generic/hendler/inde";

const useLogin = () => {
  const dispatch = useDispatch();
  const axios = useAxios();
  const notify = notificationApi();
  const sigIn = useSignIn();
  return useMutation({
    mutationFn: ({ data }: { data: object }) =>
      axios({ url: "/user/sign-in", body: data, method: "POST" }),
    onSuccess: (data: { token: string; user: AuthUser }): void => {
      const { token, user } = data;
      sigIn({
        token,
        tokenType: "Bearer",
        expiresIn: 3600,
        authState: user,
      });
      dispatch(
        setAuthorizationModalVisibility({ open: false, isLoading: false })
      );
      localStorage.setItem("token", token);

      notify("login");
    },
    onError: (error: { status: number }) => {
      if (error.status === 409) notify(409);
      dispatch(
        setAuthorizationModalVisibility({ open: true, isLoading: false })
      );
    },
  });
};
const loginWithGoogle = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const notify = notificationApi();

  return useMutation({
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return await axios({
        url: "/user/sign-in/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },
    onSuccess: ({ data }: { data: { token: string; user: AuthUser } }) => {
      dispatch(
        setAuthorizationModalVisibility({ open: false, isLoading: false })
      );
      const { token } = data;
      localStorage.setItem("token", token);
      notify("login");
    },
    onError: (error: { status: number }) => {
      if (error.status === 409) notify(409);
      dispatch(
        setAuthorizationModalVisibility({ open: true, isLoading: false })
      );
    },
  });
};

const useRegister = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
  return useMutation({
    mutationFn: ({ data }: { data: object }) =>
      axios({ url: "/user/sign-up", method: "POST", body: data }),
    onSuccess: ({ data }: { data: { token: string; user: AuthUser } }) => {
      console.log(data);
      dispatch(
        setAuthorizationModalVisibility({ open: false, isLoading: false })
      );
      notify("register");
    },
    onError: (error: { status: number }) => {
      if (error.status === 406) notify(406);
      dispatch(
        setAuthorizationModalVisibility({ open: true, isLoading: false })
      );
    },
  });
};

// const loginWithGoogle = () => {
//   const axios = useAxios();
//   const dispatch = useDispatch();
//   const notify = notificationApi();

//   return useMutation({
//     mutationFn: async () => {
//       const response = await signInWithGoogle(); // Foydalanuvchi Google orqali login qiladi
//       return axios({
//         url: "/user/sign-in/google",
//         method: "POST",
//         data: { email: response.user.email },
//       });
//     },
//     onSuccess: ({ data }: { data: { token: string; user: AuthUser } }) => {
//       dispatch(setAuthorizationModalVisibility({ open: false, isLoading: false }));
//       localStorage.setItem("token", data.token);
//       notify("login");
//     },
//     onError: (error: { status: number }) => {
//       if (error.status === 409) notify(409);
//       dispatch(setAuthorizationModalVisibility({ open: true, isLoading: false }));
//     },
//   });
// };


const useGetCoupon = () => {
  const axios = useAxios();
  const notify = notificationApi();
  const dispatch = useReduxDispatch();
  return useMutation({
    mutationFn: (data: object) => {
      dispatch(setIsLoading(true));
      return axios({
        url: "/features/coupon",
        params: data,
      });
    },
    onSuccess: (data: CouponType) => {
      notify("succses_coupon");
      dispatch(setIsLoading(false));
      dispatch(setCoupon(data.discount_for));
    },
    onError: () => {
      notify("coupon_404");
      dispatch(setIsLoading(false));
    },
  });
};

const useMakeOrderQuery = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  return useMutation({
    mutationFn: (data: object) => {
      dispatch(setOrderModalVisiblty({ open: false, isLoading: true }));
      return axios({
        url: "/order/make-order",
        method: "POST",
        body: { ...data },
      });
    },
    onSuccess: () => {
      dispatch(setOrderModalVisiblty({ open: true, isLoading: false }));
    },
  });
};

const useDeleteOrderForCashe = () => {
  const queryClient = useQueryClient();
  return ({ _id }: { _id: string }) => {
    queryClient.setQueryData("order", (oldData: OrderType[] | undefined) => {
      if (oldData) {
        return oldData.filter((value: OrderType) => value._id !== _id);
      } else {
        return [];
      }
    });
  };
};

const useDeleteOrderMutate = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const deleteCashe = useDeleteOrderForCashe();
  const notify = notificationApi();
  return useMutation({
    mutationFn: ({ _id }: { _id: string }) => {
      dispatch(setOrderDetailsVisiblty());
      deleteCashe({ _id });
      return axios({
        url: "/order/delete-order",
        method: "DELETE",
        body: { _id },
      });
    },
    onSuccess: () => {
      notify("delete");
    },
  });
};

// obuna qilish uchun funksiya
const useFollwerUser = () => {
  const axios = useAxios();
  const notify = notificationApi();
  const { useUpdateFollowerCashe } = useHandler();
  return useMutation({
    mutationFn: (_id: string) => {
      useUpdateFollowerCashe(_id);
      return axios({ url: "/user/follow", method: "POST", body: { _id } }).then(
        () => notify("follow")
      );
    },
  });
};

// obunani bekor qilish uchun funkisya
const useUnFollowerUser = () => {
  const axios = useAxios();
  const notify = notificationApi();
  const { useUpdateUnFollowerCashe } = useHandler();
  return useMutation({
    mutationFn: (_id: string) => {
      useUpdateUnFollowerCashe(_id);
      return axios({
        url: "/user/unfollow",
        method: "POST",
        body: { _id },
      }).then(() => notify("un-follow"));
    },
  });
};

export {
  useLogin,
  loginWithGoogle,
  useRegister,
  useGetCoupon,
  useMakeOrderQuery,
  useFollwerUser,
  useUnFollowerUser,
  useDeleteOrderMutate,
};
