import logo from "./section-one-logo.png";
import sectionOneImg from "./section-one-img.jpg";

const SectionOneLogo = ({ className }) => {
  return <img src={logo} alt="illustartion" className={className} />;
};

const SectionOneImg = ({ className }) => {
  return <img src={sectionOneImg} alt="illustration" className={className} />;
};

export { SectionOneLogo, SectionOneImg };
