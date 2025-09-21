"use client";

import React, { ReactNode, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import * as S from "./Carousel.styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselProps {
  children: ReactNode[];
  slidesPerView?: number;
  breakpoints?: Record<string, any>;
  grouped?: boolean;
  auto?: boolean;
  autoSpeed?: number
}

const Carousel = ({
  children,
  slidesPerView = 4,
  breakpoints,
  grouped = false,
  auto = false,
  autoSpeed = 3000,
}: CarouselProps) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: slidesPerView,
      spacing: 16,
    },
    breakpoints: breakpoints || {
      "(max-width: 500px)": { slides: { perView: 1, spacing: 8 } },
      "(max-width: 768px)": { slides: { perView: 2, spacing: 12 } },
      "(max-width: 1024px)": { slides: { perView: 3, spacing: 12 } },
    },
  });

  useEffect(() => {
    if (!auto || !instanceRef.current) {
        return;
    }

    const slider = instanceRef.current;

    const interval = setInterval(() => {
      const perView = (slider.options.slides as { perView?: number })?.perView ?? 1;
      const nextIndex = (slider.track.details.rel + (grouped ? perView : 1)) % slider.track.details.slides.length;
      slider.moveToIdx(nextIndex);
    }, autoSpeed);

    return () => clearInterval(interval);
  }, [auto, autoSpeed, grouped]);

  const handlePrev = () => {
    if (!instanceRef.current) {
        return;
    }
    
    const perView = (instanceRef.current.options.slides as { perView?: number })?.perView ?? 1;

    if (grouped) {
      instanceRef.current.moveToIdx(Math.max(instanceRef.current.track.details.rel - perView, 0));
    } else {
      instanceRef.current.prev();
    }
  };

  const handleNext = () => {
    if (!instanceRef.current) {
        return;
    }

    const perView = (instanceRef.current.options.slides as { perView?: number })?.perView ?? 1;

    if (grouped) {
      instanceRef.current.moveToIdx(
        Math.min(
          instanceRef.current.track.details.rel + perView,
          instanceRef.current.track.details.slides.length - perView
        )
      );
    } else {
      instanceRef.current.next();
    }
  };

  return (
    <S.Wrapper>
      {!auto && (
        <>
          <S.ArrowButton position="left" onClick={handlePrev}>
            <FaChevronLeft />
          </S.ArrowButton>

          <S.ArrowButton position="right" onClick={handleNext}>
            <FaChevronRight />
          </S.ArrowButton>
        </>
      )}

      <S.CarouselViewport ref={sliderRef} className="keen-slider">
        {children.map((child, idx) => (
          <div key={idx} className="keen-slider__slide">
            {child}
          </div>
        ))}
      </S.CarouselViewport>
    </S.Wrapper>
  );
};

export default Carousel;
