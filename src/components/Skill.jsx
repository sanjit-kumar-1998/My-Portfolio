import React from "react";
import skills from "./data/skills.json";
const Skill = () => {
  return (
    <>
      <div className="container skills my-5" id="skill">
        <h1>Skill</h1>
        <div className="items">
          {skills.map((data) => {
            return (
              <>
                <div
                  className="item"
                  key={data.id}
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <img src={`/assets/${data.imageSrc}`} alt="imge" />
                  <h3>{data.title}</h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skill;
