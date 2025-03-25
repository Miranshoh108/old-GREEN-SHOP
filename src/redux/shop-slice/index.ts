// import { createSlice } from "@reduxjs/toolkit";
// import { getStore, setStore } from "../../store";
// import { CartType } from "../../@types";

// interface InitialStateType {
//   shop: CartType[];
// }

// const initialState: InitialStateType = {
//   shop: getStore("shop") || [],
// };

// export const shopSlice = createSlice({
//   name: "shop",
//   initialState,
//   reducers: {
//     getProductShop(state, { payload }) {
//       const findData = state.shop.find((item) => item._id === payload._id);
//       if (findData) {
//         state.shop = state.shop.map((value) => {
//           if (value._id === payload._id) {
//             return {
//               ...value,
//               count: Number(value.count) + 1,
//             };
//           }
//           return value;
//         });
//         return setStore("shop", state.shop);
//       }
//       state.shop = [...state.shop, { ...payload, count: 1 }];
//       setStore("shop", state.shop);
//     },

//     increment(state, { payload }) {
//       state.shop = state.shop.map((value) => {
//         if (value._id === payload) {
//           return {
//             ...value,
//             count: Number(value.count) + 1,
//             userPrice: (Number(value.count) + 1) * value.price,
//           };
//         }
//         return value;
//       });
//       setStore("shop", state.shop);
//     },
//     decrement(state, { payload }) {
//       state.shop = state.shop.map((value) => {
//         if (value._id === payload) {
//           return {
//             ...value,
//             count: Number(value.count) - 1,
//             userPrice: (Number(value.count) - 1) * value.price,
//           };
//         }
//         return value;
//       });
//       setStore("shop", state.shop);
//     },
//   },
// });

// export const { getProductShop } = shopSlice.actions;
// export default shopSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { getStore, setStore } from "../../store";
import { CartType } from "../../@types";

interface InitialStateType {
  shop: CartType[];
}
const initialState: InitialStateType = {
  shop: getStore("shop") || [],
};
export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    getProductShop(state, { payload }) {
      const findData = state.shop.find((item) => item._id === payload._id);
      if (findData) {
        state.shop = state.shop.map((value) => {
          if (value._id === payload._id) {
            return {
              ...value,
              count: Number(value.count) + 1,
              userPrice: (Number(value.count) + 1) * value.price,
            };
          }
          return value;
        });
        setStore("shop", state.shop);
        return;
      }

      state.shop = [
        ...state.shop,
        { ...payload, count: 1, userPrice: payload.price },
      ];
      setStore("shop", state.shop);
    },
    increment(state, { payload }) {
      state.shop = state.shop.map((value) => {
        if (value._id === payload) {
          return {
            ...value,
            count: Number(value.count) + 1,
            userPrice: (Number(value.count) + 1) * value.price,
          };
        }
        return value;
      });
      setStore("shop", state.shop);
    },
    decrement(state, { payload }) {
      state.shop = state.shop.map((value) => {
        if (value._id === payload) {
          return {
            ...value,
            count: Number(value.count) - 1,
            userPrice: (Number(value.count) - 1) * value.price,
          };
        }
        return value;
      });
      setStore("shop", state.shop);
    },
    deleteShopCard(state, { payload }) {
      state.shop = state.shop.filter((value) => value._id !== payload);
      setStore("shop", state.shop);
    },
  },
});
export const { getProductShop, increment, decrement, deleteShopCard } =
  shopSlice.actions;
export default shopSlice.reducer;
