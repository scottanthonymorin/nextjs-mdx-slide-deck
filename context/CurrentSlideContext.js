import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const CurrentSlideContext = createContext();

export function CurrentSlideProvider({ children }) {
  const [slideCount, setSlideCount] = useState(0);
  const [stepCount, setStepCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const slide = searchParams.get("slide");
    const step = searchParams.get("step");

    if (slide) {
      setCurrentSlide(parseInt(slide, 10));
      setCurrentStep(step ? parseInt(step, 10) : 0);
    } else {
      router.push(`${router.pathname}?slide=0&step=0`);
    }
  }, [router, searchParams]);

  return (
    <CurrentSlideContext.Provider
      value={{
        currentSlide,
        currentStep,
        slideCount,
        stepCount,
        setSlideCount,
        setStepCount,
      }}
    >
      {children}
    </CurrentSlideContext.Provider>
  );
}

export const useCurrentSlide = () => useContext(CurrentSlideContext);
