import "./singleListSlider.scss";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";

export const SingleListSlider = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(null);

  const changeSlide = direction => {
    if (direction === "left") {
      if (imgIndex === 0) {
        setImgIndex(images.length - 1);
      } else {
        setImgIndex(imgIndex - 1);
      }
    } else {
      if (imgIndex === images.length - 1) {
        setImgIndex(0);
      } else {
        setImgIndex(imgIndex + 1);
      }
    }
  };

  return (
    <div className="SingleListSlider">
      {imgIndex !== null && (
        <div className="fullScreenSlider">
          <div onClick={() => changeSlide("left")} className="leftArrow">
            <ArrowBackIosOutlinedIcon />
          </div>
          <div className="mainSlider">
            <img src={images[imgIndex]} alt="images" />
          </div>
          <div onClick={() => changeSlide("right")} className="rightArrow">
            <ArrowForwardIosOutlinedIcon />
          </div>

          <div onClick={() => setImgIndex(null)} className="closeIcon">
            <CloseOutlinedIcon />
          </div>
        </div>
      )}

      <div className="bigImage">
        <img src={images[0]} alt="images" onClick={() => setImgIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((img, index) => (
          <img
            key={index}
            src={img}
            alt="images"
            onClick={() => setImgIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};
