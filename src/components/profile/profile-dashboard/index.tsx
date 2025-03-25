import { useLocation, useNavigate } from "react-router-dom";
import { path_profile } from "../../../utils";
import { ExclamationCircleOutlined, LogoutOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useSignOut } from "react-auth-kit";

const ProfileDashboard = () => {
  const navigate = useNavigate();
  const activeStyle: string = "text-[#45A358] border-l-4 border-[#45A358]";
  const { pathname } = useLocation();
  const [modal, contextHolder] = Modal.useModal();
  const signOut = useSignOut();
  const logOut = () => {
    modal.confirm({
      title: "Do you want to logout?",
      icon: <ExclamationCircleOutlined />,
      content: "Please make sure, bacause this action cannot be undone!",
      okText: "I'm sure ",
      cancelText: "Cancel",
      okType: "danger",
      onOk: () => {
        signOut();
        navigate("/");
      },
    });
  };

  return (
    <div className="bg-[#FBFBFB] h-fit text-xl p-[15px] w-[350px] max-md:hidden">
      <h1 className="font-bold">My Account</h1>
      <div className="pb-5 border-b border-[#45A358]">
        {path_profile.map(({ Icon, title, path, id }) => (
          <div
            key={id}
            onClick={() => navigate(`/profile/${path}`)}
            className={`flex item-center gap-3  hover:bg-white p-3 hover:text-[#45A358] cursor-pointer hover:border-l-4 border-[#45A358] ${
              pathname.slice(9) === path && activeStyle
            }`}
          >
            <Icon />
            <div className="font-normal text-base">{title}</div>
          </div>
        ))}
      </div>
      <button
        onClick={logOut}
        className="flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] mt-[20px] text-base text-red-600"
      >
        <LogoutOutlined />
        Log out
      </button>
      {contextHolder}
    </div>
  );
};

export default ProfileDashboard;
