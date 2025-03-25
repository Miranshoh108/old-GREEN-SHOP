import type { FC } from "react";
import FooterTop from "./footer-top/footer-top";
import { footer_links } from "../../utils";
import FooterItem from "./footer-item";
import FooterSotional from "./footer-sotional";
import Advice from "./advice/advice";

const Footer: FC = () => {
  return (
    <footer className="w-[90%] m-auto max-sm:w-[95%]">
      <div className="bg-[#FBFBFB] p-[10px]">
        <Advice />
        <FooterTop />
        <div className="grid grid-cols-3 mt-[20px] pb-[27px]  max-[655px]:grid-cols-2  max-[425px]:grid-cols-1">
          {footer_links.map((link) => (
            <FooterItem key={link.id} {...link} />
          ))}
          <FooterSotional />
        </div>
      </div>
      <div className="text-center py-[7px]"></div>
    </footer>
  );
};

export default Footer;
