import {
  SectionThreeFirstImg,
  SectionThreeSecondImg,
  SectionThreeThirdImg,
} from "../../../assets/images";

const SectionThree = () => {
  const sectionThreeCard = [
    {
      id: 1,
      image: <SectionThreeFirstImg className="section-three-card-img" />,
      title: " Managed IT Services",
      text: " Give a detailed description of the service being provided here.",
    },
    {
      id: 2,
      image: <SectionThreeSecondImg className="section-three-card-img" />,
      title: "IT Security",
      text: "Give a detailed description of the service being provided here.",
    },
    {
      id: 3,
      image: <SectionThreeThirdImg className="section-three-card-img" />,
      title: "IT Consulting",
      text: "Give a detailed description of the service being provided here.",
    },
  ];
  return (
    <div className="section-three">
      <div className="section-three-holder">
        <h2 className="section-three-title">Our services</h2>
        <div className="section-three-cards-holder">
          {sectionThreeCard.map((card) => (
            <div className="section-three-card" key={card.id}>
              {card.image}
              <h4 className="section-three-card-title">{card.title}</h4>
              <p className="section-three-card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
