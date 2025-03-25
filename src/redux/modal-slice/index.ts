import { createSlice } from "@reduxjs/toolkit";

interface ModalAuthorizationType {
  open: boolean;
  isLoading: boolean;
}
interface OrderModalTtpe {
  open: boolean;
  isLoading: boolean;
}

interface InitialStateType {
  authorizationModalVisibility: ModalAuthorizationType;
  orderModalVisiblty: OrderModalTtpe;
  orderDetailVisiblty: boolean;
}

const initialState: InitialStateType = {
  authorizationModalVisibility: {
    open: false,
    isLoading: false,
  },
  orderModalVisiblty: {
    open: false,
    isLoading: false,
  },
  orderDetailVisiblty: false,
};
const modalSlice = createSlice({
  initialState,
  name: "Modal",
  reducers: {
    setAuthorizationModalVisibility(state, { payload }) {
      state.authorizationModalVisibility = payload;
    },
    setOrderModalVisiblty(state, { payload }) {
      state.orderModalVisiblty = payload;
    },
    setOrderDetailsVisiblty(state) {
      state.orderDetailVisiblty = !state.orderDetailVisiblty;
    },
  },
});

export const {
  setAuthorizationModalVisibility,
  setOrderModalVisiblty,
  setOrderDetailsVisiblty,
} = modalSlice.actions;
export default modalSlice.reducer;
