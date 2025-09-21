"use client";

import React from 'react';
import Image from 'next/image';
import * as S from './CategoryCard.styles';
import { useRouter } from "next/navigation";

interface CategoryCardProps {
  name: string;
  imageUrl: string;
}

const CategoryCard = ({ name, imageUrl }: CategoryCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`catagory/${name}`);
  };

  return (
    <S.CardWrapper onClick={handleClick}>
      <Image src={imageUrl} alt={name} layout="fill" />
      <S.Overlay>
        <S.CategoryName>{name}</S.CategoryName>
      </S.Overlay>
    </S.CardWrapper>
  );
};

export default CategoryCard;