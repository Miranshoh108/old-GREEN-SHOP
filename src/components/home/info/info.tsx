import type { FC } from "react";
import { info_item } from "../../../utils";
import InfoItem from "./infoItem/info-item";
const Info: FC = () => {
  return (
    <section className="grid grid-cols-2 gap-5 mt-[50px] max-[999px]:grid-cols-1">
      {info_item.map((el) => (
        <InfoItem key={el.id} {...el} />
      ))}
    </section>
  );
};

export default Info;
