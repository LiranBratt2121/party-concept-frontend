"use client";

import React from "react";
import { Section } from "../Shared/Section.styles";
import CatagoriesSliderCard from "./CatagoriesSliderCard/CatagoriesSliderCard";
import { featuredCategories } from "@/lib/data";
import Carousel from "../Shared/Carousel/Carousel";

const CatagoriesSlider = () => {
  return (
    <Section>
      <Carousel grouped slidesPerView={5}>
        {featuredCategories.map((catagory) => (
          <CatagoriesSliderCard key={catagory.name} catagory={catagory} />
        ))}
      </Carousel>
    </Section>
  );
};

export default CatagoriesSlider;
