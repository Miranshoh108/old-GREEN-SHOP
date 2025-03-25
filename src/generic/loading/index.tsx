// import { Skeleton } from "antd";

// const useLoader = () => {
//   const category_loader = () => {
//     return Array.from({ length: 8 }).map((_, idx) => (
//       <div key={idx} className="mb-1">
//         <Skeleton.Input className="!w-full " active />
//       </div>
//     ));
//   };
//   const cart_loading = () => {
//     return Array.from({ length: 6 }).map((__dirname, idx) => {
//       return (
//         <div className="flex flex-col gap-[0.7rem]" key={idx}>
//           <div className="w-full">
//             <Skeleton.Image className="!w-full !h-[220px]" active />
//           </div>
//           <Skeleton.Input active className="w-full" />
//           <Skeleton.Input active className="w-full" />
//         </div>
//       );
//     });
//   };

//   const imageLoading = () => {
//     return Array.from({ length: 4 }).map((__, idx) => (
//       <Skeleton.Image key={idx} active={true} />
//     ));
//   };

//   return { category_loader, cart_loading, imageLoading };
// };

// export { useLoader };

import { Card, Skeleton } from "antd";

const useLoader = () => {
  const category_loader = () => {
    return Array.from({ length: 8 }).map((_, idx) => (
      <div className="mb-2" key={idx}>
        <Skeleton.Input className="!w-full" active />
      </div>
    ));
  };
  const cart_loading = () => {
    return Array.from({ length: 6 }).map((_, idx) => {
      return (
        <div key={idx}>
          <div className="w-full">
            <Skeleton.Image className="!w-full !h-[250px]" active />
          </div>
          <Skeleton.Input active />
          <Skeleton.Input active />
        </div>
      );
    });
  };
  const image_loading = () => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <Skeleton.Image key={idx} active />
    ));
  };
  const blog_card_loading = () => {
    return Array.from({ length: 6 }).map((_, idx) => (
      <Card key={idx}>
        <Skeleton active />
      </Card>
    ));
  };
  const blog_id_loading = () => {
    return (
      <div>
        <div className="flex gap-4">
          <Skeleton.Avatar active />
          <Skeleton.Input active />
        </div>
        <div>
          <Skeleton.Input active className="my-[15px]" />
          {Array.from({ length: 20 }).map((_, idx) => (
            <Skeleton.Input
              key={idx}
              active
              className="!w-full my-[10px] !h-[20px]"
            />
          ))}
        </div>
      </div>
    );
  };

  const user_order_loader = () => {
    return Array.from({ length: 5 }).map((_, idx) => (
      <div className="mt-[20px]" key={idx}>
        <Skeleton.Input className="!h-[50px] !w-full mb-[10px]" active={true} />
      </div>
    ));
  };
  return {
    category_loader,
    cart_loading,
    image_loading,
    blog_card_loading,
    blog_id_loading,
    user_order_loader,
  };
};

export { useLoader };
