import type { FC } from "react";
import { Link } from "react-router-dom";

const FooterTop: FC = () => {
  const info_style =
    "flex items-center gap-2 text-[#3D3D3D] text-[14px] font-normal";
  return (
    <div className="bg-[#edf6ef] mt-[40px] grid grid-cols-4 gap-6 items-center px-[27px] py-[23px] max-[1041px]:grid-cols-2 max-[595px]:grid-cols-1">
      <div>
        <Link to={"/"}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <a
          className={`${info_style}`}
          href="https://maps.app.goo.gl/JsBEY9JET5mrALtH6"
          target="_blanck"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flocation.svg?alt=media&token=d600d0e4-aa9d-423d-8348-e3df90b195f3"
            alt="location"
          />
          <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
        </a>
      </div>
      <div>
        <a className={`${info_style}`} href="mailto:contact@greenshop.com">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Femail.svg?alt=media&token=8136c940-c139-486f-a6d3-be49bede2381"
            alt="mail"
          />
          <p>contact@greenshop.com</p>
        </a>
      </div>
      <div>
        <a className={`${info_style}`} href="tel:+770224446">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fcall.svg?alt=media&token=3841a4f9-b499-4e8c-98d3-a05fe4edc39f"
            alt="tel"
          />
          <p>+88 01911 717 490</p>
        </a>
      </div>
    </div>
  );
};

export default FooterTop;
