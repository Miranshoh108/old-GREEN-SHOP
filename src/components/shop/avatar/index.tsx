import { Avatar, Tooltip } from "antd";
import { useQuerHandler } from "../../../hooks/useQuery";

const AvatarItem = ({ created_by }: { created_by: string }) => {
  const { data } = useQuerHandler({
    pathname: "user",
    url: `/user/by_id/${created_by}`,
  });

  return (
    <div>
      <Tooltip
        title={`${data?.name} ${data?.surname}`}
        className="cursor-pointer"
      >
        <Avatar src={data?.profile_photo} className="w-[60px] h-[60px] " />
      </Tooltip>
    </div>
  );
};

export default AvatarItem;
