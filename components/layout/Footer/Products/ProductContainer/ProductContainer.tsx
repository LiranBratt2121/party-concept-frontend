import React from 'react'
import { ProductWrapper, ProductImage, TextContainer, ProductName, ProductPrice } from './ProductContainer.styles'
import { Product } from '@/types/product';
import Image from "next/image";

interface ProductContainerProps {
    product: Product;
}

const ProductContainer = ({ product }: ProductContainerProps) => {
    return (
        <ProductWrapper>
            <ProductImage>
                <Image
                    src={product.headImageUrl}
                    alt={product.name}
                    width={60}
                    height={60}
                />
            </ProductImage>

            <TextContainer>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.priceShekel}</ProductPrice>
            </TextContainer>
        </ProductWrapper>
    )
}

export default ProductContainer;