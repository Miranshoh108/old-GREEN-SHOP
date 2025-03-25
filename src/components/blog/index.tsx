import { useIsAuthenticated } from "react-auth-kit";
import type { BlogTypeApi } from "../../@types";
import { useLoader } from "../../generic/loading";
import BlogCard from "./blog-card";
import BlogHeader from "./blog-heder";
import BlogSearch from "./blog-search";
import { useQuerHandler } from "../../hooks/useQuery";
import { searchParam } from "../../generic/searchParam";

const BlogComponent = () => {
  const { getParam } = searchParam();
  const { data, isError, isLoading }: BlogTypeApi = useQuerHandler({
    pathname: `blog?search=${getParam("search")}`,
    url: "/user/blog",
    params: {
      search: getParam("search") || "",
    },
  });
  const { blog_card_loading } = useLoader();
  const isAuth: boolean = useIsAuthenticated()();

  return (
    <section className="w-[90%] m-auto">
      {isAuth ? <BlogSearch /> : <BlogHeader />}

      <div className="grid grid-cols-3 gap-5 my-10">
        {isLoading || isError
          ? blog_card_loading()
          : data?.map((value) => <BlogCard key={value._id} {...value} />)}
      </div>
    </section>
  );
};

export default BlogComponent;
