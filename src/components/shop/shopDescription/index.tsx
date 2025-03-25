import { FC, useState } from "react";
import { DataType } from "../../../@types";

const ShopDescription: FC<DataType> = ({ data }) => {
  const [state, setState] = useState<Boolean>(false);
  return (
    <div>
      <div className="border-b-2 my-20 border-[#46A358] cursor-pointer  ">
        <div className="flex gap-5 text-[22px] font-bold mb-4 cursor-pointer">
          <h3 onClick={() => setState(true)}>Product Description</h3>
          <h3 onClick={() => setState(false)}> Reviews (0)</h3>
        </div>
      </div>

      <div>
        {state ? (
          <div
            dangerouslySetInnerHTML={{ __html: data?.description as string }}
          ></div>
        ) : (
          <div>Reviews</div>
        )}
      </div>
    </div>
  );
};

export default ShopDescription;
