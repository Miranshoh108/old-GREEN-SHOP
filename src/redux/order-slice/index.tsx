import { createSlice } from "@reduxjs/toolkit";
import { OrderType } from "../../@types";

interface InitialStateType {
  order?: OrderType;
}

const initialState: InitialStateType = {};

const orderSLice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    setOrder(state, { payload }) {
      state.order = payload;
    },
  },
});

export const { setOrder } = orderSLice.actions;
export default orderSLice.reducer;
