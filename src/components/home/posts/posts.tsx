import { type FC } from "react";
import { post_item } from "../../../utils";
import PostItem from "./post-item/post-item";

const Posts: FC = () => {
  return (
    <section>
      <div className="text-center mt-10">
        <h3 className="text-[#3D3D3D] text-[30px] font-bold">Our Blog Posts</h3>
        <p className="text-[#727272] text-[14px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-7 mt-10 mb-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {post_item.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
