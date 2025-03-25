import { Modal } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { setAuthorizationModalVisibility } from "../../../redux/modal-slice";
import Login from "./login";
import Register from "./register";
import { useState } from "react";

const AuthorizationModal = () => {
  const { authorizationModalVisibility } = useReduxSelector(
    (state) => state.modalSlice
  );

  const dispatch = useReduxDispatch();
  const [login, setLogin] = useState<boolean>(true);

  return (
    <>
      <Modal
        open={authorizationModalVisibility.open}
        onCancel={() =>
          dispatch(
            setAuthorizationModalVisibility({ open: false, isLoading: false })
          )
        }
        footer={false}
      >
        <div className="flex items-center justify-center gap-[1.2rem] mt-6">
          <h3
            onClick={() => setLogin(true)}
            className={`cursor-pointer text-[2rem] text-[#3D3D3D] font-medium ${
              login && "text-[#46A358]"
            }`}
          >
            Login
          </h3>
          <div className="h-[1.4rem] w-[0.1rem] bg-[#3D3D3D]"></div>
          <h3
            onClick={() => setLogin(false)}
            className={`cursor-pointer text-[2rem] text-[#3D3D3D] font-medium ${
              !login && "text-[#46A358]"
            }`}
          >
            Register
          </h3>
        </div>
        {login ? <Login /> : <Register />}
      </Modal>
    </>
  );
};

export default AuthorizationModal;
