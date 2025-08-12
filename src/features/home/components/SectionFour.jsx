import { TbWorld } from "react-icons/tb";
import { TbCheckupList } from "react-icons/tb";
import { SlScreenDesktop } from "react-icons/sl";

const SectionFour = () => {
  const sectionFourArr = [
    {
      id: 1,
      title: "We are global.",
      image: <TbWorld className="section-four-img" />,
      text: "No matter where you are, we've got you covered.",
    },
    {
      id: 2,
      title: "We value our clients.",
      image: <TbCheckupList className="section-four-img" />,
      text: "Virtual assistance. Talk to us about any concernes  24/7.",
    },
    {
      id: 3,
      title: "We use top-rate systems.",
      image: <SlScreenDesktop className="section-four-img" />,
      text: "Easy peasy UI. Our interface is simple and easy to use.",
    },
  ];

  return (
    <div className="section-four">
      <div className="section-four-holder">
        <h2 className="section-four-title">Why choose us</h2>
        <div className="section-four-cards-holder">
          {sectionFourArr.map((card) => (
            <div className="section-four-card" key={card.id}>
              <div className="section-four-width">
                <h4 className="section-four-card-title">{card.title}</h4>
                {card.image}
                <p className="section-four-card-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
