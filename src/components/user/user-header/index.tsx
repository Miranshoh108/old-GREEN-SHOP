import { useQueryClient } from "react-query";
import type { AuthUser } from "../../../@types";
import { useParams } from "react-router-dom";
import { Modal, Skeleton } from "antd";
import {
  MessageOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { useAuthUser } from "react-auth-kit";
import {
  useFollwerUser,
  useUnFollowerUser,
} from "../../../hooks/useQuery/useQueryActions";

const UserHeader = ({ isLoad }: { isLoad: boolean }) => {
  const queryClient = useQueryClient();
  const { _id } = useParams();
  const data: AuthUser = queryClient.getQueryData(`user/${_id}/data`) ?? {};
  const authUser = useAuthUser()() as AuthUser;
  const { mutate: unFollowUser } = useUnFollowerUser();
  console.log(authUser._id);
  const { mutate } = useFollwerUser();
  const btn_style =
    "bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white py-[10px] px-[15px] max-sm:py-[5px] max-sm:px-[5px] max-sm:text-[14px]";

  return (
    <div>
      <div className="w-full h-[570px] relative">
        {}
        <img
          className="w-full h-[450px] rounded-b-[12px] max-lg:h-[350px]"
          src="https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/mountain-lake-header.jpg?fit=1584%2C396&ssl=1"
          alt=""
        />
        <div className="w-full flex items-end justify-between absolute bottom-[20px] max-[1151px]:flex-col max-[1151px]:items-center gap-5">
          <div className="flex items-end gap-4 max-[1151px]:flex-col max-[1151px]:items-center ">
            <div className="w-[150px] h-[150px] border-[5px] border-[#46A358] rounded-full flex justify-center">
              {isLoad ? (
                <Skeleton.Avatar
                  style={{ width: 140, height: 140 }}
                  active={true}
                />
              ) : (
                <img
                  className="rounded-full"
                  src={
                    data?.profile_photo ===
                    "https://alqadir.edu.pk/wp-content/uploads/2022/09/BS-Islamic-Studies-2022.jpg"
                      ? "https://media.istockphoto.com/id/1496989850/photo/the-famous-green-and-silver-domes-of-the-prophets-mosque-al-masjid-an-nabawi.jpg?s=612x612&w=0&k=20&c=mYabZ0GQz1q8dbP8vmgedKVIavT93TfBfSHvSKvPF3k="
                      : data?.profile_photo
                  }
                  alt=""
                />
              )}
            </div>

            <div>
              <h2 className="text-[28px] font-bold">
                {isLoad ? (
                  <Skeleton.Input active={true} />
                ) : (
                  `${data.name} ${data.surname}`
                )}
              </h2>
              <p>
                {isLoad ? (
                  <Skeleton.Input active={true} />
                ) : (
                  ` Followers: ${data.followers?.length}`
                )}
              </p>
            </div>
          </div>
          <div className="flex gap-4 max-sm:flex-wrap">
            <>
              <button
                onClick={() =>
                  Modal.info({
                    title: "Messaging comming soon...",
                    okButtonProps: {
                      type: "dashed",
                    },
                  })
                }
                className={`${btn_style} `}
              >
                <MessageOutlined />
                Start chat
              </button>
              <button className={`${btn_style}`}>
                <SendOutlined />
                Send Invitation
              </button>
              {_id === authUser._id ? (
                <button className={`${btn_style}`}>
                  <UserOutlined />
                  You
                </button>
              ) : authUser.followers?.includes(String(_id)) ? (
                <button
                  onClick={() => unFollowUser(String(_id))}
                  className={`${btn_style}`}
                >
                  <MinusCircleOutlined />
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => mutate(String(_id))}
                  className={`${btn_style}`}
                >
                  <PlusCircleOutlined />
                  Follow
                </button>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
