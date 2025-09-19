import React from 'react'
import { ProductContainerWrapper } from "./ProductDisplay.styles";
import { Product } from '@/types/product';
import ProductContainer from './ProductContainer/ProductContainer';

interface ProductDisplayProps {
    products: Product[];
}

const ProductDisplayProps = ({ products }: ProductDisplayProps) => {
    const productsSliced = products.slice(0, 3);

    return (
        <ProductContainerWrapper>
            {
                productsSliced.map((product) => (
                    <ProductContainer  key={product.id} product={product}/>
                 ))
            }
        </ProductContainerWrapper >
    )
}

export default ProductDisplayProps;