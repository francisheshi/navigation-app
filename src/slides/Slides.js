import React, { useState, useEffect } from "react";
import "./slides.css";

const listOfSlides = [
  {
    title: "Slide 1",
    text: "This is slide 1",
  },
  {
    title: "Slide 2",
    text: "This is slide 2",
  },
];

const SlideInfo = ({ slide }) => {
  return (
    <div key={slide}>
      <h3>{`${slide.title}`}</h3>
      <p>{`${slide.text}`}</p>
    </div>
  );
};

const Slides = () => {
  const [slides] = useState(listOfSlides);
  const [index, setIndex] = useState(0);

  const handlePrevBtn = () => {
    let prevIndex = index - 1;
    setIndex(prevIndex);
  };

  const handleNextBtn = () => {
    let newIndex = index + 1;
    setIndex(newIndex);
  };

  const handleRestartBtn = () => {
    let resetIndex = 0;
    setIndex(resetIndex);
  };

  useEffect(() => {
    return () => {
      handleNextBtn();
      handlePrevBtn();
      handleRestartBtn();
    };
  });

  return (
    <div className="slides-page">
      <h3>Slide navigation prev/next btns</h3>

      <SlideInfo slide={slides[index]} />
      <div id="navigation" className="text-center">
        <button
          type="button"
          data-testid="button-restart"
          className="small"
          onClick={() => handleRestartBtn()}
        >
          Restart
        </button>
        <button
          type="button"
          data-testid="button-back"
          className="small"
          disabled={index === 0}
          onClick={() => handlePrevBtn()}
        >
          Prev
        </button>
        <button
          type="button"
          data-testid="button-next"
          className="small"
          disabled={index === 1}
          onClick={() => handleNextBtn()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slides;
