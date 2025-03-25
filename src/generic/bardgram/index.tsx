import { Breadcrumb } from "antd";
import type { FC } from "react";
import { Link } from "react-router-dom";

interface BraedCrumpType {
  pathTitle: string;
}

const BradGramp: FC<BraedCrumpType> = ({ pathTitle }) => {
  return (
    <Breadcrumb
      className="my-[10px]"
      items={[
        {
          title: <Link to={"/"}></Link>,
        },
        {
          title: pathTitle,
        },
      ]}
    />
  );
};

export default BradGramp;
