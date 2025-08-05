import { SectionOneImg, SectionOneLogo } from "../../../assets/images";

const SectionOne = () => {
  return (
    <div className="section-one">
      <div className="section-one-holder">
        <div className="section-one-left">
          <div className="section-one-left-width">
            <div className="logo-holder">
              <SectionOneLogo className="logo" />
              <p>Frontend tech solution</p>
            </div>

            <div className="header-holder">
              <h1 className="section-one-title">
                IT Solutions that transforms your business
              </h1>
              <button className="section-one-btn">learn more</button>
            </div>
          </div>
        </div>
        <SectionOneImg className="section-one-img" />
      </div>
    </div>
  );
};

export default SectionOne;
