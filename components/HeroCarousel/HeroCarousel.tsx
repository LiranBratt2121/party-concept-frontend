
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import * as S from './HeroCarousel.styles';
import { heroSlides } from '@/lib/data';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  return (
    <S.CarouselWrapper>
      <S.Button onClick={prevSlide} position="left">
        &gt;
      </S.Button>
      {heroSlides.map((slide, index) => (
        <S.Slide key={slide.id} isActive={index === currentSlide}>
          <Image src={slide.imageUrl} alt={slide.alt} layout="fill" />
        </S.Slide>
      ))}
      <S.Button onClick={nextSlide} position="right">
        &lt;
      </S.Button>
      <S.DotsContainer>
        {heroSlides.map((_, index) => (
          <S.Dot
            key={index}
            isActive={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </S.DotsContainer>
    </S.CarouselWrapper>
  );
};

export default HeroCarousel;
