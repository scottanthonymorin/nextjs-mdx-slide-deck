import { Children, cloneElement, createElement } from "react";

export const getStepCount = (slides, currentSlide) => {
  let stepCount = 0;
  slides[currentSlide]?.forEach((child) => {
    if (child.props["data-step"]) {
      stepCount++;
      return;
    } else if (Array.isArray(child.props.children)) {
      child.props.children.forEach((listChild) => {
        if (listChild.props["data-step"]) {
          stepCount++;
        }
      });
    }
  });

  return stepCount;
};

export const splitPagesIntoSlides = (children) => {
  const slides = [];
  let slide = [];
  let step = 0;

  Children.forEach(children, (child) => {
    if (child.type === "hr") {
      slides.push(slide);
      slide = [];
      step = 0;
      return;
    }

    if (["ol", "ul"].includes(child.type)) {
      let listItems = [];
      child.props.children.forEach((listChild) => {
        if (listChild.type === "li") {
          const clonedChild = cloneElement(listChild, { "data-step": step });
          listItems.push(clonedChild);
          step++;
        }
      });
      const list = createElement(child.type, child.props, listItems);
      slide.push(list);
      return;
    } else {
      const clonedChild = cloneElement(child, { "data-step": step });
      slide.push(clonedChild);
      step++;
    }
  });

  slides.push(slide);

  return slides.filter((slide) => slide.length > 0);
};
