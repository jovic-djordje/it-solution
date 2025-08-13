import logo from "./section-one-logo.png";
import sectionOneImg from "./section-one-img.jpg";
import sectionThreeFirstImg from "./section-three-img.jpg";
import sectionThreeSecondImg from "./section-three-img (2).jpg";
import sectionThreeThirdImg from "./section-three-img (3).jpg";
import sectionSevenImg from "./section-seven-img.jpg";

const SectionOneLogo = ({ className }) => {
  return <img src={logo} alt="illustartion" className={className} />;
};

const SectionOneImg = ({ className }) => {
  return <img src={sectionOneImg} alt="illustration" className={className} />;
};

const SectionThreeFirstImg = ({ className }) => {
  return (
    <img src={sectionThreeFirstImg} alt="illustration" className={className} />
  );
};

const SectionThreeSecondImg = ({ className }) => {
  return (
    <img src={sectionThreeSecondImg} alt="illustration" className={className} />
  );
};

const SectionThreeThirdImg = ({ className }) => {
  return (
    <img src={sectionThreeThirdImg} alt="illustration" className={className} />
  );
};

const SectionSevenImg = ({ className }) => {
  return <img src={sectionSevenImg} alt="illustration" className={className} />;
};

export {
  SectionOneLogo,
  SectionOneImg,
  SectionThreeFirstImg,
  SectionThreeSecondImg,
  SectionThreeThirdImg,
  SectionSevenImg,
};
