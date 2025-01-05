import FooterForm from "./FooterForm";
import Footerlast from "./Footerlast";
import Footerlayer from "./Footerlayer";

const Footer = () => {
  return (
    <div className="bg-[#161C28] pt-7 md:pt-20 pb-7 space-y-8 md:space-y-16">
      <FooterForm />
      <Footerlayer />
      <Footerlast />
    </div>
  );
};

export default Footer;
