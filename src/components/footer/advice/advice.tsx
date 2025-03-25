import type { FC } from "react";
import { advice_item } from "../../../utils";
import AdviceItem from "./advice-item/advice-item";
import AdvcieEmail from "./advice_email/advcie-email";
const Advice: FC = () => {
  return (
    <section className="bg-[#FBFBFB] grid grid-cols-[1fr_1fr_1fr_2fr] p-5 gap-5 max-lg:grid-cols-[2fr_1fr_1fr] max-[783px]:grid-cols-2 max-sm:grid-cols-1  max-sm:text-center">
      {advice_item.map((el) => (
        <AdviceItem key={el.id} {...el} />
      ))}
      <AdvcieEmail />
    </section>
  );
};

export default Advice;
