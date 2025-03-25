import { useParams } from "react-router-dom";
import type { UserTypeApi } from "../../@types";
import UserHeader from "./user-header";
import UserBody from "./user-body";
import { useQuerHandler } from "../../hooks/useQuery";

const UserComponent = () => {
  const { _id } = useParams();
  const { isLoading, isError }: UserTypeApi = useQuerHandler({
    pathname: `user/${_id}/data`,
    url: `/user/by_id/${_id}`,
  });
  let isLoad = isError || isLoading;
  return (
    <div className="w-[90%] m-auto py-5">
      <UserHeader isLoad={isLoad} />
      <UserBody />
    </div>
  );
};

export default UserComponent;
