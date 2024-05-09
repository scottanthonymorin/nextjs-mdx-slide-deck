import { useRouter } from "next/router";

import useEventListener from "./useEventListener";
import { useCurrentSlide } from "@/context/CurrentSlideContext";

const NEXT = [13, 32, 39];
const PREV = 37;

const isNext = (keyCode) => NEXT.includes(keyCode);
const isPrev = (keyCode) => keyCode === PREV;

export default function useNavigate({ prev, next }) {
  const { currentSlide, currentStep, slideCount, stepCount } =
    useCurrentSlide();

  const router = useRouter();

  // TODO: there is still something wonky with slide count in the last slide of the last page.
  // It continues past final slide.
  const handleNavigate = ({ keyCode }) => {
    if (isPrev(keyCode)) {
      if (currentSlide === 0 && prev) {
        router.push(`${prev}?slide=0&step=0`);
      } else if (currentSlide >= 0) {
        if (currentStep > 0) {
          router.push(
            `${router.pathname}?slide=${currentSlide}&step=${currentStep - 1}`
          );
        } else {
          const prevSlide = currentSlide === 0 ? 0 : currentSlide - 1;
          router.push(`${router.pathname}?slide=${prevSlide}`);
          // TODO: Work on a way to return to last slide of last page (not needed for my purposes right now)
        }
      }
    }

    if (isNext(keyCode)) {
      if (currentSlide === slideCount && currentStep === stepCount && next) {
        router.push(`${next}?slide=0&step=0`);
      } else if (currentSlide <= slideCount) {
        if (currentStep < stepCount) {
          router.push(
            `${router.pathname}?slide=${currentSlide}&step=${currentStep + 1}`
          );
        } else {
          router.push(`${router.pathname}?slide=${currentSlide + 1}&step=0`);
        }
      }
    }
  };

  useEventListener("keydown", handleNavigate);
}
