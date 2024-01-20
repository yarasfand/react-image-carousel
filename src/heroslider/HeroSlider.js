import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./heroSlider.css";
import image1 from "./sliderAssets/images/img1.jpg";
import image2 from "./sliderAssets/images/img2.jpg";
import image3 from "./sliderAssets/images/img3.jpg";
import image4 from "./sliderAssets/images/img4.jpg";

const images = [
  { id: 0, title: "Craftsmanship", caption: "Handcrafted Leather", value: image1 },
  { id: 1, title: "Luxury Accessories", caption: "Fine Leather", value: image2 },
  { id: 2, title: "Timeless Elegance", caption: " Classic Leather Designs", value: image3 },
  { id: 3, title: "Personalized Solutions", caption: "Unique Leather Pieces", value: image4 },
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
            className="carouselImage"
            style={{
              backgroundImage: `url(${sliderData.value})`,
            }}
          >
            <div className="carouselFirstImgDesc">
              <p className="carouselFirstImgTitle">
                Elegance in Every Stitch
                <br />
                Unveil <span> Art of Leather</span>
              </p>
              <p className="carouselFirstImgCapt">
                Immerse Yourself in Luxury Finding your perfect leather
                companion made easy.
              </p>

              <div className="carouselFirstImgButtonDiv">
                <button className="carouselFirstImgButton1">
                  <a
                    href="ok"
                    className="btn-flip"
                    data-back="Read More"
                    data-front="Read More"
                  >
                    {" "}
                  </a>
                </button>

                <button className="carouselFirstImgBtn2">
                  <span className="label-down">CONTACT US</span>
                  <span className="label-down">CONTACT US</span>
                </button>
              </div>
            </div>
          </div>
        ) : sliderData.value === image2 ? (
          <div
            className="carouselImage"
            style={{
              backgroundImage: `url(${sliderData.value})`,
            }}
          ></div>
        ) : sliderData.value === image3 ? (
          <div
            className="carouselImage"
            style={{
              backgroundImage: `url(${sliderData.value})`,
            }}
          ></div>
        ) : (
          <div
            className="carouselImage"
            style={{
              backgroundImage: `url(${sliderData.value})`,
            }}
          ></div>
        )}
      </div>



      <div className="flex-row carouselNav">
        {images.map((data, i) => (
          <div
            key={data.id}
            onClick={() => handleClick(i)}
            className={sliderData.id === i ? "carouselOptClicked" : "carouselOptNotClicked"}
          >
            <p className={sliderData.id === i ? "carouselOptNumberClicked" : "carouselOptNumberNotClicked"}>
              {" "}
              {images[i].id + 1}{" "}
            </p>

            <span className={sliderData.id === i ? "carouselOptTitleClicked" : "carouselOptTitleClicked"}>
              {" "}
              {images[i].title}{" "}
            </span>
            <p
              className={sliderData.id === i ? "carouselOptCaptionClicked" : "carouselOptCaptionNotClicked"}
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
