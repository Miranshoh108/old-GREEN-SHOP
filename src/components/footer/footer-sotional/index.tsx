const FooterSotional = () => {
  const sotional_style =
    "border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer";
  const sotional_title = "font-bold text-[#3D3D3D] text-[18px]";
  const payme_style = "w-[30px] h-[30px] cursor-pointer";
  return (
    <div>
      <h1 className={`${sotional_title}`}>Social Media</h1>
      <div className="flex items-center gap-3 mt-[10px] mb-[30px]">
        <div className={`${sotional_style}`}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffacebook.svg?alt=media&token=3db32f6e-a8c2-4dd2-829a-840b16fede49"
            alt="facebook"
          />
        </div>
        <div className={`${sotional_style}`}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Finstagram.svg?alt=media&token=dff411c8-b4c4-451d-820e-3f6752290ff5"
            alt="instagramm"
          />
        </div>
        <div className={`${sotional_style}`}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ftwitter.svg?alt=media&token=9ab7ee69-e867-48b2-8d1c-978fd8d43835"
            alt="twitter"
          />
        </div>
        <div className={`${sotional_style}`}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flinkedin.svg?alt=media&token=1ad547d5-0f83-4421-994e-6989dba5d0d7"
            alt="linkedin"
          />
        </div>
        <div className={`${sotional_style}`}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Funion.svg?alt=media&token=2ab668d7-f49d-4c46-ae87-d8d49ae0849f"
            alt="funion"
          />
        </div>
      </div>
      <h1 className={`${sotional_title}`}>We accept</h1>
      <div className="flex items-center gap-3 mt-[13px]">
        <img
          className={`${payme_style}`}
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fpaypal.svg?alt=media&token=51f12650-aff4-485a-bbcb-0ee3f4e64cca"
          alt="paypay"
        />
        <img
          className={`${payme_style}`}
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fmastercard.svg?alt=media&token=cb5cc08d-e2a0-4625-8fc7-86448ce7628a"
          alt="mastercard"
        />
        <img
          className={`${payme_style}`}
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fvisa.svg?alt=media&token=4fffddbd-bd42-4523-a201-06650a09e8a2"
          alt="visa"
        />
        <img
          className={`${payme_style}`}
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Famex.svg?alt=media&token=89c19c4a-9c33-4e7a-b802-a7f0ba10ef04"
          alt="express"
        />
      </div>
    </div>
  );
};

export default FooterSotional;
