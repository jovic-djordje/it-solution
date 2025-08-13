import { CgProfile } from "react-icons/cg";

const SectionSix = () => {
  const sectionSixArr = [
    {
      id: 1,
      image: <CgProfile className="section-six-img" />,
      name: "John Doe, Wright Co.",
      text: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
    },
    {
      id: 2,
      image: <CgProfile className="section-six-img" />,
      name: "John Doe, Financial",
      text: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
    },
    {
      id: 3,
      image: <CgProfile className="section-six-img" />,
      name: "John Doe, Express",
      text: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
    },
  ];

  return (
    <div className="section-six">
      <div className="section-six-holder">
        <h2 className="section-six-title">Client Testimonials</h2>
        <div className="section-six-cards-holder">
          {sectionSixArr.map((card) => (
            <div className="section-six-card" key={card.id}>
              <div className="profile-holder">
                {card.image}
                <p className="section-six-info">{card.name}</p>
              </div>
              <p className="section-six-card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
