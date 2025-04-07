import { Form, Input } from "antd";
import type { RegisterType } from "../../../../@types";
// import img
import google from "../../../../assets/icons/google.svg";
import facebook from "../../../../assets/icons/facebook.svg";
import { LoadingOutlined } from "@ant-design/icons";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { notificationApi } from "../../../../generic/notification";
import {
  useRegister,
  loginWithGoogle,
} from "../../../../hooks/useQuery/useQueryActions";
import { setAuthorizationModalVisibility } from "../../../../redux/modal-slice";

const Register = () => {
  const { mutate } = useRegister();
  const dispatch = useReduxDispatch();
  const { authorizationModalVisibility } = useReduxSelector(
    (state) => state.modalSlice
  );

  const nottify = notificationApi();

  const onFinish = (e: RegisterType) => {
    if (e.password !== e.confirm_password) return nottify("passowrd");
    dispatch(setAuthorizationModalVisibility({ open: true, isLoading: true }));

    const { name, surname, email, password, phone_number } = e;
    mutate({ data: { name, surname, email, password, phone_number } });
  };

  const { mutate: registerWithGoogle } = loginWithGoogle();

  return (
    <div className="w-[65%] m-auto mt-[5.3rem]">
      <div className="login-top flex flex-col gap-[1.4rem] ">
        <p className="font-medium text-[1.3rem] text-[#545353]">
          Enter your username and password to login.
        </p>
        <Form
          name="basic"
          onFinish={onFinish}
          initialValues={{ remember: true }}
          autoComplete="off"
          className="w-[100%]"
        >
          <Form.Item<RegisterType>
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input
              className="border-[#EAEAEA] h-[4rem] hover:border-[#46A358] focus:border-[#46A358]"
              placeholder="name"
            />
          </Form.Item>
          <Form.Item<RegisterType>
            name="surname"
            rules={[{ required: true, message: "Please input your surname!" }]}
          >
            <Input
              className="border-[#EAEAEA] h-[4rem] hover:border-[#46A358] focus:border-[#46A358]"
              placeholder="surname"
            />
          </Form.Item>
          <Form.Item<RegisterType>
            name="phone_number"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              className="border-[#EAEAEA] h-[4rem] hover:border-[#46A358] focus:border-[#46A358]"
              placeholder="phone_number"
            />
          </Form.Item>
          <Form.Item<RegisterType>
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              className="border-[#EAEAEA] h-[4rem] hover:border-[#46A358] focus:border-[#46A358]"
              placeholder="enter your emile adress"
            />
          </Form.Item>
          <Form.Item<RegisterType>
            name="password"
            className="flex flex-col gap-[14px]"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              className="border-[#EAEAEA] h-[4rem] hover:border-[#46A358] focus:border-[#46A358]"
              placeholder="password"
            />
          </Form.Item>
          <Form.Item<RegisterType>
            name="confirm_password"
            className="flex flex-col gap-[14px]"
            rules={[
              {
                required: true,
                message: "Please input your confirm  password!",
              },
            ]}
          >
            <Input.Password
              className="border-[#EAEAEA] h-[4rem] hover:border-[#46A358] focus:border-[#46A358]"
              placeholder="confirm password"
            />
          </Form.Item>
          <p className="text-end text-[#46A358] text-[1.4rem] cursor-pointer hover:underline">
            Forgot password ?
          </p>
          <button
            disabled={authorizationModalVisibility.isLoading}
            className={`mt-[2.7rem] flex items-center justify-center gap-[0.5rem] w-[100%] bg-[#46A358] h-[4.5rem] rounded-[0.5rem] text-[1.6rem] font-bold text-[#fff] ${
              authorizationModalVisibility.isLoading && "opacity-70"
            }`}
            type="submit"
          >
            {authorizationModalVisibility.isLoading ? (
              <LoadingOutlined />
            ) : (
              "Register"
            )}
          </button>
        </Form>
      </div>

      <div className="flex pb-[2.2rem] items-center justify-center mt-[4.6rem] mb-5 gap-4">
        <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
        <p className="w-[40%]text-[#3D3D3D] text-[13px]">Or Register with</p>
        <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
      </div>

      <div className="login-bottom flex flex-col gap-[1.5rem]">
        <button
          onClick={() => registerWithGoogle()}
          className="font-bold text-[#727272] text-[1.3rem] w-full h-[4rem] rounded-[0.5rem] border-[#EAEAEA] border flex items-center justify-center gap-[1rem]"
        >
          <img src={google} alt="google" />
          Register with Google
        </button>
        <button className="font-bold text-[#727272] text-[1.3rem]  w-full h-[4rem] rounded-[0.5rem] border-[#EAEAEA] border flex items-center justify-center gap-[1rem]">
          <img src={facebook} alt="facebook" />
          Register with Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;
