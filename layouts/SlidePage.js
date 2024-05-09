import { useEffect, useMemo } from "react";
import styled, { css, keyframes } from "styled-components";

import { poppins } from "@/utils/fonts.utils";
import useNavigate from "@/hooks/useNavigate";
import { useCurrentSlide } from "@/context/CurrentSlideContext";
import { getStepCount, splitPagesIntoSlides } from "@/utils/slide.utils";

const SlidePage = ({ children, prev, next }) => {
  const { currentSlide, currentStep, setSlideCount, setStepCount, stepCount } =
    useCurrentSlide();

  const slides = useMemo(() => splitPagesIntoSlides(children), [children]);

  useEffect(() => {
    setSlideCount(slides.length);
    setStepCount(getStepCount(slides, currentSlide));
  }, [currentSlide, setSlideCount, slides, setStepCount]);

  useNavigate({ prev, next });

  return (
    <Slide
      {...{ currentStep, stepCount }}
      id="slide"
      className={poppins.className}
    >
      {slides[currentSlide]}
    </Slide>
  );
};

const getStepVisibility = (currentStep, step) =>
  `[data-step="${step}"]{opacity:${step <= currentStep ? "100%" : "0%"}}`;

const getAllStepsCss = ({ currentStep, stepCount }) => {
  let stepCss = "";
  for (let step = 0; step <= stepCount; step++) {
    stepCss += getStepVisibility(currentStep, step);
  }
  return css`
    ${stepCss}
  `;
};

const Slide = styled.div`
  position: relative;

  [data-step] {
    opacity: 0%;
  }

  ${({ currentStep, stepCount }) => getAllStepsCss({ currentStep, stepCount })}
`;

export default SlidePage;
