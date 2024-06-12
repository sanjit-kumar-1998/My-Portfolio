import React, { useEffect, useRef } from "react";
import pdf from "../Pdf/resume.pdf";
import ProfileImg from "./data/profile.json";
import Typed from "typed.js";

const Home = () => {
  const typeRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my Profile",
        "My name is Sanjit Kumar Behera",
        "I am Frontend Dveloper",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typeRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home my-5" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typeRef} />
          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div
            className="imge"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            <img src={`/assets/${ProfileImg.imgSrc}`} alt="profileImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
