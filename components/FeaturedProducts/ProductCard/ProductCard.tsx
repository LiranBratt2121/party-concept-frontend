"use client";

import React from 'react';
import Image from 'next/image';
import * as S from './ProductCard.styles';
import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();

  const handleImageClick = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <S.CardWrapper>
      <S.ImageWrapper onClick={handleImageClick}>
        <Image src={product.imageUrl} alt={product.name} layout="fill"/>
      </S.ImageWrapper>
      <S.InfoWrapper>
        <S.ProductName>{product.name}</S.ProductName>
        <S.ProductPrice>{product.priceShekel.toFixed(2)}</S.ProductPrice>
        <S.AddToCartButton onClick={() => alert("WIP")}>הוספה לסל</S.AddToCartButton>
      </S.InfoWrapper>
    </S.CardWrapper>
  );
};

export default ProductCard;
