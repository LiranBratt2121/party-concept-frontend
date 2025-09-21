"use client";

import React from 'react';
import Image from 'next/image';
import * as S from './CatagoriesSliderCard.styles'
import { useRouter } from "next/navigation";
import { Catagory } from '@/types/catagory';

interface CatagoriesSliderCardProps {
    catagory: Catagory
}

const CatagoriesSliderCard = ({ catagory }: CatagoriesSliderCardProps) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`catagory/${catagory.name}`);
    };

    return (
        <S.CardWrapper onClick={handleClick}>
            <S.ImageWrapper>
                <Image src={catagory.imageUrl} alt={catagory.name} layout="fill" />
            </S.ImageWrapper>
            <S.Overlay>
                <S.CategoryName>{catagory.name}</S.CategoryName>
            </S.Overlay>
        </S.CardWrapper>
    );
};

export default CatagoriesSliderCard;