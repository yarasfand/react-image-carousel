import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./heroSlider.css";
import image1 from "./sliderAssets/images/img1.jpg";
import image2 from "./sliderAssets/images/img2.jpg";
import image3 from "./sliderAssets/images/img3.jpg";
import image4 from "./sliderAssets/images/img4.jpg";

const images = [
  {
    id: 0,
    title: "Money Care",
    caption: "Finding Your Next Advisor",
    value: image1,
  },
  {
    id: 1,
    title: "Friendly Assistance",
    caption: "Export Financial Advice",
    value: image2,
  },
  {
    id: 2,
    title: "Our Experience",
    caption: "We Have Years Of Experience",
    value: image3,
  },
  {
    id: 3,
    title: "Client Investment",
    caption: "Doing The Right Thing",
    value: image4,
  },
];

function HeroSlider() {
  const [sliderData, setSliderData] = useState(images[0]);

  const handleClick = (index) => {
    console.log(index);
    const slider = images[index];
    setSliderData(slider);
  };

  return (
    <div>
      <div>
        {sliderData.value === image1 ? (
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${sliderData.value})`,
            }}
          >
            <div className="firstImageDes">
              <p className="firstImagetxt">
                Elegance in Every Stitch
                <br />
                Unveil <span className="firstImagespan"> Art of Leather</span>
              </p>
              <p className="firstImagecapt">
                Immerse Yourself in Luxury Finding your perfect leather
                companion made easy.
              </p>

              <div className="buttonDiv">
                <button className="firstImagebtn1">
                  <a
                    href="ok"
                    className="btn-flip"
                    data-back="Read More"
                    data-front="Read More"
                  >
                    {" "}
                  </a>
                </button>

                <button className="firstImagebtn2">
                  <span className="label-down">CONTACT US</span>
                  <span className="label-down">CONTACT US</span>
                </button>
              </div>
            </div>
          </div>
        ) : sliderData.value === image2 ? (
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${sliderData.value})`,
            }}
          ></div>
        ) : sliderData.value === image3 ? (
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${sliderData.value})`,
            }}
          ></div>
        ) : (
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${sliderData.value})`,
            }}
          ></div>
        )}
      </div>

      <div className="flex-row">
        {images.map((data, i) => (
          <div
            key={data.id}
            onClick={() => handleClick(i)}
            className={sliderData.id === i ? "clicked" : "clicked2 bd1"}
          >
            <p className={sliderData.id === i ? "imgNo2" : "imgNo"}>
              {" "}
              {images[i].id + 1}{" "}
            </p>

            <span className={sliderData.id === i ? "imgTitle2" : "imageTitle"}>
              {" "}
              {images[i].title}{" "}
            </span>
            <p
              className={sliderData.id === i ? "titleCaption2" : "titleCaption"}
            >
              {images[i].caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
