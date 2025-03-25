import { useReduxDispatch } from "../../../hooks/useRedux";
import { setAuthorizationModalVisibility } from "../../../redux/modal-slice";

const BlogHeader = () => {
  const dispatch = useReduxDispatch();
  return (
    <div>
      <div className="w-full h-[300px] p-[50px] bg-[#F5F5F5] mt-3 flex max-2xl:h-[200px] max-md:h-[150px] justify-between">
        <img
          className="w-[150px] h-full"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_1.png?alt=media&token=8174091c-24b5-42a0-886d-845bd15cccb9"
          alt=""
        />
        <img
          className="w-[150px] h-full mt-[20px]"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_2.png?alt=media&token=d2b8bf6f-7c67-4e93-b026-917f4291d9f6"
          alt=""
        />
        <img
          className="w-[150px] h-full mt-[50px]"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_3.png?alt=media&token=7abda4b5-0f9e-4fc1-8353-e32194b925c9"
          alt=""
        />
        <img
          className="w-[150px] h-full mt-[20px]"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_4.png?alt=media&token=2a9f4b03-30a0-4c89-b189-7c8835ab42e7"
          alt=""
        />
        <img
          className="w-[150px] h-ful"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_5.png?alt=media&token=f65d9df1-ea8b-4ebe-9d23-e3e768f0f701"
          alt=""
        />
      </div>
      <h1 className="mt-[50px] font-black text-center text-[6vw]">
        Monetize your content with
        <span className="text-[#46A358]">GreenShop</span>
      </h1>
      <p className="text-center text-[25px] mt-[20px] max-xl:text-[2vw] ">
        Greenshop - a platform for buying and selling, publishing and monetizing
        all types of flowers: acrticles, notes, video, photos, podcasts or
        songs.
      </p>
      <button
        onClick={() =>
          dispatch(
            setAuthorizationModalVisibility({ open: true, loading: false })
          )
        }
        className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white m-auto mt-[30px] px-[15px] py-[10px]"
      >
        Join Greenshop
      </button>
    </div>
  );
};

export default BlogHeader;
