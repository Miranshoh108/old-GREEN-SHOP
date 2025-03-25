import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  isLaoding: boolean;
  coupon: number;
}

const initialState: InitialStateType = {
  isLaoding: false,
  coupon: 0,
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    setCoupon(state, { payload }) {
      state.coupon = payload;
    },
    setIsLoading(state, { payload }) {
      state.isLaoding = payload;
    },
  },
});

export const { setCoupon, setIsLoading } = couponSlice.actions;
export default couponSlice.reducer;
