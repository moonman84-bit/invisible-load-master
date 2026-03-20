import React, { useState, useRef } from "react";

import "./Slideselection.css";

const SliderRating = () => {
  const [rating, setRating,] = useState(0);
  const [ratingTwo, setRatingTwo] = useState(0);
  const [ratingThree,setRatingThree] = useState(0);
  const [ratingFour,setRatingFour] = useState(0);
 

  const firstsliderelementRef = useRef(null);
  const secondsliderelementRef = useRef(null);
  const thirdsliderelementRef = useRef(null);
  const fourthsliderelementRef = useRef(null);

  const handleSliderChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleSliderChangeTwo = (event) => {
    setRatingTwo(Number(event.target.value));
  };

  const handleSliderChangeThree = (event) => {
    setRatingThree(Number(event.target.value));
  };

  const handleSliderChangeFour = (event) => {
    setRatingFour(Number(event.target.value));
  };

  const handleFirstButtonClick = (event) => {
    firstsliderelementRef.current.style.display = "none";
    secondsliderelementRef.current.style.display = "block";
  };

  const handleSecondButtonClick = (event) => {
    secondsliderelementRef.current.style.display = "none";
    thirdsliderelementRef.current.style.display = "block";
  };

  const handleThirdButtonClick = (event) => {
    console.log(firstsliderelementRef);
    thirdsliderelementRef.current.style.display = "none";
    fourthsliderelementRef.current.style.display = "block";
  };

  return (
    <div className="ratingcontainer">
      <div id="ratingone" className="ratingsbox" ref={firstsliderelementRef}>
        <div className="slidercontainer">
          <div className="ratingicon">
            <img src="https://placehold.co/250x200/000000/FFFFFF/png" alt="" />
          </div>
          <div className="ratingslidercontainer">
            <h2>Times per week</h2>
            <input
              id="ratingSlider"
              className="ratingslide"
              type="range"
              min={0}
              max={10}
              step={0}
              value={rating}
              onChange={handleSliderChange}
            />
            <div className="rating-labels">
              {[...Array(11).keys()].map((value) => (
                <span key={value}>{value + 0}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="slidercontainer">
          <div className="ratingicon">
            <img src="https://placehold.co/250x200/000000/FFFFFF/png" alt="" />
          </div>
          <div className="ratingslidercontainer">
            <h2>Times per week</h2>
            <input
              id="ratingSlider"
              className="ratingslide"
              type="range"
              min={0}
              max={10}
              step={0}
              value={ratingTwo}
              onChange={handleSliderChangeTwo}
            />
            <div className="rating-labels">
              {[...Array(11).keys()].map((value) => (
                <span key={value}>{value + 0}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="slidercontainer">
          <div className="ratingicon">
            <img src="https://placehold.co/250x200/000000/FFFFFF/png" alt="" />
          </div>
          <div className="ratingslidercontainer">
            <h2>Times per week</h2>
            <input
              id="ratingSlider"
              className="ratingslide"
              type="range"
              min={0}
              max={10}
              step={0}
              value={ratingThree}
              onChange={handleSliderChangeThree}
            />
            <div className="rating-labels">
              {[...Array(11).keys()].map((value) => (
                <span key={value}>{value + 0}</span>
              ))}
            </div>
           
          </div>
        </div>
        <div className="slidercontainer">
          <div className="ratingicon">
            <img src="https://placehold.co/250x200/000000/FFFFFF/png" alt="" />
          </div>
          <div className="ratingslidercontainer">
            <h2>Times per week</h2>
            <input
              id="ratingSlider"
              className="ratingslide"
              type="range"
              min={0}
              max={10}
              step={0}
              value={ratingFour}
              onChange={handleSliderChangeFour}
            />
            <div className="rating-labels">
              {[...Array(11).keys()].map((value) => (
                <span key={value}>{value + 0}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="calculatebtn">
          <button>Calculate</button>
        </div>
      </div>
    </div>
  );
};

export default SliderRating;
